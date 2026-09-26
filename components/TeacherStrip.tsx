import Link from "next/link";
import { Award } from "lucide-react";
import { teachers } from "@/lib/teachers";

interface TeacherStripProps {
  title?: string;
}

// A representative sample, not the full roster (see /teachers for everyone).
const featured = [
  teachers.find((t) => t.slug === "ustadh-abdullah-ahmed")!,
  teachers.find((t) => t.slug === "almas-fatima")!,
  teachers.find((t) => t.slug === "ustadh-ibrahim-raza")!,
];

export default function TeacherStrip({ title = "Meet Some of Our Teachers" }: TeacherStripProps) {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container-custom py-10">
        <div className="text-center mb-8">
          <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-2">
            Checked Before Joining
          </span>
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {featured.map((t) => (
            <Link
              key={t.slug}
              href={`/teachers#${t.slug}`}
              className="flex items-center gap-4 bg-offwhite border border-gray-100 rounded-2xl p-4 hover:border-gold/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gold/10 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.photo} alt={`${t.honorific} ${t.name}, Quran teacher`} className="w-full h-full object-cover object-top" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-navy text-sm flex items-center gap-1.5">
                  {t.honorific} {t.name}
                  <Award size={13} className="text-gold shrink-0" />
                </p>
                <p className="text-grey text-xs leading-snug mt-0.5">{t.headline}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center text-sm mt-6">
          <Link href="/teachers" className="text-gold font-semibold hover:underline">
            Meet all our teachers
          </Link>
        </p>
      </div>
    </section>
  );
}
