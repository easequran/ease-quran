import type { Metadata } from "next";
import Link from "next/link";
import { startingPriceText } from "@/lib/pricing";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import NearbyLocations from "@/components/NearbyLocations";

export const metadata: Metadata = {
  title: "Online Quran Classes in Jackson, Mississippi",
  description:
    "Certified online Quran classes for Muslim families in Jackson, Mississippi. Qualified teachers, free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/jackson-mississippi",
  },
  openGraph: {
    title: "Online Quran Classes in Jackson, Mississippi | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Jackson and Mississippi, a small community often without a large Islamic school nearby.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Jackson, Mississippi", item: "https://easequran.com/locations/jackson-mississippi" },
  ],
};

const faqs = [
  {
    question: "Is online Quran learning safe for my child?",
    answer:
      "Yes. Parents are welcome to sit in on any class, classes may be recorded by parents, and there is no private teacher–student contact outside scheduled sessions. Female teachers are available for girls on request, and every teacher is credential-verified. See our Child Safety & Parent Rights Policy for full details.",
  },
  {
    question: "Can I find a Quran teacher near me in Jackson?",
    answer:
      "Yes. While we are not a physical school in Jackson, our online Quran academy works for any family across Mississippi searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, no matter where in the state you are.",
  },
  {
    question: "Is there a full Islamic school option near Jackson?",
    answer:
      "Honestly, options are genuinely limited in and around Jackson. Mississippi's Muslim community is small, and a family here may find themselves considering a multi-hour drive to a larger city like Memphis or New Orleans just to access a structured Islamic education program for their child. That's simply not realistic on a weekly basis for most families. Ease Quran offers a genuinely practical alternative, bringing the same certified, one-on-one instruction available anywhere else in the country directly into a Jackson-area home.",
  },
  {
    question: "Do you serve families throughout Mississippi, not just Jackson?",
    answer:
      "Yes. Mississippi is a largely rural state, and a good number of Muslim families live well outside Jackson with essentially no local Islamic education infrastructure nearby. Since all classes are conducted online via Zoom, a family in a small Mississippi town gets the exact same access to a certified teacher as a family living in Jackson itself.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. Every Ease Quran teacher holds a recognized Quran qualification. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Mississippi families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Jackson?",
    answer:
      "Yes. Ask for a female teacher when you book the free trial, and we can arrange one at most times. The trial and every regular class are then taught by a female teacher.",
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

export default function JacksonMississippiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
              <li><Link href="/locations" className="hover:text-gold transition-colors">Locations</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">Jackson, Mississippi</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Jackson &amp; All of Mississippi
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Jackson, Mississippi
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Jackson and Mississippi, without the multi-hour drive to a larger city. Quality Quran instruction delivered to your home, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Your Free Trial
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Jackson%20Mississippi"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200 text-sm text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
            <TrustBadges dark />
          </div>
        </div>
      </section>

      <TeacherStrip />

      {/* Muslim Community Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">
              Jackson's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Small Community With Real, Honest Access Challenges
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Mississippi's Muslim community is small, and Jackson, as the state's capital and largest city, is home to what local infrastructure exists, a handful of mosques and a genuinely close-knit group of South Asian, Arab, and African families. We want to be straightforward here rather than overstate things: this is one of the smaller state Muslim communities in the country, and families in and around Jackson often have far fewer local options for structured Quran education than families in bigger metros take for granted.
              </p>
              <p>
                For many Mississippi families, the honest alternative to a limited local option has been a multi-hour drive to a larger city like Memphis or New Orleans, something that simply isn't realistic on a consistent weekly basis. Online Quran education is a genuinely practical answer to that gap, not a workaround for a problem that doesn't exist, but a real solution for families who have had real trouble finding consistent, certified Quran instruction close to home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">
              Why Online Works for Jackson Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Jackson and Mississippi Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">No Multi-Hour Drive Required</h3>
                <p className="text-grey text-sm leading-relaxed">
                  If the nearest full program is hours away in another state, online classes close that gap completely. Your child opens Zoom at home, wherever in Mississippi that is.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Consistent, Not Occasional</h3>
                <p className="text-grey text-sm leading-relaxed">
                  A once-a-semester trip to a larger city isn't the same as weekly instruction. Online classes give your child a consistent, certified teacher every single week.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">The Same Quality, Right at Home</h3>
                <p className="text-grey text-sm leading-relaxed">
                  You shouldn't need a bigger city nearby to get certified, one-on-one Quran instruction. Ease Quran brings the same quality of teaching to Mississippi families anywhere else in the country gets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof, Pricing & CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link href="/pricing" className="block max-w-3xl mx-auto mb-12 bg-navy rounded-2xl px-6 py-4 text-center text-sm text-white hover:bg-navy/90 transition-colors">
            <span className="font-semibold">{startingPriceText}</span>
            <span className="text-white/70"> &middot; </span>
            <span className="text-gold font-semibold">first class free &rarr;</span>
          </Link>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-colors text-sm text-center">
              Book Your Free Trial
            </Link>
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Jackson%20Mississippi" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-full hover:bg-offwhite transition-colors text-sm text-center">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">Our Curriculum</span>
            <h2 className="heading-2 text-navy mb-6">
              Quran Classes for Kids and Adults in Jackson
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across Mississippi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "Learn Arabic letters, vowels, and Quran reading fundamentals from the very beginning, ideal for young children and first-time adult learners.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Develop accurate, confident Quran recitation through systematic Tajweed instruction from beginner through advanced levels.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "Structured Hifz program for dedicated students, complete with revision cycles and milestone tracking.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Core Islamic knowledge including beliefs, prayer, manners, and Seerah, tailored for young American Muslims.", href: "/courses/islamic-studies" },
              ].map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="group bg-offwhite hover:bg-navy rounded-xl p-6 border border-gray-100 hover:border-navy transition-all duration-200"
                >
                  <h3 className="card-title group-hover:text-gold mb-2 transition-colors">{course.name}</h3>
                  <p className="text-grey group-hover:text-white/70 text-sm leading-relaxed transition-colors">{course.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow mb-4">Simple Process</span>
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Jackson</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Central Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Mississippi family. Reliable, flexible, and always from the comfort of your home." },
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

      <NearbyLocations slug="jackson-mississippi" />

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="heading-2 text-navy">
                Frequently Asked Questions. Jackson, Mississippi
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
            <p className="text-center text-grey text-sm mt-6">
              Worried about safety?{" "}
              <Link href="/safety" className="text-gold font-semibold hover:underline">
                Read our Child Safety &amp; Parent Rights Policy
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Certified Quran Education Across Jackson and All of Mississippi"
        subtext="No multi-hour drive required. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Your Free Trial"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Jackson Mississippi"
      />
    </>
  );
}
