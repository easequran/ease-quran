import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Online Quran Classes in Philadelphia, PA",
  description:
    "Certified online Quran classes for Muslim families in Philadelphia, PA. Serving the African American Muslim community, South Asian families, and all Philadelphia suburbs. Free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/philadelphia",
  },
  openGraph: {
    title: "Online Quran Classes in Philadelphia, Pennsylvania | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Philadelphia and the surrounding suburbs, serving a proud and historic Muslim community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Philadelphia", item: "https://easequran.com/locations/philadelphia" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in Philadelphia, Pennsylvania and surrounding suburbs.",
  areaServed: {
    "@type": "City",
    name: "Philadelphia",
    containedInPlace: { "@type": "State", name: "Pennsylvania" },
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
      name: "Can I find Quran classes near me in Philadelphia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Philadelphia, our online classes serve any family in the Philadelphia area searching for Quran classes or teachers near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Philadelphia's historic African American Muslim community?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We warmly welcome all Muslim families in Philadelphia including those from the historic African American Muslim community. Our teachers are respectful, experienced, and serve students from all Muslim backgrounds.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families in the Philadelphia suburbs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve families across Greater Philadelphia including Cherry Hill, Camden, Delaware County, Montgomery County, and all surrounding suburbs in Pennsylvania and New Jersey.",
      },
    },
    {
      "@type": "Question",
      name: "How qualified are your teachers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All Ease Quran teachers hold Wifaq ul Madaris Al-Arabia certifications, the most respected Islamic education credential in the world. Every class is one-on-one and conducted by a formally trained scholar.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female Quran teacher available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima, our certified female Quran teacher, is available for sisters and children. Many Philadelphia families specifically request a female teacher for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Can adult Muslims in Philadelphia learn to read Quran for the first time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Many of our Philadelphia students are adults who are beginning their Quran journey for the first time. Our teachers create a supportive, non-judgmental environment for adult learners of any age or background.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Can I find Quran classes near me in Philadelphia?",
    answer:
      "Yes. While we are not a physical school in Philadelphia, our online classes work for any family in the Philadelphia area searching for Quran classes, a Quran teacher, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any travel.",
  },
  {
    question: "Do you serve Philadelphia's historic African American Muslim community?",
    answer:
      "Absolutely. We warmly welcome all Muslim families in Philadelphia, including those from the city's historic and deeply rooted African American Muslim community. Our teachers are respectful, experienced, and serve students from every Muslim background with equal care and professionalism. Philadelphia's Muslim community has a proud history, and we are honored to serve families who are a part of it.",
  },
  {
    question: "Do you serve families in the Philadelphia suburbs?",
    answer:
      "Yes. We serve families across Greater Philadelphia including Cherry Hill and Camden in New Jersey, Delaware County, Montgomery County, Bucks County, and all suburban communities surrounding the city. Since classes are online, your location anywhere in the greater Philadelphia metro area is perfectly fine.",
  },
  {
    question: "How qualified are your teachers?",
    answer:
      "All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, the most prestigious Islamic education board in the world, whose credentials are recognized by Islamic scholars and institutions globally. Every class is a private, one-on-one session conducted by a formally trained Islamic scholar. This is the standard Philadelphia's Muslim families deserve.",
  },
  {
    question: "Is there a female Quran teacher available?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Philadelphia families, particularly those for whom having a female teacher is an Islamic priority, specifically request her, and we are glad to provide this important option.",
  },
  {
    question: "Can adult Muslims in Philadelphia learn to read Quran for the first time?",
    answer:
      "Absolutely. A significant number of our Philadelphia students are adults who are learning to read the Quran for the very first time, or returning to Quran education after many years. Our teachers begin exactly where you are. Arabic letters, phonics, Noorani Qaida, in a completely supportive, non-judgmental environment. It is never too late, and you will never be made to feel embarrassed.",
  },
];

export default function PhiladelphiaPage() {
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
              <li className="text-white/80">Philadelphia, PA</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving Philadelphia and Surrounding Suburbs
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Philadelphia, Pennsylvania
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified Quran education for Muslim families across Philadelphia and the greater metro area. Honoring the city's proud Muslim heritage with one-on-one instruction from qualified scholars, flexible, accessible, and entirely from your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Philadelphia%20Pennsylvania"
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
              Philadelphia's Muslim Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              A City with Deep Roots in American Muslim History
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Philadelphia, Pennsylvania is home to a Muslim community with some of the deepest historical roots of any city in the United States. The city's African American Muslim community has a proud and significant legacy, dating back generations, with established mosques and Islamic centers that have served the community through decades of American Muslim history. These institutions are more than prayer spaces; they are cornerstones of community identity, providing education, social services, and spiritual grounding to Philadelphia's Muslim families across multiple generations. Alongside this historic community, Philadelphia has seen steady growth in its South Asian Muslim population, with Pakistani, Indian, and Bangladeshi families increasingly establishing themselves in the city's northern suburbs, Delaware County, and Montgomery County. Islamic centers, weekend schools, and community organizations serve a Muslim population that is diverse in its backgrounds but united in its faith.
              </p>
              <p>
                For Philadelphia Muslim families, the challenge of Quran education reflects the reality of urban American life. Many families in the city proper have access to community mosques and some Islamic programs, but consistent, high-quality one-on-one Quran instruction remains difficult to find. Suburban families, particularly the growing South Asian community in communities like Cherry Hill, Lansdale, and Levittown, may have longer drives to reach established Islamic centers. The online model meets Philadelphia families exactly where they are, bringing certified Quran education into every home without the cost, time, and logistics of regular in-person attendance. For a city with such a proud Islamic heritage, our goal is simply to help the next generation of Philadelphia Muslim children carry that tradition forward.
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
              Why Online Works for Philadelphia
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-10">
              Why Philadelphia Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Serving City and Suburb Equally</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Whether you're in West Philadelphia, Northeast Philly, Cherry Hill, or Montgomery County, you get the same quality of certified instruction online. Geography within the metro area is no longer a factor in determining the quality of your child's Quran education.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Honoring a Tradition of Islamic Education</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Philadelphia's Muslim community has always placed a high value on Islamic knowledge and Quran education. Ease Quran upholds that tradition, connecting families to certified scholars who take the teaching of the Quran as seriously as Philadelphia's Muslim community does.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Welcoming Adults and Children Equally</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Many Philadelphia adults, particularly in the African American Muslim community, are returning to Quran education or beginning for the first time as adults. Our teachers create an environment of warmth and encouragement, welcoming every student regardless of age or prior experience.
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
              Courses Available for Philadelphia Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Every course taught in English, one-on-one, by a Wifaq ul Madaris certified teacher, for students of every age and background.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "The ideal starting point for beginners, learn Arabic phonics, letters, and Quran reading fundamentals at your own pace.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Systematic Tajweed instruction to develop accurate, respectful Quran recitation, from beginning to advanced.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "Structured, supported Hifz program for students committed to memorizing the entire Quran.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Islamic beliefs, prayer, manners, and Seerah: foundational knowledge for young American Muslims.", href: "/courses/islamic-studies" },
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">How to Get Started from Philadelphia</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Reach Out to Us", desc: "Book online or send us a WhatsApp message. Tell us about the student, age, level, and schedule preferences in Eastern Time. We match you with the right certified teacher." },
                { step: "02", title: "Your Free Trial Class", desc: "The student joins a live, one-on-one Zoom session with their teacher, completely free of charge. Experience the Ease Quran teaching method with no obligation." },
                { step: "03", title: "Begin Your Quran Journey", desc: "Satisfied with the trial? We set up a consistent weekly schedule. Philly families tell us their children adapt quickly and look forward to every lesson." },
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
              "I'm a convert and I've been Muslim for eight years but I never learned to read the Quran properly. I was too embarrassed to ask for help. My friend recommended Ease Quran and I finally took the step. My teacher started me at the very beginning with Noorani Qaida and never once made me feel bad for not knowing. Now I can read. I still can't believe it. This service changed my life."
            </blockquote>
            <footer className="text-white/60 font-semibold">
              — Darnell W., Muslim convert in West Philadelphia, Pennsylvania
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
              Looking for Quran Classes Near You in Philadelphia?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Philadelphia, the best
              teacher for your child may not be the closest one on the map. Because every Ease Quran
              class is live and online, Philadelphia families connect one-on-one with certified teachers
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
                Frequently Asked Questions. Philadelphia, Pennsylvania
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Honoring Philadelphia's Muslim Community with Quality Quran Education"
        subtext="One-on-one, certified Quran instruction for every Philadelphia family, from West Philly and Northeast to the suburbs of Delaware and Montgomery counties. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
