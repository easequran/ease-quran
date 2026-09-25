import Link from "next/link";
import ReviewCard from "@/components/ReviewCard";
import type { FamilyReview } from "@/lib/reviews";

interface FamilyReviewsProps {
  reviews: FamilyReview[];
  heading?: string;
  subline?: string;
  showAllLink?: boolean;
}

export default function FamilyReviews({
  reviews,
  heading = "What Families Tell Us",
  subline = "Messages US families sent us on WhatsApp, shared with their permission.",
  showAllLink = true,
}: FamilyReviewsProps) {
  if (reviews.length === 0) return null;
  const cols =
    reviews.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : reviews.length === 2 ? "md:grid-cols-2" : "";

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="font-playfair font-bold text-2xl text-navy mb-2">{heading}</h3>
        {subline && <p className="text-grey text-sm max-w-xl mx-auto">{subline}</p>}
      </div>
      <div className={`grid grid-cols-1 ${cols} gap-6 max-w-5xl mx-auto items-start`}>
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
      {showAllLink && (
        <p className="text-center text-sm mt-6">
          <Link href="/reviews" className="text-gold font-semibold hover:underline">
            Read more messages from families
          </Link>
        </p>
      )}
    </div>
  );
}
