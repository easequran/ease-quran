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
  title: "Online Quran Classes in Salt Lake City, Utah",
  description:
    "Certified online Quran classes for Muslim families in Salt Lake City, Utah. Qualified teachers, free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/salt-lake-city-utah",
  },
  openGraph: {
    title: "Online Quran Classes in Salt Lake City, Utah | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Salt Lake City and the Wasatch Front, a small but growing Muslim minority community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Salt Lake City, Utah", item: "https://easequran.com/locations/salt-lake-city-utah" },
  ],
};

const faqs = [
  {
    question: "Is online Quran learning safe for my child?",
    answer:
      "Yes. Parents are welcome to sit in on any class, classes may be recorded by parents, and there is no private teacher–student contact outside scheduled sessions. Female teachers are available for girls on request, and every teacher is credential-verified. See our Child Safety & Parent Rights Policy for full details.",
  },
  {
    question: "Can I find a Quran teacher near me in Salt Lake City?",
    answer:
      "Yes. While we are not a physical school in Salt Lake City, our online Quran academy works for any family across the Wasatch Front searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, wherever you are along the valley.",
  },
  {
    question: "Is Salt Lake City's Muslim community large enough to have good options?",
    answer:
      "Salt Lake City's Muslim community is genuinely small compared to most major American metros, but it is real, established, and steadily growing, made up of South Asian, Arab, Bosnian, and East African families building community life together as a religious minority in a state with a very different dominant culture. Because the local pool of teachers and programs is smaller, some Utah families end up piecing together their child's Islamic education inconsistently. Ease Quran solves that by bringing the same certified, one-on-one instruction available to families anywhere in the country directly into a Utah home.",
  },
  {
    question: "What about Utah's mountain weather and ski season?",
    answer:
      "Yes, we work around it. The Wasatch Front sees genuine winter storms that can make evening drives along I-15 or up into the foothills hazardous, and a lot of Utah families also spend winter weekends up in the mountains during ski season. A fixed weekly class competes with both. Online classes reschedule easily around a storm or a weekend trip, so your child's Quran education doesn't have to pause every time the weather or the calendar gets in the way.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. Every Ease Quran teacher holds a recognized Quran qualification. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Salt Lake City-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Salt Lake City?",
    answer:
      "Yes. Ask for a female teacher when you book the free trial, and we can arrange one at most times. The trial and every regular class are then taught by a female teacher.",
  },
  {
    question: "Do you serve families across the wider Wasatch Front?",
    answer:
      "Yes. We serve families throughout Salt Lake City, Sandy, West Valley City, Provo, and the broader Wasatch Front. Since all classes are conducted online via Zoom, it makes no difference which part of the valley your family calls home.",
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

export default function SaltLakeCityUtahPage() {
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
              <li className="text-white/80">Salt Lake City, Utah</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving the Wasatch Front
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Salt Lake City, Utah
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Salt Lake City and the Wasatch Front. A small but growing community, matched with a full-sized certified teaching team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Your Free Trial
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Salt%20Lake%20City%20Utah"
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
              Salt Lake City's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Small, Close-Knit Muslim Minority Community
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Salt Lake City's Muslim community is genuinely small relative to most major American metros, made up of South Asian, Arab, Bosnian, and East African families who have built a close, mutually supportive community as a religious minority within a state with a very different dominant culture and history. What the community lacks in size, it tends to make up for in cohesion, families often know each other across ethnic lines in a way that's less common in larger, more segmented Muslim communities elsewhere in the country. Salt Lake City's tech sector, branded locally as Silicon Slopes, has also drawn a newer wave of South Asian and Middle Eastern professionals in recent years.
              </p>
              <p>
                The practical challenge that comes with a smaller community is fewer local options. A family in Salt Lake City may not have the same range of Quran teachers, weekend school programs, or specialized instructors that a family in a larger metro takes for granted, and Utah's mountain winters, with genuine snowstorms along the Wasatch Front and a local culture built around ski season weekends, add another layer of scheduling difficulty. Online Quran education solves the access problem directly, bringing the same certified teaching available to families anywhere in the country straight into a Utah home, no drive and no local shortage involved.
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
              Why Online Works for Salt Lake City Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Salt Lake City Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">More Options Than Locally Available</h3>
                <p className="text-grey text-sm leading-relaxed">
                  A smaller local Muslim community means fewer nearby teachers to choose from. Online classes open up the same certified teaching pool available to families anywhere in the country.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Fits Around Ski Season</h3>
                <p className="text-grey text-sm leading-relaxed">
                  If your family heads to the mountains most winter weekends, classes reschedule easily around a trip. A weekend on the slopes never has to mean falling behind.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Weather-Proof Scheduling</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Wasatch Front snowstorms can make an evening drive genuinely difficult. Online classes remove that risk completely, running on schedule regardless of the forecast.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Salt%20Lake%20City%20Utah" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-full hover:bg-offwhite transition-colors text-sm text-center">
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
              Quran Classes for Kids and Adults in Salt Lake City
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across the Wasatch Front.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Salt Lake City</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Mountain Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Salt Lake City family. Reliable, flexible, and always from the comfort of your home." },
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

      <NearbyLocations slug="salt-lake-city-utah" />

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="heading-2 text-navy">
                Frequently Asked Questions. Salt Lake City, Utah
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
        headline="Certified Quran Education Across the Wasatch Front"
        subtext="From Salt Lake City to Sandy, West Valley City, and Provo. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Your Free Trial"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Salt Lake City Utah"
      />
    </>
  );
}
