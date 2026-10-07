import { brand } from '@/content/site';

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill={invert ? '#faf8f4' : '#1f5c46'} />
        {/* A rising arc ending in a point: the "Arcline" mark. */}
        <path d="M16 46 Q19 24 38 20" stroke={invert ? '#1f5c46' : '#faf8f4'} strokeWidth="5.5" strokeLinecap="round" fill="none" />
        <circle cx="47.5" cy="18.5" r="4.5" fill={invert ? '#5e9a82' : '#c9ddd1'} />
      </svg>
      <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.02em]">{brand.name}</span>
    </span>
  );
}
