"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ faqs, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden hover:border-gold/40 transition-colors"
        >
          <button
            className="w-full flex items-center justify-between text-left px-6 py-4 gap-4"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-navy text-sm leading-snug">{faq.question}</span>
            <ChevronDown
              size={18}
              className={`text-gold shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-5 text-grey text-sm leading-relaxed border-t border-gray-100 pt-3">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
