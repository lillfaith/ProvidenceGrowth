import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The site is fully static: every page prerenders and the lead form posts from the
  // browser, so it deploys to Vercel, Netlify, Cloudflare Pages or any static host.
  // To produce a plain folder of HTML instead of a Next server build, uncomment:
  // output: 'export',
};

export default nextConfig;
