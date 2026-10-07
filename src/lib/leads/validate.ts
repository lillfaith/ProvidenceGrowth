import type { LeadField, LeadFields } from './types';

export type LeadErrors = Partial<Record<LeadField, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// A bare domain or a full URL: "smithplumbing.com", "www.x.co.uk/page", "https://x.com".
const WEBSITE = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i;

export function digitsOnly(value: string): string {
  return value.replace(/\D/g, '');
}

export function normalizeLead(fields: LeadFields): LeadFields {
  return {
    name: fields.name.trim(),
    businessName: fields.businessName.trim(),
    website: fields.website.trim(),
    phone: fields.phone.trim(),
    email: fields.email.trim().toLowerCase(),
  };
}

export function validateField(field: LeadField, raw: string): string | undefined {
  const value = raw.trim();
  switch (field) {
    case 'name':
      if (!value) return 'Please enter your name.';
      if (value.length < 2) return 'Please enter your full name.';
      return undefined;
    case 'businessName':
      if (!value) return 'Please enter your business name.';
      return undefined;
    case 'website':
      if (!value) return undefined; // optional — not every business has one yet
      return WEBSITE.test(value) ? undefined : 'That doesn’t look like a web address (e.g. yourbusiness.com).';
    case 'phone': {
      if (!value) return 'Please enter a phone number.';
      const digits = digitsOnly(value);
      const ok = digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));
      return ok ? undefined : 'Please enter a 10-digit phone number.';
    }
    case 'email':
      if (!value) return 'Please enter your email.';
      return EMAIL.test(value) ? undefined : 'Please enter a valid email address.';
  }
}

export function validateLead(fields: LeadFields): LeadErrors {
  const errors: LeadErrors = {};
  for (const field of Object.keys(fields) as LeadField[]) {
    const message = validateField(field, fields[field]);
    if (message) errors[field] = message;
  }
  return errors;
}
