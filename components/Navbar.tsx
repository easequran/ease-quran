"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

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
      { label: "🗽 New York", href: "/locations/new-york" },
      { label: "🤠 Houston", href: "/locations/houston" },
      { label: "🌆 Chicago", href: "/locations/chicago" },
      { label: "🌴 Los Angeles", href: "/locations/los-angeles" },
      { label: "🏙️ New Jersey", href: "/locations/new-jersey" },
      { label: "🕌 Dearborn, MI", href: "/locations/dearborn-michigan" },
      { label: "⭐ Dallas", href: "/locations/dallas" },
      { label: "🔔 Philadelphia", href: "/locations/philadelphia" },
      { label: "🍑 Atlanta", href: "/locations/atlanta" },
      { label: "🌸 Columbus, OH", href: "/locations/columbus-ohio" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">

          {/* Logo — always on navy pill so it looks premium on both dark and white bg */}
          <Link href="/" className="flex items-center shrink-0">
            <div className={`flex items-center px-3 py-1.5 rounded-xl transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-white/10"
            }`}>
              <Image
                src="/images/logo.webp"
                alt="Ease Quran Online Academy"
                width={140}
                height={44}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
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
                  <button
                    className={`flex items-center gap-1 font-medium text-sm transition-colors hover:text-gold py-2 ${
                      scrolled ? "text-navy" : "text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 min-w-[200px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-navy hover:bg-offwhite hover:text-gold transition-colors font-medium"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium text-sm transition-colors hover:text-gold py-2 ${
                    scrolled ? "text-navy" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/free-trial"
              className="bg-gold text-navy font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-gold-dark transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book Free Trial
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-navy bg-offwhite" : "text-white bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
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
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.dropdown && openDropdown === link.label && (
                  <div className="mx-3 mb-2 bg-offwhite rounded-xl overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2.5 px-4 text-sm text-grey hover:text-gold hover:bg-white transition-colors border-b border-white last:border-0"
                        onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                <div className="h-px bg-gray-100 mx-3" />
              </div>
            ))}

            <Link
              href="/free-trial"
              className="mt-4 bg-gold text-navy font-bold text-center py-3.5 rounded-xl hover:bg-gold-dark transition-all text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Book Free Trial Class
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
