import Image from 'next/image';
import { brand, caseStudy, founder, type CaseStudyMedia } from '@/content/site';
import { Icon, type IconName } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const KIND_ICON: Record<CaseStudyMedia['kind'], IconName> = {
  photo: 'photo',
  social: 'phone',
  website: 'browser',
  video: 'video',
  document: 'chart',
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
    <figure
      className={`group relative overflow-hidden rounded-3xl border border-line bg-surface shadow-soft ${
        item.href ? 'transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-lift' : ''
      } ${className}`}
    >
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
        <div className={`absolute inset-0 ${item.fit === 'contain' ? 'bg-sand p-4 sm:p-6' : ''}`}>
          <div className="relative h-full w-full">
            <Image
              src={item.src}
              alt={item.alt ?? item.label}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={item.fit === 'contain' ? 'object-contain drop-shadow-[0_8px_20px_rgb(27_27_25/0.18)]' : 'object-cover'}
            />
          </div>
        </div>
      ) : (
        // Placeholder until real media is added in src/content/site.ts.
        <div className="frame-hatch absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-canvas to-sand p-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface text-muted">
            <Icon name={KIND_ICON[item.kind]} className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold text-ink-soft">{item.label}</span>
          {item.href ? (
            <span className="inline-flex items-center gap-1 whitespace-nowrap text-[0.8125rem] font-semibold text-accent">
              Visit the live site
              <Icon name="arrowRight" className="h-3.5 w-3.5 -rotate-45" strokeWidth={2} />
            </span>
          ) : null}
          {SHOW_EDIT_HINTS ? (
            <span className="hidden text-xs text-muted sm:block">Add media in src/content/site.ts → caseStudy.media</span>
          ) : null}
        </div>
      )}
      {item.href ? (
        // Stretched link: the whole frame opens the live site.
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 rounded-3xl"
          aria-label={`${item.label}: visit the live site (opens in a new tab)`}
        />
      ) : null}
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
                {metric.note ? <dd className="order-3 mt-2 text-sm leading-snug text-muted">{metric.note}</dd> : null}
              </div>
            ))}
          </dl>
          <dl className="mt-4 grid grid-cols-2 divide-line overflow-hidden rounded-2xl border border-line bg-surface sm:grid-cols-4 sm:divide-x">
            {caseStudy.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col px-5 py-4">
                <dt className="order-2 mt-1 text-[0.8125rem] leading-snug text-muted">{stat.label}</dt>
                <dd className="order-1 font-display text-2xl font-semibold tabular-nums tracking-[-0.03em] text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted">{caseStudy.context}</p>
        </Reveal>
      </div>

      {caseStudy.website.url ? (
        <Reveal className="mt-10">
          <a
            href={caseStudy.website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex max-w-full items-center gap-4 rounded-2xl border border-line-strong bg-surface py-3 pl-3 pr-5 shadow-soft transition-colors hover:border-accent"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon name="browser" className="h-5 w-5" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="font-semibold text-ink group-hover:text-accent">{caseStudy.website.label}</span>
              <span className="truncate text-sm text-muted">
                {caseStudy.website.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </span>
            </span>
            <Icon
              name="arrowRight"
              className="h-4 w-4 shrink-0 -rotate-45 text-accent transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Reveal>
      ) : null}

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

      <div className="mt-16">
        <Reveal className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{caseStudy.insightsTitle}</h3>
          <p className="max-w-md leading-relaxed text-muted sm:text-right">{caseStudy.insightsIntro}</p>
        </Reveal>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {caseStudy.insights.map((insight, index) => (
            <Reveal as="li" key={insight.title} delay={index * 80}>
              <div className="h-full rounded-3xl border border-line bg-surface p-7 shadow-soft">
                <span className="font-display text-sm font-semibold tabular-nums text-accent">0{index + 1}</span>
                <h4 className="mt-3 font-display text-lg leading-snug font-semibold tracking-[-0.015em]">{insight.title}</h4>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{insight.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

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

      <FounderCard />
    </Section>
  );
}

function FounderCard() {
  const linkedin = brand.social.linkedin;
  return (
    <Reveal className="mt-16">
      <div className="grid gap-8 rounded-[2rem] border border-line bg-sand p-7 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-12">
        {founder.photo ? (
          <Image
            src={founder.photo}
            alt={founder.name}
            width={112}
            height={112}
            className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-24 w-24 items-center justify-center rounded-full bg-accent font-display text-3xl font-semibold tracking-[-0.03em] text-canvas sm:h-28 sm:w-28"
          >
            {founder.initials}
          </span>
        )}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{founder.eyebrow}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{founder.name}</h3>
          <p className="mt-1 text-[0.9375rem] text-muted">
            {founder.role} · {founder.location}
          </p>
          <p className="mt-5 leading-relaxed text-ink-soft">{founder.bio}</p>
        </div>
        <div className="lg:w-72">
          <ul className="space-y-4">
            {founder.credentials.map((credential) => (
              <li key={credential.title} className="border-l-2 border-accent/30 pl-4">
                <p className="font-semibold leading-snug text-ink">{credential.title}</p>
                <p className="mt-0.5 text-sm leading-snug text-muted">{credential.detail}</p>
              </li>
            ))}
          </ul>
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-accent hover:text-accent-strong"
            >
              <Icon name="linkedin" className="h-[1.125rem] w-[1.125rem]" />
              {founder.name} on LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
