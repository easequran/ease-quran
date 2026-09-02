import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Chicago, Illinois",
  description:
    "Certified online Quran classes for Muslim families in Chicago, Illinois. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/chicago",
  },
  openGraph: {
    title: "Online Quran Classes in Chicago, Illinois | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families in Chicago, IL. Serving Bridgeview, Orland Park, north suburbs, and all Chicagoland.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes in Chicago, Illinois, Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Chicago", item: "https://easequran.com/locations/chicago" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in the Chicago metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Chicago",
    containedInPlace: { "@type": "State", name: "Illinois" },
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
      name: "Is online Quran learning safe for my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Parents may sit in on any class, classes may be recorded by parents, and there is no private teacher–student contact outside scheduled sessions. Female teachers are available for girls on request, and every teacher is credential-verified.",
      },
    },
    {
      "@type": "Question",
      name: "Can I find Quran classes near me in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Chicago, our online classes serve any family in the Chicago area searching for Quran classes or teachers near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families in Bridgeview and the southwest suburbs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve the entire Chicagoland area including Bridgeview, Orland Park, Burbank, Palos Hills, and all southwest suburbs, as well as the north suburbs and city proper. All classes are online so geography is not a barrier.",
      },
    },
    {
      "@type": "Question",
      name: "What time zones do you accommodate for Chicago families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All scheduling for Chicago families is done in Central Time. We offer after-school, evening, and weekend slots that work around Chicago's school and work schedules.",
      },
    },
    {
      "@type": "Question",
      name: "How qualified are your teachers compared to local Chicago Islamic schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the highest recognized Islamic academic credential. Classes are one-on-one versus the group settings at most Islamic schools.",
      },
    },
    {
      "@type": "Question",
      name: "Can my daughter have a female Quran teacher?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available for sisters and children. Many Chicago-area families request this option.",
      },
    },
    {
      "@type": "Question",
      name: "Do you teach adults who want to learn Quran in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We have many adult students including complete beginners who are learning for the first time. Our teachers are experienced with students of all ages and skill levels.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Is online Quran learning safe for my child?",
    answer:
      "Yes. Parents are welcome to sit in on any class, classes may be recorded by parents, and there is no private teacher–student contact outside scheduled sessions. Female teachers are available for girls on request, and every teacher is credential-verified. See our Child Safety & Parent Rights Policy for full details.",
  },
  {
    question: "Can I find Quran classes near me in Chicago?",
    answer:
      "Yes. While we are not a physical school in Chicago, our online classes work for any family in the Chicago area searching for Quran classes, a Quran teacher, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any travel.",
  },
  {
    question: "Do you serve families in Bridgeview and the southwest suburbs?",
    answer:
      "Yes. We serve the entire Chicagoland area including Bridgeview, Orland Park, Burbank, Palos Hills, Tinley Park, and all southwest suburbs, the heart of Chicago's Arab-American Muslim community. We also serve families in the north suburbs and the city of Chicago itself. Since all classes are online via Zoom, your location anywhere in the metro area is perfectly fine.",
  },
  {
    question: "What time zones do you accommodate for Chicago families?",
    answer:
      "All scheduling for Chicago families is coordinated in Central Time. We offer after-school slots starting at 3 PM CT, evening slots through 9 PM CT, and weekend morning and afternoon options. We're fully flexible around Chicago's school and work schedules.",
  },
  {
    question: "How qualified are your teachers compared to local Chicago Islamic schools?",
    answer:
      "All Ease Quran teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Additionally, unlike most Islamic school settings where one teacher manages a classroom of students, every Ease Quran class is one-on-one, ensuring your child's individual needs are always addressed.",
  },
  {
    question: "Can my daughter have a female Quran teacher?",
    answer:
      "Yes. Sister Almas Fatima is our certified female Quran teacher, a Qaria e Quran with a B.A. in Islamic Studies, available exclusively for sisters and children. Many Chicago-area families, especially those from the Arab-American and South Asian communities, specifically request a female teacher for their daughters and we are proud to provide that option.",
  },
  {
    question: "Do you teach adults who want to learn Quran in Chicago?",
    answer:
      "Absolutely. We have many adult students in Chicago who are learning Quran reading for the first time, wanting to improve their Tajweed, or starting memorization as adults. Our teachers are highly experienced with adult learners and create a completely judgment-free, encouraging environment. It is never too late to begin.",
  },
];

export default function ChicagoPage() {
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
              <li className="text-white/80">Chicago, Illinois</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Chicagoland
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Chicago, Illinois
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Professional, certified Quran education for Muslim families across Chicagoland, from Bridgeview and the southwest suburbs to the north shore and the city itself. One-on-one, flexible, and fully online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Chicago%20Illinois"
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

      <TeacherStrip />

      {/* Muslim Community Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">
              Chicago's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Top-Five Muslim City in the United States
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Chicago, Illinois stands among the top five cities in America for its Muslim population, with an estimated community of over 400,000 Muslims, making Chicagoland a cornerstone of Muslim life in the Midwest. The city's Muslim community is among the most diverse in the nation. The southwest suburbs, particularly Bridgeview and Orland Park, are home to one of the largest concentrations of Arab Americans in the United States, with strong Palestinian, Lebanese, and Syrian communities that have built significant Islamic infrastructure including large masjids, full-time Islamic schools, and community centers. The north suburbs host a strong South Asian Muslim presence, with Pakistani and Indian families well-established in communities like Skokie, Niles, and Schaumburg. The city of Chicago itself has a historic African American Muslim community, rooted in decades of Islamic identity and community building.
              </p>
              <p>
                Despite this remarkable communal depth, Chicago Muslim families face the same challenge that their counterparts across America encounter: the difficulty of providing consistent, high-quality Quran education in the midst of American life. The southwest suburbs may have a high density of Islamic infrastructure, but even there, the best teachers are often overbooked, Islamic schools have long waitlists, and families in the north suburbs or city proper can face significant drives to reach them. Chicago winters add another dimension, reliable transportation to in-person Islamic classes becomes genuinely difficult from December through February. Ease Quran's online model eliminates all of these friction points, giving every Chicago-area Muslim family the same access to qualified Quran education regardless of their suburb, neighborhood, or the weather outside.
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
              Why Online Works for Chicago
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Chicago Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">No Chicago Winter Disruptions</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Chicago winters are legendary, and they regularly disrupt in-person activities for months at a time. With online Quran classes, a snowstorm, polar vortex, or icy roads will never interrupt your child's lessons. Learning continues year-round, regardless of the forecast.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Serving All of Chicagoland Equally</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Whether you're in Bridgeview, Schaumburg, Evanston, or the South Side, you get the same quality of certified instruction. Families in the north suburbs no longer have to choose between a long drive to the southwest suburbs or settling for an unqualified local option.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">True One-on-One Instruction</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Chicago's popular Islamic schools often have excellent reputations but limited capacity. Waitlists are common and class sizes can be large. Every Ease Quran session is a private lesson, your child's teacher is focused entirely on them, tracking individual progress and adapting to their specific needs every single class.
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
            <span className="font-semibold">Plans from $40/month</span>
            <span className="text-white/70"> &middot; most families choose Steady at $55/month for 3 classes/week &middot; </span>
            <span className="text-gold font-semibold">first class free &rarr;</span>
          </Link>

          <WhatsAppReviewsRow heading="Real Students, Real Results" subline="We've taught Western, English-speaking students across the UK and USA." />

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-colors text-sm text-center">
              Book Free Trial Class
            </Link>
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Chicago%20Illinois" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Courses Available for Chicago Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Every course is taught in English, designed for Western students, and delivered one-on-one by a certified teacher.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "Foundational Arabic phonics and letter recognition, the essential first step for any new learner.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Systematic Tajweed instruction to develop accurate, confident Quran recitation from beginning to advanced levels.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "Disciplined, structured Hifz program for students who want to memorize the complete Quran.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Islamic fundamentals: beliefs, prayer, manners, and Seerah, taught in a way that resonates with young American Muslims.", href: "/courses/islamic-studies" },
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Chicago</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Reach Out to Us", desc: "Book through our website or send us a WhatsApp message. Let us know your child's age, current Quran level, and your schedule preferences in Central Time." },
                { step: "02", title: "Free Trial Class on Zoom", desc: "Your child attends a complimentary one-on-one session with one of our certified teachers. No payment, no obligation, just a genuine experience of how we teach." },
                { step: "03", title: "Enroll and Begin", desc: "If the class is a good fit, and Chicago families consistently tell us it is, we finalize a regular weekly schedule that works for your family year-round." },
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

      {/* Near Me */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">
              Quran Classes Near You
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Looking for Quran Classes Near You in Chicago?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Chicago, the best
              teacher for your child may not be the closest one on the map. Because every Ease Quran
              class is live and online, Chicago families connect one-on-one with certified teachers
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
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="heading-2 text-navy">
                Frequently Asked Questions. Chicago, Illinois
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
        headline="Quality Quran Education for Every Chicago Family"
        subtext="From Bridgeview to the North Shore. Ease Quran brings certified, one-on-one Quran instruction to your home. No commute, no waitlists, no compromise on quality."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Chicago Illinois"
      />
    </>
  );
}
