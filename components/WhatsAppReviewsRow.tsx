import WhatsAppReviewCard from "./WhatsAppReviewCard";
import { reviews } from "./proof";

interface WhatsAppReviewsRowProps {
  heading?: string;
  subline?: string;
}

export default function WhatsAppReviewsRow({ heading, subline }: WhatsAppReviewsRowProps) {
  return (
    <div>
      {heading && (
        <div className="text-center mb-8">
          <h3 className="font-playfair font-bold text-2xl text-navy mb-2">{heading}</h3>
          {subline && <p className="text-grey text-sm max-w-xl mx-auto">{subline}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {reviews.map((r) => (
          <WhatsAppReviewCard key={r.src} src={r.src} alt={r.alt} caption={r.caption} />
        ))}
      </div>
    </div>
  );
}
