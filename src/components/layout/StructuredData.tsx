import { brand, faq, pricing, seo, system } from '@/content/site';
import { SITE_URL } from '@/lib/site-url';

/** ProfessionalService + FAQPage JSON-LD, built entirely from site content. */
export function StructuredData() {
  const sameAs = Object.values(brand.social).filter(Boolean);

  const service = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: brand.name,
    description: seo.description,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    ...(brand.contact.email ? { email: brand.contact.email } : {}),
    ...(brand.contact.phone ? { telephone: brand.contact.phone } : {}),
    ...(brand.contact.serviceArea ? { areaServed: brand.contact.serviceArea } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    priceRange: `${pricing.price}${pricing.period}`,
    makesOffer: {
      '@type': 'Offer',
      name: pricing.label,
      price: pricing.priceValue,
      priceCurrency: pricing.currency,
      description: system.features.map((feature) => feature.title).join(', '),
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output with "<" escaped cannot break out of the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify([service, faqPage]).replace(/</g, '\\u003c') }}
    />
  );
}
