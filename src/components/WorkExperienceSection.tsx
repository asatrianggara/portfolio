"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { WorkExperience } from "@/data/types";
import { sortWorkExperiences } from "@/data/utils";
import WorkExperienceCard from "./WorkExperienceCard";

// ─── Types ────────────────────────────────────────────────────────────────────

interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function WorkExperienceSection({
  experiences,
}: WorkExperienceSectionProps) {
  const { t } = useLanguage();
  const sorted = sortWorkExperiences(experiences);

  return (
    <section
      id="work-experience"
      aria-labelledby="work-experience-heading"
      className="bg-[#F5F5F7]/40 border-y border-gray-100"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 py-16 md:py-20">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <span className="inline-flex items-center rounded-full bg-[#0071E3]/10 text-[#0071E3] px-3 py-1 text-xs font-medium">
            {t("workExperience.experienceSummary")}
          </span>
          <h2
            id="work-experience-heading"
            className="mt-4 text-2xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]"
          >
            {t("workExperience.sectionTitle")}
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5 md:gap-6">
          {sorted.map((experience) => (
            <WorkExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
