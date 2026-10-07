import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  invert?: boolean;
  className?: string;
};

/** Eyebrow + h2 + optional lead paragraph, shared by every section. */
export function SectionHeading({ id, eyebrow, title, lead, invert = false, className = '' }: Props) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.16em] ${
            invert ? 'text-accent-tint' : 'text-accent'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-[2rem] leading-[1.08] font-semibold tracking-[-0.03em] sm:text-[2.75rem] lg:text-5xl"
      >
        {title}
      </h2>
      {lead ? (
        <p className={`mt-5 text-lg leading-relaxed ${invert ? 'text-canvas/75' : 'text-muted'}`}>{lead}</p>
      ) : null}
    </Reveal>
  );
}
