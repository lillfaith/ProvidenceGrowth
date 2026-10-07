import { pricing } from '@/content/site';
import { CtaButton } from '@/components/ui/CtaButton';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';

export function Pricing() {
  return (
    <Reveal className="mt-16 sm:mt-20">
      <div
        id="pricing"
        aria-labelledby="pricing-title"
        role="region"
        className="relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-lift"
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative border-b border-line p-8 sm:p-12 lg:border-b-0 lg:border-r">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_0%_0%,rgb(232_241_236/0.9),transparent_70%)]"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{pricing.eyebrow}</p>
              <h3 id="pricing-title" className="mt-4 text-xl font-semibold tracking-[-0.02em]">
                {pricing.label}
              </h3>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl font-semibold tracking-[-0.045em] sm:text-7xl">{pricing.price}</span>
                <span className="text-lg font-medium text-muted">{pricing.period}</span>
              </p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent-strong">
                <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                {pricing.terms}
              </p>
              <p className="mt-6 max-w-sm leading-relaxed text-muted">{pricing.summary}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-8 sm:p-12">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {pricing.includes.map((item) => (
                <li key={item} className="flex gap-3 leading-snug">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaButton location="pricing">{pricing.cta}</CtaButton>
              <p className="text-sm text-muted">{pricing.footnote}</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
