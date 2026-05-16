import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Heart } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TeacherCard from "@/components/TeacherCard";

export const metadata: Metadata = {
  title: "Learn Arabic Online | Arabic Language Classes USA",
  description:
    "Online Arabic language classes for English speakers. Classical and conversational Arabic. Understand the Quran in its original language. Free trial class.",
  alternates: {
    canonical: "https://easequran.com/courses/arabic-language",
  },
  openGraph: {
    title: "Learn Arabic Online | Arabic Language Classes USA",
    description:
      "Online Arabic language classes for English speakers. Classical and conversational Arabic. Understand the Quran in its original language. Free trial class.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Arabic Language Classes — Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Courses", item: "https://easequran.com/courses" },
    { "@type": "ListItem", position: 3, name: "Arabic Language", item: "https://easequran.com/courses/arabic-language" },
  ],
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "Course",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "127",
  reviewCount: "127",
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Online Arabic Language Classes",
  description:
    "Online Arabic language classes for English speakers — Classical Quranic Arabic and Modern Standard Arabic. Understand the Quran in its original language.",
  provider: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  url: "https://easequran.com/courses/arabic-language",
  courseMode: "online",
  educationalLevel: "Beginner to Intermediate",
  teaches: ["Arabic Grammar", "Quranic Vocabulary", "Sarf and Nahw", "Reading Comprehension"],
  availableLanguage: "English",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between Classical Arabic and Modern Standard Arabic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Classical Arabic (Fusha) is the language of the Quran and classical Islamic texts — it has been unchanged for over 1,400 years. Modern Standard Arabic (MSA) is a contemporary form used in media, news, and formal writing across the Arab world. Our course teaches both, with an emphasis on Classical/Quranic Arabic so students can understand the Quran directly.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to understand the Quran in Arabic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With 3 classes per week and consistent self-study, most students begin to recognize and understand common Quranic words and phrases within 3–6 months. Understanding full verses with confidence typically takes 1–2 years. The Quran uses a relatively limited core vocabulary — the top 500 most frequent Quranic words cover approximately 75% of the text.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to know how to read Quran first before taking Arabic language classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is strongly recommended that you can read Arabic script before starting the Arabic language course. If you cannot read Arabic yet, we recommend starting with Noorani Qaida. Once you can read, the Arabic language course is open to you — regardless of how well you currently read.",
      },
    },
    {
      "@type": "Question",
      name: "Is Arabic grammar hard for English speakers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arabic grammar (Sarf and Nahw) is structured differently from English but is internally very logical and consistent. Our teacher, Shah Zaib, specializes in teaching Arabic grammar to English-speaking students. He explains all concepts in plain English with English examples before transitioning to Arabic — making it accessible for native English speakers.",
      },
    },
    {
      "@type": "Question",
      name: "Can children learn Arabic language alongside Quran classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Children who are already reading the Quran fluently can begin learning Arabic vocabulary and simple grammar. For younger children, we recommend focusing on Quran reading and Tajweed first, then adding Arabic language study once they are reading confidently — typically from age 10–12 onwards.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is the difference between Classical Arabic and Modern Standard Arabic?",
    answer:
      "Classical Arabic (Fusha) is the language of the Quran and classical Islamic texts — it has been unchanged for over 1,400 years. Modern Standard Arabic (MSA) is a contemporary form used in media, news, and formal writing across the Arab world. Our course teaches both, with an emphasis on Classical/Quranic Arabic so students can understand the Quran directly.",
  },
  {
    question: "How long does it take to understand the Quran in Arabic?",
    answer:
      "With 3 classes per week and consistent self-study, most students begin to recognize and understand common Quranic words and phrases within 3–6 months. Understanding full verses with confidence typically takes 1–2 years. The Quran uses a relatively limited core vocabulary — the top 500 most frequent Quranic words cover approximately 75% of the text.",
  },
  {
    question: "Do I need to know how to read Quran first before taking Arabic language classes?",
    answer:
      "It is strongly recommended that you can read Arabic script before starting the Arabic language course. If you cannot read Arabic yet, we recommend starting with Noorani Qaida. Once you can read, the Arabic language course is open to you — regardless of how well you currently read.",
  },
  {
    question: "Is Arabic grammar hard for English speakers?",
    answer:
      "Arabic grammar (Sarf and Nahw) is structured differently from English but is internally very logical and consistent. Our teacher, Shah Zaib, specializes in teaching Arabic grammar to English-speaking students. He explains all concepts in plain English with English examples before transitioning to Arabic — making it accessible for native English speakers.",
  },
  {
    question: "Can children learn Arabic language alongside Quran classes?",
    answer:
      "Yes. Children who are already reading the Quran fluently can begin learning Arabic vocabulary and simple grammar. For younger children, we recommend focusing on Quran reading and Tajweed first, then adding Arabic language study once they are reading confidently — typically from age 10–12 onwards.",
  },
];

export default function ArabicLanguagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><Link href="/courses" className="hover:text-gold transition-colors">Courses</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">Arabic Language</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Arabic Language Course
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Learn Arabic Online
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Understand the words of Allah directly, in the language they were revealed. Our
              Arabic language course teaches Classical Quranic Arabic and Modern Standard Arabic
              — from grammar fundamentals to reading and understanding Quranic verses with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-7 py-3.5 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm"
              >
                Book Free Trial
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

      {/* Course Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Course Overview
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
                What Is the Arabic Language Course?
              </h2>
              <div className="space-y-4 text-grey text-sm leading-relaxed">
                <p>
                  The Arabic Language course is for Muslims who want to go beyond reciting the
                  Quran — they want to understand it. The Quran was revealed in Arabic, and while
                  translations are valuable, they can never fully capture the depth, nuance, and
                  beauty of the original Arabic. Our course gives you direct access to that depth.
                </p>
                <p>
                  Taught by Shah Zaib, our founder and head teacher certified from{" "}
                  <strong className="text-navy">Wifaq ul Madaris Al-Arabia</strong>, the course
                  covers Arabic grammar (Sarf — word morphology, and Nahw — sentence structure),
                  Quranic vocabulary building, reading comprehension of Quranic verses, and
                  conversational Modern Standard Arabic.
                </p>
                <p>
                  All instruction is in English. No prior Arabic knowledge is needed beyond being
                  able to read Arabic script. If you cannot yet read Arabic, please start with
                  our Noorani Qaida course first.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Quranic Arabic Focus</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Sarf & Nahw</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ English Medium</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Founder Teaching</span>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/course-arabic.webp"
                alt="Online Arabic language classes — learn Classical and Quranic Arabic at Ease Quran Academy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Curriculum
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                What You Will Learn
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Arabic Alphabet and Phonetics", desc: "A thorough review of Arabic letters, their pronunciation variations, and phonetic rules that go beyond basic reading — essential for language comprehension." },
                { title: "Basic Arabic Grammar — Sarf (Morphology)", desc: "Learn how Arabic words are constructed from root letters. Understanding roots unlocks thousands of related words — a superpower for Quranic vocabulary." },
                { title: "Basic Arabic Grammar — Nahw (Syntax)", desc: "Learn how Arabic sentences are structured — subject, predicate, verb placement, and agreement rules. Essential for understanding Quranic sentences fully." },
                { title: "Common Quranic Vocabulary", desc: "Systematic vocabulary study of the 500 most frequently occurring words in the Quran — covering approximately 75% of the entire Quranic text." },
                { title: "Sentence Structure in Arabic", desc: "Build simple and compound Arabic sentences. Learn the difference between nominal and verbal sentences, and how the Quran uses both types." },
                { title: "Reading and Understanding Quranic Verses", desc: "Apply your vocabulary and grammar knowledge to actual Quranic verses — reading, translating, and understanding them word by word." },
                { title: "Conversational Modern Standard Arabic", desc: "Basic conversational phrases, greetings, and everyday expressions in Modern Standard Arabic — useful for connecting with Arabic-speaking Muslims." },
                { title: "Reading Comprehension of Islamic Texts", desc: "Progress to reading short Islamic texts — Hadith, Du'a books, simple Islamic books — with understanding. Building toward independent reading of classical Islamic literature." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start"
                >
                  <span className="text-gold mt-1 shrink-0 text-lg">✓</span>
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                    <p className="text-grey text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Is This Course Right for You?
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
              Who This Course Is For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Muslims Who Want to Understand the Quran Directly",
                desc: "You recite the Quran in Salah but do not understand what you are saying. This course changes that — building a direct connection between the words you recite and their meaning.",
                points: ["Can already read Arabic script", "Wants deeper Quranic connection", "Understand Salah prayers", "All ages from 12+"],
              },
              {
                icon: BookOpen,
                title: "Students With Basic Quran Reading Skills",
                desc: "Students who have completed Noorani Qaida or can read the Quran are ideally positioned to start Arabic language study. Reading skill is the prerequisite — vocabulary and grammar come next.",
                points: ["Completed Noorani Qaida", "Can read Arabic text", "Ready for deeper learning", "Teens and adults"],
              },
              {
                icon: Heart,
                title: "Adults Wanting a Deeper Connection with Islam",
                desc: "Many Muslim adults feel disconnected from their faith partly because they cannot understand the Quran's words. Learning Arabic transforms your relationship with the Quran, Salah, and Islamic learning.",
                points: ["Any adult, any background", "No time pressure", "Flexible scheduling", "Transformative experience"],
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
              <div
                key={card.title}
                className="bg-offwhite rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">{card.title}</h3>
                <p className="text-grey text-sm leading-relaxed mb-4">{card.desc}</p>
                <ul className="space-y-1.5">
                  {card.points.map((p) => (
                    <li key={p} className="text-xs text-grey flex items-start gap-2">
                      <span className="text-gold mt-0.5 shrink-0">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Methodology
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
                Class Structure & Methodology
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Grammar-First, Then Application", desc: "Each section introduces a grammar concept in plain English, provides Arabic examples, then applies it immediately to Quranic verses — connecting theory to the Quran from the very first lesson." },
                { title: "Vocabulary Building System", desc: "Students learn Quranic vocabulary in order of frequency. Each week introduces 10–15 new words, reviewed with flashcard methods until they become second nature." },
                { title: "Quranic Text Analysis", desc: "Once sufficient grammar and vocabulary are acquired, classes shift to analyzing actual Quranic verses — identifying grammatical roles of each word and understanding the verse's full meaning." },
                { title: "Class Duration", desc: "Arabic language classes run 45–60 minutes. We recommend 3 classes per week for optimal progress. Self-study of 20–30 minutes per day between classes significantly accelerates learning." },
                { title: "English-Medium Instruction", desc: "All grammar concepts are explained in English first. Shah Zaib has years of experience translating complex Arabic grammatical concepts into clear, logical English explanations for Western students." },
                { title: "Progress Milestones", desc: "Students track their progress through vocabulary counts, grammar concepts mastered, and Quranic verses understood independently. Monthly progress reviews keep motivation high and learning on track." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-gold text-sm mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teacher */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Your Teacher
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
              Taught by Our Founder — Wifaq ul Madaris Certified
            </h2>
            <p className="text-grey max-w-xl mx-auto text-sm leading-relaxed">
              Shah Zaib teaches the Arabic language course personally. With formal training in
              Sarf and Nahw and 6+ years of teaching Western students, he is uniquely qualified
              to make Arabic grammar accessible to English speakers.
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <TeacherCard
              name="Shah Zaib"
              image="/images/founder.webp"
              credential="Certified — Wifaq ul Madaris Al-Arabia"
              speciality="Arabic Language (Sarf & Nahw), Quranic Arabic Specialist"
              experience="6+ years teaching Arabic to Western English-speaking students"
              qualification="Founder & Arabic Language Teacher"
            />
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-navy rounded-2xl p-8 md:p-12 text-center">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Affordable Plans
            </span>
            <h2 className="font-playfair font-bold text-3xl text-white mb-4">
              Plans Starting at $40/Month
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Invest in the most rewarding thing a Muslim can learn. Book a free first Arabic
              class and experience how accessible Quranic Arabic can be.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm"
            >
              View All Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">FAQ</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                Arabic Language Course — Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Related Courses</span>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy mb-2">Explore More Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { href: "/courses/quran-for-adults", title: "Quran for Adults", desc: "Improve your Quran reading and recitation alongside your Arabic language studies." },
              { href: "/courses/tajweed", title: "Tajweed", desc: "Master proper recitation rules — the perfect complement to understanding Arabic." },
              { href: "/courses/islamic-studies", title: "Islamic Studies", desc: "Combine Arabic language with structured Islamic knowledge covering Aqeedah, Fiqh, and Seerah." },
            ].map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <h3 className="font-playfair font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">{course.title}</h3>
                <p className="text-grey text-sm leading-relaxed mb-3">{course.desc}</p>
                <span className="text-gold font-semibold text-sm">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Understand the Quran in Its Own Language"
        subtext="Book a free Arabic language trial class and take your connection with the Quran to a completely new level. No credit card required."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
