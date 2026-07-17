"use client";

import { useState, useEffect, useRef } from "react";
import { X, CheckCircle, ShieldCheck, MessageCircle } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "./PhoneInput";

const WHATSAPP_NUMBER = "923195657389";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi I am interested in booking a free trial Quran class"
);

const courseOptions = [
  "Quran for Kids",
  "Tajweed",
  "Hifz Program",
  "Noorani Qaida",
  "Arabic Language",
  "Islamic Studies",
  "Quran for Adults",
  "Quran for Reverts",
];

const ageGroupOptions = ["Under 7", "7–12", "13–17", "Adult"];

export default function PopupForm() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    course: "",
    ageGroup: "",
  });

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup_dismissed");
    const submittedKey = sessionStorage.getItem("popup_submitted");
    if (dismissed || submittedKey) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && visible) close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible]);

  function close() {
    sessionStorage.setItem("popup_dismissed", "true");
    setVisible(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.whatsapp || !isValidPhoneNumber(form.whatsapp)) {
      setError("Please enter a valid WhatsApp number.");
      return;
    }
    if (!form.ageGroup) {
      setError("Please select an age group.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/popup-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        sessionStorage.setItem("popup_submitted", "true");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 popup-overlay"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="popup-card bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl md:max-h-[90vh] md:overflow-y-auto">
        {/* Header */}
        <div className="bg-navy px-6 pt-6 pb-5 relative">
          <button
            onClick={close}
            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="Close popup"
          >
            <X size={22} />
          </button>
          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
            Limited Offer
          </p>
          <h2
            id="popup-title"
            className="font-playfair text-2xl font-bold text-white leading-tight mb-2"
          >
            Book Your FREE Trial Quran Class Today
          </h2>
          <p className="text-white/70 text-sm">
            Join Muslim families across America. No commitment required.
          </p>
          <p className="text-white/60 text-xs mt-2">🇺🇸 Serving all 50 states</p>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle className="mx-auto mb-4 text-gold" size={56} />
              <h3 className="font-playfair text-xl font-bold text-navy mb-2">
                JazakAllah Khair!
              </h3>
              <p className="text-grey text-sm leading-relaxed">
                We will contact you within 2 hours on WhatsApp to confirm your
                free trial class. May Allah bless your family&apos;s journey
                with the Quran.
              </p>
              <button
                onClick={close}
                className="mt-5 text-sm text-navy underline hover:text-gold transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-1" htmlFor="popup-name">
                  Full Name *
                </label>
                <input
                  id="popup-name"
                  ref={firstInputRef}
                  type="text"
                  placeholder="Your full name"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1" htmlFor="popup-email">
                  Email Address *
                </label>
                <input
                  id="popup-email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1" htmlFor="popup-wa">
                  WhatsApp Number *
                </label>
                <PhoneInput
                  id="popup-wa"
                  value={form.whatsapp}
                  onChange={(val) => setForm({ ...form, whatsapp: val })}
                  required
                  compact
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1" htmlFor="popup-course">
                  Course Interest *
                </label>
                <select
                  id="popup-course"
                  required
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition bg-white"
                >
                  <option value="">Select a course</option>
                  {courseOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Age Group *
                </label>
                <div className="grid grid-cols-4 gap-1.5" role="group" aria-label="Age Group">
                  {ageGroupOptions.map((age) => (
                    <button
                      key={age}
                      type="button"
                      onClick={() => setForm({ ...form, ageGroup: age })}
                      aria-pressed={form.ageGroup === age}
                      className={`py-2 px-1 rounded-lg border text-xs font-semibold text-center transition-colors ${
                        form.ageGroup === age
                          ? "bg-gold border-gold text-navy"
                          : "bg-white border-gray-200 text-navy hover:border-gold/50"
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              {/* Trust lines — what you're signing up for, before you submit */}
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2 text-xs text-grey">
                  <CheckCircle size={14} className="text-gold shrink-0" />
                  100% free first trial class, no card needed
                </li>
                <li className="flex items-center gap-2 text-xs text-grey">
                  <ShieldCheck size={14} className="text-gold shrink-0" />
                  Wifaq ul Madaris certified teachers
                </li>
                <li className="flex items-center gap-2 text-xs text-grey">
                  <MessageCircle size={14} className="text-gold shrink-0" />
                  We&apos;ll follow up on WhatsApp within 2 hours
                </li>
              </ul>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-navy font-semibold py-3 rounded-lg hover:bg-gold-dark transition-all duration-200 disabled:opacity-60 text-sm"
              >
                {loading ? "Submitting..." : "Book My Free Trial Class"}
              </button>

              <div className="border-t border-gray-100 pt-3 text-center">
                <p className="text-xs text-grey mb-2">Or connect directly:</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-navy font-medium hover:text-gold transition-colors underline"
                >
                  Chat on WhatsApp instead
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
