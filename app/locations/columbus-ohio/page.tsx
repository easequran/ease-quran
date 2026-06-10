import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Online Quran Classes in Columbus, Ohio",
  description:
    "Certified online Quran classes for Muslim families in Columbus, Ohio. Serving the Somali, South Asian, and Arab Muslim communities across Columbus and central Ohio. Free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/columbus-ohio",
  },
  openGraph: {
    title: "Online Quran Classes in Columbus, Ohio | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families in Columbus, Ohio, serving one of America's largest Somali communities and beyond.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Columbus, Ohio", item: "https://easequran.com/locations/columbus-ohio" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in Columbus, Ohio and central Ohio.",
  areaServed: {
    "@type": "City",
    name: "Columbus",
    containedInPlace: { "@type": "State", name: "Ohio" },
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
      name: "Do you serve Columbus's large Somali Muslim community?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We warmly welcome families from Columbus's Somali community, one of the largest in the United States. All classes are in English and our teachers are experienced with students from all Muslim backgrounds including Somali families.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families in suburbs like Dublin, Westerville, and Hilliard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve all of the Columbus metro area including Dublin, Westerville, Hilliard, Gahanna, Grove City, Pickerington, and surrounding communities. Online classes reach every part of central Ohio.",
      },
    },
    {
      "@type": "Question",
      name: "Are your teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the most respected Islamic education credential in the world. Columbus Muslim families can trust our teachers' qualifications completely.",
      },
    },
    {
      "@type": "Question",
      name: "Is a female teacher available for sisters in Columbus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima, our certified female Quran teacher, is available for sisters and children. Many Columbus families from the Somali and South Asian communities request this option.",
      },
    },
    {
      "@type": "Question",
      name: "Do you teach children as young as 4 or 5 years old?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We teach children starting from age 4 with Noorani Qaida. Our teachers are experienced with young learners and know how to make early Quran education engaging, fun, and effective for very young children.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Do you serve Columbus's large Somali Muslim community?",
    answer:
      "Yes. We warmly and proudly welcome families from Columbus's Somali community, one of the largest Somali communities in the entire United States. All our classes are conducted in English, making them fully accessible for Somali-American families whose children are growing up as English speakers. Our teachers are experienced with students from all Muslim backgrounds and cultural traditions, including Somali families.",
  },
  {
    question: "Do you serve families in suburbs like Dublin, Westerville, and Hilliard?",
    answer:
      "Yes. We serve the entire Columbus metropolitan area including Dublin, Westerville, Hilliard, Gahanna, Grove City, Pickerington, New Albany, Powell, and all surrounding communities. Online classes reach every household in central Ohio with equal quality, regardless of how close or far you are from Columbus's Islamic centers.",
  },
  {
    question: "Are your teachers certified from recognized Islamic institutions?",
    answer:
      "All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, widely regarded as the most prestigious Islamic education board in the world. This credential represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Columbus Muslim families, from any background, can have complete confidence in the qualifications of our teachers.",
  },
  {
    question: "Is a female teacher available for sisters in Columbus?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Columbus families from the Somali, South Asian, and Arab communities request a female teacher for their daughters and wives, and we are very pleased to offer this important option. Simply indicate your preference when booking.",
  },
  {
    question: "Do you teach children as young as 4 or 5 years old?",
    answer:
      "Yes. We begin with Noorani Qaida for children starting from around age 4. Our teachers are specially experienced with young learners, they know how to keep very young children engaged, make the Arabic letters feel like an exciting adventure, and build the foundation for Quran reading in a way that feels natural and fun. Many Columbus parents are amazed at how quickly their young children take to it.",
  },
];

export default function ColumbusOhioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
              <li className="text-white/80">Columbus, Ohio</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving Columbus and Central Ohio
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Columbus, Ohio
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Columbus and central Ohio. Proudly serving the Somali, South Asian, Arab, and all Muslim communities, flexible, online, and from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Columbus%20Ohio"
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
              Columbus's Muslim Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              A Diverse and Growing Muslim Community in the Heart of Ohio
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Columbus, Ohio has a Muslim community of approximately 60,000 or more, and it is distinguished nationally by one of its most remarkable features: home to one of the largest Somali communities in the entire United States. The Somali Muslim community in Columbus has established deep roots since the early 1990s, building a substantial network of mosques, community organizations, halal businesses, and social services that serve what has become one of America's most significant Somali diaspora communities. The Somali presence in Columbus is not a peripheral feature of the city's Muslim life, it is a central pillar of it, with Somali Muslims playing an active role in the city's Islamic institutions, civic life, and broader community. Alongside the Somali community, Columbus hosts a growing South Asian Muslim population (Pakistani, Indian, and Bangladeshi families) increasingly established in the suburbs, as well as Arab Muslim families and students who add to the city's diverse Islamic landscape. Several active Islamic centers and schools serve the community's educational and spiritual needs across the metropolitan area.
              </p>
              <p>
                Columbus's Muslim community benefits from the city's general affordability and quality of life, which continue to attract new Muslim families from across the country. However, the community's diversity also presents an interesting challenge: different cultural communities have different traditions around Quran education and teaching methods. Some Columbus Muslim families come from backgrounds where Quran education was community-led and group-based; others are looking for the kind of personalized, individual instruction that was not easily available in their home countries or communities. Ease Quran's model, one-on-one, structured, progress-tracked, and conducted in English, is particularly well-suited to Columbus's diverse Muslim families, providing a consistent standard of certified instruction that serves children and adults from any background equally well.
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
              Why Online Works for Columbus Families
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-10">
              Why Columbus Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Serving Columbus's Full Muslim Diversity</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Columbus's Muslim community spans Somali, South Asian, Arab, and many other backgrounds. Ease Quran teaches in English and is designed specifically for Western Muslim families, making it equally accessible and valuable for families from every cultural background in Columbus's diverse community.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Convenience for Families Across the Metro</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Columbus is a growing city where Muslim families are spread across increasingly suburban areas. Dublin, Hilliard, Westerville, and beyond. Online classes mean that suburban families don't have to drive into the city for Islamic education. The teacher comes to your home, wherever in central Ohio you live.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Personalized for Every Child</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Columbus's Muslim children represent a wide range of starting points, some have been learning Arabic from an early age in community settings, others are complete beginners. Our one-on-one format means every child starts exactly where they are and progresses at the pace that's right for them, with no pressure to keep up with a classroom.
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
              Courses Available for Columbus Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              From first-time beginners to advanced students, every course is one-on-one, certified, and taught in English.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "Arabic letters, phonics, and Quran reading fundamentals: the perfect starting point for children age 4 and up.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Accurate, beautiful Quran recitation through systematic Tajweed instruction from beginning to advanced.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "Structured Hifz program with regular revision cycles for students committed to memorizing the Quran.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Core Islamic knowledge: beliefs, prayer, manners, and Seerah, for young Muslims growing up in Ohio.", href: "/courses/islamic-studies" },
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">How to Get Started from Columbus</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Contact Us Today", desc: "Book online or send a WhatsApp message. Tell us about your child, age, level, and preferred Eastern Time slots. We'll match them with the right certified teacher right away." },
                { step: "02", title: "Free Trial Class on Zoom", desc: "Your child joins a live, one-on-one lesson with their teacher, no cost, no commitment. See for yourself how Ease Quran's personalized method works." },
                { step: "03", title: "Begin Regular Classes", desc: "If you're happy with the trial, and Columbus families consistently are, we set up a recurring weekly schedule that works perfectly for your family." },
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
              "We are Somali and we came to Columbus over ten years ago. Quran education has always been important to our family. We tried a community class at the masjid but my son needed more individual attention. With Ease Quran he has been learning one-on-one for seven months and is now reading fluently. The teacher is excellent and my son actually asks to have his lessons. We are so grateful."
            </blockquote>
            <footer className="text-white/60 font-semibold">
              — Fadumo A., Somali Muslim mother in Columbus, Ohio
            </footer>
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
                Frequently Asked Questions. Columbus, Ohio
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Certified Quran Education for Columbus's Diverse Muslim Community"
        subtext="Serving Somali, South Asian, Arab, and all Muslim families across Columbus and central Ohio with one-on-one, expert Quran instruction. Your first class is completely free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
