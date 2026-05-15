import Image from "next/image";
import { Award, BookOpen } from "lucide-react";

interface TeacherCardProps {
  name: string;
  image: string;
  credential: string;
  speciality: string;
  experience: string;
  badge?: string;
  qualification?: string;
}

export default function TeacherCard({
  name,
  image,
  credential,
  speciality,
  experience,
  badge,
  qualification,
}: TeacherCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative overflow-hidden bg-offwhite" style={{ height: "300px" }}>
        <Image
          src={image}
          alt={`${name} - Quran Teacher at Ease Quran Online Academy`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        {badge && (
          <div className="absolute top-3 right-3 bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-playfair font-bold text-xl text-navy mb-1">{name}</h3>
        {qualification && (
          <p className="text-gold text-sm font-semibold mb-3">{qualification}</p>
        )}
        <div className="space-y-2.5 mt-3">
          <div className="flex items-start gap-2.5 text-sm text-grey">
            <Award size={15} className="text-gold mt-0.5 shrink-0" />
            <span>{credential}</span>
          </div>
          <div className="flex items-start gap-2.5 text-sm text-grey">
            <BookOpen size={15} className="text-gold mt-0.5 shrink-0" />
            <span>{speciality}</span>
          </div>
          <div className="flex items-start gap-2.5 text-sm text-grey">
            <span className="text-gold mt-0.5 shrink-0">⏱</span>
            <span>{experience}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
