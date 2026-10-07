import { audit } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AuditForm } from './AuditForm';

export function AuditSection() {
  return (
    <Section id="audit" labelledBy="audit-title">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:pt-6">
          <SectionHeading id="audit-title" eyebrow={audit.eyebrow} title={audit.headline} lead={audit.copy} />
          <Reveal delay={80}>
            <ul className="mt-9 space-y-4">
              {audit.checklist.map((item) => (
                <li key={item} className="flex items-center gap-3.5 text-[1.0625rem] text-ink-soft">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.75} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <AuditForm />
        </Reveal>
      </div>
    </Section>
  );
}
