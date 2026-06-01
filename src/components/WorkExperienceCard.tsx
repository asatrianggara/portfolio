"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { WorkExperience } from "@/data/types";

// ─── Types ────────────────────────────────────────────────────────────────────

interface WorkExperienceCardProps {
  experience: WorkExperience;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function WorkExperienceCard({
  experience,
}: WorkExperienceCardProps) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(true);

  const endLabel = experience.isActive
    ? t("workExperience.present")
    : experience.endDate ?? "";

  const period = `${experience.startDate} – ${endLabel}`;
  const detailsId = `work-exp-details-${experience.id}`;
  const toggleLabel = expanded
    ? t("workExperience.hideDetails")
    : t("workExperience.showDetails");

  return (
    <article
      className={[
        "group relative",
        "rounded-lg border border-gray-200 bg-white p-5 md:p-6",
        "shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
        "hover:bg-[#F5F5F7] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
        "transition-all duration-200 ease-in-out",
      ].join(" ")}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
        <div className="min-w-0">
          <h3 className="text-lg md:text-xl font-semibold text-[#1D1D1F]">
            {experience.position}
          </h3>
          <p className="mt-0.5 text-sm md:text-base text-[#0071E3] font-medium">
            {experience.company}
          </p>
          <p className="mt-0.5 text-xs md:text-sm text-[#6E6E73]">
            {experience.location}
          </p>
        </div>

        <div className="flex flex-shrink-0 items-center gap-2">
          <span
            className={[
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
              experience.isActive
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-gray-100 text-gray-700 border border-gray-200",
            ].join(" ")}
          >
            {experience.isActive && (
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"
              />
            )}
            {period}
          </span>

          <button
            type="button"
            onClick={() => setExpanded((s) => !s)}
            aria-expanded={expanded}
            aria-controls={detailsId}
            aria-label={toggleLabel}
            title={toggleLabel}
            className="inline-flex items-center justify-center min-h-[36px] min-w-[36px] rounded-full text-[#6E6E73] hover:bg-gray-100 hover:text-[#1D1D1F] transition-colors"
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
              className={`transition-transform duration-200 ${
                expanded ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      {/* Collapsible details: description + skills */}
      <div id={detailsId} hidden={!expanded}>
        {/* Description points */}
        <ul className="mt-4 space-y-2 text-sm md:text-base text-[#1D1D1F] list-disc list-outside pl-5">
          {experience.descriptionPoints.map((point, idx) => (
            <li key={idx} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>

        {/* Skill chips */}
        {experience.skills.length > 0 && (
          <div className="mt-5">
            <span className="sr-only">{t("workExperience.skills")}: </span>
            <ul className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <li
                  key={skill}
                  className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
