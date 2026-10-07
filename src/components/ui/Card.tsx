import type { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string; as?: 'div' | 'article' | 'li' };

/** The rounded, softly shadowed surface used across the site. */
export function Card({ children, className = '', as: Tag = 'div' }: Props) {
  return (
    <Tag className={`rounded-3xl border border-line bg-surface shadow-soft ${className}`}>{children}</Tag>
  );
}
