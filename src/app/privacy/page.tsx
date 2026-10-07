import type { Metadata } from 'next';
import { brand } from '@/content/site';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${brand.name} collects and uses information submitted through this website.`,
  alternates: { canonical: '/privacy' },
};

// Review this page with your own advisor before launch; it describes how this site works out of the box.
export default function PrivacyPage() {
  const email = brand.contact.email;
  return (
    <LegalPage title="Privacy Policy" updated="October 2026">
      <p>
        This policy explains what information {brand.name} collects through this website and how it is used. We keep
        it short because we collect very little.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Audit requests.</strong> When you request a free growth audit you give us your name, business name,
          website, phone number and email address. We use them only to prepare your audit and contact you about it.
        </li>
        <li>
          <strong>Basic analytics.</strong> If enabled, Google Analytics and the Meta Pixel record anonymous usage such
          as pages viewed and buttons clicked, using cookies set by those providers.
        </li>
      </ul>
      <h2>How we use it</h2>
      <p>
        To review your online presence, send you your audit, and follow up about our services. We do not sell or rent
        your information. We share it only with the service providers that help us run this website and our business
        (for example, form handling, email and scheduling tools), and only for those purposes.
      </p>
      <h2>Your choices</h2>
      <p>
        You can ask us to see, correct or delete the information you submitted, or to stop contacting you, at any time
        {email ? (
          <>
            {' '}
            by emailing <a href={`mailto:${email}`}>{email}</a>
          </>
        ) : null}
        . You can block or delete analytics cookies in your browser settings.
      </p>
      <h2>Changes</h2>
      <p>If this policy changes, the updated version will be posted on this page with a new date.</p>
    </LegalPage>
  );
}
