import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Online Quran Classes in Atlanta, Georgia | Ease Quran Academy",
  description:
    "Certified online Quran classes for Muslim families in Atlanta, GA. Serving the African American, South Asian, and Arab Muslim communities across the Atlanta metro. Free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/atlanta",
  },
  openGraph: {
    title: "Online Quran Classes in Atlanta, Georgia | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Atlanta — serving one of the South's fastest-growing Muslim communities.",
    images: ["/images/og-image.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in Atlanta, Georgia and the greater Atlanta metro area.",
  areaServed: {
    "@type": "City",
    name: "Atlanta",
    containedInPlace: { "@type": "State", name: "Georgia" },
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
      name: "Do you serve families in Atlanta's suburbs like Duluth, Lawrenceville, and Stone Mountain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve the entire Atlanta metropolitan area including Duluth, Lawrenceville, Stone Mountain, Smyrna, Marietta, Alpharetta, and all surrounding communities. Online classes serve every Atlanta suburb equally.",
      },
    },
    {
      "@type": "Question",
      name: "Atlanta traffic is notorious — how does online learning help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlanta's traffic is among the worst in the South, especially on I-285 and I-85. Online classes eliminate all driving entirely — your child learns Quran from home without a single minute of Atlanta traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Are your teachers certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All Ease Quran teachers hold Wifaq ul Madaris Al-Arabia certifications — the most respected Islamic academic credential in the world. Atlanta families can trust our teachers' qualifications completely.",
      },
    },
    {
      "@type": "Question",
      name: "Is a female teacher available for sisters in Atlanta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima, our certified female Quran teacher, is available for sisters and children across the Atlanta area.",
      },
    },
    {
      "@type": "Question",
      name: "Do you teach students from Atlanta's diverse Muslim backgrounds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Atlanta's Muslim community spans African American, South Asian, Arab, and West African backgrounds. We welcome all Muslim families and teach in English, making our classes accessible to the full spectrum of Atlanta's Muslim community.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Do you serve families in Atlanta's suburbs like Duluth, Lawrenceville, and Stone Mountain?",
    answer:
      "Yes. We serve the entire Atlanta metropolitan area including Duluth, Lawrenceville, Stone Mountain, Smyrna, Marietta, Alpharetta, Decatur, Norcross, and all surrounding communities. Stone Mountain and the Gwinnett County area have a particularly significant Muslim presence, and online classes serve every part of Greater Atlanta with equal quality.",
  },
  {
    question: "Atlanta traffic is notorious — how does online learning help?",
    answer:
      "Atlanta's traffic is notorious, particularly on I-285, I-85, and I-20 during evening and weekend rush hours. Getting a child to an Islamic center across Atlanta can easily become a two-hour round trip. Online Quran classes eliminate all driving entirely — your child sits down at home and the lesson begins. No I-285, no parking, no rush.",
  },
  {
    question: "Are your teachers certified?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia — the most respected and internationally recognized Islamic education board in the world. Atlanta's growing Muslim community deserves teachers with real, verifiable credentials — and that is exactly what we provide.",
  },
  {
    question: "Is a female teacher available for sisters in Atlanta?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Atlanta families from South Asian and Arab backgrounds specifically request a female teacher for their daughters and wives. Simply indicate your preference when booking the free trial class.",
  },
  {
    question: "Do you teach students from Atlanta's diverse Muslim backgrounds?",
    answer:
      "Absolutely. Atlanta's Muslim community is beautifully diverse — spanning African American, Pakistani, Indian, Bangladeshi, Arab, Somali, West African, and other backgrounds. We welcome every Muslim family in Atlanta, and our instruction in clear English makes our classes fully accessible to families from any cultural and linguistic background. Islam unites us, and we serve all.",
  },
];

export default function AtlantaPage() {
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
              <li className="text-white/80">Atlanta, Georgia</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving Greater Atlanta
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Atlanta, Georgia
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across the Atlanta metro. From Duluth and Lawrenceville to Smyrna, Marietta, and Stone Mountain — quality Quran instruction from qualified teachers, right in your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Atlanta%20Georgia"
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
              Atlanta's Muslim Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              One of the South's Fastest-Growing Muslim Communities
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Atlanta, Georgia has emerged as one of the fastest-growing Muslim communities in the American South, with an estimated Muslim population exceeding 100,000 across the metropolitan area. The community's growth reflects Atlanta's broader rise as a major American city and economic hub — drawing Muslim families from across the country and internationally as the city's job market, affordability (relative to coastal cities), and quality of life continue to attract a diverse workforce. Atlanta's Muslim community is genuinely diverse, encompassing a significant African American Muslim population with deep roots in the city, a rapidly growing South Asian Muslim community concentrated in the northeast suburbs of Gwinnett County (Duluth, Lawrenceville, Norcross), Arab Muslim families in various parts of the metro, and a growing West African Muslim presence. Several major Islamic centers and masjids serve these communities, with weekend Islamic schools, full-time Islamic education programs, and community events that reflect the vitality of Atlanta's Muslim life.
              </p>
              <p>
                Atlanta's unique challenge for Muslim families is the city's traffic — which is consistently ranked among the worst in the United States. The metro area's car-dependent design and extensive suburban sprawl mean that reaching an Islamic center in another part of the metro can be genuinely time-prohibitive. A family in Duluth wanting to attend a program in South Atlanta might face two hours of driving on a Saturday morning. For working parents and busy families, this makes consistent attendance at in-person Islamic education programs difficult to maintain. Online Quran education has become an increasingly popular solution for Atlanta Muslim families precisely because it removes the traffic equation entirely, bringing certified instruction directly to every household in the metro without requiring a single mile of driving on Atlanta's notoriously congested roads.
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
              Why Online Works for Atlanta Families
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-10">
              Why Atlanta Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Zero Atlanta Traffic</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Atlanta traffic is a defining feature of life in the metro — and it's not getting better. Online Quran classes mean your child learns without a single minute of sitting in traffic. From Gwinnett County to Cobb County, every family gets the same quality instruction without fighting I-285 to get there.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">🌿</div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Serving Atlanta's Growing Muslim Population</h3>
                <p className="text-grey text-sm leading-relaxed">
                  As Atlanta's Muslim community continues to grow rapidly, demand for quality Islamic education is outpacing supply of local in-person resources. Online classes allow Atlanta's entire Muslim population — across all its diverse backgrounds and all its sprawling suburbs — to access certified Quran education right now.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Embracing Atlanta's Muslim Diversity</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Atlanta's Muslim community spans African American, South Asian, Arab, West African, and many other backgrounds. Ease Quran teaches in English and welcomes every Muslim family, providing a consistent and high-quality Quran education experience that serves the full diversity of Atlanta's Muslim community equally.
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
              Courses Available for Atlanta Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Certified, structured Quran courses for students of every age and level — taught one-on-one by qualified scholars.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "Start from the beginning — Arabic letters, phonics, and Quran reading fundamentals taught with patience and care.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Systematic Tajweed rules for correct, beautiful Quran recitation at every stage of your learning journey.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "A disciplined, structured Hifz program with regular revision and milestone tracking.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Islamic beliefs, prayer, manners, and Seerah — foundational Islamic knowledge for children and young adults.", href: "/courses/islamic-studies" },
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">How to Get Started from Atlanta</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Book Your Trial", desc: "Contact us via the website or WhatsApp. Share the student's age, current level, and preferred schedule in Eastern Time — we'll match you with the right certified teacher." },
                { step: "02", title: "Free One-on-One Class", desc: "Attend a complimentary live Zoom session with your teacher. See the curriculum, experience the method, and assess your child's response — all with no cost or commitment." },
                { step: "03", title: "Start Your Weekly Schedule", desc: "Ready to begin? We finalize a recurring weekly schedule that works for your Atlanta family — consistent, reliable, and without a single mile of driving." },
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
              "We moved to Atlanta from New Jersey two years ago and finding an Islamic school near us in Duluth that could take our kids was a struggle. Ease Quran solved everything. My two kids have been studying with their teacher for five months and the progress is incredible. We especially love that the schedule is completely flexible around our work and school life."
            </blockquote>
            <footer className="text-white/60 font-semibold">
              — Tariq and Zainab B., Muslim family in Duluth, Georgia
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
                Frequently Asked Questions — Atlanta, Georgia
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Certified Quran Education for Every Atlanta Muslim Family"
        subtext="From Gwinnett County to Cobb County — serving the full diversity of Atlanta's fast-growing Muslim community with one-on-one, certified Quran instruction. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
