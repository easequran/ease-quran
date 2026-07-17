import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";

export const metadata: Metadata = {
  title: "Online Quran Classes in Alaska",
  description:
    "Certified online Quran classes for Muslim families across Alaska, including Anchorage. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/alaska",
  },
  openGraph: {
    title: "Online Quran Classes in Alaska | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Alaska, including Anchorage and every smaller Alaskan community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Alaska", item: "https://easequran.com/locations/alaska" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description: "Certified online Quran classes for Muslim families throughout Alaska.",
  areaServed: { "@type": "State", name: "Alaska" },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Alaska isn't connected to the other states by road. Does that complicate scheduling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It doesn't, but it's a fair question given Alaska's geography. There's no driving here from the Lower 48 without first crossing into Canada, and Alaska runs on its own time zone, an hour behind the Pacific coast. We confirm your child's exact class time in Alaska Time at booking, so none of that geography ever touches your actual schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a Muslim community in Anchorage I should know about?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anchorage has Alaska's main mosque and the state's largest concentration of Muslim families, though it remains a small community by Lower 48 standards. Families further out, from Fairbanks to towns with no mosque for hundreds of miles, have even less nearby, which is exactly the gap online classes are built to close.",
      },
    },
    {
      "@type": "Question",
      name: "Why do you list Seattle as our nearest Ease Quran city if it's over a thousand miles away?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because it genuinely is the closest Metro Tier page we have, even at roughly 1,500 miles, more realistically a flight than a drive. That distance is precisely the point: no other state we serve is this far from the next nearest one, which is why an online teacher, not a physical school, is the realistic option for most Alaska families.",
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
    question: "Alaska isn't connected to the other states by road. Does that complicate scheduling?",
    answer:
      "It doesn't, but it's a fair question given Alaska's geography. There's no driving here from the Lower 48 without first crossing into Canada, and Alaska runs on its own time zone, an hour behind the Pacific coast and up to four hours behind the East Coast. We confirm your child's exact class time in Alaska Time at booking and again before each session, so none of that geography ever touches your actual schedule.",
  },
  {
    question: "Is there a Muslim community in Anchorage I should know about?",
    answer:
      "Anchorage is home to Alaska's main mosque and the state's largest concentration of Muslim families, though it remains a small community by Lower 48 standards. Families further out, from Fairbanks to towns with no mosque within hundreds of miles, have even less nearby. Rather than claim a specific number of students we can't verify, we'd simply invite you to be one of our first Anchorage-area families and judge the quality yourself with a free trial.",
  },
  {
    question: "Why do you list Seattle as our nearest Ease Quran city if it's over a thousand miles away?",
    answer:
      "Because it genuinely is the closest Metro Tier page we have, even at roughly 1,500 miles, more realistically a flight away than a drive. No other state we serve sits this far from its nearest neighbor. That distance is exactly why an online teacher, not a physical school anywhere in the Lower 48, is the realistic option for most Alaska families.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required, so you can experience a lesson before committing to anything.",
  },
];

export default function AlaskaPage() {
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
              <li className="text-white/80">Alaska</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving All of Alaska
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Alaska
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in Alaska, from Anchorage to the state's smallest communities. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Free Trial Class
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Alaska" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center">
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
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving Anchorage &amp; Every Alaskan Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in Alaska
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Alaska is unlike every other state we serve in one specific way: there is no driving here from the rest of the country without first crossing into Canada. That's not a figure of speech, it's the literal geography every Alaska family lives with, and it shapes everything from grocery prices to how far away the nearest mosque actually is. Anchorage holds the largest concentration of Alaska's Muslim community and the state's main mosque, but families in Fairbanks or smaller towns can be hundreds of miles from any Islamic institution at all. Add Alaska's own time zone, a full hour behind the Pacific coast and up to four hours behind the East Coast, and coordinating anything in real time with the Lower 48 takes real effort.
              </p>
              <p>
                Our{" "}
                <Link href="/locations/seattle" className="text-gold font-semibold hover:underline">Seattle location page</Link>{" "}
                is genuinely the nearest Metro Tier community we serve, but "nearest" is relative here: Anchorage to Seattle is still roughly 1,500 miles, a flight rather than a drive. That distance is exactly why online classes make more sense for Alaska than almost anywhere else on this site. A certified teacher reaches your child in one video call, no border crossing and no flight required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Our Curriculum</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">Courses for Alaska Families</h2>
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
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Questions</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">Frequently Asked Questions. Alaska</h2>
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
        headline="Certified Quran Education for Alaska Families"
        subtext="From Anchorage to the smallest Alaskan community. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Alaska"
      />
    </>
  );
}
