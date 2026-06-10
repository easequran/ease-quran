import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TeacherCard from "@/components/TeacherCard";
import CTASection from "@/components/CTASection";
import { Users, Award, Globe, Heart, BarChart2, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About Ease Quran | Certified Teachers",
  description:
    "Learn about Ease Quran Online Academy, founded by Shah Zaib, certified from Wifaq ul Madaris. Our mission is to bring trusted Quran education to Muslim families across the USA.",
  alternates: { canonical: "https://easequran.com/about" },
  openGraph: {
    title: "About Ease Quran Online Academy | Wifaq ul Madaris Certified Teachers",
    description:
      "Learn about Ease Quran Online Academy, founded by Shah Zaib, certified from Wifaq ul Madaris. Our mission is to bring trusted Quran education to Muslim families across the USA.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "About Ease Quran Online Academy, Wifaq ul Madaris Certified" }],
  },
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shah Zaib",
  jobTitle: "Founder & Head Teacher",
  url: "https://easequran.com/about",
  image: "https://easequran.com/images/founder.webp",
  worksFor: {
    "@type": "EducationalOrganization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  description: "Shah Zaib is the founder of Ease Quran Online Academy, certified from Wifaq ul Madaris Al-Arabia. With 6+ years of experience teaching Quran to Western, English-speaking students in the USA, he specializes in making Quranic education accessible to Muslim families across America.",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Wifaq ul Madaris Al-Arabia",
    description: "Pakistan's largest Islamic education board, globally recognized",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Wifaq ul Madaris Al-Arabia Certification",
    credentialCategory: "Islamic Education",
    recognizedBy: {
      "@type": "Organization",
      name: "Wifaq ul Madaris Al-Arabia",
    },
  },
  knowsAbout: ["Quran Recitation", "Tajweed", "Hifz Memorization", "Noorani Qaida", "Islamic Education", "Arabic Language"],
  sameAs: [
    "https://www.facebook.com/share/18WdHQVNWT/",
    "https://www.instagram.com/contacteasequran",
    "https://www.linkedin.com/company/ease-quran/",
  ],
};

const educationalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  logo: "https://easequran.com/images/logo.png",
  foundingDate: "2019",
  description: "Certified online Quran academy serving Muslim families across all 50 US states. Wifaq ul Madaris certified teachers.",
  employee: {
    "@type": "Person",
    name: "Shah Zaib",
    jobTitle: "Founder & Head Teacher",
  },
  accreditation: "Wifaq ul Madaris Al-Arabia",
};

const values = [
  {
    icon: Users,
    title: "Trust",
    description:
      "Every teacher at Ease Quran is personally vetted and holds a recognized Islamic credential. We understand that inviting a teacher into your home, even virtually, requires complete confidence. We earn that trust every single day.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold our teachers to the highest academic and pedagogical standards. Certification from Wifaq ul Madaris Al-Arabia is the baseline, not the ceiling. Continuous improvement and student progress are what drive us.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Geography should never be a barrier to learning the Quran. Whether you're in New York, California, Texas, or a small town with no Islamic center nearby, we bring qualified Quran education directly to your home via a simple video call.",
  },
];

const philosophyCards = [
  {
    icon: Heart,
    title: "Patience Above All",
    description:
      "Every student learns at their own pace. Our teachers are trained to meet students where they are, whether that's a 5-year-old learning their first Arabic letters or an adult reciting the Quran for the very first time. Frustration has no place in our classrooms.",
  },
  {
    icon: BarChart2,
    title: "Measurable Results",
    description:
      "We track every student's progress and provide regular updates to parents. From pronouncing individual letters correctly to completing full Surahs with proper Tajweed, every milestone is celebrated and documented.",
  },
  {
    icon: BookOpen,
    title: "Islamic Values First",
    description:
      "Quran education is not just about reading. It's about building a relationship with the Book of Allah. We embed Islamic values, manners, and love for the Quran into every lesson, nurturing students who don't just read but understand and connect.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">About Us</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Our Story
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              About Ease Quran Online Academy
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              We are a certified online Quran academy dedicated to bringing authentic, trustworthy
              Islamic education to Muslim families across the United States. Founded on faith,
              built on credentials, and driven by a passion for every student's success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Our Mission
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Why Ease Quran Exists
            </h2>
            <p className="text-grey leading-relaxed text-base">
              Millions of Muslim families in America want their children to learn the Quran, but
              finding a qualified, trustworthy teacher is a real challenge. Local Islamic schools
              have limited hours. Community masjids are often overbooked. And the internet is full
              of unverified "teachers" with no credentials. Ease Quran was founded to solve this
              problem: to give every Muslim family in America access to a{" "}
              <strong className="text-navy">certified, background-checked, experienced</strong>{" "}
              Quran teacher, on their schedule, from their home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">{v.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{v.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/founder.webp"
                  alt="Shah Zaib - Founder of Ease Quran Online Academy, certified from Wifaq ul Madaris"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-gold rounded-2xl p-5 shadow-lg">
                <p className="font-playfair font-bold text-navy text-2xl">6+</p>
                <p className="text-navy text-xs font-semibold">Years Teaching</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Meet the Founder
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-2">
                Shah Zaib
              </h2>
              <p className="text-gold font-semibold mb-6">Founder & Head Teacher</p>

              <div className="space-y-4 text-grey text-sm leading-relaxed">
                <p>
                  Shah Zaib completed his formal Islamic education at a recognized institution
                  affiliated with{" "}
                  <strong className="text-navy">Wifaq ul Madaris Al-Arabia Pakistan</strong>, the
                  largest and most respected Islamic education board in Pakistan, whose
                  certifications are recognized globally by Islamic scholars and institutions.
                </p>
                <p>
                  After completing his studies, Shah Zaib began teaching Quran to students in the
                  West, quickly recognizing a massive gap in quality, trusted online Quran
                  education for English-speaking Muslim families. Over{" "}
                  <strong className="text-navy">6 years</strong>, he refined a teaching
                  methodology specifically designed for Western students: patient, structured,
                  progress-focused, and delivered entirely in English.
                </p>
                <p>
                  His specialty is working with students who have had little or no prior Arabic
                  or Quran education: adults, children, and families who are just beginning their
                  journey with the Book of Allah. He built Ease Quran as a platform to scale this
                  mission: reaching every Muslim family across America who deserves a teacher they
                  can truly trust.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 border-l-4 border-gold pl-6 py-2">
                <p className="font-playfair text-lg text-navy leading-relaxed italic">
                  "I built Ease Quran because every Muslim family in America deserves a Quran
                  teacher they can truly trust."
                </p>
                <footer className="mt-2 text-sm text-grey font-semibold">— Shah Zaib, Founder</footer>
              </blockquote>

              {/* Credential badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">
                  ✓ Wifaq ul Madaris Certified
                </span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">
                  ✓ 6+ Years Experience
                </span>
                <span className="bg-offwhite border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">
                  ✓ Western Students Specialist
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wifaq ul Madaris Credential Section */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Our Credential
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
                What Is Wifaq ul Madaris Al-Arabia?
              </h2>
              <p className="text-white/60 text-sm">
                And why does it matter for your family in America?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="font-playfair font-bold text-xl text-gold mb-4">
                  The Largest Islamic Education Board in Pakistan
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Wifaq ul Madaris Al-Arabia Pakistan is the largest Islamic education
                  organization in the world, overseeing the academic standards and certifications
                  of thousands of Islamic seminaries (Madaris) across Pakistan. Its graduates are
                  recognized by Islamic institutions, universities, and governments across the
                  Middle East, Southeast Asia, Europe, and North America. A certification from
                  Wifaq ul Madaris is the Islamic equivalent of a university degree from a
                  top-tier institution. It means the teacher has completed years of rigorous
                  academic study in Quran, Hadith, Fiqh, and Arabic sciences.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="font-playfair font-bold text-xl text-gold mb-4">
                  Why This Matters for Muslim Families in the USA
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  As a Muslim parent in America, you have no way to walk into a classroom and
                  assess a teacher's qualifications in person. Online Quran teaching is largely
                  unregulated. Anyone can claim to be a "qualified Quran teacher." The Wifaq ul
                  Madaris certification is the gold standard that separates genuine scholars from
                  unqualified individuals. When all Ease Quran teachers hold this credential, you
                  have a verifiable, internationally recognized guarantee of academic integrity.
                  Your children will learn from real scholars, not well-meaning volunteers.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gold/10 border border-gold/30 rounded-2xl p-6 text-center">
              <p className="text-white font-semibold">
                ✓ Every Ease Quran teacher holds a{" "}
                <span className="text-gold">Wifaq ul Madaris Al-Arabia</span> certification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              How We Teach
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-grey max-w-2xl mx-auto text-sm leading-relaxed">
              We believe that the right teacher, the right method, and the right environment can
              make any student, child or adult, fall in love with the Quran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyCards.map((card) => {
              const Icon = card.icon;
              return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                  <Icon size={26} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">{card.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{card.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Our Educators
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
              Meet Our Certified Teachers
            </h2>
            <p className="text-grey max-w-xl mx-auto text-sm leading-relaxed">
              Every teacher at Ease Quran is personally selected by Shah Zaib, holds a Wifaq ul
              Madaris certification, and has been trained in teaching Western, English-speaking
              students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <TeacherCard
              name="Shah Zaib"
              image="/images/founder.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Tajweed, Quran Reading, Hifz, Noorani Qaida"
              experience="6+ years teaching Western students"
              qualification="Founder & Head Teacher"
            />
            <TeacherCard
              name="Muhammad Umair"
              image="/images/teacher-1.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Tajweed & Hifz Specialist"
              experience="2 years teaching online"
              qualification="Quran Teacher"
            />
            <TeacherCard
              name="Almas Fatima"
              image="/images/teacher-2.webp"
              credential="Certified, Wifaq ul Madaris Al-Arabia"
              speciality="Qaria e Quran, Bachelor in Islamic Studies"
              experience="Teaching since 2022, available for sisters & children"
              qualification="Female Quran Teacher"
              badge="Female Teacher"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                  Looking Ahead
                </span>
                <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
                  Our Vision for Muslim Families in America
                </h2>
                <div className="space-y-4 text-grey text-sm leading-relaxed">
                  <p>
                    We envision a future where every Muslim child growing up in America has a
                    genuine, meaningful relationship with the Quran, where Quranic recitation
                    is not a distant dream but a daily reality for families in every state.
                  </p>
                  <p>
                    We are building toward a world where the quality of your Quran education
                    is not limited by your zip code, your proximity to a masjid, or your
                    ability to find a local scholar. Ease Quran is our commitment to making
                    that world real, one student, one family, one lesson at a time.
                  </p>
                  <p>
                    We are continuously growing our team of certified teachers, improving our
                    curriculum, and expanding our capacity to serve more families. Our goal is
                    to become the most trusted name in online Quran education for the American
                    Muslim community.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { num: "500+", label: "Students taught across America" },
                  { num: "50", label: "States we serve" },
                  { num: "3", label: "Wifaq ul Madaris certified teachers" },
                  { num: "6+", label: "Years of trusted teaching experience" },
                  { num: "4.9★", label: "Average student satisfaction rating" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-5"
                  >
                    <div className="text-3xl font-playfair font-bold text-gold w-24 shrink-0">
                      {stat.num}
                    </div>
                    <p className="text-navy font-semibold text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Start Your Child's Quran Journey?"
        subtext="Book a free trial class today and experience the Ease Quran difference. No credit card, no commitment. Just your child's first step toward the Quran."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
