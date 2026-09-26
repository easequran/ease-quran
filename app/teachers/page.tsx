import type { Metadata } from "next";
import Link from "next/link";
import { Award, Languages, Users, BookOpen } from "lucide-react";
import CTASection from "@/components/CTASection";
import { teachers, femaleTeachers, type CourseSlug } from "@/lib/teachers";
import { PRIMARY_CTA } from "@/lib/business";

export const metadata: Metadata = {
  title: "Meet Our Quran Teachers",
  description:
    "Meet the teachers at Ease Quran Online Academy: their qualifications, what they teach, and who they teach best, in their own words.",
  alternates: { canonical: "https://easequran.com/teachers" },
  openGraph: {
    title: "Meet Our Quran Teachers | Ease Quran Online Academy",
    description:
      "Meet the teachers at Ease Quran Online Academy: their qualifications, what they teach, and who they teach best.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Meet the teachers at Ease Quran Online Academy" }],
  },
};

const courseLabels: Record<CourseSlug, string> = {
  "quran-for-kids": "Quran for Kids",
  tajweed: "Tajweed",
  hifz: "Hifz",
  "noorani-qaida": "Noorani Qaida",
  "arabic-language": "Arabic",
  "islamic-studies": "Islamic Studies",
  "quran-for-adults": "Quran for Adults",
  "quran-for-reverts": "Quran for Reverts",
};

// The shared placeholder illustration isn't a real photo of any individual,
// so it is never attributed as a person's schema `image`.
const PLACEHOLDER_PHOTO = "/images/teachers/female-teacher-placeholder.webp";

const personSchema = teachers.map((t) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: `${t.honorific} ${t.name}`,
  description: t.bio,
  worksFor: { "@id": "https://easequran.com/#organization" },
  knowsAbout: t.courses.map((c) => courseLabels[c]),
  ...(t.photo === PLACEHOLDER_PHOTO ? {} : { image: `https://easequran.com${t.photo}` }),
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Teachers", item: "https://easequran.com/teachers" },
  ],
};

export default function TeachersPage() {
  const femaleCount = femaleTeachers().length;
  return (
    <>
      {personSchema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">Teachers</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">Who Will Teach You</span>
            <h1 className="heading-1 text-white mb-6">Meet Our Quran Teachers</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Our teachers come from different backgrounds and specialise in different things:
              some focus on young beginners, some on Hifz, some on adults and reverts. Before
              anyone teaches with us, we see their original certificates, hear them recite, watch
              them teach a demo class, and check their ID and references. Tell us your course,
              level and preferred schedule when you book a trial, and we&apos;ll match you with a
              suitable teacher from the team below.
            </p>
          </div>
        </div>
      </section>

      {/* Male teachers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="eyebrow mb-4">Our Teachers</span>
            <h2 className="heading-2 text-navy">Teachers for Kids, Teens and Adults</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers
              .filter((t) => t.gender === "male")
              .map((t) => (
                <TeacherProfile key={t.slug} teacher={t} />
              ))}
          </div>
        </div>
      </section>

      {/* Female teachers */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="eyebrow mb-4">Female Teachers</span>
            <h2 className="heading-2 text-navy mb-3">
              {femaleCount} Female Teachers for Sisters and Children
            </h2>
            <p className="text-grey text-sm leading-relaxed">
              Ask for a female teacher when you book the free trial, and we can arrange one at
              most times.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {femaleTeachers().map((t) => (
              <TeacherProfile key={t.slug} teacher={t} />
            ))}
          </div>
        </div>
      </section>

      {/* How teachers are matched */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-3 text-navy mb-4">How We Match You With a Teacher</h2>
            <p className="text-grey leading-relaxed">
              After you book a free trial, we look at the course, the student&apos;s age and
              level, any language or teacher preference, and the days and times that suit you.
              We then confirm a suitable teacher and the trial time in your own time zone. If you
              continue, the same teacher usually stays with you.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Book Your Free Trial"
        subtext="Tell us the course, the student's age, and the days and times that suit you. We'll match you with a suitable teacher from the team above."
        primaryCta={PRIMARY_CTA}
        primaryHref="/free-trial"
      />
    </>
  );
}

function TeacherProfile({ teacher: t }: { teacher: (typeof teachers)[number] }) {
  return (
    <div id={t.slug} className="bg-white rounded-2xl overflow-hidden shadow-eq-sm border border-gray-100 scroll-mt-24">
      <div className="relative overflow-hidden bg-offwhite" style={{ height: "260px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.photo}
          alt={`${t.honorific} ${t.name}, Quran teacher at Ease Quran Online Academy`}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-6">
        <h3 className="font-playfair font-bold text-lg text-navy mb-1">
          {t.honorific} {t.name}
        </h3>
        <p className="text-gold text-sm font-semibold mb-3">{t.headline}</p>

        <div className="space-y-2.5 text-sm text-grey mb-4">
          <div className="flex items-start gap-2.5">
            <Award size={15} className="text-gold mt-0.5 shrink-0" />
            <span>{t.qualifications.join(", ")}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <BookOpen size={15} className="text-gold mt-0.5 shrink-0" />
            <span>{t.courses.map((c) => courseLabels[c]).join(", ")}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Users size={15} className="text-gold mt-0.5 shrink-0" />
            <span>Ages {t.studentAge} &middot; {t.suitableFor.join(", ")}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Languages size={15} className="text-gold mt-0.5 shrink-0" />
            <span>{t.languages.join(", ")}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-gold mt-0.5 shrink-0">⏱</span>
            <span>{t.experience}</span>
          </div>
        </div>

        <p className="text-grey text-sm leading-relaxed border-t border-gray-100 pt-4">{t.bio}</p>
      </div>
    </div>
  );
}
