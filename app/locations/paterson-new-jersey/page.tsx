import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Paterson, New Jersey",
  description:
    "Certified online Quran classes for Muslim families in Paterson, NJ. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/paterson-new-jersey",
  },
  openGraph: {
    title: "Online Quran Classes in Paterson, New Jersey | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Paterson, home to one of the largest Arab American communities in the United States.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Paterson, New Jersey", item: "https://easequran.com/locations/paterson-new-jersey" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families across the Paterson, New Jersey area.",
  areaServed: {
    "@type": "City",
    name: "Paterson",
    containedInPlace: { "@type": "State", name: "New Jersey" },
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
      name: "Can I find a Quran teacher near me in Paterson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Paterson, our online Quran academy serves any family in South Paterson and across the city searching for a Quran teacher near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Paterson's Arab American and Palestinian community?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Paterson is home to one of the largest Arab American communities in the country, including a significant Palestinian population centered around South Paterson. We are proud to serve this community alongside every other Muslim family in the city.",
      },
    },
    {
      "@type": "Question",
      name: "Can classes work around family business hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many Paterson families run halal restaurants, markets, or shops with evening and weekend hours. Classes are booked around your actual schedule in Eastern Time, not a fixed slot that assumes a typical 9-to-5.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Paterson families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female Quran teacher for sisters in Paterson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many Paterson families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families across Passaic County, not just Paterson itself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve families throughout Paterson and the surrounding Passaic County communities, including Clifton and Passaic. Since classes are online, exactly which street or neighborhood you live on is never a barrier.",
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
    question: "Can I find a Quran teacher near me in Paterson?",
    answer:
      "Yes. While we are not a physical school in Paterson, our online Quran academy works for any family in South Paterson or anywhere else in the city searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, no hunting for street parking near a masjid required.",
  },
  {
    question: "Do you serve Paterson's Arab American and Palestinian community?",
    answer:
      "Yes. Paterson is home to one of the largest and most historic Arab American communities in the United States. South Paterson, the stretch along Main Street and Union Avenue sometimes called Little Ramallah, has a large Palestinian population alongside Lebanese, Syrian, Egyptian, Yemeni, and Turkish families who have built mosques, halal markets, and businesses here across generations. We are proud to serve this community, and every other Muslim family in Paterson, with instruction in clear English.",
  },
  {
    question: "Can classes work around family business hours?",
    answer:
      "Yes. A meaningful number of Paterson's Muslim families run their own halal restaurants, grocery stores, or retail shops, businesses that stay open through the evening and on weekends, exactly when a typical in-person class would be scheduled. A fixed weekly slot at a set time rarely works for a family minding the register at 7 PM. We book classes around your actual schedule, run in Eastern Time, whatever shape that takes.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Paterson families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Paterson?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Paterson families, particularly within the city's large Arab community, specifically request her for their daughters. Simply mention your preference when booking your free trial.",
  },
  {
    question: "Do you serve families across Passaic County, not just Paterson itself?",
    answer:
      "Yes. We serve families throughout Paterson and the surrounding Passaic County communities, including Clifton, Passaic, and Prospect Park. Since all classes are conducted online via Zoom, exactly which street or neighborhood you call home makes no difference at all.",
  },
];

export default function PatersonNewJerseyPage() {
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
              <li className="text-white/80">Paterson, New Jersey</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Paterson &amp; Passaic County
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Paterson, New Jersey
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Paterson, home to one of the largest Arab American communities in the United States. Quality Quran instruction delivered to your home, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Paterson%20New%20Jersey"
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
              Paterson's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Home to One of America's Largest Arab American Communities
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Paterson, once known nationwide as "Silk City" for the textile mills that built the city in the 19th century, is today home to one of the largest and most historic Arab American communities in the United States. South Paterson, the stretch along Main Street and Union Avenue sometimes called Little Ramallah, has a large and deeply rooted Palestinian population, alongside significant Lebanese, Syrian, Egyptian, Yemeni, and Turkish families who began arriving generations ago and have built a dense network of mosques, halal markets, bakeries, and businesses that give the neighborhood a genuinely distinct character. It's one of the most concentrated and long-standing Arab Muslim communities anywhere in the country.
              </p>
              <p>
                The everyday challenge for Paterson's Muslim families is less about distance and more about how the city actually runs. Street parking near South Paterson's mosques and shops is genuinely scarce, especially in the evening, and a significant number of families here run their own restaurants, grocery stores, or retail businesses that stay open through the evening and on weekends, exactly the hours a typical in-person class would ask for. A parent minding the register at 7 PM can't easily also get a child to a fixed class across town. Online Quran education removes both problems, no parking spot to find and no business to close early.
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
              Why Online Works for Paterson Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Paterson Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">No Hunting for Street Parking</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Evening parking near South Paterson's mosques and shops is genuinely hard to find. Online classes remove that entirely. Your child opens Zoom at home, and the lesson begins right on time.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Built for Family Business Hours</h3>
                <p className="text-grey text-sm leading-relaxed">
                  If your family runs a shop, restaurant, or market with evening and weekend hours, a fixed class time rarely fits. We book around your actual schedule instead.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Proud to Serve a Historic Community</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Paterson's Arab American community is one of the most established in the country. Ease Quran is honored to serve these families, and every Muslim family in the city, in clear English.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Paterson%20New%20Jersey" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Quran Classes for Kids and Adults in Paterson
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across Paterson and Passaic County.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Paterson</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Eastern Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Paterson family, business hours and all. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for a Quran Teacher Near You in Paterson?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Paterson, the best
              teacher for your child may not be the closest one on the map, especially with parking
              this tight around South Paterson. Because every Ease Quran class is live and online,
              Paterson families connect one-on-one with certified teachers without driving or parking
              anywhere. You get the convenience of a teacher right in your home, with none of the
              commute or fixed group schedule of a local center.
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
                Frequently Asked Questions. Paterson, New Jersey
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
        headline="Certified Quran Education Across Paterson and Passaic County"
        subtext="From South Paterson to Clifton and Passaic. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Paterson New Jersey"
      />
    </>
  );
}
