import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Online Quran Class Pricing Plans | Ease Quran Academy",
  description:
    "Affordable online Quran class pricing. Plans from $40/month. Free first trial class. Wifaq ul Madaris certified teachers. Serving Muslim families in USA.",
  alternates: { canonical: "https://easequran.com/pricing" },
  openGraph: {
    title: "Online Quran Class Pricing Plans | Ease Quran Academy",
    description:
      "Affordable online Quran class pricing. Plans from $40/month. Free first trial class. Wifaq ul Madaris certified teachers. Serving Muslim families in USA.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Quran Class Pricing Plans — Ease Quran Academy" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Quran Classes",
  provider: {
    "@type": "EducationalOrganization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  serviceType: "Online Education",
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Quran Class Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        price: "40",
        priceCurrency: "USD",
        description: "4 classes per month, 30 minutes each. Perfect for beginners.",
        url: "https://easequran.com/pricing",
      },
      {
        "@type": "Offer",
        name: "Basic Plan",
        price: "59",
        priceCurrency: "USD",
        description: "8 classes per month, 30 minutes each. For regular learners.",
        url: "https://easequran.com/pricing",
      },
      {
        "@type": "Offer",
        name: "Popular Plan",
        price: "79",
        priceCurrency: "USD",
        description: "12 classes per month, 45 minutes each. Our most popular plan.",
        url: "https://easequran.com/pricing",
      },
    ],
  },
};

const plans = [
  {
    name: "Starter",
    price: 40,
    classes: "4 classes/month",
    duration: "30 min/class",
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
    name: "Basic",
    price: 59,
    classes: "8 classes/month",
    duration: "30 min/class",
    forWho: "For regular learners building a steady habit",
    features: [
      "One-on-one live sessions",
      "Certified teacher",
      "Flexible scheduling",
      "Progress tracking",
      "Monthly progress report",
      "Free trial class included",
    ],
  },
  {
    name: "Popular",
    price: 79,
    classes: "12 classes/month",
    duration: "45 min/class",
    forWho: "For serious students committed to consistent growth",
    features: [
      "One-on-one live sessions",
      "Certified teacher",
      "Flexible scheduling",
      "Priority teacher matching",
      "Monthly progress report",
      "Parent updates",
      "Free trial class included",
    ],
    popular: true,
  },
  {
    name: "Intensive",
    price: 99,
    classes: "16 classes/month",
    duration: "60 min/class",
    forWho: "For fast progress seekers who want rapid results",
    features: [
      "One-on-one live sessions",
      "Premium certified teacher",
      "Flexible scheduling",
      "Priority support",
      "Weekly progress reports",
      "Parent updates",
      "Homework & revision",
      "Free trial class included",
    ],
  },
  {
    name: "Family Plan",
    price: "Contact Us",
    classes: "Flexible classes",
    duration: "Flexible duration",
    forWho: "For families with multiple children learning together",
    features: [
      "Multiple children discount",
      "Custom schedule",
      "Choose your teachers",
      "Family plan pricing",
      "Priority support",
      "Dedicated account manager",
    ],
    customCta: true,
  },
];

const includedFeatures = [
  "Free first trial class — no credit card required",
  "Wifaq ul Madaris certified teacher for every session",
  "Fully flexible scheduling — morning, evening, weekend",
  "Cancel anytime, no long-term contracts",
  "WhatsApp support directly with your teacher",
  "Lessons conducted via Zoom, Skype, or Google Meet",
];

const pricingFaqs = [
  {
    question: "Is there really a free trial class?",
    answer:
      "Yes, absolutely. Your first class is completely free — no credit card required, no commitment whatsoever. We want you to experience the quality of our teaching before you invest anything. Simply book your trial, attend the class, and decide from there. There is no pressure to continue.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. If your child is progressing quickly and you want to increase class frequency, simply let us know and we'll adjust your plan immediately. If you need to reduce classes due to schedule changes, we'll accommodate that too. There are no penalties for changing plans.",
  },
  {
    question: "Do you offer discounts for multiple children?",
    answer:
      "Yes! We offer family plan pricing for households with two or more children. The more children you enroll, the greater the discount. Please contact us via WhatsApp or email to discuss custom family plan pricing. We're committed to making Quran education affordable for every family.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and PayPal. Billing is monthly — you are charged at the start of each month for that month's classes. Your billing information is secure and never shared. For the custom Family Plan, payment arrangements can be discussed directly.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are absolutely no long-term contracts at Ease Quran. You can cancel your subscription at any time with just 7 days' notice before your next billing date. We believe in earning your business every single month — not locking you in.",
  },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom text-center">
          <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
            Transparent Pricing
          </span>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Simple, Affordable Quran Class Pricing
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            No hidden fees. No long-term contracts. Start with a completely free trial class —
            then choose the plan that fits your child's learning goals and your family's budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full">
              ✓ Free first class
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full">
              ✓ No credit card required
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full">
              ✓ Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                classes={plan.classes}
                duration={plan.duration}
                forWho={plan.forWho}
                features={plan.features}
                popular={plan.popular}
                customCta={plan.customCta}
              />
            ))}
          </div>

          <p className="text-center text-grey text-sm mt-8">
            All prices in USD. Billed monthly.{" "}
            <Link href="/free-trial" className="text-gold hover:underline font-semibold">
              Start with a free trial →
            </Link>
          </p>
        </div>
      </section>

      {/* What's Included in Every Plan */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Every Plan Includes
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                What's Included in Every Plan
              </h2>
              <p className="text-grey text-sm leading-relaxed">
                Regardless of which plan you choose, these core features are included for every
                student at Ease Quran.
              </p>
            </div>

            <div className="bg-offwhite rounded-2xl p-8 border border-gray-100">
              <ul className="space-y-4">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg leading-none mt-0.5">✓</span>
                    <span className="text-navy font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl font-playfair font-bold text-gold mb-1">100%</div>
                <p className="text-navy text-sm font-semibold">One-on-One Sessions</p>
                <p className="text-grey text-xs mt-1">Your child never shares a class</p>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl font-playfair font-bold text-gold mb-1">2 hrs</div>
                <p className="text-navy text-sm font-semibold">Response Guarantee</p>
                <p className="text-grey text-xs mt-1">We reply to every inquiry</p>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl font-playfair font-bold text-gold mb-1">50</div>
                <p className="text-navy text-sm font-semibold">States Served</p>
                <p className="text-grey text-xs mt-1">Across all of America</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Pricing FAQ
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                Frequently Asked Questions About Pricing
              </h2>
            </div>
            <FAQAccordion faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Start With a Free Class — Zero Risk"
        subtext="Your first Quran class is completely free. No credit card, no commitment. See why hundreds of Muslim families across America trust Ease Quran for their children's Islamic education."
        primaryCta="Book Your Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
