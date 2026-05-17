import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ease Quran Online Academy",
  description:
    "Read the Terms and Conditions of Ease Quran Online Academy. Understand your rights and responsibilities when using our online Quran classes service.",
  alternates: { canonical: "https://easequran.com/terms-conditions" },
  openGraph: {
    title: "Terms & Conditions | Ease Quran Online Academy",
    description:
      "Terms and Conditions for using Ease Quran Online Academy's online Quran education services.",
    url: "https://easequran.com/terms-conditions",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Ease Quran Online Academy Terms & Conditions" }],
  },
  robots: { index: true, follow: true },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms & Conditions — Ease Quran Online Academy",
  url: "https://easequran.com/terms-conditions",
  description: "Terms and Conditions governing the use of Ease Quran Online Academy's website and online Quran education services.",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  dateModified: "2025-05-16",
  inLanguage: "en-US",
};

const EFFECTIVE_DATE = "May 16, 2025";
const CONTACT_EMAIL = "info@easequran.com";
const SITE_URL = "https://easequran.com";

export default function TermsConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy py-14">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-gold/70 text-xs font-semibold uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Terms &amp; Conditions</span>
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/60 text-sm">
            Effective Date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last Updated: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-offwhite py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

            {/* Intro */}
            <p className="text-grey leading-relaxed mb-8">
              Welcome to Ease Quran Online Academy (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms
              and Conditions (&ldquo;Terms&rdquo;) govern your use of our website at{" "}
              <a href={SITE_URL} className="text-gold font-semibold hover:underline">{SITE_URL}</a>{" "}
              and our online Quran education services. By accessing our website or enrolling in any course,
              you agree to be bound by these Terms. If you do not agree to these Terms, please do not use
              our services.
            </p>

            {/* Section 1 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              1. Acceptance of Terms
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              By using this website or enrolling in any course offered by Ease Quran Online Academy, you
              confirm that you are at least 18 years of age (or the legal age of majority in your
              jurisdiction), or that you are a parent or legal guardian enrolling a minor child and
              accepting these Terms on their behalf. You agree to use our services in accordance with
              these Terms and all applicable laws and regulations.
            </p>

            {/* Section 2 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              2. Services Provided
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              Ease Quran Online Academy provides live, one-on-one online Quran education services via video
              conferencing platforms (Zoom, Skype, or similar). Our services include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li>Quran recitation classes for children and adults (Noorani Qaida, Quran Reading)</li>
              <li>Tajweed (Quran recitation rules) instruction</li>
              <li>Hifz (Quran memorization) programs</li>
              <li>Arabic Language courses</li>
              <li>Islamic Studies classes</li>
              <li>Specialized programs for adults, new Muslims (reverts), and families</li>
            </ul>
            <p className="text-grey leading-relaxed mb-4">
              We reserve the right to modify, add, or discontinue any service offering at any time with
              reasonable notice to enrolled students.
            </p>

            {/* Section 3 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              3. Free Trial Class
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              We offer one (1) free trial class to new students. The following conditions apply:
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li>The free trial is limited to one class per household.</li>
              <li>No credit card or payment is required to book a trial class.</li>
              <li>The trial class is approximately 30 minutes in duration.</li>
              <li>We reserve the right to decline a trial class booking at our sole discretion.</li>
              <li>The free trial offer may be withdrawn or modified at any time without prior notice.</li>
              <li>Booking a free trial class does not create an obligation to enroll or pay.</li>
            </ul>

            {/* Section 4 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              4. Enrollment, Fees, and Payment
            </h2>
            <h3 className="font-playfair font-semibold text-lg text-navy mb-3 mt-6">
              4a. Enrollment
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Enrollment becomes effective upon payment of the applicable monthly plan fee. A confirmed
              schedule will be set between the student/parent and their assigned teacher. Enrollment is
              personal and non-transferable.
            </p>
            <h3 className="font-playfair font-semibold text-lg text-navy mb-3 mt-6">
              4b. Fees and Payment
            </h3>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li>All fees are charged monthly in advance. Current pricing plans are listed on our{" "}
                <Link href="/pricing" className="text-gold font-semibold hover:underline">Pricing page</Link>.</li>
              <li>Fees are quoted in US Dollars (USD). International students may be subject to currency conversion rates applied by their payment provider.</li>
              <li>Payment is due before the start of each monthly billing cycle. Failure to pay may result in suspension of classes.</li>
              <li>We use third-party payment processors. By making payment, you agree to their terms and privacy policies as applicable. We do not store your full payment card details.</li>
              <li>All fees are exclusive of any applicable taxes. You are responsible for any taxes imposed by your jurisdiction.</li>
            </ul>
            <h3 className="font-playfair font-semibold text-lg text-navy mb-3 mt-6">
              4c. Price Changes
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              We reserve the right to change our pricing at any time. Enrolled students will be given at
              least 30 days&apos; advance notice of any price increase. Continued enrollment after the effective
              date of a price change constitutes acceptance of the new pricing.
            </p>

            {/* Section 5 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              5. Cancellations, Rescheduling, and Refund Policy
            </h2>
            <h3 className="font-playfair font-semibold text-lg text-navy mb-3 mt-6">
              5a. Student Cancellations
            </h3>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li>If you need to cancel or reschedule a class, please notify your teacher or our team at least <strong className="text-navy">12 hours in advance</strong> via WhatsApp or email.</li>
              <li>Classes cancelled with less than 12 hours&apos; notice will be forfeited unless the cancellation is due to a genuine emergency (at our discretion).</li>
              <li>We allow a maximum of <strong className="text-navy">2 rescheduled classes per month</strong> without charge. Additional cancellations in the same month may be forfeited.</li>
            </ul>
            <h3 className="font-playfair font-semibold text-lg text-navy mb-3 mt-6">
              5b. Teacher Cancellations
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              If a class is cancelled by our teacher, we will reschedule it at a mutually convenient time
              at no additional cost. In the event of repeated teacher cancellations, we will assign a
              replacement teacher at no charge.
            </p>
            <h3 className="font-playfair font-semibold text-lg text-navy mb-3 mt-6">
              5c. Subscription Cancellation
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              You may cancel your subscription at any time by contacting us. Cancellations take effect at
              the end of the current billing month. We do not provide pro-rated refunds for unused classes
              within a paid month, except where required by law.
            </p>
            <h3 className="font-playfair font-semibold text-lg text-navy mb-3 mt-6">
              5d. Refunds
            </h3>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li>Refunds are offered at our discretion. If you are unsatisfied after your first paid month, please contact us and we will assess your situation fairly.</li>
              <li>Refund requests must be submitted within 7 days of the charge in question.</li>
              <li>Refunds will not be issued for classes that were attended, forfeited due to student no-show without notice, or for partial months unless we are at fault.</li>
            </ul>

            {/* Section 6 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              6. Teacher Assignment and Changes
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              We assign teachers based on student age, level, gender preferences, and scheduling. We
              reserve the right to reassign a student to a different teacher if necessary (e.g., teacher
              unavailability, performance concerns). If you are dissatisfied with your assigned teacher, we
              will work with you to find a better fit, as this is part of our commitment to your satisfaction
              and is offered at no additional cost.
            </p>

            {/* Section 7 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              7. Code of Conduct
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              All students, parents, and guardians are expected to:
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li>Treat teachers and staff with respect and Islamic adab (manners) at all times.</li>
              <li>Attend classes on time and in a suitable, quiet environment.</li>
              <li>Ensure children are supervised and ready for class at the scheduled time.</li>
              <li>Not record video calls without prior written consent from Ease Quran Academy and the teacher.</li>
              <li>Not share login credentials, class links, or materials with unauthorized third parties.</li>
              <li>Not use our services for any unlawful purpose or in a way that violates any applicable law.</li>
            </ul>
            <p className="text-grey leading-relaxed mb-4">
              We reserve the right to suspend or terminate enrollment without refund if a student or parent
              engages in abusive, disrespectful, or inappropriate behavior toward our teachers or staff.
            </p>

            {/* Section 8 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              8. Intellectual Property
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              All content on this website, including text, images, logos, course materials, and teaching
              methodologies, is the intellectual property of Ease Quran Online Academy or its licensed
              contributors. You may not copy, reproduce, distribute, or create derivative works from any
              content without our prior written consent. Course materials provided during classes are for
              personal educational use only and may not be shared or commercially exploited.
            </p>

            {/* Section 9 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              Our services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no guarantees
              regarding the speed of student progress, as individual results depend on effort, practice, and
              commitment. We do not warrant that our website will be uninterrupted or error-free. To the
              fullest extent permitted by law, we disclaim all implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>

            {/* Section 10 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              10. Limitation of Liability
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              To the maximum extent permitted by applicable law, Ease Quran Online Academy shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages arising out
              of or in connection with your use of our services, even if we have been advised of the
              possibility of such damages. Our total liability to you for any claims under these Terms
              shall not exceed the amount you paid us in the 3 months preceding the event giving rise to
              the claim.
            </p>

            {/* Section 11 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              11. Governing Law and Disputes
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with applicable laws. For
              students in the United States, any disputes that cannot be resolved amicably shall be
              submitted to binding arbitration under the rules of the American Arbitration Association,
              with proceedings conducted in English. You waive any right to a jury trial or to
              participate in a class-action lawsuit in connection with our services.
            </p>
            <p className="text-grey leading-relaxed mb-4">
              We encourage you to contact us first to resolve any issues before pursuing formal dispute
              resolution. Most concerns can be addressed quickly through direct communication.
            </p>

            {/* Section 12 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              12. Modifications to Terms
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Updated Terms will be posted on this
              page with a revised &ldquo;Effective Date.&rdquo; Material changes will be communicated to enrolled
              students via email at least 14 days before taking effect. Continued use of our services after
              the effective date constitutes acceptance of the revised Terms.
            </p>

            {/* Section 13 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              13. Contact Us
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-offwhite rounded-2xl p-6 border border-gray-100 space-y-2 text-sm text-grey">
              <p><strong className="text-navy">Ease Quran Online Academy</strong></p>
              <p>Email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold font-semibold hover:underline">{CONTACT_EMAIL}</a>
              </p>
              <p>WhatsApp: <span className="text-navy font-medium">+92 319 5657389</span></p>
              <p>Website:{" "}
                <a href={SITE_URL} className="text-gold font-semibold hover:underline">{SITE_URL}</a>
              </p>
            </div>

            {/* Related links */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
              >
                Read our Privacy Policy →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:underline"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
