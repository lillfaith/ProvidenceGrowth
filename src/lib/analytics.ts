/**
 * Conversion event hooks. Every CTA click and form submission goes through
 * `trackEvent`, which forwards to whichever tools are installed:
 *   - Google Analytics 4 (gtag)      — set NEXT_PUBLIC_GA_ID
 *   - Meta Pixel (fbq)               — set NEXT_PUBLIC_META_PIXEL_ID
 *   - Google Tag Manager / dataLayer — pushed regardless, harmless if unused
 * Add any other tool (LinkedIn, TikTok, a CRM's tracker) in one place: here.
 */

export type ConversionEvent =
  | { name: 'cta_click'; location: string; label: string }
  | { name: 'audit_form_start' }
  | { name: 'audit_form_submit' }
  | { name: 'audit_form_success'; provider: string }
  | { name: 'audit_form_error'; provider: string }
  | { name: 'booking_click' };

type Gtag = (command: 'event', name: string, params?: Record<string, unknown>) => void;
type Fbq = (command: 'track' | 'trackCustom', name: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    fbq?: Fbq;
    dataLayer?: Record<string, unknown>[];
  }
}

/** GA4 recommended event names, so the lead shows up as a key event without remapping. */
const GA_NAME: Partial<Record<ConversionEvent['name'], string>> = {
  audit_form_success: 'generate_lead',
};

/** Meta standard events; everything else is sent as a custom event. */
const META_STANDARD: Partial<Record<ConversionEvent['name'], string>> = {
  audit_form_success: 'Lead',
  booking_click: 'Schedule',
};

export function trackEvent(event: ConversionEvent): void {
  if (typeof window === 'undefined') return;
  const { name, ...params } = event;

  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: name, ...params });

    window.gtag?.('event', GA_NAME[name] ?? name, params);

    const standard = META_STANDARD[name];
    if (standard) window.fbq?.('track', standard, params);
    else window.fbq?.('trackCustom', name, params);
  } catch {
    // Analytics must never break the page.
  }

  if (process.env.NODE_ENV === 'development') {
    console.info('[analytics]', name, params);
  }
}
