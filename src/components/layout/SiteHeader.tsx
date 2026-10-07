'use client';

import { useEffect, useState } from 'react';
import { brand, nav } from '@/content/site';
import { CtaButton } from '@/components/ui/CtaButton';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { Logo } from './Logo';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        solid
          ? 'border-b border-line/80 bg-canvas/85 shadow-[0_1px_0_rgb(27_27_25/0.02)] backdrop-blur-md'
          : 'border-b border-transparent bg-canvas/0'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
        <a href="#top" className="rounded-lg" aria-label={`${brand.name} — back to top`}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.9375rem] font-medium text-ink-soft transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <CtaButton location="nav" size="md" arrow={false} />
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-canvas lg:hidden"
      >
        <Container className="pb-6 pt-2">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-line">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 text-lg font-medium tracking-[-0.01em]"
                  >
                    {link.label}
                    <Icon name="arrowRight" className="h-4 w-4 text-muted" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <CtaButton location="mobile_menu" className="mt-4 w-full" onClick={() => setOpen(false)} />
        </Container>
      </div>
    </header>
  );
}
