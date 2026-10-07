import { brand } from '@/content/site';

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill={invert ? '#faf8f4' : '#1f5c46'} />
        <path
          d="M18 44V22M18 44h12"
          stroke={invert ? '#1f5c46' : '#faf8f4'}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M34 44l6-9 5 5 7-13"
          stroke={invert ? '#5e9a82' : '#c9ddd1'}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.02em]">{brand.name}</span>
    </span>
  );
}
