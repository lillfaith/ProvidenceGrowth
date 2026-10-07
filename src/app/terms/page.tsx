import type { Metadata } from 'next';
import { brand, pricing } from '@/content/site';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Terms',
  description: `Terms for using the ${brand.name} website and requesting a free growth audit.`,
  alternates: { canonical: '/terms' },
};

// Review this page with your own advisor before launch.
export default function TermsPage() {
  const email = brand.contact.email;
  return (
    <LegalPage title="Terms" updated="October 2026">
      <p>
        These terms cover your use of this website and the free growth audit offered on it. Ongoing services are
        governed by a separate written agreement signed before any work begins.
      </p>
      <h2>The free audit</h2>
      <p>
        The growth audit is free and creates no obligation on either side. It reflects our professional opinion based
        on publicly visible information about your business at the time we review it.
      </p>
      <h2>Pricing</h2>
      <p>
        {brand.name} is offered at {pricing.price}
        {pricing.period}, billed monthly. {pricing.terms} Final scope and pricing are confirmed in your service
        agreement.
      </p>
      <h2>No guaranteed results</h2>
      <p>
        Marketing outcomes depend on many factors outside our control, including your market, competition, pricing and
        service. We do not guarantee any specific number of leads, customers, reviews, views or revenue.
      </p>
      <h2>Website content</h2>
      <p>
        The content on this website is provided for general information. Results described in our case study are
        specific to that business and are not a promise of similar results for yours.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms
        {email ? (
          <>
            ? Email <a href={`mailto:${email}`}>{email}</a>.
          </>
        ) : (
          '? Use the contact details in the footer.'
        )}
      </p>
    </LegalPage>
  );
}
