// Single source of truth for Ease Quran business facts and policies.
// Every page, FAQ and schema should read these values instead of typing them in.
// Confirmed by the academy on 26 Sept 2026 (see Website Strategy/02-decisions-and-business-rules.md).

export const business = {
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  email: "info@easequran.com",
  whatsappNumber: "923195657389",
  whatsappDisplay: "+92 319 5657389",

  // Experience and team. No teacher or student counts are published.
  experience: "7+ years",
  teachersBasedIn: "Pakistan",

  // Scheduling
  classDays: "7 days a week",
  platform: "Zoom",
  replyTime: "within a few hours",

  // Free trial
  trialMinutes: 30,

  // Policies
  classNoticeHours: 4,
  stopNoticeDays: 7,
  paymentMethods: ["bank transfer", "Remitly", "credit or debit card"],
} as const;

export const WHATSAPP_URL = `https://wa.me/${business.whatsappNumber}`;

export function whatsappLink(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

// "bank transfer, Remitly, or credit or debit card"
export const paymentMethodsText = (() => {
  const m = business.paymentMethods;
  return `${m.slice(0, -1).join(", ")}, or ${m[m.length - 1]}`;
})();

// Stable @id so every page can reference the one organization entity.
export const ORG_ID = `${business.url}/#organization`;

// Primary call to action, used on every page.
export const PRIMARY_CTA = "Book Your Free Trial";
