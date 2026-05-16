import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quran & Islamic Education Blog | Ease Quran Academy",
  description:
    "Read articles on Quran teaching methods, Islamic education for kids in America, Tajweed tips, and how to choose the best online Quran academy for your family.",
  openGraph: {
    title: "Quran & Islamic Education Blog | Ease Quran Academy",
    description:
      "Read articles on Quran teaching methods, Islamic education for kids in America, Tajweed tips, and how to choose the best online Quran academy for your family.",
    images: ["/images/og-image.png"],
  },
};

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    title: "How to Choose the Best Online Quran Academy for Your Child in America",
    slug: "how-to-choose-online-quran-academy",
    excerpt:
      "With hundreds of online Quran academies claiming to be the best, how does a Muslim parent in America know who to trust? In this guide, we walk you through the 5 most important factors — teacher certification, free trial availability, female teacher options, and what credentials to look for before committing your family's time and money.",
    date: "December 15, 2024",
    category: "Parenting & Education",
    readTime: "7 min",
  },
  {
    title: "What Is Wifaq ul Madaris? Why Teacher Certification Matters for Your Child",
    slug: "what-is-wifaq-ul-madaris",
    excerpt:
      "Wifaq ul Madaris Al-Arabia is the largest Islamic education board in Pakistan, certifying thousands of Islamic scholars annually. Its credentials are recognized by institutions across the Middle East, Europe, and North America. Here's why this certification is the gold standard for online Quran teachers — and what it means for your child's education.",
    date: "January 8, 2025",
    category: "Islamic Education",
    readTime: "5 min",
  },
  {
    title: "The Complete Guide to Tajweed Rules for Beginners (with Examples)",
    slug: "tajweed-rules-for-beginners",
    excerpt:
      "Tajweed is not just about reciting the Quran beautifully — it is about reciting it correctly, exactly as it was revealed. In this beginner-friendly guide, we break down the 5 most essential Tajweed rules every new student must learn, with practical English examples and tips from our certified teachers to get you started the right way.",
    date: "January 22, 2025",
    category: "Tajweed & Recitation",
    readTime: "10 min",
  },
  {
    title: "How to Help Your Child Memorize the Quran (Hifz) While Living in America",
    slug: "hifz-tips-for-muslim-kids-in-america",
    excerpt:
      "Raising a Hafiz or Hafiza in America comes with unique challenges — school schedules, sports, social pressures, and limited Islamic environment. But it is absolutely achievable. Our certified Hifz teachers share proven daily routines, revision strategies, and motivational techniques that have helped dozens of American Muslim children complete their memorization.",
    date: "February 5, 2025",
    category: "Hifz Program",
    readTime: "8 min",
  },
  {
    title: "Female Quran Teachers Online: Why It Matters and Where to Find One in USA",
    slug: "female-quran-teacher-online-usa",
    excerpt:
      "For many Muslim families in America, having a female Quran teacher is not a preference — it is a requirement rooted in Islamic values. Whether for your daughter, for a sister learning as an adult, or simply a parental comfort level, access to a qualified, certified female Quran teacher online can be surprisingly difficult to find. We explain why it matters and how Ease Quran makes it simple.",
    date: "February 18, 2025",
    category: "Female Teachers",
    readTime: "6 min",
  },
  {
    title: "Noorani Qaida for Kids: How to Teach Your Child to Read Arabic from Scratch",
    slug: "noorani-qaida-for-kids",
    excerpt:
      "Noorani Qaida is the most widely used and trusted method for teaching children to read Arabic letters from scratch — the essential first step before they can recite the Quran. In this beginner's guide, we explain what Noorani Qaida is, how it works, what a typical course looks like, and why it remains the best starting point for any child beginning their Quran journey.",
    date: "March 3, 2025",
    category: "Quran for Kids",
    readTime: "6 min",
  },
];

const categoryColors: Record<string, string> = {
  "Parenting & Education": "bg-blue-100 text-blue-700",
  "Islamic Education": "bg-purple-100 text-purple-700",
  "Tajweed & Recitation": "bg-green-100 text-green-700",
  "Hifz Program": "bg-orange-100 text-orange-700",
  "Female Teachers": "bg-pink-100 text-pink-700",
  "Quran for Kids": "bg-yellow-100 text-yellow-700",
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Category & meta */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              categoryColors[post.category] ?? "bg-gold/10 text-gold"
            }`}
          >
            {post.category}
          </span>
          <span className="text-grey text-xs">{post.readTime} read</span>
        </div>

        <h2 className="font-playfair font-bold text-lg text-navy leading-snug mb-3 flex-1">
          {post.title}
        </h2>

        <p className="text-grey text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <time className="text-grey text-xs">{post.date}</time>
          <Link
            href={`/blog/${post.slug}`}
            className="text-gold font-semibold text-sm hover:text-navy transition-colors"
            aria-label={`Read more: ${post.title}`}
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Quran & Islamic Education
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              The Ease Quran Blog
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Practical guidance for Muslim parents in America — covering Tajweed tips, Hifz
              strategies, how to find trusted Quran teachers online, and everything in between.
              Written by our certified teachers to help your family succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-2">
                Latest Articles
              </span>
              <h2 className="font-playfair font-bold text-2xl text-navy">
                {posts.length} Articles Published
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-navy rounded-2xl p-10 text-center">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Stay Updated
            </span>
            <h3 className="font-playfair font-bold text-2xl md:text-3xl text-white mb-4">
              Get New Articles in Your Inbox
            </h3>
            <p className="text-white/70 text-sm max-w-lg mx-auto mb-6">
              Join Muslim parents across America who receive our latest Quran education tips,
              teaching resources, and exclusive guides — delivered straight to your inbox.
            </p>
            <Link
              href="/free-trial"
              className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-colors text-sm"
            >
              Book a Free Trial Class Instead →
            </Link>
          </div>
        </div>
      </section>

      {/* Topics/Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Browse by Topic
            </span>
            <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy">
              Explore Our Topics
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(categoryColors).map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-default ${categoryColors[cat]}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-offwhite section-padding">
        <div className="container-custom">
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-10 text-center max-w-3xl mx-auto">
            <h3 className="font-playfair font-bold text-2xl text-navy mb-3">
              Ready to Start Your Child's Quran Education?
            </h3>
            <p className="text-grey text-sm leading-relaxed mb-6">
              Reading about Quran education is a great start. But the best step you can take today
              is booking a free trial class with one of our certified teachers — completely free,
              no credit card required.
            </p>
            <Link
              href="/free-trial"
              className="inline-block bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy/90 transition-colors text-sm"
            >
              Book Your Free Trial Class
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
