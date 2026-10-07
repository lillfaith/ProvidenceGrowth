import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import { brand, seo } from '@/content/site';
import { AnalyticsScripts } from '@/components/layout/AnalyticsScripts';
import { SITE_URL } from '@/lib/site-url';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  weight: ['500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: seo.title, template: `%s — ${brand.name}` },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: brand.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: brand.name,
    title: seo.title,
    description: seo.description,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#faf8f4',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before paint so scroll-reveal never hides content without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-canvas"
        >
          Skip to content
        </a>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
