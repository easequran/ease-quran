import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://easequran.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="bg-offwhite border-b border-gray-200">
        <div className="container-custom py-3">
          <ol className="flex items-center flex-wrap gap-1 text-sm text-grey">
            <li>
              <Link href="/" className="hover:text-gold transition-colors font-medium">
                Home
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                <ChevronRight size={13} className="text-gray-300 shrink-0" />
                {item.href && index < items.length - 1 ? (
                  <Link href={item.href} className="hover:text-gold transition-colors font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-navy font-semibold">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
