import { howItWorks } from '@/content/site';
import { CtaButton } from '@/components/ui/CtaButton';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-title">
      <SectionHeading id="how-title" eyebrow={howItWorks.eyebrow} title={howItWorks.headline} />

      <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
        {/* Connecting rule behind the step numbers on wide screens. */}
        <span aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-line-strong md:block" />
        {howItWorks.steps.map((step, index) => (
          <Reveal as="li" key={step.number} delay={index * 100} className="relative">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-canvas font-display text-sm font-semibold tabular-nums text-accent">
              {step.number}
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em]">{step.title}</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-muted">{step.body}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-14">
        <CtaButton location="how_it_works">{howItWorks.cta}</CtaButton>
      </Reveal>
    </Section>
  );
}
