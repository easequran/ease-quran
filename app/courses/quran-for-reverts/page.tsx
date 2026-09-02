import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TeacherCard from "@/components/TeacherCard";

export const metadata: Metadata = {
  title: "Quran Classes for New Muslims (Reverts) in USA",
  description:
    "Specially designed online Quran classes for new Muslims (reverts) in the USA. Start from zero with a patient, certified teacher. Free trial class.",
  alternates: {
    canonical: "https://easequran.com/courses/quran-for-reverts",
  },
  openGraph: {
    title: "Quran Classes for New Muslims (Reverts) in USA | Ease Quran",
    description:
      "Specially designed online Quran classes for new Muslims (reverts) in the USA. Start from zero with a patient, certified teacher. Free trial class.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes for New Muslims, Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Courses", item: "https://easequran.com/courses" },
    { "@type": "ListItem", position: 3, name: "Quran for Reverts", item: "https://easequran.com/courses/quran-for-reverts" },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Quran Classes for New Muslims and Reverts",
  description:
    "Specially designed online Quran classes for new Muslims and reverts in the USA, starting from absolute zero with Arabic letters, Kalima, Salah, essential Duas, and short Surahs.",
  provider: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  url: "https://easequran.com/courses/quran-for-reverts",
  courseMode: "online",
  educationalLevel: "Absolute Beginner",
  teaches: ["Arabic Letters", "Kalima", "Salah Words", "Essential Duas", "Short Surahs", "Wudu"],
  availableLanguage: "English",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "I just became Muslim, where do I start with the Quran?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Congratulations on your Shahada. The very first thing is to learn the Kalima and the words of the Shahada with correct pronunciation. Then we move to Wudu (ablution), the words of Salah (prayer), Al-Fatiha, and the short Surahs needed for prayer. Our Quran for Reverts course is specifically designed to guide you through exactly this journey, step by step, in English, with full patience and no assumptions.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to learn Arabic before taking this course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We teach Arabic from absolute zero as part of this course. You will learn the Arabic alphabet and sounds as a natural part of learning to read the Quran and Duas. You do not need any prior Arabic knowledge, and the course is taught entirely in English.",
      },
    },
    {
      "@type": "Question",
      name: "What is the first thing a new Muslim should learn from the Quran?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first priority is learning Surah Al-Fatiha correctly, it is recited in every Rakah of Salah. After that, three short Surahs for prayer: Al-Ikhlas, Al-Falaq, and An-Nas. Alongside this, we teach the Tashahhud and the Salat-Ibrahim (Durood) recited in Salah. Once prayer basics are covered, we work on the Arabic alphabet and Quranic reading more broadly.",
      },
    },
    {
      "@type": "Question",
      name: "Are the teachers sensitive to the unique challenges reverts face?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our certified teacher has extensive experience teaching reverts and understands the unique emotional, social, and practical challenges of being a new Muslim in America. Classes are completely free of cultural assumptions, you will not be made to feel less Muslim for not knowing something. Every question is welcomed. The learning environment is warm, non-judgmental, and encouraging.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can a revert learn to pray in Arabic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most new Muslims can learn the basic words of Salah within 4–8 weeks of consistent practice with 2–3 classes per week. This includes Al-Fatiha, one short Surah, the Tashahhud, and the opening Takbir. The movements of Salah can be learned from videos alongside the class. We focus on getting you praying correctly as quickly as possible, then build on that foundation.",
      },
    },
  ],
};

const faqs = [
  {
    question: "I just became Muslim, where do I start with the Quran?",
    answer:
      "Congratulations on your Shahada. The very first thing is to learn the Kalima and the words of the Shahada with correct pronunciation. Then we move to Wudu (ablution), the words of Salah (prayer), Al-Fatiha, and the short Surahs needed for prayer. Our Quran for Reverts course is specifically designed to guide you through exactly this journey, step by step, in English, with full patience and no assumptions.",
  },
  {
    question: "Do I need to learn Arabic before taking this course?",
    answer:
      "No. We teach Arabic from absolute zero as part of this course. You will learn the Arabic alphabet and sounds as a natural part of learning to read the Quran and Duas. You do not need any prior Arabic knowledge, and the course is taught entirely in English.",
  },
  {
    question: "What is the first thing a new Muslim should learn from the Quran?",
    answer:
      "The first priority is learning Surah Al-Fatiha correctly, it is recited in every Rakah of Salah. After that, three short Surahs for prayer: Al-Ikhlas, Al-Falaq, and An-Nas. Alongside this, we teach the Tashahhud and the Salat-Ibrahim (Durood) recited in Salah. Once prayer basics are covered, we work on the Arabic alphabet and Quranic reading more broadly.",
  },
  {
    question: "Are the teachers sensitive to the unique challenges reverts face?",
    answer:
      "Absolutely. Our certified teacher has extensive experience teaching reverts and understands the unique emotional, social, and practical challenges of being a new Muslim in America. Classes are completely free of cultural assumptions, you will not be made to feel less Muslim for not knowing something. Every question is welcomed. The learning environment is warm, non-judgmental, and encouraging.",
  },
  {
    question: "How quickly can a revert learn to pray in Arabic?",
    answer:
      "Most new Muslims can learn the basic words of Salah within 4–8 weeks of consistent practice with 2–3 classes per week. This includes Al-Fatiha, one short Surah, the Tashahhud, and the opening Takbir. The movements of Salah can be learned from videos alongside the class. We focus on getting you praying correctly as quickly as possible, then build on that foundation.",
  },
];

export default function QuranForRevertsPage() {
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
              <li className="text-white/80">Quran for Reverts</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              For New Muslims, start from Zero
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Quran Classes for New Muslims
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              You took your Shahada, and now you want to connect with the Quran, learn to pray,
              and build your Islamic life. Welcome. This course was designed specifically for you.
              We start from absolute zero, in English, with a patient certified teacher who
              understands exactly where you are.
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

      {/* Welcome note */}
      <section className="bg-gold/10 border-y border-gold/20 py-8">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-playfair text-lg text-navy leading-relaxed">
              &ldquo;Whoever Allah guides, no one can misguide. You have found Islam, now let us help
              you build the Islamic foundation you deserve, one step at a time.&rdquo;
            </p>
            <p className="text-gold font-semibold text-sm mt-3">— Ease Quran Academy</p>
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
                What Is the Quran for Reverts Course?
              </h2>
              <div className="space-y-4 text-grey text-sm leading-relaxed">
                <p>
                  This is not a standard Quran reading course, it is a comprehensive Islamic
                  foundation course designed specifically for people who are new to Islam. It
                  prioritizes practical Islamic needs first: the Kalima, Wudu, Salah, essential
                  Duas, and the short Surahs needed to pray, before moving to broader Quran
                  reading and Arabic skills.
                </p>
                <p>
                  Taught by our certified teacher from{" "}
                  <strong className="text-navy">Wifaq ul Madaris Al-Arabia</strong>, with
                  years of experience working with reverts in the USA. Our teacher understands the unique
                  challenges: the emotional journey of conversion, the absence of a Muslim family
                  network, the practical questions no one seems to answer, and the overwhelming
                  feeling of not knowing where to start.
                </p>
                <p>
                  This course removes that overwhelm. You begin with what you need most, you
                  learn at a pace that suits you, and you never feel rushed or judged for your
                  current level of knowledge. Every question is welcome, there are no silly questions here.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ New Muslims Welcome</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Absolute Zero Start</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ English Medium</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ No Cultural Assumptions</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Courses/course-noorani.webp"
                alt="Quran classes for new Muslims and reverts, Ease Quran Online Academy"
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
                A practical, prioritized curriculum designed for the new Muslim, covering what
                you need most first, then building toward Quran reading and beyond.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Arabic Letters from Absolute Zero", desc: "Learn every Arabic letter, its name, shape, and sound, starting from Alif. No prior knowledge assumed. We use the Noorani Qaida as our foundation." },
                { title: "Kalima and Shahada with Correct Pronunciation", desc: "Learn the six Kalimat of Islam, starting with the first Kalima (Tayyibah), with accurate Arabic pronunciation and understanding of their meaning." },
                { title: "Essential Duas for Daily Life", desc: "The 10 most important Duas every Muslim needs: before eating, sleeping, waking up, entering/leaving the home, before and after Wudu, before travel, and asking for forgiveness." },
                { title: "Salah: Learning the Words and Their Meaning", desc: "Learn every word recited in Salah: the opening Takbir, Al-Fatiha, Ruku and Sujood phrases, Tashahhud, and Durood Ibrahim, with full English translation of each." },
                { title: "Short Surahs for Prayer", desc: "Memorize and correctly pronounce the five essential short Surahs: Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas, and Al-Kawthar, enough to perform all five daily prayers." },
                { title: "Wudu (Ablution) and Its Etiquette", desc: "Learn the steps of Wudu in the correct sequence, the Dua before and after, and common mistakes to avoid. Understand why purification is required before Salah." },
                { title: "Understanding What the Quran Is and Its Significance", desc: "A foundational lesson on the Quran: what it is, how it was revealed, why Muslims revere it, and what your relationship with it as a Muslim should look like." },
                { title: "Building Confidence in Islamic Practice", desc: "By the end of this course, you will be able to perform Salah, make Wudu correctly, recite essential Duas, and read from the Quran, with confidence and without dependence on transliteration." },
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
                title: "New Muslims Who Just Took Their Shahada",
                desc: "You recently embraced Islam and want to learn the basics, from Wudu and Salah to the Quran. This course is your starting point, taught with the patience and sensitivity your journey deserves.",
                points: ["Shahada just taken", "Want to learn Salah first", "No Arabic knowledge", "Need a trusted guide"],
              },
              {
                icon: BookOpen,
                title: "Reverts Who Have Been Muslim But Never Learned Quran",
                desc: "You took your Shahada some years ago but have been relying on transliterations, YouTube videos, and informal learning. You want structured, correct Quran education from a real certified teacher.",
                points: ["Muslim for some years", "Relying on transliteration", "Ready for proper learning", "Improving Salah quality"],
              },
              {
                icon: CheckCircle,
                title: "English-Speaking Muslims With No Prior Quran Education",
                desc: "Born into a Muslim family but raised without Quran education. You identify as Muslim but cannot read the Quran. No prior Arabic knowledge, no connection to traditional Islamic education. This course builds that connection.",
                points: ["Muslim identity, no Quran education", "English as primary language", "Starting from scratch", "Any age, any background"],
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
                { title: "Practical Priorities First", desc: "We do not follow a standard Noorani Qaida sequence for reverts. Instead, we front-load the most urgent practical needs: Shahada pronunciation, Wudu, Al-Fatiha, and basic Salah words. Arabic reading and broader Quran study come alongside these, not before." },
                { title: "No Cultural Assumptions", desc: "Our teacher does not assume you know what a Masjid looks like, that you have Muslim family to ask, or that you understand Islamic terminology. Every Islamic term is explained in plain English. No concept is assumed as prior knowledge." },
                { title: "Safe Space for Questions", desc: "This is explicitly a judgment-free zone. Questions about Islamic practices, about the Quran, about what is halal or haram, all are welcome. Our teacher has heard every question a new Muslim might have, and welcomes them all." },
                { title: "Class Duration", desc: "Classes run 45–60 minutes per session. We recommend starting with 2 classes per week, with the option to increase to 3 as you build momentum. Even 2 classes per week produces life-changing results within a few months." },
                { title: "Flexible Scheduling", desc: "Available mornings, evenings, nights, and weekends, any time that works for your schedule. Book, reschedule, or cancel with 24 hours notice. Your learning journey adapts to your life." },
                { title: "Your Journey, Your Pace", desc: "There is no fixed timetable or exam pressure. You move forward when you are ready. The goal is confidence and correctness, not speed. You will know when you have truly learned something." },
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
              A Teacher Who Truly Understands Your Journey
            </h2>
            <p className="text-grey max-w-xl mx-auto text-sm leading-relaxed">
              Ease Quran was built specifically to serve Western Muslims, including reverts.
              Our teacher&apos;s 6+ years teaching Western students has given them deep empathy for the unique
              challenges new Muslims face. Certified from Wifaq ul Madaris Al-Arabia, they bring
              both scholarly credentials and genuine warmth to every class.
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <TeacherCard
              name="Head Teacher"
              image="/images/teacher-1.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Reverts & Western Students Specialist"
              experience="6+ years teaching reverts and Western Muslims"
              qualification="Certified Quran Teacher"
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
              Your first class is completely free. No credit card, no commitment. Meet your teacher,
              ask your questions, and begin your Islamic education, all in one 45-minute session.
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
                Quran for Reverts, Frequently Asked Questions
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
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy mb-2">Continue Your Learning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { href: "/courses/noorani-qaida", title: "Noorani Qaida", desc: "Once you have your Salah basics, take a dedicated Noorani Qaida course to build full Quran reading ability." },
              { href: "/courses/arabic-language", title: "Arabic Language", desc: "When you are ready to understand the Quran directly, our Arabic language course opens that door." },
              { href: "/courses/islamic-studies", title: "Islamic Studies", desc: "Comprehensive Islamic knowledge covering Aqeedah, Fiqh, Seerah, the perfect next step for new Muslims." },
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
        headline="Your Islamic Journey Starts Here"
        subtext="Book a free class today, no credit card, no commitment, no judgment. Just a certified, patient teacher ready to welcome you and help you take your first steps with the Quran."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
