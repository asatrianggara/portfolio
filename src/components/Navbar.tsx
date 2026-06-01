"use client";

import { useEffect, useState, useCallback } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ReachOutButton from "./ReachOutButton";

// ─── Constants ────────────────────────────────────────────────────────────────

interface NavLink {
  labelKey: string;
  sectionId: string;
}

const navLinks: NavLink[] = [
  { labelKey: "nav.hero", sectionId: "hero" },
  { labelKey: "nav.workExperience", sectionId: "work-experience" },
  { labelKey: "nav.projects", sectionId: "projects" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll-spy with IntersectionObserver
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry that's most visible
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        // Trigger when section center crosses viewport center
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler with prefers-reduced-motion check
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (!element) return;

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      setMobileMenuOpen(false);
    },
    []
  );

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-gray-100"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="text-base md:text-lg font-semibold text-[#1D1D1F] hover:text-[#0071E3] transition-colors duration-200"
          >
            Adjie Satria Anggara
          </a>

          {/* Center nav links (tablet / desktop) */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <li key={link.sectionId}>
                  <a
                    href={`#${link.sectionId}`}
                    onClick={(e) => handleNavClick(e, link.sectionId)}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "inline-flex items-center justify-center",
                      "px-3 py-2 rounded-md text-sm",
                      "transition-colors duration-200 ease-in-out",
                      isActive
                        ? "text-[#0071E3] font-semibold"
                        : "text-gray-600 hover:text-[#1D1D1F]",
                    ].join(" ")}
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right side: language toggle + reach out (always visible) + mobile menu button */}
          <div className="flex items-center gap-2 md:gap-3">
            <LanguageToggle />
            <div className="hidden sm:block">
              <ReachOutButton />
            </div>
            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={
                mobileMenuOpen
                  ? t("accessibility.closeMenu")
                  : t("accessibility.openMenu")
              }
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <ul
            id="mobile-nav"
            className="md:hidden flex flex-col gap-1 pb-4 pt-2 border-t border-gray-100"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <li key={link.sectionId}>
                  <a
                    href={`#${link.sectionId}`}
                    onClick={(e) => handleNavClick(e, link.sectionId)}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "block px-3 py-3 rounded-md text-sm",
                      "transition-colors duration-200 ease-in-out",
                      isActive
                        ? "bg-gray-100 text-[#0071E3] font-semibold"
                        : "text-gray-700 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              );
            })}
            <li className="sm:hidden mt-2 px-3">
              <ReachOutButton className="w-full" />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
