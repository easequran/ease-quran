import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedCourse {
  title: string;
  href: string;
  description: string;
}

interface RelatedCoursesProps {
  courses: RelatedCourse[];
  heading?: string;
}

export default function RelatedCourses({
  courses,
  heading = "Explore Other Courses",
}: RelatedCoursesProps) {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Keep Exploring
          </span>
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-navy mt-3">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-playfair font-bold text-lg text-navy mb-2 group-hover:text-gold transition-colors">
                {course.title}
              </h3>
              <p className="text-grey text-sm leading-relaxed mb-4">{course.description}</p>
              <span className="flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/courses"
            className="inline-block border-2 border-navy text-navy font-semibold px-8 py-3 rounded-xl hover:bg-navy hover:text-white transition-all duration-200 text-sm"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
