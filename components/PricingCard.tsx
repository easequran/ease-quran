import Link from "next/link";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string | number;
  classes: string;
  duration: string;
  forWho: string;
  features: string[];
  popular?: boolean;
  customCta?: boolean;
  subLine?: string;
}

const WHATSAPP_NUMBER = "923195657389";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I would like a custom quote for Ease Quran classes.");

export default function PricingCard({
  name,
  price,
  classes,
  duration,
  forWho,
  features,
  popular,
  customCta,
  subLine,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        popular
          ? "border-2 border-gold shadow-lg bg-navy text-white"
          : "border border-gray-200 bg-white"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap">
          ⭐ Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`font-playfair font-bold text-xl mb-1 ${
            popular ? "text-gold" : "text-navy"
          }`}
        >
          {name}
        </h3>
        <p className={`text-sm mb-4 ${popular ? "text-white/70" : "text-grey"}`}>
          {forWho}
        </p>
        <div className="flex items-baseline gap-1">
          {typeof price === "number" ? (
            <>
              <span
                className={`text-4xl font-bold font-playfair ${
                  popular ? "text-white" : "text-navy"
                }`}
              >
                ${price}
              </span>
              <span className={`text-sm ${popular ? "text-white/60" : "text-grey"}`}>
                /month
              </span>
            </>
          ) : (
            <span
              className={`text-2xl font-bold font-playfair ${
                popular ? "text-white" : "text-navy"
              }`}
            >
              {price}
            </span>
          )}
        </div>
        <div
          className={`mt-2 text-xs space-y-0.5 ${popular ? "text-white/70" : "text-grey"}`}
        >
          <p>{classes}</p>
          <p>{duration}</p>
        </div>
        {subLine && (
          <p
            className={`mt-3 text-xs font-medium ${popular ? "text-white/80" : "text-navy/70"}`}
          >
            {subLine}
          </p>
        )}
      </div>

      <ul className="space-y-2.5 flex-1 mb-7">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check
              size={15}
              className={`mt-0.5 shrink-0 ${popular ? "text-gold" : "text-gold"}`}
            />
            <span className={popular ? "text-white/90" : "text-grey"}>{f}</span>
          </li>
        ))}
      </ul>

      {customCta ? (
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center font-semibold py-3 rounded-xl transition-all duration-200 border-2 border-navy text-navy hover:bg-navy hover:text-white text-sm"
        >
          WhatsApp for Custom Quote
        </a>
      ) : (
        <Link
          href="/free-trial"
          className={`block text-center font-semibold py-3 rounded-xl transition-all duration-200 text-sm ${
            popular
              ? "bg-gold text-navy hover:bg-gold-dark"
              : "bg-navy text-white hover:bg-navy/90"
          }`}
        >
          Start Free Trial
        </Link>
      )}
    </div>
  );
}
