import { hero } from '@/content/site';
import { Icon } from '@/components/ui/Icon';

const v = hero.visual;

function Stars({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }, (_, index) => (
        <Icon key={index} name="star" className={className} fill="currentColor" strokeWidth={1} />
      ))}
    </span>
  );
}

/** Short-form video, drawn as a phone screen with a simple job-site illustration. */
function VideoCard() {
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] bg-night shadow-float ring-1 ring-black/5">
      <svg viewBox="0 0 180 320" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="hv-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2c5b49" />
            <stop offset="0.6" stopColor="#1d3d31" />
            <stop offset="1" stopColor="#141a16" />
          </linearGradient>
        </defs>
        <rect width="180" height="320" fill="url(#hv-sky)" />
        <circle cx="132" cy="70" r="26" fill="#e9d3a6" opacity="0.18" />
        {/* house */}
        <path d="M30 196 L90 146 L150 196 V250 H30 Z" fill="#f3efe7" opacity="0.94" />
        <path d="M22 200 L90 142 L158 200" stroke="#c9ddd1" strokeWidth="6" fill="none" strokeLinejoin="round" />
        <rect x="80" y="210" width="20" height="40" rx="2" fill="#1f5c46" />
        <rect x="44" y="206" width="22" height="18" rx="2" fill="#c9ddd1" />
        <rect x="114" y="206" width="22" height="18" rx="2" fill="#c9ddd1" />
        {/* outdoor unit */}
        <rect x="128" y="232" width="30" height="22" rx="3" fill="#d6cfc2" />
        <circle cx="143" cy="243" r="7" fill="none" stroke="#615e57" strokeWidth="1.5" />
        <rect x="0" y="250" width="180" height="70" fill="#141a16" />
      </svg>

      <div className="absolute inset-x-0 top-0 flex items-center gap-2 p-3.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-canvas text-[0.625rem] font-bold text-accent">YB</span>
        <span className="text-[0.6875rem] font-semibold text-white/90">@yourbusiness</span>
      </div>

      <span className="absolute left-1/2 top-[38%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
        <Icon name="play" className="ml-0.5 h-5 w-5" fill="currentColor" strokeWidth={0} />
      </span>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3.5 pt-12">
        <p className="hidden text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-accent-tint sm:block">{v.videoTag}</p>
        <p className="text-[0.75rem] leading-snug font-semibold text-white sm:mt-1 sm:text-[0.8125rem]">{v.videoCaption}</p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-2/3 rounded-full bg-white" />
        </div>
      </div>

      <div className="absolute right-3 top-[52%] flex flex-col items-center gap-3 text-white/90">
        <Icon name="heart" className="h-5 w-5" />
        <Icon name="message" className="h-5 w-5" />
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4 shadow-float">
      <p className="flex items-center gap-1.5 text-[0.6875rem] font-medium text-muted">
        <Icon name="pin" className="h-3.5 w-3.5 text-accent" />
        Google Business Profile
      </p>
      <p className="mt-2 font-display text-[0.9375rem] font-semibold tracking-[-0.01em]">{v.businessName}</p>
      <div className="mt-1 flex items-center gap-2">
        <Stars className="h-3 w-3" />
        <span className="hidden text-[0.6875rem] text-muted sm:inline">{v.category}</span>
      </div>
      <p className="mt-1 text-[0.6875rem] font-medium text-accent">{v.hours}</p>
      <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {(['Call', 'Website', 'Directions'] as const).map((label) => (
          <span key={label} className="rounded-full last:hidden sm:last:block bg-accent-soft py-1.5 text-center text-[0.625rem] font-semibold text-accent-strong">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function ReviewCard() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4 shadow-float">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent-soft px-2 py-1 text-[0.625rem] font-semibold text-accent-strong">
          <Icon name="qr" className="h-3 w-3" />
          QR review
        </span>
        <Stars className="h-3 w-3" />
      </div>
      <p className="mt-2.5 text-[0.8125rem] leading-snug font-medium text-ink">“{v.reviewQuote}”</p>
      <p className="mt-1.5 text-[0.6875rem] text-muted">New Google review</p>
    </div>
  );
}

function InquiryCard() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4 shadow-float">
      <p className="flex items-center gap-2 text-[0.6875rem] font-semibold text-ink">
        <span className="relative flex h-2 w-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
        </span>
        {v.inquiryTitle}
      </p>
      <p className="mt-1 text-[0.75rem] text-muted">{v.inquiryDetail}</p>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-canvas px-2.5 py-2 text-[0.6875rem] font-medium text-ink-soft">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-white">
          <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
        </span>
        {v.followUp}
      </div>
    </div>
  );
}

function WebsiteCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-float">
      <div className="flex items-center gap-1 border-b border-line bg-canvas px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
        <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
        <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
        <span className="ml-2 h-2.5 flex-1 rounded-full bg-sand" />
      </div>
      <div className="p-3.5">
        <span className="block h-2.5 w-4/5 rounded-full bg-ink/80" />
        <span className="mt-1.5 block h-2.5 w-3/5 rounded-full bg-ink/80" />
        <span className="mt-2.5 block h-1.5 w-full rounded-full bg-line" />
        <span className="mt-1 block h-1.5 w-5/6 rounded-full bg-line" />
        <span className="mt-3 inline-flex rounded-full bg-accent px-3 py-1.5 text-[0.625rem] font-semibold text-white">
          {v.siteCta}
        </span>
      </div>
    </div>
  );
}

/**
 * The hero's composition: the pieces of a working local growth system — content,
 * Google presence, reviews, inquiries with follow-up, and a website that converts.
 * Decorative only; the same information is in the text beside it.
 */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] select-none">
      <div className="absolute -inset-3 -z-10 rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-surface via-sand/70 to-accent-soft/60 sm:-inset-8" />
      <div className="grid grid-cols-[0.92fr_1fr] gap-3 sm:gap-4">
        <div className="flex flex-col gap-3 pt-8 sm:gap-4 sm:pt-12">
          <VideoCard />
          <WebsiteCard />
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          <ProfileCard />
          <ReviewCard />
          <InquiryCard />
        </div>
      </div>
    </div>
  );
}
