"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { pickLocalized } from "@/i18n/localized";
import type { Project } from "@/data/types";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function categoryLabel(category: Project["category"], t: (k: string) => string) {
  switch (category) {
    case "ui-design":
      return t("projects.filterUiDesign");
    case "digital-marketing":
      return t("projects.filterDigitalMarketing");
    case "graphic-design":
      return t("projects.filterGraphicDesign");
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, locale } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [imgError, setImgError] = useState(false);
  const isOpen = project !== null;
  const showImage = project?.imageUrl && !imgError;
  const name = project ? pickLocalized(project.name, locale) : "";
  const title = project
    ? pickLocalized(project.title, locale) ?? name
    : "";
  const client = project ? pickLocalized(project.client, locale) : undefined;
  const description = project
    ? pickLocalized(project.description, locale)
    : undefined;
  const context = project?.caseStudy
    ? pickLocalized(project.caseStudy.context, locale)
    : undefined;
  const challenge = project?.caseStudy
    ? pickLocalized(project.caseStudy.challenge, locale)
    : undefined;
  const whatIDid = project?.caseStudy
    ? pickLocalized(project.caseStudy.whatIDid, locale)
    : undefined;
  const impact = project?.caseStudy
    ? pickLocalized(project.caseStudy.impact, locale)
    : undefined;

  // Focus trap + Escape close + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const modalEl = modalRef.current;
    if (!modalEl) return;

    const getFocusable = () =>
      Array.from(
        modalEl.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));

    // Initial focus to close button (first focusable)
    requestAnimationFrame(() => {
      const focusable = getFocusable();
      focusable[0]?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const focusable = getFocusable();
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
      />

      {/* Dialog */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className={[
          "relative z-10",
          "flex flex-col",
          "w-full max-w-2xl max-h-[90vh]",
          "overflow-hidden rounded-xl bg-white shadow-2xl",
          "animate-[scaleIn_200ms_ease-out]",
        ].join(" ")}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t("accessibility.closeModal")}
          className="absolute top-3 right-3 z-20 inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full bg-white/90 backdrop-blur text-gray-700 hover:bg-gray-100 transition-colors shadow"
        >
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
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto">
          {/* Image */}
          <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200">
            {showImage ? (
              <Image
                src={project.imageUrl as string}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
              >
                <span className="text-5xl font-semibold text-white/80 select-none">
                  {name
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
            )}
          </div>

          {/* Body */}
          <div className="p-5 md:p-7">
            <span className="inline-flex items-center rounded-full bg-[#0071E3]/10 text-[#0071E3] px-3 py-1 text-xs font-medium">
              {categoryLabel(project.category, t)}
            </span>

            <h2
              id="project-modal-title"
              className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-[#1D1D1F]"
            >
              {title}
            </h2>

            <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6E6E73]">
              {client && (
                <div className="flex gap-1">
                  <dt className="font-medium text-[#1D1D1F]">
                    {t("projects.client")}:
                  </dt>
                  <dd>{client}</dd>
                </div>
              )}
              <div className="flex gap-1">
                <dt className="font-medium text-[#1D1D1F]">
                  {t("projects.year")}:
                </dt>
                <dd>{project.year}</dd>
              </div>
            </dl>

            {description && (
              <p className="mt-4 text-sm md:text-base text-[#1D1D1F] leading-relaxed">
                {description}
              </p>
            )}

            {project.caseStudy && (
              <div className="mt-6 space-y-5">
                {context && (
                  <section>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0071E3]">
                      {t("projects.context")}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-[#1D1D1F] leading-relaxed">
                      {context}
                    </p>
                  </section>
                )}
                {challenge && (
                  <section>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0071E3]">
                      {t("projects.challenge")}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-[#1D1D1F] leading-relaxed">
                      {challenge}
                    </p>
                  </section>
                )}
                {whatIDid && whatIDid.length > 0 && (
                  <section>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0071E3]">
                      {t("projects.whatIDid")}
                    </h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#1D1D1F] leading-relaxed marker:text-[#0071E3]">
                      {whatIDid.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )}
                {impact && impact.length > 0 && (
                  <section>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0071E3]">
                      {t("projects.impact")}
                    </h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#1D1D1F] leading-relaxed marker:text-[#0071E3]">
                      {impact.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            )}

            {project.tags && project.tags.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            {project.link && (
              <div className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0071E3] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#0077ED] transition-colors min-h-[44px]"
                >
                  {t("projects.visitProject")}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
