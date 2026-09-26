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
  title: "Online Quran Classes in Charleston, South Carolina",
  description:
    "Certified online Quran classes for Muslim families in Charleston, South Carolina. Qualified teachers, free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/charleston-south-carolina",
  },
  openGraph: {
    title: "Online Quran Classes in Charleston, South Carolina | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Charleston and the Lowcountry, a small but growing Muslim community in a historic port city.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Charleston, South Carolina", item: "https://easequran.com/locations/charleston-south-carolina" },
  ],
};

const faqs = [
  {
    question: "Is online Quran learning safe for my child?",
    answer:
      "Yes. Parents are welcome to sit in on any class, classes may be recorded by parents, and there is no private teacher–student contact outside scheduled sessions. Female teachers are available for girls on request, and every teacher is credential-verified. See our Child Safety & Parent Rights Policy for full details.",
  },
  {
    question: "Can I find a Quran teacher near me in Charleston?",
    answer:
      "Yes. While we are not a physical school in Charleston, our online Quran academy works for any family across the Lowcountry searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, wherever you are around the peninsula or the surrounding suburbs.",
  },
  {
    question: "Can classes work around Charleston's tourism industry hours?",
    answer:
      "Yes. Charleston's economy leans heavily on tourism, hospitality, and the historic preservation industry that draws millions of visitors to the city every year, jobs that frequently run on weekends, evenings, and holidays rather than a standard weekday schedule. We book classes around your actual work rhythm, run in Eastern Time, whatever shape that takes.",
  },
  {
    question: "What happens to classes during hurricane season?",
    answer:
      "Hurricane season runs from June through November along the South Carolina coast, and Charleston families are familiar with storm watches and occasional evacuation orders. We simply reschedule around it. Because classes are online, a hurricane threat doesn't mean losing a semester of progress, just picking the lesson back up once things are safe again.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. Every Ease Quran teacher holds a recognized Quran qualification. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Charleston-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Charleston?",
    answer:
      "Yes. Ask for a female teacher when you book the free trial, and we can arrange one at most times. The trial and every regular class are then taught by a female teacher.",
  },
  {
    question: "Is Charleston's Muslim community large enough for good options?",
    answer:
      "Charleston's Muslim community is genuinely small but steadily growing, made up of South Asian, Arab, and African families across the peninsula and the surrounding Lowcountry suburbs. Because the local pool of teachers and programs is limited, Ease Quran brings the same certified, one-on-one instruction available to families anywhere in the country directly into a Charleston home, no waiting for the local community to grow first.",
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

export default function CharlestonSouthCarolinaPage() {
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
              <li className="text-white/80">Charleston, South Carolina</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Charleston &amp; the Lowcountry
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Charleston, South Carolina
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Charleston and the Lowcountry, a small but growing Muslim community in a historic port city. Quality Quran instruction delivered to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Your Free Trial
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Charleston%20South%20Carolina"
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
              Charleston's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Small, Growing Community in a Historic Port City
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Charleston's Muslim community is genuinely small, made up of South Asian, Arab, and African families across the historic peninsula and the surrounding Lowcountry suburbs. What makes Charleston notable is its history: this stretch of the South Carolina coast is documented by historians as one of the places where enslaved West Africans, including practicing Muslims, were brought to America centuries ago, giving the region a deep and often overlooked connection to Islam's presence in this country long before recent immigration. Today's community is smaller and newer than that history might suggest, still building out its local mosques and institutions.
              </p>
              <p>
                Charleston's practical challenge for Muslim families is its tourism-driven economy combined with a real hurricane season. A large share of local jobs are tied to hospitality, historic tourism, and the restaurant industry, work that runs on weekends, evenings, and holidays rather than a standard schedule. Add hurricane season from June through November, when storm watches and occasional evacuation orders are simply part of coastal life, and a fixed weekly class at a set location becomes hard for a lot of Charleston families to rely on. Online Quran education adapts to both, built around whatever schedule a family actually works and unaffected by anything short of a full evacuation.
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
              Why Online Works for Charleston Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Charleston Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Built for Tourism Industry Hours</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Hospitality and tourism work rarely follows a 9-to-5 pattern. We book classes around your actual shift, not a fixed slot that assumes a typical weekday evening.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Reschedules Around a Storm</h3>
                <p className="text-grey text-sm leading-relaxed">
                  A hurricane watch or evacuation doesn't have to derail your child's progress. Classes reschedule easily, and pick right back up once things are safe.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">A Bigger Teaching Pool</h3>
                <p className="text-grey text-sm leading-relaxed">
                  With a smaller local Muslim community, online classes give Charleston families access to the same certified teaching pool available anywhere else in the country.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Charleston%20South%20Carolina" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-full hover:bg-offwhite transition-colors text-sm text-center">
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
              Quran Classes for Kids and Adults in Charleston
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across the Lowcountry.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Charleston</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and your actual work schedule in Eastern Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We build a schedule around your real work rhythm. Reliable, flexible, and always from the comfort of your home." },
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

      <NearbyLocations slug="charleston-south-carolina" />

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="heading-2 text-navy">
                Frequently Asked Questions. Charleston, South Carolina
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
        headline="Certified Quran Education Across Charleston and the Lowcountry"
        subtext="From the historic peninsula to every Lowcountry suburb. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Your Free Trial"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Charleston South Carolina"
      />
    </>
  );
}
