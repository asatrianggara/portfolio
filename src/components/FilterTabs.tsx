"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { ProjectFilter } from "@/data/types";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FilterTabsProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

const tabs: { value: ProjectFilter; labelKey: string }[] = [
  { value: "all", labelKey: "projects.filterAll" },
  { value: "ui-design", labelKey: "projects.filterUiDesign" },
  { value: "digital-marketing", labelKey: "projects.filterDigitalMarketing" },
  { value: "graphic-design", labelKey: "projects.filterGraphicDesign" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function FilterTabs({
  activeFilter,
  onFilterChange,
}: FilterTabsProps) {
  const { t } = useLanguage();

  return (
    <div
      role="tablist"
      aria-label={t("projects.sectionTitle")}
      className="inline-flex items-center gap-1 rounded-full bg-gray-100 p-1"
    >
      {tabs.map((tab) => {
        const isActive = activeFilter === tab.value;
        return (
          <button
            key={tab.value}
            type="button"
            role="tab"
            id={`tab-${tab.value}`}
            aria-selected={isActive}
            aria-controls="projects-grid"
            tabIndex={isActive ? 0 : -1}
            onClick={() => onFilterChange(tab.value)}
            className={[
              "inline-flex items-center justify-center",
              "px-4 py-2 min-h-[40px]",
              "rounded-full text-sm",
              "transition-all duration-200 ease-in-out",
              isActive
                ? "bg-[#0071E3] text-white font-semibold shadow-sm"
                : "bg-transparent text-gray-600 font-normal hover:bg-gray-200",
            ].join(" ")}
          >
            {t(tab.labelKey)}
          </button>
        );
      })}
    </div>
  );
}
