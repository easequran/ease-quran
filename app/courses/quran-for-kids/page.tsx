import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Star, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TeacherCard from "@/components/TeacherCard";

export const metadata: Metadata = {
  title: "Online Quran Classes for Kids in USA",
  description:
    "Fun, structured online Quran classes for children ages 4–14. Certified teachers, female teachers available. Book a free trial class today.",
  alternates: {
    canonical: "https://easequran.com/courses/quran-for-kids",
  },
  openGraph: {
    title: "Online Quran Classes for Kids in USA | Ease Quran",
    description:
      "Fun, structured online Quran classes for children ages 4–14. Certified teachers, female teachers available. Book a free trial class today.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes for Kids in USA, Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Courses", item: "https://easequran.com/courses" },
    { "@type": "ListItem", position: 3, name: "Quran for Kids", item: "https://easequran.com/courses/quran-for-kids" },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Online Quran Classes for Kids",
  description:
    "Fun, structured online Quran classes for children ages 4–14. Certified teachers with female teachers available for sisters and children.",
  provider: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  url: "https://easequran.com/courses/quran-for-kids",
  courseMode: "online",
  educationalLevel: "Beginner",
  teaches: ["Arabic Letters", "Quran Reading", "Noorani Qaida", "Basic Tajweed", "Short Surahs"],
  availableLanguage: "English",
  inLanguage: "en",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it safe for kids to learn Quran online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All Ease Quran classes take place over a video call with a parent present. Our teachers are fully vetted and certified from Wifaq ul Madaris. We encourage parents to sit nearby during early classes. Female teachers are available for sisters and younger children.",
      },
    },
    {
      "@type": "Question",
      name: "What age can my child start Quran classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept children from age 4 onwards. For ages 4–6, classes are shorter (20–25 minutes) and highly interactive with games and visuals. From age 7+, we follow a more structured Noorani Qaida and Quran reading curriculum.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have female teachers for my daughter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Almas Fatima is our certified female Quran teacher, available for sisters and children. She holds a Wifaq ul Madaris certification and a B.A. in Islamic Studies. Simply mention your preference when booking your free trial.",
      },
    },
    {
      "@type": "Question",
      name: "How long are kids' Quran classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Class duration depends on age and attention span. Ages 4–7: 20–30 minutes. Ages 8–12: 30–45 minutes. Ages 13+: 45–60 minutes. We always start shorter and increase as the child builds focus and habit.",
      },
    },
    {
      "@type": "Question",
      name: "What if my child loses interest in Quran class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our teachers are trained in child-friendly teaching methods, using storytelling, visual aids, reward systems, and patience. If a child is struggling to engage, we adjust the approach. We also offer a free replacement class if a session does not meet your expectations.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Is it safe for kids to learn Quran online?",
    answer:
      "Yes. All Ease Quran classes take place over a video call with a parent present. Our teachers are fully vetted and certified from Wifaq ul Madaris. We encourage parents to sit nearby during early classes. Female teachers are available for sisters and younger children.",
  },
  {
    question: "What age can my child start Quran classes?",
    answer:
      "We accept children from age 4 onwards. For ages 4–6, classes are shorter (20–25 minutes) and highly interactive with games and visuals. From age 7+, we follow a more structured Noorani Qaida and Quran reading curriculum.",
  },
  {
    question: "Do you have female teachers for my daughter?",
    answer:
      "Yes. Almas Fatima is our certified female Quran teacher, available for sisters and children. She holds a Wifaq ul Madaris certification and a B.A. in Islamic Studies. Simply mention your preference when booking your free trial.",
  },
  {
    question: "How long are kids' Quran classes?",
    answer:
      "Class duration depends on age and attention span. Ages 4–7: 20–30 minutes. Ages 8–12: 30–45 minutes. Ages 13+: 45–60 minutes. We always start shorter and increase as the child builds focus and habit.",
  },
  {
    question: "What if my child loses interest in Quran class?",
    answer:
      "Our teachers are trained in child-friendly teaching methods, using storytelling, visual aids, reward systems, and patience. If a child is struggling to engage, we adjust the approach. We also offer a free replacement class if a session does not meet your expectations.",
  },
];

export default function QuranForKidsPage() {
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
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li className="text-white/30">/</li>
              <li>
                <Link href="/courses" className="hover:text-gold transition-colors">Courses</Link>
              </li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">Quran for Kids</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Most Popular Course
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes for Kids
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, patient teachers bring structured Quran education directly to your home.
              Children ages 4–14 learn Arabic letters, Noorani Qaida, Quran reading, short Surahs,
              and Islamic manners, all in a safe, engaging online environment.
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
                What Is the Quran for Kids Course?
              </h2>
              <div className="space-y-4 text-grey text-sm leading-relaxed">
                <p>
                  Our Quran for Kids program is a structured, age-appropriate Quran education
                  course designed for children ages 4 to 14. It begins with the fundamentals:
                  recognizing Arabic letters through Noorani Qaida, and progresses to reading
                  the Quran fluently with correct Tajweed.
                </p>
                <p>
                  Each class is taught live, one-on-one, over a simple video call by a teacher
                  certified from <strong className="text-navy">Wifaq ul Madaris Al-Arabia</strong>.
                  Classes are taught entirely in English, so your child never feels lost or
                  overwhelmed. Female teachers are available for sisters and younger children.
                </p>
                <p>
                  The curriculum is designed around your child&apos;s age, attention span, and
                  current level. A 4-year-old begins with letter recognition games; a 12-year-old
                  may already be reading and memorizing Surahs. Every child gets a personalized
                  learning plan from day one.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Ages 4–14</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Female Teachers Available</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ English Medium</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Free First Class</span>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/course-kids.webp"
                alt="Online Quran classes for kids, Ease Quran Online Academy"
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
                What Your Child Will Learn
              </h2>
              <p className="text-grey text-sm leading-relaxed max-w-xl mx-auto">
                Our curriculum is structured to build skills progressively, from the very first
                Arabic letter all the way to confident Quran recitation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "أ",
                  title: "All Arabic Letters",
                  desc: "Recognize, pronounce, and write all 28 Arabic letters in their isolated and connected forms.",
                },
                {
                  icon: "📖",
                  title: "Basic Quran Reading",
                  desc: "Transition from Noorani Qaida to reading actual Quranic words and verses with correct pronunciation.",
                },
                {
                  icon: "🔤",
                  title: "Noorani Qaida Foundation",
                  desc: "Complete the Noorani Qaida systematically, the most trusted foundation for Quran reading worldwide.",
                },
                {
                  icon: "🗣️",
                  title: "Tajweed Basics",
                  desc: "Learn fundamental Tajweed rules including short vowels, Madd, Sukoon, and Shaddah for correct recitation.",
                },
                {
                  icon: "💎",
                  title: "Short Surahs Memorization",
                  desc: "Memorize essential Surahs: Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas, Al-Kawthar, and more used in daily prayer.",
                },
                {
                  icon: "☪️",
                  title: "Islamic Manners (Adab)",
                  desc: "Learn the etiquette of handling and reading the Quran, the importance of Wudu, and respect for the Book of Allah.",
                },
                {
                  icon: "🤝",
                  title: "Respectful Behavior in Class",
                  desc: "Children learn to sit attentively, respond respectfully, and treat their teacher and the Quran with proper reverence.",
                },
                {
                  icon: "🧠",
                  title: "Attention and Focus Skills",
                  desc: "Through structured lessons and patient teaching, children naturally develop longer attention spans and study discipline.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy font-bold text-lg shrink-0">
                    {item.icon}
                  </div>
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
              Is This Course Right for Your Child?
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
              Who This Course Is For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                age: "Ages 4–7",
                label: "Early Beginners",
                icon: Star,
                desc: "Children at this age begin with letter recognition, sounds, and basic Arabic through interactive games and visual aids. Classes are 20–25 minutes and highly engaging.",
                points: ["Arabic letter sounds", "Coloring and tracing activities", "Islamic songs and rhymes", "Noorani Qaida Part 1"],
              },
              {
                age: "Ages 8–12",
                label: "Intermediate Learners",
                icon: BookOpen,
                desc: "Children who can concentrate for longer sessions. This group works through Noorani Qaida, Quran reading, and begins Surah memorization with proper Tajweed.",
                points: ["Complete Noorani Qaida", "Begin Quran reading from Juz Amma", "Basic Tajweed rules", "Memorize 10+ short Surahs"],
              },
              {
                age: "Ages 13+",
                label: "Teen Level",
                icon: GraduationCap,
                desc: "Teens ready for a more academic approach. This level covers Quran reading with Tajweed, extended memorization, and can move toward Hifz if desired.",
                points: ["Fluent Quran recitation", "Full Tajweed rules", "Extended Surah memorization", "Pathway to Hifz program"],
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
              <div
                key={card.age}
                className="bg-offwhite rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={22} className="text-gold" />
                </div>
                <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">{card.age}</div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">{card.label}</h3>
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
              <p className="text-white/60 text-sm max-w-xl mx-auto">
                Every class is live, one-on-one, and structured to maximize your child&apos;s
                progress in a comfortable environment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Live One-on-One Sessions",
                  desc: "Every class is private, your child gets 100% of the teacher's attention. No group dynamics, no waiting, no distraction. The teacher moves at your child's pace.",
                },
                {
                  title: "Flexible Scheduling",
                  desc: "Classes are available 6 days a week, morning through evening. Choose times that fit your family's routine, evenings, weekends, or after school. You can reschedule with 24 hours notice.",
                },
                {
                  title: "Progress Tracking & Reports",
                  desc: "Parents receive regular progress updates. Our teachers note what was covered each session, what needs revision, and what milestones the child has reached. You are never left wondering how your child is doing.",
                },
                {
                  title: "Child-Friendly Teaching Methods",
                  desc: "Our teachers use visual aids, repetition, praise, and patience-based techniques proven to work with children. Islamic stories, Quranic games, and reward systems keep young learners motivated.",
                },
                {
                  title: "Duration Options",
                  desc: "Ages 4–7: 20–30 minutes per class. Ages 8–12: 30–45 minutes. Ages 13+: 45–60 minutes. We recommend 3–5 classes per week for best results, though 2 classes per week is a good starting point.",
                },
                {
                  title: "Parents Welcome",
                  desc: "Parents are encouraged to sit with younger children during class. We provide simple homework so the family can revise together between sessions, making Quran a family habit, not just a class.",
                },
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
              Certified Quran Teachers for Your Child
            </h2>
            <p className="text-grey max-w-xl mx-auto text-sm leading-relaxed">
              Both teachers hold credentials from{" "}
              <strong>Wifaq ul Madaris Al-Arabia</strong>, Pakistan&apos;s largest Islamic
              education board, globally recognized. A female teacher is available on request.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <TeacherCard
              name="Muhammad Umair"
              image="/images/teacher-1.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Tajweed, Quran Reading, Kids Education Specialist"
              experience="2+ years teaching children online"
              qualification="Quran Teacher"
              badge="Kids Specialist"
            />
            <TeacherCard
              name="Almas Fatima"
              image="/images/teacher-2.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Qaria e Quran, Bachelor in Islamic Studies"
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
              Flexible monthly plans with no long-term contracts. Your child&apos;s first class is
              completely free, no credit card required. Cancel anytime.
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
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                FAQ
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                Common Questions from Parents
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
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Related Courses
            </span>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy mb-2">
              Explore More Courses
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { href: "/courses/noorani-qaida", title: "Noorani Qaida", desc: "The best starting point for any child, learn Arabic letters from scratch before opening the Quran." },
              { href: "/courses/tajweed", title: "Tajweed", desc: "Once your child can read the Quran, Tajweed teaches them to recite it beautifully and correctly." },
              { href: "/courses/islamic-studies", title: "Islamic Studies", desc: "Pair Quran reading with Aqeedah, Seerah, and Islamic manners for a complete Islamic education." },
              { href: "/summer-quran-classes", title: "Summer Quran Classes", desc: "Give your child a meaningful summer with certified, one-on-one Quran classes built around school break." },
            ].map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <h3 className="font-playfair font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">
                  {course.title}
                </h3>
                <p className="text-grey text-sm leading-relaxed mb-3">{course.desc}</p>
                <span className="text-gold font-semibold text-sm">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Give Your Child the Gift of Quran Today"
        subtext="Join hundreds of Muslim families across America who trust Ease Quran for their children's Islamic education. Book your free trial class, no credit card, no commitment."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
