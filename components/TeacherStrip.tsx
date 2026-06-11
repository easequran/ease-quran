import { Award } from "lucide-react";

interface TeacherStripProps {
  title?: string;
}

const teachers = [
  {
    name: "Shah Zaib",
    role: "Founder & Head Teacher · Wifaq ul Madaris · 6+ yrs experience",
    image: "/images/founder.webp",
  },
  {
    name: "Muhammad Umair",
    role: "Tajweed & Hifz Specialist · Certified",
    image: "/images/teacher-1.webp",
  },
  {
    name: "Almas Fatima",
    role: "Female Teacher · Sisters & Children · Qaria e Quran",
    image: "/images/teacher-2.webp",
  },
];

export default function TeacherStrip({ title = "Meet Your Certified Teachers" }: TeacherStripProps) {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container-custom py-10">
        <div className="text-center mb-8">
          <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-2">
            Credential-Verified
          </span>
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {teachers.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-4 bg-offwhite border border-gray-100 rounded-2xl p-4"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gold/10 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.image} alt={`${t.name}, Quran teacher`} className="w-full h-full object-cover object-top" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-navy text-sm flex items-center gap-1.5">
                  {t.name}
                  <Award size={13} className="text-gold shrink-0" />
                </p>
                <p className="text-grey text-xs leading-snug mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
