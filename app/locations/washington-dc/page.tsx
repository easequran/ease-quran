import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Washington, D.C.",
  description:
    "Certified online Quran classes for Muslim families in Washington, D.C. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/washington-dc",
  },
  openGraph: {
    title: "Online Quran Classes in Washington, D.C. | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across the DMV area, serving Alexandria, Falls Church, Fairfax, and Silver Spring.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Washington, D.C.", item: "https://easequran.com/locations/washington-dc" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in the Washington D.C. metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Washington",
    containedInPlace: { "@type": "State", name: "District of Columbia" },
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
      name: "Can I find Quran classes near me in Washington, D.C.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in D.C., our online classes serve any family in the DMV area searching for Quran classes or teachers near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families in Virginia and Maryland suburbs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve the entire DMV area including Alexandria, Falls Church, Fairfax, Arlington, Sterling, Herndon, Silver Spring, Rockville, and Gaithersburg. Online classes serve the whole region equally.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Ease Quran different from local D.C.-area Islamic schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our classes are one-on-one, online, and scheduled around your life. Unlike classroom settings at local Islamic centers, your child receives the teacher's full, undivided attention every session. Progress is faster and more consistent.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. D.C.-area families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female teacher for sisters in the D.C. area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many DMV families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accommodate the diplomatic and international community in D.C.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We welcome families from every background, including the many diplomatic, academic, and international families that call the D.C. area home. Our flexible online scheduling works well for families who travel or relocate frequently.",
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
    question: "Can I find Quran classes near me in Washington, D.C.?",
    answer:
      "Yes. While we are not a physical school in D.C., our online classes work for any family in the DMV area searching for Quran classes, a Quran teacher, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any travel.",
  },
  {
    question: "Do you serve families in Virginia and Maryland suburbs?",
    answer:
      "Yes. We serve the entire DMV region including Alexandria, Falls Church, Fairfax, Arlington, Sterling, Herndon, Reston, Silver Spring, Rockville, Gaithersburg, and Beltsville. Since all classes are online via Zoom, your location anywhere in the D.C., Virginia, or Maryland area is no barrier whatsoever.",
  },
  {
    question: "What makes Ease Quran different from local D.C.-area Islamic schools?",
    answer:
      "Our classes are fully one-on-one, conducted online, and scheduled entirely around your family's life. Unlike weekend Islamic school classrooms where a teacher divides attention among many students, your child receives 100% individual focus every session. There is no commuting through Beltway traffic, no group class dynamics, and no rigid fixed schedule that doesn't fit your week.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. D.C.-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female teacher for sisters in the D.C. area?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many DMV families from the South Asian, Arab, and African Muslim communities specifically request her for their daughters and wives, and we are proud to provide this important option. Simply indicate your preference when booking.",
  },
  {
    question: "Do you accommodate the diplomatic and international community in D.C.?",
    answer:
      "Yes. We warmly welcome families from every background, including the many diplomatic, academic, and international families who call the Washington D.C. area home. Our flexible online scheduling accommodates families who travel frequently or relocate on short notice, and all instruction is conducted in clear, accessible English.",
  },
];

export default function WashingtonDCPage() {
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
              <li className="text-white/80">Washington, D.C.</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving the DMV Area
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Washington, D.C.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across the DMV. From Alexandria and Falls Church to Silver Spring and Sterling, quality Quran instruction delivered to your home, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Washington%20DC"
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
              The DMV's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Diverse, Established Muslim Community in the Nation's Capital
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                The Washington D.C. metropolitan area, encompassing D.C., Northern Virginia, and suburban Maryland, is home to one of the most diverse and well-established Muslim communities in the United States, with an estimated population well over 250,000 across the region. The DMV's Muslim community reflects the international character of the nation's capital, with large numbers of South Asian, Arab, African, and convert Muslims, alongside significant numbers of diplomatic, academic, and government-affiliated families. Northern Virginia, particularly Alexandria, Falls Church, and Fairfax, is home to some of the largest and most active masjids in the country, drawing worshippers from across the region. Sterling and Herndon in Loudoun County have a rapidly growing South Asian Muslim population, while Silver Spring, Rockville, and Gaithersburg in Maryland host thriving, multigenerational Muslim communities. The DMV's proximity to embassies, universities, and international organizations also means many Muslim families are here temporarily or move frequently, making flexible, portable Quran education especially valuable.
              </p>
              <p>
                The challenge for DMV Muslim families is the region's infamous traffic. The Capital Beltway, I-66, and the region's congested arterial roads can turn a short drive into an hour-long ordeal, especially during rush hour. A family in Sterling wanting to reach an Islamic center in Alexandria might face significant delays on any given weekday evening. Weekend Islamic schools are concentrated around specific masjids and may not suit families who live across the sprawling metro area, or who split time between D.C. and nearby states. Online Quran education solves this problem completely, bringing certified instruction to every DMV household without a single mile of Beltway traffic.
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
              Why Online Works for DMV Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why D.C.-Area Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Skip the Beltway Altogether</h3>
                <p className="text-grey text-sm leading-relaxed">
                  D.C.-area traffic is legendary, and driving your child to an Islamic center across the Beltway after school or work is a real time cost. Online classes eliminate that entirely. Your child opens Zoom at home, and the lesson begins, right on schedule.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Faster Progress with Private Classes</h3>
                <p className="text-grey text-sm leading-relaxed">
                  In a one-on-one class, the teacher corrects every single mistake immediately and moves at your child's optimal pace. There is no waiting for slower students or being left behind by faster ones. DMV families consistently report that their children advance faster in private online lessons than they ever did in group settings.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Welcoming All Muslim Communities</h3>
                <p className="text-grey text-sm leading-relaxed">
                  The DMV's Muslim community spans South Asian, Arab, African, and international diplomatic families. Ease Quran is a welcoming space for every Muslim family, regardless of cultural background or how often you relocate. All instruction is in clear English, making it accessible for families across the region's diverse Muslim community.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Washington%20DC" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Courses Available for DMV Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across the Washington D.C. metro area.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Washington, D.C.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Eastern Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your DMV family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for Quran Classes Near You in Washington, D.C.?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in the D.C. area, the best
              teacher for your child may not be the closest one on the map. Because every Ease Quran
              class is live and online, DMV families connect one-on-one with certified teachers
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
                Frequently Asked Questions. Washington, D.C.
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
        headline="Certified Quran Education Across the DMV"
        subtext="From Alexandria and Falls Church to Silver Spring and Sterling. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Washington DC"
      />
    </>
  );
}
