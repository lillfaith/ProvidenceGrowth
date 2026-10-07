export type LeadFields = {
  name: string;
  businessName: string;
  website: string;
  phone: string;
  email: string;
};

export type LeadField = keyof LeadFields;

/** What every provider receives: the fields plus context useful in a CRM. */
export type LeadPayload = LeadFields & {
  source: string;
  pageUrl: string;
  submittedAt: string;
  utm: Record<string, string>;
};

export type LeadProvider = {
  id: string;
  submit(payload: LeadPayload): Promise<void>;
};
