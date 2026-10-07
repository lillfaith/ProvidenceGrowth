'use client';

import { useEffect, useState } from 'react';
import { cta, mobileBar } from '@/content/site';
import { CtaButton } from '@/components/ui/CtaButton';

/**
 * Sticky bottom CTA on phones. Appears once the visitor scrolls past the hero's
 * own buttons and steps aside while the audit form itself is on screen.
 */
export function MobileCtaBar() {
  const [pastHero, setPastHero] = useState(false);
  const [atForm, setAtForm] = useState(false);

  useEffect(() => {
    const heroActions = document.getElementById('hero-actions');
    const form = document.getElementById(cta.href.slice(1));
    const finalCta = document.getElementById('final-cta');

    const observers: IntersectionObserver[] = [];

    if (heroActions) {
      const heroObserver = new IntersectionObserver(([entry]) => {
        if (!entry) return;
        // Only "past" when the hero buttons have scrolled off the TOP of the screen.
        setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      });
      heroObserver.observe(heroActions);
      observers.push(heroObserver);
    }

    const visibleTargets = new Set<Element>();
    const formObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleTargets.add(entry.target);
        else visibleTargets.delete(entry.target);
      }
      setAtForm(visibleTargets.size > 0);
    });
    if (form) formObserver.observe(form);
    if (finalCta) formObserver.observe(finalCta);
    observers.push(formObserver);

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const shown = pastHero && !atForm;

  return (
    <div
      aria-hidden={!shown}
      inert={!shown}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/92 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 ease-out md:hidden ${
        shown ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3">
        <p className="min-w-0 flex-1 text-[0.8125rem] leading-snug text-muted">{mobileBar.text}</p>
        <CtaButton location="mobile_sticky" size="md" className="shrink-0">
          {mobileBar.button}
        </CtaButton>
      </div>
    </div>
  );
}
