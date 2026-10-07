import { problem } from '@/content/site';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Problem() {
  return (
    <Section id="problem" tone="sand" labelledBy="problem-title">
      <SectionHeading id="problem-title" eyebrow={problem.eyebrow} title={problem.headline} />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {problem.cards.map((card, index) => (
          <Reveal as="li" key={card.title} delay={(index % 3) * 70}>
            <Card className="h-full p-6 sm:p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sand text-ink-soft">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg leading-snug sm:mt-6 font-semibold tracking-[-0.015em]">{card.title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted">{card.body}</p>
            </Card>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-20 text-center sm:mt-24">
        <p className="font-display text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
          <span className="relative inline-block">
            {problem.closing}
            <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[0.12em] w-full rounded-full bg-accent/80 sm:-bottom-2" />
          </span>
        </p>
      </Reveal>
    </Section>
  );
}
