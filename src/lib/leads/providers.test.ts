import { afterEach, describe, expect, it, vi } from 'vitest';
import { formspreeUrl, resolveProvider } from './providers';
import type { LeadPayload } from './types';

const lead: LeadPayload = {
  name: 'Jordan Smith',
  businessName: 'Smith Plumbing',
  website: 'smithplumbing.com',
  phone: '(555) 555-0123',
  email: 'jordan@smithplumbing.com',
  source: 'growth-audit-form',
  pageUrl: 'https://providencegrowth.com/',
  submittedAt: '2026-10-07T12:00:00.000Z',
  utm: { utm_source: 'sms' },
};

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function setEnv(env: Record<string, string>) {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  for (const [key, value] of Object.entries(env)) vi.stubEnv(key, value);
}

describe('formspreeUrl', () => {
  it.each([
    ['https://formspree.io/f/xyzabcd', 'https://formspree.io/f/xyzabcd'],
    ['https://formspree.io/f/xyzabcd/', 'https://formspree.io/f/xyzabcd'],
    ['xyzabcd', 'https://formspree.io/f/xyzabcd'],
  ])('accepts %s', (input, expected) => {
    expect(formspreeUrl(input)).toBe(expected);
  });

  it.each(['', 'https://evil.example/f/xyz', 'https://formspree.io/xyz', 'xyz abc'])('rejects %s', (input) => {
    expect(formspreeUrl(input)).toBeNull();
  });
});

describe('resolveProvider', () => {
  it('posts the lead to Formspree as JSON with a subject and reply-to', async () => {
    setEnv({ NEXT_PUBLIC_LEAD_PROVIDER: 'formspree', NEXT_PUBLIC_LEAD_ENDPOINT: 'xyzabcd' });
    const fetchMock = vi.fn().mockResolvedValue(new Response('{"ok":true}', { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);

    const provider = resolveProvider();
    expect(provider.id).toBe('formspree');
    await provider.submit(lead);

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(url).toBe('https://formspree.io/f/xyzabcd');
    expect(init.method).toBe('POST');
    expect(init.headers).toMatchObject({ 'Content-Type': 'application/json', Accept: 'application/json' });
    const body = JSON.parse(init.body);
    expect(body).toMatchObject({
      name: 'Jordan Smith',
      businessName: 'Smith Plumbing',
      email: 'jordan@smithplumbing.com',
      _replyto: 'jordan@smithplumbing.com',
      _subject: 'New growth audit request — Smith Plumbing',
      utm: '{"utm_source":"sms"}',
    });
  });

  it('rejects when Formspree answers with an error, so the form shows its error state', async () => {
    setEnv({ NEXT_PUBLIC_LEAD_PROVIDER: 'formspree', NEXT_PUBLIC_LEAD_ENDPOINT: 'xyzabcd' });
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('{}', { status: 422 })));
    await expect(resolveProvider().submit(lead)).rejects.toThrow('HTTP 422');
  });

  it('never fakes success in production when the form is not configured', async () => {
    setEnv({ NODE_ENV: 'production', NEXT_PUBLIC_LEAD_PROVIDER: '', NEXT_PUBLIC_LEAD_ENDPOINT: '' });
    const provider = resolveProvider();
    expect(provider.id).toBe('unconfigured');
    await expect(provider.submit(lead)).rejects.toThrow('not configured');
  });

  it('never fakes success in production when the Formspree address is missing', async () => {
    setEnv({ NODE_ENV: 'production', NEXT_PUBLIC_LEAD_PROVIDER: 'formspree', NEXT_PUBLIC_LEAD_ENDPOINT: '' });
    await expect(resolveProvider().submit(lead)).rejects.toThrow('NEXT_PUBLIC_LEAD_ENDPOINT is empty');
  });

  it('uses demo mode in local development when nothing is set', () => {
    setEnv({ NODE_ENV: 'development', NEXT_PUBLIC_LEAD_PROVIDER: '', NEXT_PUBLIC_LEAD_ENDPOINT: '' });
    expect(resolveProvider().id).toBe('demo');
  });
});
