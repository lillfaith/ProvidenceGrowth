import type { LeadProvider } from './types';

/**
 * Lead-form backends. Each one is a small adapter with the same shape, chosen by
 * NEXT_PUBLIC_LEAD_PROVIDER (see .env.example). To add another backend — HubSpot
 * forms API, GoHighLevel, Airtable, your own server — write one more adapter here
 * and add it to `PROVIDERS`. Nothing else in the app needs to change.
 */

async function ensureOk(response: Response): Promise<void> {
  if (!response.ok) {
    throw new Error(`Lead submission failed with HTTP ${response.status}`);
  }
}

/** Generic JSON webhook: Zapier, Make, n8n, a CRM inbound webhook, or your own API. */
function webhook(endpoint: string): LeadProvider {
  return {
    id: 'webhook',
    async submit(payload) {
      await ensureOk(
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        }),
      );
    },
  };
}

/** Formspree: emails each submission to you and keeps a dashboard of leads. */
function formspree(endpoint: string): LeadProvider {
  return {
    id: 'formspree',
    async submit(payload) {
      await ensureOk(
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            ...payload,
            utm: JSON.stringify(payload.utm),
            _subject: `New growth audit request — ${payload.businessName}`,
            _replyto: payload.email,
          }),
        }),
      );
    },
  };
}

/** Supabase: inserts into a table via the REST API. No SDK needed. */
function supabase(url: string, anonKey: string, table: string): LeadProvider {
  return {
    id: 'supabase',
    async submit(payload) {
      await ensureOk(
        await fetch(`${url.replace(/\/$/, '')}/rest/v1/${encodeURIComponent(table)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: anonKey,
            Authorization: `Bearer ${anonKey}`,
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({
            name: payload.name,
            business_name: payload.businessName,
            website: payload.website || null,
            phone: payload.phone,
            email: payload.email,
            source: payload.source,
            page_url: payload.pageUrl,
            utm: payload.utm,
            submitted_at: payload.submittedAt,
          }),
        }),
      );
    },
  };
}

/** Local preview only: logs the lead and succeeds. */
const demo: LeadProvider = {
  id: 'demo',
  async submit(payload) {
    console.warn(
      '[lead form] Demo mode — this lead was NOT sent anywhere. Set NEXT_PUBLIC_LEAD_PROVIDER to go live.',
      payload,
    );
    await new Promise((resolve) => setTimeout(resolve, 700));
  },
};

/**
 * NEXT_PUBLIC_* values must be read with literal property access so Next can
 * inline them into the browser bundle.
 */
export function resolveProvider(): LeadProvider {
  const kind = (process.env.NEXT_PUBLIC_LEAD_PROVIDER ?? 'demo').trim().toLowerCase();
  const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT?.trim() ?? '';

  switch (kind) {
    case 'webhook':
      if (endpoint) return webhook(endpoint);
      break;
    case 'formspree':
      if (endpoint) return formspree(endpoint);
      break;
    case 'supabase': {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? '';
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? '';
      const table = process.env.NEXT_PUBLIC_SUPABASE_LEADS_TABLE?.trim() || 'leads';
      if (url && key) return supabase(url, key, table);
      break;
    }
    case 'demo':
      return demo;
  }

  console.error(
    `[lead form] Provider "${kind}" is missing its configuration (see .env.example). Falling back to demo mode.`,
  );
  return demo;
}
