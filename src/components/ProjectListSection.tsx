"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Project, ProjectFilter } from "@/data/types";
import { filterProjects } from "@/data/utils";
import FilterTabs from "./FilterTabs";
import ProjectCard from "./ProjectCard";

// Lazy-loaded modal (only fetched when user opens a project)
const ProjectModal = dynamic(() => import("./ProjectModal"), {
  ssr: false,
  loading: () => null,
});

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectListSectionProps {
  projects: Project[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectListSection({
  projects,
}: ProjectListSectionProps) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(
    () => filterProjects(projects, activeFilter),
    [projects, activeFilter]
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-20"
    >
      {/* Section heading */}
      <div className="flex flex-col items-center text-center mb-8 md:mb-10">
        <h2
          id="projects-heading"
          className="text-2xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]"
        >
          {t("projects.sectionTitle")}
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex justify-center mb-8 md:mb-10">
        <FilterTabs
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      {/* Grid */}
      <div
        id="projects-grid"
        role="tabpanel"
        aria-labelledby={`tab-${activeFilter}`}
        aria-live="polite"
        className="transition-opacity duration-300"
      >
        {filtered.length === 0 ? (
          <p className="text-center text-[#6E6E73] py-12">
            {t("projects.empty")}
          </p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((project) => (
              <li key={project.id}>
                <ProjectCard
                  project={project}
                  onClick={setSelectedProject}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal — key forces remount per project so per-project state (imgError) resets */}
      {selectedProject && (
        <ProjectModal
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
