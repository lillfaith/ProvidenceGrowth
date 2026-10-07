import Image from 'next/image';
import { caseStudy, type CaseStudyMedia } from '@/content/site';
import { Icon, type IconName } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const KIND_ICON: Record<CaseStudyMedia['kind'], IconName> = {
  photo: 'photo',
  social: 'phone',
  website: 'browser',
  video: 'video',
};

const SHOW_EDIT_HINTS = process.env.NODE_ENV !== 'production';

/** Layout slot per position: a large lead frame, a tall video frame, two smaller frames. */
const SLOT_CLASSES = [
  'aspect-[4/5] sm:aspect-[4/3] lg:col-span-7 lg:row-span-2 lg:aspect-auto',
  'aspect-[4/5] sm:aspect-[4/3] lg:col-span-5 lg:row-span-2 lg:aspect-auto',
  'aspect-[4/5] sm:aspect-[4/3] lg:col-span-6 lg:aspect-auto',
  'aspect-[4/5] sm:aspect-[4/3] lg:col-span-6 lg:aspect-auto',
];

function MediaFrame({ item, className }: { item: CaseStudyMedia; className: string }) {
  const hasMedia = Boolean(item.src || item.videoSrc);
  return (
    <figure className={`group relative overflow-hidden rounded-3xl border border-line bg-surface shadow-soft ${className}`}>
      {item.kind === 'video' && item.videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={item.videoSrc}
          poster={item.src}
          controls
          playsInline
          preload="none"
          aria-label={item.alt ?? item.label}
        />
      ) : item.src ? (
        <Image
          src={item.src}
          alt={item.alt ?? item.label}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        // Placeholder until real media is added in src/content/site.ts.
        <div className="frame-hatch absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-canvas to-sand p-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface text-muted">
            <Icon name={KIND_ICON[item.kind]} className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold text-ink-soft">{item.label}</span>
          {SHOW_EDIT_HINTS ? (
            <span className="hidden text-xs text-muted sm:block">Add media in src/content/site.ts → caseStudy.media</span>
          ) : null}
        </div>
      )}
      {hasMedia ? (
        <figcaption className="absolute bottom-3 left-3 rounded-full bg-night/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          {item.label}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function CaseStudy() {
  return (
    <Section id="results" labelledBy="results-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
        <SectionHeading
          id="results-title"
          eyebrow={caseStudy.eyebrow}
          title={caseStudy.headline}
          lead={caseStudy.intro}
        />
        <Reveal delay={80}>
          <p className="text-sm font-semibold text-ink-soft">{caseStudy.businessLabel}</p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col rounded-3xl border border-line bg-surface p-7 shadow-soft">
                <dt className="order-2 mt-3 leading-snug text-ink-soft">{metric.label}</dt>
                <dd className="order-1 font-display text-5xl font-semibold tracking-[-0.045em] text-accent sm:text-6xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <h3 className="text-sm font-semibold text-ink-soft">{caseStudy.experienceTitle}</h3>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {caseStudy.experience.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[0.9375rem] font-medium text-ink-soft"
            >
              <Icon name="check" className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      {caseStudy.media.length ? (
        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[12rem] lg:grid-cols-12">
          {caseStudy.media.map((item, index) => (
            <MediaFrame key={`${item.kind}-${index}`} item={item} className={SLOT_CLASSES[index % SLOT_CLASSES.length] ?? ''} />
          ))}
        </Reveal>
      ) : null}

      {caseStudy.testimonials.length ? (
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {caseStudy.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 80}>
              <figure className="h-full rounded-3xl border border-line bg-surface p-8 shadow-soft">
                <blockquote className="font-display text-xl leading-snug font-medium tracking-[-0.015em] sm:text-2xl">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-ink">{testimonial.name}</span>
                  <span className="text-muted"> · {testimonial.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      ) : SHOW_EDIT_HINTS ? (
        <p className="mt-10 rounded-2xl border border-dashed border-line-strong p-5 text-center text-sm text-muted">
          Testimonials appear here once added to <code>caseStudy.testimonials</code> in src/content/site.ts (hidden in
          production while empty).
        </p>
      ) : null}
    </Section>
  );
}
