import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quran & Islamic Education Blog",
  description:
    "Read articles on Quran teaching methods, Islamic education for kids in America, Tajweed tips, and choosing the right online Quran academy.",
  alternates: { canonical: "https://easequran.com/blog" },
  openGraph: {
    title: "Quran & Islamic Education Blog | Ease Quran Online Academy",
    description:
      "Read articles on Quran teaching methods, Islamic education for kids in America, Tajweed tips, and choosing the right online Quran academy.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Quran & Islamic Education Blog, Ease Quran Academy" }],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "The Ease Quran Blog",
  url: "https://easequran.com/blog",
  description:
    "Articles on Quran teaching methods, Islamic education for kids in America, Tajweed tips, and choosing the right online Quran academy.",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Ease Quran Online Academy",
    url: "https://easequran.com",
  },
  inLanguage: "en-US",
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
    title: "How to Choose an Online Quran Academy for Your Child",
    slug: "how-to-choose-online-quran-academy",
    excerpt:
      "With hundreds of online Quran academies claiming to be the best, how does a Muslim parent in America know who to trust? Learn the 6 most important factors: teacher certification, free trial availability, female teacher options, curriculum quality, flexible scheduling, and red flags to avoid.",
    date: "January 15, 2025",
    category: "Parenting & Education",
    readTime: "8 min",
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

        <h2 className="card-title leading-snug mb-3 flex-1">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Quran & Islamic Education
            </span>
            <h1 className="heading-1 text-white mb-6">
              The Ease Quran Blog
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Practical guidance for Muslim parents in America, covering Tajweed tips, Hifz
              strategies, how to find trusted Quran teachers online, and everything in between.
              Written by our certified teachers to help your family succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Topics/Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="eyebrow mb-4">
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
              is booking a free trial class with one of our certified teachers, completely free,
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
