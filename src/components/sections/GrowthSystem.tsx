import { system } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Pricing } from './Pricing';

export function GrowthSystem() {
  return (
    <Section id="included" labelledBy="included-title">
      <SectionHeading id="included-title" eyebrow={system.eyebrow} title={system.headline} />

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {system.features.map((feature, index) => (
          <Reveal as="li" key={feature.number} delay={(index % 3) * 70}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-7 shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lift">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon name={feature.icon} className="h-[1.375rem] w-[1.375rem]" />
                </span>
                <span className="font-display text-sm font-semibold tabular-nums tracking-[0.04em] text-muted">
                  {feature.number}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em]">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{feature.body}</p>
            </article>
          </Reveal>
        ))}
      </ol>

      <Pricing />
    </Section>
  );
}
