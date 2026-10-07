import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Home-screen icon for iOS, drawn from the same mark as icon.svg. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#1f5c46' }}>
        <svg width="180" height="180" viewBox="0 0 64 64">
          <path d="M18 44V22M18 44h12" stroke="#faf8f4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M34 44l6-9 5 5 7-13" stroke="#c9ddd1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    ),
    size,
  );
}
