import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const PAGE_URL = "https://easequran.com/blog/how-long-does-it-take-to-memorize-the-quran";
const TITLE = "How Long Does It Take to Memorize the Quran?";
const PUBLISHED = "2026-09-25";

export const metadata: Metadata = {
  title: { absolute: "How Long Does It Take to Memorize the Quran? Realistic Timelines" },
  description:
    "There is no single answer, but there are realistic ranges. See how age, reading level, daily pace and revision shape a Hifz timeline for kids and adults.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description:
      "Realistic Hifz timelines for children, teens and adults, and the factors that make memorizing the Quran faster or slower.",
    url: PAGE_URL,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Ease Quran Team"],
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Realistic Hifz timelines for children, teens and adults, and what really changes the pace.",
    images: ["https://easequran.com/images/og-image.png"],
  },
};

const faqs = [
  {
    question: "Can you memorize the Quran in one year?",
    answer:
      "Some full-time students do, but it means memorizing around two pages every day with revision on top, usually in a dedicated Hifz school. For children and adults studying alongside school or work, a one year target tends to create pressure and weak retention. A steady pace you can keep for years is a better goal.",
  },
  {
    question: "What is the best age to start Hifz?",
    answer:
      "We recommend that children are at least 7 years old and can already read the Quran fluently with basic Tajweed. Starting before a child reads properly usually leads to frustration and weak memorization. Every child is assessed individually in the free trial class.",
  },
  {
    question: "How many pages of the Quran should I memorize a day?",
    answer:
      "Beginners often start with three to five lines a day and build up as their memory and confidence grow. Half a page to a page a day is a common pace for committed students. The right amount is whatever you can recite accurately the next day while still keeping up with revision.",
  },
  {
    question: "Can adults memorize the whole Quran?",
    answer:
      "Yes. Adults usually move more slowly than children because of work and family commitments, but they often bring stronger motivation and discipline. Many adults also set a partial goal first, such as Juz Amma or several Juz, which is a meaningful achievement in its own right.",
  },
  {
    question: "What if I forget parts I have already memorized?",
    answer:
      "Forgetting is a normal part of Hifz. That is why a good program builds in daily revision of recent lessons and a rotating review of older Juz. A teacher who tracks your revision will spot weak portions early, before they slip.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description:
    "A realistic guide to how long it takes to memorize the Quran, covering age, reading level, daily study time, memorization pace, revision and teacher support.",
  author: { "@type": "Organization", name: "Ease Quran Team", url: "https://easequran.com/about" },
  publisher: {
    "@type": "Organization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
    logo: { "@type": "ImageObject", url: "https://easequran.com/images/logo.png" },
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  image: "https://easequran.com/images/Courses/online-hifz-quran-memorization.webp",
  mainEntityOfPage: PAGE_URL,
  url: PAGE_URL,
  inLanguage: "en-US",
  about: [
    { "@type": "Thing", name: "Hifz" },
    { "@type": "Thing", name: "Quran memorization" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://easequran.com/blog" },
    { "@type": "ListItem", position: 3, name: TITLE, item: PAGE_URL },
  ],
};

// Worked examples. Pages refer to the common 604-page Madani mushaf; weeks
// are rounded, and none of this includes revision-only days or breaks.
const paceExamples = [
  { pace: "5 lines a day, 5 days a week", perWeek: "about 1.7 pages", time: "roughly 7 years" },
  { pace: "Half a page a day, 5 days a week", perWeek: "2.5 pages", time: "roughly 4.5 to 5 years" },
  { pace: "1 page a day, 5 days a week", perWeek: "5 pages", time: "a little over 2 years" },
  { pace: "2 pages a day, 6 days a week", perWeek: "12 pages", time: "roughly 1 year" },
];

const h2 = "font-playfair font-bold text-2xl text-navy border-l-4 border-gold pl-4 mb-4 mt-12";
const h3 = "font-playfair font-semibold text-xl text-navy mb-3 mt-8";
const p = "text-grey leading-relaxed mb-4";
const a = "text-gold font-semibold hover:underline";

export default function HowLongToMemorizeQuranPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80 truncate max-w-xs">{TITLE}</li>
            </ol>
          </nav>
          <span className="inline-block bg-gold/20 eyebrow px-3 py-1 rounded-full mb-6">Hifz Program</span>
          <h1 className="heading-2 text-white leading-tight mb-8 max-w-4xl">{TITLE}</h1>
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-gold" />
              Ease Quran Team, Certified Quran Teachers
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold" />
              <time dateTime={PUBLISHED}>September 25, 2026</time>
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              10 min read
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-grey text-sm hover:text-gold transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <p className={p}>
              It is usually the first question a parent asks when their child mentions Hifz, and
              the first one an adult asks themselves before committing. The honest answer is that
              nobody can give you a fixed number. What we can give you is a realistic range, the
              arithmetic behind it, and the handful of factors that decide where you land within
              it.
            </p>

            {/* Short answer, written to stand alone as a snippet */}
            <div className="bg-white border-l-4 border-gold rounded-r-2xl p-6 my-8 shadow-sm">
              <h2 className="font-playfair font-bold text-lg text-navy mb-2">The short answer</h2>
              <p className="text-grey leading-relaxed">
                For most students studying part time, memorizing the whole Quran takes several
                years. A child with five classes a week who practices every day can often finish
                in three to five years, and adults usually take longer, often five to eight. Full-time students can finish faster. Age, reading
                fluency, daily time and revision all change the pace.
              </p>
            </div>

            <h2 className={h2}>How much is there to memorize?</h2>
            <p className={p}>
              The Quran has 114 Surahs divided into 30 Juz. In the standard Madani mushaf used by
              most Hifz students, that comes to about 604 pages of 15 lines each. Teachers usually
              plan Hifz by lines and pages rather than by Surahs, because Surahs vary so much in
              length. Al-Baqarah alone fills around 48 pages, while many Surahs in the last Juz fit
              several to a page.
            </p>
            <p className={p}>
              That is why most students begin with Juz Amma, the 30th Juz. The Surahs are short,
              familiar from daily prayer, and give a new student quick, motivating wins before
              they move on to the longer Surahs.
            </p>

            <h2 className={h2}>The arithmetic behind a Hifz timeline</h2>
            <p className={p}>
              The simplest way to understand the range is to divide 604 pages by a weekly pace.
              The table below does exactly that. These are worked examples, not promises: they
              count new memorization only and assume no breaks.
            </p>
            <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 bg-white">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Example Hifz timelines by daily pace</caption>
                <thead className="bg-navy text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Daily new memorization</th>
                    <th scope="col" className="px-4 py-3 font-semibold">New pages per week</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Time for 604 pages</th>
                  </tr>
                </thead>
                <tbody>
                  {paceExamples.map((row) => (
                    <tr key={row.pace} className="border-t border-gray-100">
                      <td className="px-4 py-3 text-navy font-medium">{row.pace}</td>
                      <td className="px-4 py-3 text-grey">{row.perWeek}</td>
                      <td className="px-4 py-3 text-grey">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={p}>
              Real timelines run longer than the table. Students take days off for illness,
              exams and holidays. Some weeks are spent entirely on revision because an older Juz
              has started to slip. The longer Surahs in the middle of the Quran can also feel
              slower than Juz Amma. A useful rule of thumb is to add a meaningful buffer to any
              figure you calculate.
            </p>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-10 shadow-md">
              <Image
                src="/images/Courses/online-hifz-quran-memorization.webp"
                alt="Adult student reading from the Quran while working on memorizing it"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            <h2 className={h2}>What changes how long Hifz takes</h2>

            <h3 className={h3}>Age</h3>
            <p className={p}>
              Children between roughly 7 and 12 often memorize new lines quickly and hold on to
              them well, which is why so many Hifz students start at that age. They also have
              school, so their daily time is limited. Teens can handle longer sessions but face
              heavier homework and exams. Adults usually memorize more slowly, but they tend to be
              more disciplined and more aware of why they are doing it.
            </p>

            <h3 className={h3}>How well the student already reads</h3>
            <p className={p}>
              This is the factor families most often underestimate. A student who still stumbles
              over letters or vowel marks spends the lesson decoding rather than memorizing, and
              any mistake made while memorizing becomes a mistake that has to be unlearned later.
              We recommend that children can read the Quran fluently with basic Tajweed before
              starting Hifz. If that is not there yet, a few months of{" "}
              <Link href="/courses/noorani-qaida" className={a}>Noorani Qaida</Link> or{" "}
              <Link href="/courses/tajweed" className={a}>Tajweed classes</Link> first will
              usually save time overall.
            </p>

            <h3 className={h3}>Daily study time</h3>
            <p className={p}>
              Class time alone is rarely enough. In our{" "}
              <Link href="/courses/hifz" className={a}>Hifz program</Link> we ask students to
              practice on their own for at least 30 to 45 minutes a day alongside their lessons.
              That home practice is where the new lines are repeated until they stick and where
              revision happens.
            </p>

            <h3 className={h3}>Memorization pace</h3>
            <p className={p}>
              New students often start with three to five lines a day and build up. Pushing for
              more before the student is ready usually backfires, because shaky new lessons pile
              up faster than they can be revised. A good teacher raises the daily amount only
              when the previous lessons are being recited cleanly.
            </p>

            <h3 className={h3}>Revision</h3>
            <p className={p}>
              Revision is what separates finishing Hifz from finishing it and keeping it. Most
              teachers organise it in three layers. The <strong className="text-navy">sabaq</strong>{" "}
              is the new lesson for the day. The <strong className="text-navy">sabqi</strong> is
              a review of what was memorized recently, often the last several days or the current
              Juz. The <strong className="text-navy">manzil</strong> is a rotating review of
              everything memorized before that. As a student progresses, revision takes up a
              larger share of each day, which is one reason the pace naturally slows in the later
              Juz.
            </p>

            <h3 className={h3}>Consistency</h3>
            <p className={p}>
              Short, daily practice beats long, occasional sessions. A student who memorizes a
              little every day and revises every day will almost always outpace one who does a
              big session on the weekend and nothing in between. This is also why our Hifz
              classes run five days a week.
            </p>

            <h3 className={h3}>Teacher support</h3>
            <p className={p}>
              A teacher does more than listen. They correct pronunciation before an error is
              memorized, set a realistic daily amount, decide when to slow down for revision and
              notice when motivation dips. Working one-on-one means those decisions are made for
              the student in front of them, not for a class average.
            </p>

            <h3 className={h3}>Individual differences</h3>
            <p className={p}>
              Two students with the same age and schedule can still move at very different
              speeds. Memory, attention, motivation, family support, health and what else is
              happening in their lives all play a part. Comparing a child to a cousin or a
              classmate rarely helps. Comparing them to where they were three months ago does.
            </p>

            <h2 className={h2}>Example scenarios</h2>
            <p className={p}>
              The three examples below are illustrations built from the arithmetic above. They are
              not guarantees and they are not based on any particular student.
            </p>

            <h3 className={h3}>A nine year old who already reads fluently</h3>
            <p className={p}>
              Five classes a week, 30 to 45 minutes of practice at home, and about half a page of
              new memorization on class days. New memorization alone works out at around four and
              a half to five years, and revision weeks and holidays will add to that. Some children
              speed up noticeably once the habit is set.
            </p>

            <h3 className={h3}>A teenager who has memorized Juz Amma</h3>
            <p className={p}>
              With the last Juz already in place, around 580 pages remain. At a page a day, five
              days a week, that is a little over two years of new memorization before revision is
              counted. Exam seasons are the usual pressure point, so it helps to plan lighter
              weeks around them in advance.
            </p>

            <h3 className={h3}>A working adult with less time at home</h3>
            <p className={p}>
              A realistic pace might be five lines a day, five days a week, which is roughly seven
              years for the whole Quran. That is in line with the five to eight years adults commonly take.
              Many adults choose to aim for Juz Amma or a set number of Juz first, then decide
              whether to continue.
            </p>

            <h2 className={h2}>Kids, teens and adults: setting realistic expectations</h2>
            <p className={p}>
              For children, the goal in the first year is a steady routine and clean recitation,
              not a page count. Parents help most by protecting the daily practice time and
              listening to the child recite, even if they cannot read Arabic themselves. Our{" "}
              <Link href="/courses/quran-for-kids" className={a}>Quran classes for kids</Link>{" "}
              are a good place to build the reading base first.
            </p>
            <p className={p}>
              For adults, it helps to think in Juz rather than in the whole Quran. Memorizing
              even 10 or 15 Juz is a meaningful achievement, and many adults find that learning
              the meaning of what they memorize keeps them going. Our{" "}
              <Link href="/courses/quran-for-adults" className={a}>Quran classes for adults</Link>{" "}
              are built around work schedules.
            </p>

            <h2 className={h2}>How to find your own pace</h2>
            <ol className="list-decimal pl-6 space-y-3 text-grey leading-relaxed mb-6">
              <li>
                <strong className="text-navy">Get an honest assessment.</strong> A teacher
                listening to the student read for ten minutes will tell you more than any
                calculator. Our{" "}
                <Link href="/free-trial" className={a}>free trial class</Link> includes one.
              </li>
              <li>
                <strong className="text-navy">Fix reading first.</strong> If the reading is not
                fluent yet, spend a few months on that before starting Hifz.
              </li>
              <li>
                <strong className="text-navy">Start small.</strong> Three to five lines a day is
                enough to begin. Increase only when recitation of recent lessons is clean.
              </li>
              <li>
                <strong className="text-navy">Protect revision.</strong> Never let new lessons
                crowd out the sabqi and manzil.
              </li>
              <li>
                <strong className="text-navy">Pick a fixed time.</strong> The same slot every day
                turns Hifz into a habit rather than a decision.
              </li>
              <li>
                <strong className="text-navy">Track progress.</strong> A simple notebook of
                pages memorized and revised makes slow weeks less discouraging.
              </li>
            </ol>

            <h2 className={h2}>Can you memorize the Quran online?</h2>
            <p className={p}>
              Yes. Hifz has always depended on a student reciting to a teacher who listens and
              corrects, and a live one-on-one video class does exactly that. For many families it
              is also the only practical option. In places where the nearest structured program is
              hours away, such as{" "}
              <Link href="/locations/jackson-mississippi" className={a}>Jackson, Mississippi</Link>{" "}
              or much of{" "}
              <Link href="/locations/alaska" className={a}>Alaska</Link>, daily classes at home are
              what make consistency possible at all.
            </p>
            <p className={p}>
              Our Hifz students follow the sabaq, sabqi and manzil system with a teacher who tracks
              every portion, and classes run five days a week. You can see plans, including
              the Hifz Intensive option, on our{" "}
              <Link href="/pricing" className={a}>pricing page</Link>.
            </p>

            <div className="bg-gold rounded-2xl p-6 my-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-playfair font-bold text-navy text-lg mb-1">
                  Not sure if you or your child are ready for Hifz?
                </p>
                <p className="text-navy/80 text-sm">
                  A free trial class includes a reading assessment and an honest recommendation.
                </p>
              </div>
              <Link
                href="/free-trial"
                className="whitespace-nowrap bg-navy text-white font-bold px-6 py-3 rounded-full hover:bg-navy/90 transition-colors text-sm"
              >
                Book Your Free Trial
              </Link>
            </div>

            <h2 className={h2}>Frequently asked questions</h2>
            <FAQAccordion faqs={faqs} />
          </article>
        </div>
      </section>

      {/* Next steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="eyebrow mb-4">Next Steps</span>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy">
              Courses That Lead to Hifz
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { href: "/courses/hifz", title: "Hifz Program", desc: "Structured memorization with daily sabaq and tracked revision." },
              { href: "/courses/tajweed", title: "Tajweed", desc: "Accurate recitation before and during memorization." },
              { href: "/courses/noorani-qaida", title: "Noorani Qaida", desc: "The reading foundation every future Hafiz needs." },
              { href: "/courses/quran-for-kids", title: "Quran for Kids", desc: "Reading, short Surahs and good habits for ages 4 to 14." },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-offwhite border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group block"
              >
                <p className="font-playfair font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">{c.title}</p>
                <p className="text-grey text-sm leading-relaxed">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
