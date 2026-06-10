import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { User, Users, CheckCircle, BookOpen } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Female Quran Teacher Online USA | Sister Quran Teacher",
  description:
    "Find a certified female Quran teacher online in the USA. Our qualified sister teachers for women and children. Almas Fatima, Qaria e Quran, available now.",
  keywords: [
    "female Quran teacher online",
    "sister Quran teacher",
    "lady Quran teacher USA",
    "female Islamic teacher online",
    "female Quran teacher for sisters",
    "online Quran classes for women",
  ],
  alternates: {
    canonical: "https://easequran.com/female-quran-teachers",
  },
  openGraph: {
    title: "Female Quran Teacher Online USA | Sister Quran Teacher | Ease Quran",
    description:
      "Certified female Quran teacher online for women and children across the USA. Sister Almas Fatima, Qaria e Quran, available for sisters now.",
    images: ["/images/og-image.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Almas Fatima",
  jobTitle: "Female Quran Teacher — Qaria e Quran",
  description:
    "Sister Almas Fatima is a certified female Quran teacher at Ease Quran Online Academy. She holds a Wifaq ul Madaris Al-Arabia certification as a Qaria e Quran and a B.A. in Islamic Studies. Available exclusively for sisters and children across the USA.",
  worksFor: {
    "@type": "EducationalOrganization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Wifaq ul Madaris Al-Arabia",
    },
  ],
  knowsAbout: [
    "Quran for Kids",
    "Tajweed",
    "Noorani Qaida",
    "Islamic Studies",
    "Quran recitation",
    "Female Quran teaching",
  ],
  image: "/images/teacher-2.webp",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are female Quran teachers available for online classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ease Quran has Sister Almas Fatima, a certified female Quran teacher, available for online classes with sisters and children across the USA. Classes are conducted via Zoom.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sister Almas Fatima certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima holds a Wifaq ul Madaris Al-Arabia certification as a Qaria e Quran and a B.A. in Islamic Studies. She has been teaching Quran to women and children online since 2022.",
      },
    },
    {
      "@type": "Question",
      name: "Can my daughter have a female teacher for all her classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When you request a female teacher, all of your daughter's classes will be taught exclusively by Sister Almas Fatima. There will be no male teacher involvement at any point.",
      },
    },
    {
      "@type": "Question",
      name: "What courses does your female teacher teach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sister Almas teaches Noorani Qaida (for beginners), Quran reading with Tajweed, Quran for Kids, and Islamic Studies. She is fully qualified to teach all of these courses to sisters and children.",
      },
    },
    {
      "@type": "Question",
      name: "How do I request a female teacher when booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply indicate on the booking form or in your WhatsApp message that you would like a female teacher. We will assign Sister Almas Fatima to your child's class and confirm your schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Are the classes one-on-one with the female teacher?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every class with Sister Almas is a private, one-on-one session. There are no other students in the class. Your daughter or the sister taking classes has the teacher's full, undivided attention for the entire lesson.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Are female Quran teachers available for online classes?",
    answer:
      "Yes. Ease Quran has Sister Almas Fatima, a certified, qualified female Quran teacher, available for online one-on-one classes with sisters and children across the United States. All classes are conducted live via Zoom from the comfort and privacy of your home. There are no male teachers involved in any session requested for sisters.",
  },
  {
    question: "Is Sister Almas Fatima certified?",
    answer:
      "Yes. Sister Almas Fatima holds two recognized Islamic credentials: a certification as a Qaria e Quran from an institution affiliated with Wifaq ul Madaris Al-Arabia, the most respected Islamic education board in the world, and a Bachelor in Islamic Studies. She has been teaching Quran to sisters and children online since 2022 and brings genuine academic qualification to every lesson.",
  },
  {
    question: "Can my daughter have a female teacher for all her classes?",
    answer:
      "Yes, absolutely. When you request a female teacher at booking, Sister Almas Fatima will be assigned exclusively to your daughter's classes. Every single class, including the trial, all regular sessions, and any makeup classes, will be with Sister Almas. There is no male teacher involvement at any point. Your daughter will always have her female teacher.",
  },
  {
    question: "What courses does your female teacher teach?",
    answer:
      "Sister Almas is fully qualified to teach all of our core courses: Noorani Qaida for complete beginners including very young children, Quran Reading with Tajweed from beginner to advanced, Quran for Kids designed for ages 4 to 10, and Islamic Studies covering beliefs, prayer, manners, and Seerah. She tailors every lesson to the student's age and learning level.",
  },
  {
    question: "How do I request a female teacher when booking?",
    answer:
      "It's simple. Just indicate on our booking form that you would like a female teacher, or mention it in your WhatsApp message when reaching out to us. We will confirm Sister Almas Fatima as your teacher, agree on a schedule, and send you all the Zoom details before your first class. The process takes just a few minutes.",
  },
  {
    question: "Are the classes one-on-one with the female teacher?",
    answer:
      "Yes. Every class with Sister Almas is a fully private, one-on-one Zoom session. There are no group dynamics, no other students in the virtual room, and no shared screen time with strangers. Your daughter or the sister enrolling has Sister Almas's complete, undivided attention for the full duration of every single lesson. This is how real learning happens.",
  },
];

export default function FemaleQuranTeachersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
              <li className="text-white/80">Female Quran Teachers</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              For Sisters and Children
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Female Quran Teacher Online: Qualified, Certified &amp; Available for Sisters
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              For Muslim women and girls, learning Quran from a female teacher is not just a preference. It is a matter of modesty, comfort, and Islamic principle. At Ease Quran, we offer certified female Quran instruction for sisters and children across the United States, taught one-on-one by Sister Almas Fatima, a Qaria e Quran with formal Islamic credentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book a Class with Sister Almas
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20booking%20a%20female%20Quran%20teacher%20for%20my%20daughter"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center"
              >
                WhatsApp Us About Female Classes
              </a>
            </div>
            <TrustBadges dark />
          </div>
        </div>
      </section>

      {/* Featured Teacher Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Meet Your Teacher
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">
                Sister Almas Fatima, Certified Female Quran Teacher
              </h2>
            </div>

            <div className="bg-offwhite rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-auto min-h-[400px]">
                  <Image
                    src="/images/teacher-2.webp"
                    alt="Sister Almas Fatima, Certified Female Quran Teacher and Qaria e Quran at Ease Quran Online Academy"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Badge overlay */}
                  <div className="absolute top-6 left-6 bg-gold text-navy text-xs font-bold px-4 py-2 rounded-full shadow-md">
                    Qaria e Quran
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-playfair font-bold text-3xl text-navy mb-1">Sister Almas Fatima</h3>
                  <p className="text-gold font-semibold mb-6">Female Quran Teacher, Available for Sisters &amp; Children</p>

                  {/* Credentials */}
                  <div className="space-y-3 mb-8">
                    {[
                      { label: "Certification", value: "Qaria e Quran, Wifaq ul Madaris Al-Arabia" },
                      { label: "Qualification", value: "Bachelor in Islamic Studies" },
                      { label: "Teaching Since", value: "2022" },
                      { label: "Speciality", value: "Quran for Kids, Tajweed, Noorani Qaida, Islamic Studies" },
                      { label: "Available For", value: "Sisters (women) and children of all ages" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <span className="text-gold font-bold text-sm w-32 shrink-0">{item.label}:</span>
                        <span className="text-grey text-sm leading-relaxed">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Teaching style */}
                  <p className="text-grey text-sm leading-relaxed mb-6">
                    Sister Almas is known for her patience, warmth, and ability to connect with students of all ages, from young children just beginning Arabic letters to adult sisters learning Quran for the first time. She creates a learning environment that is completely comfortable and encouraging, where students never feel rushed, judged, or embarrassed. Her teaching is structured and systematic, ensuring measurable progress with every class while maintaining the calm, nurturing atmosphere that sisters and families trust.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">
                      ✓ Wifaq ul Madaris Certified
                    </span>
                    <span className="bg-white border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">
                      ✓ Bachelor in Islamic Studies
                    </span>
                    <span className="bg-white border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">
                      ✓ Female-Only Classes
                    </span>
                    <span className="bg-white border border-gold/30 text-navy text-xs font-semibold px-4 py-2 rounded-full">
                      ✓ One-on-One Online
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Female Teacher Matters */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Islamic Perspective
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
                Why a Female Quran Teacher Matters in Islam
              </h2>
            </div>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Islamic scholarship has long recognized the importance of observing appropriate boundaries in the teacher-student relationship, particularly in settings involving women and girls. When a Muslim girl or woman learns her Quran from a female teacher, she does so in an environment of complete comfort, free from any concern about gender boundaries or Islamic etiquette. This is not a matter of preference alone. For many Muslim families, it is a sincere expression of their Islamic values and a practical application of the principle of modesty that Islam holds dear. A female student who is completely at ease with her teacher learns faster, engages more freely, and develops a richer relationship with the Quran.
              </p>
              <p>
                For Muslim mothers, the question of who is sitting across a screen from their daughter matters deeply. The trust that a parent places in a teacher, particularly for an intimate one-on-one learning relationship, is significant. When that teacher is a qualified, certified sister, the entire arrangement is one that Muslim parents can feel completely at peace about. There is no awkwardness, no discomfort, and no concern. The mother knows her daughter is learning from a knowledgeable, modest, and qualified Muslim woman who shares her values and her commitment to Islamic education done properly.
              </p>
              <p>
                The tradition of female Islamic scholarship is ancient and noble. The wives of the Prophet (peace be upon him), particularly A'isha (may Allah be pleased with her), were great teachers of Hadith and Islamic knowledge to women and men alike. The great female scholars of Islamic history have always played a vital role in transmitting Islamic knowledge. When Sister Almas Fatima teaches a young girl to recite the Quran, she is participating in a tradition of female Islamic scholarship that goes back to the earliest years of the ummah.
              </p>
              <p>
                For adult women who are learning Quran for the first time, or returning to their Quran education after years away, the presence of a female teacher removes a significant psychological barrier. Many adult women feel embarrassed or vulnerable learning something new in front of a male teacher. With Sister Almas, that barrier disappears entirely. She creates a safe, warm, non-judgmental space where every sister, at any age and any level, can begin her Quran journey with confidence and dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sister Almas Teaches */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Curriculum
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                What Sister Almas Teaches
              </h2>
              <p className="text-grey max-w-2xl mx-auto text-sm leading-relaxed">
                Sister Almas is fully certified and experienced to teach all core Quran and Islamic courses, for students at every level.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  name: "Quran for Kids",
                  desc: "Designed for young learners aged 4 and up. Sister Almas makes early Quran education fun, gentle, and progressive. Children quickly feel comfortable with her patient, encouraging style.",
                  href: "/courses/noorani-qaida",
                  icon: User,
                },
                {
                  name: "Tajweed and Quran Recitation",
                  desc: "Systematic Tajweed instruction from beginner through advanced levels. Sister Almas herself is a certified Qaria e Quran, meaning she has mastered the rules of recitation and teaches them with expert precision.",
                  href: "/courses/tajweed",
                  icon: BookOpen,
                },
                {
                  name: "Noorani Qaida",
                  desc: "The ideal starting course for any beginner, children or adults alike. Learn Arabic letters, vowels, and Quran reading fundamentals under Sister Almas's careful, structured guidance.",
                  href: "/courses/noorani-qaida",
                  icon: BookOpen,
                },
                {
                  name: "Islamic Studies",
                  desc: "Core Islamic knowledge including beliefs, the five pillars, prayer, manners, and Seerah. Sister Almas teaches Islamic Studies in an age-appropriate way that resonates deeply with young Muslim girls in the West.",
                  href: "/courses/islamic-studies",
                  icon: CheckCircle,
                },
              ].map((course) => {
                const Icon = course.icon;
                return (
                <Link
                  key={course.name}
                  href={course.href}
                  className="group bg-white hover:bg-navy rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-navy transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-navy group-hover:text-gold mb-3 transition-colors">{course.name}</h3>
                  <p className="text-grey group-hover:text-white/70 text-sm leading-relaxed transition-colors">{course.desc}</p>
                </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Take Classes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Who It's For
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                Who Can Take Classes with Sister Almas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-offwhite rounded-2xl border border-gray-100">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                  <User size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Girls of All Ages</h3>
                <p className="text-grey text-sm leading-relaxed">
                  From young girls aged 4 starting with their first Arabic letters to teenage girls working on Tajweed or Hifz, Sister Almas teaches girls at every stage with patience, skill, and Islamic wisdom.
                </p>
              </div>
              <div className="text-center p-8 bg-offwhite rounded-2xl border border-gray-100">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                  <Users size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Sisters (Adult Women)</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Adult Muslim women who are learning Quran for the first time, improving their recitation, or returning to Quran education after many years are warmly welcomed. It is never too late to begin.
                </p>
              </div>
              <div className="text-center p-8 bg-offwhite rounded-2xl border border-gray-100">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                  <User size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Children from Age 4</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Very young children, boys and girls alike, can begin with Sister Almas from around age 4. She specializes in making early Quran education engaging and gentle for the youngest learners, building strong foundations from the very beginning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              Mother's Testimonial
            </span>
            <blockquote className="font-playfair text-xl md:text-2xl text-white leading-relaxed italic mb-8">
              "For me, having a female teacher for my daughter was non-negotiable. Sister Almas was the reason we chose Ease Quran. From the first class, my daughter was at ease — laughing, engaged, and actually excited to come back. Now eight months later she has finished Noorani Qaida and is reading Surah Al-Baqarah with Tajweed. I am in tears every time I hear her recite. Sister Almas is a true blessing for our family."
            </blockquote>
            <footer className="text-white/60 font-semibold">
              — Ruqayyah S., Muslim mother in New Jersey
            </footer>
          </div>
        </div>
      </section>

      {/* How It Works: Female Teacher Specific */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Simple Process</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">
                How to Book a Female Quran Teacher
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Request a Female Teacher", desc: "Book your free trial online or via WhatsApp and clearly state you would like a female teacher for your daughter or for yourself. We confirm Sister Almas immediately." },
                { step: "02", title: "Free Trial Class with Sister Almas", desc: "Your daughter or you joins a complimentary one-on-one Zoom session with Sister Almas. Experience her teaching style and the warm, comfortable environment she creates." },
                { step: "03", title: "Begin Regular Weekly Classes", desc: "Happy with the trial? We set a consistent weekly schedule with Sister Almas, flexible, reliable, and always one-on-one. Your journey with the Quran begins." },
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

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Questions</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">
                Frequently Asked Questions: Female Quran Teacher
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Book a Class with Sister Almas Fatima Today"
        subtext="Certified, qualified, and available now for sisters and children across the USA. One-on-one, private, and completely comfortable. Your first class is free. No credit card, no commitment."
        primaryCta="Book Free Trial with Female Teacher"
        primaryHref="/free-trial"
      />
    </>
  );
}
