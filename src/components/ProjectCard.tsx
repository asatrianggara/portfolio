"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pickLocalized } from "@/i18n/localized";
import type { Project } from "@/data/types";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
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

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { t, locale } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const showImage = project.imageUrl && !imgError;
  const name = pickLocalized(project.name, locale);
  const client = pickLocalized(project.client, locale);

  return (
    <button
      type="button"
      onClick={() => onClick(project)}
      aria-label={`${name} — ${categoryLabel(project.category, t)}, ${project.year}`}
      className={[
        "group text-left w-full",
        "flex flex-col overflow-hidden",
        "rounded-lg border border-gray-200 bg-white",
        "shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
        "hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-1",
        "transition-all duration-200 ease-in-out",
      ].join(" ")}
    >
      {/* Image 16:9 */}
      <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200">
        {showImage ? (
          <Image
            src={project.imageUrl as string}
            alt={name}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
          >
            <span className="text-3xl font-semibold text-white/80 select-none">
              {name
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("")
                .toUpperCase()}
            </span>
          </div>
        )}
        {/* Category badge */}
        <span
          className={[
            "absolute top-3 left-3",
            "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium",
            "bg-white/90 backdrop-blur-sm text-[#1D1D1F] shadow-sm",
          ].join(" ")}
        >
          {categoryLabel(project.category, t)}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 p-4 md:p-5 flex-1">
        <div className="flex items-center justify-between gap-3 text-xs text-[#6E6E73]">
          {client ? <span>{client}</span> : <span />}
          <span>{project.year}</span>
        </div>

        <h3 className="text-base md:text-lg font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
          {name}
        </h3>

        {project.tags && project.tags.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2 py-0.5 text-[10px]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </button>
  );
}
