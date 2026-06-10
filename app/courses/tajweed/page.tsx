import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TeacherCard from "@/components/TeacherCard";

export const metadata: Metadata = {
  title: "Online Tajweed Classes USA",
  description:
    "Master Tajweed online with certified Wifaq ul Madaris teachers. Learn proper Quran pronunciation and recitation. Free trial class available.",
  alternates: {
    canonical: "https://easequran.com/courses/tajweed",
  },
  openGraph: {
    title: "Online Tajweed Classes | Learn Quran Recitation USA",
    description:
      "Master Tajweed online with certified Wifaq ul Madaris teachers. Learn proper Quran pronunciation and recitation. Free trial class available.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Tajweed Classes, Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Courses", item: "https://easequran.com/courses" },
    { "@type": "ListItem", position: 3, name: "Tajweed Classes", item: "https://easequran.com/courses/tajweed" },
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
  name: "Online Tajweed Classes",
  description:
    "Master Tajweed online with certified Wifaq ul Madaris teachers. Learn proper Quran pronunciation, Makharij, and all rules of Tajweed.",
  provider: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  url: "https://easequran.com/courses/tajweed",
  courseMode: "online",
  educationalLevel: "Beginner to Advanced",
  teaches: ["Makharij", "Noon Sakinah", "Madd Rules", "Waqf and Ibtida", "Qalqalah"],
  availableLanguage: "English",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to know Arabic to learn Tajweed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tajweed is about pronunciation rules, how to correctly produce Arabic sounds when reciting the Quran. You do not need to understand Arabic or speak it conversationally. However, you do need to be able to read the Quran (or Noorani Qaida) at a basic level before starting Tajweed. If you cannot read yet, we recommend starting with Noorani Qaida first.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to learn Tajweed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The basic rules of Tajweed can be learned within 3–6 months with 3 classes per week. Applying Tajweed fluently across the entire Quran takes longer, typically 1–2 years of consistent practice. Many students see noticeable improvement in their recitation within the first few weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Tajweed and Qiraat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tajweed refers to the rules that govern correct pronunciation and recitation of the Quran. Qiraat refers to the different recognized modes of Quranic recitation transmitted from the Prophet ﷺ through different chains of narrators. Our Tajweed course covers the rules of Hafs an Asim, the most commonly used recitation in the Muslim world today.",
      },
    },
    {
      "@type": "Question",
      name: "Can adults learn Tajweed from scratch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Many of our students are adults who grew up in Western countries and never received proper Tajweed education. Our teachers are highly experienced in teaching adults with patience and without judgment. It is never too late to improve your Quran recitation.",
      },
    },
    {
      "@type": "Question",
      name: "Is online Tajweed as effective as in-person learning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when done correctly. Our teachers are trained to listen carefully through a microphone and correct pronunciation in real time, the same way an in-person teacher would. Students receive immediate feedback on every word. Many of our students have gone from very poor recitation to reciting confidently with proper Tajweed entirely through online classes.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Do I need to know Arabic to learn Tajweed?",
    answer:
      "No. Tajweed is about pronunciation rules, how to correctly produce Arabic sounds when reciting the Quran. You do not need to understand Arabic or speak it conversationally. However, you do need to be able to read the Quran (or Noorani Qaida) at a basic level before starting Tajweed. If you cannot read yet, we recommend starting with Noorani Qaida first.",
  },
  {
    question: "How long does it take to learn Tajweed?",
    answer:
      "The basic rules of Tajweed can be learned within 3–6 months with 3 classes per week. Applying Tajweed fluently across the entire Quran takes longer, typically 1–2 years of consistent practice. Many students see noticeable improvement in their recitation within the first few weeks.",
  },
  {
    question: "What is the difference between Tajweed and Qiraat?",
    answer:
      "Tajweed refers to the rules that govern correct pronunciation and recitation of the Quran. Qiraat refers to the different recognized modes of Quranic recitation transmitted from the Prophet ﷺ through different chains of narrators. Our Tajweed course covers the rules of Hafs an Asim, the most commonly used recitation in the Muslim world today.",
  },
  {
    question: "Can adults learn Tajweed from scratch?",
    answer:
      "Absolutely. Many of our students are adults who grew up in Western countries and never received proper Tajweed education. Our teachers are highly experienced in teaching adults with patience and without judgment. It is never too late to improve your Quran recitation.",
  },
  {
    question: "Is online Tajweed as effective as in-person learning?",
    answer:
      "Yes, when done correctly. Our teachers are trained to listen carefully through a microphone and correct pronunciation in real time, the same way an in-person teacher would. Students receive immediate feedback on every word. Many of our students have gone from very poor recitation to reciting confidently with proper Tajweed entirely through online classes.",
  },
];

export default function TajweedPage() {
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
              <li className="text-white/80">Tajweed</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Quran Recitation Course
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Tajweed Classes
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Learn to recite the Quran the way it was revealed, with proper pronunciation,
              rhythm, and beauty. Our certified Tajweed specialists teach all the rules from
              Makharij to Madd, at your own pace, entirely in English.
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
                What Is the Tajweed Course?
              </h2>
              <div className="space-y-4 text-grey text-sm leading-relaxed">
                <p>
                  Tajweed (تجويد) literally means &ldquo;to make something excellent&rdquo;, and in
                  the context of the Quran, it refers to the science of reciting the Quran
                  with the precise pronunciation, articulation, and rules that preserve the
                  words of Allah exactly as they were revealed to the Prophet Muhammad ﷺ.
                </p>
                <p>
                  Our Tajweed course is taught by specialists certified from{" "}
                  <strong className="text-navy">Wifaq ul Madaris Al-Arabia</strong>. The course
                  covers every major rule of Tajweed, from how to correctly position your
                  tongue for each Arabic letter (Makharij) to the rules of elongation (Madd),
                  stopping points (Waqf), and beautification of the voice.
                </p>
                <p>
                  Classes are one-on-one, taught entirely in English, and structured to suit
                  your current level, whether you are a complete beginner or an intermediate
                  student wanting to refine your existing recitation.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ All Levels</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Tajweed Specialist</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Hafs an Asim</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ English Medium</span>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/course-tajweed.webp"
                alt="Online Tajweed classes: learn proper Quran recitation at Ease Quran Academy"
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
                A complete Tajweed curriculum covering every rule needed to recite the Quran
                correctly and beautifully.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "All Makharij (Articulation Points)", desc: "Learn the exact position of the tongue, lips, throat, and nasal cavity for every Arabic letter, the foundation of correct pronunciation." },
                { title: "Rules of Noon Sakinah and Tanween", desc: "Master the four rules: Idhar, Idgham, Iqlab, and Ikhfa, and apply them correctly every time they appear in Quranic text." },
                { title: "Rules of Meem Sakinah", desc: "Learn Idhar Shafawi, Idgham Shafawi, and Ikhfa Shafawi with practical examples from the Quran." },
                { title: "Madd Rules (Elongation)", desc: "Understand the different types of Madd, Asli, Badal, Lazim, Arid, and more, and how to apply the correct elongation in each case." },
                { title: "Waqf and Ibtida (Stopping and Starting)", desc: "Know where it is correct, permissible, or impermissible to stop in the Quran, and how to start correctly after pausing." },
                { title: "Qalqalah (Echo Letters)", desc: "Learn the five Qalqalah letters and how to produce the correct bouncing/echoing sound when they appear with Sukoon." },
                { title: "Idgham, Ikhfa, and Iqlab", desc: "Apply merging, concealment, and conversion rules correctly with consistent practice on real Quranic verses." },
                { title: "Heavy and Light Letters (Tafkhim and Tarqiq)", desc: "Learn which letters are always heavy, always light, and conditionally heavy, crucial for authentic Arabic pronunciation." },
                { title: "Beautification of Voice in Recitation", desc: "Beyond rules, learn how to recite the Quran with proper rhythm, melody (Maqam), and emotion that honors the words of Allah." },
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
                title: "Beginners Who Cannot Read Properly",
                desc: "If you can read some Arabic letters but your pronunciation is uncertain and your recitation lacks confidence, this course systematically corrects and rebuilds your foundation.",
                points: ["Letter sounds corrected from the start", "Basic rules with simple examples", "Build recitation confidence", "No judgment for current level"],
              },
              {
                icon: null,
                title: "Intermediate Students Wanting to Improve",
                desc: "You can read the Quran but you know your Tajweed is not correct. This level focuses on identifying and fixing specific mistakes while learning the advanced rules of recitation.",
                points: ["Diagnose and fix existing errors", "Learn all major Tajweed rules", "Practice on full Quranic pages", "Reach fluent, correct recitation"],
              },
              {
                icon: CheckCircle,
                title: "Adults Who Grew Up in the West",
                desc: "Many Muslims born or raised in the US, UK, or Canada learned to read the Quran informally, often with serious Tajweed errors. This course is specifically structured for Western adult learners.",
                points: ["English-medium instruction", "Patient, non-judgmental approach", "Flexible scheduling", "Start at any level"],
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
                Methodology
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
                Class Structure & Methodology
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Rule-by-Rule Progression", desc: "Each class introduces one or two rules with detailed explanation, audio demonstration, and immediate practice on Quranic text. Rules are never rushed, only when a rule is mastered do we move forward." },
                { title: "Real-Time Pronunciation Correction", desc: "Your teacher listens to every word and corrects mistakes instantly. You receive clear, simple English explanations for why a sound is wrong and exactly how to fix it." },
                { title: "Duration Options", desc: "Classes run 30–60 minutes depending on your plan. We recommend 3 classes per week for steady progress, though 2 per week is also effective for busy adults." },
                { title: "Recitation Practice Every Class", desc: "Every session includes applying the rules to real Quranic verses, not just theory. You practice on Surah Al-Mulk, Yasin, Ar-Rahman, and other frequently recited portions." },
                { title: "Progress Milestones", desc: "We track which rules have been mastered and which need more work. You receive a summary of your progress every month so you always know where you stand." },
                { title: "Homework and Self-Practice", desc: "After each class, you receive specific verses to practice before the next session. Consistent daily practice of even 10 minutes accelerates progress dramatically." },
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
              Tajweed Specialists Certified from Wifaq ul Madaris
            </h2>
            <p className="text-grey max-w-xl mx-auto text-sm leading-relaxed">
              Both teachers have studied Tajweed formally and are certified from Wifaq ul Madaris
              Al-Arabia, Pakistan's largest Islamic education board, globally recognized.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <TeacherCard
              name="Muhammad Umair"
              image="/images/teacher-1.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Tajweed Specialist, Quran Recitation Expert"
              experience="2+ years teaching Tajweed to Western students online"
              qualification="Tajweed Teacher"
              badge="Tajweed Specialist"
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
              Flexible monthly plans, no contracts, cancel anytime. Your first Tajweed class
              is completely free, experience the teaching quality before committing.
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
                Tajweed Course, Frequently Asked Questions
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
              { href: "/courses/quran-for-adults", title: "Quran for Adults", desc: "Start from scratch or improve your reading, a patient, structured course for adults at any level." },
              { href: "/courses/hifz", title: "Hifz Program", desc: "Once your Tajweed is solid, take on the rewarding journey of Quran memorization with a structured Hifz plan." },
              { href: "/courses/noorani-qaida", title: "Noorani Qaida", desc: "Need to go back to basics first? Our Noorani Qaida course builds the reading foundation Tajweed requires." },
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
        headline="Start Reciting the Quran Beautifully"
        subtext="Book your free Tajweed trial class today and hear the difference proper Tajweed makes in your recitation. No credit card, no commitment."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
