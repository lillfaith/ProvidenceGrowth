import { resolveProvider } from './providers';
import type { LeadFields, LeadPayload } from './types';
import { normalizeLead } from './validate';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];

function readUtm(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

/** The single entry point the form calls. Returns the provider id for analytics. */
export async function submitLead(fields: LeadFields): Promise<string> {
  const payload: LeadPayload = {
    ...normalizeLead(fields),
    source: 'growth-audit-form',
    pageUrl: window.location.href,
    submittedAt: new Date().toISOString(),
    utm: readUtm(),
  };
  const provider = resolveProvider();
  await provider.submit(payload);
  return provider.id;
}
