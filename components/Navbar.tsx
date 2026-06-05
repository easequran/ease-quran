"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, BookOpen, Users, Star, Globe } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20booking%20a%20free%20trial%20Quran%20class";

/* ── Courses mega-menu data ── */
const courseColumns = [
  {
    heading: "Quran Courses",
    icon: <BookOpen className="w-3.5 h-3.5" />,
    links: [
      { label: "Quran for Kids", href: "/courses/quran-for-kids", desc: "Ages 4–14, patient teachers" },
      { label: "Tajweed", href: "/courses/tajweed", desc: "Perfect your recitation" },
      { label: "Hifz Program", href: "/courses/hifz", desc: "Full Quran memorization" },
      { label: "Noorani Qaida", href: "/courses/noorani-qaida", desc: "Start from scratch" },
      { label: "Quran for Adults", href: "/courses/quran-for-adults", desc: "All levels, no judgment" },
      { label: "Quran for Reverts", href: "/courses/quran-for-reverts", desc: "New Muslims welcome" },
    ],
  },
  {
    heading: "Language & Studies",
    icon: <Star className="w-3.5 h-3.5" />,
    links: [
      { label: "Arabic Language", href: "/courses/arabic-language", desc: "Sarf, Nahw & Quranic Arabic" },
      { label: "Islamic Studies", href: "/courses/islamic-studies", desc: "Aqeedah, Fiqh & Seerah" },
    ],
  },
];

/* ── Locations dropdown data ── */
const locationLinks = [
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
];

/* ── Simple nav links ── */
const simpleLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Female Teachers", href: "/female-quran-teachers" },
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
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const [activeDesktop, setActiveDesktop] = useState<string | null>(null);
  const [bannerVisible, setBannerVisible] = useState(true);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  function openMenu(name: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDesktop(name);
  }
  function closeMenu() {
    closeTimer.current = setTimeout(() => setActiveDesktop(null), 120);
  }

  return (
    <>
      {/* ── Summer Announcement Banner ── */}
      {bannerVisible && (
        <div className="relative z-50 banner-bg banner-shimmer overflow-hidden text-navy">
          <div className="relative flex items-center justify-center gap-2 sm:gap-4 py-3 px-10 text-center">

            {/* Spinning star left */}
            <span className="banner-star text-base hidden sm:inline shrink-0" aria-hidden="true">☀️</span>

            {/* Double ping dot */}
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy/70" />
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy/40 delay-150" style={{ animationDelay: "0.4s" }} />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-navy" />
            </span>

            {/* Text */}
            <p className="banner-text-pulse text-xs sm:text-sm font-extrabold tracking-wide leading-tight">
              <span className="uppercase">🎉 Summer 2026 Enrollment Now Open</span>
              <span className="hidden sm:inline font-medium normal-case">
                {" "}— One-on-one Quran classes for kids ages 4–14 · All 50 states · Free first class
              </span>
            </p>

            {/* Bouncing CTA */}
            <Link
              href="/summer-quran-classes"
              className="hidden sm:inline-flex shrink-0 items-center gap-1.5 bg-navy text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-navy/80 transition-colors whitespace-nowrap animate-bounce shadow-md"
              style={{ animationDuration: "1.2s" }}
            >
              Enroll Free →
            </Link>

            {/* Dismiss */}
            <button
              onClick={() => setBannerVisible(false)}
              aria-label="Dismiss announcement"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-navy/10 hover:bg-navy/20 transition-colors text-navy"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Top social bar — scrolls away ── */}
      <div className="bg-navy border-b border-gold/20">
        <div className="container-custom flex items-center justify-between py-2.5">
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-xs font-medium uppercase tracking-wider hidden sm:inline pr-1 border-r border-white/20 mr-1">
              Follow Us
            </span>
            <a href="https://www.facebook.com/share/18WdHQVNWT/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-200">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/contacteasequran" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-200">
              <InstagramIcon />
            </a>
            <a href="https://youtube.com/@contacteasequran" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-200">
              <YoutubeIcon />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base leading-none">🇺🇸</span>
            <span className="text-white/70 text-xs font-medium">
              <span className="hidden sm:inline">Serving All </span>50 States
            </span>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      {/* ── Sticky white nav ── */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/images/logo.png" alt="Ease Quran Online Academy"
                width={180} height={56} className="h-14 w-auto object-contain" priority />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">

              {/* Home */}
              <Link href="/" className="px-3 py-2 font-medium text-sm text-navy hover:text-gold transition-colors rounded-lg hover:bg-gold/5">
                Home
              </Link>

              {/* Courses — mega menu */}
              <div className="relative" onMouseEnter={() => openMenu("courses")} onMouseLeave={closeMenu}>
                <button
                  className={`flex items-center gap-1 px-3 py-2 font-medium text-sm rounded-lg transition-all ${activeDesktop === "courses" ? "text-gold bg-gold/5" : "text-navy hover:text-gold hover:bg-gold/5"}`}
                  aria-expanded={activeDesktop === "courses"}
                >
                  Courses
                  <ChevronDown size={13} className={`transition-transform duration-200 ${activeDesktop === "courses" ? "rotate-180 text-gold" : ""}`} />
                </button>

                {/* Mega menu panel */}
                {activeDesktop === "courses" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px]"
                    onMouseEnter={() => openMenu("courses")} onMouseLeave={closeMenu}>
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      {/* Top banner */}
                      <div className="bg-navy px-6 py-3 flex items-center justify-between">
                        <span className="text-white text-xs font-semibold tracking-wider uppercase">All Courses</span>
                        <Link href="/courses" onClick={() => setActiveDesktop(null)}
                          className="text-gold text-xs font-semibold hover:underline">
                          View All →
                        </Link>
                      </div>

                      {/* Columns */}
                      <div className="grid grid-cols-2 gap-0 divide-x divide-gray-100">
                        {courseColumns.map((col) => (
                          <div key={col.heading} className="py-4 px-4">
                            <div className="flex items-center gap-1.5 text-gold text-[10px] font-bold tracking-widest uppercase mb-3 px-1">
                              {col.icon}
                              {col.heading}
                            </div>
                            <ul className="space-y-0.5">
                              {col.links.map((item) => (
                                <li key={item.href}>
                                  <Link href={item.href} onClick={() => setActiveDesktop(null)}
                                    className="flex flex-col px-2 py-2 rounded-xl hover:bg-offwhite group transition-colors">
                                    <span className="text-navy font-semibold text-sm group-hover:text-gold transition-colors leading-tight">
                                      {item.label}
                                    </span>
                                    <span className="text-grey text-xs mt-0.5">{item.desc}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Footer CTA */}
                      <div className="border-t border-gray-100 bg-offwhite px-6 py-3 flex items-center justify-between">
                        <span className="text-grey text-xs">Not sure where to start?</span>
                        <Link href="/free-trial" onClick={() => setActiveDesktop(null)}
                          className="text-xs font-bold text-white bg-gold hover:bg-gold-dark px-4 py-1.5 rounded-lg transition-colors">
                          Book Free Trial
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Locations — grid dropdown */}
              <div className="relative" onMouseEnter={() => openMenu("locations")} onMouseLeave={closeMenu}>
                <button
                  className={`flex items-center gap-1 px-3 py-2 font-medium text-sm rounded-lg transition-all ${activeDesktop === "locations" ? "text-gold bg-gold/5" : "text-navy hover:text-gold hover:bg-gold/5"}`}
                  aria-expanded={activeDesktop === "locations"}
                >
                  Locations
                  <ChevronDown size={13} className={`transition-transform duration-200 ${activeDesktop === "locations" ? "rotate-180 text-gold" : ""}`} />
                </button>

                {activeDesktop === "locations" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[320px]"
                    onMouseEnter={() => openMenu("locations")} onMouseLeave={closeMenu}>
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="bg-navy px-5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-gold" />
                          <span className="text-white text-xs font-semibold tracking-wider uppercase">USA Cities</span>
                        </div>
                        <Link href="/locations" onClick={() => setActiveDesktop(null)}
                          className="text-gold text-xs font-semibold hover:underline">
                          View All →
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-0 p-3">
                        {locationLinks.map((loc) => (
                          <Link key={loc.href} href={loc.href} onClick={() => setActiveDesktop(null)}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-offwhite group transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors shrink-0" />
                            <span className="text-navy text-sm font-medium group-hover:text-gold transition-colors">{loc.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Simple links */}
              {simpleLinks.filter(l => l.label !== "Home").map((link) => (
                <Link key={link.href} href={link.href}
                  className="px-3 py-2 font-medium text-sm text-navy hover:text-gold transition-colors rounded-lg hover:bg-gold/5">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link href="/free-trial"
                className="bg-gold text-navy font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-gold-dark transition-all duration-200 shadow-md hover:shadow-lg">
                Book Free Trial
              </Link>
            </div>

            {/* Mobile right */}
            <div className="lg:hidden flex items-center gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us"
                className="w-10 h-10 bg-gold text-navy rounded-xl flex items-center justify-center hover:bg-gold-dark transition-colors shadow-md">
                <WhatsAppIcon />
              </a>
              <button
                className="w-10 h-10 bg-navy rounded-xl flex flex-col items-center justify-center gap-[5px] hover:bg-navy/80 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                <span className={`block w-5 h-0.5 bg-gold rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                <span className={`block w-5 h-0.5 bg-gold rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-gold rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="container-custom py-5 flex flex-col gap-1">

              {/* Home */}
              <Link href="/" className="py-3 px-3 text-navy font-semibold text-sm hover:text-gold transition-colors border-b border-gray-100"
                onClick={() => setMobileOpen(false)}>
                Home
              </Link>

              {/* Courses accordion */}
              <div className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <Link href="/courses" className="flex-1 py-3 px-3 text-navy font-semibold text-sm hover:text-gold transition-colors"
                    onClick={() => setMobileOpen(false)}>
                    Courses
                  </Link>
                  <button className="px-3 py-3 text-grey" onClick={() => setOpenMobile(openMobile === "courses" ? null : "courses")}>
                    <ChevronDown size={16} className={`transition-transform ${openMobile === "courses" ? "rotate-180 text-gold" : ""}`} />
                  </button>
                </div>
                {openMobile === "courses" && (
                  <div className="mx-3 mb-3 bg-offwhite rounded-2xl overflow-hidden">
                    {courseColumns.map((col) => (
                      <div key={col.heading}>
                        <div className="px-4 pt-3 pb-1 text-[10px] font-bold text-gold tracking-widest uppercase flex items-center gap-1">
                          {col.icon} {col.heading}
                        </div>
                        {col.links.map((item) => (
                          <Link key={item.href} href={item.href}
                            className="block py-2.5 px-4 text-sm text-navy font-medium hover:text-gold hover:bg-white transition-colors border-b border-white last:border-0"
                            onClick={() => { setMobileOpen(false); setOpenMobile(null); }}>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Locations accordion */}
              <div className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <Link href="/locations" className="flex-1 py-3 px-3 text-navy font-semibold text-sm hover:text-gold transition-colors"
                    onClick={() => setMobileOpen(false)}>
                    Locations
                  </Link>
                  <button className="px-3 py-3 text-grey" onClick={() => setOpenMobile(openMobile === "locations" ? null : "locations")}>
                    <ChevronDown size={16} className={`transition-transform ${openMobile === "locations" ? "rotate-180 text-gold" : ""}`} />
                  </button>
                </div>
                {openMobile === "locations" && (
                  <div className="mx-3 mb-3 bg-offwhite rounded-2xl overflow-hidden grid grid-cols-2">
                    {locationLinks.map((loc) => (
                      <Link key={loc.href} href={loc.href}
                        className="py-2.5 px-4 text-sm text-navy font-medium hover:text-gold hover:bg-white transition-colors border-b border-white"
                        onClick={() => { setMobileOpen(false); setOpenMobile(null); }}>
                        {loc.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Simple links */}
              {simpleLinks.filter(l => l.label !== "Home").map((link) => (
                <Link key={link.href} href={link.href}
                  className="py-3 px-3 text-navy font-semibold text-sm hover:text-gold transition-colors border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-3">
                <Link href="/free-trial"
                  className="bg-gold text-navy font-bold text-center py-3.5 rounded-xl hover:bg-gold-dark transition-all text-sm"
                  onClick={() => setMobileOpen(false)}>
                  Book Free Trial Class
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-navy text-white font-bold py-3.5 rounded-xl text-sm hover:bg-navy/80 transition-all border border-gold/30"
                  onClick={() => setMobileOpen(false)}>
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
