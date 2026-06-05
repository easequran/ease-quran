import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Award,
  Users,
  BookOpen,
  Star,
  Gift,
  Clock,
  Shield,
  ChevronRight,
  Sun,
  Monitor,
  MapPin,
  AlertTriangle,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

// ─── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: { absolute: "Summer Quran Classes for Kids 2026 | Ease Quran Academy" },
  description:
    "Give your child a meaningful summer. Certified online Quran classes for kids ages 4 to 14 across the USA. Free first class. Female teachers available. Enroll today.",
  alternates: {
    canonical: "https://www.easequran.com/summer-quran-classes",
  },
  openGraph: {
    title: "Summer Quran Classes for Kids 2026 | Ease Quran Academy",
    description:
      "Give your child a meaningful summer. Certified online Quran classes for kids ages 4 to 14 across the USA. Free first class. Female teachers available. Enroll today.",
    url: "https://www.easequran.com/summer-quran-classes",
    type: "website",
    images: [
      {
        url: "https://www.easequran.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Summer Quran Classes for Kids 2026 — Ease Quran Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summer Quran Classes for Kids 2026 | Ease Quran Academy",
    description:
      "Certified online Quran classes for kids ages 4 to 14 across the USA. Free first class. Female teachers available.",
    images: ["https://www.easequran.com/images/og-image.png"],
  },
};

// ─── Schemas ─────────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many days a week are the summer classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our summer program runs five days a week from Monday to Friday with full flexibility on timing. Morning, afternoon or evening slots available. Weekend classes also available. Each session runs 30 to 45 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What age group is the summer program for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with children from age four to fourteen and also have programs for adults. Every student gets a teacher matched to their age and current level.",
      },
    },
    {
      "@type": "Question",
      name: "My child has never touched the Quran before. Is that okay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely fine. We begin with Noorani Qaida covering Arabic letters and basic pronunciation before moving into Quran reading. By end of summer most beginners read independently and recite short Surahs confidently.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request a female teacher for my daughter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have certified female Quran teachers who work exclusively with girls and sisters. Just mention it when booking your free trial and we match your daughter with a female teacher from the start.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the summer program cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full pricing is on our pricing page with no hidden fees. The first class is always free with no card required. Family discounts available for multiple children.",
      },
    },
    {
      "@type": "Question",
      name: "Summer is already halfway through. Is it too late to join?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. We take new students throughout the entire summer with no fixed start date. Once you book your free trial we can start your child within 24 to 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What does my child need for the online classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Just a laptop, tablet or phone with decent internet and a quiet space at home. We use Zoom or Google Meet. Nothing to download or buy.",
      },
    },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Summer Quran Classes for Kids 2026",
  description:
    "Certified one-on-one online Quran classes for Muslim children ages 4 to 14 across the USA. Running June through August 2026. Free first class.",
  url: "https://www.easequran.com/summer-quran-classes",
  provider: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    sameAs: "https://www.easequran.com",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    startDate: "2026-06-01",
    endDate: "2026-08-31",
    instructor: {
      "@type": "Person",
      name: "Shah Zaib",
      description:
        "Certified from Wifaq ul Madaris Al-Arabia, 6 years teaching Muslim families in the USA",
    },
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "Muslim children ages 4 to 14 and adults",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    name: "Free Trial Class",
    url: "https://www.easequran.com/free-trial",
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Summer Quran Program 2026 — Ease Quran Academy",
  description:
    "Online summer Quran classes for Muslim kids ages 4 to 14 across the USA. Certified teachers, flexible schedule, free first class.",
  startDate: "2026-06-01",
  endDate: "2026-08-31",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: {
    "@type": "VirtualLocation",
    url: "https://www.easequran.com/summer-quran-classes",
  },
  organizer: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://www.easequran.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    name: "Free Trial Class",
    url: "https://www.easequran.com/free-trial",
    availability: "https://schema.org/InStock",
    validFrom: "2026-06-01",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const WHATSAPP_URL =
  "https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20the%20Summer%202026%20Quran%20program%20for%20my%20child";

const trustBadges = [
  { icon: Award, label: "Wifaq ul Madaris Certified" },
  { icon: Users, label: "Female Teachers Available" },
  { icon: BookOpen, label: "Ages 4 to 14" },
  { icon: CheckCircle, label: "All 50 States" },
  { icon: Gift, label: "Free First Class" },
  { icon: Star, label: "500+ Families Served" },
];

const problemCards = [
  {
    icon: Monitor,
    title: "Screens Are Winning the Summer",
    text: "It starts with one YouTube video and somehow the whole day disappears. You know your child deserves better than that but finding the right alternative takes time and trust you do not have to waste.",
  },
  {
    icon: MapPin,
    title: "Local Options Are Limited or Gone",
    text: "The masjid summer program filled up weeks ago. The local Islamic school is closed until September. You are left scrambling in June trying to find something that actually works.",
  },
  {
    icon: AlertTriangle,
    title: "You Have Been Let Down Before",
    text: "Maybe you tried another online academy. The teacher cancelled three times. Progress was slow. Your child lost interest. That experience makes you careful and that is completely fair.",
  },
];

const features = [
  {
    icon: Users,
    title: "One on One With a Certified Teacher",
    text: "Your child gets the full attention of a certified Quran teacher in every class. No distractions, no waiting for other students, no falling behind in a group. Just focused learning that actually moves forward every week.",
  },
  {
    icon: Clock,
    title: "Morning, Afternoon or Evening — Your Choice",
    text: "We work completely around your summer schedule. Whether your family is an early riser or a late night household, we have a slot that fits. Classes run Monday through Friday with weekend options available too.",
  },
  {
    icon: Award,
    title: "Certified From Wifaq ul Madaris",
    text: "Every teacher at Ease Quran holds certification from Wifaq ul Madaris Al-Arabia, one of the most respected Islamic education boards in the world. When your child learns here, they are learning from someone who earned the right to teach.",
  },
  {
    icon: Shield,
    title: "Female Teachers for Your Daughter",
    text: "We have qualified female Quran teachers who specialize in working with girls and sisters of all ages. If you want a female teacher for your daughter, just let us know when you book and we will make sure that is exactly what she gets.",
  },
  {
    icon: ChevronRight,
    title: "Real Progress You Can See",
    text: "By the end of the summer a complete beginner will finish Noorani Qaida and start reading the Quran. A student who already reads will move up a full level. We set clear goals at the start and we hit them.",
  },
  {
    icon: Gift,
    title: "Free First Class, No Commitment",
    text: "Your child's very first class is completely free. No credit card. No contract. No pressure to continue if it is not the right fit. We are confident enough in our teachers that we let the class do the talking.",
  },
];

const courses = [
  {
    badge: "Most Popular",
    badgeColor: "bg-gold text-navy",
    title: "Quran for Kids",
    text: "Designed for children aged 4 to 8 who are just beginning their Quran journey. We start with Arabic letters and Noorani Qaida and build from there at a pace that keeps your child confident and excited to come back for the next class.",
    href: "/courses/quran-for-kids",
    emoji: "📖",
  },
  {
    badge: null,
    title: "Tajweed Course",
    text: "For children who can already read Arabic but want to recite the Quran the way it was meant to be recited. Our Tajweed classes correct pronunciation habits early and give your child a beautiful, accurate recitation they will carry for life.",
    href: "/courses/tajweed",
    emoji: "🎵",
  },
  {
    badge: "High Demand This Summer",
    badgeColor: "bg-navy text-white",
    title: "Hifz Program",
    text: "Summer is honestly one of the best times to start memorizing because the schedule is free and the mind is rested. Our Hifz program is structured, consistent and guided by a teacher who tracks every Surah. Many students memorize two to three Surahs per month with daily sessions.",
    href: "/courses/hifz",
    emoji: "🌟",
  },
  {
    badge: null,
    title: "Islamic Studies for Kids",
    text: "Beyond Quran recitation, this course covers the duas your child should know, stories from the Seerah, basic Fiqh and the values that shape a Muslim character. All taught in English by a teacher who knows how to make it stick for Western kids.",
    href: "/courses/islamic-studies",
    emoji: "🤲",
  },
];

const testimonials = [
  {
    stars: 5,
    quote:
      "We signed up last June not really knowing what to expect. By August our daughter was reading Surah Al-Fatiha on her own and actually asking to have her class every day. The teacher is incredibly patient and my daughter genuinely looks forward to it. That was not something I expected from an online program honestly.",
    name: "Sarah M.",
    location: "Houston TX",
    initials: "SM",
  },
  {
    stars: 5,
    quote:
      "I work long hours and I needed something flexible enough to fit around my son's routine. Ease Quran sorted the schedule without any back and forth. Two months in and he finished Noorani Qaida. I have recommended them to every Muslim parent I know and I will keep doing that.",
    name: "Ahmed K.",
    location: "New Jersey",
    initials: "AK",
  },
  {
    stars: 5,
    quote:
      "Finding a qualified female teacher for my daughter was really important to me and I was worried it would be difficult. It was not. They matched us immediately and the teacher has been wonderful from day one. My daughter has grown so much in just a few months. JazakAllah Khair to the whole team.",
    name: "Fatima R.",
    location: "Chicago IL",
    initials: "FR",
  },
];

const steps = [
  {
    number: "01",
    title: "Book Your Free Trial",
    text: "Fill out our short enrollment form or send us a WhatsApp message. Either way we will get back to you within a few hours to confirm your child's free trial class.",
  },
  {
    number: "02",
    title: "Meet Your Teacher",
    text: "We match your child with a certified teacher based on their age, current level and your family's preferences. If you want a female teacher just let us know and we will make sure that is who shows up.",
  },
  {
    number: "03",
    title: "Watch Them Grow",
    text: "Your child starts learning from home on a schedule that works for your family. Most parents notice a real difference within the first two weeks. By the end of summer the progress speaks for itself.",
  },
];

const faqs = [
  {
    question: "How many days a week are the summer classes?",
    answer:
      "Our summer program runs five days a week from Monday to Friday with full flexibility on timing. You can choose a morning slot, an afternoon slot or an evening slot depending on what your family's summer looks like. We also offer weekend classes for families who prefer a lighter weekly schedule. Each session runs between 30 and 45 minutes.",
  },
  {
    question: "What age group is the summer program for?",
    answer:
      "We work with children starting from age four all the way up to fourteen. We also have programs for adults who want to improve their recitation or start learning properly this summer. Every student gets a teacher matched specifically to their age and current level so nobody feels rushed or held back.",
  },
  {
    question: "My child has never touched the Quran before. Is that okay?",
    answer:
      "Completely fine. A lot of our summer students are starting from zero. We begin with Noorani Qaida which covers Arabic letters and basic pronunciation before moving into actual Quran reading. By the end of the summer most beginners are reading independently and reciting short Surahs with confidence. The free trial class helps us figure out exactly where your child is starting from.",
  },
  {
    question: "Can I request a female teacher for my daughter?",
    answer:
      "Yes and we make it easy. We have certified female Quran teachers who work exclusively with girls and sisters. Just mention it when you book your free trial through the form or on WhatsApp and we will match your daughter with a female teacher from the start. No extra steps needed.",
  },
  {
    question: "How much does the summer program cost?",
    answer:
      "Our full pricing is on the pricing page with no hidden fees and no surprises. The first class is always free with no card required. We also offer a family discount if you are enrolling more than one child at the same time which a lot of our families take advantage of during summer.",
  },
  {
    question: "Summer is already halfway through. Is it too late to join?",
    answer:
      "Not at all. We take new students throughout the entire summer with no fixed start date. Once you book your free trial we can usually get your child into their first proper class within 24 to 48 hours. The sooner you start though the more your child gets out of the remaining weeks.",
  },
  {
    question: "What does my child need for the online classes?",
    answer:
      "Just a laptop, tablet or phone with a decent internet connection and a quiet spot at home. We use Zoom or Google Meet which most families already have. There is nothing to download, nothing to buy and no setup required on your end. We handle everything on our side.",
  },
];

// ─── WhatsApp SVG ────────────────────────────────────────────────────────────

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SummerQuranClassesPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* ── SECTION 1: HERO — full background image with overlay ─── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/images/summer/summer-hero.webp')", backgroundSize: "cover", backgroundPosition: "center top" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy/80" />

        {/* Subtle gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />

        <div className="relative z-10 container-custom py-20 lg:py-28">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <Sun size={13} />
              Summer 2026 Enrollment Now Open
            </div>

            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Summer Quran Classes That Give Your Child a Summer That Actually Means Something
            </h1>

            <div className="space-y-4 text-white/80 leading-relaxed text-base md:text-lg mb-8 max-w-2xl">
              <p>
                School is out and the days are long. Most kids will spend those hours on screens
                without anyone really thinking twice about it. But you are here because you want
                something different for your child.
              </p>
              <p>
                At Ease Quran Academy, we have spent the last six years helping Muslim families
                across America do exactly that. This summer, your child can build a real connection
                with the Quran, one lesson at a time, from the comfort of your own home.
              </p>
              <p>
                Certified teachers. Flexible timing. A{" "}
                <Link href="/free-trial" className="text-gold font-semibold hover:underline">
                  free trial class
                </Link>{" "}
                with no strings attached. Serving Muslim families in all 50 states.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors text-sm shadow-xl shadow-gold/30"
              >
                Book Your Free Trial Class
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-4 rounded-xl hover:border-white/70 hover:bg-white/5 transition-all text-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-green-400" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {trustBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
                >
                  <Icon size={12} className="text-gold" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ──────────────────────────────────── */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
              Every Summer, Muslim Parents Face the Same Worry
            </h2>
            <p className="text-grey leading-relaxed">
              You want your child to grow up connected to their deen. But between the school year
              ending, the mosque program being full, and the chaos of summer schedules, finding
              something reliable feels harder than it should be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {problemCards.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-red-400" />
                </div>
                <h3 className="font-playfair font-bold text-navy text-lg mb-3">{title}</h3>
                <p className="text-grey text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-grey leading-relaxed mb-6">
              We built Ease Quran Academy to solve every one of these problems. Not with promises
              but with a{" "}
              <Link href="/free-trial" className="text-gold font-semibold hover:underline">
                free first class
              </Link>{" "}
              so you can see it for yourself before committing to anything.
            </p>
            <Link
              href="/free-trial"
              className="inline-block bg-navy text-white font-bold px-8 py-3.5 rounded-xl hover:bg-navy/90 transition-colors text-sm"
            >
              Try a Free Class Today
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE SUMMER PROGRAM ──────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-gold text-xs font-bold tracking-widest uppercase mb-3">
              What We Offer
            </span>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
              A Summer Quran Program Built Around Your Family
            </h2>
            <p className="text-grey leading-relaxed">
              This is not a group class where your child sits in the back and hopes the teacher
              notices them. Every single session at Ease Quran is one on one, fully personalized,
              and led by a teacher who genuinely cares about your child&apos;s progress. Here is
              what every family gets when they enroll this summer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group border border-gray-200 hover:border-gold rounded-2xl p-7 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-5 transition-colors">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-navy text-base mb-3">{title}</h3>
                <p className="text-grey text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Teacher-Student Image — CSS background avoids Next.js optimisation issues */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto min-h-[420px] md:min-h-[500px] flex items-end"
            style={{ backgroundImage: "url('/images/summer/teacher-student.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent rounded-2xl" />
            <div className="relative z-10 p-7">
              <p className="text-white font-playfair font-bold text-lg md:text-2xl mb-1">
                One-on-one. Certified. Flexible. From your home.
              </p>
              <p className="text-white/70 text-sm">
                Every class is built around your child, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: COURSES ──────────────────────────────────────── */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
              Find the Right Program for Your Child This Summer
            </h2>
            <p className="text-grey leading-relaxed">
              Whether your child is picking up the Quran for the very first time or is already
              memorizing Surahs, we have a program that meets them exactly where they are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{course.emoji}</span>
                  {course.badge && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${course.badgeColor}`}>
                      {course.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-playfair font-bold text-navy text-xl mb-3">{course.title}</h3>
                <p className="text-grey text-sm leading-relaxed flex-1 mb-5">{course.text}</p>
                <Link
                  href={course.href}
                  className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-navy transition-colors group"
                >
                  See Course Details
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-grey text-sm mt-8">
            Also available:{" "}
            <Link href="/courses/quran-for-kids" className="text-gold font-semibold hover:underline">
              Quran classes for kids
            </Link>
            {" · "}
            <Link href="/courses/tajweed" className="text-gold font-semibold hover:underline">
              online Tajweed classes
            </Link>
            {" · "}
            <Link href="/courses/islamic-studies" className="text-gold font-semibold hover:underline">
              Islamic studies for kids
            </Link>
            {" · "}
            <Link href="/female-quran-teachers" className="text-gold font-semibold hover:underline">
              female Quran teachers
            </Link>
          </p>
        </div>
      </section>

      {/* ── SECTION 5: TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
              What American Muslim Parents Are Saying
            </h2>
            <p className="text-grey leading-relaxed">
              Over 500 families across all 50 states have trusted Ease Quran with their
              children&apos;s Islamic education. Here is what some of them shared with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-offwhite border border-gray-100 rounded-2xl p-7 flex flex-col shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="#F5A623" className="text-gold" />
                  ))}
                </div>
                <blockquote className="text-grey text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                    <span className="text-gold font-bold text-xs">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-grey text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Family Image — CSS background */}
          <div
            className="relative rounded-2xl overflow-hidden max-w-3xl mx-auto shadow-lg min-h-[360px] md:min-h-[440px]"
            style={{ backgroundImage: "url('/images/summer/testimonial-family.webp')", backgroundSize: "cover", backgroundPosition: "center top" }}
            role="img"
            aria-label="Happy Muslim family in America whose daughter completed Quran classes with Ease Quran Academy"
          />
        </div>
      </section>

      {/* ── SECTION 6: HOW IT WORKS — background image with overlay ── */}
      <section
        className="relative section-padding overflow-hidden"
        style={{ backgroundImage: "url('/images/hero-child.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Dark navy overlay — strong enough to keep text crisp */}
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-gold text-xs font-bold tracking-widest uppercase mb-3">
              Getting Started
            </span>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              From Today to Your Child&apos;s First Class in 3 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {/* Connector line on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%-0.5rem)] w-full h-0.5 bg-gold/25" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/15 border border-gold/40 mb-5">
                  <span className="font-playfair font-bold text-gold text-2xl">{step.number}</span>
                </div>
                <h3 className="font-playfair font-bold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/free-trial"
              className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors text-sm shadow-lg shadow-black/20"
            >
              Book a Free Trial Class
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ ──────────────────────────────────────────── */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
                Questions Parents Ask Before Enrolling
              </h2>
              <p className="text-grey leading-relaxed">
                We get a lot of the same questions from Muslim parents across America before they
                take the step to enroll. Here are honest answers to the ones we hear most.
              </p>
            </div>

            <FAQAccordion faqs={faqs} />

            <p className="text-center text-grey text-sm mt-8">
              Ready to start?{" "}
              <Link href="/free-trial" className="text-gold font-semibold hover:underline">
                Book your free trial class
              </Link>{" "}
              today. See our{" "}
              <Link href="/pricing" className="text-gold font-semibold hover:underline">
                pricing page
              </Link>{" "}
              for full plan details. Want a{" "}
              <Link href="/female-quran-teachers" className="text-gold font-semibold hover:underline">
                female Quran teacher
              </Link>
              ? Just ask when you book.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FINAL CTA BANNER ─────────────────────────────── */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <Sun size={13} />
              Summer 2026
            </span>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-6">
              This Summer Belongs to Your Child. Make It Count.
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              You do not need to figure it all out today. Just book a{" "}
              <Link href="/free-trial" className="text-gold font-semibold hover:underline">
                free trial class
              </Link>
              , let your child meet their teacher, and see what happens. Hundreds of Muslim families
              across America started exactly that way. Most of them are still with us.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors text-sm shadow-lg shadow-gold/20"
              >
                Book Your Free Trial Class
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:border-white hover:bg-white/5 transition-all text-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-green-400" />
                WhatsApp Us
              </a>
            </div>

            <p className="text-white/40 text-xs">
              Serving Muslim families across all 50 states. Female teachers available. First class is free.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
