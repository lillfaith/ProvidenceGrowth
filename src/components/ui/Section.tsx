import type { ReactNode } from 'react';
import { Container } from './Container';

type Tone = 'canvas' | 'sand' | 'night';

const TONES: Record<Tone, string> = {
  canvas: 'bg-canvas text-ink',
  sand: 'bg-sand text-ink',
  night: 'bg-night text-canvas',
};

type Props = {
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, tone = 'canvas', labelledBy, className = '', children }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${TONES[tone]} py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
