'use client';

import type { ReactNode } from 'react';
import { cta } from '@/content/site';
import { trackEvent } from '@/lib/analytics';
import { Icon } from './Icon';

type Variant = 'primary' | 'secondary' | 'light' | 'ghost';
type Size = 'md' | 'lg';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-accent text-white shadow-[0_1px_0_rgb(255_255_255/0.15)_inset,0_10px_24px_-12px_rgb(31_92_70/0.7)] hover:bg-accent-strong',
  secondary: 'border border-line-strong bg-surface text-ink hover:border-ink/30 hover:bg-white',
  light: 'bg-canvas text-ink hover:bg-white',
  ghost: 'text-ink hover:text-accent',
};

const SIZES: Record<Size, string> = {
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-14 px-7 text-base',
};

type Props = {
  /** Where on the page this button sits — sent with the click event. */
  location: string;
  children?: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

/**
 * The site's one button. Defaults to the primary "Get a Free Growth Audit" action
 * and records a `cta_click` conversion event on every click.
 */
export function CtaButton({
  location,
  children = cta.primary,
  href = cta.href,
  variant = 'primary',
  size = 'lg',
  arrow = true,
  className = '',
  onClick,
}: Props) {
  const label = typeof children === 'string' ? children : href;
  return (
    <a
      href={href}
      onClick={() => {
        trackEvent({ name: 'cta_click', location, label });
        onClick?.();
      }}
      className={`group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-[-0.01em] transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98] ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      <span>{children}</span>
      {arrow ? (
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      ) : null}
    </a>
  );
}
