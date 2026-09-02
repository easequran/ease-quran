import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { User, BookOpen } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TeacherCard from "@/components/TeacherCard";

export const metadata: Metadata = {
  title: "Noorani Qaida Online Classes USA",
  description:
    "Start your Quran journey with online Noorani Qaida classes. Perfect for complete beginners of all ages. Certified teachers. Free first class.",
  alternates: {
    canonical: "https://easequran.com/courses/noorani-qaida",
  },
  openGraph: {
    title: "Noorani Qaida Online Classes | Learn to Read Quran USA",
    description:
      "Start your Quran journey with online Noorani Qaida classes. Perfect for complete beginners of all ages. Certified teachers. Free first class.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Noorani Qaida Online Classes, Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Courses", item: "https://easequran.com/courses" },
    { "@type": "ListItem", position: 3, name: "Noorani Qaida", item: "https://easequran.com/courses/noorani-qaida" },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Noorani Qaida Online Classes",
  description:
    "Start your Quran journey with online Noorani Qaida classes. Learn all Arabic letters, vowels, and letter joining, perfect for complete beginners of all ages.",
  provider: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  url: "https://easequran.com/courses/noorani-qaida",
  courseMode: "online",
  educationalLevel: "Beginner",
  teaches: ["Arabic Alphabet", "Letter Joining", "Short Vowels", "Quran Reading Foundation"],
  availableLanguage: "English",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Noorani Qaida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Noorani Qaida is a foundational booklet used to teach beginners how to read Arabic and Quranic script. It was authored by Noor Muhammad Haqqani and is used in Islamic schools worldwide. It systematically teaches Arabic letters in isolation, their forms, vowels (Harakaat), Sukoon, Shaddah, Madd, and finally Quranic words, preparing students to read the Quran independently.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Noorani Qaida take to complete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completion time varies by age and frequency of classes. Children ages 4–6 with 3 classes per week typically complete Noorani Qaida in 4–8 months. Children 7+ complete it in 2–4 months. Adults who are motivated and practice daily can complete it in 2–3 months. Each student gets a personalized pace, no rushing.",
      },
    },
    {
      "@type": "Question",
      name: "At what age should a child start Noorani Qaida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Children can begin Noorani Qaida from age 4. At this age, classes are 20–25 minutes and use games, visuals, and repetition to introduce Arabic letters. Most Islamic scholars recommend beginning Quran education between ages 4–6 to maximize the child's natural language absorption ability.",
      },
    },
    {
      "@type": "Question",
      name: "Is Noorani Qaida the same as learning the Arabic alphabet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Noorani Qaida includes the Arabic alphabet but goes much further. After teaching all 28 letters, it covers how letters join to form words, all vowel signs (Harakaat), elongation (Madd), doubled letters (Shaddah), and finally actual Quranic words. It is a complete reading readiness program, not just an alphabet lesson.",
      },
    },
    {
      "@type": "Question",
      name: "What comes after Noorani Qaida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After completing Noorani Qaida, students move to reading the Quran directly, typically starting from Juz Amma (the 30th Juz). At this point, our teachers also begin introducing Tajweed rules formally. Students who want to memorize eventually progress to the Hifz program.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What is Noorani Qaida?",
    answer:
      "Noorani Qaida is a foundational booklet used to teach beginners how to read Arabic and Quranic script. It was authored by Noor Muhammad Haqqani and is used in Islamic schools worldwide. It systematically teaches Arabic letters in isolation, their forms, vowels (Harakaat), Sukoon, Shaddah, Madd, and finally Quranic words, preparing students to read the Quran independently.",
  },
  {
    question: "How long does Noorani Qaida take to complete?",
    answer:
      "Completion time varies by age and frequency of classes. Children ages 4–6 with 3 classes per week typically complete Noorani Qaida in 4–8 months. Children 7+ complete it in 2–4 months. Adults who are motivated and practice daily can complete it in 2–3 months. Each student gets a personalized pace, no rushing.",
  },
  {
    question: "At what age should a child start Noorani Qaida?",
    answer:
      "Children can begin Noorani Qaida from age 4. At this age, classes are 20–25 minutes and use games, visuals, and repetition to introduce Arabic letters. Most Islamic scholars recommend beginning Quran education between ages 4–6 to maximize the child's natural language absorption ability.",
  },
  {
    question: "Is Noorani Qaida the same as learning the Arabic alphabet?",
    answer:
      "Noorani Qaida includes the Arabic alphabet but goes much further. After teaching all 28 letters, it covers how letters join to form words, all vowel signs (Harakaat), elongation (Madd), doubled letters (Shaddah), and finally actual Quranic words. It is a complete reading readiness program, not just an alphabet lesson.",
  },
  {
    question: "What comes after Noorani Qaida?",
    answer:
      "After completing Noorani Qaida, students move to reading the Quran directly, typically starting from Juz Amma (the 30th Juz). At this point, our teachers also begin introducing Tajweed rules formally. Students who want to memorize eventually progress to the Hifz program.",
  },
];

export default function NooraniQaidaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              <li className="text-white/80">Noorani Qaida</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Start Here, Complete Beginners
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Noorani Qaida Classes
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              The best starting point for anyone who wants to learn to read the Quran. Complete
              beginners, children, adults, and reverts, learn all Arabic letters, vowels, and
              word formation before opening the Quran itself. Taught in English by certified teachers.
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
                What Is the Noorani Qaida Course?
              </h2>
              <div className="space-y-4 text-grey text-sm leading-relaxed">
                <p>
                  Noorani Qaida is the universally trusted gateway to reading the Quran. It takes
                  a student with absolutely zero Arabic knowledge and, step by step, teaches them
                  every skill needed to open the Quran and read it correctly. It is used in thousands
                  of Islamic schools across the world, and for good reason: it works.
                </p>
                <p>
                  Our online Noorani Qaida course follows this proven curriculum, taught entirely
                  in English by teachers certified from{" "}
                  <strong className="text-navy">Wifaq ul Madaris Al-Arabia</strong>. Whether
                  your student is a 4-year-old being introduced to Arabic for the first time, an
                  adult who has always wanted to read the Quran, or a revert Muslim starting from
                  scratch. This course meets you exactly where you are.
                </p>
                <p>
                  Female teachers are available for sisters and children upon request. All classes
                  are live, one-on-one, and scheduled around your family&apos;s timetable.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ All Ages</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Zero Prior Knowledge</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Female Teachers Available</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ English Medium</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Courses/course-noorani.webp"
                alt="Online Noorani Qaida classes: learn Arabic letters and Quran reading at Ease Quran Academy"
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
              <p className="text-grey text-sm max-w-xl mx-auto leading-relaxed">
                A complete, step-by-step curriculum that takes you from zero Arabic knowledge to
                reading Quranic text independently.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "All 28 Arabic Letters and Their Forms", desc: "Learn every Arabic letter in its isolated, initial, medial, and final forms, the foundation of reading any Arabic text, including the Quran." },
                { title: "Letter Joining and Word Formation", desc: "Understand how Arabic letters connect to form words. Practice joining two, three, and four letters together to form Quranic vocabulary." },
                { title: "Harakaat (Short Vowels: Fatha, Kasra, Damma)", desc: "Master the three short vowel marks that determine how every Arabic letter is pronounced, the most important skill in reading Arabic script." },
                { title: "Tanween (Nunation)", desc: "Learn the double vowel marks (Fathatayn, Kasratayn, Dammatayn) and how they change pronunciation at the end of words." },
                { title: "Madd Letters and Basic Rules", desc: "Understand the three elongation letters (Alif, Waw, Ya) and the basic rules of how long to extend each sound in recitation." },
                { title: "Sukoon (Vowelless Letters)", desc: "Learn how to correctly pronounce letters that carry no vowel, a critical skill for reading Arabic text accurately." },
                { title: "Shaddah (Doubled Consonants)", desc: "Understand the doubling mark and how it doubles the consonant sound, with practice on real Quranic words that contain Shaddah." },
                { title: "Reading Complete Quranic Words", desc: "By the end of Noorani Qaida, students practice reading actual Quranic words and short phrases, building confidence for the Quran itself." },
                { title: "Moving to Quran Reading Independently", desc: "Graduate from Noorani Qaida ready to open the Quran and read from it with guidance, the moment every family and student works toward." },
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
                icon: null,
                title: "Complete Beginners: No Arabic Knowledge",
                desc: "If you or your child cannot identify a single Arabic letter, this is exactly where to start. No prerequisites, no assumptions. We begin from the very first letter.",
                points: ["Zero Arabic knowledge needed", "English instructions throughout", "Patient, structured approach", "Any age from 4 upward"],
              },
              {
                icon: User,
                title: "Children Starting Their Quran Journey",
                desc: "For families who want their child to begin learning the Quran at a young age, Noorani Qaida is the universally recommended first step, taught in a child-friendly, encouraging way.",
                points: ["Ages 4–12 ideal", "Short, engaging sessions", "Visual and interactive learning", "Female teacher option available"],
              },
              {
                icon: BookOpen,
                title: "Adults and Reverts Learning for the First Time",
                desc: "Adults who grew up without Quran education, and new Muslims who took their Shahada and are starting their Islamic journey. This course is designed for you with patience and respect.",
                points: ["No prior Islamic education needed", "Adult-friendly pace", "English-medium instruction", "Flexible scheduling"],
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
              <div
                key={card.title}
                className="bg-offwhite rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow"
              >
                {Icon && (
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon size={22} className="text-gold" />
                  </div>
                )}
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
                How Classes Work
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
                Class Structure & Methodology
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Step-by-Step Progression", desc: "Each class covers one or two new sections of the Noorani Qaida, never rushing ahead until the current section is fully mastered. We build a rock-solid foundation before moving forward." },
                { title: "Repetition and Audio Feedback", desc: "Arabic pronunciation is learned through hearing and imitating, not reading theory. Our teachers demonstrate correct sounds and you repeat until the pronunciation is correct. Mistakes are corrected immediately and gently." },
                { title: "Duration Options", desc: "Children 4–7: 20–30 minutes per class. Children 8–12: 30–45 minutes. Adults and teens: 45 minutes. We recommend 3–4 classes per week for steady progress through the Qaida." },
                { title: "Homework Between Classes", desc: "After each lesson, students receive specific exercises to practice. Even 10–15 minutes of daily self-practice between classes significantly accelerates completion of Noorani Qaida." },
                { title: "Progress Tracking", desc: "Parents receive updates at each section milestone, how many letters and rules have been completed, what needs more practice, and an estimated timeline to Quran reading readiness." },
                { title: "Smooth Transition to Quran", desc: "When Noorani Qaida is complete, the teacher does not simply hand the student a Quran. There is a guided transition period where the student reads simple Quranic text with teacher support before reading independently." },
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

      {/* Teachers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Your Teachers
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
              Certified Quran Teachers, Male and Female Available
            </h2>
            <p className="text-grey max-w-xl mx-auto text-sm leading-relaxed">
              Both teachers hold credentials from Wifaq ul Madaris Al-Arabia and are experienced
              in teaching beginners at all ages. A female teacher is available for sisters and children.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <TeacherCard
              name="Muhammad Umair"
              image="/images/teacher-1.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Quran Reading, Noorani Qaida, Tajweed"
              experience="2+ years teaching beginners of all ages online"
              qualification="Quran Teacher"
            />
            <TeacherCard
              name="Almas Fatima"
              image="/images/teacher-2.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Qaria e Quran, Bachelor in Islamic Studies, Noorani Qaida"
              experience="Available for sisters and children, teaching since 2022"
              qualification="Female Quran Teacher"
              badge="Female Teacher"
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
              Start your Quran journey today with a free first class. No credit card, no commitment.
              If you love the teaching, choose a plan that fits your budget.
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
                Noorani Qaida, Frequently Asked Questions
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
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy mb-2">What Comes Next</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { href: "/courses/quran-for-kids", title: "Quran for Kids", desc: "After Noorani Qaida, children continue with structured Quran reading, Surah memorization, and Tajweed basics." },
              { href: "/courses/tajweed", title: "Tajweed", desc: "Once you can read the Quran, Tajweed polishes your recitation and ensures you recite it the way it was revealed." },
              { href: "/courses/quran-for-reverts", title: "Quran for Reverts", desc: "Specially designed for new Muslims, combines Noorani Qaida with essential Duas, Salah words, and Islamic basics." },
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
        headline="Take Your First Step Toward the Quran"
        subtext="Book a free Noorani Qaida trial class today. Your first lesson is completely free, no credit card, no commitment. Just the beginning of something beautiful."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
