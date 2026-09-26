import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";
import { BookOpen, Mic, RotateCcw, Sparkles, HeartHandshake, BookMarked } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TeacherStrip from "@/components/TeacherStrip";

// Evergreen URL, reused every year. Update only the expected-date line below
// each year (astronomical estimates; the actual start follows the moon sighting).
const PAGE_URL = "https://easequran.com/ramadan-quran-classes";
const EXPECTED_START = "Ramadan 2027 is expected to begin around February 8, 2027, depending on the sighting of the moon.";

export const metadata: Metadata = {
  title: { absolute: "Ramadan Quran Classes Online for Kids and Adults | Ease Quran" },
  description:
    "One-on-one online Quran classes for Ramadan. Reading, Tajweed and Hifz revision for kids and adults, scheduled around fasting, work, school and iftar.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Ramadan Quran Classes Online for Kids and Adults",
    description:
      "Make this Ramadan a month with the Quran. One-on-one online classes for reading, Tajweed and Hifz revision, booked around your fasting day.",
    url: PAGE_URL,
    type: "website",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Ramadan Quran Classes Online, Ease Quran Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramadan Quran Classes Online for Kids and Adults",
    description:
      "One-on-one online Quran classes for reading, Tajweed and Hifz revision, booked around your fasting day.",
    images: ["https://easequran.com/images/og-image.png"],
  },
};

const faqs = [
  {
    question: "Can I start Quran classes during Ramadan?",
    answer:
      "Yes. There is no fixed start date for our classes, so you can begin before Ramadan or during it. If you can, book your free trial a few weeks before Ramadan starts. That way the teacher already knows your level and your routine is in place by the first fast.",
  },
  {
    question: "What time of day can I take Ramadan Quran classes?",
    answer:
      "Classes run from morning through evening, six days a week, and every time is confirmed in your local time zone. Some students prefer a lesson soon after Fajr, others at lunchtime or in the hour before iftar. Tell us what suits your fasting day and we will confirm the slots available for you when you book.",
  },
  {
    question: "Can I finish reading the whole Quran in Ramadan with a teacher?",
    answer:
      "Reading the whole Quran in a month means about one Juz a day, which is roughly 20 pages. Fluent readers often aim for this. In class, your teacher can listen to part of each day's reading and correct your recitation, while you read the rest on your own. If your reading is not fluent yet, a smaller goal such as a set number of Juz or Surahs is usually more rewarding.",
  },
  {
    question: "Are Ramadan classes different from your regular classes?",
    answer:
      "They are the same live, one-on-one classes with the same certified teachers and the same plans shown on our pricing page. What changes is the focus. During Ramadan, many students concentrate on reading more, improving recitation for Salah and taraweeh, or revising what they have memorized.",
  },
  {
    question: "Do you teach new Muslims preparing for their first Ramadan?",
    answer:
      "Yes. Our Quran for Reverts course starts from zero, with the Surahs and phrases you need for Salah, at a patient pace and without judgment. Many new Muslims find Ramadan a natural time to begin.",
  },
  {
    question: "When does Ramadan start?",
    answer:
      `${EXPECTED_START} The exact date is confirmed by moon sighting, so it can differ by a day depending on your local mosque or community.`,
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Ramadan Quran Classes", item: PAGE_URL },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Ramadan Quran Classes Online",
  description:
    "One-on-one online Quran classes for kids and adults during Ramadan, covering Quran reading, Tajweed, Hifz revision and Surahs for Salah, scheduled around the fasting day.",
  url: PAGE_URL,
  provider: { "@type": "Organization", name: "Ease Quran Online Academy", url: "https://easequran.com" },
  courseMode: "online",
  inLanguage: "en",
  availableLanguage: "English",
  teaches: ["Quran Reading", "Tajweed", "Hifz Revision", "Surahs for Salah"],
  offers: {
    "@type": "Offer",
    name: "Free Trial Class",
    price: "0",
    priceCurrency: "USD",
    url: "https://easequran.com/free-trial",
    category: "Free trial",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const goals = [
  {
    icon: BookOpen,
    title: "Learning to read the Quran",
    desc: "Complete beginners start with Noorani Qaida and move on to reading real verses. A month of steady lessons is enough to make visible progress.",
    href: "/courses/noorani-qaida",
    link: "Noorani Qaida course",
  },
  {
    icon: Mic,
    title: "Improving your Tajweed",
    desc: "Recite more accurately in Salah and follow taraweeh with more confidence, with a teacher correcting you as you read.",
    href: "/courses/tajweed",
    link: "Tajweed classes",
  },
  {
    icon: RotateCcw,
    title: "Hifz and revision",
    desc: "Ramadan is a natural time to strengthen what you have memorized. Your teacher can plan a revision schedule for the month and listen to each portion.",
    href: "/courses/hifz",
    link: "Hifz program",
  },
  {
    icon: BookMarked,
    title: "Reading more of the Quran",
    desc: "Fluent readers often set a goal for the month. A teacher can listen to part of each day's reading and correct mistakes before they become habits.",
    href: "/courses/quran-for-adults",
    link: "Quran for adults",
  },
  {
    icon: Sparkles,
    title: "Short Surahs and duas for children",
    desc: "Children can learn the Surahs they hear in prayer, simple duas for fasting and iftar, and what Ramadan means, in short lessons that suit their age.",
    href: "/courses/quran-for-kids",
    link: "Quran for kids",
  },
  {
    icon: HeartHandshake,
    title: "A first Ramadan as a new Muslim",
    desc: "Start with Al-Fatiha and the Surahs needed for Salah, with a patient teacher and no pressure to keep up with anyone else.",
    href: "/courses/quran-for-reverts",
    link: "Quran for reverts",
  },
];

const WHATSAPP_TEXT = "Hi I am interested in Ramadan Quran classes";

export default function RamadanQuranClassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">Ramadan Quran Classes</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">Ramadan Classes</span>
            <h1 className="heading-1 text-white mb-6">
              Ramadan Quran Classes Online for Kids and Adults
            </h1>
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-4">
              Make this Ramadan a month with the Quran. Live, one-on-one lessons with a certified
              teacher for reading, Tajweed and Hifz revision, booked around fasting, work, school
              and iftar.
            </p>
            <p className="text-white/60 text-sm mb-8">{EXPECTED_START}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-7 py-3.5 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm"
              >
                Book Your Free Trial
              </Link>
              <a
                href={`https://wa.me/923195657389?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
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

      <TeacherStrip />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow mb-4">Why Ramadan</span>
            <h2 className="heading-2 text-navy mb-6">A Month to Grow Closer to the Quran</h2>
            <p className="text-grey leading-relaxed mb-4">
              Ramadan is the month the Quran was revealed, and for many families it is the time of
              year they most want to read more, recite better and understand what they hear in
              taraweeh. It is also a month when the usual routine changes completely. Work hours
              shift, children are tired after school, and evenings fill up with iftar and prayers.
            </p>
            <p className="text-grey leading-relaxed">
              Online classes make it easier to keep learning through all of that. There is no drive
              to a class in the late afternoon while fasting, and no need to choose between a lesson
              and breaking the fast with your family. You pick the time, and your teacher comes to
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="eyebrow mb-4">Set a Goal</span>
            <h2 className="heading-2 text-navy mb-4">Ramadan Goals We Can Help With</h2>
            <p className="text-grey leading-relaxed">
              Every student starts with a free trial class, where the teacher hears you read and
              helps you choose a goal that fits the month.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {goals.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="card-title mb-3">{g.title}</h3>
                  <p className="text-grey text-sm leading-relaxed mb-4 flex-1">{g.desc}</p>
                  <Link href={g.href} className="text-gold font-semibold text-sm hover:underline">
                    {g.link}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow mb-4">Flexible Timing</span>
            <h2 className="heading-2 text-navy mb-6">Scheduling Classes Around Your Fasting Day</h2>

            <h3 className="heading-3 text-navy mt-8 mb-3">Choose the part of the day you are sharpest</h3>
            <p className="text-grey leading-relaxed mb-4">
              Energy during a fast is different for everyone. Some people concentrate best soon
              after Fajr, others at lunchtime, and others in the quiet hour before iftar. Lessons run
              from morning through evening, six days a week, and every time is confirmed in your own
              time zone. Tell us when you would like to learn and we will confirm what is available
              when you book.
            </p>

            <h3 className="heading-3 text-navy mt-8 mb-3">Shorter lessons, more often</h3>
            <p className="text-grey leading-relaxed mb-4">
              While fasting, a 30 minute lesson on several days usually works better than one long
              session. You keep the Quran in your day without running out of energy, and the teacher
              can check your progress more often.
            </p>

            <h3 className="heading-3 text-navy mt-8 mb-3">Families with several children</h3>
            <p className="text-grey leading-relaxed mb-4">
              Ask for siblings to be booked one after another so the whole family is done in one
              block before iftar preparations begin. The{" "}
              <Link href="/pricing" className="text-gold font-semibold hover:underline">sibling discount</Link>{" "}
              is applied automatically.
            </p>

            <h3 className="heading-3 text-navy mt-8 mb-3">Already a student?</h3>
            <p className="text-grey leading-relaxed">
              If your usual lesson time will not work once the fast begins, talk to us before
              Ramadan about moving it for the month. A lesson moved at least {business.classNoticeHours} hours before it starts is
              rescheduled, not lost.
            </p>
          </div>
        </div>
      </section>

      {/* Kids and adults */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <span className="eyebrow mb-4">For Children</span>
              <h2 className="heading-3 text-navy mb-4">Ramadan Quran Classes for Kids</h2>
              <p className="text-grey leading-relaxed mb-4">
                Children often feel the excitement of Ramadan before they fully understand it. Short
                lessons after school let them learn the Surahs they hear in taraweeh, duas for
                fasting and iftar, and the story of the month, without adding pressure to a school
                day. Younger children usually do best with 20 to 30 minutes.
              </p>
              <p className="text-grey leading-relaxed">
                Our{" "}
                <Link href="/courses/quran-for-kids" className="text-gold font-semibold hover:underline">
                  Quran classes for kids
                </Link>{" "}
                follow each child&apos;s level, and a female teacher is available on request.
              </p>
            </div>
            <div>
              <span className="eyebrow mb-4">For Adults</span>
              <h2 className="heading-3 text-navy mb-4">Ramadan Quran Classes for Adults</h2>
              <p className="text-grey leading-relaxed mb-4">
                Many adults promise themselves every year that this Ramadan they will finally read
                properly or finish the Quran. A teacher turns that intention into a plan: a clear
                goal for the month, a daily amount that fits around work, and someone listening
                and correcting as you go.
              </p>
              <p className="text-grey leading-relaxed">
                Our{" "}
                <Link href="/courses/quran-for-adults" className="text-gold font-semibold hover:underline">
                  Quran classes for adults
                </Link>{" "}
                welcome complete beginners, and nobody is judged for starting late.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start early */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow mb-4">Plan Ahead</span>
            <h2 className="heading-2 text-navy mb-6">Start Before Ramadan Begins</h2>
            <p className="text-grey leading-relaxed mb-4">
              The families who get the most from Ramadan lessons usually start a few weeks early.
              The free trial class tells the teacher where you are, your first few lessons settle
              the routine, and by the first fast you are already learning rather than still sorting
              out a timetable.
            </p>
            <p className="text-grey leading-relaxed mb-4">
              If you are working toward Hifz, it helps to read{" "}
              <Link href="/blog/how-long-does-it-take-to-memorize-the-quran" className="text-gold font-semibold hover:underline">
                how long memorizing the Quran usually takes
              </Link>{" "}
              before setting a Ramadan target, so the month becomes a strong step in a longer plan.
            </p>
            <p className="text-grey leading-relaxed">
              Classes are online, so they work wherever you live.{" "}
              <Link href="/locations" className="text-gold font-semibold hover:underline">
                Find your city or state
              </Link>{" "}
              for details on how families near you take classes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">FAQ</span>
              <h2 className="heading-2 text-navy">Ramadan Quran Classes: Common Questions</h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Make This Ramadan Your Month With the Quran"
        subtext="Book a free trial class, meet your teacher, and choose a goal for the month. No credit card and no commitment."
        primaryCta="Book Your Free Trial"
        primaryHref="/free-trial"
        whatsappText={WHATSAPP_TEXT}
      />
    </>
  );
}
