import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TeacherCard from "@/components/TeacherCard";
import { BookOpen, Heart, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Hifz Program | Quran Memorization Classes USA",
  description:
    "Structured online Hifz program for kids and adults. Certified teachers, proven memorization methods. Serving Muslim families across the USA.",
  alternates: {
    canonical: "https://easequran.com/courses/hifz",
  },
  openGraph: {
    title: "Online Hifz Program | Quran Memorization Classes USA",
    description:
      "Structured online Hifz program for kids and adults. Certified teachers, proven memorization methods. Serving Muslim families across the USA.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Hifz Program, Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Courses", item: "https://easequran.com/courses" },
    { "@type": "ListItem", position: 3, name: "Hifz Program", item: "https://easequran.com/courses/hifz" },
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
  name: "Online Hifz Program: Quran Memorization",
  description:
    "Structured online Hifz program for kids and adults. Proven sabaq, sabaqi, and manzil methodology with certified Wifaq ul Madaris teachers.",
  provider: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  url: "https://easequran.com/courses/hifz",
  courseMode: "online",
  educationalLevel: "Intermediate to Advanced",
  teaches: ["Quran Memorization", "Hifz Methodology", "Tajweed Integration", "Revision System"],
  availableLanguage: "English",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to complete Hifz online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline depends on the student's age, daily practice time, and number of classes per week. Children who attend 5 classes per week and practice daily typically complete Hifz in 3–5 years. Adults with 3 classes per week may take 5–8 years. However, the journey itself is deeply rewarding regardless of pace, and partial Hifz (memorizing 10–15 Juz) is also a meaningful achievement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum age for starting Hifz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend children be at least 7 years old and able to read the Quran fluently with basic Tajweed before beginning Hifz. Starting Hifz before a child can read properly often leads to frustration and weak memorization. We assess each child individually in the free trial class.",
      },
    },
    {
      "@type": "Question",
      name: "How many classes per week are needed for Hifz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For serious Hifz progress, we recommend 5 classes per week. This allows for new sabaq (lesson) daily while maintaining revision. A minimum of 3 classes per week is required for enrollment in the Hifz program. The student must also commit to daily self-practice of at least 30–45 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What if my child forgets memorized portions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forgetting is a normal part of Hifz, even the Sahaba experienced this. Our program uses the traditional sabaqi (recent lesson revision) and manzil (old lesson revision) system to protect memorized portions. The teacher monitors revision systematically and never allows too many days to pass without reviewing earlier Juz.",
      },
    },
    {
      "@type": "Question",
      name: "Can adults complete Hifz online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many adults have completed or are working toward Hifz through Ease Quran. Adults typically take longer than children but have the advantage of stronger motivation and discipline. Our teachers use memory techniques specifically designed for non-Arabic speakers, making the process much more manageable for adult students.",
      },
    },
  ],
};

const faqs = [
  {
    question: "How long does it take to complete Hifz online?",
    answer:
      "The timeline depends on the student's age, daily practice time, and number of classes per week. Children who attend 5 classes per week and practice daily typically complete Hifz in 3–5 years. Adults with 3 classes per week may take 5–8 years. However, the journey itself is deeply rewarding regardless of pace, and partial Hifz (memorizing 10–15 Juz) is also a meaningful achievement.",
  },
  {
    question: "What is the minimum age for starting Hifz?",
    answer:
      "We recommend children be at least 7 years old and able to read the Quran fluently with basic Tajweed before beginning Hifz. Starting Hifz before a child can read properly often leads to frustration and weak memorization. We assess each child individually in the free trial class.",
  },
  {
    question: "How many classes per week are needed for Hifz?",
    answer:
      "For serious Hifz progress, we recommend 5 classes per week. This allows for new sabaq (lesson) daily while maintaining revision. A minimum of 3 classes per week is required for enrollment in the Hifz program. The student must also commit to daily self-practice of at least 30–45 minutes.",
  },
  {
    question: "What if my child forgets memorized portions?",
    answer:
      "Forgetting is a normal part of Hifz, even the Sahaba experienced this. Our program uses the traditional sabaqi (recent lesson revision) and manzil (old lesson revision) system to protect memorized portions. The teacher monitors revision systematically and never allows too many days to pass without reviewing earlier Juz.",
  },
  {
    question: "Can adults complete Hifz online?",
    answer:
      "Yes, many adults have completed or are working toward Hifz through Ease Quran. Adults typically take longer than children but have the advantage of stronger motivation and discipline. Our teachers use memory techniques specifically designed for non-Arabic speakers, making the process much more manageable for adult students.",
  },
];

export default function HifzPage() {
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
              <li className="text-white/80">Hifz Program</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Quran Memorization
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Hifz Program
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Memorize the entire Quran with a certified Hifz specialist using the proven
              traditional sabaq, sabaqi, and manzil methodology, adapted for students in the
              USA. A structured journey, taken at your pace, guided every step of the way.
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
                What Is the Hifz Program?
              </h2>
              <div className="space-y-4 text-grey text-sm leading-relaxed">
                <p>
                  Hifz (حفظ) is the memorization of the entire Quran, all 30 Juz, 114 Surahs,
                  and 6,236 verses. A person who completes Hifz is called a Hafiz (male) or Hafiza
                  (female) and earns one of the highest honors in Islam. The Prophet Muhammad ﷺ
                  said the Hafiz will be able to intercede for ten members of their family on the
                  Day of Judgment.
                </p>
                <p>
                  Our online Hifz program is taught by Muhammad Umair, a certified Hifz specialist
                  from <strong className="text-navy">Wifaq ul Madaris Al-Arabia</strong>. The program
                  follows the traditional three-part daily system (sabaq, sabaqi, manzil) that has
                  produced millions of Huffaz over centuries, adapted for the schedules and
                  learning styles of students in the USA.
                </p>
                <p>
                  Enrollment requires a minimum reading ability. Students must be able to read the
                  Quran with basic Tajweed before starting. If your child is not yet at this level,
                  we recommend our Noorani Qaida or Tajweed course first.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Ages 7+ & Adults</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Hifz Specialist</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Progress Reports</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Certified Teacher</span>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/course-hifz.webp"
                alt="Online Hifz program: Quran memorization classes at Ease Quran Academy"
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
                Program Structure
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                What Our Hifz Program Covers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Systematic Juz-by-Juz Memorization Plan", desc: "The Quran is memorized in a planned sequence starting from Juz Amma, moving to the last few Juz, and working back. This approach provides early wins and builds confidence." },
                { title: "Sabaq (New Lesson) Methodology", desc: "Each day, a new portion is memorized, typically 3–5 lines for beginners, increasing as the student's capacity grows. The teacher corrects Tajweed during new memorization." },
                { title: "Sabaqi (Recent Lesson Revision)", desc: "The last 7 days of memorized content are revised every class. This keeps recent lessons fresh while the student continues adding new material." },
                { title: "Manzil (Old Lesson Revision)", desc: "Previously memorized Juz are regularly reviewed to prevent forgetting. The teacher assigns specific Juz for the student to recite from memory each week." },
                { title: "Tajweed Integration During Memorization", desc: "Tajweed rules are applied throughout the Hifz process. Students do not memorize incorrect pronunciation, every verse is memorized with proper Tajweed from day one." },
                { title: "Memory Techniques for Non-Arabic Speakers", desc: "Special methods for English-speaking students: understanding verse meaning, associating mental imagery, chunking long verses, and voice recording techniques." },
                { title: "Test and Certification Milestones", desc: "Formal tests at each Juz completion, the student recites the Juz to the teacher from memory. Certificates are issued at 5, 10, 15, 20, 25, and 30 Juz milestones." },
                { title: "Parent Progress Reports", desc: "Monthly written reports detail which Juz are memorized, which are in active revision, and the student's Tajweed quality. Parents are always informed of their child's progress." },
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
              Is This Program Right for You?
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
              Who This Program Is For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Children With a Strong Reading Foundation",
                desc: "Children who can read the Quran fluently with basic Tajweed are ready to begin Hifz. The younger the child starts, the faster the memorization. Ages 7–12 are the ideal window.",
                points: ["Must read Quran fluently", "Age 7 minimum recommended", "Ages 7–12 ideal for Hifz", "Parental support essential"],
              },
              {
                icon: Heart,
                title: "Adults With a Sincere Intention",
                desc: "Adults who have always wanted to memorize the Quran but never had the right structure or teacher. Our program is adapted for adult learners who have limited time but strong commitment.",
                points: ["Reading fluency required", "Minimum 30 min daily practice", "Flexible class scheduling", "Long-term commitment needed"],
              },
              {
                icon: GraduationCap,
                title: "Students Who Completed Noorani Qaida",
                desc: "Students who recently completed Noorani Qaida or our Quran reading course and are now ready to take on the extraordinary challenge and blessing of Quran memorization.",
                points: ["Completed Quran reading", "Basic Tajweed knowledge", "Ready for structured program", "Motivated to memorize"],
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
              <div
                key={card.title}
                className="bg-offwhite rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
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
                How Hifz Classes Work
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
                Class Structure & Methodology
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Daily Class Structure", desc: "Every class follows three stages: (1) Manzil, student recites old lessons from memory. (2) Sabaqi, student recites recent lessons. (3) Sabaq, teacher presents the new lesson and the student memorizes with teacher guidance." },
                { title: "Recommended Frequency", desc: "5 classes per week is strongly recommended for serious Hifz students. 3 classes per week is the minimum. Daily self-practice of 30–60 minutes between classes is essential." },
                { title: "Class Duration", desc: "Hifz classes run 45–60 minutes per session. Younger children may begin at 30 minutes and increase as their stamina develops. Each session is intensive and focused." },
                { title: "Tajweed During Memorization", desc: "The teacher corrects Tajweed errors during every recitation. A verse memorized with wrong pronunciation is harder to fix later, we ensure accuracy from the first repetition." },
                { title: "Self-Practice Guidance", desc: "The teacher provides a precise daily practice schedule. Students are guided on how to repeat new lessons, protect recent lessons, and cycle through old lessons at home." },
                { title: "Milestone Celebrations", desc: "Completing each Juz is a significant achievement. We conduct formal milestone tests and issue certificates, creating motivation and a sense of accomplishment throughout the multi-year journey." },
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
              Your Hifz Teacher
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
              Hifz Specialist Certified from Wifaq ul Madaris
            </h2>
            <p className="text-grey max-w-xl mx-auto text-sm leading-relaxed">
              Muhammad Umair is our Hifz specialist, trained in the traditional Hifz methodology
              and certified from Wifaq ul Madaris Al-Arabia, he has guided students through this
              blessed journey with patience, discipline, and deep knowledge.
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <TeacherCard
              name="Muhammad Umair"
              image="/images/teacher-1.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Hifz Specialist, Tajweed & Quran Memorization"
              experience="2+ years teaching Hifz to students in the USA online"
              qualification="Hifz Teacher"
              badge="Hifz Specialist"
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
              Begin the greatest journey of your child&apos;s life. Book a free assessment class
              and let our teacher evaluate readiness for the Hifz program. No credit card required.
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
                Hifz Program, Frequently Asked Questions
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
              { href: "/courses/tajweed", title: "Tajweed", desc: "A prerequisite for Hifz, ensure your recitation is correct before beginning memorization." },
              { href: "/courses/quran-for-kids", title: "Quran for Kids", desc: "Build the reading foundation children need before enrolling in the Hifz program." },
              { href: "/courses/noorani-qaida", title: "Noorani Qaida", desc: "The starting point for students who need to develop their Arabic reading before Hifz." },
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
        headline="Begin Your Child's Hifz Journey Today"
        subtext="A free assessment class lets our teacher evaluate your child's readiness and create a personalized Hifz plan. This is the first step toward one of the greatest honors in Islam."
        primaryCta="Book Free Assessment Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
