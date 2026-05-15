import type { Metadata } from "next";
import FreeTrialForm from "./FreeTrialForm";

export const metadata: Metadata = {
  title: "Book Your Free Quran Trial Class | Ease Quran Online Academy",
  description:
    "Book your free online Quran trial class today. No credit card, no commitment. Certified teachers, flexible scheduling. Muslim families across the USA trust Ease Quran.",
  openGraph: {
    title: "Book Your Free Quran Trial Class | Ease Quran Online Academy",
    description:
      "Book your free online Quran trial class today. No credit card, no commitment. Certified teachers, flexible scheduling. Muslim families across the USA trust Ease Quran.",
    images: ["/images/og-image.webp"],
  },
};

export default function FreeTrialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-14">
        <div className="container-custom text-center">
          <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
            100% Free — No Credit Card Required
          </span>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Book Your Free Quran Trial Class
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed">
            Fill in the form below and we will reach out within 2 hours on WhatsApp to schedule
            your child's first lesson with a certified Quran teacher.
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
                <h2 className="font-playfair font-bold text-xl text-navy mb-6">
                  Why Families Choose Ease Quran
                </h2>
                <ul className="space-y-4">
                  {[
                    {
                      icon: "🎓",
                      text: "All teachers certified by Wifaq ul Madaris Al-Arabia — the world's largest Islamic education board",
                    },
                    {
                      icon: "⏰",
                      text: "We respond within 2 hours on WhatsApp to confirm your booking",
                    },
                    {
                      icon: "👩‍🏫",
                      text: "Female teacher available for sisters and young children",
                    },
                    {
                      icon: "🗓️",
                      text: "Fully flexible scheduling — morning, evening, and weekends to fit your family's routine",
                    },
                    {
                      icon: "🇺🇸",
                      text: "Trusted by Muslim families across all 50 states in America",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-xl shrink-0">{item.icon}</span>
                      <p className="text-grey text-sm leading-relaxed">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teachers */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-playfair font-bold text-lg text-navy mb-4">
                  Your Teachers
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-offwhite shrink-0 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/founder.webp"
                        alt="Shah Zaib - Founder & Head Teacher"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Shah Zaib</p>
                      <p className="text-grey text-xs">Founder & Head Teacher · 6+ yrs experience</p>
                    </div>
                    <span className="ml-auto text-xs bg-gold/10 text-gold font-semibold px-2 py-1 rounded-full">
                      Certified
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
                      <p className="text-grey text-xs">Tajweed & Hifz Specialist · 2 yrs experience</p>
                    </div>
                    <span className="ml-auto text-xs bg-gold/10 text-gold font-semibold px-2 py-1 rounded-full">
                      Certified
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
                      Certified
                    </span>
                  </div>
                </div>
              </div>

              {/* Geo + Response */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy rounded-2xl p-6 text-center">
                  <p className="text-3xl mb-2">🇺🇸</p>
                  <p className="text-white font-semibold text-sm">Trusted by families</p>
                  <p className="text-gold font-bold">in all 50 states</p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                  <p className="text-3xl mb-2">⚡</p>
                  <p className="text-navy font-semibold text-sm">We respond</p>
                  <p className="text-gold font-bold">within 2 hours</p>
                </div>
              </div>

              {/* Wifaq credential badge */}
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏅</span>
                  <div>
                    <p className="font-playfair font-bold text-navy text-base mb-1">
                      Wifaq ul Madaris Al-Arabia Certified
                    </p>
                    <p className="text-grey text-xs leading-relaxed">
                      All Ease Quran teachers hold certification from Wifaq ul Madaris Al-Arabia —
                      the largest and most respected Islamic education board in the world. This is
                      the gold standard in Quran teacher credentials.
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
