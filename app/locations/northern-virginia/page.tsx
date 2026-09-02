import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Northern Virginia",
  description:
    "Certified online Quran classes for Muslim families in Northern Virginia. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/northern-virginia",
  },
  openGraph: {
    title: "Online Quran Classes in Northern Virginia | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Fairfax County, Tysons, Reston, and Alexandria, built for the DC-area commuter lifestyle.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Northern Virginia", item: "https://easequran.com/locations/northern-virginia" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families across Northern Virginia.",
  areaServed: {
    "@type": "City",
    name: "Northern Virginia",
    containedInPlace: { "@type": "State", name: "Virginia" },
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
      name: "Can I find a Quran teacher near me in Northern Virginia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Northern Virginia, our online Quran academy serves any family across Fairfax, Loudoun, and Arlington searching for a Quran teacher near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Northern Virginia's Afghan and South Asian communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Northern Virginia is home to one of the largest Afghan American communities in the country, alongside significant South Asian and Arab populations. We welcome every family and teach in clear English.",
      },
    },
    {
      "@type": "Question",
      name: "Can classes work around federal and government-contractor schedules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many Northern Virginia parents work demanding federal, defense, or tech-contractor jobs. Classes reschedule easily around a long day and are booked in Eastern Time.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Northern Virginia families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female Quran teacher for sisters in Northern Virginia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many Northern Virginia families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families in Tysons, Reston, and Alexandria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve the entire Northern Virginia region, including Tysons, Reston, Alexandria, Arlington, and Loudoun County. Since classes are online, Beltway traffic is never a barrier.",
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
    question: "Can I find a Quran teacher near me in Northern Virginia?",
    answer:
      "Yes. While we are not a physical school in Northern Virginia, our online Quran academy works for any family across Fairfax County, Loudoun County, Arlington, or Alexandria searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, no Beltway traffic involved.",
  },
  {
    question: "Do you serve Northern Virginia's Afghan and South Asian communities?",
    answer:
      "Yes. Northern Virginia, particularly around Alexandria and Fairfax, is home to one of the largest Afghan American communities in the country, alongside deeply established South Asian, Arab, and East African Muslim populations drawn by the region's federal, defense, and tech sectors. We welcome families from every background, and all instruction is delivered in clear, simple English.",
  },
  {
    question: "Can classes work around federal and government-contractor schedules?",
    answer:
      "Yes. A significant share of Northern Virginia's Muslim parents work in federal government, defense contracting, or the tech corridor around Tysons and Reston, jobs that often come with unpredictable hours, security clearances that limit flexibility, and long commutes on I-66 or the Beltway. A fixed weekly class at a set time can be genuinely hard to guarantee. Online classes reschedule easily around a demanding job, and we run everything in Eastern Time to keep booking simple.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Northern Virginia Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Northern Virginia?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Northern Virginia families specifically request her for their daughters, and we are proud to offer this option. Simply mention your preference when booking your free trial.",
  },
  {
    question: "Do you serve families in Tysons, Reston, and Alexandria?",
    answer:
      "Yes. We serve the entire Northern Virginia region, including Tysons, Reston, Alexandria, Arlington, Fairfax, and Loudoun County. Since all classes are conducted online via Zoom, the notorious Beltway traffic between these areas is simply never a factor.",
  },
];

export default function NorthernVirginiaPage() {
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
              <li className="text-white/80">Northern Virginia</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Fairfax, Loudoun &amp; Arlington
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Northern Virginia
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Tysons, Reston, Alexandria, and Fairfax County. Built for the demanding schedules of a federal, defense, and tech-driven region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Northern%20Virginia"
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
              Northern Virginia's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Home to One of America's Largest Afghan American Communities
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Northern Virginia is home to one of the largest Afghan American communities in the country, concentrated particularly around Alexandria and Fairfax County, alongside deeply rooted South Asian, Arab, and East African Muslim populations. The region's proximity to Washington DC has drawn generations of Muslim families working in federal government, international development, defense, and more recently the tech corridor stretching from Tysons through Reston and Ashburn. It's a community defined as much by professional achievement as by cultural depth, with mosques and Islamic centers serving a genuinely international mix of families.
              </p>
              <p>
                The specific challenge for Northern Virginia families is the region's uniquely demanding combination of careers and traffic. Federal and defense-related jobs often come with security clearances, unpredictable hours, and long commutes on I-66, the Dulles Toll Road, or the Capital Beltway, some of the most congested roadways in the country. A parent stuck in Beltway traffic after a long day at the Pentagon or a downtown DC office has little room left for a fixed evening class across town. Online Quran education adapts to that reality directly, meeting families wherever their demanding careers actually leave them.
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
              Why Online Works for Northern Virginia Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Northern Virginia Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Beats Beltway Traffic</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Some of the country's worst traffic runs through Northern Virginia every single evening. Online classes remove the drive entirely. Your child opens Zoom at home, and the lesson begins right on time.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Fits Federal and Tech Careers</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Security clearances, unpredictable hours, and demanding deadlines are part of life for many Northern Virginia parents. Classes reschedule easily around a career that doesn't run on a fixed clock.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Welcoming Every Community</h3>
                <p className="text-grey text-sm leading-relaxed">
                  From Northern Virginia's large Afghan American community to South Asian, Arab, and East African families, Ease Quran teaches every student in clear English, whatever their family's background.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Northern%20Virginia" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Quran Classes for Kids and Adults in Northern Virginia
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across Fairfax, Loudoun, and Arlington.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Northern Virginia</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Eastern Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Northern Virginia family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for a Quran Teacher Near You in Northern Virginia?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Northern Virginia, the
              best teacher for your child may not be the closest one on the map, especially once the
              Beltway is involved. Because every Ease Quran class is live and online, Northern Virginia
              families connect one-on-one with certified teachers without driving anywhere. You get the
              convenience of a teacher right in your home, with none of the commute, parking, or fixed
              group schedule of a local center.
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
                Frequently Asked Questions. Northern Virginia
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
        headline="Certified Quran Education Across Northern Virginia"
        subtext="From Tysons and Reston to Alexandria and Arlington. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Northern Virginia"
      />
    </>
  );
}
