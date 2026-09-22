import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TeacherStrip from "@/components/TeacherStrip";
import TrustBadges from "@/components/TrustBadges";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";
import {
  Laptop,
  Wifi,
  Volume2,
  ShieldCheck,
  Users,
  Clock,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Quran Online: The Complete Guide for Muslim Families in the USA",
  description:
    "A plain-English guide to learning Quran online: how classes actually work, what you need to get started, how to tell a real teacher from a random tutor, and what it costs. Free first class.",
  alternates: { canonical: "https://easequran.com/learn-quran-online" },
  openGraph: {
    title: "Learn Quran Online: The Complete Guide for Muslim Families",
    description:
      "How online Quran classes actually work, what to look for in a teacher, and how to get started safely — written for parents, by a working Quran academy.",
    images: ["/images/og-image.png"],
  },
};

const WHATSAPP_NUMBER = "923195657389";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I read your guide to learning Quran online and I'd like to book a free trial class"
);

const faqs = [
  {
    question: "Can you really learn Quran online, or is in-person always better?",
    answer:
      "You can genuinely learn Quran online to a high standard, including full memorization (Hifz), provided the class is live and one-on-one, not a recorded video course. The teacher hears your recitation in real time, corrects your Tajweed as you go, and adjusts the pace to you, which is the part that actually makes learning happen. What online can't replace is a teacher physically nearby, but for most families that was never realistic anyway. What it does replace is the shortage of qualified teachers in your own city.",
  },
  {
    question: "How much does it cost to learn Quran online?",
    answer:
      "At Ease Quran, plans start from $40/month for two 30-minute classes a week, with our most-booked plan at $55/month for three classes a week. Every new student gets one completely free trial class first, with no credit card required, so you can judge the teaching quality before paying anything. See our full pricing page for sibling and prepay discounts.",
  },
  {
    question: "How long does it take to learn to read the Quran fluently?",
    answer:
      "For a complete beginner starting with Noorani Qaida (Arabic letters and basic reading rules), most students reach comfortable, correct reading within 3–6 months of consistent classes, and refine their Tajweed for months after that. Children generally take a little longer than motivated adults, and everyone progresses at a different pace, so treat any online promise of a fixed timeline with some skepticism.",
  },
  {
    question: "Is online Quran learning safe for my child?",
    answer:
      "It should be, and you should ask direct questions until you're satisfied it is. At minimum, look for: parents allowed to sit in on any class, no private teacher-student contact outside scheduled sessions, and teachers whose credentials you can actually verify. We publish our full approach on our Child Safety & Parent Rights Policy page, and we'd expect any serious academy to have an equivalent.",
  },
  {
    question: "What do I actually need at home to get started?",
    answer:
      "A laptop, tablet, or smartphone with a camera and microphone, a stable internet connection (a basic home Wi-Fi connection is enough), Zoom installed (it's free), and a reasonably quiet corner for 30 minutes. You don't need a printer, a physical Quran shipped to you, or any special software — most academies, including ours, share reading material on-screen during the lesson.",
  },
  {
    question: "Can adults learn Quran online, or is this just for kids?",
    answer:
      "Adults learn online just as effectively as children, and in some ways more efficiently since they can explain exactly what they already know and skip ahead. We teach adults from complete beginners to those polishing Tajweed, as well as new Muslims (reverts) starting from the very first Arabic letter, at whatever pace is comfortable without the self-consciousness of a group class.",
  },
  {
    question: "How do I know a teacher's certification is real, not just a claim on a website?",
    answer:
      "Ask which institution certified them and look the institution up independently. Our teachers are certified by Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, and we name each teacher and their specific credential rather than making a blanket claim. Any academy unwilling to tell you which body certified a specific teacher is worth a second thought.",
  },
  {
    question: "Is there a female teacher available for girls or sisters?",
    answer:
      "Yes. We have a dedicated female teacher, Almas Fatima, a Qaria e Quran with a Bachelor's in Islamic Studies, available specifically for sisters and children. If this matters to your family, ask about it directly when you book. See our Female Quran Teachers page for more detail.",
  },
  {
    question: "What's the difference between Tajweed, Hifz, and Noorani Qaida?",
    answer:
      "Noorani Qaida is the starting point: learning the Arabic alphabet and the basic rules of reading, for total beginners of any age. Tajweed is the set of rules for reciting the Quran with correct pronunciation once you can already read — most students who \"know how to read\" but were never taught properly start here. Hifz is the structured memorization program, usually begun once a student reads confidently. Our courses page breaks down all of these in more depth.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const steps = [
  {
    number: "01",
    title: "Book a Free Trial Class",
    description:
      "Tell us your (or your child's) age and current reading level, and your preferred time in your own time zone. No payment is taken at this stage.",
  },
  {
    number: "02",
    title: "Meet Your Teacher Live on Zoom",
    description:
      "A certified teacher runs a full, live one-on-one lesson so you can hear their teaching style and see how they interact, before you commit to anything.",
  },
  {
    number: "03",
    title: "Start a Regular, Structured Schedule",
    description:
      "If it's a good fit, you set a recurring weekly time. Lessons build on each other with real progress tracking, not a random grab-bag of topics.",
  },
];

export default function LearnQuranOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[{ label: "Learn Quran Online" }]} />

      {/* Hero — direct answer up top for AEO */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">A Guide for Muslim Families in America</span>
            <h1 className="heading-1 text-white mb-6">
              Learn Quran Online: A Complete Guide
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Learning Quran online means taking live, one-on-one classes with a real
              teacher over video call, not watching pre-recorded lessons. Done properly, it
              works for reading, Tajweed, and full memorization (Hifz), for kids and adults
              alike. This guide walks through exactly how it works, what you need, how to
              tell a genuine teacher from a random tutor, and what it costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Your Free Trial Class
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200 text-sm text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Ask a Question on WhatsApp
              </a>
            </div>
            <TrustBadges dark />
          </div>
        </div>
      </section>

      <TeacherStrip />

      {/* Does it actually work */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow mb-4">The Honest Answer</span>
            <h2 className="heading-2 text-navy mb-6">
              Does Learning Quran Online Actually Work?
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                If you grew up with a Quran teacher who sat physically next to you, correcting
                your mistakes by tapping the page, it&apos;s a fair question. The short answer:
                what made that method work wasn&apos;t the room you were both sitting in, it was
                that a qualified teacher was listening to you recite in real time and correcting
                you immediately. A live video call does exactly that. Your teacher hears every
                word, stops you the moment a Tajweed rule is missed, and repeats a verse with you
                until it&apos;s right, the same as they would across a table.
              </p>
              <p>
                What online <em>can&apos;t</em> do is put a teacher physically in your home. For
                the vast majority of Muslim families in America, that was never actually on
                offer, either because there is no qualified Quran teacher nearby, or because the
                only options are an overcrowded weekend class or a rotating cast of unverified
                tutors. Online doesn&apos;t compete with an ideal in-person teacher who doesn&apos;t
                exist in your city. It competes with, and usually beats, the realistic
                alternative: driving further than makes sense, or getting whoever happens to be
                available.
              </p>
              <p>
                The part that genuinely does need care is <strong>who</strong> is teaching, since
                video calls make it just as easy to hide a lack of qualification as they do to
                deliver a great lesson. That&apos;s covered further down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works, step by step */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="eyebrow">How It Actually Works</span>
            <h2 className="heading-2 text-navy mt-3 mb-4">
              What Happens When You Start
            </h2>
            <p className="lead max-w-xl mx-auto">
              No hidden steps, no long onboarding. Here&apos;s the entire process from first
              click to your first regular class.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gold text-navy font-playfair font-bold text-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="card-title mb-3">{step.title}</h3>
                <p className="text-grey text-[15px] leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] border-t-2 border-dashed border-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you need */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">Before Your First Class</span>
            <h2 className="heading-2 text-navy mb-10">
              What You Actually Need to Get Started
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Laptop,
                  title: "Any device with a camera",
                  desc: "A laptop, tablet, or smartphone works fine. Nothing needs to be new or high-spec.",
                },
                {
                  icon: Wifi,
                  title: "A normal home internet connection",
                  desc: "Standard home Wi-Fi or a phone data plan is enough for a stable video call.",
                },
                {
                  icon: Volume2,
                  title: "A reasonably quiet 30 minutes",
                  desc: "No soundproofing required, just somewhere the teacher can hear recitation clearly.",
                },
                {
                  icon: ShieldCheck,
                  title: "Zoom installed (it's free)",
                  desc: "We share reading material and the Quran text on-screen, so nothing needs to be printed or shipped.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-offwhite rounded-2xl p-6 border border-gray-100 flex gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="card-title mb-1.5">{item.title}</h3>
                      <p className="text-grey text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Choosing a course */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">Where to Start</span>
            <h2 className="heading-2 text-navy mb-6">
              Which Course Should You Start With?
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Most students fall into one of these starting points. If you&apos;re not sure,
              say so when you book your trial and the teacher will place you correctly in the
              first lesson.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Noorani Qaida",
                  desc: "Complete beginners of any age: Arabic letters, vowels, and basic reading rules from scratch.",
                  href: "/courses/noorani-qaida",
                },
                {
                  name: "Tajweed",
                  desc: "For those who can already read Quran but were never taught the rules of correct recitation.",
                  href: "/courses/tajweed",
                },
                {
                  name: "Hifz (Memorization)",
                  desc: "A structured memorization program with revision cycles, for students ready to commit.",
                  href: "/courses/hifz",
                },
                {
                  name: "Quran for Adults",
                  desc: "Self-paced, judgment-free classes designed specifically for adult learners and new Muslims.",
                  href: "/courses/quran-for-adults",
                },
              ].map((course) => (
                <Link
                  key={course.href}
                  href={course.href}
                  className="group bg-white hover:bg-navy rounded-xl p-6 border border-gray-100 hover:border-navy transition-all duration-200"
                >
                  <h3 className="card-title group-hover:text-gold mb-2 transition-colors">{course.name}</h3>
                  <p className="text-grey group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                    {course.desc}
                  </p>
                </Link>
              ))}
            </div>
            <p className="text-center text-grey text-sm mt-8">
              Also teaching Arabic Language, Islamic Studies, and a dedicated track for reverts.{" "}
              <Link href="/courses" className="text-gold font-semibold hover:underline">
                See every course
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Trust / vetting a teacher */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">The Part Worth Getting Right</span>
            <h2 className="heading-2 text-navy mb-6">
              How to Tell a Real Teacher From a Random Tutor
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              A video call makes it easy for anyone to claim they can teach Quran. Before you
              commit to any academy, online or not, we&apos;d suggest asking these four
              questions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: BadgeCheck,
                  title: "Which institution certified them, specifically?",
                  desc: "A named, checkable credential — not just \"certified teacher\" as a general marketing line.",
                },
                {
                  icon: Users,
                  title: "Can a parent sit in on the class?",
                  desc: "A legitimate academy should welcome this without hesitation, especially for younger children.",
                },
                {
                  icon: ShieldCheck,
                  title: "Is there any private contact outside class?",
                  desc: "There shouldn't be. All communication should stay within scheduled, structured lessons.",
                },
                {
                  icon: Clock,
                  title: "What happens if the fit isn't right?",
                  desc: "You should be able to change teachers without friction. Not every pairing works on the first try.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-11 h-11 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-[15px] mb-1">{item.title}</h3>
                      <p className="text-grey text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-grey text-sm mt-8 leading-relaxed">
              At Ease Quran, every teacher is certified by Wifaq ul Madaris Al-Arabia, parents
              are welcome to sit in on any class, and we publish our full approach on our{" "}
              <Link href="/safety" className="text-gold font-semibold hover:underline">
                Child Safety &amp; Parent Rights Policy
              </Link>{" "}
              page. A female teacher is also available for sisters and children — see our{" "}
              <Link href="/female-quran-teachers" className="text-gold font-semibold hover:underline">
                Female Quran Teachers
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <WhatsAppReviewsRow
            heading="Real Students, Real Results"
            subline="We've taught Western, English-speaking students across the UK and USA."
          />
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link
            href="/pricing"
            className="block max-w-3xl mx-auto bg-navy rounded-2xl px-6 py-5 text-center text-sm text-white hover:bg-navy/90 transition-colors"
          >
            <span className="font-semibold">Plans start at $40/month</span>
            <span className="text-white/70">
              {" "}
              &middot; most families choose Steady at $55/month for 3 classes/week &middot;{" "}
            </span>
            <span className="text-gold font-semibold">first class free &rarr;</span>
          </Link>
        </div>
      </section>

      {/* Near me — links to locations for that intent instead of duplicating it */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow">One More Thing</span>
            <h2 className="heading-2 text-navy mt-3 mb-5">
              Still Searching for a Teacher &ldquo;Near You&rdquo;?
            </h2>
            <p className="text-grey leading-relaxed">
              If part of you is still looking for something local, that&apos;s completely
              understandable — see how Ease Quran serves your specific city or state on our{" "}
              <Link href="/locations" className="text-gold font-semibold hover:underline">
                Locations page
              </Link>
              , including the Muslim community context for over 70 cities and states across
              America.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Common Questions</span>
              <h2 className="heading-2 text-navy">
                Frequently Asked Questions About Learning Quran Online
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to See How a Real Class Feels?"
        subtext="One live, one-on-one trial class with a certified teacher. No credit card, no obligation to continue."
        primaryCta="Book Your Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi, I read your guide to learning Quran online and I'd like to book a free trial class"
      />
    </>
  );
}
