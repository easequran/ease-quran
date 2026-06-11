import { Award } from "lucide-react";

interface TeacherStripProps {
  title?: string;
}

const teachers = [
  {
    name: "Shah Zaib",
    role: "Founder & Head Teacher · Wifaq ul Madaris · 6+ yrs experience",
    icon: true,
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
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gold/10 shrink-0 flex items-center justify-center">
                {t.icon ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-gold" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.image} alt={`${t.name}, Quran teacher`} className="w-full h-full object-cover" />
                )}
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
