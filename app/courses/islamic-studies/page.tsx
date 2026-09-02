import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen, Star } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TeacherCard from "@/components/TeacherCard";

export const metadata: Metadata = {
  title: "Online Islamic Studies Classes in USA",
  description:
    "Comprehensive Islamic studies online for kids and adults. Aqeedah, Fiqh, Seerah, Islamic manners. Certified teachers. Free trial class for US families.",
  alternates: {
    canonical: "https://easequran.com/courses/islamic-studies",
  },
  openGraph: {
    title: "Online Islamic Studies Classes | Ease Quran Academy USA",
    description:
      "Comprehensive Islamic studies online for kids and adults. Aqeedah, Fiqh, Seerah, Islamic manners. Certified teachers. Free trial class for US families.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Islamic Studies Classes, Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Courses", item: "https://easequran.com/courses" },
    { "@type": "ListItem", position: 3, name: "Islamic Studies", item: "https://easequran.com/courses/islamic-studies" },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Online Islamic Studies Classes",
  description:
    "Comprehensive Islamic studies for kids and adults, Aqeedah, Fiqh, Seerah, Islamic manners, Quran stories, and Islamic history. Taught by a certified female Quran teacher.",
  provider: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  url: "https://easequran.com/courses/islamic-studies",
  courseMode: "online",
  educationalLevel: "Beginner to Intermediate",
  teaches: ["Aqeedah", "Fiqh", "Seerah", "Islamic Manners", "Islamic History"],
  availableLanguage: "English",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What topics are covered in Islamic Studies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Islamic Studies course covers: Aqeedah (core beliefs of Islam), the Five Pillars and their practice, Fiqh basics (Islamic jurisprudence), Seerah (the life of Prophet Muhammad ﷺ), Islamic manners and ethics, Quran stories (Qasas ul Anbiya), Islamic history from the time of the Prophet ﷺ, halal and haram basics, and Islamic etiquette for daily life.",
      },
    },
    {
      "@type": "Question",
      name: "Is Islamic Studies suitable for children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Islamic Studies is designed for all ages. For children, the curriculum uses stories, illustrations, and age-appropriate language to teach Aqeedah, Islamic manners, and Prophetic stories. For adults, the content is more detailed and analytical. Almas Fatima, our female teacher, specializes in teaching children and sisters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you follow a specific madhab in Fiqh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our introductory Fiqh content covers principles that are agreed upon by all four major madhabs (Hanafi, Maliki, Shafi'i, Hanbali). For advanced Fiqh topics where madhabs differ, we note the differences and teach according to the Hanafi madhab by default, the most widely followed school in South Asia and among American Muslims of South Asian heritage. If you follow a different madhab, please mention this and we will accommodate where possible.",
      },
    },
    {
      "@type": "Question",
      name: "How is Islamic Studies different from a Quran class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quran classes focus on reading, recitation, Tajweed, and memorization of the Quran itself. Islamic Studies is the broader body of Islamic knowledge, beliefs, worship practices, history, ethics, and law, that contextualizes and complements what is recited in the Quran. We strongly recommend taking both alongside each other.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take Islamic Studies alongside a Tajweed or Hifz course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely, and we strongly encourage it. Many families book 3 Quran classes per week and 1–2 Islamic Studies classes per week for their children. The two subjects complement each other deeply. Islamic Studies gives context to what is being memorized or recited in Quran class.",
      },
    },
  ],
};

const faqs = [
  {
    question: "What topics are covered in Islamic Studies?",
    answer:
      "Our Islamic Studies course covers: Aqeedah (core beliefs of Islam), the Five Pillars and their practice, Fiqh basics (Islamic jurisprudence), Seerah (the life of Prophet Muhammad ﷺ), Islamic manners and ethics, Quran stories (Qasas ul Anbiya), Islamic history from the time of the Prophet ﷺ, halal and haram basics, and Islamic etiquette for daily life.",
  },
  {
    question: "Is Islamic Studies suitable for children?",
    answer:
      "Yes, Islamic Studies is designed for all ages. For children, the curriculum uses stories, illustrations, and age-appropriate language to teach Aqeedah, Islamic manners, and Prophetic stories. For adults, the content is more detailed and analytical. Almas Fatima, our female teacher, specializes in teaching children and sisters.",
  },
  {
    question: "Do you follow a specific madhab in Fiqh?",
    answer:
      "Our introductory Fiqh content covers principles that are agreed upon by all four major madhabs (Hanafi, Maliki, Shafi'i, Hanbali). For advanced Fiqh topics where madhabs differ, we note the differences and teach according to the Hanafi madhab by default, the most widely followed school in South Asia and among American Muslims of South Asian heritage. If you follow a different madhab, please mention this and we will accommodate where possible.",
  },
  {
    question: "How is Islamic Studies different from a Quran class?",
    answer:
      "Quran classes focus on reading, recitation, Tajweed, and memorization of the Quran itself. Islamic Studies is the broader body of Islamic knowledge, beliefs, worship practices, history, ethics, and law, that contextualizes and complements what is recited in the Quran. We strongly recommend taking both alongside each other.",
  },
  {
    question: "Can I take Islamic Studies alongside a Tajweed or Hifz course?",
    answer:
      "Absolutely, and we strongly encourage it. Many families book 3 Quran classes per week and 1–2 Islamic Studies classes per week for their children. The two subjects complement each other deeply. Islamic Studies gives context to what is being memorized or recited in Quran class.",
  },
];

export default function IslamicStudiesPage() {
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
              <li className="text-white/80">Islamic Studies</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Complete Islamic Education
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Islamic Studies Classes
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Give your family the gift of comprehensive Islamic knowledge. Our Islamic Studies
              course covers Aqeedah, Fiqh, Seerah, Islamic manners, Quran stories, and Islamic
              history, taught in English by a certified female teacher for sisters and children.
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
                What Is the Islamic Studies Course?
              </h2>
              <div className="space-y-4 text-grey text-sm leading-relaxed">
                <p>
                  Islam is not only the Quran, it is a complete way of life that encompasses
                  beliefs, worship, character, history, and daily conduct. Our Islamic Studies
                  course provides the structured Islamic knowledge that every Muslim child and
                  adult needs to live their faith with confidence and understanding.
                </p>
                <p>
                  The course is taught by Almas Fatima, our certified female Quran teacher who
                  holds a B.A. in Islamic Studies and a certification from{" "}
                  <strong className="text-navy">Wifaq ul Madaris Al-Arabia</strong>. She specializes
                  in teaching sisters and children, bringing both scholarly knowledge and a warm,
                  nurturing teaching style to every class.
                </p>
                <p>
                  The curriculum is divided by age and level. Children receive Islamic knowledge
                  through storytelling, Quranic narratives, and interactive discussion. Adults
                  receive a more in-depth treatment with primary source references and practical
                  application to daily life in the USA.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Kids & Adults</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Female Teacher</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Aqeedah & Fiqh</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ English Medium</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Courses/course-islamic.webp"
                alt="Online Islamic Studies classes, Aqeedah, Fiqh, Seerah at Ease Quran Academy"
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
                { title: "Core Beliefs of Islam (Aqeedah)", desc: "The six pillars of Iman, belief in Allah, angels, Books, Prophets, the Day of Judgment, and Qadr. Understanding what a Muslim believes and why." },
                { title: "Five Pillars: Practical Application", desc: "Not just memorizing the five pillars but understanding how each is performed, its wisdom, and its importance in daily Muslim life." },
                { title: "Fiqh: Islamic Jurisprudence Basics", desc: "Practical Fiqh covering Taharah (purification), Salah, fasting, Zakat, and common daily-life rulings, how to live as a practicing Muslim in the West." },
                { title: "Seerah, Life of the Prophet ﷺ", desc: "A chronological study of the Prophet Muhammad's ﷺ life, from birth in Makkah, the first revelation, the Hijrah, to the conquest of Makkah and final years in Madinah." },
                { title: "Islamic Manners and Ethics", desc: "The character of a Muslim, honesty, kindness, respect for parents, treatment of neighbors, and the beautiful ethical framework that Islam provides for daily conduct." },
                { title: "Quran Stories (Qasas ul Anbiya)", desc: "Stories of the Prophets, Adam, Ibrahim, Musa, Isa, and others ﷺ, as narrated in the Quran. Powerful lessons drawn from each story for modern life." },
                { title: "History of Islam", desc: "From the early Caliphate through the major Islamic civilizations, understanding the history of the Ummah and the scholars who preserved and spread Islamic knowledge." },
                { title: "Halal and Haram Basics", desc: "Practical guidance on food, business dealings, relationships, entertainment, and daily decisions, what Islam permits, what it prohibits, and the wisdom behind these guidelines." },
                { title: "Islamic Etiquette for Daily Life", desc: "The Sunnah etiquette for eating, sleeping, greeting, entering the home, using the bathroom, and other daily activities, small practices that carry immense barakah." },
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
                title: "Children Wanting Islamic Knowledge Alongside Quran",
                desc: "Children who are already taking Quran classes can add Islamic Studies to build a complete Islamic identity, knowing what they believe, how to worship, and how to carry themselves as Muslims.",
                points: ["Ages 5 and above", "Story-based learning", "Age-appropriate content", "Taught by female teacher"],
              },
              {
                icon: Users,
                title: "Parents Raising Children with Islamic Values",
                desc: "For families who want their children to grow up with not just Quran reading ability but a full Islamic identity, knowing their Deen, their history, and their purpose as Muslims in America.",
                points: ["Complement Quran education", "Islamic values framework", "Character building", "Family Islam alignment"],
              },
              {
                icon: Star,
                title: "Adults Who Grew Up Without Islamic Education",
                desc: "Many Muslim adults in the USA received little or no formal Islamic education growing up. This course provides a structured, shame-free, adult-friendly path to the knowledge they never received.",
                points: ["No prior knowledge needed", "Non-judgmental environment", "Practical modern focus", "English-medium instruction"],
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
                { title: "Structured Curriculum with Textbooks", desc: "We follow structured Islamic Studies textbooks aligned with traditional Islamic education. Students progress through levels as they master each topic, no random, disconnected lessons." },
                { title: "Story-Based Learning for Children", desc: "Children learn most effectively through stories. Almas Fatima uses Quranic stories, Prophetic narrations, and real-life examples to bring Islamic knowledge to life in a way that children remember and love." },
                { title: "Discussion-Based for Adults", desc: "Adult classes involve deeper discussion, Q&A, and practical application to modern life. Questions are encouraged. This is a space for genuine Islamic learning without judgment." },
                { title: "Class Duration", desc: "Islamic Studies classes run 30–45 minutes for children and 45–60 minutes for adults. Most families schedule 1–2 Islamic Studies classes per week alongside their Quran sessions." },
                { title: "Primary Source References", desc: "Every ruling and belief taught is referenced back to the Quran and authentic Hadith. Students learn not just what Islam says, but where it says it, building confidence in their knowledge." },
                { title: "Progress Reports", desc: "Regular updates on which topics have been covered, how well the student understands each concept, and what needs reinforcement at home between classes." },
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
              Taught by Our Certified Female Islamic Studies Teacher
            </h2>
            <p className="text-grey max-w-xl mx-auto text-sm leading-relaxed">
              Almas Fatima holds a B.A. in Islamic Studies and a certification from Wifaq ul
              Madaris Al-Arabia. She brings warmth, patience, and deep scholarly knowledge to every
              Islamic Studies class, particularly for sisters and children.
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <TeacherCard
              name="Almas Fatima"
              image="/images/teacher-2.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Qaria e Quran, Bachelor in Islamic Studies, Islamic Education Specialist"
              experience="Teaching Islamic Studies and Quran since 2022"
              qualification="Female Quran & Islamic Studies Teacher"
              badge="Islamic Studies"
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
              Add Islamic Studies to your family&apos;s education plan. Book a free first class and
              see how much your child can learn in a single session.
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
                Islamic Studies, Frequently Asked Questions
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
              { href: "/courses/quran-for-kids", title: "Quran for Kids", desc: "Combine Islamic Studies with Quran reading for a complete Islamic education for your child." },
              { href: "/courses/arabic-language", title: "Arabic Language", desc: "Understanding Arabic deepens Islamic Studies immeasurably, access Islamic texts in their original language." },
              { href: "/courses/quran-for-adults", title: "Quran for Adults", desc: "Adults studying Islamic knowledge can complement their learning with structured Quran reading and Tajweed." },
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
        headline="Raise Children Who Know Their Deen"
        subtext="Book a free Islamic Studies trial class today. Your first class is completely free, experience the quality before you commit to anything."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
