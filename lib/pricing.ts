// Single source of truth for all Ease Quran pricing.
// Update numbers here. Every page that mentions a price imports from this file.
// Confirmed by the academy on 26 Sept 2026 (see Website Strategy/05-pricing-audit.md).
//
// Billing model: a plan is a package of classes. The next bill is sent when the
// package's classes are completed, not on a fixed calendar date. A package of
// classes at the plan's weekly pace lasts about a month.

export type ClassLength = 30 | 45 | 60;

export interface Plan {
  id: string;
  name: string;
  classesPerWeek: number;
  classesPerPackage: number;
  price30: number; // price of one package of 30-minute classes, USD
  price60: number; // price of one package of 60-minute classes, USD (1.8x price30)
  label?: string; // neutral guidance label, never a popularity claim
  forWho: string;
}

export const plans: Plan[] = [
  {
    id: "foundation",
    name: "Foundation",
    classesPerWeek: 2,
    classesPerPackage: 8,
    price30: 40,
    price60: 72,
    forWho: "A gentle pace for beginners and busy schedules",
  },
  {
    id: "steady",
    name: "Steady",
    classesPerWeek: 3,
    classesPerPackage: 12,
    price30: 55,
    price60: 99,
    label: "Recommended for steady progress",
    forWho: "Enough practice to build real momentum week to week",
  },
  {
    id: "immersion",
    name: "Immersion",
    classesPerWeek: 5,
    classesPerPackage: 20,
    price30: 85,
    price60: 153,
    forWho: "For learners who want to move quickly",
  },
];

// The same for every plan. Plans differ only in how many classes a week.
export const planIncludes = [
  "One-on-one live classes on Zoom",
  "A qualified teacher matched to the student",
  "Class times arranged around your schedule",
  "Progress updates whenever you ask",
  "Free trial class first",
];

// Each class held on a Saturday or Sunday costs this much extra, by class length.
export const weekendExtraPerClass: Record<ClassLength, number> = {
  30: 2,
  45: 3,
  60: 4,
};

// Hifz Intensive is the only Hifz option.
export const hifzPlan = {
  id: "hifz-intensive",
  name: "Hifz Intensive",
  classesPerWeek: 5,
  classesPerPackage: 20,
  minutes: 45 as ClassLength,
  price: 130,
  description:
    "Five 45-minute classes a week, with new memorization, recent revision and old revision in every class.",
};

export const customPlan = {
  id: "custom-schedule",
  name: "Custom Schedule",
  priceLabel: "Typically $60 to $140",
  description:
    "Tell us the schedule you need and we'll quote a package built around it.",
};

export const registrationFee = 0;

// The lowest price shown anywhere as a starting point.
export const startingPrice = plans[0].price30;
export const startingPriceText = `Plans start at $${startingPrice} for ${plans[0].classesPerPackage} classes`;

// Sibling (multi-child) discount, applied automatically per additional child.
export const siblingDiscounts = [
  { child: 1, label: "1st child", discount: 0 },
  { child: 2, label: "2nd child", discount: 0.15 },
  { child: 3, label: "3rd child", discount: 0.25 },
  { child: 4, label: "4th child and more", discount: 0.3 },
];

export function siblingDiscountFor(childNumber: number): number {
  const tier = siblingDiscounts.find((s) => s.child === childNumber);
  if (tier) return tier.discount;
  return siblingDiscounts[siblingDiscounts.length - 1].discount;
}

export function siblingPrice(basePrice: number, childNumber: number): number {
  return Math.round(basePrice * (1 - siblingDiscountFor(childNumber)));
}

// Prepay discounts: pay for several packages at once.
export type PrepayTerm = "single" | "three" | "six" | "twelve";

export const prepayTerms: { id: PrepayTerm; label: string; packages: number; description: string }[] = [
  { id: "single", label: "One package", packages: 1, description: "Full price" },
  { id: "three", label: "3 packages", packages: 3, description: "5% off" },
  { id: "six", label: "6 packages", packages: 6, description: "10% off" },
  { id: "twelve", label: "12 packages", packages: 12, description: "Pay for 10" },
];

export function prepayPerPackage(packagePrice: number, term: PrepayTerm): number {
  switch (term) {
    case "single":
      return packagePrice;
    case "three":
      return packagePrice * 0.95;
    case "six":
      return packagePrice * 0.9;
    case "twelve":
      return (packagePrice * 10) / 12;
  }
}

export function prepayTotal(packagePrice: number, term: PrepayTerm): number {
  const t = prepayTerms.find((x) => x.id === term)!;
  if (term === "twelve") return packagePrice * 10;
  return Math.round(prepayPerPackage(packagePrice, term) * t.packages);
}

export function prepaySavings(packagePrice: number, term: PrepayTerm): number {
  const t = prepayTerms.find((x) => x.id === term)!;
  return Math.round(packagePrice * t.packages - prepayTotal(packagePrice, term));
}

// Referral program
export const referral = {
  referrerDiscount: 0.2, // 20% off one package
  refereeDiscount: 0.15, // 15% off the first package
};

// All discounts stack, applied one after another (never added together),
// and they apply to weekend extras too.
export function applyDiscounts(price: number, discounts: number[]): number {
  return discounts.reduce((p, d) => p * (1 - d), price);
}
