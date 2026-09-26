import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import TeacherCard from "@/components/TeacherCard";
import { teachers } from "@/lib/teachers";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import FamilyReviews from "@/components/FamilyReviews";
import { reviewsById } from "@/lib/reviews";
import { business, PRIMARY_CTA, whatsappLink } from "@/lib/business";
import { startingPriceText, plans } from "@/lib/pricing";
import { Shield, Users, BookOpen, Globe, CheckCircle, Award, FileCheck, Mic, Video, IdCard } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Online Quran Classes for Kids & Adults in USA | Ease Quran Academy" },
  description:
    "One-on-one online Quran classes for kids and adults in the US. Qualified male and female teachers, class times arranged around your schedule, and a free trial class.",
  alternates: { canonical: "https://easequran.com" },
};

const courses = [
  {
    title: "Quran for Kids",
    description:
      "Structured Quran learning for children ages 4 to 14, with patient teachers who understand how children learn.",
    image: "/images/Courses/online-quran-classes-for-kids.webp",
    href: "/courses/quran-for-kids",
  },
  {
    title: "Tajweed (Quran Recitation)",
    description:
      "Master the rules of Tajweed with an expert certified teacher. Perfect your pronunciation and recite the Quran beautifully.",
    image: "/images/Courses/online-tajweed-classes.webp",
    href: "/courses/tajweed",
  },
  {
    title: "Hifz Program",
    description:
      "A structured memorization program with proven techniques to help students memorize the complete Quran.",
    image: "/images/Courses/online-hifz-quran-memorization.webp",
    href: "/courses/hifz",
  },
  {
    title: "Noorani Qaida",
    description:
      "The perfect starting point for absolute beginners. Learn Arabic letters and basic reading rules from scratch.",
    image: "/images/Courses/noorani-qaida-classes-online.webp",
    href: "/courses/noorani-qaida",
  },
  {
    title: "Arabic Language",
    description:
      "Learn to understand the language of the Quran. Conversational and Classical Arabic courses for all levels.",
    image: "/images/Courses/learn-arabic-online.webp",
    href: "/courses/arabic-language",
  },
  {
    title: "Islamic Studies",
    description:
      "Comprehensive Islamic education covering Fiqh, Seerah, Aqeedah, and Islamic manners for all ages.",
    image: "/images/Courses/online-islamic-studies-classes.webp",
    href: "/courses/islamic-studies",
  },
];

const steps = [
  {
    number: "01",
    title: "Book Your Free Trial",
    description:
      `Tell us the days and times that suit you, using the form or WhatsApp. We reply ${business.replyTime} to arrange your free trial.`,
  },
  {
    number: "02",
    title: "Meet Your Teacher",
    description:
      "We match you with a suitable teacher for the student's age, level, course and preferred schedule.",
  },
  {
    number: "03",
    title: "Continue if It Feels Right",
    description:
      "After the trial we send the teacher's recommendation. If you continue, classes are set around the same days and times.",
  },
];

const teacherChecks = [
  { icon: FileCheck, title: "Certificates", description: "We see each teacher's original Quran qualifications before anything else." },
  { icon: Mic, title: "Recitation test", description: "Every teacher recites for us, so we hear their Tajweed for ourselves." },
  { icon: Video, title: "Demo class", description: "They teach a demo lesson while we watch how they explain and correct." },
  { icon: IdCard, title: "ID and references", description: "We confirm who they are and speak to people who know their teaching." },
];

const faqs = [
  {
    question: "How do online Quran classes work?",
    answer:
      `Classes are live on ${business.platform}, one-on-one between the student and the teacher. The teacher listens, corrects and explains in real time, the same way a teacher would sitting beside your child.`,
  },
  {
    question: "Are your teachers certified?",
    answer:
      "Every teacher holds a recognized Quran qualification. Before anyone teaches with us, we check their original certificates, hear them recite, watch a demo class, and check their ID and references.",
  },
  {
    question: "Do you have female Quran teachers?",
    answer:
      "Yes. You can ask for a female teacher for your daughter or for yourself, and we can arrange one at most times.",
  },
  {
    question: "What is the free trial class?",
    answer:
      `The first ${business.trialMinutes}-minute class is free, for every student. The teacher checks the student's level, teaches a short lesson and recommends where to start. You don't need a card, and there is no obligation to continue.`,
  },
  {
    question: "What age groups do you teach?",
    answer:
      "We teach students of all ages, from children as young as 4 years old to adults and seniors. We also have a specialized program for new Muslims (reverts) who are starting their Quran journey from scratch.",
  },
  {
    question: "Can I choose a specific class schedule?",
    answer:
      `Yes. Tell us the days and times that work for you, in your own time zone, and we arrange a suitable teacher around them. Classes run ${business.classDays}.`,
  },
  {
    question: "How much do classes cost?",
    answer:
      `${startingPriceText} (2 a week, 30 minutes each, about a month). The Steady plan is ${plans[1].price30} for ${plans[1].classesPerPackage} classes. Brothers and sisters get automatic discounts. See our pricing page for everything.`,
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

const WHATSAPP_HREF = whatsappLink("Hi I am interested in booking a free trial Quran class");

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
                <span>Online classes for families across the US</span>
              </div>
              <h1 className="heading-1 text-white mb-6">
                Online Quran Classes{" "}
                <span className="text-gold">Your Family</span> Can Trust
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                One-on-one Quran classes for children and adults, taught live on{" "}
                {business.platform} by qualified teachers. Choose the days and times that
                suit your family. Female teachers are available, and the first class is free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/free-trial"
                  className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-center text-sm shadow-lg shadow-gold/30"
                >
                  {PRIMARY_CTA}
                </Link>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200 text-center text-sm flex items-center justify-center gap-2 backdrop-blur-sm"
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
                { number: "Female", label: "Teachers Available", sub: "For sisters and daughters" },
                { number: business.experience.replace(" years", ""), label: "Years Teaching", sub: "Children and adults" },
                { number: "1:1", label: "Every Class", sub: "Live on Zoom" },
                { number: "Free", label: "First Trial Class", sub: "No card needed" },
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
                  <p className="text-white font-bold text-sm">Every teacher is checked before joining</p>
                  <p className="text-white/60 text-xs mt-0.5">Certificates, recitation test, demo class, ID and references</p>
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
              { number: "Free", label: "Trial Class" },
              { number: "7", label: "Days a Week" },
              { number: business.experience.replace(" years", ""), label: "Years Teaching" },
              { number: "1:1", label: "Every Class" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-playfair font-bold text-3xl text-navy">{stat.number}</p>
                <p className="text-navy/70 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE CHECK TEACHERS */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="eyebrow">Our Teachers</span>
            <h2 className="heading-2 text-navy mt-3 mb-4">
              How We Check Every Teacher
            </h2>
            <p className="lead leading-relaxed">
              Our teachers teach from {business.teachersBasedIn} and work around the schedules of
              families in the US. Every one of them holds a recognized Quran qualification, and
              nobody teaches with us until they have passed these four checks.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teacherChecks.map((c) => {
              const Icon = c.icon;
              return (
              <div key={c.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-2">{c.title}</h3>
                <p className="text-grey text-[15px] leading-relaxed">{c.description}</p>
              </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link
              href="/free-trial"
              className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm"
            >
              {PRIMARY_CTA}
            </Link>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="eyebrow">Our Programs</span>
            <h2 className="heading-2 text-navy mt-3 mb-4">
              Online Quran Courses for Every Student
            </h2>
            <p className="lead max-w-xl mx-auto">
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
              className="inline-block border-2 border-navy text-navy font-semibold px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-all duration-200 text-sm"
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
            <span className="eyebrow">Simple Process</span>
            <h2 className="heading-2 text-navy mt-3 mb-4">
              How It Works
            </h2>
            <p className="lead max-w-xl mx-auto">
              You tell us when suits you, and we arrange the rest around that.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gold text-navy font-playfair font-bold text-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="card-title mb-3">{step.title}</h3>
                <p className="text-grey text-[15px] leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] border-t-2 border-dashed border-gold/30" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/free-trial"
              className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm mb-4"
            >
              Book Your Free Trial
            </Link>
            <p className="text-grey text-sm">
              New to this?{" "}
              <Link href="/learn-quran-online" className="text-gold font-semibold hover:underline">
                Read our full guide to learning Quran online
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="py-12 bg-white">
        <div className="container-custom">

          {/* Section header */}
          <div className="text-center mb-8">
            <span className="eyebrow mb-2">Who We Are</span>
            <h2 className="heading-2 text-navy">Our Mission, Vision &amp; Values</h2>
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
              <span className="text-gold text-[11px] font-bold tracking-[0.13em] uppercase mb-2">Our Mission</span>
              <h3 className="card-title mb-2">
                Authentic Quran Education for Every Muslim Family in America
              </h3>
              <p className="text-grey text-[15px] leading-relaxed">
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
              <span className="text-navy text-[11px] font-bold tracking-[0.13em] uppercase mb-2">Our Vision</span>
              <h3 className="card-title mb-2">
                A Generation of Western Muslims Who Live by the Quran
              </h3>
              <p className="text-grey text-[15px] leading-relaxed">
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
              <span className="text-gold text-[11px] font-bold tracking-[0.13em] uppercase mb-2">Our Values</span>
              <h3 className="card-title mb-2">
                Trust, Excellence and Genuine Care for Every Student
              </h3>
              <p className="text-grey text-[15px] leading-relaxed">
                Qualified teachers only, clear pricing, full respect for Islamic guidelines, and a free trial before you pay anything.
              </p>
            </div>

          </div>

          {/* Value pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: <Shield className="w-3.5 h-3.5 text-gold" />, label: "Trust" },
              { icon: <Award className="w-3.5 h-3.5 text-gold" />, label: "Excellence" },
              { icon: <Users className="w-3.5 h-3.5 text-gold" />, label: "Inclusivity" },
              { icon: <Globe className="w-3.5 h-3.5 text-gold" />, label: "Across the US" },
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
                  alt="Shah Zaib, founder of Ease Quran Online Academy"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gold rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <Award size={20} className="text-navy shrink-0" />
                <div>
                  <p className="font-bold text-navy text-sm">Founder &amp; CEO</p>
                  <p className="text-navy/70 text-xs">Ease Quran Online Academy</p>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow">Meet the Founder</span>
              <h2 className="heading-2 text-navy mt-3 mb-2">Shah Zaib</h2>
              <p className="text-gold font-semibold mb-4">
                Founder &amp; CEO
              </p>
              <p className="text-grey leading-relaxed mb-6">
                Shah Zaib founded Ease Quran with a mission that is deeply personal: to
                give every Muslim family in America access to a Quran teacher they can
                genuinely trust. He holds a certificate from Wifaq ul Madaris Al-Arabia, and
                now leads the academy while our team of teachers works directly with students.
              </p>
              <blockquote className="border-l-4 border-gold pl-5 mb-6">
                <p className="font-playfair text-lg italic text-navy leading-relaxed">
                  &ldquo;I built Ease Quran because every Muslim family in America deserves a
                  Quran teacher they can truly trust.&rdquo;
                </p>
                <footer className="mt-2 text-sm text-grey">Shah Zaib, Founder</footer>
              </blockquote>
              <div className="flex flex-wrap gap-3">
                {[
                  "Wifaq ul Madaris Certified",
                  "Founder & CEO",
                  "Leads the Academy",
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
            <span className="eyebrow">Our Teachers</span>
            <h2 className="heading-2 text-navy mt-3 mb-4">
              Expert, Certified Quran Teachers
            </h2>
            <p className="lead max-w-xl mx-auto">
              Some of the teachers who teach with us. We match each student with a teacher based on
              their course, level and preferred schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              teachers.find((t) => t.slug === "ustadh-ibrahim-raza")!,
              teachers.find((t) => t.slug === "almas-fatima")!,
              teachers.find((t) => t.slug === "ustadh-bilal-farooq")!,
            ].map((t) => (
              <TeacherCard
                key={t.slug}
                name={`${t.honorific} ${t.name}`}
                image={t.photo}
                credential={t.qualifications.join(", ")}
                speciality={t.specialisation}
                experience={t.experience}
                badge={t.gender === "female" ? "Female Teacher" : undefined}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/teachers"
              className="inline-block border-2 border-navy text-navy font-semibold px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-all duration-200 text-sm"
            >
              Meet All Our Teachers
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="eyebrow">Why Ease Quran</span>
            <h2 className="heading-2 text-navy mt-3 mb-4">
              The Academy Built for Muslim Families in America
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-gold" size={28} />,
                title: "Qualified, Checked Teachers",
                description:
                  "Every teacher holds a recognized Quran qualification and passes our certificate check, recitation test, demo class and ID check before teaching.",
              },
              {
                icon: <Users className="text-gold" size={28} />,
                title: "Female Teachers for Sisters",
                description:
                  "Ask for a female teacher for your daughter or for yourself, and we can arrange one at most times.",
              },
              {
                icon: <BookOpen className="text-gold" size={28} />,
                title: "Designed for Western Students",
                description:
                  "Classes are taught in English, at a pace that suits students who did not grow up reading Arabic.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {pillar.icon}
                </div>
                <h3 className="card-title mb-3">{pillar.title}</h3>
                <p className="text-grey text-[15px] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL PROOF */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="eyebrow">
              What Our Students &amp; Families Say
            </span>
            <h2 className="heading-2 text-navy mt-3 mb-4">
              Real Students, Real Results
            </h2>
            <p className="text-grey leading-relaxed">
              Messages US families sent us on WhatsApp after their classes, shared with their permission.
            </p>
          </div>

          {/* Family reviews (lib/reviews.ts) */}
          <FamilyReviews
            reviews={reviewsById(["r002", "r005", "r004"])}
            heading="Messages From US Families"
            subline=""
          />
        </div>
      </section>

      {/* USA CITIES */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="eyebrow">Class Times Near You</span>
            <h2 className="heading-2 text-navy mt-3 mb-3">
              Classes Across the US
            </h2>
            <p className="lead max-w-xl mx-auto">
              Classes are online, so families anywhere in the US can join. Each page below explains
              how scheduling works in that area.
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
          <p className="text-center text-grey text-[15px]">
            <Link href="/locations" className="text-gold hover:underline font-medium">
              See all locations
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="eyebrow">Common Questions</span>
            <h2 className="heading-2 text-navy mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="lead max-w-xl mx-auto">
              The questions parents ask us most before booking a trial.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-10">
            <p className="text-grey text-[15px] mb-4">Still have questions? We&apos;re here to help.</p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-navy text-white font-semibold px-8 py-3 rounded-full hover:bg-navy/90 transition-all text-sm"
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
