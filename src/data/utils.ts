import type { WorkExperience, Project, ProjectFilter } from "./types";

/**
 * Converts a "MM/YYYY" date string to a numeric timestamp for comparison.
 * Returns 0 if the input is null, undefined, or empty.
 */
export function parseDate(dateStr: string): number {
  if (!dateStr) return 0;

  const [month, year] = dateStr.split("/");
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  if (isNaN(monthNum) || isNaN(yearNum)) return 0;

  // month is 0-indexed in Date constructor
  return new Date(yearNum, monthNum - 1).getTime();
}

/**
 * Returns a new array of work experiences sorted in reverse chronological order
 * by startDate (newest first). Does not mutate the original array.
 */
export function sortWorkExperiences(
  experiences: WorkExperience[]
): WorkExperience[] {
  return [...experiences].sort(
    (a, b) => parseDate(b.startDate) - parseDate(a.startDate)
  );
}

/**
 * Filters projects by category. If filter is "all", returns all projects unchanged.
 * Otherwise returns only projects whose category matches the filter.
 */
export function filterProjects(
  projects: Project[],
  filter: ProjectFilter
): Project[] {
  if (filter === "all") return projects;
  return projects.filter((project) => project.category === filter);
}
