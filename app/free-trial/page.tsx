import type { Metadata } from "next";
import { GraduationCap, CheckCircle, Award } from "lucide-react";
import FreeTrialForm from "./FreeTrialForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Book Your Free Trial",
  description:
    "Book a free online Quran trial class. No credit card, no commitment. Tell us your preferred days and times and we'll arrange a suitable teacher.",
  alternates: { canonical: "https://easequran.com/free-trial" },
  openGraph: {
    title: "Book Your Free Trial | Ease Quran Online Academy",
    description:
      "Book a free online Quran trial class. No credit card, no commitment. Tell us your preferred days and times and we'll arrange a suitable teacher.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Book a free Quran trial class at Ease Quran Academy" }],
  },
};

const freeTrialSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Free Online Quran Trial Class",
  description: `A free ${business.trialMinutes}-minute one-on-one online Quran class. No credit card required.`,
  price: "0",
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  url: "https://easequran.com/free-trial",
  seller: {
    "@type": "EducationalOrganization",
    "@id": "https://easequran.com/#organization",
  },
};

export default function FreeTrialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(freeTrialSchema) }}
      />
      {/* Hero */}
      <section className="bg-navy py-14">
        <div className="container-custom text-center">
          <span className="eyebrow mb-4">
            100% Free. No Credit Card Required.
          </span>
          <h1 className="heading-1 text-white mb-4">
            Book Your Free Trial
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed">
            Tell us the days and times that suit you, and we&apos;ll reach out{" "}
            {business.replyTime} on WhatsApp to arrange your {business.trialMinutes}-minute
            trial class with a suitable teacher.
          </p>
        </div>
      </section>

      {/* Split Layout */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <FreeTrialForm />

            {/* Right: Trust Signals */}
            <div className="space-y-8">
              {/* Why Choose */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="card-title mb-6">
                  Why Families Choose Ease Quran
                </h2>
                <ul className="space-y-4">
                  {[
                    {
                      icon: GraduationCap,
                      text: "Every teacher holds a recognized Quran qualification, checked before they teach a single student",
                    },
                    {
                      icon: CheckCircle,
                      text: `We reply ${business.replyTime} on WhatsApp to arrange your trial`,
                    },
                    {
                      icon: GraduationCap,
                      text: "Ask for a female teacher for sisters and young children, and we can arrange one at most times",
                    },
                    {
                      icon: CheckCircle,
                      text: "Tell us your preferred days and times, and we arrange a suitable teacher around them",
                    },
                    {
                      icon: CheckCircle,
                      text: "Open to families anywhere in the US",
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                    <li key={i} className="flex items-start gap-3">
                      <Icon size={20} className="text-gold shrink-0 mt-0.5" />
                      <p className="text-grey text-sm leading-relaxed">{item.text}</p>
                    </li>
                    );
                  })}
                </ul>
              </div>

              {/* Teachers */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="card-title mb-4">
                  Some of Our Teachers
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gold/10 shrink-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-gold" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Shah Zaib</p>
                      <p className="text-grey text-xs">Founder · Wifaq ul Madaris · 6+ yrs experience</p>
                    </div>
                    <span className="ml-auto text-xs bg-gold/10 text-gold font-semibold px-2 py-1 rounded-full">
                      Checked
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-offwhite shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/teacher-1.webp"
                        alt="Muhammad Umair - Quran Teacher"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Muhammad Umair</p>
                      <p className="text-grey text-xs">Tajweed & Hifz Specialist</p>
                    </div>
                    <span className="ml-auto text-xs bg-gold/10 text-gold font-semibold px-2 py-1 rounded-full">
                      Checked
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-offwhite shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/teacher-2.webp"
                        alt="Almas Fatima - Female Quran Teacher"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Almas Fatima</p>
                      <p className="text-grey text-xs">Female Teacher · Sisters & Children</p>
                    </div>
                    <span className="ml-auto text-xs bg-gold/10 text-gold font-semibold px-2 py-1 rounded-full">
                      Checked
                    </span>
                  </div>
                </div>
              </div>

              {/* Geo + Response */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy rounded-2xl p-6 text-center">
                  <p className="text-white font-semibold text-sm">Open to</p>
                  <p className="text-gold font-bold">families across the US</p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                  <p className="text-navy font-semibold text-sm">We reply</p>
                  <p className="text-gold font-bold">{business.replyTime}</p>
                </div>
              </div>

              {/* How teachers are checked */}
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Award size={20} className="text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-playfair font-bold text-navy text-base mb-1">
                      Every Teacher Is Checked Before Joining
                    </p>
                    <p className="text-grey text-xs leading-relaxed">
                      We see each teacher&apos;s original certificates, hear them recite, watch
                      them teach a demo class, and check their ID and references, before they
                      teach a single student.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
