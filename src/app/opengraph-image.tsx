import { ImageResponse } from 'next/og';
import { brand, hero, pricing } from '@/content/site';

export const alt = `${brand.name} — ${hero.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Social share card, generated at build time from site content. */
export default function OpengraphImage() {
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
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: '#1f5c46',
              display: 'flex',
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>{brand.name}</div>
        </div>
        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
          {hero.headline}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 28, color: '#615e57' }}>
          <div
            style={{
              display: 'flex',
              background: '#1f5c46',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: 999,
              fontWeight: 700,
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
    size,
  );
}
