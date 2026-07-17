import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Los Angeles, California",
  description:
    "Certified online Quran classes for Muslim families in Los Angeles, California. Wifaq ul Madaris certified teachers, free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/los-angeles",
  },
  openGraph: {
    title: "Online Quran Classes in Los Angeles, California | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across the LA metro. Culver City, Inglewood, Pomona, and beyond.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes in Los Angeles, California, Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Los Angeles", item: "https://easequran.com/locations/los-angeles" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in Los Angeles and the greater LA metro area.",
  areaServed: {
    "@type": "City",
    name: "Los Angeles",
    containedInPlace: { "@type": "State", name: "California" },
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
      name: "Can I find Quran classes near me in Los Angeles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Los Angeles, our online classes serve any family in the Los Angeles area searching for Quran classes or teachers near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve all parts of the LA metro, including the San Gabriel Valley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve the entire Los Angeles metropolitan area. Culver City, Inglewood, Pomona, the San Gabriel Valley, the South Bay, Orange County, and everywhere in between. Online classes mean your location in the vast LA metro doesn't limit your access.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have experience with reverts (new Muslims) in Los Angeles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Los Angeles has a significant and growing revert community, and we welcome adult learners who are new to Islam or learning Quran for the first time. Our teachers are experienced, non-judgmental, and begin exactly where you are.",
      },
    },
    {
      "@type": "Question",
      name: "How do online classes work, do I need special equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You only need a smartphone, tablet, or laptop with Zoom installed and a stable internet connection. Classes are live, interactive, and conducted with video and audio so your child can read and be corrected in real time.",
      },
    },
    {
      "@type": "Question",
      name: "Is a female teacher available for sisters in Los Angeles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima, our certified female Quran teacher, is available for sisters and children. You can request her when booking your free trial class.",
      },
    },
    {
      "@type": "Question",
      name: "What are the available time slots for Pacific Time families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible Pacific Time scheduling including after-school (3–6 PM PT), evening, and weekend slots. We accommodate LA families' often non-standard schedules and can work with early morning slots as well.",
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
    question: "Can I find Quran classes near me in Los Angeles?",
    answer:
      "Yes. While we are not a physical school in Los Angeles, our online classes work for any family in the Los Angeles area searching for Quran classes, a Quran teacher, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any travel.",
  },
  {
    question: "Do you serve all parts of the LA metro, including the San Gabriel Valley?",
    answer:
      "Yes. We serve the entire Los Angeles metropolitan area. Culver City, Inglewood, Pomona, the San Gabriel Valley, Torrance, the South Bay, Anaheim, and everywhere in between. Because classes are conducted via Zoom, the vast geographic spread of LA County is not a barrier. Families from as far as Riverside and San Bernardino also join us regularly.",
  },
  {
    question: "Do you have experience with reverts (new Muslims) in Los Angeles?",
    answer:
      "Yes. Los Angeles has a significant and growing revert community, and we warmly welcome adult learners who are new to Islam or learning Quran for the first time. Our teachers create a completely supportive, non-judgmental environment where you can begin from the very basics. Arabic letters, pronunciation, and Noorani Qaida, with full patience and encouragement.",
  },
  {
    question: "How do online classes work, do I need special equipment?",
    answer:
      "You only need a smartphone, tablet, or laptop with Zoom installed, and a stable internet connection. Classes are fully live and interactive, your child reads aloud, the teacher listens and corrects in real time, just as they would in a physical classroom. No special hardware is required.",
  },
  {
    question: "Is a female teacher available for sisters in Los Angeles?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many LA-area families specifically request her for their daughters, and we are pleased to provide this option. Simply mention it when booking your free trial.",
  },
  {
    question: "What are the available time slots for Pacific Time families?",
    answer:
      "We offer flexible Pacific Time scheduling including after-school slots (3–6 PM PT), evening sessions, and weekend morning and afternoon options. We know LA families often have non-standard schedules, shift work, entertainment industry hours, long commutes, and we do our best to accommodate your specific situation.",
  },
];

export default function LosAngelesPage() {
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
              <li className="text-white/80">Los Angeles, CA</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving Greater Los Angeles
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Los Angeles, California
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified Quran education delivered to your home anywhere in the LA metro, from Culver City and Inglewood to Pomona, the San Gabriel Valley, and beyond. One-on-one, expert instruction without the legendary LA traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Los%20Angeles"
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
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Los Angeles's Muslim Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              A Vast and Growing Muslim Presence Across the LA Metro
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Los Angeles, California is home to one of the most geographically dispersed Muslim communities in the United States, with an estimated population exceeding 500,000 Muslims spread across a metro area that covers thousands of square miles. LA's Muslim community is remarkably diverse and includes well-established South Asian communities in communities like Artesia and Pomona, Iranian-American Muslims across the west side and Valley, Arab communities in various parts of LA County, and a growing African American Muslim presence across South LA. The Inglewood and Culver City areas have long been home to active Islamic centers and masjids, while the San Gabriel Valley hosts a growing Pakistani and Bangladeshi Muslim presence. Notably, Los Angeles also has one of the largest and most active revert (convert) Muslim communities in the nation, reflecting the city's diverse, open culture.
              </p>
              <p>
                The challenge facing LA's Muslim families is perhaps the most acute of any major American city: the geography is simply enormous and the traffic is world-famous. Getting from, say, Pomona to an Islamic center in Culver City is not a 20-minute errand, it can be a two-hour ordeal during peak hours on the 10 freeway. Weekend Islamic schools in areas like Inglewood or Torrance may serve nearby families well, but they are essentially out of reach for families in the eastern suburbs. This is precisely why so many LA-area Muslim families have embraced online Quran education, not as a compromise, but as a genuinely superior solution that delivers the same certified, expert instruction without the punishing commute.
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
              Why Online Works for LA Families
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-10">
              Why Los Angeles Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Escape LA's Famous Traffic</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Los Angeles has some of the worst traffic congestion in the world. A 15-mile trip to an Islamic center can consume 90 minutes during evening rush hour. Online classes mean your child learns Quran from home, no freeway stress, no fighting for parking, no late arrivals after sitting in gridlock.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Access Regardless of Your Part of LA</h3>
                <p className="text-grey text-sm leading-relaxed">
                  LA's Islamic centers are unevenly distributed across its vast geography. Families in Pomona, Lancaster, or Palmdale have far fewer local options than those near Culver City or Inglewood. Online classes level the playing field, every Muslim family in every corner of LA County gets the same top-quality certified instruction.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Designed for Reverts and Beginners</h3>
                <p className="text-grey text-sm leading-relaxed">
                  LA's large revert community includes many adults who are beginning Quran education with no prior Arabic background. Our teachers are trained specifically for complete beginners and create a warm, supportive environment where adults can start their Quran journey without embarrassment or judgment.
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
            <span className="text-white/70"> &middot; most families choose $79/month for 12 classes &middot; </span>
            <span className="text-gold font-semibold">first class free &rarr;</span>
          </Link>

          <WhatsAppReviewsRow heading="Real Students, Real Results" subline="We've taught Western, English-speaking students across the UK and USA." />

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-colors text-sm text-center">
              Book Free Trial Class
            </Link>
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Los%20Angeles" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Our Curriculum</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Courses Available for LA Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Whether you're a revert learning for the first time, a parent enrolling your child, or an adult wanting to improve your recitation, we have the right course for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "Start from zero, learn Arabic letters, vowel sounds, and basic Quran reading fundamentals with expert guidance.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Develop proper Tajweed and fluent Quran recitation through structured, progressive lessons.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "Structured Hifz program for motivated students ready to commit to memorizing the Quran.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Islamic beliefs, prayer, manners, and Seerah, presented in an engaging, relatable way for young American Muslims.", href: "/courses/islamic-studies" },
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">How to Get Started from Los Angeles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Contact Us. No Commute Required", desc: "Book online or WhatsApp us. Tell us about your child or yourself, level, age, and your preferred schedule in Pacific Time. We'll match you with the right certified teacher." },
                { step: "02", title: "Free One-on-One Trial Class", desc: "Join a complimentary live Zoom session with your teacher. Experience the curriculum, the teaching style, and the personal attention, completely free, no strings attached." },
                { step: "03", title: "Start Your Weekly Schedule", desc: "Love the class? We'll establish a weekly recurring schedule that fits your LA life. Consistent, reliable, and 100% from your own home." },
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

      {/* Near Me */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Quran Classes Near You
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Looking for Quran Classes Near You in Los Angeles?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Los Angeles, the best
              teacher for your child may not be the closest one on the map. Because every Ease Quran
              class is live and online, Los Angeles families connect one-on-one with certified teachers
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
                Frequently Asked Questions. Los Angeles, California
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
        headline="Quran Education Without the LA Traffic"
        subtext="Serving Muslim families across the entire Los Angeles metro, from Inglewood to Pomona, Culver City to the San Gabriel Valley. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Los Angeles"
      />
    </>
  );
}
