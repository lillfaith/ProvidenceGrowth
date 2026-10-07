import { faq } from '@/content/site';
import { Accordion } from '@/components/ui/Accordion';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Faq() {
  return (
    <Section id="faq" tone="sand" labelledBy="faq-title">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.headline} className="lg:sticky lg:top-28 lg:self-start" />
        <Reveal delay={80}>
          <Accordion items={faq.items.map((item) => ({ question: item.q, answer: item.a }))} />
        </Reveal>
      </div>
    </Section>
  );
}
