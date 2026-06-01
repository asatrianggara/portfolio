/**
 * Data model type definitions for the portfolio website.
 * All content is static — no i18n keys in data files.
 * The i18n system handles UI labels; data files hold direct content strings.
 */

/**
 * A value that can be either a plain string/array (single language, used as-is)
 * or an object with `id`/`en` variants. Use `pickLocalized` from
 * `@/i18n/localized` to read the value for the active locale.
 */
export type Localized<T> = T | { id: T; en: T };

/** Categories a project can belong to. */
export type ProjectCategory = "ui-design" | "digital-marketing" | "graphic-design";

/** Filter values used by the project filter UI (includes "all" sentinel). */
export type ProjectFilter = "all" | "ui-design" | "digital-marketing" | "graphic-design";

/** A social media profile link. */
export interface SocialLink {
  platform: "instagram" | "tiktok" | "threads";
  url: string;
  /** Accessible label, e.g. "Kunjungi Instagram Adjie Satria Anggara" */
  ariaLabel: string;
}

/** Core personal/contact information displayed in the Hero section and Footer. */
export interface PersonalInfo {
  fullName: string;
  role: string;
  summary: string;
  skills: string[];
  /** Total years of professional experience, e.g. 7 */
  yearsOfExperience: number;
  /** Year experience started, e.g. 2018 */
  experienceSince: number;
  email: string;
  phone: string;
  linkedIn: string;
  /** Path to profile image in /public, e.g. "/images/profile.jpg" */
  profileImageUrl?: string;
  socialLinks: SocialLink[];
}

/** A single work experience entry displayed in the Work Experience section. */
export interface WorkExperience {
  /** Unique slug identifier, e.g. "digital-oasis-2025" */
  id: string;
  position: string;
  company: string;
  location: string;
  /** Format "MM/YYYY", e.g. "03/2018" */
  startDate: string;
  /** Format "MM/YYYY", or null if this is the current position */
  endDate: string | null;
  /** Bullet-point descriptions of responsibilities and achievements */
  descriptionPoints: string[];
  skills: string[];
  /** true if this is the current/active position */
  isActive: boolean;
}

/** Structured case-study content rendered in the project modal. */
export interface ProjectCaseStudy {
  /** Background — role, brand, scope. */
  context?: Localized<string>;
  /** Problem statement and target. */
  challenge?: Localized<string>;
  /** Concrete actions taken, as bullet points. */
  whatIDid?: Localized<string[]>;
  /** Outcomes and metrics, as bullet points. */
  impact?: Localized<string[]>;
}

/** A portfolio project entry displayed in the Project List section. */
export interface Project {
  /** Unique slug identifier, e.g. "kalika-campaign-2023" */
  id: string;
  name: Localized<string>;
  /** Optional longer headline shown in the modal title, e.g. with brand & employer. */
  title?: Localized<string>;
  year: number;
  client?: Localized<string>;
  category: ProjectCategory;
  description?: Localized<string>;
  caseStudy?: ProjectCaseStudy;
  /** Path to project image in /public, e.g. "/images/projects/project.webp" */
  imageUrl?: string;
  /** Optional external link (case study, live site, etc.) */
  link?: string;
  tags?: string[];
}
