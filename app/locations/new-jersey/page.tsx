import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Online Quran Classes in New Jersey",
  description:
    "Certified online Quran classes for Muslim families in New Jersey. Serving Paterson, Jersey City, Newark, Edison, and all of NJ. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/new-jersey",
  },
  openGraph: {
    title: "Online Quran Classes in New Jersey | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families in New Jersey. Paterson, Jersey City, Newark, Edison and statewide.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes in New Jersey, Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "New Jersey", item: "https://easequran.com/locations/new-jersey" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families throughout New Jersey.",
  areaServed: {
    "@type": "State",
    name: "New Jersey",
  },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I find Quran classes near me in New Jersey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in New Jersey, our online classes serve any family in the New Jersey area searching for Quran classes or teachers near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families in Paterson, Jersey City, and Newark?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve Muslim families across all of New Jersey. Paterson, Jersey City, Newark, Edison, Clifton, Elizabeth, and every city and town across the state. Online classes mean location within NJ is no barrier.",
      },
    },
    {
      "@type": "Question",
      name: "Are classes available for NJ commuter families with irregular schedules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Many New Jersey families commute to New York City and have demanding, variable schedules. We offer evening, weekend, and early morning slots in Eastern Time to accommodate commuter lifestyles.",
      },
    },
    {
      "@type": "Question",
      name: "How qualified are Ease Quran teachers compared to local Islamic schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the most respected Islamic education credential in the world. Every class is one-on-one, unlike the group-based instruction at most NJ Islamic schools.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female teacher available for my daughter in New Jersey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima, our certified female Quran teacher, is available for sisters and children. Many New Jersey families, particularly in Paterson and Edison, specifically request this option.",
      },
    },
    {
      "@type": "Question",
      name: "What age groups do you teach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We teach students of all ages, from children as young as 4 years old starting with Noorani Qaida, to adults learning Quran for the first time. Every student gets instruction tailored to their age and level.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Can I find Quran classes near me in New Jersey?",
    answer:
      "Yes. While we are not a physical school in New Jersey, our online classes work for any family in the New Jersey area searching for Quran classes, a Quran teacher, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any travel.",
  },
  {
    question: "Do you serve families in Paterson, Jersey City, and Newark?",
    answer:
      "Yes. We serve Muslim families across all of New Jersey. Paterson, Jersey City, Newark, Edison, Clifton, Elizabeth, Passaic, Bayonne, and every city and town statewide. Since all classes are conducted online via Zoom, your location anywhere in New Jersey is perfectly fine. Families from South Jersey and the shore also join us regularly.",
  },
  {
    question: "Are classes available for NJ commuter families with irregular schedules?",
    answer:
      "Absolutely. New Jersey is famous for its commuter culture, many Muslim families in Paterson, Jersey City, and Edison spend hours commuting to and from New York City each day, arriving home late and exhausted. We offer evening slots (7–9 PM ET), weekend sessions, and even early morning options before the morning commute begins, specifically designed to accommodate the NJ commuter lifestyle.",
  },
  {
    question: "How qualified are Ease Quran teachers compared to local Islamic schools?",
    answer:
      "All Ease Quran teachers hold Wifaq ul Madaris Al-Arabia certifications, the most prestigious Islamic education credential in the world. Beyond credentials, every Ease Quran class is one-on-one and private, unlike the group instruction at most NJ weekend Islamic schools. Your child receives full, individual attention from a certified scholar every single session.",
  },
  {
    question: "Is there a female teacher available for my daughter in New Jersey?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many New Jersey families, particularly within the large Arab community in Paterson and the South Asian community in Edison, specifically request a female teacher for their daughters. Simply mention it when booking your free trial.",
  },
  {
    question: "What age groups do you teach?",
    answer:
      "We teach students of all ages, from children as young as 4 years old starting with Noorani Qaida, to teenagers working on Tajweed, to adults learning to read Quran for the very first time. Every student receives instruction tailored to their specific age, level, and learning pace. No student is too young or too old to begin their Quran journey.",
  },
];

export default function NewJerseyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><Link href="/locations" className="hover:text-gold transition-colors">Locations</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">New Jersey</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving All of New Jersey
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in New Jersey
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across the Garden State, from Paterson and Jersey City to Edison, Newark, and everywhere in between. Flexible scheduling built for NJ commuter families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20New%20Jersey"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
            <TrustBadges dark />
          </div>
        </div>
      </section>

      {/* Muslim Community Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              New Jersey's Muslim Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              One of the Most Concentrated Muslim Communities on the East Coast
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                New Jersey is home to one of the most densely concentrated Muslim communities in the United States, with an estimated population of over 200,000 Muslims. The Garden State's Muslim demographic is remarkably rich in its diversity and historical depth. Paterson, sometimes called "Little Beirut", is one of the most significant Arab American cities in the country, home to a large Lebanese, Syrian, Palestinian, Egyptian, and Yemeni Muslim community that has established a dense network of mosques, halal restaurants, and Islamic businesses that give the city a distinctly vibrant Muslim character. Jersey City and Newark have strong Muslim communities including African American Muslims with deep historical roots in these cities. The suburban town of Edison has become a hub for South Asian Muslims, particularly Pakistani and Indian families, with active Islamic centers, community events, and growing infrastructure. Clifton, Passaic, and Elizabeth also host significant Muslim populations.
              </p>
              <p>
                New Jersey presents a particular lifestyle challenge for Muslim families: the commuter culture. A significant proportion of NJ's Muslim population, especially in Bergen, Hudson, and Passaic counties, commutes daily into New York City via the PATH train, NJ Transit, or the George Washington Bridge. These parents often leave home before their children wake up and return after 7 PM. Traditional in-person Islamic school models, which typically require parent drop-off and pickup, simply don't fit this lifestyle. For NJ commuter families, online Quran education isn't just convenient, it's often the only realistic option for providing their children with consistent Islamic education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Why Online Works for NJ Families
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-10">
              Why New Jersey Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Built for the NJ Commuter Lifestyle</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Thousands of NJ Muslim families spend their days commuting into New York City. Evening and weekend Quran classes that require additional driving are simply unrealistic. Online classes can happen right after your child comes home from school, before dinner, without a single minute of extra commuting.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Access Beyond Your Local Masjid</h3>
                <p className="text-grey text-sm leading-relaxed">
                  While communities like Paterson have a strong local Islamic presence, many NJ Muslims in suburban or less-served areas have limited local options. Ease Quran brings the same quality of certified instruction to families in every part of the state, no matter how small or suburban their location.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">The Whole Family Can Enroll</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Many New Jersey families enroll multiple children, or parents alongside their kids, because our flexible scheduling makes it easy to coordinate. Siblings can take classes back-to-back, and adults can book their own separate slots. One family, multiple students, one trusted teacher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Our Curriculum</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Courses Available for New Jersey Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              From complete beginners to advanced students, every course is designed for the English-speaking Muslim family and delivered one-on-one.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "The perfect starting point for young children and adult beginners, learn to read Arabic from the ground up.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Master the rules of Tajweed and develop beautiful, accurate Quran recitation from beginner through advanced levels.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "A structured, supportive Hifz program with consistent revision cycles for committed students.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Islamic beliefs, prayer, manners, and Seerah for children growing up as Muslims in America.", href: "/courses/islamic-studies" },
              ].map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="group bg-offwhite hover:bg-navy rounded-xl p-6 border border-gray-100 hover:border-navy transition-all duration-200"
                >
                  <h3 className="font-playfair font-bold text-lg text-navy group-hover:text-gold mb-2 transition-colors">{course.name}</h3>
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
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Simple Process</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">How to Get Started from New Jersey</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Book in Minutes", desc: "Use our online booking form or send us a WhatsApp message. Share your child's age, level, and preferred schedule in Eastern Time, we'll do the rest." },
                { step: "02", title: "Free Trial on Zoom", desc: "Your child has a live one-on-one lesson with their teacher, completely free. See the curriculum, experience the teaching style, and gauge how your child responds." },
                { step: "03", title: "Set Your Weekly Schedule", desc: "If you're satisfied, and NJ families almost always are, we create a recurring weekly schedule that fits seamlessly around your commuter lifestyle." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="font-playfair font-bold text-navy text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-navy mb-3">{item.title}</h3>
                  <p className="text-grey text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-6">Family Testimonial</span>
            <blockquote className="font-playfair text-xl md:text-2xl text-white leading-relaxed italic mb-8">
              "My husband takes the PATH to Manhattan every day and gets home around 7:30 PM. I work shifts at the hospital. We could not realistically get our three children to any Islamic school. With Ease Quran, our kids have lessons right after school, and I check in with the teacher on weekends. All three are progressing beautifully. SubhanAllah."
            </blockquote>
            <footer className="text-white/60 font-semibold">
              — Mariam H., Muslim mother in Jersey City, New Jersey
            </footer>
          </div>
        </div>
      </section>

      {/* Near Me */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Quran Classes Near You
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Looking for Quran Classes Near You in New Jersey?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in New Jersey, the best
              teacher for your child may not be the closest one on the map. Because every Ease Quran
              class is live and online, New Jersey families connect one-on-one with certified teachers
              without driving anywhere. You get the convenience of a teacher right in your home, with
              none of the commute, parking, or fixed group schedule of a local center.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Questions</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">
                Frequently Asked Questions. New Jersey
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Quran Education That Works for the NJ Commuter Family"
        subtext="Paterson, Jersey City, Edison, Newark, wherever you are in New Jersey, certified Quran education comes to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
