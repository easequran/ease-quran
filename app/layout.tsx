import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Cairo, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import PopupForm from "@/components/PopupForm";

// Design-system font: one Poppins instance covers both headings and body.
// Tailwind's font-playfair and font-inter both resolve to --font-inter.
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Cairo for Arabic UI/body; Amiri (design system's display font) for Quranic callouts.
// Not preloaded: no page renders Arabic text in these fonts yet, and preloading
// them pulled ~240 KB into every page load. They still download on demand
// (via unicode-range) the moment an element uses font-arabic / font-arabic-display.
const notoNaskhArabic = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic-display",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Ease Quran Online Academy | Online Quran Classes for Muslim Families in USA",
    template: "%s | Ease Quran Academy",
  },
  description:
    "Join Ease Quran Online Academy for certified, one-on-one online Quran classes for kids and adults across the USA. Qualified teachers. Book your free trial today.",
  authors: [{ name: "Ease Quran Online Academy" }],
  creator: "Ease Quran Online Academy",
  metadataBase: new URL("https://easequran.com"),
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://easequran.com",
    siteName: "Ease Quran Online Academy",
    title: "Ease Quran Online Academy | Online Quran Classes for Muslim Families in USA",
    description:
      "Certified online Quran classes for kids and adults across the USA. Expert teachers, flexible schedules, free first class.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ease Quran Online Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ease Quran Online Academy | Online Quran Classes USA",
    description:
      "Certified online Quran classes for kids and adults across the USA. Free first class. Qualified teachers.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://easequran.com",
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoNaskhArabic.variable} ${amiri.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P4FJDN2SDX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P4FJDN2SDX');
          `}
        </Script>
      </head>
      <body className="antialiased bg-white text-navy font-inter text-base">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://easequran.com/#organization",
              name: "Ease Quran Online Academy",
              alternateName: "Ease Quran",
              url: "https://easequran.com",
              logo: "https://easequran.com/images/logo.png",
              image: "https://easequran.com/images/og-image.png",
              description: "Online academy teaching the Quran one-on-one to children and adults in the United States. Qualified male and female teachers, classes on Zoom, free trial class.",
              email: "info@easequran.com",
              telephone: "+923195657389",
              founder: {
                "@type": "Person",
                name: "Shah Zaib",
                jobTitle: "Founder & CEO",
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              sameAs: [
                "https://www.facebook.com/share/18WdHQVNWT/",
                "https://www.instagram.com/contacteasequran",
                "https://www.linkedin.com/company/ease-quran/",
                "https://youtube.com/@contacteasequran",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Online Quran Courses",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Course", name: "Quran for Kids" } },
                  { "@type": "Offer", itemOffered: { "@type": "Course", name: "Tajweed" } },
                  { "@type": "Offer", itemOffered: { "@type": "Course", name: "Hifz Program" } },
                  { "@type": "Offer", itemOffered: { "@type": "Course", name: "Noorani Qaida" } },
                  { "@type": "Offer", itemOffered: { "@type": "Course", name: "Arabic Language" } },
                  { "@type": "Offer", itemOffered: { "@type": "Course", name: "Islamic Studies" } },
                ],
              },
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileCTA />
        <PopupForm />
      </body>
    </html>
  );
}
