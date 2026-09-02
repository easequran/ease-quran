import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in St. Louis, Missouri",
  description:
    "Certified online Quran classes for Muslim families in St. Louis, Missouri. Wifaq ul Madaris certified teachers, free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/st-louis-missouri",
  },
  openGraph: {
    title: "Online Quran Classes in St. Louis, Missouri | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across St. Louis, home to the largest Bosnian population outside Bosnia itself.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "St. Louis, Missouri", item: "https://easequran.com/locations/st-louis-missouri" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families across the St. Louis metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "St. Louis",
    containedInPlace: { "@type": "State", name: "Missouri" },
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
      name: "Can I find a Quran teacher near me in St. Louis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in St. Louis, our online Quran academy serves any family across the metro searching for a Quran teacher near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve St. Louis's Bosnian Muslim community?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. St. Louis is home to the largest Bosnian community outside of Bosnia itself, and we are proud to serve Bosnian families alongside South Asian, Arab, and every other Muslim community in the city.",
      },
    },
    {
      "@type": "Question",
      name: "Can classes work around Missouri's changeable weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. St. Louis sees everything from summer humidity to winter ice storms. Because classes are online, none of that affects whether your child's lesson happens on time.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. St. Louis families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female Quran teacher for sisters in St. Louis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many St. Louis families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families across the wider St. Louis metro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve families throughout St. Louis City and County, including areas on both the Missouri and Illinois sides of the river. Since classes are online, crossing the Mississippi is never a barrier.",
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
    question: "Can I find a Quran teacher near me in St. Louis?",
    answer:
      "Yes. While we are not a physical school in St. Louis, our online Quran academy works for any family across the metro searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, whether you're in the city or across the river in Illinois.",
  },
  {
    question: "Do you serve St. Louis's Bosnian Muslim community?",
    answer:
      "Yes. St. Louis is home to the largest Bosnian population outside of Bosnia and Herzegovina itself, a community built by refugees who arrived in the 1990s following the Bosnian War and who have since established their own mosques, businesses, and cultural institutions across south St. Louis. We are proud to serve Bosnian families alongside South Asian, Arab, and every other Muslim community in the region, with instruction in clear, accessible English.",
  },
  {
    question: "Can classes work around Missouri's changeable weather?",
    answer:
      "Yes. St. Louis sees genuinely humid, sticky summers and winters that can swing from mild to ice storms within the same week. That kind of unpredictability makes committing to a fixed weekly drive to a physical class a real gamble some weeks. Since every Ease Quran class happens online, the weather outside never determines whether your child's lesson happens on time.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. St. Louis-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in St. Louis?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many St. Louis families specifically request her for their daughters, and we are proud to offer this option. Simply mention your preference when booking your free trial.",
  },
  {
    question: "Do you serve families across the wider St. Louis metro?",
    answer:
      "Yes. We serve families throughout St. Louis City and County, as well as the Metro East communities across the Mississippi River in Illinois. Since all classes are conducted online via Zoom, which state or side of the river your family lives on makes no difference at all.",
  },
];

export default function StLouisMissouriPage() {
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
              <li className="text-white/80">St. Louis, Missouri</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Greater St. Louis
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in St. Louis, Missouri
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across St. Louis, home to the largest Bosnian community outside Bosnia itself. Quality Quran instruction delivered to your home, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20St%20Louis%20Missouri"
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
              St. Louis's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Home to the Largest Bosnian Community Outside Bosnia
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                St. Louis holds a truly unique place among American Muslim communities: it is home to the largest population of Bosnian Muslims outside Bosnia and Herzegovina itself. Beginning in the 1990s, tens of thousands of Bosnian refugees fleeing the war settled in south St. Louis, building an entire network of mosques, cafes, bakeries, and community organizations that transformed neighborhoods like Bevo Mill into what locals sometimes call "Little Bosnia." Alongside this remarkable community, St. Louis is home to established South Asian and Arab Muslim populations as well, with masjids spread across the city and county.
              </p>
              <p>
                St. Louis's practical challenge is its genuinely changeable Midwest weather and its layout across two states. Summers bring thick, sticky humidity, while winters can swing between mild days and sudden ice storms that make driving treacherous with little warning. On top of that, the metro spans both the Missouri side and the Illinois side of the Mississippi River, and a family in the Metro East communities may find a masjid across the river more of a project than a quick errand. Online Quran education removes both the weather risk and the river crossing entirely.
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
              Why Online Works for St. Louis Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why St. Louis Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">No River Crossing Required</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Whether you're in south St. Louis or across the river in Metro East Illinois, online classes remove the crossing entirely. Your child opens Zoom at home, and the lesson begins right on time.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Weather-Proof Scheduling</h3>
                <p className="text-grey text-sm leading-relaxed">
                  A sudden ice storm or a sticky heat wave doesn't have to mean a missed class. Online lessons happen on schedule regardless of what Missouri weather is doing that day.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Proud to Serve Every Community</h3>
                <p className="text-grey text-sm leading-relaxed">
                  From St. Louis's remarkable Bosnian community to South Asian and Arab families across the metro, Ease Quran teaches every student in clear English, wherever their family's story began.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20St%20Louis%20Missouri" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Quran Classes for Kids and Adults in St. Louis
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across the St. Louis metro.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from St. Louis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Central Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your St. Louis-area family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for a Quran Teacher Near You in St. Louis?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in St. Louis, the best
              teacher for your child may not be the closest one on the map, especially once the
              Mississippi River is part of the commute. Because every Ease Quran class is live and
              online, St. Louis families connect one-on-one with certified teachers without driving
              anywhere. You get the convenience of a teacher right in your home, with none of the
              commute, parking, or fixed group schedule of a local center.
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
                Frequently Asked Questions. St. Louis, Missouri
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
        headline="Certified Quran Education Across Greater St. Louis"
        subtext="From south St. Louis to the Metro East communities across the river. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in St Louis Missouri"
      />
    </>
  );
}
