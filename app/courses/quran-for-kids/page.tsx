import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Star, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TeacherCard from "@/components/TeacherCard";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: { absolute: "Online Quran Classes for Kids: After School & Weekends | Ease Quran" },
  description:
    "One-on-one online Quran classes for kids ages 4 to 14, after school or on weekends. Certified teachers, female teachers available. First class free.",
  alternates: {
    canonical: "https://easequran.com/courses/quran-for-kids",
  },
  openGraph: {
    title: "Online Quran Classes for Kids: After School & Weekends | Ease Quran",
    description:
      "One-on-one online Quran classes for kids ages 4 to 14, booked after school, in the evening or on weekends. Certified teachers and a free first class.",
    url: "https://easequran.com/courses/quran-for-kids",
    type: "website",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes for Kids, Ease Quran Academy" }],
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
    "One-on-one online Quran classes for children ages 4 to 14, scheduled after school, in the evening or on weekends. Certified teachers, with female teachers available for sisters and children.",
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

const faqs = [
  {
    question: "Is it safe for kids to learn Quran online?",
    answer:
      "Yes. All Ease Quran classes take place over a video call with a parent present. Our teachers are fully vetted and certified from Wifaq ul Madaris. We encourage parents to sit nearby during early classes. Female teachers are available for sisters and younger children.",
  },
  {
    question: "What age can my child start Quran classes?",
    answer:
      "We accept children from age 4 onwards. For ages 4 to 6, classes are shorter (20 to 25 minutes) and highly interactive with games and visuals. From age 7+, we follow a more structured Noorani Qaida and Quran reading curriculum.",
  },
  {
    question: "Do you have female teachers for my daughter?",
    answer:
      "Yes. Almas Fatima is our certified female Quran teacher, available for sisters and children. She holds a Wifaq ul Madaris certification and a B.A. in Islamic Studies. Simply mention your preference when booking your free trial.",
  },
  {
    question: "How long are kids' Quran classes?",
    answer:
      "Class duration depends on age and attention span. Ages 4 to 7: 20 to 30 minutes. Ages 8 to 12: 30 to 45 minutes. Ages 13+: 45 to 60 minutes. We always start shorter and increase as the child builds focus and habit.",
  },
  {
    question: "Can my child take Quran classes after school?",
    answer:
      "Yes. Most of the children we teach come to class after school. Lessons run morning through evening, six days a week, so you can pick a slot that suits your child's energy, for example after a snack and before homework. Classes are booked in your own local time zone.",
  },
  {
    question: "Do you offer weekend Quran classes for kids?",
    answer:
      "Yes. Classes can be booked on Saturday and Sunday, or you can mix one weekday lesson with one weekend lesson. If every class in your plan falls on the weekend, our optional Weekend Priority add-on guarantees your preferred Saturday or Sunday slot.",
  },
  {
    question: "How many Quran classes a week should my child take during the school year?",
    answer:
      "Two classes a week is a good starting point while a child settles into the school routine. For steady progress we recommend three to five shorter classes a week, because frequent practice helps young children remember more than one long weekly session.",
  },
  {
    question: "What if my child loses interest in Quran class?",
    answer:
      "Our teachers are trained in child-friendly teaching methods, using storytelling, visual aids, reward systems, and patience. If a child is struggling to engage, we adjust the approach. We also offer a free replacement class if a session does not meet your expectations.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

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
            <span className="eyebrow mb-4">
              Most Popular Course
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes for Kids
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, patient teachers work with your child one-on-one at home, in after school,
              evening or weekend slots that fit your family&apos;s week. Children ages 4 to 14 learn
              Arabic letters, Noorani Qaida, Quran reading, short Surahs and Islamic manners in a
              safe, engaging online class.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-7 py-3.5 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm"
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
              <span className="eyebrow mb-4">
                Course Overview
              </span>
              <h2 className="heading-2 text-navy mb-6">
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
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Ages 4 to 14</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Female Teachers Available</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ English Medium</span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">✓ Free First Class</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Courses/course-kids.webp"
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
              <span className="eyebrow mb-4">
                Curriculum
              </span>
              <h2 className="heading-2 text-navy mb-4">
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
            <span className="eyebrow mb-4">
              Is This Course Right for Your Child?
            </span>
            <h2 className="heading-2 text-navy mb-4">
              Who This Course Is For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                age: "Ages 4 to 7",
                label: "Early Beginners",
                icon: Star,
                desc: "Children at this age begin with letter recognition, sounds, and basic Arabic through interactive games and visual aids. Classes are 20 to 25 minutes and highly engaging.",
                points: ["Arabic letter sounds", "Coloring and tracing activities", "Islamic songs and rhymes", "Noorani Qaida Part 1"],
              },
              {
                age: "Ages 8 to 12",
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
                <h3 className="card-title mb-3">{card.label}</h3>
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

      {/* School-year scheduling */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow mb-4">Busy School Weeks</span>
            <h2 className="heading-2 text-navy mb-6">
              Quran Classes That Fit Around School
            </h2>
            <p className="text-grey leading-relaxed mb-4">
              Most parents who contact us are not asking whether their child should learn the
              Quran. They are asking when. Between school, homework, sports and family time, a
              weekly drive to an evening class is often the first thing to fall off the calendar.
              Because every lesson is online and one-on-one, you choose the slot and your child
              logs in from home.
            </p>

            <h3 className="heading-3 text-navy mt-10 mb-3">Starting with the new school year</h3>
            <p className="text-grey leading-relaxed mb-4">
              The start of the school year is when family routines get set, so it is the easiest
              time to give Quran a fixed place in the week. Many families begin with two classes a
              week while their child adjusts to a new grade, then add a third once homework and
              activities have settled. There is no term start date to wait for. After the{" "}
              <Link href="/free-trial" className="text-gold font-semibold hover:underline">
                free trial class
              </Link>
              , regular lessons can begin as soon as you have picked your times.
            </p>

            <h3 className="heading-3 text-navy mt-10 mb-3">After school Quran classes</h3>
            <p className="text-grey leading-relaxed mb-4">
              Lessons run from morning through evening, six days a week, so an after school slot
              is easy to find. Younger children usually do best with a short class of 20 to 30
              minutes after a snack and a break, before homework takes over. Older children often
              prefer a slightly later evening lesson. Whichever you choose, keeping the same time
              each week helps the class become part of the day rather than one more thing to
              negotiate.
            </p>

            <h3 className="heading-3 text-navy mt-10 mb-3">Weekend Quran classes</h3>
            <p className="text-grey leading-relaxed mb-4">
              If weeknights are already full, classes can move to Saturday or Sunday, or you can
              pair one weekday lesson with one weekend lesson. Unlike a large weekend school class,
              your child still has the teacher to themselves for the whole session. Families who
              want every class on the weekend can add{" "}
              <Link href="/pricing" className="text-gold font-semibold hover:underline">
                Weekend Priority
              </Link>{" "}
              to guarantee their preferred slot.
            </p>

            <h3 className="heading-3 text-navy mt-10 mb-3">When the week changes</h3>
            <p className="text-grey leading-relaxed mb-4">
              Exam weeks, school trips and holidays happen. Lessons can be rescheduled with 24
              hours notice, so a busy week does not mean falling behind. If you have more than one
              child, ask for their lessons to be booked one after another, and the sibling discount
              is applied automatically.
            </p>

            <h3 className="heading-3 text-navy mt-10 mb-3">Why one-on-one suits children</h3>
            <p className="text-grey leading-relaxed mb-4">
              In a group, a child who is struggling with a letter waits, and a child who is ahead
              gets bored. With one teacher and one student, every correction is made on the spot
              and the pace follows your child. For shy children it also means reciting out loud
              without an audience, which is often what builds their confidence first.
            </p>

            <h3 className="heading-3 text-navy mt-10 mb-3">Booked in your local time</h3>
            <p className="text-grey leading-relaxed">
              Class times are always confirmed in your own time zone, whether you are{" "}
              <Link href="/locations/new-york" className="text-gold font-semibold hover:underline">
                in New York City
              </Link>
              ,{" "}
              <Link href="/locations/seattle" className="text-gold font-semibold hover:underline">
                in Seattle
              </Link>{" "}
              or{" "}
              <Link href="/locations" className="text-gold font-semibold hover:underline">
                anywhere else in the US
              </Link>
              . During Ramadan, lessons can move around school, iftar and family time. See our{" "}
              <Link href="/ramadan-quran-classes" className="text-gold font-semibold hover:underline">
                Ramadan Quran classes
              </Link>{" "}
              for how families plan that month.
            </p>
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow mb-4">
                How Classes Work
              </span>
              <h2 className="heading-2 text-white mb-4">
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
                  desc: "Ages 4 to 7: 20 to 30 minutes per class. Ages 8 to 12: 30 to 45 minutes. Ages 13+: 45 to 60 minutes. We recommend 3 to 5 classes per week for best results, though 2 classes per week is a good starting point.",
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
            <span className="eyebrow mb-4">
              Your Teachers
            </span>
            <h2 className="heading-2 text-navy mb-4">
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

      {/* Parent feedback (real WhatsApp screenshots from components/proof.ts) */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="container-custom">
          <WhatsAppReviewsRow
            heading="What Families Tell Us"
            subline="Unedited messages sent to us on WhatsApp after trial classes."
          />
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-navy rounded-2xl p-8 md:p-12 text-center">
            <span className="eyebrow mb-4">
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
              className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm"
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
              <span className="eyebrow mb-4">
                FAQ
              </span>
              <h2 className="heading-2 text-navy mb-4">
                Common Questions from Parents
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
            <p className="text-center text-grey text-sm mt-6">
              Thinking about memorizing the whole Quran one day?{" "}
              <Link href="/blog/how-long-does-it-take-to-memorize-the-quran" className="text-gold font-semibold hover:underline">
                Read how long Hifz usually takes
              </Link>
              {" "}before you plan.
            </p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="eyebrow mb-4">
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
