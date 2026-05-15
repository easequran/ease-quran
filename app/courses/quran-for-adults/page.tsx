import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TeacherCard from "@/components/TeacherCard";

export const metadata: Metadata = {
  title: "Online Quran Classes for Adults | Learn Quran USA",
  description:
    "Online Quran classes for adults — beginners to advanced. Learn to read, recite and understand the Quran with certified teachers. Free first class.",
  alternates: {
    canonical: "https://easequran.com/courses/quran-for-adults",
  },
  openGraph: {
    title: "Online Quran Classes for Adults | Learn Quran USA",
    description:
      "Online Quran classes for adults — beginners to advanced. Learn to read, recite and understand the Quran with certified teachers. Free first class.",
    images: ["/images/og-image.webp"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Online Quran Classes for Adults",
  description:
    "Online Quran classes for adults — beginners to advanced. Learn to read, recite and understand the Quran with certified teachers in the USA.",
  provider: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  url: "https://easequran.com/courses/quran-for-adults",
  courseMode: "online",
  educationalLevel: "Beginner to Advanced",
  teaches: ["Quran Reading", "Tajweed", "Quran Comprehension", "Common Duas", "Salah Recitation"],
  availableLanguage: "English",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Am I too old to learn the Quran?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely not. The Prophet Muhammad ﷺ said: 'The one who recites the Quran skillfully will be with the noble, righteous scribes; and the one who reads it with difficulty will have two rewards.' There is no age limit to learning the Quran. We have taught students in their 50s, 60s, and beyond. The desire to learn is what matters — not the age at which you begin.",
      },
    },
    {
      "@type": "Question",
      name: "How are adult classes different from kids' classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adult classes are paced differently — we move at the student's natural learning speed without the gamification used for children. Instruction is entirely conversational, in plain English. Adults often have more questions and want to understand the 'why' behind rules — we welcome this. Classes are also scheduled for adult life: evenings, weekends, and early mornings.",
      },
    },
    {
      "@type": "Question",
      name: "Can I learn the Quran if I don't know any Arabic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most of our adult students start with zero Arabic knowledge. We begin with Noorani Qaida — learning Arabic letters and sounds — before moving to Quran reading. For adults, this foundation is typically built faster than with children. Many adult students are reading from the Quran within 2–4 months of starting from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "How long will it take me to read the Quran?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If starting from zero: 2–4 months to complete Noorani Qaida, then 6–12 months to reach fluent Quran reading with basic Tajweed. If you can already read but with errors and weak Tajweed: 3–6 months of structured Tajweed work typically produces significant improvement. Every student's journey is different — we track your progress and give you honest timelines.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Quran classes for seniors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly work with senior Muslim students. Classes can be shorter if needed (30 minutes), scheduled at any time of day, and paced entirely around the student's comfort. Our teachers are trained in patience and encouragement — senior students often find our classes to be a deeply rewarding and spiritually nourishing experience.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Am I too old to learn the Quran?",
    answer:
      "Absolutely not. The Prophet Muhammad ﷺ said: 'The one who recites the Quran skillfully will be with the noble, righteous scribes; and the one who reads it with difficulty will have two rewards.' There is no age limit to learning the Quran. We have taught students in their 50s, 60s, and beyond. The desire to learn is what matters — not the age at which you begin.",
  },
  {
    question: "How are adult classes different from kids' classes?",
    answer:
      "Adult classes are paced differently — we move at the student's natural learning speed without the gamification used for children. Instruction is entirely conversational, in plain English. Adults often have more questions and want to understand the 'why' behind rules — we welcome this. Classes are also scheduled for adult life: evenings, weekends, and early mornings.",
  },
  {
    question: "Can I learn the Quran if I don't know any Arabic?",
    answer:
      "Yes. Most of our adult students start with zero Arabic knowledge. We begin with Noorani Qaida — learning Arabic letters and sounds — before moving to Quran reading. For adults, this foundation is typically built faster than with children. Many adult students are reading from the Quran within 2–4 months of starting from scratch.",
  },
  {
    question: "How long will it take me to read the Quran?",
    answer:
      "If starting from zero: 2–4 months to complete Noorani Qaida, then 6–12 months to reach fluent Quran reading with basic Tajweed. If you can already read but with errors and weak Tajweed: 3–6 months of structured Tajweed work typically produces significant improvement. Every student's journey is different — we track your progress and give you honest timelines.",
  },
  {
    question: "Do you have Quran classes for seniors?",
    answer:
      "Yes. We regularly work with senior Muslim students. Classes can be shorter if needed (30 minutes), scheduled at any time of day, and paced entirely around the student's comfort. Our teachers are trained in patience and encouragement — senior students often find our classes to be a deeply rewarding and spiritually nourishing experience.",
  },
];

export default function QuranForAdultsPage() {
  return (
    <>
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
              <li className="text-white/80">Quran for Adults</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Adults Welcome — Any Level
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes for Adults
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              It is never too late to learn the Quran. Whether you are starting from scratch or
              improving a recitation you have always known was weak — our certified teachers meet
              you exactly where you are, with patience, respect, and a plan that works for adult life.
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
                What Is the Quran for Adults Course?
              </h2>
              <div className="space-y-4 text-grey text-sm leading-relaxed">
                <p>
                  Many Muslim adults in America grew up in households where the Quran was present
                  but Quran education was limited. Some learned to read a little but never
                  properly. Others moved to the USA and lost touch with the structured Islamic
                  education they had begun overseas. Many are professionals, parents, and community
                  members who carry a private sense of guilt about not being able to read the
                  Book of Allah.
                </p>
                <p>
                  This course was designed specifically for you. Taught by Shah Zaib, our founder
                  certified from <strong className="text-navy">Wifaq ul Madaris Al-Arabia</strong>,
                  who has 6+ years of experience teaching Western adults. He understands the
                  sensitivities, the time constraints, and the particular challenges that adult
                  learners face — and he has built a methodology that works.
                </p>
                <p>
                  Classes are completely private, one-on-one, in English, and scheduled around
                  your busy life. No judgment, no embarrassment — just a certified teacher and
                  a structured plan to help you recite the Quran with confidence.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ All Levels</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ No Judgment</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Western Specialist</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Flexible Timing</span>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/course-tajweed.webp"
                alt="Online Quran classes for adults — learn to read and recite Quran at Ease Quran Academy"
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
                { title: "Reading Quran from Scratch or Improving Existing Skills", desc: "Whether you have never read a single Arabic letter or you read poorly with many errors — we assess your current level and build a custom plan from there." },
                { title: "Tajweed Rules and Correct Pronunciation", desc: "Learn the rules that govern correct Quranic recitation — from Makharij (articulation points) to Madd, Idgham, and Ikhfa. Applied to real Quranic text from day one." },
                { title: "Understanding Common Duas and Their Meaning", desc: "Learn the Duas you recite daily — morning and evening Adhkar, before eating, sleeping, entering the home — with their meanings so they become heartfelt, not just memorized phrases." },
                { title: "Reading Salah Prayers Correctly", desc: "Recite Surah Al-Fatiha and the tashahhud with proper pronunciation. Understand what you say in every Rakah of Salah — transforming prayer from a ritual into a conversation with Allah." },
                { title: "Selected Surahs with Translation", desc: "Learn commonly recited Surahs — Al-Baqarah opening, Ayat ul Kursi, Al-Mulk, Ar-Rahman, Ya-Sin — with word-by-word translation so you understand what you are reciting." },
                { title: "Basic Arabic Vocabulary from the Quran", desc: "Build a working vocabulary of the most common Quranic words so that as you recite, you begin to recognize and understand the meaning of familiar words and phrases." },
                { title: "Quran Recitation with Confidence", desc: "Develop the confidence to recite the Quran in Salah, at family gatherings, during Ramadan, and in any Islamic setting — without anxiety or embarrassment about your pronunciation." },
                { title: "Personal Connection and Reflection on Quranic Verses", desc: "Learn to approach the Quran not just as a book to recite, but as a message addressed to you personally — building a living, reflective relationship with the words of Allah." },
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
                icon: "🌱",
                title: "Adults Who Never Learned Quran as Children",
                desc: "You grew up in America and your Quran education was minimal or non-existent. This course begins at the very beginning — with Arabic letters — and takes you all the way to reading the Quran.",
                points: ["Start from zero letters", "No prior knowledge assumed", "Adult learning pace", "Private classes only"],
              },
              {
                icon: "📈",
                title: "Adults Who Want to Improve Weak Recitation",
                desc: "You can read some of the Quran but you know your pronunciation is off, your Tajweed is non-existent, and you are not confident. This course systematically rebuilds your recitation from the ground up.",
                points: ["Level assessment first", "Identify and fix errors", "Tajweed rules applied", "Gain lasting confidence"],
              },
              {
                icon: "🇺🇸",
                title: "Non-Arab Muslims Who Grew Up in the West",
                desc: "South Asian, African, Southeast Asian, and convert Muslims raised in the USA or UK who speak English as their primary language. Our teacher specializes specifically in this demographic.",
                points: ["English-medium instruction", "Cultural sensitivity", "No Arabic prerequisite", "Understanding the Western Muslim experience"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-offwhite rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{card.icon}</div>
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
            ))}
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
                { title: "Initial Level Assessment", desc: "Every new adult student begins with a free assessment class where the teacher evaluates their current reading level. From this, a personalized learning plan is created — no wasted time on things you already know." },
                { title: "No Judgment Environment", desc: "Our teachers are trained to create a completely safe, shame-free learning environment. Many adult students tell us they were nervous or embarrassed before the first class — and completely at ease within minutes." },
                { title: "Flexible Adult Scheduling", desc: "Classes available early mornings, evenings, nights, and weekends — tailored to working adults and parents. Book sessions when they genuinely fit into your life. Cancel or reschedule with 24 hours notice." },
                { title: "Class Duration", desc: "45–60 minutes per class. We recommend 2–3 classes per week for good progress. Even 2 classes per week with daily self-practice of 15 minutes produces meaningful improvement within months." },
                { title: "Progress Tracking", desc: "You receive a monthly progress summary: what has been covered, what milestones were reached, and an honest assessment of where more work is needed. Adults appreciate transparency about their own progress." },
                { title: "Supplementary Resources", desc: "Worksheets, pronunciation guides, and Quranic word lists are provided between classes. These are optional but highly recommended for adults who want to self-study between sessions." },
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
              Specialist in Teaching Western Adults — Wifaq ul Madaris Certified
            </h2>
            <p className="text-grey max-w-xl mx-auto text-sm leading-relaxed">
              Shah Zaib has spent 6+ years perfecting a methodology for teaching Quran to
              Western, English-speaking adults. He understands the unique challenges — busy
              schedules, sensitive about gaps in knowledge, need for English explanation — and
              addresses all of them in every class.
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <TeacherCard
              name="Shah Zaib"
              image="/images/founder.webp"
              credential="Certified — Wifaq ul Madaris Al-Arabia"
              speciality="Western Adult Quran Education Specialist"
              experience="6+ years teaching adults in the USA, UK, and Canada"
              qualification="Founder & Head Teacher"
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
              Your first class is completely free. No credit card, no commitment. Experience the
              teaching quality and decide if it is right for you before paying a single dollar.
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
                Adult Quran Classes — Frequently Asked Questions
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
              { href: "/courses/tajweed", title: "Tajweed", desc: "Once you can read the Quran, take your recitation to the next level with a dedicated Tajweed specialist." },
              { href: "/courses/arabic-language", title: "Arabic Language", desc: "Understand what you recite — learn Classical Arabic grammar and Quranic vocabulary." },
              { href: "/courses/quran-for-reverts", title: "Quran for Reverts", desc: "A specially adapted course for new Muslims that starts from absolute zero with essential Islamic foundations." },
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
        headline="Begin Your Quran Journey Today — At Any Age"
        subtext="Book a free adult Quran class and take the first step you have been putting off. No embarrassment, no rush, no commitment. Just a certified teacher and your sincere intention."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
