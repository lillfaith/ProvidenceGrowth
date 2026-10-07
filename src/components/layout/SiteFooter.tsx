import Link from 'next/link';
import { brand, footer, nav } from '@/content/site';
import { Container } from '@/components/ui/Container';
import { Icon, type IconName } from '@/components/ui/Icon';
import { Logo } from './Logo';

const SOCIAL_LABELS: Record<keyof typeof brand.social, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
  tiktok: 'TikTok',
};

export function SiteFooter({ showNav = true }: { showNav?: boolean }) {
  const year = new Date().getFullYear();
  const years = brand.foundedYear < year ? `${brand.foundedYear}–${year}` : `${year}`;
  const socials = (Object.keys(brand.social) as (keyof typeof brand.social)[]).filter((key) => brand.social[key]);
  const { email, phone, serviceArea } = brand.contact;

  return (
    // Bottom padding leaves room for the mobile sticky CTA bar.
    <footer className="border-t border-line bg-canvas pb-28 pt-14 md:pb-12">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="rounded-lg">
              <Logo />
            </Link>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{brand.tagline}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16">
            {showNav ? (
              <nav aria-label="Footer">
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Explore</h2>
                <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
                  {nav.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-ink-soft transition-colors hover:text-accent">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Contact</h2>
              <ul className="mt-4 space-y-2.5 text-[0.9375rem] text-ink-soft">
                {email ? (
                  <li>
                    <a href={`mailto:${email}`} className="transition-colors hover:text-accent">
                      {email}
                    </a>
                  </li>
                ) : null}
                {phone ? (
                  <li>
                    <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="transition-colors hover:text-accent">
                      {phone}
                    </a>
                  </li>
                ) : null}
                {serviceArea ? <li className="text-muted">{serviceArea}</li> : null}
              </ul>
              {socials.length ? (
                <ul className="mt-5 flex gap-2" aria-label="Social media">
                  {socials.map((key) => (
                    <li key={key}>
                      <a
                        href={brand.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${brand.name} on ${SOCIAL_LABELS[key]}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
                      >
                        <Icon name={key as IconName} className="h-[1.125rem] w-[1.125rem]" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {years} {brand.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footer.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
