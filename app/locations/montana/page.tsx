import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";

export const metadata: Metadata = {
  title: "Online Quran Classes in Montana",
  description:
    "Certified online Quran classes for Muslim families across Montana, including Billings. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/montana",
  },
  openGraph: {
    title: "Online Quran Classes in Montana | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Montana, including Billings and every smaller Montana community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Montana", item: "https://easequran.com/locations/montana" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description: "Certified online Quran classes for Muslim families throughout Montana.",
  areaServed: { "@type": "State", name: "Montana" },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Montana and Wyoming are neighbors. Is the situation the same in both?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not quite. Montana is the 4th-largest state by land area and borders Canada, and Billings sits over 550 miles from Denver, our nearest Metro Tier city, considerably further than Wyoming's Cheyenne is from that same city. Montana families are, on average, dealing with more remoteness than their Wyoming neighbors, not less.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have students in Billings already?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're actively welcoming Montana families right now. Rather than claim a number we can't verify, we'd invite you to be one of our first Billings-area students with a free trial class.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle Montana's size and low population density?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply by not letting it matter. Montana is one of the largest states in the country by land area and one of the least densely populated, with a family's nearest mosque sometimes genuinely hours away by car. Since all classes are online, exactly how far your town is from Billings or the Canadian border is never a barrier.",
      },
    },
    {
      "@type": "Question",
      name: "How much do classes cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Montana and Wyoming are neighbors. Is the situation the same in both?",
    answer:
      "Not quite, even though the two states get lumped together often. Montana is the 4th-largest state in the country by land area and shares a long border with Canada, and Billings sits more than 550 miles from Denver, our nearest Metro Tier city, considerably further than Wyoming's Cheyenne is from that same Denver page. On average, Montana families are dealing with more genuine remoteness than their Wyoming neighbors, not less.",
  },
  {
    question: "Do you have students in Billings already?",
    answer:
      "We're actively welcoming Montana families right now. Rather than claim a specific number we can't verify, we'd simply invite you to be one of our first Billings-area students and see the quality for yourself with a free trial class.",
  },
  {
    question: "How do you handle Montana's size and low population density?",
    answer:
      "Simply by not letting it matter. Montana is one of the largest states in the country by land area and one of the least densely populated, and a family's nearest mosque can genuinely be hours away by car, sometimes with the Canadian border closer than the next Muslim family. Since all classes are conducted online via Zoom, exactly how far your town is from Billings, or from anything, is never a barrier to consistent Quran instruction.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required, so you can experience a lesson before committing to anything.",
  },
];

export default function MontanaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><Link href="/locations" className="hover:text-gold transition-colors">Locations</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">Montana</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving All of Montana
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Montana
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in Montana, from Billings to the state's most remote towns. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Free Trial Class
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Montana" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center">
                Chat on WhatsApp
              </a>
            </div>
            <TrustBadges dark />
          </div>
        </div>
      </section>

      <TeacherStrip />

      {/* Community & Hyperlocal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">
              Serving Billings &amp; Every Montana Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in Montana
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Montana is the 4th-largest state in the country by land area and shares a long northern border with Canada, and its Muslim community is genuinely small and scattered across that vastness, with families sometimes hundreds of miles apart. It's easy to lump Montana in with neighboring Wyoming, but the two aren't quite the same: Billings sits more than 550 miles from Denver, our nearest Metro Tier city, a considerably longer distance than Wyoming's Cheyenne has to cover to reach that same page.
              </p>
              <p>
                Even at that distance, our{" "}
                <Link href="/locations/denver-colorado" className="text-gold font-semibold hover:underline">Denver location page</Link>{" "}
                remains the nearest Metro Tier community we serve. Our online classes reach you directly in Montana regardless, no drive to Denver, or anywhere else, required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">Our Curriculum</span>
            <h2 className="heading-2 text-navy mb-6">Courses for Montana Families</h2>
            <p className="text-grey leading-relaxed mb-6">
              From Noorani Qaida for first-time readers to Tajweed, Hifz, and Islamic Studies, every course is one-on-one and taught by a Wifaq ul Madaris certified scholar. Visit our{" "}
              <Link href="/courses" className="text-gold font-semibold hover:underline">full courses page</Link>{" "}
              to see everything available, including options for kids, adults, and reverts.
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
              <h2 className="heading-2 text-navy">Frequently Asked Questions. Montana</h2>
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
        headline="Certified Quran Education for Montana Families"
        subtext="From Billings to the most remote Montana town. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Montana"
      />
    </>
  );
}
