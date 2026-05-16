import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Ease Quran Online Academy | Get in Touch",
  description:
    "Contact Ease Quran Online Academy. Email us at info@easequran.com or WhatsApp us. We respond within 2 hours. Online Quran classes for families across the USA.",
  alternates: { canonical: "https://easequran.com/contact" },
  openGraph: {
    title: "Contact Ease Quran Online Academy | Get in Touch",
    description:
      "Contact Ease Quran Online Academy. Email us at info@easequran.com or WhatsApp us. We respond within 2 hours. Online Quran classes for families across the USA.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Contact Ease Quran Online Academy" }],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Ease Quran Online Academy",
  url: "https://easequran.com/contact",
  description: "Contact Ease Quran Online Academy via email, WhatsApp, or our contact form. We respond within 2 hours.",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
    email: "info@easequran.com",
    telephone: "+923195657389",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923195657389",
      contactType: "customer service",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "06:00",
        closes: "23:00",
      },
    },
  },
};

const contactFaqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer:
      "We guarantee a response within 2 hours during our operating hours (6am–11pm EST, 7 days a week). For the fastest response, WhatsApp is the best way to reach us — we typically reply in under 30 minutes.",
  },
  {
    question: "Can I speak with a teacher before committing?",
    answer:
      "Absolutely. You can request a quick introductory call or WhatsApp voice message with your assigned teacher before your trial class begins. We want you to feel completely comfortable before your child's first lesson.",
  },
  {
    question: "Do you offer classes on weekends?",
    answer:
      "Yes, we offer classes 7 days a week, including weekends. Many of our American students prefer Saturday and Sunday classes due to school and work schedules. Simply specify your preferred time when you book.",
  },
  {
    question: "What is the best way to contact you for urgent matters?",
    answer:
      "For urgent matters, WhatsApp is always the fastest way to reach us. Send a message to +92 319 5657389 and we will respond as quickly as possible. You can also reach us by email at info@easequran.com.",
  },
  {
    question: "Is there a dedicated female contact for sisters?",
    answer:
      "Yes. Sisters who prefer to communicate with a female staff member can specifically request this when contacting us. We understand the importance of Islamic modesty and accommodate these requests whenever possible.",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18WdHQVNWT/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/contacteasequran",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ease-quran/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@contacteasequran",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              Contact Ease Quran Online Academy
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Have a question about our courses, teachers, or pricing? We are here to help.
              Reach out via the form, email, or WhatsApp — we respond within 2 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Two-column */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <ContactForm />

            {/* Right: Contact Info */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-playfair font-bold text-xl text-navy mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm mb-0.5">Email Us</p>
                      <a
                        href="mailto:info@easequran.com"
                        className="text-gold hover:underline text-sm font-medium"
                      >
                        info@easequran.com
                      </a>
                      <br />
                      <a
                        href="mailto:contacteasequran@gmail.com"
                        className="text-grey hover:text-gold text-xs transition-colors"
                      >
                        contacteasequran@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-gold"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/923195657389"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1ebd5a] transition-colors"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm mb-0.5">Response Time</p>
                      <p className="text-grey text-sm">
                        We respond to all inquiries{" "}
                        <strong className="text-navy">within 2 hours</strong>, 7 days a week
                        from 6am to 11pm EST.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-playfair font-bold text-lg text-navy mb-5">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gold/30 hover:bg-offwhite transition-all group"
                    >
                      <span className="text-grey group-hover:text-gold transition-colors">
                        {social.icon}
                      </span>
                      <span className="text-navy text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-navy rounded-2xl p-6 text-center">
                <p className="text-white font-playfair font-bold text-lg mb-2">
                  Ready to start?
                </p>
                <p className="text-white/60 text-sm mb-4">
                  Book a free trial class — no credit card, no commitment.
                </p>
                <Link
                  href="/free-trial"
                  className="inline-block bg-gold text-navy font-bold px-6 py-3 rounded-xl hover:bg-gold-dark transition-colors text-sm"
                >
                  Book Free Trial →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Common Questions
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion faqs={contactFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's Start Your Child's Quran Journey"
        subtext="Have more questions? We are always happy to help. Reach out on WhatsApp or book a completely free trial class — no credit card, no commitment."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
