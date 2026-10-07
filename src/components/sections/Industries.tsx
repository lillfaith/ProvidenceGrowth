import { industries } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Industries() {
  return (
    <Section id="industries" tone="sand" labelledBy="industries-title">
      <SectionHeading id="industries-title" eyebrow={industries.eyebrow} title={industries.headline} lead={industries.copy} />

      <Reveal as="ul" className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {industries.list.map((industry) => (
          <li
            key={industry.name}
            className="flex min-w-0 items-center gap-3 rounded-2xl border border-line bg-surface px-3.5 py-4 shadow-soft transition-colors hover:border-accent/40 sm:gap-3.5 sm:px-5 sm:py-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon name={industry.icon} className="h-5 w-5" />
            </span>
            <span className="min-w-0 text-[0.9375rem] leading-tight font-semibold tracking-[-0.01em] sm:text-base">{industry.name}</span>
          </li>
        ))}
      </Reveal>
    </Section>
  );
}
