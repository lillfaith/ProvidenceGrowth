import { positioning } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Positioning() {
  return (
    <Section id="approach" tone="night" labelledBy="approach-title">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading id="approach-title" eyebrow={positioning.eyebrow} title={positioning.headline} invert />
          <Reveal delay={80} className="mt-8">
            <p className="text-lg text-canvas/70">{positioning.agencyIntro}</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {positioning.agencyDeliverables.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-canvas/15 px-4 py-2 text-[0.9375rem] text-canvas/60 line-through decoration-canvas/40"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg leading-relaxed text-canvas/90">{positioning.approach}</p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ul className="divide-y divide-canvas/10 overflow-hidden rounded-3xl border border-canvas/10 bg-night-soft">
            <li className="hidden grid-cols-[1fr_auto_1fr] gap-4 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-canvas/60 sm:grid">
              <span>Where customers are lost</span>
              <span className="w-5" />
              <span>What we fix</span>
            </li>
            {positioning.examples.map((example) => (
              <li
                key={example.problem}
                className="grid gap-2 px-7 py-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4"
              >
                <span className="text-canvas/75">{example.problem}</span>
                <Icon name="arrowRight" className="h-5 w-5 rotate-90 text-accent-tint sm:rotate-0" strokeWidth={2} />
                <span className="font-display text-lg font-semibold tracking-[-0.015em] text-canvas">{example.fix}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-20 border-t border-canvas/10 pt-14 sm:mt-24">
        <p className="max-w-4xl font-display text-4xl leading-[1.05] font-semibold tracking-[-0.035em] sm:text-6xl">
          {positioning.closing}
        </p>
      </Reveal>
    </Section>
  );
}
