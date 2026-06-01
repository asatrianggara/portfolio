"use client";

import { useLanguage } from "@/i18n/LanguageContext";

// ─── Types ────────────────────────────────────────────────────────────────────

type Variant = "primary" | "outline";

interface ReachOutButtonProps {
  className?: string;
  variant?: Variant;
}

// ─── Variant styles ───────────────────────────────────────────────────────────

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#0071E3] text-white hover:bg-[#0077ED] hover:opacity-90",
  outline:
    "border border-[#0071E3] text-[#0071E3] bg-transparent hover:bg-[#0071E3] hover:text-white hover:opacity-90",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ReachOutButton({
  className = "",
  variant = "primary",
}: ReachOutButtonProps) {
  const { t } = useLanguage();

  return (
    <a
      href="mailto:asatrianggara84@gmail.com"
      aria-label={t("nav.reachOutAriaLabel")}
      className={[
        "inline-flex items-center justify-center",
        "px-5 py-3",
        "min-h-[44px] min-w-[44px]",
        "rounded-lg",
        "font-medium text-sm",
        "transition-all duration-200 ease-in-out",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {t("nav.reachOut")}
    </a>
  );
}
