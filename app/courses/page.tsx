import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Online Quran Courses in USA",
  description:
    "Browse all online Quran courses at Ease Quran Academy: Tajweed, Hifz, Noorani Qaida, Arabic, Islamic Studies, and more. Free first class.",
  alternates: {
    canonical: "https://easequran.com/courses",
  },
  openGraph: {
    title: "Online Quran Courses | Ease Quran Online Academy USA",
    description:
      "Browse all online Quran courses at Ease Quran Academy: Tajweed, Hifz, Noorani Qaida, Arabic, Islamic Studies, and more. Free first class.",
    images: ["/images/og-image.png"],
  },
};

const courses = [
  {
    href: "/courses/quran-for-kids",
    image: "/images/Courses/course-kids.webp",
    badge: "Most Popular",
    title: "Quran for Kids",
    description:
      "Fun, structured Quran classes for children ages 4–14. Certified male and female teachers available. Your child learns Arabic letters, short Surahs, and Islamic manners.",
    tags: ["Ages 4–14", "Female Teachers Available", "Beginner Friendly"],
  },
  {
    href: "/courses/tajweed",
    image: "/images/Courses/course-tajweed.webp",
    badge: null,
    title: "Tajweed (Quran Recitation)",
    description:
      "Master the rules of proper Quranic recitation. Learn Makharij, Noon Sakinah, Madd rules, and more under a specialist certified from Wifaq ul Madaris.",
    tags: ["All Levels", "Pronunciation Focus", "Certified Teacher"],
  },
  {
    href: "/courses/hifz",
    image: "/images/Courses/course-hifz.webp",
    badge: null,
    title: "Hifz (Quran Memorization)",
    description:
      "A structured Juz-by-Juz online Hifz program with proven sabaq/sabaqi/manzil methodology. For children and adults with serious memorization goals.",
    tags: ["Structured Plan", "Progress Reports", "Revision System"],
  },
  {
    href: "/courses/noorani-qaida",
    image: "/images/Courses/course-noorani.webp",
    badge: "Start Here",
    title: "Noorani Qaida",
    description:
      "The ideal starting point for complete beginners of all ages. Learn all 28 Arabic letters, vowels, and letter joining before moving to the Quran.",
    tags: ["Complete Beginners", "All Ages", "Foundation Course"],
  },
  {
    href: "/courses/arabic-language",
    image: "/images/Courses/course-arabic.webp",
    badge: null,
    title: "Arabic Language",
    description:
      "Learn Classical and Modern Standard Arabic. Understand the Quran in its original language with proper grammar (Sarf and Nahw) taught by our founder.",
    tags: ["Understand Quran", "Grammar Included", "All Levels"],
  },
  {
    href: "/courses/islamic-studies",
    image: "/images/Courses/course-islamic.webp",
    badge: null,
    title: "Islamic Studies",
    description:
      "Comprehensive Islamic education covering Aqeedah, Fiqh, Seerah, Islamic manners, and Quran stories. Perfect alongside any Quran course.",
    tags: ["Kids & Adults", "Female Teacher Available", "Aqeedah & Fiqh"],
  },
  {
    href: "/courses/quran-for-adults",
    image: "/images/Courses/course-quran-for-adults.webp",
    badge: null,
    title: "Quran for Adults",
    description:
      "Never learned Quran as a child? Start now. Our adult Quran program is patient, structured, and designed specifically for Western English-speaking adults.",
    tags: ["Adults Welcome", "No Prior Knowledge", "Private Classes"],
  },
  {
    href: "/courses/quran-for-reverts",
    image: "/images/Courses/course-quran-for-reverts.webp",
    badge: "New Muslims",
    title: "Quran for Reverts",
    description:
      "Specially designed for new Muslims, covering everything from the Shahada and Kalima to Salah words, essential Duas, and short Surahs. Begin your journey with confidence.",
    tags: ["New Muslims", "Start from Zero", "Supportive Teacher"],
  },
];

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Online Quran Courses at Ease Quran Academy",
  description:
    "All online Quran courses offered by Ease Quran Online Academy for Muslim families in the USA",
  url: "https://easequran.com/courses",
  numberOfItems: 8,
  itemListElement: courses.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://easequran.com${c.href}`,
    name: c.title,
  })),
};

export default function CoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">Courses</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Our Courses
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Courses for Every Student
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              From your child&apos;s very first Arabic letter to completing the Quran with Tajweed,
              we have a certified teacher and a structured course for every stage of the journey.
              All courses are taught live, one-on-one, over a simple video call.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-7 py-3.5 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm"
              >
                Book Free Trial Class
              </Link>
              <a
                href={`https://wa.me/923195657389?text=${encodeURIComponent(
                  "Hi I am interested in booking a free trial Quran class"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-offwhite py-5 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-6 items-center justify-center text-sm text-grey font-medium">
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> Wifaq ul Madaris Certified Teachers</span>
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> Free First Class</span>
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> Female Teachers Available</span>
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> Plans from $40/month</span>
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> Serving all 50 US States</span>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              All Courses
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
              Find the Right Course for Your Family
            </h2>
            <p className="text-grey max-w-2xl mx-auto text-sm leading-relaxed">
              Every course is taught live, one-on-one, in English by a teacher certified from
              Wifaq ul Madaris Al-Arabia. Classes are scheduled around your family&apos;s timetable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-offwhite">
                  <Image
                    src={course.image}
                    alt={`${course.title} at Ease Quran Online Academy`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {course.badge && (
                    <div className="absolute top-3 right-3 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                      {course.badge}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-playfair font-bold text-lg text-navy mb-2 group-hover:text-gold transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-grey text-sm leading-relaxed mb-4 flex-1">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-offwhite text-navy text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-gold font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Simple Process
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
              How It Works
            </h2>
            <p className="text-grey max-w-xl mx-auto text-sm">
              Getting started takes less than 5 minutes. No complicated setup required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Book Free Trial", desc: "Choose a time that works for your family and book your free first class." },
              { step: "02", title: "Meet Your Teacher", desc: "Join a simple video call. Your certified teacher assesses your child's level." },
              { step: "03", title: "Get a Custom Plan", desc: "Receive a personalized learning plan tailored to your child's age and goals." },
              { step: "04", title: "Start Learning", desc: "Attend regular classes and watch your child's recitation improve week by week." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-navy text-gold font-playfair font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-playfair font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-navy rounded-2xl p-8 md:p-12 text-center">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Pricing
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
              Plans Starting at $40/Month
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Flexible monthly plans with no long-term contracts. Cancel anytime. All plans include
              a certified Wifaq ul Madaris teacher and progress tracking.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Not Sure Which Course to Choose?"
        subtext="Book a free trial class and let our teacher assess your child's level. We will recommend the perfect course, no pressure, no commitment."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
