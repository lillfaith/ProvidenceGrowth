import { describe, expect, it } from 'vitest';
import { validateField, validateLead } from './validate';

const valid = {
  name: 'Jordan Smith',
  businessName: 'Smith Plumbing',
  website: '',
  phone: '(555) 555-0123',
  email: 'jordan@smithplumbing.com',
};

describe('lead validation', () => {
  it('accepts a complete lead with no website', () => {
    expect(validateLead(valid)).toEqual({});
  });

  it('requires name, business, phone and email', () => {
    const errors = validateLead({ name: '', businessName: '', website: '', phone: '', email: '' });
    expect(Object.keys(errors).sort()).toEqual(['businessName', 'email', 'name', 'phone']);
  });

  it.each(['smithplumbing.com', 'www.smith.co.uk', 'https://smith.com/contact'])('accepts website %s', (site) => {
    expect(validateField('website', site)).toBeUndefined();
  });

  it.each(['smith plumbing', 'http://', 'smith'])('rejects website %s', (site) => {
    expect(validateField('website', site)).toBeDefined();
  });

  it.each(['555-555-0123', '+1 555 555 0123', '5555550123'])('accepts phone %s', (phone) => {
    expect(validateField('phone', phone)).toBeUndefined();
  });

  it.each(['555-0123', '25555550123'])('rejects phone %s', (phone) => {
    expect(validateField('phone', phone)).toBeDefined();
  });

  it('rejects a malformed email', () => {
    expect(validateField('email', 'jordan@smith')).toBeDefined();
  });
});
