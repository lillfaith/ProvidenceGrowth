import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Home-screen icon for iOS, drawn from the same mark as icon.svg. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#1f5c46' }}>
        <svg width="180" height="180" viewBox="0 0 64 64">
          <path d="M16 46 Q19 24 38 20" stroke="#faf8f4" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <circle cx="47.5" cy="18.5" r="4.5" fill="#c9ddd1" />
        </svg>
      </div>
    ),
    size,
  );
}
