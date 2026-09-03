// Single source of truth for all Ease Quran pricing.
// Update numbers here — the pricing page (and anything importing this file) derives from it.

export interface Plan {
  id: string;
  name: string;
  classesPerWeek: number;
  classesPerMonth: number;
  price30: number; // 30-minute monthly price, USD
  price60: number; // 60-minute monthly price, USD (1.8x price30, intentionally not double)
  weekendPriority: number; // flat monthly add-on, USD, only when ALL classes are Sat/Sun
  popular?: boolean;
  forWho: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "foundation",
    name: "Foundation",
    classesPerWeek: 2,
    classesPerMonth: 8,
    price30: 40,
    price60: 72,
    weekendPriority: 6,
    forWho: "For complete beginners taking their first step",
    features: [
      "One-on-one live sessions",
      "Certified teacher",
      "Flexible scheduling",
      "Progress tracking",
      "Free trial class included",
    ],
  },
  {
    id: "steady",
    name: "Steady",
    classesPerWeek: 3,
    classesPerMonth: 12,
    price30: 55,
    price60: 99,
    weekendPriority: 8,
    popular: true,
    forWho: "For serious students committed to consistent growth",
    features: [
      "One-on-one live sessions",
      "Certified teacher",
      "Flexible scheduling",
      "Priority teacher matching",
      "Monthly progress report",
      "Free trial class included",
    ],
  },
  {
    id: "immersion",
    name: "Immersion",
    classesPerWeek: 5,
    classesPerMonth: 20,
    price30: 85,
    price60: 153,
    weekendPriority: 13,
    forWho: "For dedicated learners who want fast, steady progress",
    features: [
      "One-on-one live sessions",
      "Premium certified teacher",
      "Flexible scheduling",
      "Priority support",
      "Weekly progress reports",
      "Parent updates",
      "Free trial class included",
    ],
  },
];

// Additional, lighter-weight plans shown below the three main plans.
export interface AdditionalPlan {
  id: string;
  name: string;
  priceLabel: string; // e.g. "from $130/month" or "$60-$140/month"
  sessionsPerWeek: string;
  duration: string;
  description: string;
  cta: "trial" | "quote";
}

export const additionalPlans: AdditionalPlan[] = [
  {
    id: "hifz-intensive",
    name: "Hifz Intensive",
    priceLabel: "from $130/month",
    sessionsPerWeek: "5 sessions/week",
    duration: "45 minutes",
    description:
      "Senior teacher with weekly memorization tracking, built for students focused on Hifz.",
    cta: "trial",
  },
  {
    id: "custom-schedule",
    name: "Custom Schedule",
    priceLabel: "typically $60-$140/month",
    sessionsPerWeek: "Flexible",
    duration: "Flexible",
    description:
      "Tell us what you need and we'll quote a schedule built around your family's routine.",
    cta: "quote",
  },
];

export const registrationFee = 0;

// Sibling (multi-child) discount, applied automatically per additional child.
export const siblingDiscounts = [
  { child: 1, label: "1st child", discount: 0 },
  { child: 2, label: "2nd child", discount: 0.15 },
  { child: 3, label: "3rd child", discount: 0.25 },
  { child: 4, label: "4th+ child", discount: 0.3 },
];

export function siblingDiscountFor(childNumber: number): number {
  const tier = siblingDiscounts.find((s) => s.child === childNumber);
  if (tier) return tier.discount;
  return siblingDiscounts[siblingDiscounts.length - 1].discount;
}

export function siblingPrice(basePrice: number, childNumber: number): number {
  return Math.round(basePrice * (1 - siblingDiscountFor(childNumber)));
}

// Prepay discounts, applied to the 30-minute monthly price.
export type PrepayTerm = "monthly" | "quarterly" | "semiannual" | "yearly";

export const prepayTerms: { id: PrepayTerm; label: string; months: number; description: string }[] = [
  { id: "monthly", label: "Monthly", months: 1, description: "Full price" },
  { id: "quarterly", label: "Every 3 months", months: 3, description: "5% off" },
  { id: "semiannual", label: "Every 6 months", months: 6, description: "10% off" },
  { id: "yearly", label: "Yearly", months: 12, description: "2 months free (pay for 10)" },
];

export function prepayMonthlyEquivalent(monthlyPrice: number, term: PrepayTerm): number {
  switch (term) {
    case "monthly":
      return monthlyPrice;
    case "quarterly":
      return monthlyPrice * 0.95;
    case "semiannual":
      return monthlyPrice * 0.9;
    case "yearly":
      return (monthlyPrice * 10) / 12;
  }
}

export function prepayTotal(monthlyPrice: number, term: PrepayTerm): number {
  const termInfo = prepayTerms.find((t) => t.id === term)!;
  if (term === "yearly") return monthlyPrice * 10;
  return Math.round(prepayMonthlyEquivalent(monthlyPrice, term) * termInfo.months);
}

export function prepaySavings(monthlyPrice: number, term: PrepayTerm): number {
  const termInfo = prepayTerms.find((t) => t.id === term)!;
  const fullPriceTotal = monthlyPrice * termInfo.months;
  return Math.round(fullPriceTotal - prepayTotal(monthlyPrice, term));
}

// Referral program
export const referral = {
  referrerDiscount: 0.2, // 20% off one month
  refereeDiscount: 0.15, // 15% off first month
};
