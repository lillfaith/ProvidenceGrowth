'use client';

import { useId, useRef, useState, type FormEvent } from 'react';
import { audit, brand } from '@/content/site';
import { trackEvent } from '@/lib/analytics';
import { submitLead } from '@/lib/leads/submit';
import type { LeadField, LeadFields } from '@/lib/leads/types';
import { validateField, validateLead, type LeadErrors } from '@/lib/leads/validate';
import { Icon } from '@/components/ui/Icon';

const EMPTY: LeadFields = { name: '', businessName: '', website: '', phone: '', email: '' };

const FIELD_ORDER: LeadField[] = ['name', 'businessName', 'website', 'phone', 'email'];

const INPUT_TYPE: Record<LeadField, string> = {
  name: 'text',
  businessName: 'text',
  website: 'text',
  phone: 'tel',
  email: 'email',
};

const INPUT_MODE: Partial<Record<LeadField, 'url' | 'tel' | 'email'>> = {
  website: 'url',
  phone: 'tel',
  email: 'email',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function AuditForm() {
  const uid = useId();
  const [values, setValues] = useState<LeadFields>(EMPTY);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [touched, setTouched] = useState<Partial<Record<LeadField, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [honeypot, setHoneypot] = useState('');
  const started = useRef(false);
  const inputs = useRef<Partial<Record<LeadField, HTMLInputElement | null>>>({});
  const successHeading = useRef<HTMLHeadingElement>(null);

  const id = (field: string) => `${uid}-${field}`;

  function update(field: LeadField, value: string) {
    if (!started.current) {
      started.current = true;
      trackEvent({ name: 'audit_form_start' });
    }
    setValues((current) => ({ ...current, [field]: value }));
    // Once a field has been left with an error, re-check it live so the message clears as soon as it's fixed.
    if (touched[field]) setErrors((current) => ({ ...current, [field]: validateField(field, value) }));
  }

  function blur(field: LeadField) {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({ ...current, [field]: validateField(field, values[field]) }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    const found = validateLead(values);
    setErrors(found);
    setTouched({ name: true, businessName: true, website: true, phone: true, email: true });
    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      inputs.current[firstInvalid]?.focus();
      return;
    }

    // Bots fill hidden fields; humans never see this one. Pretend success.
    if (honeypot) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    trackEvent({ name: 'audit_form_submit' });
    try {
      const provider = await submitLead(values);
      trackEvent({ name: 'audit_form_success', provider });
      setStatus('success');
      requestAnimationFrame(() => {
        const heading = successHeading.current;
        if (!heading) return;
        heading.focus({ preventScroll: true });
        // The confirmation is shorter than the form; bring all of it into view below the sticky header.
        heading.closest('[data-success-panel]')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      });
    } catch (error) {
      console.error(error);
      trackEvent({ name: 'audit_form_error', provider: process.env.NEXT_PUBLIC_LEAD_PROVIDER ?? 'demo' });
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <SuccessPanel headingRef={successHeading} firstName={values.name.trim().split(/\s+/)[0] ?? ''} />;
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-labelledby="audit-title"
      className="relative rounded-[2rem] border border-line bg-surface p-6 shadow-lift sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELD_ORDER.map((field) => {
          const config = audit.fields[field];
          const error = touched[field] ? errors[field] : undefined;
          const hint = 'hint' in config ? config.hint : undefined;
          const describedBy = [error ? id(`${field}-error`) : null, hint ? id(`${field}-hint`) : null]
            .filter(Boolean)
            .join(' ');
          const optional = field === 'website';
          return (
            <div key={field} className={field === 'website' ? 'sm:col-span-2' : ''}>
              <label htmlFor={id(field)} className="flex items-baseline justify-between text-sm font-semibold text-ink">
                {config.label}
                {optional ? <span className="text-xs font-normal text-muted">Optional</span> : null}
              </label>
              <input
                ref={(node) => {
                  inputs.current[field] = node;
                }}
                id={id(field)}
                name={field}
                type={INPUT_TYPE[field]}
                inputMode={INPUT_MODE[field]}
                autoComplete={config.autoComplete}
                placeholder={config.placeholder}
                required={!optional}
                aria-required={!optional}
                aria-invalid={error ? true : undefined}
                aria-describedby={describedBy || undefined}
                value={values[field]}
                onChange={(event) => update(field, event.target.value)}
                onBlur={() => blur(field)}
                className={`mt-2 block h-12 w-full rounded-xl border bg-canvas px-4 text-base text-ink placeholder:text-muted/60 transition-[border-color,box-shadow,background-color] focus:bg-surface focus:outline-none focus:ring-4 ${
                  error
                    ? 'border-red-700/60 focus:border-red-700 focus:ring-red-700/10'
                    : 'border-line-strong/80 focus:border-accent focus:ring-accent/10'
                }`}
              />
              {hint && !error ? (
                <p id={id(`${field}-hint`)} className="mt-1.5 text-xs text-muted">
                  {hint}
                </p>
              ) : null}
              {error ? (
                <p id={id(`${field}-error`)} className="mt-1.5 text-[0.8125rem] font-medium text-red-800">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}

        {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={id('company-url')}>Leave this field empty</label>
          <input
            id={id('company-url')}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>
      </div>

      {status === 'error' ? (
        <p role="alert" className="mt-6 rounded-xl border border-red-800/20 bg-red-50 px-4 py-3 text-sm text-red-900">
          {audit.errorGeneric}
          {brand.contact.email ? (
            <>
              {' '}
              <a className="font-semibold underline" href={`mailto:${brand.contact.email}`}>
                {brand.contact.email}
              </a>
            </>
          ) : null}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-white shadow-[0_10px_24px_-12px_rgb(31_92_70/0.7)] transition-[background-color,transform] hover:bg-accent-strong active:scale-[0.99] disabled:cursor-wait disabled:opacity-80"
      >
        {status === 'submitting' ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
            {audit.submitting}
          </>
        ) : (
          <>
            {audit.submit}
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-[0.8125rem] text-muted">{audit.reassurance}</p>
      <p aria-live="polite" className="sr-only">
        {status === 'submitting' ? audit.submitting : ''}
      </p>
    </form>
  );
}

function SuccessPanel({
  headingRef,
  firstName,
}: {
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  firstName: string;
}) {
  const s = audit.success;
  return (
    <div data-success-panel className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-lift">
      <div className="p-8 sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_10px_24px_-12px_rgb(31_92_70/0.8)]">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3
          ref={headingRef}
          tabIndex={-1}
          className="mt-6 text-3xl font-semibold tracking-[-0.03em] focus:outline-none sm:text-4xl"
        >
          {firstName ? `Thanks, ${firstName}. ` : ''}
          {s.headline}
        </h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{s.body}</p>
      </div>

      {brand.schedulingUrl ? (
        <div className="border-t border-line bg-canvas p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{s.stepLabel}</p>
          <h4 className="mt-3 font-display text-xl font-semibold tracking-[-0.02em]">{s.bookingHeadline}</h4>
          <p className="mt-2 max-w-md leading-relaxed text-muted">{s.bookingBody}</p>
          <a
            href={brand.schedulingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent({ name: 'booking_click' })}
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-full border border-line-strong bg-surface px-6 font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name="calendar" className="h-[1.125rem] w-[1.125rem]" />
            {s.bookingCta}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
