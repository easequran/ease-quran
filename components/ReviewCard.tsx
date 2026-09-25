import Image from "next/image";
import { Quote } from "lucide-react";
import type { FamilyReview } from "@/lib/reviews";

// Review text is real HTML (readable by people and search engines); the
// original WhatsApp screenshot sits behind a native <details> toggle, so it
// needs no JavaScript and the lazy image only loads if someone opens it.
export default function ReviewCard({ review }: { review: FamilyReview }) {
  return (
    <figure className="flex flex-col h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <Quote size={22} className="text-gold mb-3 shrink-0" aria-hidden="true" />
      <blockquote className="text-navy leading-relaxed flex-1">
        <p>&ldquo;{review.text}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-5 pt-4 border-t border-gray-100">
        <span className="block font-semibold text-navy text-sm">
          {review.reviewer}, {review.country}
        </span>
        <span className="block text-grey text-xs mt-0.5">
          Sent to us on WhatsApp {review.context}
        </span>
      </figcaption>
      <details className="mt-4 group">
        <summary className="cursor-pointer text-sm font-semibold text-gold hover:underline list-none [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">View original WhatsApp message</span>
          <span className="hidden group-open:inline">Hide original message</span>
        </summary>
        <div className="mt-4 mx-auto w-full max-w-[280px] rounded-[1.75rem] border-[6px] border-navy bg-navy overflow-hidden shadow-md">
          <Image
            src={review.screenshot}
            alt={review.screenshotAlt}
            width={1080}
            height={1620}
            sizes="280px"
            className="w-full h-auto"
          />
        </div>
      </details>
    </figure>
  );
}
