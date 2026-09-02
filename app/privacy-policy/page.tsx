import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Ease Quran Online Academy: how we collect, use, and protect your personal information when you use our service.",
  alternates: { canonical: "https://easequran.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Ease Quran Online Academy",
    description:
      "Learn how Ease Quran Online Academy collects, uses, and protects your personal information.",
    url: "https://easequran.com/privacy-policy",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Ease Quran Online Academy Privacy Policy" }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy — Ease Quran Online Academy",
  url: "https://easequran.com/privacy-policy",
  description: "Privacy Policy for Ease Quran Online Academy detailing data collection, usage, and user rights.",
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

export default function PrivacyPolicyPage() {
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
            <span className="text-gold">Privacy Policy</span>
          </div>
          <h1 className="heading-1 text-white mb-4">
            Privacy Policy
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
              Ease Quran Online Academy (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates{" "}
              <a href={SITE_URL} className="text-gold font-semibold hover:underline">{SITE_URL}</a>{" "}
              and is committed to protecting the privacy of every family who uses our services. This
              Privacy Policy explains what personal information we collect, why we collect it, how we
              use it, and the choices you have regarding your information. By using our website or
              enrolling in any of our online Quran classes, you agree to the practices described in
              this policy.
            </p>

            {/* Section 1 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              1. Information We Collect
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              We collect information in two ways: information you provide to us directly, and
              information collected automatically when you use our website.
            </p>
            <h3 className="font-playfair font-semibold text-lg text-navy mb-3 mt-6">
              1a. Information You Provide Directly
            </h3>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li><strong className="text-navy">Contact Form:</strong> Your name, email address, phone/WhatsApp number, and message when you submit our contact form.</li>
              <li><strong className="text-navy">Free Trial Booking:</strong> Your name, email address, WhatsApp number, your child&apos;s age and level, and your preferred schedule when you book a free trial class.</li>
              <li><strong className="text-navy">Communications:</strong> Any information you share when you contact us via email, WhatsApp, or social media.</li>
              <li><strong className="text-navy">Course Enrollment:</strong> Name, email, payment details (processed by our secure third-party payment processor; we do not store card numbers), and scheduling preferences.</li>
            </ul>
            <h3 className="font-playfair font-semibold text-lg text-navy mb-3 mt-6">
              1b. Information Collected Automatically
            </h3>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li><strong className="text-navy">Usage Data:</strong> Pages visited, time spent on pages, links clicked, and referring URLs, collected via standard web server logs.</li>
              <li><strong className="text-navy">Device Information:</strong> Browser type, operating system, screen resolution, and approximate geographic location (city/country level only) from your IP address.</li>
              <li><strong className="text-navy">Cookies:</strong> We use essential cookies required for the website to function. We do not use advertising or tracking cookies. See Section 7 for details.</li>
            </ul>

            {/* Section 2 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              2. How We Use Your Information
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              We use the information we collect for the following purposes only:
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li>To respond to your inquiries, schedule trial classes, and communicate with you about your enrollment.</li>
              <li>To match you with an appropriate certified Quran teacher based on your child&apos;s age, level, and preferences.</li>
              <li>To send you scheduling reminders, class confirmations, and service-related communications via email or WhatsApp.</li>
              <li>To process payments securely for enrolled courses.</li>
              <li>To improve our website, courses, and customer service based on usage patterns.</li>
              <li>To comply with applicable legal obligations.</li>
            </ul>
            <p className="text-grey leading-relaxed mb-4">
              We <strong className="text-navy">do not</strong> sell, rent, or share your personal information with third parties for marketing purposes. We do not use your information to send unsolicited promotional emails. Every communication we send is directly related to your inquiry or enrollment.
            </p>

            {/* Section 3 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              3. Legal Basis for Processing (GDPR / UK GDPR)
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              If you are located in the European Economic Area (EEA) or the United Kingdom, we process your personal data under the following legal bases:
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li><strong className="text-navy">Contractual Necessity:</strong> Processing required to provide the Quran education services you have requested or enrolled in.</li>
              <li><strong className="text-navy">Legitimate Interests:</strong> Responding to inquiries, improving our services, and preventing fraud, where our interests do not override your rights.</li>
              <li><strong className="text-navy">Consent:</strong> Where we ask for your explicit consent (e.g., optional marketing communications), you may withdraw consent at any time.</li>
              <li><strong className="text-navy">Legal Obligation:</strong> Where we are required to retain certain records by applicable law.</li>
            </ul>

            {/* Section 4 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              4. Children&apos;s Privacy
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              Our services are provided to families, and many of our students are minors. We take children&apos;s privacy seriously and comply with applicable laws including the Children&apos;s Online Privacy Protection Act (COPPA).
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li>We do not knowingly collect personal information directly from children under 13 without verifiable parental consent.</li>
              <li>All account creation, form submission, and communication is conducted by a parent or guardian on behalf of their child.</li>
              <li>Online class sessions are conducted via video call (Zoom/Skype) and we encourage parents to be present, especially for younger children.</li>
              <li>We do not share any information about minor students with third parties except as necessary to deliver the educational service.</li>
            </ul>
            <p className="text-grey leading-relaxed mb-4">
              If you believe we have inadvertently collected information from a child without proper consent, please contact us immediately at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold font-semibold hover:underline">{CONTACT_EMAIL}</a> and we will promptly delete it.
            </p>

            {/* Section 5 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              5. Data Sharing and Third Parties
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              We do not sell or rent your personal information. We may share your information only in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li><strong className="text-navy">Service Providers:</strong> We use third-party tools to deliver our services, including Zoom/Skype for class delivery, email service providers for communications, and payment processors for transactions. These providers are contractually bound to use your data only as directed by us.</li>
              <li><strong className="text-navy">WhatsApp:</strong> When you contact us via WhatsApp, your communications are subject to WhatsApp&apos;s own privacy policy (Meta Platforms, Inc.).</li>
              <li><strong className="text-navy">Legal Requirements:</strong> We may disclose information if required by law, court order, or to protect the rights, property, or safety of Ease Quran Academy, our students, or others.</li>
              <li><strong className="text-navy">Business Transfer:</strong> In the unlikely event of a merger or acquisition, your information may be transferred as part of that transaction, and we will notify you.</li>
            </ul>

            {/* Section 6 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              6. Data Retention
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              We retain your personal information only as long as necessary to provide our services and fulfill the purposes described in this policy:
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li><strong className="text-navy">Active Students:</strong> Data is retained for the duration of enrollment plus 12 months after the last class, for customer support purposes.</li>
              <li><strong className="text-navy">Inquiries (Non-Enrolled):</strong> Contact and trial booking data is retained for 6 months if you do not proceed with enrollment.</li>
              <li><strong className="text-navy">Payment Records:</strong> Transaction records are retained for 7 years as required by financial regulations.</li>
              <li><strong className="text-navy">Deletion Requests:</strong> You may request deletion of your data at any time (see Section 8). We will action all deletion requests within 30 days.</li>
            </ul>

            {/* Section 7 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              7. Cookies
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              Our website uses cookies to ensure basic functionality. We categorize our cookies as follows:
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li><strong className="text-navy">Essential Cookies:</strong> Necessary for the website to function. These cannot be disabled. They include session management and security tokens.</li>
              <li><strong className="text-navy">Analytics (Optional):</strong> If analytics tools are enabled, they collect anonymized data about how visitors use our site (pages visited, time on site). No personally identifiable information is collected through analytics.</li>
            </ul>
            <p className="text-grey leading-relaxed mb-4">
              You can control cookies through your browser settings. Note that disabling essential cookies may affect how the website functions. We do not use cookies for advertising or cross-site tracking.
            </p>

            {/* Section 8 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              8. Your Privacy Rights
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li><strong className="text-navy">Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong className="text-navy">Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
              <li><strong className="text-navy">Deletion:</strong> Request that we delete your personal information (&ldquo;right to be forgotten&rdquo;).</li>
              <li><strong className="text-navy">Portability:</strong> Request that we provide your data in a structured, machine-readable format.</li>
              <li><strong className="text-navy">Objection:</strong> Object to our processing of your data based on legitimate interests.</li>
              <li><strong className="text-navy">Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time without affecting prior processing.</li>
              <li><strong className="text-navy">California Residents (CCPA):</strong> You have the right to know what personal information is collected, to opt out of the sale of personal information (we do not sell data), and to non-discrimination for exercising your rights.</li>
            </ul>
            <p className="text-grey leading-relaxed mb-4">
              To exercise any of these rights, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold font-semibold hover:underline">{CONTACT_EMAIL}</a>.{" "}
              We will respond within 30 days. We may need to verify your identity before actioning your request.
            </p>

            {/* Section 9 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              9. Data Security
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:
            </p>
            <ul className="list-disc list-inside text-grey leading-relaxed space-y-2 mb-4 pl-2">
              <li>HTTPS encryption on all pages of our website.</li>
              <li>Secure, encrypted email for all communications containing personal data.</li>
              <li>Access controls limiting who within our organization can view student data.</li>
              <li>Third-party payment processing with PCI-DSS compliant providers. We never store raw card numbers.</li>
            </ul>
            <p className="text-grey leading-relaxed mb-4">
              While we take reasonable steps to protect your information, no method of transmission over the internet is 100% secure. If you believe your information has been compromised, please contact us immediately.
            </p>

            {/* Section 10 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              10. International Data Transfers
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              Ease Quran Online Academy is operated from Pakistan and serves students primarily in the United States. When you submit information through our website, it may be transferred to and processed in countries outside your own. We ensure that any such transfers are protected by appropriate safeguards, including standard contractual clauses where required by the GDPR.
            </p>

            {/* Section 11 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              11. Links to Third-Party Websites
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              Our website may contain links to third-party websites (e.g., social media pages, Zoom). We are not responsible for the privacy practices of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            {/* Section 12 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              12. Changes to This Policy
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make significant changes, we will update the &ldquo;Effective Date&rdquo; at the top of this page. We encourage you to review this policy periodically. Continued use of our services after changes are posted constitutes your acceptance of the updated policy.
            </p>

            {/* Section 13 */}
            <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
              13. Contact Us
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
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
                href="/terms-conditions"
                className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
              >
                Read our Terms &amp; Conditions →
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
