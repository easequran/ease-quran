"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
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
        <div className="text-6xl mb-4">✉️</div>
        <h2 className="font-playfair font-bold text-2xl text-navy mb-3">
          Message Received!
        </h2>
        <p className="text-grey leading-relaxed text-sm">
          JazakAllah Khair for reaching out. We will get back to you within{" "}
          <strong className="text-navy">2 hours</strong> via email or WhatsApp.
          If your matter is urgent, please reach us directly on WhatsApp for a faster response.
        </p>
        <div className="mt-6">
          <a
            href="https://wa.me/923195657389"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-[#1ebd5a] transition-colors"
          >
            Open WhatsApp
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
          Send Us a Message
        </h2>
        <p className="text-grey text-sm">
          We will get back to you within 2 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

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

        <div>
          <label htmlFor="message" className={labelClass}>
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us about your child's age, current level, and what you're looking for..."
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />
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
              contact us on WhatsApp
            </a>
            .
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-navy/90 transition-all duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message →"}
        </button>
      </form>
    </div>
  );
}
