import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { User, Users, CheckCircle, BookOpen } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import FamilyReviews from "@/components/FamilyReviews";
import { reviewsForCourse } from "@/lib/reviews";
import { business, PRIMARY_CTA, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: "Female Quran Teachers Online",
  description:
    "Ask for a female Quran teacher for your daughter or for yourself. One-on-one online classes on Zoom, arranged around your schedule, with a free trial class first.",
  alternates: {
    canonical: "https://easequran.com/female-quran-teachers",
  },
  openGraph: {
    title: "Female Quran Teachers Online | Ease Quran",
    description:
      "One-on-one online Quran classes with a female teacher for sisters and girls, arranged around your schedule. Free trial class first.",
    images: ["/images/og-image.png"],
  },
};

const faqs = [
  {
    question: "Can I get a female Quran teacher?",
    answer:
      "Yes. Ask for a female teacher when you book the free trial, for your daughter or for yourself, and we can arrange one at most times. Tell us the days and times that suit you and we'll match you with a female teacher who is free then.",
  },
  {
    question: "Will every class be with a female teacher?",
    answer:
      "Yes. Once you ask for a female teacher, the trial and all regular classes are taught by a female teacher. If your teacher can't make a class, we arrange a makeup class.",
  },
  {
    question: "What can a female teacher teach?",
    answer:
      "Our female teachers teach Noorani Qaida for beginners, Quran reading with Tajweed, Quran classes for children, and Islamic Studies. Tell us what the student needs and we'll match the right teacher.",
  },
  {
    question: "Do female teachers teach young boys too?",
    answer:
      "Yes. Some families prefer a female teacher for young children, boys and girls alike, while they are learning their letters.",
  },
  {
    question: "Are the classes private?",
    answer: `Yes. Every class is one-on-one on ${business.platform}, with no other students. Parents are welcome to sit in on any class, and teachers never message students privately. All communication goes through the academy.`,
  },
  {
    question: "How do I ask for a female teacher?",
    answer:
      "Choose a female teacher on the free trial form, or mention it in your WhatsApp message. We'll confirm the teacher's name and the class time in your own time zone.",
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

const WHATSAPP_HREF = whatsappLink("Hi I am interested in booking a female Quran teacher");

export default function FemaleQuranTeachersPage() {
  return (
    <>
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
              <li className="text-white/80">Female Quran Teachers</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">For Sisters and Girls</span>
            <h1 className="heading-1 text-white mb-6">
              Female Quran Teachers for Sisters and Girls
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              For many families, a female teacher for their daughter, or for a mother learning
              herself, is not negotiable. Ask for one when you book, and we can arrange a female
              teacher at most times. Classes are one-on-one on {business.platform}, and the first
              class is free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                {PRIMARY_CTA}
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200 text-sm text-center"
              >
                WhatsApp Us About Female Teachers
              </a>
            </div>
            <TrustBadges dark />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow mb-4">How It Works</span>
              <h2 className="heading-2 text-navy mb-4">How to Get a Female Teacher</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Ask when you book", desc: "Choose a female teacher on the free trial form or mention it on WhatsApp, along with the days and times that suit you." },
                { step: "02", title: "Free trial class", desc: `We confirm a female teacher and the time in your own time zone. The ${business.trialMinutes}-minute trial shows you her teaching before you decide anything.` },
                { step: "03", title: "Regular classes", desc: "If you continue, classes are set around the same days and times, usually with the same teacher." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="font-playfair font-bold text-navy text-lg">{item.step}</span>
                  </div>
                  <h3 className="card-title mb-3">{item.title}</h3>
                  <p className="text-grey text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow mb-4">Why It Matters</span>
              <h2 className="heading-2 text-white mb-4">Why Families Ask for a Female Teacher</h2>
            </div>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                For many Muslim families, a female teacher for a daughter is an expression of
                modesty and of the boundaries Islam sets between men and women. A girl who is fully
                at ease with her teacher asks more questions, recites more freely and makes fewer
                nervous mistakes.
              </p>
              <p>
                Adult women often feel the same. A sister learning to read the Quran for the first
                time, or coming back to it after many years, can find it hard to make mistakes in
                front of a man. With a female teacher, that worry often eases after the first
                class.
              </p>
              <p>
                Women have taught the Quran and the Sunnah since the earliest days of Islam. The
                wives of the Prophet (peace be upon him), and A&apos;isha (may Allah be pleased with
                her) in particular, taught women and men alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* One of our female teachers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow mb-4">Our Teachers</span>
              <h2 className="heading-2 text-navy">One of Our Female Teachers</h2>
              <p className="text-grey text-sm max-w-xl mx-auto mt-3">
                We have several female teachers. Your teacher is matched to the student&apos;s
                course, level and preferred schedule.
              </p>
            </div>

            <div className="bg-offwhite rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto min-h-[400px]">
                  <Image
                    src="/images/teacher-2.webp"
                    alt="Almas Fatima, female Quran teacher at Ease Quran Online Academy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-gold text-navy text-xs font-bold px-4 py-2 rounded-full shadow-md">
                    Qaria e Quran
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-playfair font-bold text-3xl text-navy mb-1">Almas Fatima</h3>
                  <p className="text-gold font-semibold mb-6">Female Quran Teacher</p>
                  <div className="space-y-3">
                    {[
                      { label: "Qualifications", value: "Qaria e Quran; Bachelor in Islamic Studies" },
                      { label: "Teaching since", value: "2022" },
                      { label: "Teaches", value: "Quran for Kids, Tajweed, Noorani Qaida, Islamic Studies" },
                      { label: "Teaches", value: "Sisters, girls and young children" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-gold font-bold text-sm w-32 shrink-0">{item.label}:</span>
                        <span className="text-grey text-sm leading-relaxed">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow mb-4">Courses</span>
              <h2 className="heading-2 text-navy mb-4">Courses With a Female Teacher</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "Quran for Kids", desc: "Reading, short surahs and daily duas for children from about age 4, at a gentle pace.", href: "/courses/quran-for-kids", icon: User },
                { name: "Tajweed", desc: "Correct pronunciation and the rules of recitation, from the basics to longer passages.", href: "/courses/tajweed", icon: BookOpen },
                { name: "Noorani Qaida", desc: "The starting point for any beginner: Arabic letters, vowels and joining words.", href: "/courses/noorani-qaida", icon: BookOpen },
                { name: "Islamic Studies", desc: "Beliefs, prayer, manners and the life of the Prophet (peace be upon him), taught for the student's age.", href: "/courses/islamic-studies", icon: CheckCircle },
              ].map((course) => {
                const Icon = course.icon;
                return (
                  <Link
                    key={course.name}
                    href={course.href}
                    className="group bg-white hover:bg-navy rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-navy transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <h3 className="card-title group-hover:text-gold mb-3 transition-colors">{course.name}</h3>
                    <p className="text-grey group-hover:text-white/70 text-sm leading-relaxed transition-colors">{course.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow mb-4">Who It&apos;s For</span>
              <h2 className="heading-2 text-navy mb-4">Who Learns With a Female Teacher</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: User, title: "Girls", text: "From first Arabic letters at around age 4 to teenage girls working on Tajweed." },
                { icon: Users, title: "Adult sisters", text: "Women reading the Quran for the first time, improving their recitation, or coming back after years away." },
                { icon: User, title: "Young children", text: "Boys and girls who are just starting out, where parents prefer a female teacher." },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="text-center p-8 bg-offwhite rounded-2xl border border-gray-100">
                    <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                      <Icon size={28} className="text-gold" />
                    </div>
                    <h3 className="card-title mb-3">{c.title}</h3>
                    <p className="text-grey text-sm leading-relaxed">{c.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <FamilyReviews reviews={reviewsForCourse("quran-for-kids", 2)} heading="What Parents Tell Us" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="heading-2 text-navy">Questions About Female Teachers</h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Book a Free Trial With a Female Teacher"
        subtext="Tell us the days and times that suit you and choose a female teacher on the form. The first class is free, with no card needed."
        primaryCta={PRIMARY_CTA}
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in booking a female Quran teacher"
      />
    </>
  );
}
