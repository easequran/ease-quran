import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating?: number;
  course?: string;
}

export default function TestimonialCard({
  name,
  location,
  text,
  rating = 5,
  course,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={15} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="text-grey leading-relaxed text-sm mb-5 italic">&ldquo;{text}&rdquo;</p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-navy text-sm">{name}</p>
        <p className="text-grey text-xs mt-0.5">{location}</p>
        {course && <p className="text-gold text-xs mt-1 font-medium">{course}</p>}
      </div>
    </div>
  );
}
