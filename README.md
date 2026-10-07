# Local Growth System — website

A one-page lead-generation site for the Local Growth System offer, built with Next.js (App Router),
TypeScript and Tailwind CSS. There is no UI library, animation library or icon package. Every page
is prerendered as static HTML.

```bash
npm install
npm run dev      # http://localhost:3000
npm run verify   # lint + typecheck + tests + production build
```

## Where to edit things

| What | Where |
| --- | --- |
| **All copy**: headlines, cards, FAQ, before/after, industries, CTA labels | `src/content/site.ts` |
| **Price** (`$995`, "Cancel anytime", what's listed) | `pricing` in `src/content/site.ts` (keep `priceValue` in sync for schema markup) |
| **Metrics, case-study media, testimonials** | `caseStudy` in `src/content/site.ts` |
| **Contact info, social links, booking link** | `brand` in `src/content/site.ts` (an empty string hides that item) |
| **Nav links** | `nav` in `src/content/site.ts` |
| **SEO title and description** | `seo` in `src/content/site.ts` |
| **Site URL** (canonical, Open Graph, sitemap) | `NEXT_PUBLIC_SITE_URL` env var |
| **Form backend** | env vars (see below), adapters in `src/lib/leads/providers.ts` |
| **Analytics IDs** | `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID` |
| **Conversion events** | `src/lib/analytics.ts` |
| **Colours and fonts** | tokens in `src/app/globals.css` (`@theme`); fonts in `src/app/layout.tsx` |
| **Section order** | `src/app/page.tsx` |
| **Privacy Policy and Terms** | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` (have them reviewed before launch) |
| **Favicon** | `src/app/icon.svg` |

### Case-study media

Each entry in `caseStudy.media` renders as a frame. To add a photo, put the file in `public/`
(for example `public/case-study/dining-room.jpg`) and add `src: '/case-study/dining-room.jpg'`
and an `alt`. For a video, set `videoSrc` to an MP4, and `src` becomes its poster image. A frame
with no `src` shows a neutral placeholder with its label.

`caseStudy.testimonials` stays hidden while it is empty. Only add quotes the owner actually said.

## Lead form integration

The form validates in the browser and then calls `submitLead()` (`src/lib/leads/submit.ts`).
That function adds the page URL, a timestamp and any UTM, gclid or fbclid parameters, then
passes everything to the provider chosen by `NEXT_PUBLIC_LEAD_PROVIDER`:

| Provider | Set | Good for |
| --- | --- | --- |
| `webhook` | `NEXT_PUBLIC_LEAD_ENDPOINT` | Zapier, Make, n8n, CRM inbound webhooks (HubSpot, GoHighLevel, Pipedrive), your own API |
| `formspree` | `NEXT_PUBLIC_LEAD_ENDPOINT=https://formspree.io/f/<id>` | Email notification with no backend |
| `supabase` | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Storing leads in Postgres |
| `demo` (default) | nothing | Local preview only: logs the lead to the console and sends nothing |

To support another backend, write an adapter in `src/lib/leads/providers.ts` and add it to the
`switch`. Nothing else needs to change. A hidden honeypot field drops most bot submissions.

**Before launch, switch off `demo`.** If a provider is missing its settings, the site logs an
error and falls back to demo mode, which means leads are silently lost.

Supabase table (insert-only for the public key):

```sql
create table public.leads (
  id bigint generated always as identity primary key,
  name text not null,
  business_name text not null,
  website text,
  phone text not null,
  email text not null,
  source text,
  page_url text,
  utm jsonb,
  submitted_at timestamptz default now()
);
alter table public.leads enable row level security;
create policy "anyone can submit a lead" on public.leads for insert to anon with check (true);
-- No select policy: leads can't be read with the public key.
```

After a successful submission the form shows a confirmation. If `brand.schedulingUrl` is set,
the confirmation also offers an optional "Book a Call" step.

## Analytics and conversion events

GA4 and the Meta Pixel load only when their IDs are set. Every tracked action goes through
`trackEvent()` in `src/lib/analytics.ts`, which pushes to `dataLayer`, `gtag` and `fbq`:

| Event | When |
| --- | --- |
| `cta_click` (with `location`, `label`) | Any CTA button (nav, hero, pricing, how-it-works, mobile sticky bar, final CTA) |
| `audit_form_start` | First keystroke in the form |
| `audit_form_submit` | Valid submission sent |
| `audit_form_success` | Accepted by the backend. Sent to GA4 as `generate_lead` and to Meta as `Lead` |
| `audit_form_error` | Backend rejected the submission |
| `booking_click` | "Book a Call" clicked. Sent to Meta as `Schedule` |

## Structure

```
src/
  app/            layout (fonts, metadata, analytics), page, privacy, terms,
                  icon.svg, opengraph-image, robots, sitemap, globals.css
  content/site.ts ← all editable content
  components/
    ui/           CtaButton, Card, Section, SectionHeading, Accordion, Reveal, Icon, Container
    layout/       SiteHeader, SiteFooter, MobileCtaBar, AnalyticsScripts, StructuredData, Logo
    sections/     Hero, HeroVisual, Problem, GrowthSystem, Pricing, BeforeAfter, CaseStudy,
                  Positioning, HowItWorks, Industries, AuditSection, AuditForm, Faq, FinalCta
    legal/        LegalPage
  lib/
    analytics.ts  conversion event hooks
    leads/        types, validation (+ tests), provider adapters, submit
```

Structured data: `ProfessionalService` (with the monthly offer) and `FAQPage` JSON-LD, built
from the content file.

## Deploying

Vercel: import the repository, set **Root Directory** to `local-growth-system` and add the env
vars. Netlify and Cloudflare Pages work the same way. To deploy a plain folder of HTML, uncomment
`output: 'export'` in `next.config.ts` and upload the generated `out/` directory.
