import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import TeacherCard from "@/components/TeacherCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";
import LiteYouTube from "@/components/LiteYouTube";
import { videos } from "@/components/proof";
import { Shield, Users, BookOpen, Star, AlertCircle, Globe, UserCheck, CheckCircle, Award } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Online Quran Classes for Kids & Adults in USA | Ease Quran Academy" },
  description:
    "Book certified online Quran classes for your family. Wifaq ul Madaris certified teachers, free first class. Serving families across the USA.",
  alternates: { canonical: "https://easequran.com" },
};

const courses = [
  {
    title: "Quran for Kids",
    description:
      "Fun, structured Quran learning designed for children ages 4–14. Patient teachers who understand how children learn.",
    image: "/images/Courses/course-kids.webp",
    href: "/courses/quran-for-kids",
    badge: "Most Popular",
  },
  {
    title: "Tajweed (Quran Recitation)",
    description:
      "Master the rules of Tajweed with an expert certified teacher. Perfect your pronunciation and recite the Quran beautifully.",
    image: "/images/Courses/course-tajweed.webp",
    href: "/courses/tajweed",
  },
  {
    title: "Hifz Program",
    description:
      "A structured memorization program with proven techniques to help students memorize the complete Quran.",
    image: "/images/Courses/course-hifz.webp",
    href: "/courses/hifz",
  },
  {
    title: "Noorani Qaida",
    description:
      "The perfect starting point for absolute beginners. Learn Arabic letters and basic reading rules from scratch.",
    image: "/images/Courses/course-noorani.webp",
    href: "/courses/noorani-qaida",
  },
  {
    title: "Arabic Language",
    description:
      "Learn to understand the language of the Quran. Conversational and Classical Arabic courses for all levels.",
    image: "/images/Courses/course-arabic.webp",
    href: "/courses/arabic-language",
  },
  {
    title: "Islamic Studies",
    description:
      "Comprehensive Islamic education covering Fiqh, Seerah, Aqeedah, and Islamic manners for all ages.",
    image: "/images/Courses/course-islamic.webp",
    href: "/courses/islamic-studies",
  },
];

const steps = [
  {
    number: "01",
    title: "Book Your Free Trial",
    description:
      "Fill out our quick form or WhatsApp us. We'll schedule your free, no-commitment trial class within 24 hours.",
  },
  {
    number: "02",
    title: "Meet Your Certified Teacher",
    description:
      "Get matched with a Wifaq ul Madaris certified teacher suited to your child's age, level, and learning style.",
  },
  {
    number: "03",
    title: "Start Your Quran Journey",
    description:
      "Learn from the comfort of your home, on your schedule. Track progress and see results from the very first class.",
  },
];

const painPoints = [
  {
    icon: AlertCircle,
    title: "Teachers Who Cancel Last Minute",
    description:
      "Unreliable schedules and constant teacher changes leave your child's education inconsistent and frustrating.",
  },
  {
    icon: Globe,
    title: "Uncertified, Unverified Teachers",
    description:
      "You can never be sure of the credentials, background, or teaching quality of random online teachers.",
  },
  {
    icon: UserCheck,
    title: "No Female Teachers for Sisters",
    description:
      "Finding a qualified, female Quran teacher for your daughters or wife shouldn't be this difficult.",
  },
];

const faqs = [
  {
    question: "How do online Quran classes work?",
    answer:
      "Our classes are conducted live via Zoom or Skype, one-on-one between your child and the teacher. Each session follows a structured curriculum with real-time feedback, just like an in-person class, but from the comfort of your home.",
  },
  {
    question: "Are your teachers certified?",
    answer:
      "Yes. All our teachers hold certification from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. Our founder Shah Zaib has 6+ years of experience specifically teaching Western, English-speaking students.",
  },
  {
    question: "Do you have female Quran teachers?",
    answer:
      "Absolutely. Our teacher Almas Fatima is a Qaria e Quran with a Bachelor in Islamic Studies, available specifically for sisters and children. We understand and fully respect this requirement.",
  },
  {
    question: "What is the free trial class?",
    answer:
      "Your first class is completely free with no credit card required and no commitment. This gives your child a chance to experience our teaching style, meet the teacher, and see if it's the right fit before you pay anything.",
  },
  {
    question: "What age groups do you teach?",
    answer:
      "We teach students of all ages, from children as young as 4 years old to adults and seniors. We also have a specialized program for new Muslims (reverts) who are starting their Quran journey from scratch.",
  },
  {
    question: "Can I choose a specific class schedule?",
    answer:
      "Yes. We offer flexible scheduling designed for busy families in the USA. We accommodate all US time zones and can schedule classes in mornings, evenings, and weekends.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Our plans start at $40/month for 2 classes/week (8/month), 30 minutes each. Our most popular plan is Steady at $55/month for 3 classes/week (12/month). We also offer custom family and sibling discounts, see our pricing page for details.",
  },
  {
    question: "What if my child doesn't like the teacher?",
    answer:
      "Your child's comfort is our priority. If the teacher isn't the right fit, we will match you with another teacher at no charge. We want every family to have a learning experience they truly love.",
  },
];

const cities = [
  { name: "New York", href: "/locations/new-york" },
  { name: "Houston", href: "/locations/houston" },
  { name: "Chicago", href: "/locations/chicago" },
  { name: "Los Angeles", href: "/locations/los-angeles" },
  { name: "Paterson, NJ", href: "/locations/paterson-new-jersey" },
  { name: "Dearborn, MI", href: "/locations/dearborn-michigan" },
  { name: "Dallas", href: "/locations/dallas" },
  { name: "Philadelphia", href: "/locations/philadelphia" },
  { name: "Atlanta", href: "/locations/atlanta" },
  { name: "Columbus, OH", href: "/locations/columbus-ohio" },
  { name: "Washington, D.C.", href: "/locations/washington-dc" },
  { name: "Minneapolis-St. Paul", href: "/locations/minneapolis" },
  { name: "Boston", href: "/locations/boston" },
];

const WHATSAPP_NUMBER = "923195657389";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi I am interested in booking a free trial Quran class"
);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  logo: "https://easequran.com/images/logo.png",
  email: "info@easequran.com",
  description:
    "Certified online Quran academy serving Muslim families across the United States.",
  sameAs: [
    "https://www.facebook.com/share/18WdHQVNWT/",
    "https://www.instagram.com/contacteasequran",
    "https://www.linkedin.com/company/ease-quran/",
    "https://youtube.com/@contacteasequran",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const teachersSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shah Zaib",
    jobTitle: "Founder & Head Teacher",
    description:
      "Founder and head teacher at Ease Quran Online Academy, certified from Wifaq ul Madaris Al-Arabia, with 6+ years teaching Western, English-speaking students.",
    worksFor: { "@type": "EducationalOrganization", name: "Ease Quran Online Academy", url: "https://easequran.com" },
    alumniOf: { "@type": "EducationalOrganization", name: "Wifaq ul Madaris Al-Arabia" },
    knowsAbout: ["Quran", "Tajweed", "Hifz", "Islamic Studies"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Umair",
    jobTitle: "Tajweed & Hifz Specialist",
    description:
      "Certified Quran teacher at Ease Quran Online Academy specialising in Tajweed and Hifz, credentialed by Wifaq ul Madaris Al-Arabia.",
    worksFor: { "@type": "EducationalOrganization", name: "Ease Quran Online Academy", url: "https://easequran.com" },
    alumniOf: { "@type": "EducationalOrganization", name: "Wifaq ul Madaris Al-Arabia" },
    knowsAbout: ["Tajweed", "Hifz", "Quran recitation"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Almas Fatima",
    jobTitle: "Female Quran Teacher — Qaria e Quran",
    description:
      "Certified female Quran teacher at Ease Quran Online Academy for sisters and children, holding a Wifaq ul Madaris Al-Arabia certification and a Bachelor in Islamic Studies.",
    worksFor: { "@type": "EducationalOrganization", name: "Ease Quran Online Academy", url: "https://easequran.com" },
    alumniOf: { "@type": "EducationalOrganization", name: "Wifaq ul Madaris Al-Arabia" },
    knowsAbout: ["Quran for Kids", "Tajweed", "Noorani Qaida", "Islamic Studies"],
  },
];

const videoSchema = videos.map((v) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: v.name,
  description: v.description,
  thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
  uploadDate: v.uploadDate,
  embedUrl: `https://www.youtube.com/embed/${v.id}`,
  contentUrl: `https://youtu.be/${v.id}`,
}));

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {teachersSchema.map((t, i) => (
        <script
          key={`teacher-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(t) }}
        />
      ))}
      {videoSchema.map((v, i) => (
        <script
          key={`video-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(v) }}
        />
      ))}

      {/* HERO */}
      <section className="relative min-h-[600px] lg:h-[700px] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-child.webp"
          alt="Muslim child learning Quran online with a certified teacher"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay: dark enough for text, light enough to see the image */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-navy/60" />
        {/* Gold glow accents */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 60%, #F5A623 0%, transparent 45%), radial-gradient(circle at 85% 15%, #F5A623 0%, transparent 35%)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/60 to-transparent" />

        <div className="container-custom relative z-10 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: text content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs px-4 py-2 rounded-full mb-6 border border-white/20 backdrop-blur-sm">
                <CheckCircle size={12} className="text-gold" />
                <span>Available in All 50 States</span>
              </div>
              <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Online Quran Classes{" "}
                <span className="text-gold">Your Family</span> Can Trust
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                Certified, one-on-one Quran education for kids and adults across
                America. Wifaq ul Madaris certified teachers. Female teachers available.
                Free first class.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/free-trial"
                  className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-center text-sm shadow-lg shadow-gold/30"
                >
                  Book Your Free Trial Class
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-center text-sm flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
              <TrustBadges dark />
            </div>

            {/* Right: premium glass stat cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { number: "Female", label: "Teachers Available", sub: "For sisters & daughters" },
                { number: "6+",   label: "Years Experience", sub: "With Western students" },
                { number: "100%", label: "Certified Teachers", sub: "Wifaq ul Madaris" },
                { number: "Free", label: "First Trial Class", sub: "No credit card needed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <p className="font-playfair font-bold text-4xl text-gold mb-1">{stat.number}</p>
                  <p className="text-white font-semibold text-sm">{stat.label}</p>
                  <p className="text-white/60 text-xs mt-1">{stat.sub}</p>
                </div>
              ))}

              {/* Award badge */}
              <div className="col-span-2 bg-white/10 backdrop-blur-md border border-gold/40 rounded-2xl p-4 flex items-center gap-4">
                <div className="bg-gold/20 rounded-xl p-3 shrink-0">
                  <Award size={24} className="text-gold" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Wifaq ul Madaris Al-Arabia Certified</p>
                  <p className="text-white/60 text-xs mt-0.5">Pakistan's largest Islamic education board, globally recognized</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gold py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "Free", label: "First Class" },
              { number: "50", label: "States Covered" },
              { number: "6+", label: "Years Experience" },
              { number: "100%", label: "Certified Teachers" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-playfair font-bold text-3xl text-navy">{stat.number}</p>
                <p className="text-navy/70 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-gold text-navy text-xs md:text-sm font-bold tracking-widest uppercase px-5 py-2.5 rounded-full shadow-md shadow-gold/30 mb-5">
              <AlertCircle size={16} className="shrink-0" />
              We Understand Your Struggle
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-navy mt-1 mb-4">
              Tired of Unreliable Online Quran Academies?
            </h2>
            <p className="text-grey max-w-2xl mx-auto leading-relaxed">
              As a Muslim parent in America, you deserve more than broken promises and
              amateur teachers. Here&apos;s what too many families are dealing with, and why
              Ease Quran was built to solve every one of these problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {painPoints.map((p) => {
              const Icon = p.icon;
              return (
              <div key={p.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-red-400" />
                </div>
                <h3 className="font-playfair font-bold text-lg text-navy mb-2">{p.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{p.description}</p>
              </div>
              );
            })}
          </div>
          <div className="bg-navy rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-playfair font-bold text-2xl md:text-3xl text-white mb-3">
              Ease Quran Solves All of This
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-6 leading-relaxed">
              Every teacher at Ease Quran is certified from Wifaq ul Madaris, rigorously
              vetted, and trained to teach Western, English-speaking students. We offer
              female teachers, consistent scheduling, and a free first class with zero
              commitment.
            </p>
            <Link
              href="/free-trial"
              className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm"
            >
              Try a Free Class Today
            </Link>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Our Programs</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mt-3 mb-4">
              Online Quran Courses for Every Student
            </h2>
            <p className="text-grey max-w-xl mx-auto">
              Whether your child is just beginning or an adult looking to deepen their
              connection with the Quran, we have the right course for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.href} {...course} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/courses"
              className="inline-block border-2 border-navy text-navy font-semibold px-8 py-3 rounded-xl hover:bg-navy hover:text-white transition-all duration-200 text-sm"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Simple Process</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mt-3 mb-4">
              How It Works
            </h2>
            <p className="text-grey max-w-xl mx-auto">
              Getting started with Ease Quran is simple. Three steps and your child is
              learning with a certified Quran teacher.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gold text-navy font-playfair font-bold text-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="font-playfair font-bold text-lg text-navy mb-3">{step.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] border-t-2 border-dashed border-gold/30" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/free-trial"
              className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm"
            >
              Book Your Free Trial Now
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="py-12 bg-white">
        <div className="container-custom">

          {/* Section header */}
          <div className="text-center mb-8">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-2">Who We Are</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">Our Mission, Vision &amp; Values</h2>
          </div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">

            {/* MISSION */}
            <div className="flex flex-col items-center text-center px-6 py-7 rounded-2xl border-2 border-gray-400 hover:border-gold hover:shadow-md transition-all duration-200">
              <div className="relative w-20 h-20 mb-4">
                <div className="absolute inset-0 rounded-full border-[3px] border-gold" />
                <div className="absolute inset-[5px] rounded-full border-2 border-gold" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-gold" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l7.5 13.5L13 12l4 5h4M15 6a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-gold text-[10px] font-bold tracking-widest uppercase mb-2">Our Mission</span>
              <h3 className="font-playfair font-bold text-lg text-navy mb-2 leading-snug">
                Authentic Quran Education for Every Muslim Family in America
              </h3>
              <p className="text-grey text-xs leading-relaxed">
                We remove every barrier between your family and a certified, trusted Quran teacher, no matter where you live or how busy your schedule is.
              </p>
            </div>

            {/* VISION */}
            <div className="flex flex-col items-center text-center px-6 py-7 rounded-2xl border-2 border-gray-400 hover:border-gold hover:shadow-md transition-all duration-200">
              <div className="relative w-20 h-20 mb-4">
                <div className="absolute inset-0 rounded-full border-[3px] border-navy" />
                <div className="absolute inset-[5px] rounded-full border-2 border-navy" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(11,30,91,0.08)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-navy" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-3 0M12 3a6 6 0 110 12 6 6 0 010-12z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-navy text-[10px] font-bold tracking-widest uppercase mb-2">Our Vision</span>
              <h3 className="font-playfair font-bold text-lg text-navy mb-2 leading-snug">
                A Generation of Western Muslims Who Live by the Quran
              </h3>
              <p className="text-grey text-xs leading-relaxed">
                American Muslim homes where children recite beautifully, adults understand the meaning, and the Book of Allah is a living presence from coast to coast.
              </p>
            </div>

            {/* VALUES */}
            <div className="flex flex-col items-center text-center px-6 py-7 rounded-2xl border-2 border-gray-400 hover:border-gold hover:shadow-md transition-all duration-200">
              <div className="relative w-20 h-20 mb-4">
                <div className="absolute inset-0 rounded-full border-[3px] border-gold" />
                <div className="absolute inset-[5px] rounded-full border-2 border-gold" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-gold" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-gold text-[10px] font-bold tracking-widest uppercase mb-2">Our Values</span>
              <h3 className="font-playfair font-bold text-lg text-navy mb-2 leading-snug">
                Trust, Excellence and Genuine Care for Every Student
              </h3>
              <p className="text-grey text-xs leading-relaxed">
                Certified teachers only, transparent pricing, full respect for Islamic guidelines, and a free-trial guarantee. Your trust means everything to us.
              </p>
            </div>

          </div>

          {/* Value pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: <Shield className="w-3.5 h-3.5 text-gold" />, label: "Trust" },
              { icon: <Award className="w-3.5 h-3.5 text-gold" />, label: "Excellence" },
              { icon: <Users className="w-3.5 h-3.5 text-gold" />, label: "Inclusivity" },
              { icon: <Globe className="w-3.5 h-3.5 text-gold" />, label: "50 States" },
            ].map((v) => (
              <div key={v.label} className="flex items-center gap-2 bg-offwhite border border-gold/20 rounded-full py-2 px-5">
                {v.icon}
                <span className="text-navy text-xs font-semibold">{v.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden max-w-sm mx-auto lg:mx-0" style={{ height: "480px" }}>
                <Image
                  src="/images/founder.webp"
                  alt="Shah Zaib - Founder of Ease Quran Online Academy, Wifaq ul Madaris Certified"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gold rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <Award size={20} className="text-navy shrink-0" />
                <div>
                  <p className="font-bold text-navy text-sm">Wifaq ul Madaris</p>
                  <p className="text-navy/70 text-xs">Globally Recognized</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">Meet the Founder</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mt-3 mb-2">Shah Zaib</h2>
              <p className="text-gold font-semibold mb-4">
                Founder & Head Teacher · Certified from Wifaq ul Madaris
              </p>
              <p className="text-grey leading-relaxed mb-6">
                Shah Zaib founded Ease Quran with a mission that is deeply personal: to
                give every Muslim family in America access to a Quran teacher they can
                genuinely trust. Certified from Wifaq ul Madaris Al-Arabia, the largest
                Islamic education board in Pakistan and globally recognized, Shah Zaib
                brings 6+ years of dedicated experience teaching Western, English-speaking
                students.
              </p>
              <blockquote className="border-l-4 border-gold pl-5 mb-6">
                <p className="font-playfair text-lg italic text-navy leading-relaxed">
                  &ldquo;I built Ease Quran because every Muslim family in America deserves a
                  Quran teacher they can truly trust.&rdquo;
                </p>
                <footer className="mt-2 text-sm text-grey">— Shah Zaib, Founder</footer>
              </blockquote>
              <div className="flex flex-wrap gap-3">
                {[
                  "Wifaq ul Madaris Certified",
                  "6+ Years Teaching Experience",
                  "Speciality: Western Students",
                  "English-Speaking Teaching Style",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="bg-offwhite text-navy text-xs font-medium px-4 py-2 rounded-full border border-gray-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Our Teachers</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mt-3 mb-4">
              Expert, Certified Quran Teachers
            </h2>
            <p className="text-grey max-w-xl mx-auto">
              All teachers are certified from Wifaq ul Madaris and trained to deliver an
              engaging, results-driven learning experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <TeacherCard
              name="Muhammad Umair"
              image="/images/teacher-1.webp"
              credential="Certified from Wifaq ul Madaris"
              speciality="Tajweed & Hifz Specialist"
              experience="2 years of dedicated Quran teaching"
            />
            <TeacherCard
              name="Almas Fatima"
              image="/images/teacher-2.webp"
              credential="Certified from Wifaq ul Madaris"
              qualification="Qaria e Quran · Bachelor in Islamic Studies"
              speciality="Available for sisters and children"
              experience="Teaching since 2022"
              badge="Female Teacher"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Why Ease Quran</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mt-3 mb-4">
              The Academy Built for Muslim Families in America
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-gold" size={28} />,
                title: "Verified, Certified Teachers",
                description:
                  "Every teacher holds certification from Wifaq ul Madaris, the gold standard in Islamic education. No random tutors, no unverified teachers.",
              },
              {
                icon: <Users className="text-gold" size={28} />,
                title: "Female Teachers for Sisters",
                description:
                  "We provide qualified female Quran teachers for sisters and children. This is a core part of how we serve Muslim families with Islamic values.",
              },
              {
                icon: <BookOpen className="text-gold" size={28} />,
                title: "Designed for Western Students",
                description:
                  "Our teachers are specifically trained to teach English-speaking students. Classes conducted in English with cultural understanding of Muslim life in America.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">{pillar.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL PROOF */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              What Our Students &amp; Families Say
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mt-3 mb-4">
              Real Students, Real Results
            </h2>
            <p className="text-grey leading-relaxed">
              We&apos;ve taught Western, English-speaking students across the UK and USA.
            </p>
          </div>

          {/* WhatsApp review screenshots */}
          <div className="mb-14">
            <WhatsAppReviewsRow />
          </div>

          {/* Video testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videos.map((v) => (
              <LiteYouTube key={v.id} id={v.id} caption={v.caption} title={v.name} />
            ))}
          </div>
        </div>
      </section>

      {/* NEAR ME */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Quran Classes Near You</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mt-3 mb-5">
              Searching for &ldquo;Online Quran Classes Near Me&rdquo;?
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              If you have been typing &ldquo;Quran classes near me&rdquo; or &ldquo;Quran teacher near
              me&rdquo; into Google, here is the good news: the best teacher for your family does not
              have to be the closest one. Every Ease Quran class is live, one-on-one, and online, so a
              certified teacher is always right in your home, wherever you live in the USA.
            </p>
            <p className="text-grey leading-relaxed">
              No commute, no fixed group schedule, and no settling for whoever happens to be nearby.
              You get a Wifaq ul Madaris certified teacher matched to your child, with a free first
              class to start.{" "}
              <Link href="/free-trial" className="text-gold font-semibold hover:underline">
                Book your free trial class
              </Link>{" "}
              from anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* USA CITIES */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Available in All 50 States</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mt-3 mb-3">
              Online Quran Classes Available Nationwide
            </h2>
            <p className="text-grey max-w-xl mx-auto">
              Wherever you are in America, we bring certified Quran education to your home.
              Available to Muslim families in all 50 states.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            {cities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="border border-gray-200 rounded-xl p-4 text-center text-sm font-medium text-navy hover:border-gold hover:text-gold hover:bg-offwhite transition-all duration-200"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <p className="text-center text-grey text-sm">
            Online classes available in all 50 states •{" "}
            <Link href="/free-trial" className="text-gold hover:underline font-medium">
              Book a free trial from anywhere
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Common Questions</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-grey max-w-xl mx-auto">
              Everything Muslim parents in America want to know about our online Quran classes.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-10">
            <p className="text-grey text-sm mb-4">Still have questions? We&apos;re here to help.</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-navy text-white font-semibold px-8 py-3 rounded-xl hover:bg-navy/90 transition-all text-sm"
            >
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection />
    </>
  );
}
