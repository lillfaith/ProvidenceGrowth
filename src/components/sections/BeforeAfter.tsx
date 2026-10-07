import type { CSSProperties } from 'react';
import { beforeAfter } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

/**
 * Split comparison. When it scrolls into view the "before" side quietly
 * desaturates and the "after" list ticks in item by item — one movement, once.
 */
export function BeforeAfter() {
  const { before, after } = beforeAfter;
  return (
    <Section id="before-after" tone="sand" labelledBy="before-after-title">
      <SectionHeading id="before-after-title" eyebrow={beforeAfter.eyebrow} title={beforeAfter.headline} />

      <Reveal className="relative mt-14 grid gap-4 md:grid-cols-2 md:gap-0">
        <div className="fade-dim rounded-3xl border border-line bg-canvas p-8 sm:p-10 md:rounded-r-none md:border-r-0">
          <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            <span className="h-2 w-2 rounded-full bg-line-strong" aria-hidden="true" />
            {before.label}
          </h3>
          <ul className="mt-8 space-y-5">
            {before.items.map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg text-ink-soft">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted">
                  <Icon name="minus" className="h-3.5 w-3.5" strokeWidth={2.25} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* The hinge between the two halves. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-accent shadow-float md:flex"
        >
          <Icon name="arrowRight" className="h-5 w-5" strokeWidth={2} />
        </div>
        <div aria-hidden="true" className="-my-1 flex justify-center text-accent md:hidden">
          <Icon name="arrowDown" className="h-5 w-5" strokeWidth={2} />
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-accent-strong p-8 text-canvas shadow-lift sm:p-10 md:rounded-l-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_100%_0%,rgb(94_154_130/0.35),transparent_65%)]"
          />
          <h3 className="relative flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-tint">
            <span className="h-2 w-2 rounded-full bg-accent-tint" aria-hidden="true" />
            {after.label}
          </h3>
          <ul className="relative mt-8 space-y-5">
            {after.items.map((item, index) => (
              <li
                key={item}
                className="tick-in flex items-center gap-4 text-lg font-medium"
                style={{ '--tick-delay': `${250 + index * 110}ms` } as CSSProperties}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-canvas text-accent-strong">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
