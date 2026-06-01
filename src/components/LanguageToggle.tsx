"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/LanguageContext";

// ─── Component ────────────────────────────────────────────────────────────────

const locales: { value: Locale; label: string }[] = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={[
        "inline-flex items-center gap-1 rounded-full bg-gray-100 p-1",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {locales.map((option) => {
        const isActive = locale === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={isActive}
            aria-label={`Switch language to ${option.label}`}
            className={[
              "inline-flex items-center justify-center",
              "min-h-[36px] min-w-[40px] px-3 py-1.5",
              "rounded-full text-xs",
              "transition-all duration-200 ease-in-out",
              isActive
                ? "bg-[#0071E3] text-white font-semibold shadow-sm"
                : "bg-transparent text-gray-600 font-normal hover:bg-gray-200",
            ].join(" ")}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
