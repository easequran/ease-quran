import type { Metadata } from "next";
import Link from "next/link";
import ReviewCard from "@/components/ReviewCard";
import LiteYouTube from "@/components/LiteYouTube";
import CTASection from "@/components/CTASection";
import { familyReviews } from "@/lib/reviews";
import { videos } from "@/components/proof";

const PAGE_URL = "https://easequran.com/reviews";

export const metadata: Metadata = {
  title: { absolute: "Reviews From Parents and Students | Ease Quran" },
  description:
    "Real WhatsApp messages from US parents and adult students after their Quran classes with Ease Quran, shown with the original screenshots and shared with permission.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Reviews From Parents and Students | Ease Quran",
    description:
      "Real WhatsApp messages from US families after their Quran classes, shown with the original screenshots.",
    url: PAGE_URL,
    type: "website",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Ease Quran reviews from parents and students" }],
  },
};

// No Review/AggregateRating markup on purpose: Google does not show review
// stars for reviews a business publishes about itself.
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: PAGE_URL },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">Reviews</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">In Their Own Words</span>
            <h1 className="heading-1 text-white mb-6">What Families Say About Ease Quran</h1>
            <p className="text-white/75 text-lg leading-relaxed">
              After a trial class, we ask every family how it went. These are some of the replies
              we have received from parents and students in the United States, shared with their
              permission.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="heading-3 text-navy mb-3">Messages From US Families</h2>
            <p className="text-grey text-sm leading-relaxed">
              Each message appears as it was sent. We only trim a greeting or an unrelated line,
              marked with &hellip;, and any word we add is shown in [brackets]. Open the original
              WhatsApp screenshot under each one to see the full conversation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
            {familyReviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="heading-3 text-navy mb-3">Video Messages From Our Students</h2>
            <p className="text-grey text-sm leading-relaxed">
              We also teach English-speaking students outside the US. These two students, both in
              the UK, recorded short videos about their classes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videos.map((v) => (
              <LiteYouTube key={v.id} id={v.id} caption={v.caption} title={v.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-3 text-navy mb-4">See It for Yourself</h2>
            <p className="text-grey leading-relaxed mb-6">
              The best way to judge a teacher is a class of your own. Your first class is free, and
              you can explore our{" "}
              <Link href="/courses" className="text-gold font-semibold hover:underline">courses</Link>,{" "}
              <Link href="/courses/quran-for-kids" className="text-gold font-semibold hover:underline">Quran classes for kids</Link>{" "}
              and{" "}
              <Link href="/courses/quran-for-adults" className="text-gold font-semibold hover:underline">classes for adults</Link>{" "}
              before you book.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Book a Free Trial Class"
        subtext="Meet your teacher, try a real lesson, and decide afterwards. No credit card and no commitment."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
