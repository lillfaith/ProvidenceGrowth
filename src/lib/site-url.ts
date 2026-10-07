import { seo } from '@/content/site';

/** Absolute site origin, from NEXT_PUBLIC_SITE_URL or the content fallback. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || seo.defaultSiteUrl).replace(/\/$/, '');
