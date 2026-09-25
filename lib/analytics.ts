// GA4 event helpers. gtag is loaded in app/layout.tsx; it may be missing
// (ad blockers, script not yet loaded), so every call is a safe no-op then.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type LeadFormType = "free_trial" | "contact" | "popup";

// Fire only after the API confirms the lead was sent. No personal data is
// included — GA4 terms forbid sending PII such as names, emails or phones.
export function trackLead(formType: LeadFormType) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "generate_lead", {
    form_type: formType,
    page_path: window.location.pathname,
  });
}
