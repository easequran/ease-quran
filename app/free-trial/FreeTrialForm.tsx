"use client";

import { useState, FormEvent } from "react";

const courses = [
  "Noorani Qaida (Beginners)",
  "Quran Reading with Tajweed",
  "Quran Memorization (Hifz)",
  "Quran Translation & Tafseer",
  "Islamic Studies for Kids",
  "Arabic Language",
  "Namaz & Duas",
  "Female-Only Quran Classes",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function FreeTrialForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    childAge: "",
    courseInterest: "",
    preferredTime: "",
    hearAboutUs: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/free-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
        <div className="text-6xl mb-4">🤲</div>
        <h2 className="font-playfair font-bold text-2xl text-navy mb-3">
          JazakAllah Khair!
        </h2>
        <p className="text-grey leading-relaxed text-sm">
          We have received your request. We will contact you within{" "}
          <strong className="text-navy">2 hours on WhatsApp</strong> to confirm your free trial
          class and match you with the right teacher. In sha Allah, this is the beginning of a
          beautiful Quran journey for your family.
        </p>
        <div className="mt-8 bg-offwhite rounded-xl p-5 text-left">
          <p className="text-navy text-sm font-semibold mb-1">While you wait, you can also reach us directly:</p>
          <a
            href="https://wa.me/923195657389"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold text-sm hover:underline"
          >
            WhatsApp: +92 319 5657389
          </a>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-grey/60 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white";
  const labelClass = "block text-sm font-semibold text-navy mb-1.5";

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h2 className="font-playfair font-bold text-2xl text-navy mb-1">
          Book Your Free Trial Class
        </h2>
        <p className="text-grey text-sm">
          Fill in your details below. We respond within 2 hours on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
            value={formData.fullName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp Number <span className="text-gold">*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            placeholder="+1 (555) 000-0000"
            value={formData.whatsapp}
            onChange={handleChange}
            className={inputClass}
          />
          <p className="text-grey text-xs mt-1.5">
            We will contact you on this number within 2 hours
          </p>
        </div>

        {/* Child Age */}
        <div>
          <label htmlFor="childAge" className={labelClass}>
            Student Age <span className="text-gold">*</span>
          </label>
          <input
            id="childAge"
            name="childAge"
            type="text"
            required
            placeholder="e.g., 7 years old, or Adult"
            value={formData.childAge}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Course Interest */}
        <div>
          <label htmlFor="courseInterest" className={labelClass}>
            Course Interest <span className="text-gold">*</span>
          </label>
          <select
            id="courseInterest"
            name="courseInterest"
            required
            value={formData.courseInterest}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select a course...
            </option>
            {courses.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Time */}
        <div>
          <label htmlFor="preferredTime" className={labelClass}>
            Preferred Class Time <span className="text-gold">*</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            value={formData.preferredTime}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select a time preference...
            </option>
            <option value="Morning">Morning (6am – 12pm)</option>
            <option value="Afternoon">Afternoon (12pm – 5pm)</option>
            <option value="Evening">Evening (5pm – 10pm)</option>
            <option value="Weekend">Weekend (Anytime)</option>
          </select>
        </div>

        {/* How did you hear */}
        <div>
          <label htmlFor="hearAboutUs" className={labelClass}>
            How did you hear about us?
          </label>
          <select
            id="hearAboutUs"
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select an option...
            </option>
            <option value="Google">Google Search</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Friend/Family">Friend or Family</option>
            <option value="YouTube">YouTube</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
            Something went wrong. Please try again or{" "}
            <a
              href="https://wa.me/923195657389"
              className="underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact us directly on WhatsApp
            </a>
            .
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gold text-navy font-bold py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Submitting..." : "Book My Free Trial Class →"}
        </button>

        <p className="text-grey text-xs text-center">
          By submitting this form, you agree to be contacted via WhatsApp and email.
          No credit card required. First class is completely free.
        </p>
      </form>
    </div>
  );
}
