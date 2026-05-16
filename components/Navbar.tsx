"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20booking%20a%20free%20trial%20Quran%20class";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "/courses",
    dropdown: [
      { label: "Quran for Kids", href: "/courses/quran-for-kids" },
      { label: "Tajweed", href: "/courses/tajweed" },
      { label: "Hifz Program", href: "/courses/hifz" },
      { label: "Noorani Qaida", href: "/courses/noorani-qaida" },
      { label: "Arabic Language", href: "/courses/arabic-language" },
      { label: "Islamic Studies", href: "/courses/islamic-studies" },
      { label: "Quran for Adults", href: "/courses/quran-for-adults" },
      { label: "Quran for Reverts", href: "/courses/quran-for-reverts" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    dropdown: [
      { label: "New York", href: "/locations/new-york" },
      { label: "Houston", href: "/locations/houston" },
      { label: "Chicago", href: "/locations/chicago" },
      { label: "Los Angeles", href: "/locations/los-angeles" },
      { label: "New Jersey", href: "/locations/new-jersey" },
      { label: "Dearborn, MI", href: "/locations/dearborn-michigan" },
      { label: "Dallas", href: "/locations/dallas" },
      { label: "Philadelphia", href: "/locations/philadelphia" },
      { label: "Atlanta", href: "/locations/atlanta" },
      { label: "Columbus, OH", href: "/locations/columbus-ohio" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      {/* ── Top social bar — scrolls away with page ── */}
      <div className="bg-navy border-b border-gold/20">
        <div className="container-custom flex items-center justify-between py-2.5">

          {/* Left: Follow Us + social icons */}
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-xs font-medium uppercase tracking-wider hidden sm:inline pr-1 border-r border-white/20 mr-1">
              Follow Us
            </span>
            <a href="https://www.facebook.com/share/18WdHQVNWT/" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-200">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/contacteasequran" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-200">
              <InstagramIcon />
            </a>
            <a href="https://youtube.com/@contacteasequran" target="_blank" rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-200">
              <YoutubeIcon />
            </a>
          </div>

          {/* Right: US flag + tagline */}
          <div className="flex items-center gap-2">
            <span className="text-base leading-none">🇺🇸</span>
            <span className="text-white/70 text-xs font-medium">
              <span className="hidden sm:inline">Serving All </span>50 States
            </span>
          </div>

        </div>
        {/* Gold accent line at bottom of top bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      {/* ── White nav — sticky to top on scroll ── */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Ease Quran Online Academy"
                width={180}
                height={56}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 font-medium text-sm transition-colors hover:text-gold py-2 text-navy">
                      {link.label}
                      <ChevronDown size={13} className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 min-w-[200px]">
                        {link.dropdown.map((item) => (
                          <Link key={item.href} href={item.href}
                            className="block px-4 py-2.5 text-sm text-navy hover:bg-offwhite hover:text-gold transition-colors font-medium"
                            onClick={() => setOpenDropdown(null)}>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}
                    className="font-medium text-sm transition-colors hover:text-gold py-2 text-navy">
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link href="/free-trial"
                className="bg-gold text-navy font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-gold-dark transition-all duration-200 shadow-md hover:shadow-lg">
                Book Free Trial
              </Link>
            </div>

            {/* Mobile right-side actions */}
            <div className="lg:hidden flex items-center gap-2">

              {/* WhatsApp button — brand colors (gold bg, navy icon) */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp us"
                className="w-10 h-10 bg-gold text-navy rounded-xl flex items-center justify-center hover:bg-gold-dark transition-colors shadow-md"
              >
                <WhatsAppIcon />
              </a>

              {/* Hamburger — navy bg with gold bars */}
              <button
                className="w-10 h-10 bg-navy rounded-xl flex flex-col items-center justify-center gap-[5px] hover:bg-navy/80 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-gold rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                <span className={`block w-5 h-0.5 bg-gold rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-gold rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu — inside sticky header so it stays pinned */}
        {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="flex-1 py-3 px-3 text-navy font-semibold text-sm hover:text-gold transition-colors"
                    onClick={() => { if (!link.dropdown) setMobileOpen(false); }}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      className="px-3 py-3 text-grey"
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    >
                      <ChevronDown size={16} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>

                {link.dropdown && openDropdown === link.label && (
                  <div className="mx-3 mb-2 bg-offwhite rounded-xl overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link key={item.href} href={item.href}
                        className="block py-2.5 px-4 text-sm text-grey hover:text-gold hover:bg-white transition-colors border-b border-white last:border-0"
                        onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                <div className="h-px bg-gray-100 mx-3" />
              </div>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold text-center py-3.5 rounded-xl hover:bg-gold-dark transition-all text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Book Free Trial Class
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-navy text-white font-bold py-3.5 rounded-xl text-sm hover:bg-navy/80 transition-all border border-gold/30"
                onClick={() => setMobileOpen(false)}
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
        )}
      </header>
    </>
  );
}
