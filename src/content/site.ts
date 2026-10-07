/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this file to change any text, price, metric, link or list
 *  on the website. Components only read from here; nothing below is duplicated
 *  elsewhere.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Brand, contact & links ──────────────────────────────────────────────────

export const brand = {
  name: 'Arcline Growth',
  /** Short line used in the footer and structured data. */
  tagline: 'Online customer-acquisition systems for established local service businesses.',
  /** Shown in footer and used in schema markup. Leave a value empty to hide it. */
  contact: {
    email: 'hello@yourdomain.com',
    phone: '(555) 555-0123',
    /** City / region you serve, e.g. "Atlanta, GA and surrounding areas". */
    serviceArea: 'Your City, ST and surrounding areas',
  },
  /** Leave a URL empty ('') to hide that icon. */
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    linkedin: 'https://linkedin.com/',
    youtube: '',
    tiktok: '',
  },
  /**
   * Optional step 2 after the audit form: a scheduling page (Calendly, Cal.com,
   * Google Calendar booking page, etc.). Leave empty to hide the booking step.
   */
  schedulingUrl: 'https://calendly.com/your-link/growth-audit-call',
  /** Year the business was founded, used in the footer copyright range. */
  foundedYear: 2026,
};

// ── SEO ─────────────────────────────────────────────────────────────────────

export const seo = {
  title: 'Arcline Growth — Free Growth Audit for Local Service Businesses',
  description:
    'Your business is better than your online presence makes it look. Short-form content, Google Business Profile, reviews, follow-up and website improvements for established local service businesses — $995/month, cancel anytime.',
  /** Fallback when NEXT_PUBLIC_SITE_URL is not set. */
  defaultSiteUrl: 'https://www.example.com',
  keywords: [
    'local business marketing',
    'Google Business Profile optimization',
    'review generation',
    'short-form video for contractors',
    'HVAC marketing',
    'plumbing marketing',
    'roofing marketing',
  ],
};

// ── Primary call to action (used everywhere) ────────────────────────────────

export const cta = {
  primary: 'Get a Free Growth Audit',
  /** Anchor the primary CTA scrolls to. Must match the audit section id. */
  href: '#audit',
};

// ── Navigation ──────────────────────────────────────────────────────────────

export const nav = {
  links: [
    { label: 'Results', href: '#results' },
    { label: 'What’s Included', href: '#included' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Free Audit', href: '#audit' },
  ],
};

// ── 2. Hero ─────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: 'For established local service businesses',
  headline: 'Your Business Is Better Than Your Online Presence Makes It Look.',
  subheadline:
    'We help established local businesses turn weak social media, outdated websites, poor follow-up, and missed reviews into a stronger online presence that brings in more customers.',
  secondaryCta: { label: 'See What’s Included', href: '#included' },
  valueLine: ['Social Content', 'Google', 'Reviews', 'Follow-Up', 'Website Optimization'],
  /** Copy inside the illustrative hero composition. Deliberately generic: it shows the
   *  visitor's own business, not a client, so it carries no numbers or claims. */
  visual: {
    businessName: 'Your Business',
    category: 'Local service business',
    hours: 'Open · Closes 6 PM',
    videoCaption: 'Same-day AC repair, start to finish',
    videoTag: 'New short-form video',
    reviewQuote: 'On time, explained everything, fair price.',
    inquiryTitle: 'New estimate request',
    inquiryDetail: 'Furnace replacement · via website',
    followUp: 'Follow-up text sent',
    siteCta: 'Book a free estimate',
  },
};

// ── 3. Problem ──────────────────────────────────────────────────────────────

export const problem = {
  eyebrow: 'The gap',
  headline: 'You’re already good at what you do. The internet just doesn’t show it.',
  cards: [
    { icon: 'phone', title: 'Your social media rarely gets updated.', body: 'The last post is from months ago, so new customers can’t tell you’re busy, active and good.' },
    { icon: 'users', title: 'Most of your customers still come from word of mouth.', body: 'Referrals are great — but they’re not a system, and they don’t scale when you want to grow.' },
    { icon: 'browser', title: 'Your website looks outdated or doesn’t convert visitors.', body: 'People land, look around, and leave without calling, booking or requesting a quote.' },
    { icon: 'star', title: 'Happy customers rarely leave reviews.', body: 'You do great work every week, but your Google profile only shows a fraction of it.' },
    { icon: 'message', title: 'Leads sometimes don’t get followed up with.', body: 'A missed call or a quote with no follow-up quietly hands the job to someone else.' },
    { icon: 'trend', title: 'Competitors with worse service look bigger online.', body: 'They’re not better than you. They’re just easier to find and easier to trust at a glance.' },
  ],
  closing: 'That’s the gap we fix.',
} as const;

// ── 4. What's included (features) ───────────────────────────────────────────

export const system = {
  eyebrow: 'What’s included',
  headline: 'Everything your local business needs to look active, trustworthy, and worth contacting online.',
  features: [
    {
      number: '01',
      icon: 'video',
      title: 'Social Content',
      body: 'Up to 12 pieces of content per month, including up to 8 short-form videos and 4 graphics/posts, distributed across up to three platforms.',
    },
    {
      number: '02',
      icon: 'pin',
      title: 'Google Presence',
      body: 'Google Business Profile optimization and management, including four Google posts per month.',
    },
    {
      number: '03',
      icon: 'star',
      title: 'Review Growth',
      body: 'A simple NFC/QR review system designed to help turn satisfied customers into Google reviews.',
    },
    {
      number: '04',
      icon: 'message',
      title: 'Lead & Customer Follow-Up',
      body: 'Text/email follow-up for missed leads, former customers, promotions, and reactivation opportunities.',
    },
    {
      number: '05',
      icon: 'wrench',
      title: 'Monthly Growth Improvement',
      body: 'Each month, identify and improve one important weakness in the business’s online customer journey, such as the website, offer, Google profile, social profiles, or conversion flow.',
    },
    {
      number: '06',
      icon: 'chart',
      title: 'Growth Reporting',
      body: 'Monthly reporting showing work completed, performance, customer/lead indicators, lessons learned, and what gets improved next.',
    },
  ],
} as const;

// ── Pricing ─────────────────────────────────────────────────────────────────

export const pricing = {
  eyebrow: 'Pricing',
  label: 'Arcline Growth',
  price: '$995',
  period: '/month',
  /** Plain number used in schema markup. Keep in sync with `price`. */
  priceValue: 995,
  currency: 'USD',
  terms: 'Cancel anytime.',
  summary: 'One monthly fee for content, Google, reviews, follow-up, ongoing improvements and reporting — handled for you.',
  includes: [
    'Up to 12 pieces of content per month',
    'Google Business Profile management',
    'NFC/QR review system',
    'Text & email follow-up',
    'One focused improvement each month',
    'Monthly growth report',
  ],
  cta: 'See If We’re a Fit',
  footnote: 'No long-term contract. Start with a free audit — no obligation.',
};

// ── 5. Before / After ───────────────────────────────────────────────────────

export const beforeAfter = {
  eyebrow: 'Before & after',
  headline: 'What changes when the system is running.',
  before: {
    label: 'Before',
    items: [
      'Inactive social media',
      'Few reviews',
      'Outdated website',
      'No follow-up system',
      'Random posting',
      'No clear idea what marketing is working',
    ],
  },
  after: {
    label: 'After',
    items: [
      'Consistent short-form content',
      'Review-generation system',
      'Optimized Google presence',
      'Clear website CTAs',
      'Customer reactivation',
      'Monthly performance reporting',
    ],
  },
};

// ── 6. Case study / results ─────────────────────────────────────────────────
// Every item here renders automatically. Add `src` to a media item (an image in
// /public, e.g. '/case-study/dining-room.jpg') to replace its placeholder frame.
// Add testimonials as { quote, name, role } — the block stays hidden while empty.

export type CaseStudyMedia = {
  kind: 'photo' | 'social' | 'website' | 'video';
  label: string;
  /** Path under /public or full URL. Empty = shows a labelled placeholder frame. */
  src?: string;
  alt?: string;
  /** For kind 'video': an MP4 under /public or a hosted URL. `src` becomes the poster. */
  videoSrc?: string;
};

export type Testimonial = { quote: string; name: string; role: string };

export const caseStudy = {
  eyebrow: 'Results',
  headline: 'I’ve Done This With a Real Local Business.',
  intro:
    'Before offering this to service businesses, I built the same system for a local restaurant: content, photography, a new website with online ordering, promotions and a steady flow of new customers.',
  businessLabel: 'Case study · Local restaurant',
  metrics: [
    { value: '800K+', label: 'Short-form views' },
    { value: '200+', label: 'Confirmed customers attributed to social content' },
  ],
  experienceTitle: 'What the work covered',
  experience: [
    'Website development',
    'Short-form video',
    'Photography',
    'Online ordering',
    'Promotions',
    'Customer acquisition',
  ],
  media: [
    { kind: 'photo', label: 'Restaurant photography' },
    { kind: 'video', label: 'Short-form video' },
    { kind: 'social', label: 'Social media results' },
    { kind: 'website', label: 'Website & online ordering' },
  ] satisfies CaseStudyMedia[] as CaseStudyMedia[],
  testimonials: [] as Testimonial[],
  /* Example:
  testimonials: [
    { quote: 'Exact words from the owner go here.', name: 'Owner Name', role: 'Owner, Restaurant Name' },
  ],
  */
};

// ── 7. Positioning ──────────────────────────────────────────────────────────

export const positioning = {
  eyebrow: 'A different approach',
  headline: 'This Isn’t a Social Media Package.',
  agencyIntro: 'Most agencies sell deliverables:',
  agencyDeliverables: ['“12 posts.”', '“4 reels.”', '“Google management.”'],
  approach:
    'Arcline Growth starts somewhere else: finding where your business is currently losing potential customers — and fixing that first.',
  examples: [
    { problem: 'Not enough attention', fix: 'Improve content' },
    { problem: 'People visit but don’t contact the business', fix: 'Improve conversion' },
    { problem: 'Customers love the business but don’t leave reviews', fix: 'Improve review generation' },
    { problem: 'Past customers disappear', fix: 'Run customer reactivation' },
  ],
  closing: 'Growth infrastructure, not just Instagram posts.',
};

// ── 8. How it works ─────────────────────────────────────────────────────────

export const howItWorks = {
  eyebrow: 'How it works',
  headline: 'A Simple System Built Around Your Biggest Growth Bottleneck.',
  steps: [
    {
      number: '01',
      title: 'Audit',
      body: 'Review the business’s social media, Google presence, reviews, website, follow-up process, and competitors.',
    },
    {
      number: '02',
      title: 'Build',
      body: 'Fix major weaknesses and establish a consistent online growth system.',
    },
    {
      number: '03',
      title: 'Improve',
      body: 'Track performance, test improvements, and strengthen the system each month.',
    },
  ],
  cta: 'Get Your Free Growth Audit',
};

// ── 9. Industries ───────────────────────────────────────────────────────────

export const industries = {
  eyebrow: 'Who it’s for',
  headline: 'Built for owner-operated local service businesses.',
  copy: 'We work best with established businesses that already provide great service and want their online presence to finally reflect it.',
  list: [
    { name: 'HVAC', icon: 'fan' },
    { name: 'Roofing', icon: 'roof' },
    { name: 'Plumbing', icon: 'drop' },
    { name: 'Remodeling', icon: 'hammer' },
    { name: 'Landscaping', icon: 'leaf' },
    { name: 'Electrical', icon: 'bolt' },
    { name: 'Automotive', icon: 'car' },
    { name: 'Cleaning', icon: 'sparkle' },
    { name: 'Tree Services', icon: 'tree' },
    { name: 'Concrete', icon: 'blocks' },
    { name: 'Fencing', icon: 'fence' },
    { name: 'Other Local Services', icon: 'plus' },
  ],
} as const;

// ── 10. Free growth audit (lead form) ───────────────────────────────────────

export const audit = {
  eyebrow: 'Free growth audit',
  headline: 'Want to know what’s costing you customers online?',
  copy: 'We’ll review your website, Google presence, reviews, and social media and identify the biggest opportunities we see.',
  checklist: [
    'Website & conversion review',
    'Google Business Profile check',
    'Reviews vs. local competitors',
    'Social media & content gaps',
  ],
  reassurance: 'Free, no obligation. We’ll never share your information.',
  fields: {
    name: { label: 'Your name', placeholder: 'Jordan Smith', autoComplete: 'name' },
    businessName: { label: 'Business name', placeholder: 'Smith Plumbing Co.', autoComplete: 'organization' },
    website: { label: 'Website', placeholder: 'smithplumbing.com', hint: 'Leave blank if you don’t have one yet.', autoComplete: 'url' },
    phone: { label: 'Phone', placeholder: '(555) 555-0123', autoComplete: 'tel' },
    email: { label: 'Email', placeholder: 'jordan@smithplumbing.com', autoComplete: 'email' },
  },
  submit: 'Audit My Business',
  submitting: 'Sending…',
  errorGeneric: 'Something went wrong sending your request. Please try again, or email us directly.',
  success: {
    headline: 'Your audit request is in.',
    body: 'We’ll review your online presence and reach out within one business day with what we find.',
    stepLabel: 'Optional next step',
    bookingHeadline: 'Want to walk through it together?',
    bookingBody: 'Pick a time for a short call and we’ll go over your audit live — no pitch deck, just what we found.',
    bookingCta: 'Book a Call',
  },
};

// ── 11. FAQ ─────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: 'FAQ',
  headline: 'Questions owners usually ask.',
  items: [
    {
      q: 'What types of businesses do you work with?',
      a: 'Established, owner-operated local service businesses — HVAC, plumbing, roofing, remodeling, landscaping, electrical, tree service, concrete, fencing, automotive, cleaning, pressure washing and similar trades. The best fit is a business that already does great work and gets most of its customers by word of mouth.',
    },
    {
      q: 'What does the $995 include?',
      a: 'Up to 12 pieces of content per month (up to 8 short-form videos and 4 graphics/posts across up to three platforms), Google Business Profile optimization and management with four Google posts per month, an NFC/QR review system, text and email follow-up for leads and past customers, one focused improvement to your online customer journey each month, and a monthly growth report.',
    },
    {
      q: 'Do I need to sign a long-term contract?',
      a: 'No. It’s month to month and you can cancel anytime.',
    },
    {
      q: 'Do you guarantee a certain number of customers?',
      a: 'No. Specific revenue or customer results are not guaranteed — anyone who promises a fixed number of new customers is guessing. What we do commit to is the work: consistent content, a well-managed Google presence, a working review and follow-up system, a real improvement every month, and honest reporting on what’s moving and what isn’t.',
    },
    {
      q: 'Who creates the content?',
      a: 'We do. We plan, film, edit and publish it, built around your real jobs, team and customers. Some months we’ll ask for a little of your time on site or a few clips from your phone — we’ll keep it simple and make it easy.',
    },
    {
      q: 'How quickly can we start?',
      a: 'Usually within one to two weeks. It starts with the free audit, then a short kickoff call to get access to your accounts and plan the first month.',
    },
    {
      q: 'Do I need an existing website?',
      a: 'No. If you have one, we’ll improve what’s there. If you don’t, we’ll make sure customers have a clear place to learn about you and get in touch as part of building the system.',
    },
    {
      q: 'What happens each month?',
      a: 'Content gets produced and published, your Google profile gets posts and updates, reviews and follow-ups keep running, and we pick one weak point in your customer journey to improve. At the end of the month you get a report: what was done, how it performed, what we learned and what we’ll improve next.',
    },
  ],
};

// ── 12. Final CTA ───────────────────────────────────────────────────────────

export const finalCta = {
  headline: 'Your business already does great work.',
  subheadline: 'Let’s make sure people can tell.',
  button: 'Get My Free Growth Audit',
};

// ── 13. Footer ──────────────────────────────────────────────────────────────

export const footer = {
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

// ── Mobile sticky CTA ───────────────────────────────────────────────────────

export const mobileBar = {
  text: 'Free, no-obligation audit',
  button: 'Get a Free Audit',
};
