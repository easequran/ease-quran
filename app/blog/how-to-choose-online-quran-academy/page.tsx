import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, User, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose the Best Online Quran Academy for Your Child in USA",
  description:
    "Confused about which online Quran academy to trust? Learn the 6 essential factors, teacher certification, free trials, female teachers & more. A guide for Muslim parents in USA.",
  alternates: {
    canonical: "https://www.easequran.com/blog/how-to-choose-online-quran-academy",
  },
  openGraph: {
    title: "How to Choose the Best Online Quran Academy for Your Child in America",
    description:
      "Confused about which online Quran academy to trust? Learn the 6 essential factors, teacher certification, free trials, female teachers & more. A guide for Muslim parents in USA.",
    url: "https://www.easequran.com/blog/how-to-choose-online-quran-academy",
    type: "article",
    publishedTime: "2025-01-15",
    authors: ["Ease Quran Team"],
    images: [
      {
        url: "https://www.easequran.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Choose the Best Online Quran Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose the Best Online Quran Academy for Your Child in USA",
    description:
      "6 essential factors every Muslim parent in America must check before enrolling their child in an online Quran academy.",
    images: ["https://www.easequran.com/images/og-image.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose the Best Online Quran Academy for Your Child in America",
  author: { "@type": "Organization", "name": "Ease Quran Team" },
  publisher: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://www.easequran.com",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  image: "https://www.easequran.com/images/og-image.png",
  url: "https://www.easequran.com/blog/how-to-choose-online-quran-academy",
  description:
    "With hundreds of online Quran academies competing for your family's trust, this guide covers the 6 most important factors, teacher certification, free trials, female teacher availability, curriculum quality, scheduling flexibility, and red flags to avoid.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do online Quran classes cost in the USA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online Quran classes in the USA typically range from $30 to $100+ per month depending on class frequency, session length, and the academy's teacher credentials. At Ease Quran Academy, our plans are designed to be accessible for American Muslim families, with flexible options for one, two, or five sessions per week. You can view our exact pricing on our pricing page.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best age to start Quran classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Quran educators agree that age 4 to 6 is an ideal starting point, as children at this stage are highly receptive to language learning and memorization. At this age, classes begin with Noorani Qaida, learning Arabic letters and basic pronunciation, before moving on to Quran recitation. That said, it is never too late to start, and we have adult students who begin their Quran journey in their 30s, 40s, and beyond.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a female Quran teacher for my daughter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. At Ease Quran Academy, we have a dedicated team of certified female Quran teachers available for daughters, sisters, and adult women. You can specifically request a female teacher when booking your free trial class, and we will match your child or family member with an appropriate certified female instructor.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if an online Quran teacher is qualified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask specifically about their educational credentials. Look for certifications from recognized Islamic boards such as Wifaq ul Madaris Al-Arabia, Tanzeem ul Madaris, or Rabita-tul-Madaris. A qualified teacher should also hold an Ijazah, a chain of certification tracing back to the Prophet Muhammad (PBUH), for Quran recitation. At Ease Quran Academy, every teacher's credentials are verified before they are permitted to teach.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial before I pay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ease Quran Academy offers a completely free trial class with no credit card required. This gives you and your child the chance to meet the teacher, experience the class format, and ask any questions before making a financial commitment. We strongly encourage all families to take advantage of the free trial, it is the best way to know whether the academy and the teacher are the right fit.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.easequran.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.easequran.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Choose the Best Online Quran Academy",
      item: "https://www.easequran.com/blog/how-to-choose-online-quran-academy",
    },
  ],
};

export default function BlogPostPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/30">/</li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li className="text-white/30">/</li>
              <li className="text-white/80 truncate max-w-xs">
                How to Choose the Best Online Quran Academy
              </li>
            </ol>
          </nav>

          {/* Category */}
          <span className="inline-block bg-gold/20 text-gold text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            Parenting &amp; Education
          </span>

          {/* Title */}
          <h1 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8 max-w-4xl">
            How to Choose the Best Online Quran Academy for Your Child in America
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-gold" />
              Ease Quran Team, Certified Quran Teachers, Ease Quran Academy
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold" />
              January 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              8 min read
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Main Content */}
              <article className="flex-1 min-w-0">

                {/* Back link */}
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-grey text-sm hover:text-gold transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>

                {/* Introduction */}
                <p className="text-grey leading-relaxed mb-4 text-base">
                  Choosing the right online Quran academy for your child is one of the most important educational decisions a Muslim parent in America can make. The demand for quality Islamic education online has grown enormously over the past decade, and with it, the number of academies, from professionally staffed institutions to informal one-person operations, has exploded. Knowing how to separate the trustworthy from the unreliable requires asking the right questions before your child attends a single class. In this guide, we break down the six factors that matter most when selecting the best online Quran academy for your family.
                </p>

                {/* Inline CTA 1 */}
                <div className="bg-gold rounded-2xl p-6 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="font-playfair font-bold text-navy text-lg mb-1">
                      Ready to experience the difference?
                    </p>
                    <p className="text-navy/80 text-sm">
                      Meet your child&apos;s teacher before you pay a single dollar.
                    </p>
                  </div>
                  <Link
                    href="/free-trial"
                    className="whitespace-nowrap bg-navy text-white font-bold px-6 py-3 rounded-xl hover:bg-navy/90 transition-colors text-sm"
                  >
                    Book Your Free Trial Class →
                  </Link>
                </div>

                {/* H2 1 */}
                <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
                  1. Verify Teacher Certification Before Anything Else
                </h2>
                <p className="text-grey leading-relaxed mb-4">
                  The single most important factor in any child&apos;s Quran education is the quality of the teacher. A genuinely qualified Quran teacher is not simply someone who can recite the Quran fluently, they have spent years in formal Islamic study, passed rigorous examinations, and earned recognized certifications that verify their knowledge of Tajweed rules, Arabic grammar, and Islamic sciences. When evaluating any online Quran academy, your first question should always be: where are your teachers certified, and can you verify it?
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  Be wary of academies that respond with vague answers like &ldquo;our teachers are highly experienced&rdquo; or &ldquo;all our teachers are hafiz.&rdquo; While memorizing the Quran is an enormous achievement, it does not on its own qualify someone to teach Tajweed or structured recitation. Ask for the name of the certifying board, the teacher&apos;s Ijazah credentials, and whether their qualifications can be independently verified.
                </p>

                <h3 className="font-playfair font-semibold text-xl text-navy mb-3 mt-6">
                  What Is Wifaq ul Madaris, and Why It Matters
                </h3>
                <p className="text-grey leading-relaxed mb-4">
                  Wifaq ul Madaris Al-Arabia Pakistan is the largest and most respected Islamic education board in South Asia. Founded in 1959, it has certified hundreds of thousands of Islamic scholars, and its qualifications are recognized by universities, governments, and Islamic institutions across the Middle East, Europe, Canada, and the United States. A teacher who has graduated from a Wifaq ul Madaris-affiliated institution has completed an intensive eight-year curriculum covering the full Quran, Hadith sciences, Islamic jurisprudence, Arabic grammar, and Tajweed theory.
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  When you see a Wifaq ul Madaris certification on a teacher&apos;s profile, it carries real weight. It means the teacher was evaluated by an external board, not simply certified by their own employer. This distinction matters enormously in an industry where self-proclaimed credentials are common. At Ease Quran Academy, every teacher holds formal certification from accredited Islamic boards, and we are transparent about this because we believe parents deserve to know exactly who is teaching their children.
                </p>

                <h3 className="font-playfair font-semibold text-xl text-navy mb-3 mt-6">
                  Other Credentials Worth Checking
                </h3>
                <p className="text-grey leading-relaxed mb-4">
                  Beyond Wifaq ul Madaris, look for teachers who hold an Ijazah in Quran recitation. An Ijazah is a formal license granted by a qualified scholar that certifies the recipient&apos;s recitation has been verified through a chain of transmission stretching back to the Prophet Muhammad (PBUH). This is the gold standard for Quran recitation, it is not a piece of paper from an institution but an unbroken chain of verified oral transmission.
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  Additionally, check whether the academy mentions certifications from boards such as Tanzeem ul Madaris, Rabita-tul-Madaris, or recognized institutions from Egypt such as Al-Azhar University. Any of these signals a teacher whose credentials go beyond informal study and self-teaching.
                </p>

                {/* H2 2 */}
                <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
                  2. Always Demand a Free Trial Class
                </h2>
                <p className="text-grey leading-relaxed mb-4">
                  A free trial class is not a marketing gimmick, it is the most honest window into an academy&apos;s actual quality. During a trial class, you can observe how the teacher interacts with your child, how they explain concepts, how patient they are with mistakes, and whether their personality is a good match for your child&apos;s learning style. No amount of reading testimonials or browsing a polished website will tell you as much as thirty minutes of direct observation.
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  When you attend a trial class, pay attention to whether the teacher follows a structured lesson plan or improvises. A professional, certified Quran teacher will arrive with a plan for the session, assess your child&apos;s current level in the first few minutes, and adapt their teaching accordingly. They should also speak clearly, avoid rushing, and make the child feel at ease, especially if the child is young or has never studied Quran before.
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  A free trial also reveals what you will not see on the website: the reliability of the technology platform, the professionalism of the academy&apos;s communication, and whether they actually show up on time. If a trial class feels chaotic or the teacher seems unprepared, that is exactly the kind of information you need before committing your family&apos;s schedule and budget for months ahead.
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  Any reputable academy will offer this without requiring a credit card upfront. If an academy refuses to offer a free trial or makes it unnecessarily complicated to book one, treat that as a serious red flag.
                </p>

                {/* H2 3 */}
                <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
                  3. Ask Specifically About Female Quran Teachers
                </h2>
                <p className="text-grey leading-relaxed mb-4">
                  For many Muslim families in America, the availability of a female Quran teacher is not optional, it is a religious and cultural requirement. Whether you are enrolling your daughter, a sister, or an adult woman in the family, Islamic values and practical comfort both point toward the importance of having a female teacher where appropriate. The challenge is that many online Quran academies are staffed overwhelmingly by male teachers, and female teachers, especially certified ones, can be harder to find.
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  When you contact an academy, ask directly: &ldquo;Do you have certified female Quran teachers available? Can I specifically request a female teacher for my daughter?&rdquo; Pay attention to how they respond. An academy with a genuine team of{" "}
                  <Link href="/female-quran-teachers" className="text-gold font-semibold hover:underline">
                    certified female Quran teachers
                  </Link>{" "}
                  will answer confidently and immediately. An academy that hems and haws, offers to &ldquo;check availability,&rdquo; or says they can &ldquo;sometimes&rdquo; arrange it is telling you that female teachers are an afterthought in their operation.
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  Beyond religious propriety, female teachers often bring particular patience and communication skills that make them especially effective with young girls. Many daughters are more comfortable asking questions, making mistakes, and practicing their recitation with a female teacher who understands them, and that comfort translates directly into faster progress and a more positive relationship with Quran education.
                </p>

                {/* H2 4 */}
                <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
                  4. Evaluate the Curriculum for Your Child&apos;s Level
                </h2>
                <p className="text-grey leading-relaxed mb-4">
                  Not every child needs the same curriculum, and a good online Quran academy should offer clearly differentiated programs based on age, prior knowledge, and goals. An academy that funnels every new student into the same &ldquo;beginner course&rdquo; regardless of their level is not practicing quality education, it is running a factory. Ask the academy how they assess new students, how they place them into the right program, and what the progression looks like as skills develop.
                </p>

                <h3 className="font-playfair font-semibold text-xl text-navy mb-3 mt-6">
                  For Complete Beginners (Ages 4–8)
                </h3>
                <p className="text-grey leading-relaxed mb-4">
                  Young children who have never encountered Arabic letters need to start from the absolute beginning, learning letter shapes, pronunciation points (makhaarij), and the rules of joining letters before they attempt a single verse of Quran. The best tool for this foundational stage is the{" "}
                  <Link href="/courses/noorani-qaida" className="text-gold font-semibold hover:underline">
                    Noorani Qaida
                  </Link>
                  , a structured Arabic reading primer that has been used successfully with children across the world for generations. A good academy will offer dedicated Noorani Qaida instruction for this age group with short, engaging lessons that match a young child&apos;s attention span.
                </p>

                <h3 className="font-playfair font-semibold text-xl text-navy mb-3 mt-6">
                  For Kids Who Can Read Arabic
                </h3>
                <p className="text-grey leading-relaxed mb-4">
                  Children who have already mastered Arabic letters and basic reading are ready to move into structured Quran recitation with proper Tajweed. This is where the quality of teaching makes the biggest difference, because Tajweed rules are numerous and precise, and embedding bad habits at this stage is far easier than correcting them later. Look for an academy that offers a structured{" "}
                  <Link href="/courses/tajweed" className="text-gold font-semibold hover:underline">
                    Tajweed course
                  </Link>{" "}
                  alongside their general{" "}
                  <Link href="/courses/quran-for-kids" className="text-gold font-semibold hover:underline">
                    Quran for Kids
                  </Link>{" "}
                  program so that recitation accuracy is taught systematically, not incidentally.
                </p>

                <h3 className="font-playfair font-semibold text-xl text-navy mb-3 mt-6">
                  For Students Ready to Memorize
                </h3>
                <p className="text-grey leading-relaxed mb-4">
                  If your child reads Arabic fluently and you want to take the next step toward full memorization of the Quran, the academy must have a dedicated, structured{" "}
                  <Link href="/courses/hifz" className="text-gold font-semibold hover:underline">
                    Hifz program
                  </Link>{" "}
                 , not just a general class where memorization is a side activity. Hifz requires a specific daily revision structure, a clear memorization-to-revision ratio, consistent accountability, and a teacher who has personally guided students to completion before. Ask the academy how many students they have helped complete full memorization of the Quran. The answer will tell you a great deal.
                </p>

                <h3 className="font-playfair font-semibold text-xl text-navy mb-3 mt-6">
                  For Adults and New Muslims
                </h3>
                <p className="text-grey leading-relaxed mb-4">
                  Adults who are coming to the Quran for the first time, whether they grew up Muslim and never had formal instruction, or whether they are new Muslims beginning their journey, have different needs than children. They require a teacher who explains the why behind rules, who is comfortable teaching in English, and who can accommodate the pace of someone balancing work, family, and education simultaneously. A dedicated{" "}
                  <Link href="/courses/quran-for-adults" className="text-gold font-semibold hover:underline">
                    Quran for Adults
                  </Link>{" "}
                  program should address all of this explicitly. For new Muslims in particular, a{" "}
                  <Link href="/courses/quran-for-reverts" className="text-gold font-semibold hover:underline">
                    Quran for Reverts
                  </Link>{" "}
                  program that starts with the spiritual and practical context of Quran recitation, not just letters and rules, can make the difference between a student who thrives and one who gives up after a few months.
                </p>

                {/* Inline CTA 2 */}
                <div className="bg-navy rounded-2xl p-6 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="font-playfair font-bold text-white text-lg mb-1">
                      Not sure which course is right?
                    </p>
                    <p className="text-white/70 text-sm">
                      Our teachers assess every student in the first class and recommend the perfect starting point.
                    </p>
                  </div>
                  <Link
                    href="/free-trial"
                    className="whitespace-nowrap bg-gold text-navy font-bold px-6 py-3 rounded-xl hover:bg-gold/90 transition-colors text-sm"
                  >
                    Book Your Free Trial Class →
                  </Link>
                </div>

                {/* H2 5 */}
                <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
                  5. Look for Flexible USA-Friendly Scheduling
                </h2>
                <p className="text-grey leading-relaxed mb-4">
                  One of the most underestimated challenges of online Quran education for families in America is the scheduling problem. Many academies are based in Pakistan, Egypt, or the UK, and while they offer online classes, their available time slots are built around time zones that work for their staff, not for a child in New York, Chicago, Houston, or Los Angeles who has school, homework, sports practice, and a bedtime.
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  Before enrolling, ask the academy explicitly: what time zones do your teachers operate in, and what is the latest evening slot available in Eastern Standard Time? Can we have classes on weekends? What happens if we need to reschedule due to a school event or a holiday? The answers will reveal whether the academy genuinely serves the American Muslim community or simply offers &ldquo;online&rdquo; classes that happen to be accessible from America, but not practically workable for American family schedules.
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  Weekend classes are particularly important for families with school-age children. A Monday-through-Friday schedule may work for some families, but many American Muslim children can only commit to Quran education consistently if weekend mornings or Saturday/Sunday afternoons are available. An academy that offers only weekday slots is not truly designed to serve the American Muslim family lifestyle.
                </p>
                <p className="text-grey leading-relaxed mb-4">
                  Also ask what happens when life gets in the way, illness, school exams, family travel. A quality academy will have a clear, fair rescheduling policy that acknowledges the reality of raising children in America. A rigid policy with no make-up classes is a sign that the academy prioritizes billing cycles over student success.
                </p>

                {/* H2 6, Red Flags */}
                <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
                  6. Red Flags That Should Make You Walk Away
                </h2>
                <p className="text-grey leading-relaxed mb-4">
                  Even with careful research, some academies will look better on the surface than they are in practice. Here are five warning signs that should give any parent serious pause, and in most cases, should prompt you to look elsewhere entirely.
                </p>
                <ul className="space-y-4 mb-6">
                  {[
                    {
                      flag: "No free trial class offered",
                      detail:
                        "Any academy confident in its teachers and quality will offer a free trial without hesitation. Refusing or making it unnecessarily complicated to access a trial is a sign the academy knows the experience will not hold up to scrutiny.",
                    },
                    {
                      flag: "No visible teacher certifications or credentials",
                      detail:
                        "If the academy's website or team page contains no information about teacher qualifications, no certifying boards mentioned, no Ijazah credentials, no educational backgrounds, that information is absent for a reason. Certified teachers are proud of their credentials and legitimate academies display them prominently.",
                    },
                    {
                      flag: "Pressure to pay a large sum upfront before classes begin",
                      detail:
                        "Legitimate academies charge monthly or by the session. An academy that insists on weeks or months of payment in advance before your child has attended a single class is prioritizing cash flow over your family's trust. This is especially concerning when combined with vague refund policies.",
                    },
                    {
                      flag: "No female teacher option available",
                      detail:
                        "For a Quran academy serving Muslim families, having no female teachers is a significant operational failure. It suggests a lack of genuine investment in serving the full community, and for families with daughters or adult women seeking instruction, it is an immediate dealbreaker.",
                    },
                    {
                      flag: "One-size-fits-all curriculum with no assessment process",
                      detail:
                        "If an academy places every new student in the same starting class regardless of their prior knowledge, they are not practicing personalized education. A child who already reads Arabic fluently should not spend months on letter recognition. A generic curriculum signals an operation focused on volume, not quality.",
                    },
                  ].map(({ flag, detail }) => (
                    <li key={flag} className="flex gap-4 bg-red-50 border border-red-100 rounded-xl p-4">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-navy mb-1">{flag}</p>
                        <p className="text-grey text-sm leading-relaxed">{detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* H2 7, Ease Quran Meets Every Standard */}
                <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-10">
                  How Ease Quran Academy Meets Every Standard
                </h2>
                <p className="text-grey leading-relaxed mb-4">
                  Ease Quran Academy was built by Wifaq ul Madaris-certified Quran teachers who saw firsthand the frustration Muslim families in America faced when trying to find genuinely qualified, trustworthy online Quran instruction. Every policy, every hiring standard, and every curriculum decision at Ease Quran has been made with one question in mind: what would a Muslim parent in America actually need to feel confident about their child&apos;s Quran education?
                </p>

                <ul className="space-y-4 mb-6">
                  {[
                    "Every teacher holds formal certification from recognized Islamic boards, including Wifaq ul Madaris. Credentials are verified before any teacher is permitted to take students.",
                    "A free trial class is available to every new family, no credit card required, no pressure to continue if it is not the right fit.",
                    "We maintain a dedicated team of certified female Quran teachers available for daughters, sisters, and adult women in your family.",
                    "Our curriculum covers every level, from Noorani Qaida for 4-year-olds to Hifz programs for advanced students to specialized classes for adult beginners and new Muslims.",
                    "Scheduling is built around American family life, with evening and weekend slots available across all major US time zones.",
                    "Our pricing is transparent, fair, and publicly listed, no hidden fees, no pressure to pay months in advance.",
                  ].map((point) => (
                    <li key={point} className="flex gap-4 bg-green-50 border border-green-100 rounded-xl p-4">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-grey text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>

                <p className="text-grey leading-relaxed mb-4">
                  We encourage every family to read{" "}
                  <Link href="/about" className="text-gold font-semibold hover:underline">
                    about our academy
                  </Link>{" "}
                  and to review{" "}
                  <Link href="/pricing" className="text-gold font-semibold hover:underline">
                    our pricing plans
                  </Link>{" "}
                  in full before making a decision. Transparency is the foundation of trust, and trust is the foundation of education.
                </p>

                {/* FAQ Section */}
                <h2 className="font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-6 mt-10">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4 mb-10">
                  {[
                    {
                      q: "How much do online Quran classes cost in the USA?",
                      a: "Online Quran classes in the USA typically range from $30 to $100+ per month depending on class frequency, session length, and the academy's teacher credentials. At Ease Quran Academy, our plans are designed to be accessible for American Muslim families, with flexible options for one, two, or five sessions per week. You can view our exact pricing on our pricing page with no surprises.",
                    },
                    {
                      q: "What is the best age to start Quran classes?",
                      a: "Most Quran educators agree that age 4 to 6 is an ideal starting point, as children at this stage are highly receptive to language learning and memorization. At this age, classes begin with Noorani Qaida, learning Arabic letters and basic pronunciation, before moving on to Quran recitation. That said, it is never too late to start. We have adult students who begin their Quran journey in their 30s, 40s, and beyond, and our programs are designed to meet every learner where they are.",
                    },
                    {
                      q: "Can I get a female Quran teacher for my daughter?",
                      a: "Yes, absolutely. At Ease Quran Academy, we have a dedicated team of certified female Quran teachers available for daughters, sisters, and adult women. You can specifically request a female teacher when booking your free trial class, and we will match your child or family member with an appropriate certified female instructor from the beginning.",
                    },
                    {
                      q: "How do I know if an online Quran teacher is qualified?",
                      a: "Ask specifically about their educational credentials. Look for certifications from recognized Islamic boards such as Wifaq ul Madaris Al-Arabia, Tanzeem ul Madaris, or Rabita-tul-Madaris. A qualified teacher should also hold an Ijazah, a chain of certification tracing back to the Prophet Muhammad (PBUH), for Quran recitation. At Ease Quran Academy, every teacher's credentials are verified before they are permitted to teach, and we are happy to share this information with any family that asks.",
                    },
                    {
                      q: "Is there a free trial before I pay?",
                      a: "Yes. Ease Quran Academy offers a completely free trial class with no credit card required. This gives you and your child the chance to meet the teacher, experience the class format, and ask any questions before making a financial commitment. We strongly encourage all families to take advantage of the free trial, it is the best way to know whether the academy and the teacher are the right fit for your family.",
                    },
                  ].map(({ q, a }) => (
                    <div
                      key={q}
                      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
                    >
                      <div className="bg-navy px-6 py-4">
                        <p className="font-playfair font-semibold text-white text-base">{q}</p>
                      </div>
                      <div className="px-6 py-4">
                        <p className="text-grey leading-relaxed text-sm">{a}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 mb-10">
                  <h2 className="font-playfair font-bold text-xl text-navy mb-4">
                    Ready to Make the Right Choice?
                  </h2>
                  <p className="text-grey leading-relaxed mb-4">
                    Choosing an online Quran academy is ultimately about trust, trust that the teacher is qualified, that the curriculum is right for your child, that the scheduling will work for your family, and that the academy you choose genuinely cares about your child&apos;s progress and not just your monthly payment. The six factors in this guide are your roadmap to making that decision with confidence.
                  </p>
                  <p className="text-grey leading-relaxed mb-6">
                    If you would like to experience Ease Quran Academy for yourself, the best next step is simple:{" "}
                    <Link href="/free-trial" className="text-gold font-semibold hover:underline">
                      book your free trial class
                    </Link>{" "}
                    today. Meet your teacher, watch the class in action, and decide with complete information and no financial pressure. We are confident you will see the difference, and we look forward to welcoming your family to Ease Quran Academy.
                  </p>
                  <Link
                    href="/free-trial"
                    className="inline-block bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy/90 transition-colors text-sm"
                  >
                    Book Your Free Trial Class, no Credit Card Required
                  </Link>
                </div>

                {/* Author Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center shrink-0">
                      <span className="font-playfair font-bold text-gold text-xl">EQ</span>
                    </div>
                    <div>
                      <p className="font-playfair font-bold text-navy text-lg mb-1">Ease Quran Team</p>
                      <p className="text-gold text-sm font-semibold mb-3">
                        Certified Quran Teachers &amp; Islamic Education Specialists
                      </p>
                      <p className="text-grey text-sm leading-relaxed">
                        The Ease Quran Team consists of Wifaq ul Madaris-certified Quran teachers with extensive experience teaching students across the United States, Canada, the United Kingdom, and Australia. Together, they are dedicated to providing accessible, high-quality Quran education for Muslim families living in the West. Their mission: to ensure that no Muslim child in America goes without the opportunity to learn the Quran from a truly qualified teacher.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:w-72 shrink-0">
                <div className="sticky top-24 space-y-6">

                  {/* Table of Contents */}
                  <div className="bg-navy rounded-2xl p-6">
                    <p className="font-playfair font-bold text-white text-base mb-4">
                      Table of Contents
                    </p>
                    <nav>
                      <ol className="space-y-2 text-sm">
                        {[
                          { label: "1. Verify Teacher Certification", anchor: "#verify-certification" },
                          { label: "2. Demand a Free Trial Class", anchor: "#free-trial" },
                          { label: "3. Ask About Female Teachers", anchor: "#female-teachers" },
                          { label: "4. Evaluate the Curriculum", anchor: "#curriculum" },
                          { label: "5. USA-Friendly Scheduling", anchor: "#scheduling" },
                          { label: "6. Red Flags to Avoid", anchor: "#red-flags" },
                          { label: "How Ease Quran Measures Up", anchor: "#ease-quran" },
                          { label: "Frequently Asked Questions", anchor: "#faq" },
                        ].map(({ label, anchor }) => (
                          <li key={anchor}>
                            <a
                              href={anchor}
                              className="text-gold hover:text-white transition-colors hover:underline block py-0.5"
                            >
                              {label}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </div>

                  {/* Sidebar CTA */}
                  <div className="bg-gold rounded-2xl p-6 text-center">
                    <p className="font-playfair font-bold text-navy text-base mb-2">
                      Start With a Free Class
                    </p>
                    <p className="text-navy/80 text-xs leading-relaxed mb-4">
                      No credit card. No commitment. Just meet your teacher and decide.
                    </p>
                    <Link
                      href="/free-trial"
                      className="block bg-navy text-white font-bold px-4 py-3 rounded-xl hover:bg-navy/90 transition-colors text-sm"
                    >
                      Book Free Trial →
                    </Link>
                  </div>

                  {/* Explore Courses */}
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <p className="font-playfair font-bold text-navy text-base mb-4">
                      Explore Our Courses
                    </p>
                    <ul className="space-y-2 text-sm">
                      {[
                        { href: "/courses/noorani-qaida", label: "Noorani Qaida" },
                        { href: "/courses/quran-for-kids", label: "Quran for Kids" },
                        { href: "/courses/tajweed", label: "Tajweed Course" },
                        { href: "/courses/hifz", label: "Hifz Program" },
                        { href: "/courses/quran-for-adults", label: "Quran for Adults" },
                        { href: "/courses/quran-for-reverts", label: "Quran for Reverts" },
                        { href: "/courses/arabic-language", label: "Arabic Language" },
                        { href: "/courses/islamic-studies", label: "Islamic Studies" },
                      ].map(({ href, label }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="text-gold font-semibold hover:underline hover:text-navy transition-colors"
                          >
                            → {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Next Steps
            </span>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy">
              Explore the Right Course for Your Family
            </h2>
            <p className="text-grey text-sm mt-3 max-w-xl mx-auto">
              Every learner is at a different stage. Find the program that matches your child&apos;s level, or your own, and start with a free trial class.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/courses/noorani-qaida",
                title: "Noorani Qaida",
                desc: "Perfect starting point for children ages 4–8 who are learning Arabic letters for the first time.",
                icon: "🔤",
              },
              {
                href: "/courses/quran-for-kids",
                title: "Quran for Kids",
                desc: "Structured Quran recitation for children who can already read Arabic letters.",
                icon: "📖",
              },
              {
                href: "/courses/tajweed",
                title: "Tajweed Course",
                desc: "Master the rules of correct Quran recitation with our certified Tajweed specialists.",
                icon: "🎵",
              },
              {
                href: "/courses/hifz",
                title: "Hifz Program",
                desc: "A structured, accountable memorization program for students ready to commit to full Quran memorization.",
                icon: "🌟",
              },
              {
                href: "/courses/quran-for-adults",
                title: "Quran for Adults",
                desc: "Adult-paced learning designed for busy professionals and parents who want to strengthen their recitation.",
                icon: "📚",
              },
              {
                href: "/courses/quran-for-reverts",
                title: "Quran for Reverts",
                desc: "A welcoming, patient-paced program for new Muslims beginning their Quran journey from scratch.",
                icon: "🤲",
              },
              {
                href: "/female-quran-teachers",
                title: "Female Quran Teachers",
                desc: "Request a certified female Quran teacher for your daughter or any woman in your family.",
                icon: "👩‍🏫",
              },
              {
                href: "/free-trial",
                title: "Book a Free Trial",
                desc: "Not sure where to start? Book a free class and let our teacher assess the right level.",
                icon: "✅",
              },
            ].map(({ href, title, desc, icon }) => (
              <Link
                key={href}
                href={href}
                className="bg-offwhite border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group block"
              >
                <span className="text-2xl mb-3 block">{icon}</span>
                <p className="font-playfair font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">
                  {title}
                </p>
                <p className="text-grey text-xs leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
