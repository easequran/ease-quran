import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
}

export default function CourseCard({ title, description, image, href, badge }: CourseCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm border-2 border-gold/40 hover:border-gold hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={image}
          alt={`${title} - Online Quran Course`}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="card-title mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="body-sm mb-4">{description}</p>
        <span className="flex items-center gap-1.5 text-gold text-[15px] font-semibold group-hover:gap-2.5 transition-all">
          Learn More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
