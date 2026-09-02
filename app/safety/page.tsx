import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Video, UserCheck, Users, BadgeCheck } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Child Safety & Parent Rights Policy",
  description:
    "Our Child Safety & Parent Rights Policy: parents may sit in on any class, classes may be recorded, and every teacher is credential-verified.",
  alternates: {
    canonical: "https://easequran.com/safety",
  },
  openGraph: {
    title: "Child Safety & Parent Rights Policy | Ease Quran Academy",
    description:
      "How Ease Quran keeps your child safe: parent oversight, recorded classes, no private contact, female teachers on request, and credential-verified teachers.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Ease Quran Child Safety Policy" }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Child Safety & Parent Rights Policy — Ease Quran Online Academy",
  url: "https://easequran.com/safety",
  description: "Ease Quran's Child Safety & Parent Rights Policy: parent oversight, recorded classes, no private teacher-student contact, and credential-verified teachers.",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  inLanguage: "en-US",
};

const policies = [
  {
    icon: Users,
    title: "Parents May Sit In on Any Class",
    text: "You are always welcome to be present for any lesson, at any time, without prior notice. Our classes are designed to be fully open to parents. We encourage you to sit in, especially during your child's first few sessions, so you can see exactly how your child is taught and build your own trust in the teacher.",
  },
  {
    icon: Video,
    title: "Classes May Be Recorded by Parents",
    text: "Parents are free to record any class for their own review or for their child to revise from later. Transparency matters to us. There is nothing in an Ease Quran lesson that we would not want a parent to see or keep.",
  },
  {
    icon: ShieldCheck,
    title: "No Private Teacher–Student Contact",
    text: "Teachers and students do not communicate privately outside of scheduled classes. All scheduling, updates, and communication happen through the academy and the parent, never one-to-one between a teacher and a child outside the lesson. This is a firm, non-negotiable rule.",
  },
  {
    icon: UserCheck,
    title: "Female Teachers for Girls on Request",
    text: "Families may request a certified female teacher for daughters and sisters at any time. When requested, all of your daughter's classes, including the trial, will be taught exclusively by a female teacher with no male teacher involvement at any point.",
  },
  {
    icon: BadgeCheck,
    title: "All Teachers Are Credential-Verified",
    text: "Every teacher at Ease Quran holds verified certification from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. We confirm credentials before any teacher is allowed to teach a single student.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">Child Safety &amp; Parent Rights</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Your Child, Your Peace of Mind
            </span>
            <h1 className="heading-1 text-white mb-6">
              Our Child Safety &amp; Parent Rights Policy
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Trusting someone with your child&apos;s Quran education is a serious decision. Here is
              exactly how we protect your child and keep you in control, in plain language, with no
              fine print.
            </p>
          </div>
        </div>
      </section>

      {/* Policy points */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-5">
            {policies.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-5 bg-offwhite border border-gray-100 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-gold" />
                </div>
                <div>
                  <h2 className="font-playfair font-bold text-navy text-lg mb-2">{title}</h2>
                  <p className="text-grey text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-grey text-sm mt-10 max-w-2xl mx-auto">
            Have a question this policy doesn&apos;t answer? You are welcome to{" "}
            <Link href="/contact" className="text-gold font-semibold hover:underline">
              contact us
            </Link>{" "}
            before you enroll, or simply{" "}
            <Link href="/free-trial" className="text-gold font-semibold hover:underline">
              book a free trial class
            </Link>{" "}
            and see everything for yourself.
          </p>
        </div>
      </section>

      <CTASection
        headline="See It for Yourself, Free"
        subtext="Book a free trial class and sit in alongside your child. No card required, no commitment, complete transparency from the first minute."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
