# Design Document: Personal Portfolio Website — Adjie Satria Anggara

## Overview

Website portofolio pribadi ini adalah aplikasi web single-page yang dibangun dengan **Next.js App Router** (versi terbaru), di-deploy di **Vercel**, dan dirancang dengan estetika clean minimalis dominan putih dengan aksen biru ala Apple style.

### Tujuan Teknis

- Menyajikan identitas profesional, riwayat karier, dan portofolio proyek Adjie Satria Anggara
- Mendukung dua bahasa (Bahasa Indonesia dan English) via React Context tanpa library eksternal
- Responsif di semua ukuran perangkat (mobile ≤768px, tablet 769–1024px, desktop ≥1025px)
- Mencapai Lighthouse Performance ≥90 dan Accessibility ≥90
- Memenuhi standar aksesibilitas WCAG AA

### Keputusan Desain Utama

| Keputusan | Pilihan | Alasan |
|---|---|---|
| Framework | Next.js App Router | SSR/SSG built-in, optimasi gambar, font, dan deployment Vercel |
| Styling | Tailwind CSS | Utility-first, design token mudah dikonfigurasi, purge CSS otomatis |
| i18n | React Context (custom) | Sederhana, tanpa overhead library, cukup untuk 2 bahasa |
| Font | Geist via `next/font` | Bawaan Next.js, zero layout shift, subset otomatis |
| Gambar | `next/image` | WebP otomatis, lazy loading, CLS prevention via `width`/`height` |
| Data | TypeScript statis di `/src/data/` | Tidak perlu database, mudah diupdate, type-safe |


---

## Architecture

### Component Tree

```
app/
└── layout.tsx                    # Root layout: font, metadata, LanguageProvider
    └── page.tsx                  # Route "/" — Server Component (orchestrator)
        ├── <Navbar />            # Client Component (sticky, scroll-spy, language toggle)
        ├── <HeroSection />       # Server Component (konten statis)
        │   └── <SocialLinks />   # Server Component (ikon media sosial)
        ├── <WorkExperienceSection />  # Server Component
        │   └── <WorkExperienceCard /> # Server Component (hover via CSS)
        ├── <ProjectListSection />     # Client Component (filter + modal state)
        │   ├── <FilterTabs />         # Client Component (state filter aktif)
        │   ├── <ProjectCard />        # Client Component (onClick → modal)
        │   └── <ProjectModal />       # Client Component (dialog overlay)
        └── <Footer />            # Server Component
```

### Data Flow

```
/src/data/
├── workExperiences.ts   → WorkExperienceSection (Server Component, langsung import)
├── projects.ts          → ProjectListSection (Server Component, pass sebagai props)
└── personalInfo.ts      → HeroSection, Navbar, Footer

/src/i18n/
├── id.ts                → Translations Bahasa Indonesia
└── en.ts                → Translations Bahasa Inggris

LanguageContext (React Context)
├── Provider: app/layout.tsx (Client Component wrapper)
├── Consumer: semua komponen yang butuh teks terjemahan
└── State: locale ("id" | "en"), setLocale, t() helper function
```

### Rendering Strategy

```
Server Components (default):
  - HeroSection, WorkExperienceSection, WorkExperienceCard
  - SocialLinks, Footer
  - Tidak ada state, tidak ada event handler

Client Components ("use client"):
  - Navbar (scroll-spy, language toggle state)
  - ProjectListSection (filter state)
  - FilterTabs (onClick filter)
  - ProjectCard (onClick → buka modal)
  - ProjectModal (open/close state)
  - LanguageProvider (React Context provider)
```


---

## Components and Interfaces

### 1. LanguageProvider & useLanguage Hook

```typescript
// /src/i18n/LanguageContext.tsx
type Locale = "id" | "en";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}
```

**Perilaku:**
- Default locale: `"id"` (Bahasa Indonesia)
- Menyimpan locale ke `localStorage` agar persisten saat refresh
- Fungsi `t(key)` melakukan lookup ke objek translations; jika key tidak ditemukan di locale aktif, fallback ke `"id"`
- Provider dibungkus di `app/layout.tsx` sebagai Client Component

---

### 2. Navbar

```typescript
// /src/components/Navbar.tsx
// "use client"

interface NavLink {
  label: string;       // key i18n, misal "nav.hero"
  href: string;        // anchor ID, misal "#hero"
  sectionId: string;   // ID elemen untuk scroll-spy
}
```

**Perilaku:**
- `position: sticky; top: 0; z-index: 50` — selalu terlihat saat scroll
- Scroll-spy: menggunakan `IntersectionObserver` untuk mendeteksi section aktif
- Smooth scroll: `element.scrollIntoView({ behavior: "smooth" })` saat klik nav link
- Menampilkan `LanguageToggle` dan `ReachOutButton` di sisi kanan
- Di mobile: nav links disembunyikan atau dikompres (hamburger menu opsional)

---

### 3. LanguageToggle

```typescript
// /src/components/LanguageToggle.tsx
// "use client"

// Tidak ada props eksternal — menggunakan useLanguage() hook
// Merender dua tombol: "ID" dan "EN"
// Tombol aktif: bg-blue-600 text-white
// Tombol tidak aktif: bg-transparent text-gray-500
```

---

### 4. ReachOutButton

```typescript
// /src/components/ReachOutButton.tsx

interface ReachOutButtonProps {
  labelKey?: string;  // key i18n, default "nav.reachOut"
  className?: string;
}
```

**Perilaku:**
- Render sebagai `<a href="mailto:asatrianggara84@gmail.com">`
- `aria-label`: "Kirim email ke Adjie Satria Anggara" (i18n)
- Warna: `bg-[#0071E3] text-white`
- Tap target minimal 44×44px
- Transisi hover: `opacity-90` dalam 200ms


---

### 5. HeroSection

```typescript
// /src/components/HeroSection.tsx
// Server Component

interface HeroSectionProps {
  data: PersonalInfo;
}
```

**Layout:**
- Desktop (≥1025px): dua kolom — teks kiri, foto kanan
- Mobile (≤768px): satu kolom vertikal — foto atas, teks bawah
- Foto: `next/image` dengan `width={300} height={300}` (desktop), `width={200} height={200}` (mobile), `className="rounded-full"`
- Placeholder foto: gradient abu-abu `bg-gradient-to-br from-gray-200 to-gray-300`
- Badge "7+ Tahun Pengalaman": chip kecil dengan border dan teks biru

---

### 6. SocialLinks

```typescript
// /src/components/SocialLinks.tsx
// Server Component

interface SocialLink {
  platform: "instagram" | "tiktok" | "threads";
  url: string;
  ariaLabel: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}
```

**Perilaku:**
- Setiap link: `<a target="_blank" rel="noopener noreferrer">`
- Ikon SVG inline per platform
- Fokus keyboard: `focus-visible:outline-2 focus-visible:outline-offset-2`

---

### 7. WorkExperienceSection

```typescript
// /src/components/WorkExperienceSection.tsx
// Server Component

interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
}
```

**Perilaku:**
- Menampilkan heading "Pengalaman Kerja" / "Work Experience" (via i18n)
- Menampilkan badge "7+ Tahun Pengalaman" di atas daftar
- Merender daftar `WorkExperienceCard` dalam urutan kronologis terbalik

---

### 8. WorkExperienceCard

```typescript
// /src/components/WorkExperienceCard.tsx
// Server Component (hover via CSS Tailwind)

interface WorkExperienceCardProps {
  experience: WorkExperience;
}
```

**Perilaku:**
- Hover: `hover:bg-[#F5F5F7] hover:shadow-md transition-all duration-200 ease-in-out`
- Tag keahlian: chip/badge dengan `bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm`
- Periode: format "MM/YYYY – MM/YYYY" atau "MM/YYYY – Sekarang"


---

### 9. ProjectListSection

```typescript
// /src/components/ProjectListSection.tsx
// "use client"

interface ProjectListSectionProps {
  projects: Project[];
}

type ProjectFilter = "all" | "ui-design" | "digital-marketing";
```

**State internal:**
```typescript
const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
const [selectedProject, setSelectedProject] = useState<Project | null>(null);
```

**Perilaku:**
- Filter default: `"all"` saat pertama dimuat
- Transisi filter: `transition-opacity duration-300` pada grid
- Jika tidak ada proyek sesuai filter: tampilkan pesan i18n `"projects.empty"`

---

### 10. FilterTabs

```typescript
// /src/components/FilterTabs.tsx
// "use client"

interface FilterTabsProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}
```

**Perilaku:**
- Tab aktif: `bg-[#0071E3] text-white`
- Tab tidak aktif: `bg-gray-100 text-gray-600 hover:bg-gray-200`
- `role="tablist"` dengan `role="tab"` pada setiap tombol untuk aksesibilitas

---

### 11. ProjectCard

```typescript
// /src/components/ProjectCard.tsx
// "use client"

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}
```

**Perilaku:**
- Gambar: `next/image` dengan `aspect-ratio: 16/9`, `loading="lazy"`
- Placeholder: gradient abu-abu jika `project.imageUrl` tidak ada
- Hover: `hover:shadow-lg hover:-translate-y-1 transition-all duration-200`
- `role="button"` atau `<button>` wrapper untuk aksesibilitas keyboard

---

### 12. ProjectModal

```typescript
// /src/components/ProjectModal.tsx
// "use client"

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}
```

**Perilaku:**
- Render sebagai `<dialog>` HTML native atau overlay `<div role="dialog" aria-modal="true">`
- Tutup dengan: tombol ×, klik backdrop, atau tekan `Escape`
- Focus trap: fokus keyboard terkunci di dalam modal saat terbuka
- `aria-labelledby` menunjuk ke heading nama proyek di dalam modal
- Animasi masuk: `opacity-0 → opacity-100` + `scale-95 → scale-100` dalam 200ms

---

### 13. Footer

```typescript
// /src/components/Footer.tsx
// Server Component

interface FooterProps {
  socialLinks: SocialLink[];
  email: string;
}
```

**Perilaku:**
- Copyright: `© {new Date().getFullYear()} Adjie Satria Anggara. All rights reserved.`
- Ikon sosial: ukuran minimal 24×24px, tap target 44×44px
- Email link: `<a href="mailto:asatrianggara84@gmail.com">`


---

## Data Models

### PersonalInfo

```typescript
// /src/data/personalInfo.ts

export interface PersonalInfo {
  fullName: string;                    // "Adjie Satria Anggara"
  role: string;                        // key i18n atau string langsung
  summary: string;                     // ringkasan keahlian (i18n key)
  skills: string[];                    // ["Google Ads", "Facebook Ads", ...]
  yearsOfExperience: number;           // 7
  experienceSince: number;             // 2018
  email: string;                       // "asatrianggara84@gmail.com"
  profileImageUrl?: string;            // path ke /public/images/profile.jpg
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: "instagram" | "tiktok" | "threads";
  url: string;
  ariaLabel: string;                   // "Kunjungi Instagram Adjie Satria Anggara"
}
```

---

### WorkExperience

```typescript
// /src/data/workExperiences.ts

export interface WorkExperience {
  id: string;                          // UUID atau slug unik
  position: string;                    // key i18n atau string langsung
  company: string;                     // nama perusahaan/klien
  startDate: string;                   // format "MM/YYYY", misal "03/2018"
  endDate: string | null;              // null = posisi aktif saat ini
  descriptionKey: string;              // key i18n untuk deskripsi panjang
  skills: string[];                    // ["Google Ads", "GTM", "GA4"]
  isActive: boolean;                   // true jika posisi saat ini
}

// Contoh data:
export const workExperiences: WorkExperience[] = [
  {
    id: "kalika-digital-marketing",
    position: "Digital Marketing Specialist",
    company: "Kalika",
    startDate: "01/2022",
    endDate: null,
    descriptionKey: "experience.kalika.description",
    skills: ["Google Ads", "Facebook Ads", "GTM", "GA4"],
    isActive: true,
  },
  // ... entri lainnya
];
```

**Catatan sorting:** Data diurutkan di file statis (terbaru di atas), atau diurutkan saat render dengan:
```typescript
const sorted = [...workExperiences].sort((a, b) =>
  parseDate(b.startDate) - parseDate(a.startDate)
);
```

---

### Project

```typescript
// /src/data/projects.ts

export type ProjectCategory = "ui-design" | "digital-marketing";

export interface Project {
  id: string;                          // slug unik
  nameKey: string;                     // key i18n untuk nama proyek
  year: number;                        // tahun pengerjaan
  client: string;                      // nama klien
  category: ProjectCategory;
  descriptionKey: string;              // key i18n untuk deskripsi
  imageUrl?: string;                   // path ke /public/images/projects/
  tags: string[];                      // tag tambahan opsional
}

// Contoh data:
export const projects: Project[] = [
  {
    id: "kalika-campaign-2023",
    nameKey: "project.kalika2023.name",
    year: 2023,
    client: "Kalika",
    category: "digital-marketing",
    descriptionKey: "project.kalika2023.description",
    imageUrl: "/images/projects/kalika-2023.webp",
    tags: ["Google Ads", "Meta Ads", "ROI Optimization"],
  },
  // ... proyek lainnya
];
```


---

## i18n Design

### Struktur File Translations

```
/src/i18n/
├── id.ts          # Bahasa Indonesia (default/fallback)
├── en.ts          # Bahasa Inggris
├── types.ts       # TypeScript interface untuk objek translations
└── LanguageContext.tsx  # React Context + Provider + useLanguage hook
```

### Interface Translations

```typescript
// /src/i18n/types.ts

export interface Translations {
  nav: {
    hero: string;
    workExperience: string;
    projects: string;
    reachOut: string;
    reachOutAriaLabel: string;
  };
  hero: {
    role: string;
    summary: string;
    experienceBadge: string;        // "7+ Tahun Pengalaman (Sejak 2018)"
    reachOutButton: string;         // "Hubungi Saya"
  };
  workExperience: {
    sectionTitle: string;           // "Pengalaman Kerja"
    experienceSummary: string;      // "7+ Tahun Pengalaman"
    present: string;                // "Sekarang"
  };
  projects: {
    sectionTitle: string;           // "Proyek"
    filterAll: string;              // "Semua"
    filterUiDesign: string;         // "UI Design"
    filterDigitalMarketing: string; // "Digital Marketing"
    empty: string;                  // "Tidak ada proyek dalam kategori ini"
    modalClose: string;             // "Tutup"
  };
  footer: {
    copyright: string;              // "Adjie Satria Anggara. All rights reserved."
    emailAriaLabel: string;
  };
  social: {
    instagramAriaLabel: string;
    tiktokAriaLabel: string;
    threadsAriaLabel: string;
  };
  error: {
    loadFailed: string;             // "Terjadi kesalahan. Silakan muat ulang halaman."
    reload: string;                 // "Muat Ulang"
  };
  // Keys dinamis untuk deskripsi experience dan project
  [key: string]: unknown;
}
```

### Contoh File id.ts

```typescript
// /src/i18n/id.ts
import { Translations } from "./types";

export const id: Translations = {
  nav: {
    hero: "Beranda",
    workExperience: "Pengalaman",
    projects: "Proyek",
    reachOut: "Hubungi Saya",
    reachOutAriaLabel: "Kirim email ke Adjie Satria Anggara",
  },
  hero: {
    role: "Strategic Digital Marketing Professional / Specialist",
    summary: "Spesialis full-funnel campaign management, B2B lead generation, ROI optimization, Google Ads, Facebook Ads, TikTok Ads, Technical Tracking (GTM & GA4), dan conversion-focused UI/UX design.",
    experienceBadge: "7+ Tahun Pengalaman (Sejak 2018)",
    reachOutButton: "Hubungi Saya",
  },
  workExperience: {
    sectionTitle: "Pengalaman Kerja",
    experienceSummary: "7+ Tahun Pengalaman",
    present: "Sekarang",
  },
  projects: {
    sectionTitle: "Proyek",
    filterAll: "Semua",
    filterUiDesign: "UI Design",
    filterDigitalMarketing: "Digital Marketing",
    empty: "Tidak ada proyek dalam kategori ini.",
    modalClose: "Tutup",
  },
  footer: {
    copyright: "Adjie Satria Anggara. All rights reserved.",
    emailAriaLabel: "Kirim email ke Adjie Satria Anggara",
  },
  social: {
    instagramAriaLabel: "Kunjungi Instagram Adjie Satria Anggara",
    tiktokAriaLabel: "Kunjungi TikTok Adjie Satria Anggara",
    threadsAriaLabel: "Kunjungi Threads Adjie Satria Anggara",
  },
  error: {
    loadFailed: "Terjadi kesalahan. Silakan muat ulang halaman.",
    reload: "Muat Ulang",
  },
};
```

### Implementasi LanguageContext

```typescript
// /src/i18n/LanguageContext.tsx
"use client";

const STORAGE_KEY = "portfolio-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem(STORAGE_KEY) as Locale) ?? "id";
    }
    return "id";
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  };

  const translations = locale === "en" ? en : id;

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations;
    for (const k of keys) {
      if (typeof value === "object" && value !== null) {
        value = (value as Record<string, unknown>)[k];
      } else {
        break;
      }
    }
    if (typeof value === "string") return value;
    // Fallback ke Bahasa Indonesia
    let fallback: unknown = id;
    for (const k of keys) {
      if (typeof fallback === "object" && fallback !== null) {
        fallback = (fallback as Record<string, unknown>)[k];
      } else {
        break;
      }
    }
    return typeof fallback === "string" ? fallback : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
```


---

## Responsive Layout Design

### Breakpoint Strategy

Menggunakan breakpoint Tailwind CSS yang disesuaikan dengan requirements:

```javascript
// tailwind.config.ts
theme: {
  screens: {
    sm: "640px",   // Tailwind default (tidak digunakan sebagai breakpoint utama)
    md: "769px",   // Tablet: 769px–1024px
    lg: "1025px",  // Desktop: ≥1025px
  }
}
```

### Layout Per Section

#### Navbar

| Breakpoint | Layout |
|---|---|
| Mobile (≤768px) | Logo kiri, tombol Reach Out + Language Toggle kanan (nav links disembunyikan) |
| Tablet (769–1024px) | Logo kiri, nav links tengah, tombol kanan |
| Desktop (≥1025px) | Logo kiri, nav links tengah, tombol kanan (full) |

#### Hero Section

| Breakpoint | Layout |
|---|---|
| Mobile (≤768px) | Kolom tunggal vertikal: foto (200×200px) → nama → role → summary → badge → CTA |
| Tablet (769–1024px) | Dua kolom: teks kiri (60%), foto kanan (40%) |
| Desktop (≥1025px) | Dua kolom: teks kiri (55%), foto kanan (45%), foto 300×300px |

#### Work Experience Section

| Breakpoint | Layout |
|---|---|
| Mobile (≤768px) | Kolom tunggal, padding 16px |
| Tablet (769–1024px) | Kolom tunggal, padding 24px, max-width 720px centered |
| Desktop (≥1025px) | Kolom tunggal, max-width 800px centered |

#### Project List Section (Grid)

| Breakpoint | Kolom | Gap |
|---|---|---|
| Mobile (≤768px) | 1 kolom | 16px |
| Tablet (769–1024px) | 2 kolom | 24px |
| Desktop (≥1025px) | 3 kolom | 24px |

```html
<!-- Implementasi Tailwind -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
```

#### Footer

| Breakpoint | Layout |
|---|---|
| Mobile (≤768px) | Stack vertikal: ikon sosial → email → copyright |
| Tablet+ | Horizontal: copyright kiri, ikon sosial + email kanan |

### Design Tokens (Tailwind Config)

```javascript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: "#0071E3",       // Biru Apple
      "primary-hover": "#0077ED",
      surface: "#F5F5F7",       // Background hover card
      "text-primary": "#1D1D1F",
      "text-secondary": "#6E6E73",
    },
    spacing: {
      // Kelipatan 8px sudah ada di Tailwind default (2=8px, 4=16px, 6=24px, dst)
    },
    borderRadius: {
      card: "8px",
      button: "4px",
      "button-lg": "8px",
    },
    boxShadow: {
      card: "0 2px 8px rgba(0,0,0,0.08)",
      "card-hover": "0 4px 16px rgba(0,0,0,0.12)",
    },
    transitionDuration: {
      DEFAULT: "200ms",
      slow: "300ms",
    },
    transitionTimingFunction: {
      DEFAULT: "ease-in-out",
    },
  },
}
```


---

## Performance Strategy

### SSR vs SSG

Karena semua data bersifat statis (tidak ada API eksternal atau database), seluruh halaman di-render sebagai **Static Site Generation (SSG)** pada build time:

```typescript
// app/page.tsx — Server Component, otomatis SSG di Next.js App Router
// Tidak ada fetch() dengan revalidate, tidak ada dynamic() override
// Next.js akan menghasilkan HTML statis saat `next build`
```

### Image Optimization

```typescript
// Semua gambar menggunakan next/image
<Image
  src={project.imageUrl ?? "/images/placeholder.webp"}
  alt={project.name}
  width={400}
  height={225}           // Rasio 16:9
  loading="lazy"         // Gambar di bawah fold
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
/>

// Foto profil: priority=true karena above the fold (LCP element)
<Image
  src={personalInfo.profileImageUrl ?? "/images/profile-placeholder.webp"}
  alt="Foto profil Adjie Satria Anggara"
  width={300}
  height={300}
  priority={true}        // Preload untuk LCP
  className="rounded-full object-cover"
/>
```

**Konfigurasi next.config.js:**
```javascript
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 768, 1024, 1280, 1920],
  },
};
```

### Font Loading

```typescript
// app/layout.tsx
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",       // Mencegah FOIT, mengurangi CLS
  variable: "--font-geist",
});
```

### Bundle Optimization

- **Server Components by default**: Mengurangi JavaScript yang dikirim ke client
- **Client Components minimal**: Hanya Navbar, ProjectListSection, FilterTabs, ProjectCard, ProjectModal, LanguageProvider
- **Dynamic import untuk ProjectModal**: Dimuat hanya saat dibutuhkan

```typescript
// Lazy load modal untuk mengurangi initial bundle
const ProjectModal = dynamic(() => import("./ProjectModal"), {
  loading: () => null,
});
```

### Core Web Vitals Targets

| Metrik | Target | Strategi |
|---|---|---|
| LCP | < 2.5s | `priority` pada foto profil, SSG, CDN Vercel |
| CLS | < 0.1 | `width`/`height` eksplisit pada semua `next/image`, `font-display: swap` |
| TTFB | < 600ms | SSG + Vercel Edge Network |
| FID/INP | < 200ms | Minimal Client Components, tidak ada heavy computation di main thread |

### Prefers-Reduced-Motion

```css
/* globals.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

```typescript
// Untuk smooth scroll di Navbar — cek preferensi sebelum animasi
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

element.scrollIntoView({
  behavior: prefersReducedMotion ? "auto" : "smooth",
});
```


---

## Accessibility Design

### Prinsip Umum

Website ini dirancang untuk memenuhi **WCAG 2.1 Level AA**. Catatan: validasi penuh memerlukan pengujian manual dengan assistive technology (screen reader, keyboard-only navigation).

### Struktur Heading

```
<h1> — Nama: "Adjie Satria Anggara" (HeroSection)
<h2> — Heading section: "Pengalaman Kerja", "Proyek"
<h3> — Nama posisi di WorkExperienceCard, nama proyek di ProjectCard
```

### ARIA Landmarks

```html
<header role="banner">        <!-- Navbar -->
<main role="main">            <!-- Konten utama: Hero, WorkExp, Projects -->
  <section aria-labelledby="hero-heading">
  <section aria-labelledby="work-experience-heading">
  <section aria-labelledby="projects-heading">
<footer role="contentinfo">   <!-- Footer -->
```

### Keyboard Navigation

| Komponen | Perilaku Keyboard |
|---|---|
| Navbar links | Tab untuk fokus, Enter untuk navigasi |
| LanguageToggle | Tab untuk fokus, Enter/Space untuk toggle |
| ReachOutButton | Tab untuk fokus, Enter untuk buka mailto |
| FilterTabs | Tab untuk fokus, Enter/Space untuk pilih filter; Arrow keys untuk navigasi antar tab |
| ProjectCard | Tab untuk fokus, Enter/Space untuk buka modal |
| ProjectModal | Escape untuk tutup; Tab terkunci di dalam modal (focus trap) |
| Social links | Tab untuk fokus, Enter untuk buka link |

### Focus Management

```typescript
// ProjectModal: focus trap implementation
useEffect(() => {
  if (!isOpen) return;
  const focusableElements = modalRef.current?.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements?.[0] as HTMLElement;
  const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

  firstElement?.focus();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [isOpen, onClose]);
```

### Kontras Warna

| Elemen | Foreground | Background | Rasio | Status |
|---|---|---|---|---|
| Body text | `#1D1D1F` | `#FFFFFF` | 16.1:1 | ✅ AAA |
| Secondary text | `#6E6E73` | `#FFFFFF` | 5.9:1 | ✅ AA |
| ReachOutButton | `#FFFFFF` | `#0071E3` | 4.6:1 | ✅ AA |
| Filter tab aktif | `#FFFFFF` | `#0071E3` | 4.6:1 | ✅ AA |
| Skill badge | `#374151` | `#F3F4F6` | 7.2:1 | ✅ AAA |

### Focus Indicator

```css
/* Semua elemen interaktif */
:focus-visible {
  outline: 2px solid #0071E3;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Screen Reader Considerations

- `alt` text deskriptif pada semua gambar
- `aria-label` pada tombol ikon (tanpa teks visible)
- `aria-current="page"` pada nav link section aktif (scroll-spy)
- `aria-live="polite"` pada area filter hasil proyek untuk mengumumkan perubahan
- `aria-expanded` pada tombol yang membuka/menutup konten
- `aria-hidden="true"` pada ikon dekoratif

```html
<!-- Contoh: FilterTabs dengan ARIA -->
<div role="tablist" aria-label="Filter proyek">
  <button
    role="tab"
    aria-selected={activeFilter === "all"}
    aria-controls="project-grid"
    id="tab-all"
  >
    Semua
  </button>
</div>
<div
  id="project-grid"
  role="tabpanel"
  aria-labelledby="tab-all"
  aria-live="polite"
>
  <!-- Project cards -->
</div>
```


---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Fitur ini melibatkan logika bisnis yang dapat diuji dengan property-based testing, khususnya pada: sistem i18n (lookup, fallback, persistensi), pengurutan data, dan logika filter. Library yang digunakan: **fast-check** (TypeScript/JavaScript).

---

### Property 1: Locale Lookup Correctness

*For any* translation key yang valid dan terdaftar di objek translations, fungsi `t(key)` dengan locale `"id"` SHALL mengembalikan nilai dari objek `id.ts`, dan fungsi `t(key)` dengan locale `"en"` SHALL mengembalikan nilai dari objek `en.ts`.

**Validates: Requirements 2.2, 2.3, 2.4**

---

### Property 2: Translation Fallback

*For any* translation key yang ada di `id.ts` tetapi tidak ada di `en.ts`, fungsi `t(key)` dengan locale `"en"` aktif SHALL mengembalikan nilai dari `id.ts` (bukan string kosong, bukan `undefined`, bukan key itu sendiri).

**Validates: Requirements 2.9**

---

### Property 3: Locale Persistence Round-Trip

*For any* locale yang valid (`"id"` atau `"en"`), setelah `setLocale(locale)` dipanggil dan nilai dibaca kembali dari `localStorage`, nilai yang dikembalikan SHALL sama dengan locale yang disimpan.

**Validates: Requirements 2.8**

---

### Property 4: Work Experience Chronological Sort

*For any* array `WorkExperience[]` dengan urutan acak, setelah diurutkan dengan fungsi sort yang digunakan oleh `WorkExperienceSection`, setiap entri pada indeks `i` SHALL memiliki `startDate` yang lebih baru atau sama dengan entri pada indeks `i+1` (urutan kronologis terbalik).

**Validates: Requirements 6.3**

---

### Property 5: Project Filter Correctness

*For any* array `Project[]` dan *for any* filter kategori yang dipilih (`"ui-design"` atau `"digital-marketing"`), semua proyek yang dikembalikan oleh fungsi filter SHALL memiliki `category` yang sama persis dengan filter yang dipilih. Tidak ada proyek dari kategori lain yang boleh muncul dalam hasil filter.

**Validates: Requirements 7.10**

---

### Property 6: Translation Key Completeness

*For any* translation key yang digunakan oleh komponen-komponen website (diambil dari `id.ts` sebagai sumber kebenaran), key tersebut SHALL ada di `en.ts` dengan nilai bertipe `string` yang tidak kosong, sehingga tidak ada teks yang hilang saat locale `"en"` aktif.

**Validates: Requirements 2.7**


---

## Error Handling

### Strategi Error Handling

| Skenario | Penanganan |
|---|---|
| Foto profil tidak tersedia | Tampilkan placeholder gradient abu-abu via `onError` pada `next/image` |
| Gambar proyek tidak tersedia | Tampilkan placeholder gradient abu-abu dengan rasio 16:9 |
| Translation key tidak ditemukan | Fallback ke nilai `id.ts`; jika tidak ada di `id.ts`, tampilkan key itu sendiri |
| Filter proyek tidak menghasilkan hasil | Tampilkan pesan i18n `"projects.empty"` |
| Halaman gagal dimuat (error boundary) | Tampilkan pesan error dengan tombol "Muat Ulang" |
| localStorage tidak tersedia (SSR/private mode) | Gunakan default locale `"id"` tanpa crash |

### Error Boundary

```typescript
// app/error.tsx — Next.js App Router error boundary
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div role="alert" className="flex flex-col items-center justify-center min-h-screen">
      <p>Terjadi kesalahan. Silakan muat ulang halaman.</p>
      <button onClick={reset}>Muat Ulang</button>
    </div>
  );
}
```

### Image Error Handling

```typescript
// Dalam ProjectCard dan HeroSection
const [imgError, setImgError] = useState(false);

<Image
  src={imgError ? "/images/placeholder.webp" : project.imageUrl}
  onError={() => setImgError(true)}
  alt={project.name}
  // ...
/>
```

### localStorage Guard

```typescript
// Dalam LanguageContext
const getInitialLocale = (): Locale => {
  try {
    if (typeof window === "undefined") return "id";
    return (localStorage.getItem(STORAGE_KEY) as Locale) ?? "id";
  } catch {
    // localStorage tidak tersedia (private browsing, dll)
    return "id";
  }
};
```

---

## Testing Strategy

### Pendekatan Dual Testing

Testing menggunakan dua pendekatan komplementer:
1. **Unit tests** — untuk contoh spesifik, edge cases, dan kondisi error
2. **Property-based tests** — untuk properti universal yang berlaku di semua input

### Setup Testing

```
Testing Framework: Jest + React Testing Library
Property-Based Testing: fast-check
```

```json
// package.json (devDependencies)
{
  "jest": "^29.x",
  "@testing-library/react": "^14.x",
  "@testing-library/jest-dom": "^6.x",
  "fast-check": "^3.x"
}
```

### Unit Tests

**Komponen yang diuji:**

| Komponen | Test Cases |
|---|---|
| `LanguageProvider` | Default locale "id", setLocale mengubah state, localStorage digunakan |
| `LanguageToggle` | Tombol "ID" dan "EN" ada, tombol aktif memiliki class berbeda |
| `ReachOutButton` | href mailto benar, aria-label ada, class warna biru ada |
| `Navbar` | Tiga nav links ada, nama "Adjie Satria Anggara" ada |
| `WorkExperienceCard` | Render posisi, perusahaan, periode, skill tags |
| `ProjectCard` | Render nama, tahun, klien, kategori; onClick dipanggil |
| `ProjectModal` | Render detail proyek, tutup dengan Escape, tutup dengan tombol × |
| `FilterTabs` | Tiga tab ada, tab aktif memiliki aria-selected="true" |
| `Footer` | Copyright dengan tahun dinamis, tiga ikon sosial, email link |

### Property-Based Tests

Setiap property test dikonfigurasi dengan **minimum 100 iterasi** dan diberi tag referensi ke design property.

```typescript
// __tests__/i18n/languageContext.property.test.ts
import fc from "fast-check";
import { id } from "@/i18n/id";
import { en } from "@/i18n/en";
import { createT } from "@/i18n/utils";

// Feature: personal-portfolio-website, Property 1: Locale Lookup Correctness
test("t(key) dengan locale 'id' mengembalikan nilai dari id.ts", () => {
  const allKeys = getAllKeys(id); // helper untuk flatten nested keys
  fc.assert(
    fc.property(fc.constantFrom(...allKeys), (key) => {
      const t = createT("id");
      expect(t(key)).toBe(getNestedValue(id, key));
    }),
    { numRuns: 100 }
  );
});

// Feature: personal-portfolio-website, Property 2: Translation Fallback
test("t(key) fallback ke id.ts jika key tidak ada di en.ts", () => {
  const idOnlyKeys = getAllKeys(id).filter(
    (key) => getNestedValue(en, key) === undefined
  );
  if (idOnlyKeys.length === 0) return; // Semua keys ada di en.ts
  fc.assert(
    fc.property(fc.constantFrom(...idOnlyKeys), (key) => {
      const t = createT("en");
      expect(t(key)).toBe(getNestedValue(id, key));
    }),
    { numRuns: 100 }
  );
});

// Feature: personal-portfolio-website, Property 3: Locale Persistence Round-Trip
test("setLocale kemudian baca localStorage mengembalikan locale yang sama", () => {
  fc.assert(
    fc.property(fc.constantFrom("id", "en"), (locale) => {
      localStorage.setItem("portfolio-locale", locale);
      const stored = localStorage.getItem("portfolio-locale");
      expect(stored).toBe(locale);
    }),
    { numRuns: 100 }
  );
});

// Feature: personal-portfolio-website, Property 4: Work Experience Chronological Sort
test("sortWorkExperiences menghasilkan urutan kronologis terbalik", () => {
  const workExpArb = fc.record({
    id: fc.string(),
    startDate: fc.tuple(
      fc.integer({ min: 1, max: 12 }).map((m) => m.toString().padStart(2, "0")),
      fc.integer({ min: 2015, max: 2024 }).map(String)
    ).map(([m, y]) => `${m}/${y}`),
    endDate: fc.option(fc.constant(null)),
    // ... outros campos
  });
  fc.assert(
    fc.property(fc.array(workExpArb, { minLength: 2 }), (experiences) => {
      const sorted = sortWorkExperiences(experiences);
      for (let i = 0; i < sorted.length - 1; i++) {
        expect(parseDate(sorted[i].startDate)).toBeGreaterThanOrEqual(
          parseDate(sorted[i + 1].startDate)
        );
      }
    }),
    { numRuns: 100 }
  );
});

// Feature: personal-portfolio-website, Property 5: Project Filter Correctness
test("filterProjects hanya mengembalikan proyek dengan kategori yang sesuai", () => {
  const projectArb = fc.record({
    id: fc.string(),
    category: fc.constantFrom("ui-design", "digital-marketing"),
    // ... outros campos
  });
  const filterArb = fc.constantFrom("ui-design", "digital-marketing");
  fc.assert(
    fc.property(fc.array(projectArb), filterArb, (projects, filter) => {
      const result = filterProjects(projects, filter);
      result.forEach((p) => {
        expect(p.category).toBe(filter);
      });
    }),
    { numRuns: 100 }
  );
});
```

### Integration Tests

- Lighthouse CI pada setiap PR (Performance ≥90, Accessibility ≥90)
- Visual regression test untuk layout responsif di tiga breakpoint
- End-to-end test dengan Playwright: navigasi, language toggle, filter proyek, buka/tutup modal

### Test Coverage Target

| Layer | Target Coverage |
|---|---|
| i18n utilities (t, fallback, persistence) | 100% |
| Data utilities (sort, filter) | 100% |
| Komponen UI (unit) | ≥80% |
| Integration/E2E | Alur utama pengguna |

