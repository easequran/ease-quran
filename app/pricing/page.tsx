import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import {
  plans,
  additionalPlans,
  registrationFee,
  siblingDiscounts,
  siblingPrice,
  prepayTerms,
  prepayMonthlyEquivalent,
  prepaySavings,
  referral,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Online Quran Class Pricing Plans",
  description:
    "Affordable online Quran class pricing. 30-minute plans from $40/month, 60-minute plans from $72/month. $0 registration fee. Free first trial class. Wifaq ul Madaris certified teachers.",
  alternates: { canonical: "https://easequran.com/pricing" },
  openGraph: {
    title: "Online Quran Class Pricing Plans | Ease Quran Academy",
    description:
      "Affordable online Quran class pricing. 30-minute plans from $40/month, 60-minute plans from $72/month. $0 registration fee. Free first trial class. Wifaq ul Madaris certified teachers.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Quran Class Pricing Plans at Ease Quran Academy" }],
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
      ...plans.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} Plan (30-minute)`,
        price: String(plan.price30),
        priceCurrency: "USD",
        description: `${plan.classesPerMonth} classes per month, 30 minutes each. ${plan.forWho}`,
        url: "https://easequran.com/pricing",
      })),
      ...plans.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} Plan (60-minute)`,
        price: String(plan.price60),
        priceCurrency: "USD",
        description: `${plan.classesPerMonth} classes per month, 60 minutes each. ${plan.forWho}`,
        url: "https://easequran.com/pricing",
      })),
      {
        "@type": "Offer",
        name: "Hifz Intensive",
        price: "130",
        priceCurrency: "USD",
        description: "5 sessions per week, 45 minutes each, senior teacher, weekly memorization tracking. Price from $130/month.",
        url: "https://easequran.com/pricing",
      },
      {
        "@type": "Offer",
        name: "Custom Schedule",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "60",
          maxPrice: "140",
          priceCurrency: "USD",
        },
        description: "Custom schedule quote, typically $60-$140/month.",
        url: "https://easequran.com/pricing",
      },
    ],
  },
};

const includedFeatures = [
  "Free first trial class, no credit card required",
  "$0 registration fee",
  "Wifaq ul Madaris certified teacher for every session",
  "Fully flexible scheduling: morning, evening, weekend",
  "Cancel anytime, no long-term contracts",
  "WhatsApp support directly with your teacher",
  "Lessons conducted via Zoom, Skype, or Google Meet",
];

const pricingFaqs = [
  {
    question: "Is there really a free trial class?",
    answer:
      "Yes, absolutely. Your first class is completely free, no credit card required, no commitment whatsoever. We want you to experience the quality of our teaching before you invest anything. Simply book your trial, attend the class, and decide from there. There is no pressure to continue.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No. The registration fee is $0. You only pay for your chosen monthly plan.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. If your child is progressing quickly and you want to increase class frequency, simply let us know and we'll adjust your plan immediately. If you need to reduce classes due to schedule changes, we'll accommodate that too. There are no penalties for changing plans.",
  },
  {
    question: "How does the Weekend Priority pricing work?",
    answer:
      "Weekend Priority guarantees a Saturday/Sunday slot and applies a small 15% add-on, but only when every single class in your plan falls on Saturday or Sunday. If your schedule mixes weekdays with one or two weekend classes, there is no extra charge at all.",
  },
  {
    question: "Do you offer discounts for multiple children?",
    answer:
      "Yes, automatically, no code needed. The 1st child is full price, the 2nd child gets 15% off, the 3rd child gets 25% off, and the 4th child onward gets 30% off. For example, 3 children on the Steady plan comes to $55 + $47 + $41 = $143/month total.",
  },
  {
    question: "Do you offer discounts for paying in advance?",
    answer:
      "Yes. Pay every 3 months and save 5%, pay every 6 months and save 10%, or pay yearly and get 2 months free (you pay for 10 months of the year). The exact dollar savings for each plan are shown in the pricing table above.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and PayPal. Billing is monthly by default, with quarterly, semiannual, and yearly prepay options available at a discount. Your billing information is secure and never shared.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are absolutely no long-term contracts at Ease Quran. You can cancel your subscription at any time with just 7 days' notice before your next billing date. We believe in earning your business every single month, not locking you in.",
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
      <section className="relative overflow-hidden">
        {/* Background image — separate decorative element so its role="img"
            doesn't swallow the real heading/text content below */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/pricing-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Muslim child in an online Quran class, representing Ease Quran Academy pricing plans"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-navy/85" />

        <div className="relative z-10 container-custom section-padding text-center px-4 sm:px-6">
          <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
            Transparent Pricing
          </span>
          <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Simple, Affordable Quran Class Pricing
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            No hidden fees. No long-term contracts. $0 registration fee. Start with a completely
            free trial class, then choose the plan that fits your child's learning goals and your
            family's budget.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <span className="bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full">
              ✓ Free first class
            </span>
            <span className="bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full">
              ✓ $0 registration fee
            </span>
            <span className="bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full">
              ✓ Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Choose Your Plan
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-3">
              One-to-One 30-Minute Classes
            </h2>
            <p className="text-grey text-sm max-w-xl mx-auto">
              Every plan includes certified, one-on-one instruction and starts with a free trial
              class. Upgrade or downgrade anytime. Prefer 60-minute sessions? Each card shows that
              price too.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                price={plan.price30}
                classes={`${plan.classesPerWeek} classes/week (${plan.classesPerMonth}/month)`}
                duration="30 min/class"
                forWho={plan.forWho}
                features={plan.features}
                popular={plan.popular}
                subLine={`Prefer 60-minute classes? $${plan.price60}/month`}
              />
            ))}
          </div>

          <p className="text-center text-grey text-sm mt-8">
            All prices in USD, billed monthly. $0 registration fee.{" "}
            <Link href="/free-trial" className="text-gold hover:underline font-semibold">
              Start with a free trial →
            </Link>
          </p>
        </div>
      </section>

      {/* 30 vs 60 minute comparison table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Compare Durations
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-3">
              30-Minute vs 60-Minute Pricing
            </h2>
            <p className="text-grey text-sm max-w-xl mx-auto">
              A 60-minute class is 1.8x the 30-minute rate, not double. No toggle needed, every
              price is listed below.
            </p>
          </div>
          <div className="max-w-3xl mx-auto overflow-x-auto -mx-4 px-4 sm:mx-auto sm:px-0">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left font-semibold px-4 py-3 rounded-tl-xl whitespace-nowrap">Plan</th>
                  <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">Classes/week</th>
                  <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">30 min</th>
                  <th className="text-left font-semibold px-4 py-3 rounded-tr-xl whitespace-nowrap">60 min</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, i) => (
                  <tr
                    key={plan.id}
                    className={i % 2 === 0 ? "bg-offwhite" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-navy border-b border-gray-100 whitespace-nowrap">
                      {plan.name}
                    </td>
                    <td className="px-4 py-3 text-grey border-b border-gray-100 whitespace-nowrap">
                      {plan.classesPerWeek}
                    </td>
                    <td className="px-4 py-3 text-navy font-medium border-b border-gray-100 whitespace-nowrap">
                      ${plan.price30}/month
                    </td>
                    <td className="px-4 py-3 text-navy font-medium border-b border-gray-100 whitespace-nowrap">
                      ${plan.price60}/month
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Weekend Priority */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Weekend Priority
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                Weekend Priority — Guaranteed Sat/Sun Slot
              </h2>
              <p className="text-grey text-sm leading-relaxed">
                If every class in your plan is scheduled on a Saturday or Sunday, a small add-on
                guarantees your family's preferred weekend slot. If your schedule mixes weekdays
                with one or two weekend classes, there is no extra charge at all.
              </p>
            </div>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[560px] border-collapse text-sm bg-white rounded-2xl overflow-hidden border border-gray-100">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">Plan</th>
                    <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">Standard price (30 min)</th>
                    <th className="text-left font-semibold px-4 py-3">
                      Weekend Priority (all classes Sat/Sun)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, i) => (
                    <tr key={plan.id} className={i % 2 === 0 ? "bg-offwhite" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-navy border-b border-gray-100 whitespace-nowrap">
                        {plan.name}
                      </td>
                      <td className="px-4 py-3 text-grey border-b border-gray-100 whitespace-nowrap">
                        ${plan.price30}/month
                      </td>
                      <td className="px-4 py-3 text-navy font-medium border-b border-gray-100 whitespace-nowrap">
                        +${plan.weekendPriority}/month (${plan.price30 + plan.weekendPriority}/month total)
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-grey text-xs mt-4">
              Weekend Priority is not a surcharge for using the weekend — it's an optional
              guarantee for families who need every class on a weekend day.
            </p>
          </div>
        </div>
      </section>

      {/* Sibling Discount */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Sibling Discount
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                Automatic Discounts for Siblings
              </h2>
              <p className="text-grey text-sm leading-relaxed">
                Enroll more than one child and each additional sibling is discounted
                automatically, no code needed.
              </p>
            </div>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[320px] border-collapse text-sm bg-offwhite rounded-2xl overflow-hidden border border-gray-100">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left font-semibold px-4 py-3">Child</th>
                    <th className="text-left font-semibold px-4 py-3">Discount</th>
                  </tr>
                </thead>
                <tbody>
                  {siblingDiscounts.map((s, i) => (
                    <tr key={s.child} className={i % 2 === 0 ? "bg-white" : "bg-offwhite"}>
                      <td className="px-4 py-3 font-semibold text-navy border-b border-gray-100">
                        {s.label}
                      </td>
                      <td className="px-4 py-3 text-navy font-medium border-b border-gray-100">
                        {s.discount === 0 ? "Full price" : `${s.discount * 100}% off`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-navy rounded-2xl p-6 text-center">
              <p className="text-white/70 text-xs uppercase tracking-widest mb-2">
                Worked Example
              </p>
              <p className="text-white text-sm">
                3 children on the Steady plan (30-minute, ${plans[1].price30}/month each):{" "}
                <span className="text-gold font-semibold">
                  ${plans[1].price30} + ${siblingPrice(plans[1].price30, 2)} + $
                  {siblingPrice(plans[1].price30, 3)} = $
                  {plans[1].price30 +
                    siblingPrice(plans[1].price30, 2) +
                    siblingPrice(plans[1].price30, 3)}
                  /month
                </span>{" "}
                total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prepay Discounts */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Prepay & Save
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                Pay in Advance and Save
              </h2>
              <p className="text-grey text-sm leading-relaxed">
                Prices below are based on each plan's 30-minute monthly rate. Savings are shown in
                real dollars, not just percentages.
              </p>
            </div>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[760px] border-collapse text-sm bg-white rounded-2xl overflow-hidden border border-gray-100">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">Plan</th>
                    {prepayTerms.map((term) => (
                      <th key={term.id} className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                        {term.label}
                        <div className="text-white/60 font-normal text-xs">{term.description}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, i) => (
                    <tr key={plan.id} className={i % 2 === 0 ? "bg-offwhite" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-navy border-b border-gray-100 whitespace-nowrap">
                        {plan.name}
                      </td>
                      {prepayTerms.map((term) => {
                        if (term.id === "monthly") {
                          return (
                            <td key={term.id} className="px-4 py-3 text-grey border-b border-gray-100 whitespace-nowrap">
                              ${plan.price30}/month
                            </td>
                          );
                        }
                        const savings = prepaySavings(plan.price30, term.id);
                        const monthlyEquivalent = Math.round(
                          prepayMonthlyEquivalent(plan.price30, term.id)
                        );
                        return (
                          <td key={term.id} className="px-4 py-3 text-navy font-medium border-b border-gray-100 whitespace-nowrap">
                            ${monthlyEquivalent}/month
                            <div className="text-gold text-xs font-semibold">
                              save ${savings}
                              {term.id === "yearly" ? "/year" : ` per ${term.months}-month term`}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Plans */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              More Options
            </span>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy mb-3">
              Additional Plans
            </h2>
            <p className="text-grey text-sm max-w-xl mx-auto">
              For students with more specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {additionalPlans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-xl border border-gray-200 bg-offwhite p-6 flex flex-col"
              >
                <h3 className="font-playfair font-semibold text-lg text-navy mb-1">
                  {plan.name}
                </h3>
                <p className="text-gold font-semibold text-sm mb-2">{plan.priceLabel}</p>
                <p className="text-grey text-xs mb-3">
                  {plan.sessionsPerWeek} · {plan.duration}
                </p>
                <p className="text-grey text-sm mb-5 flex-1">{plan.description}</p>
                <Link
                  href="/free-trial"
                  className="text-center font-semibold py-2.5 rounded-lg text-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-200"
                >
                  {plan.cta === "trial" ? "Start Free Trial" : "Get a Quote"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Referral Program
            </span>
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Refer a Family
            </h2>
            <p className="text-white/90 text-base sm:text-lg">
              Refer a family to Ease Quran: you get{" "}
              <span className="text-gold font-semibold">
                {referral.referrerDiscount * 100}% off one month
              </span>
              , and they get{" "}
              <span className="text-gold font-semibold">
                {referral.refereeDiscount * 100}% off their first month
              </span>
              .
            </p>
          </div>
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
                student at Ease Quran. Registration fee: ${registrationFee}.
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

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
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
        headline="Start With a Free Class. Zero Risk."
        subtext="Your first Quran class is completely free. No credit card, no commitment. See why hundreds of Muslim families across America trust Ease Quran for their children's Islamic education."
        primaryCta="Book Your Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
