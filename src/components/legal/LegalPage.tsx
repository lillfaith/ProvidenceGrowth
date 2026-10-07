import Link from 'next/link';
import type { ReactNode } from 'react';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Logo } from '@/components/layout/Logo';
import { Container } from '@/components/ui/Container';

export function LegalPage({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b border-line">
        <Container className="flex h-16 items-center justify-between sm:h-[4.5rem]">
          <Link href="/" className="rounded-lg">
            <Logo />
          </Link>
          <Link href="/" className="text-[0.9375rem] font-medium text-ink-soft hover:text-accent">
            ← Back to site
          </Link>
        </Container>
      </header>
      <main id="main">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">{title}</h1>
            {updated ? <p className="mt-3 text-sm text-muted">Last updated {updated}</p> : null}
            <div className="mt-10 space-y-6 leading-relaxed text-ink-soft [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {children}
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter showNav={false} />
    </>
  );
}
