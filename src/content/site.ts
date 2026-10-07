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
  tagline: 'Practical content systems that turn attention into visits, calls and orders for local service businesses.',
  /** Shown in footer and used in schema markup. Leave a value empty to hide it. */
  contact: {
    email: 'lilliefaithj@gmail.com',
    /** Add a business number here to show it in the footer and schema markup. */
    phone: '',
    /** Where you're based / the area you serve. */
    serviceArea: 'Dawsonville, Georgia',
  },
  /** Leave a URL empty ('') to hide that icon. */
  social: {
    instagram: '',
    facebook: '',
    linkedin: 'https://www.linkedin.com/in/lillianjahr',
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

// ── Founder (shown in the Results section and in schema markup) ─────────────
// Sourced from the founder's portfolio. Add `photo: '/founder.jpg'` (a file in
// /public) to replace the initials with a headshot.

export const founder = {
  name: 'Lillie Jahr',
  role: 'Founder, Arcline Growth',
  initials: 'LJ',
  photo: '',
  location: 'Dawsonville, Georgia',
  eyebrow: 'Who you’ll work with',
  bio: 'Since May 2022 I’ve run marketing for Brookton Catfish School: their TikTok and short-form content, a mobile-first website, digital ordering and promotions. Every project gets the same loop: notice the gap, build the fix, put it in front of real customers, measure what happened, and improve it.',
  credentials: [
    { title: 'Marketing Specialist', detail: 'Brookton Catfish School · May 2022 – present' },
    { title: 'Business Marketing', detail: 'University of North Georgia' },
    { title: 'Designed and launched Plantdex', detail: 'A printed card deck with its own web app' },
  ],
};

// ── SEO ─────────────────────────────────────────────────────────────────────

export const seo = {
  title: 'Arcline Growth — Free Growth Audit for Local Service Businesses',
  description:
    'Your business is better than your online presence makes it look. Arcline Growth handles short-form content, your Google Business Profile, reviews, follow-up and website improvements for established local service businesses. $995/month, cancel anytime.',
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
  kind: 'photo' | 'social' | 'website' | 'video' | 'document';
  label: string;
  /** Path under /public or full URL. Empty = shows a labelled placeholder frame. */
  src?: string;
  alt?: string;
  /** For kind 'video': an MP4 under /public or a hosted URL. `src` becomes the poster. */
  videoSrc?: string;
  /** 'contain' shows the whole image (use for documents and screenshots); default 'cover' fills the frame. */
  fit?: 'cover' | 'contain';
  /** Makes the whole frame a link, e.g. to the live website. Opens in a new tab. */
  href?: string;
};

export type Testimonial = { quote: string; name: string; role: string };

export const caseStudy = {
  eyebrow: 'Results',
  headline: 'I’ve Done This With a Real Local Business.',
  intro:
    'Brookton Catfish School is a local seafood spot that wanted stronger local awareness and a clearer path from finding them online to actually showing up. I built that path: short-form content, a mobile-first website, digital ordering, and tracking of what each post did.',
  businessLabel: 'Brookton Catfish School · Gainesville, Georgia',
  /** The live site built for the case-study business. Leave url empty to hide the link. */
  website: {
    label: 'See the website I built',
    url: 'https://brooktoncatfishschool.netlify.app/',
  },
  /** Headline numbers. Source: TikTok account analytics, 365 days, and the owner-confirmed visit count. */
  metrics: [
    { value: '835.5K', label: 'TikTok post views in 365 days', note: '' },
    {
      value: '200+',
      label: 'Confirmed customer visits from TikTok',
      note: '15+ customers mentioned TikTok at the counter',
    },
  ],
  /** Secondary numbers from the same analytics. */
  stats: [
    { value: '21.7K', label: 'Likes' },
    { value: '9.2K', label: 'Profile views' },
    { value: '7K', label: 'Shares' },
    { value: '2,361', label: 'New followers from tracked posts' },
  ],
  experienceTitle: 'What I did',
  experience: [
    'TikTok & short-form content',
    'Photo & video strategy',
    'Mobile-first website: menu, directions, calls, ordering',
    'DoorDash & digital ordering setup',
    'Promotions',
    'Post performance & customer feedback tracking',
  ],
  insightsTitle: 'What 46 tracked posts showed',
  insightsIntro: 'This is what a monthly report looks like: what happened, why, and what changes next.',
  insights: [
    {
      title: 'Breakouts were people plus food',
      body: 'The four best posts all opened on a busy dining room or line, then showed the food: 147K, 137K, 79K and 57K views.',
    },
    {
      title: 'The average hid the real story',
      body: 'Photo carousels averaged about twice the views of videos, but the typical post did about the same in both (around 4.2K vs 4.1K). The difference came from breakout posts.',
    },
    {
      title: 'People don’t swipe far',
      body: 'Viewers saw about 1.3–3.3 photos per carousel, even on 6–12 photo posts. So the best photos go first and filler slides get cut.',
    },
  ],
  /** Shown as a footnote under the numbers. */
  context:
    'During the same period the restaurant also had a Chamber of Commerce ribbon cutting, Food Truck Friday events and local press coverage. That’s context for the growth, not work I’m claiming.',
  media: [
    { kind: 'photo', label: 'Restaurant photography' },
    {
      kind: 'document',
      label: 'Results summary',
      src: '/case-study/brookton-results-summary.jpg',
      alt: 'One-page summary titled How Content Drove Real Restaurant Visits: 835.5K post views, 9.2K profile views, 21.7K likes, 7K shares, and 200+ confirmed customer visits from TikTok.',
      fit: 'contain',
    },
    { kind: 'video', label: 'Short-form video' },
    {
      kind: 'website',
      label: 'Website & online ordering',
      // Add a screenshot here, e.g. src: '/case-study/brookton-website.jpg'
      href: 'https://brooktoncatfishschool.netlify.app/',
    },
  ] satisfies CaseStudyMedia[] as CaseStudyMedia[],
  testimonials: [] as Testimonial[],
  /* Example (use the owner's exact words):
  testimonials: [
    { quote: 'Exact words from the owner go here.', name: 'Owner Name', role: 'Owner, Brookton Catfish School' },
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
