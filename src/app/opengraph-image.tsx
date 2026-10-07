import { ImageResponse } from 'next/og';
import { brand, hero, pricing } from '@/content/site';

export const alt = `${brand.name} — ${hero.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Loads Inter Tight from Google Fonts as TTF (the API serves TTF when no browser
 * user-agent is sent). Falls back to the built-in font if the request fails, so a
 * build without network access still succeeds.
 */
async function loadFont(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Inter+Tight:wght@${weight}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

/** Social share card, generated at build time from site content. */
export default async function OpengraphImage() {
  const [semibold, medium] = await Promise.all([loadFont(600), loadFont(500)]);
  const fonts = [
    ...(semibold ? [{ name: 'Inter Tight', data: semibold, weight: 600 as const, style: 'normal' as const }] : []),
    ...(medium ? [{ name: 'Inter Tight', data: medium, weight: 500 as const, style: 'normal' as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #faf8f4 0%, #faf8f4 55%, #e8f1ec 100%)',
          color: '#1b1b19',
          fontFamily: fonts.length ? 'Inter Tight' : 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg width="52" height="52" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="16" fill="#1f5c46" />
            <path d="M18 44V22M18 44h12" stroke="#faf8f4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M34 44l6-9 5 5 7-13" stroke="#c9ddd1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>{brand.name}</div>
        </div>
        <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.04, letterSpacing: -2.5, maxWidth: 1000 }}>
          {hero.headline}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 28, color: '#615e57', fontWeight: 500 }}>
          <div
            style={{
              display: 'flex',
              background: '#1f5c46',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: 999,
              fontWeight: 600,
            }}
          >
            Free Growth Audit
          </div>
          <div style={{ display: 'flex' }}>
            {pricing.price}
            {pricing.period} · {pricing.terms}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
