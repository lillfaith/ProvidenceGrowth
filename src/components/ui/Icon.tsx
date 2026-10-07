import type { SVGProps } from 'react';

/** Hand-drawn 24px stroke icon set — no icon library dependency. */
const PATHS = {
  phone: <><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
  users: <><circle cx="9" cy="8" r="3.25" /><path d="M3 19.5c.6-3.2 3-5 6-5s5.4 1.8 6 5" /><path d="M16 5.2a3.25 3.25 0 0 1 0 5.6M18 14.8c1.6.7 2.6 2.3 3 4.7" /></>,
  browser: <><rect x="2.5" y="4" width="19" height="16" rx="2.5" /><path d="M2.5 8.5h19" /><path d="M6 6.25h.01M8.5 6.25h.01" /><path d="M7 13h6M7 16h4" /></>,
  star: <path d="m12 3.5 2.55 5.3 5.8.75-4.25 4 1.07 5.75L12 16.5l-5.17 2.8 1.07-5.75-4.25-4 5.8-.75z" />,
  message: <path d="M20.5 12c0 4.14-3.8 7.5-8.5 7.5-1.25 0-2.44-.24-3.5-.67L4 20l1.13-3.4A7.03 7.03 0 0 1 3.5 12c0-4.14 3.8-7.5 8.5-7.5s8.5 3.36 8.5 7.5Z" />,
  trend: <><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  video: <><rect x="2.5" y="5.5" width="13.5" height="13" rx="2.5" /><path d="m16 10.5 5.5-3v9l-5.5-3" /></>,
  pin: <><path d="M12 21s-7-5.6-7-11.5a7 7 0 1 1 14 0C19 15.4 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  wrench: <path d="M14.7 6.3a4 4 0 0 0 5.4 4.9l.4.4-8.9 8.9a2.1 2.1 0 0 1-3-3l8.9-8.9.4.4ZM14.7 6.3l2.6-2.6a4.5 4.5 0 0 1 3 3l-2.6 2.6" />,
  chart: <><path d="M3.5 20.5h17" /><path d="M6.5 16.5v-4M11 16.5v-8M15.5 16.5v-6M20 16.5V5.5" /></>,
  fan: <><circle cx="12" cy="12" r="1.75" /><path d="M12 10.25C11 6.5 12.5 3.5 15 3.5c2 0 2.5 2.5.5 4.5M13.75 12c3.75-1 6.75.5 6.75 3 0 2-2.5 2.5-4.5.5M12 13.75c1 3.75-.5 6.75-3 6.75-2 0-2.5-2.5-.5-4.5M10.25 12C6.5 13 3.5 11.5 3.5 9c0-2 2.5-2.5 4.5-.5" /></>,
  roof: <><path d="m2.5 12 9.5-8 9.5 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></>,
  drop: <path d="M12 3.5s-6 6.4-6 10.6a6 6 0 0 0 12 0C18 9.9 12 3.5 12 3.5Z" />,
  hammer: <><path d="m13 9.5-8.6 8.6a1.8 1.8 0 0 0 2.5 2.5l8.6-8.6" /><path d="m12 6.5 3-3 6 6-3 3-1-1-2 2-4-4 2-2Z" /></>,
  leaf: <><path d="M5 19c0-8.5 5-14 15-14 0 10-5.5 15-14 15" /><path d="M5 19c3-4 6-6.5 9.5-8" /></>,
  bolt: <path d="M13.5 2.5 5 13.5h6.5l-1 8 8.5-11h-6.5z" />,
  car: <><path d="M4 16.5V12l2-5h12l2 5v4.5" /><rect x="3" y="12" width="18" height="5.5" rx="1.5" /><path d="M6.5 17.5V20M17.5 17.5V20M7 14.75h.01M17 14.75h.01" /></>,
  sparkle: <><path d="M12 3.5 13.8 10 20.5 12l-6.7 2-1.8 6.5-1.8-6.5L3.5 12l6.7-2z" /><path d="M19 3.5v3M17.5 5h3" /></>,
  tree: <><path d="M12 21v-5" /><path d="M12 3 6.5 10h2.5L5.5 15h13L15 10h2.5z" /></>,
  blocks: <><rect x="3.5" y="12.5" width="8" height="8" rx="1" /><rect x="12.5" y="12.5" width="8" height="8" rx="1" /><rect x="8" y="3.5" width="8" height="8" rx="1" /></>,
  fence: <><path d="M5 20.5V6l2-2.5L9 6v14.5M15 20.5V6l2-2.5L19 6v14.5" /><path d="M3 10h18M3 16h18" /></>,
  plus: <><circle cx="12" cy="12" r="8.5" /><path d="M12 8.5v7M8.5 12h7" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  minus: <path d="M6 12h12" />,
  arrowRight: <><path d="M4.5 12h15" /><path d="m13.5 6 6 6-6 6" /></>,
  arrowDown: <><path d="M12 4.5v15" /><path d="m6 13.5 6 6 6-6" /></>,
  play: <path d="M8 5.5v13l10.5-6.5z" />,
  menu: <path d="M4 7.5h16M4 12h16M4 16.5h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  calendar: <><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  photo: <><rect x="3" y="4.5" width="18" height="15" rx="2.5" /><circle cx="9" cy="10" r="1.75" /><path d="m21 16-5-5-9 8.5" /></>,
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20Z" />,
  qr: <><rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1" /><rect x="14" y="3.5" width="6.5" height="6.5" rx="1" /><rect x="3.5" y="14" width="6.5" height="6.5" rx="1" /><path d="M14 14h2.5v2.5H14zM18 18h2.5v2.5H18zM18 14h2.5M14 18v2.5" /></>,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17 7h.01" /></>,
  facebook: <path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V9a.5.5 0 0 1 .5-.5Z" />,
  linkedin: <><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M8 10.5V16M8 7.75h.01M11.5 16v-5.5M11.5 13c0-1.5 1-2.5 2.5-2.5s2 1 2 2.5V16" /></>,
  youtube: <><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="m10.5 9.5 4.5 2.5-4.5 2.5z" /></>,
  tiktok: <path d="M14 3.5v11a3.5 3.5 0 1 1-3.5-3.5M14 3.5c.4 2.6 2.2 4.3 5 4.5" />,
} as const;

export type IconName = keyof typeof PATHS;

type Props = SVGProps<SVGSVGElement> & { name: IconName; title?: string };

export function Icon({ name, title, strokeWidth = 1.75, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {PATHS[name]}
    </svg>
  );
}
