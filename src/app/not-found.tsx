import type { Metadata } from 'next';
import Link from 'next/link';
import { brand, cta } from '@/content/site';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <LegalPage title="This page doesn’t exist.">
      <p>The link may be old or mistyped. Everything about {brand.name} is on the home page.</p>
      <p className="flex flex-wrap gap-3 pt-2">
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full bg-accent px-6 font-semibold text-white! no-underline! hover:bg-accent-strong"
        >
          Back to home
        </Link>
        <Link
          href={`/${cta.href}`}
          className="inline-flex h-12 items-center rounded-full border border-line-strong bg-surface px-6 font-semibold text-ink! no-underline! hover:border-accent"
        >
          {cta.primary}
        </Link>
      </p>
    </LegalPage>
  );
}
