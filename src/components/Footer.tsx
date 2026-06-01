"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { PersonalInfo } from "@/data/types";
import SocialLinks from "./SocialLinks";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FooterProps {
  data: PersonalInfo;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer({ data }: FooterProps) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-gray-100 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left: copyright */}
          <p className="text-xs md:text-sm text-[#6E6E73] text-center md:text-left">
            © {year} {t("footer.copyright")}
          </p>

          {/* Right: socials + email */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`mailto:${data.email}`}
              aria-label={t("footer.emailAriaLabel")}
              className="inline-flex items-center gap-2 px-3 py-2 min-h-[44px] rounded-md text-sm text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{t("footer.contactEmail")}</span>
            </a>

            <SocialLinks links={data.socialLinks} iconSize={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}
