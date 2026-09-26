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
  title: "Online Quran Classes in Dearborn, Michigan",
  description:
    "Certified online Quran classes for Muslim families in Dearborn, Michigan. Qualified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/dearborn-michigan",
  },
  openGraph: {
    title: "Online Quran Classes in Dearborn, Michigan | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families in Dearborn, Michigan, serving the largest Arab-American Muslim community in the USA.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Dearborn, Michigan", item: "https://easequran.com/locations/dearborn-michigan" },
  ],
};

const faqs = [
  {
    question: "Is online Quran learning safe for my child?",
    answer:
      "Yes. Parents are welcome to sit in on any class, classes may be recorded by parents, and there is no private teacher–student contact outside scheduled sessions. Female teachers are available for girls on request, and every teacher is credential-verified. See our Child Safety & Parent Rights Policy for full details.",
  },
  {
    question: "Can I find Quran classes near me in Dearborn?",
    answer:
      "Yes. While we are not a physical school in Dearborn, our online classes work for any family in the Dearborn area searching for Quran classes, a Quran teacher, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any travel.",
  },
  {
    question: "Why would Dearborn families use online Quran classes when there are so many local Islamic centers?",
    answer:
      "Even in Dearborn, with its exceptional local Islamic infrastructure, one-on-one online classes offer something that group settings simply cannot: fully personalized instruction where the teacher's complete attention is on your child, every minute of every class. The personalization advantage is real, regardless of where you live.",
  },
  {
    question: "Do you have teachers who speak Arabic for Dearborn's Arab community?",
    answer:
      "Our classes are conducted in English, which is how we most effectively serve English-speaking Muslim families across America, including second and third-generation Arab Americans in Dearborn who are more comfortable in English. That said, all our teachers are fully fluent in Arabic and rigorously trained in Quranic Arabic pronunciation, Tajweed, and the Arabic sciences. The instruction is in English; the Quran is always in classical Arabic.",
  },
  {
    question: "Are your teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. Every Ease Quran teacher holds a recognized Quran qualification. Dearborn's Muslim community has high expectations when it comes to Islamic credentials, and we fully share that standard. Our teachers are trained scholars, not volunteers.",
  },
  {
    question: "Do you also serve families in Dearborn Heights and surrounding Detroit suburbs?",
    answer:
      "Yes. We serve the entire Detroit metro area including Dearborn Heights, Inkster, Taylor, Westland, Canton, Livonia, and any other suburb with a Muslim family. Since classes are conducted online, every household in Southeast Michigan has equal access to our certified instruction.",
  },
  {
    question: "Is there a female teacher for my daughter or wife?",
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

export default function DearbornMichiganPage() {
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
              <li className="text-white/80">Dearborn, Michigan</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Dearborn and the Detroit Metro
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Dearborn, Michigan
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families in Dearborn, Dearborn Heights, and across the Detroit metro. Serving the heart of America's Arab-American Muslim community with the personalized instruction every child deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Your Free Trial
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Dearborn%20Michigan"
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
              Dearborn's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              The Arab-American Muslim Capital of the United States
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Dearborn, Michigan holds a unique distinction in American Muslim life: it is home to the highest concentration of Arab Americans and Muslims of any city in the United States. Over 40 percent of Dearborn's population is Muslim, making it an extraordinary environment where Islamic identity is not a minority experience but a deeply embedded part of daily civic life. The city's Muslim community is anchored by large Lebanese, Yemeni, and Iraqi communities, many of whom have been established in the Dearborn area for generations. The result is a city with an exceptionally dense network of Islamic centers, mosques, halal businesses, Arabic-language schools, and cultural organizations, a level of communal infrastructure that is unmatched in any other American city. Walking down Michigan Avenue in Dearborn, one encounters an almost unbroken string of halal restaurants, Islamic bookstores, and businesses serving the community's daily needs.
              </p>
              <p>
                Yet even in Dearborn, despite its remarkable Islamic infrastructure, there are needs that the community setting cannot fully address. One-on-one Quran instruction, tailored to each child's individual pace and level, is difficult to find consistently in any group setting, no matter how well-resourced the local community. For families in the Detroit metro suburbs beyond Dearborn itself. Dearborn Heights, Inkster, Westland, Canton, access to Dearborn's Islamic infrastructure requires a drive, and online instruction brings that quality education home.
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
              Why Online Works Even in Dearborn
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Dearborn Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Private Attention No Group Can Match</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Community Quran classes, even in Dearborn's excellent masjids, have multiple students per teacher. Our classes are always one-on-one. Your child's teacher tracks only their progress, corrects only their mistakes, and adapts entirely to their learning pace. The results speak for themselves.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Scheduling That Fits Your Life</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Even in a Muslim-majority city, schedules get full. Work shifts, school activities, and family commitments mean that getting to the Islamic center at a specific time isn't always possible. Online classes give you total flexibility, choose your slot from a wide range of morning, afternoon, and evening options.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Michigan Winters? No Problem</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Michigan winters bring heavy snowfall, icy roads, and school closures. Online classes are completely immune to weather disruptions. Your child's Quran education continues every week, regardless of what's happening outside, a real advantage in a Great Lakes state with unpredictable winters.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Dearborn%20Michigan" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-full hover:bg-offwhite transition-colors text-sm text-center">
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
              Courses Available for Dearborn Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              All courses are taught in English, one-on-one, and designed to deliver real, measurable progress at every level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "Arabic phonics from scratch, perfect for young beginners or adults who want to build a proper foundation.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Systematic Tajweed instruction for correct, beautiful Quran recitation at every stage of learning.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "Disciplined, structured Hifz with regular revision cycles, for students ready to memorize the Book of Allah.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Core Islamic knowledge: beliefs, prayer, manners, and Seerah, for young Muslims growing up in America.", href: "/courses/islamic-studies" },
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Dearborn</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Book Your Trial", desc: "Contact us via the website or WhatsApp. Share your child's current level, age, and preferred lesson times in Eastern Time. We'll match you with the right teacher right away." },
                { step: "02", title: "Free One-on-One Class", desc: "Your child joins a live Zoom lesson with their certified teacher, completely free. Experience the teaching method and see your child's reaction firsthand." },
                { step: "03", title: "Begin Regular Weekly Lessons", desc: "If the class is a good fit, we set up a consistent weekly schedule. Dearborn families love how seamlessly it integrates with their existing routines." },
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

      <NearbyLocations slug="dearborn-michigan" />

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="heading-2 text-navy">
                Frequently Asked Questions. Dearborn, Michigan
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
        headline="Private Quran Education for Dearborn's Muslim Families"
        subtext="One-on-one, certified, and fully flexible. Ease Quran brings personal Quran instruction to every home in Dearborn and across the Detroit metro. Your first class is free."
        primaryCta="Book Your Free Trial"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Dearborn Michigan"
      />
    </>
  );
}
