import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import {
  plans,
  planIncludes,
  weekendExtraPerClass,
  hifzPlan,
  customPlan,
  registrationFee,
  siblingDiscounts,
  siblingPrice,
  prepayTerms,
  prepayPerPackage,
  prepaySavings,
  referral,
  applyDiscounts,
} from "@/lib/pricing";
import { business, ORG_ID, PRIMARY_CTA, paymentMethodsText, whatsappLink } from "@/lib/business";

const steady = plans[1];
const weekendExample = steady.price30 + 4 * weekendExtraPerClass[30];
const stackedExample = applyDiscounts(steady.price30, [siblingDiscounts[1].discount, 0.1]);

export const metadata: Metadata = {
  title: "Online Quran Class Pricing",
  description: `Online Quran class packages from $${plans[0].price30} for ${plans[0].classesPerPackage} one-on-one classes. Free 30-minute trial class, no registration fee, sibling and prepay discounts.`,
  alternates: { canonical: "https://easequran.com/pricing" },
  openGraph: {
    title: "Online Quran Class Pricing | Ease Quran Academy",
    description: `Packages from $${plans[0].price30} for ${plans[0].classesPerPackage} one-on-one Quran classes. Free trial class first, no registration fee.`,
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Quran class pricing at Ease Quran Academy" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Quran Classes",
  provider: { "@id": ORG_ID },
  serviceType: "Online Quran education",
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Quran class packages",
    itemListElement: [
      ...plans.flatMap((plan) => [
        {
          "@type": "Offer",
          name: `${plan.name} (30-minute classes)`,
          price: String(plan.price30),
          priceCurrency: "USD",
          description: `${plan.classesPerPackage} one-on-one classes of 30 minutes, ${plan.classesPerWeek} a week.`,
          url: "https://easequran.com/pricing",
        },
        {
          "@type": "Offer",
          name: `${plan.name} (60-minute classes)`,
          price: String(plan.price60),
          priceCurrency: "USD",
          description: `${plan.classesPerPackage} one-on-one classes of 60 minutes, ${plan.classesPerWeek} a week.`,
          url: "https://easequran.com/pricing",
        },
      ]),
      {
        "@type": "Offer",
        name: hifzPlan.name,
        price: String(hifzPlan.price),
        priceCurrency: "USD",
        description: `${hifzPlan.classesPerPackage} one-on-one Hifz classes of ${hifzPlan.minutes} minutes, ${hifzPlan.classesPerWeek} a week.`,
        url: "https://easequran.com/pricing",
      },
    ],
  },
};

const policies = [
  `Cancel or move a class at least ${business.classNoticeHours} hours before it starts and it is not counted. We reschedule it or arrange a makeup class, with no monthly limit.`,
  "If a student misses a class without telling us, that class counts, because the teacher was there and waiting.",
  "If your teacher can't make a class, another teacher takes it or we arrange a makeup class.",
  `To stop, tell us at least ${business.stopNoticeDays} days before your next package is due. There is no contract.`,
  "If you stop partway through a paid package, we refund the classes you haven't used.",
  `You can pay by ${paymentMethodsText}.`,
];

const pricingFaqs = [
  {
    question: "Is the trial class really free?",
    answer: `Yes. The first ${business.trialMinutes}-minute class is free for every student, including each child in the same family. You don't need a card to book it, and you decide afterwards whether to continue.`,
  },
  {
    question: "Why are prices shown per package and not per month?",
    answer:
      "You pay for a set number of classes. When those classes are finished, we send the bill for the next package. At the plan's weekly pace a package lasts about a month, but if a class is rescheduled, you never lose it or pay for it twice.",
  },
  {
    question: "Do weekend classes cost more?",
    answer: `A little. Each class on a Saturday or Sunday adds $${weekendExtraPerClass[30]} for a 30-minute class, $${weekendExtraPerClass[60]} for a 60-minute class, or $${weekendExtraPerClass[45]} for a 45-minute Hifz class. Weekday classes are charged at the normal package price.`,
  },
  {
    question: "Is there a registration fee?",
    answer: `No. The registration fee is $${registrationFee}. You only pay for your package of classes.`,
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. You can move to more or fewer classes a week when your next package starts. Just tell us on WhatsApp.",
  },
  {
    question: "Do discounts combine?",
    answer: `Yes. Sibling, prepay and referral discounts all apply, one after another, and they apply to weekend extras too. For example, a second child on the Steady plan who pays for 6 packages at once pays $${steady.price30} less 15%, then less 10%, which is $${stackedExample.toFixed(2)} per package.`,
  },
  {
    question: "What payment methods do you accept?",
    answer: `You can pay by ${paymentMethodsText}. We'll send the details when you choose your package.`,
  },
  {
    question: "How do I stop classes?",
    answer: `Tell us at least ${business.stopNoticeDays} days before your next package is due and we won't bill you again. If you stop partway through a paid package, we refund the classes you haven't used.`,
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
        {/* Background image: separate decorative element so its role="img"
            doesn't swallow the real heading/text content below */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/pricing-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Muslim child in an online Quran class"
        />
        <div className="absolute inset-0 bg-navy/85" />

        <div className="relative z-10 container-custom section-padding text-center px-4 sm:px-6">
          <span className="eyebrow mb-4">Pricing</span>
          <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Quran Class Pricing
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            You pay for a package of one-on-one classes, and the next package is billed only
            when those classes are finished. Every student starts with a free{" "}
            {business.trialMinutes}-minute trial class, and there is no registration fee.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <span className="bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full">✓ Free trial class</span>
            <span className="bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full">✓ ${registrationFee} registration fee</span>
            <span className="bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full">✓ No contract</span>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="eyebrow mb-4">Choose Your Plan</span>
            <h2 className="heading-2 text-navy mb-3">One-on-One 30-Minute Classes</h2>
            <p className="text-grey text-sm max-w-xl mx-auto">
              The plans differ only in how many classes you take each week. Every student gets
              the same teachers and the same attention. Prefer 60-minute classes? Each card shows
              that price too.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                price={plan.price30}
                priceSuffix={`for ${plan.classesPerPackage} classes`}
                classes={`${plan.classesPerWeek} classes a week, about a month`}
                duration="30 minutes each"
                forWho={plan.forWho}
                features={planIncludes}
                highlightLabel={plan.label}
                subLine={`60-minute classes: $${plan.price60} for ${plan.classesPerPackage}`}
              />
            ))}
          </div>

          <p className="text-center text-grey text-sm mt-8">
            All prices in US dollars. Weekend classes cost a little more, explained below.{" "}
            <Link href="/free-trial" className="text-gold hover:underline font-semibold">
              {PRIMARY_CTA} →
            </Link>
          </p>
        </div>
      </section>

      {/* 30 vs 60 minute comparison table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="eyebrow mb-4">Class Length</span>
            <h2 className="heading-2 text-navy mb-3">30-Minute and 60-Minute Classes</h2>
            <p className="text-grey text-sm max-w-xl mx-auto">
              Younger children usually do best with 30 minutes. Older students and adults often
              choose 60. The price is for one package of classes.
            </p>
          </div>
          <div className="max-w-3xl mx-auto overflow-x-auto -mx-4 px-4 sm:mx-auto sm:px-0">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left font-semibold px-4 py-3 rounded-tl-xl whitespace-nowrap">Plan</th>
                  <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">Classes</th>
                  <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">30 minutes</th>
                  <th className="text-left font-semibold px-4 py-3 rounded-tr-xl whitespace-nowrap">60 minutes</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, i) => (
                  <tr key={plan.id} className={i % 2 === 0 ? "bg-offwhite" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy border-b border-gray-100 whitespace-nowrap">{plan.name}</td>
                    <td className="px-4 py-3 text-grey border-b border-gray-100 whitespace-nowrap">
                      {plan.classesPerPackage} ({plan.classesPerWeek} a week)
                    </td>
                    <td className="px-4 py-3 text-navy font-medium border-b border-gray-100 whitespace-nowrap">${plan.price30}</td>
                    <td className="px-4 py-3 text-navy font-medium border-b border-gray-100 whitespace-nowrap">${plan.price60}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Weekend classes */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Weekend Classes</span>
              <h2 className="heading-2 text-navy mb-4">Weekend Classes Cost a Little More</h2>
              <p className="text-grey text-sm leading-relaxed">
                Classes run {business.classDays}. Each class held on a Saturday or Sunday adds a
                small amount to your package. Weekday classes stay at the normal price.
              </p>
            </div>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[360px] border-collapse text-sm bg-white rounded-2xl overflow-hidden border border-gray-100">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left font-semibold px-4 py-3">Class length</th>
                    <th className="text-left font-semibold px-4 py-3">Extra for each weekend class</th>
                  </tr>
                </thead>
                <tbody>
                  {([30, 45, 60] as const).map((len, i) => (
                    <tr key={len} className={i % 2 === 0 ? "bg-offwhite" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-navy border-b border-gray-100">
                        {len} minutes{len === 45 ? " (Hifz Intensive)" : ""}
                      </td>
                      <td className="px-4 py-3 text-navy font-medium border-b border-gray-100">
                        +${weekendExtraPerClass[len]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-navy rounded-2xl p-6 text-center">
              <p className="text-white/70 text-xs uppercase tracking-widest mb-2">Example</p>
              <p className="text-white text-sm">
                Steady plan, 30-minute classes, with one of the three weekly classes on Saturday.
                That is 4 weekend classes in the package:{" "}
                <span className="text-gold font-semibold">
                  ${steady.price30} + 4 × ${weekendExtraPerClass[30]} = ${weekendExample}
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hifz and custom */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="eyebrow mb-4">More Options</span>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy mb-3">Hifz and Custom Schedules</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <div className="rounded-xl border border-gray-200 bg-offwhite p-6 flex flex-col">
              <h3 className="font-playfair font-semibold text-lg text-navy mb-1">{hifzPlan.name}</h3>
              <p className="text-gold font-semibold text-sm mb-2">
                ${hifzPlan.price} for {hifzPlan.classesPerPackage} classes
              </p>
              <p className="text-grey text-xs mb-3">
                {hifzPlan.classesPerWeek} classes a week · {hifzPlan.minutes} minutes each
              </p>
              <p className="text-grey text-sm mb-5 flex-1">{hifzPlan.description}</p>
              <Link
                href="/courses/hifz"
                className="text-center font-semibold py-2.5 rounded-lg text-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-200"
              >
                About the Hifz Program
              </Link>
            </div>
            <div className="rounded-xl border border-gray-200 bg-offwhite p-6 flex flex-col">
              <h3 className="font-playfair font-semibold text-lg text-navy mb-1">{customPlan.name}</h3>
              <p className="text-gold font-semibold text-sm mb-2">{customPlan.priceLabel}</p>
              <p className="text-grey text-xs mb-3">A schedule that doesn&apos;t fit the plans above</p>
              <p className="text-grey text-sm mb-5 flex-1">{customPlan.description}</p>
              <a
                href={whatsappLink("Hi, I would like a custom quote for Ease Quran classes.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-semibold py-2.5 rounded-lg text-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-200"
              >
                Ask for a Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Discount */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Sibling Discount</span>
              <h2 className="heading-2 text-navy mb-4">Discounts for Brothers and Sisters</h2>
              <p className="text-grey text-sm leading-relaxed">
                Each additional child from the same family is discounted automatically. No code
                needed.
              </p>
            </div>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[320px] border-collapse text-sm bg-white rounded-2xl overflow-hidden border border-gray-100">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left font-semibold px-4 py-3">Child</th>
                    <th className="text-left font-semibold px-4 py-3">Discount</th>
                  </tr>
                </thead>
                <tbody>
                  {siblingDiscounts.map((s, i) => (
                    <tr key={s.child} className={i % 2 === 0 ? "bg-offwhite" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-navy border-b border-gray-100">{s.label}</td>
                      <td className="px-4 py-3 text-navy font-medium border-b border-gray-100">
                        {s.discount === 0 ? "Full price" : `${s.discount * 100}% off`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-navy rounded-2xl p-6 text-center">
              <p className="text-white/70 text-xs uppercase tracking-widest mb-2">Example</p>
              <p className="text-white text-sm">
                Three children on the Steady plan, 30-minute classes:{" "}
                <span className="text-gold font-semibold">
                  ${steady.price30} + ${siblingPrice(steady.price30, 2)} + $
                  {siblingPrice(steady.price30, 3)} = $
                  {steady.price30 + siblingPrice(steady.price30, 2) + siblingPrice(steady.price30, 3)}
                </span>{" "}
                for the three packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prepay Discounts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Pay Ahead</span>
              <h2 className="heading-2 text-navy mb-4">Pay for Several Packages and Save</h2>
              <p className="text-grey text-sm leading-relaxed">
                Price per package when you pay for several at once, based on 30-minute classes.
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
                      <td className="px-4 py-3 font-semibold text-navy border-b border-gray-100 whitespace-nowrap">{plan.name}</td>
                      {prepayTerms.map((term) => {
                        if (term.id === "single") {
                          return (
                            <td key={term.id} className="px-4 py-3 text-grey border-b border-gray-100 whitespace-nowrap">
                              ${plan.price30}
                            </td>
                          );
                        }
                        return (
                          <td key={term.id} className="px-4 py-3 text-navy font-medium border-b border-gray-100 whitespace-nowrap">
                            ${Math.round(prepayPerPackage(plan.price30, term.id))} per package
                            <div className="text-gold text-xs font-semibold">
                              save ${prepaySavings(plan.price30, term.id)} in total
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-grey text-sm mt-6 max-w-2xl mx-auto">
              Discounts combine. Sibling, prepay and referral discounts are applied one after
              another, and they apply to weekend extras too.
            </p>
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow mb-4">Referral</span>
            <h2 className="font-playfair font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">Refer a Family</h2>
            <p className="text-white/90 text-base sm:text-lg">
              When a family you refer joins, you get{" "}
              <span className="text-gold font-semibold">{referral.referrerDiscount * 100}% off one package</span>
              , and they get{" "}
              <span className="text-gold font-semibold">{referral.refereeDiscount * 100}% off their first package</span>.
            </p>
            <div className="mt-8">
              <a
                href={whatsappLink("Hi, I would like to refer a family to Ease Quran and use the referral discount.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-navy font-bold px-7 py-3.5 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm"
              >
                Refer a Family on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Included and policies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Every Plan</span>
              <h2 className="heading-2 text-navy mb-4">What Every Plan Includes</h2>
            </div>
            <div className="bg-offwhite rounded-2xl p-8 border border-gray-100 mb-8">
              <ul className="space-y-4">
                {planIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg leading-none mt-0.5">✓</span>
                    <span className="text-navy font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <h3 className="font-playfair font-bold text-xl text-navy mb-4">Missed Classes, Stopping and Refunds</h3>
            <ul className="space-y-3 text-grey text-sm leading-relaxed list-disc pl-5">
              {policies.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="text-grey text-sm mt-4">
              The full details are in our{" "}
              <Link href="/terms-conditions" className="text-gold font-semibold hover:underline">
                terms and conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Pricing FAQ</span>
              <h2 className="heading-2 text-navy mb-4">Questions About Pricing</h2>
            </div>
            <FAQAccordion faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Start With a Free Class"
        subtext="Tell us the days and times that suit you, and we'll arrange a free trial class with a suitable teacher. No card needed."
        primaryCta={PRIMARY_CTA}
        primaryHref="/free-trial"
      />
    </>
  );
}
