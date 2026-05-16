import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PopupForm from "@/components/PopupForm";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ease Quran Online Academy | Online Quran Classes for Muslim Families in USA",
    template: "%s | Ease Quran Online Academy",
  },
  description:
    "Join Ease Quran Online Academy for certified, one-on-one online Quran classes for kids and adults across the USA. Wifaq ul Madaris certified teachers. Book your free trial today.",
  keywords: [
    "online Quran classes USA",
    "Quran teacher online",
    "Quran classes for kids",
    "Islamic education online",
    "female Quran teacher",
    "Tajweed classes online",
    "Hifz program online",
    "Muslim families USA",
  ],
  authors: [{ name: "Ease Quran Online Academy" }],
  creator: "Ease Quran Online Academy",
  metadataBase: new URL("https://easequran.com"),
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
      "Certified online Quran classes for kids and adults across the USA. Free first class. Wifaq ul Madaris certified teachers.",
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
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-navy font-inter">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <PopupForm />
      </body>
    </html>
  );
}
