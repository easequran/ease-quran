"use client";

import { useState } from "react";
import PhoneInputWithCountry, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export { isValidPhoneNumber };

interface PhoneInputProps {
  id: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  compact?: boolean;
}

/**
 * International phone input: country flag dropdown, defaults to the US,
 * auto-formats as you type, and stores the value as an E.164 string
 * (e.g. "+15551234567") so it stays compatible with the existing
 * mail-notification API routes without any backend changes.
 */
export default function PhoneInput({ id, name, value, onChange, required, compact }: PhoneInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <PhoneInputWithCountry
      id={id}
      name={name}
      international
      defaultCountry="US"
      countryCallingCodeEditable={false}
      value={value || undefined}
      onChange={(val) => onChange(val ?? "")}
      numberInputProps={{
        required,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
      }}
      className={`eq-phone-input ${compact ? "eq-phone-input--compact" : ""} ${focused ? "is-focused" : ""}`}
    />
  );
}
