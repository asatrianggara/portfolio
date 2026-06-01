# Implementation Plan: Website Portofolio Pribadi — Adjie Satria Anggara

## Overview

Implementasi website portofolio single-page menggunakan Next.js App Router, Tailwind CSS, dan TypeScript. Pendekatan bertahap dimulai dari fondasi proyek, data layer, sistem i18n, komponen UI, hingga optimasi dan verifikasi build.

## Tasks

- [x] 1. Setup proyek dan konfigurasi dasar
  - [x] 1.1 Inisialisasi proyek Next.js App Router dengan TypeScript dan Tailwind CSS
    - Jalankan `npx create-next-app@latest` dengan opsi: TypeScript, Tailwind CSS, App Router, src/ directory
    - Hapus file boilerplate bawaan (konten `page.tsx`, `globals.css` default)
    - Verifikasi `next.config.ts` dan `tsconfig.json` terbuat dengan benar
    - _Requirements: 9.6_

  - [x] 1.2 Konfigurasi Tailwind CSS dengan design tokens
    - Tambahkan custom colors: `primary: "#0071E3"`, `primary-hover: "#0077ED"`, `surface: "#F5F5F7"`, `text-primary: "#1D1D1F"`, `text-secondary: "#6E6E73"`
    - Tambahkan custom `borderRadius`: `card: "8px"`, `button: "4px"`, `button-lg: "8px"`
    - Tambahkan custom `boxShadow`: `card: "0 2px 8px rgba(0,0,0,0.08)"`, `card-hover: "0 4px 16px rgba(0,0,0,0.12)"`
    - Konfigurasi breakpoints: `md: "769px"`, `lg: "1025px"`
    - _Requirements: 8.1, 8.4_

  - [x] 1.3 Konfigurasi `next.config.ts` dan `globals.css`
    - Tambahkan konfigurasi `images.formats: ["image/webp", "image/avif"]` dan `deviceSizes`
    - Tambahkan font Geist via `next/font/google` di `app/layout.tsx`
    - Tambahkan CSS global `@media (prefers-reduced-motion: reduce)` untuk menonaktifkan animasi
    - Tambahkan CSS global `:focus-visible` dengan outline biru `#0071E3`
    - _Requirements: 8.5, 8.7, 9.5_

- [x] 2. Data layer — TypeScript interfaces dan data statis
  - [x] 2.1 Buat TypeScript interfaces untuk semua data model
    - Buat file `/src/data/types.ts` dengan interface `PersonalInfo`, `SocialLink`, `WorkExperience`, `Project`, dan type `ProjectCategory`
    - Pastikan semua field sesuai dengan design document (termasuk `isActive`, `descriptionKey`, `nameKey`, dll.)
    - _Requirements: 6.2, 7.2_

  - [x] 2.2 Buat file data statis `personalInfo.ts`, `workExperiences.ts`, dan `projects.ts`
    - Isi `/src/data/personalInfo.ts` dengan data: fullName "Adjie Satria Anggara", email "asatrianggara84@gmail.com", LinkedIn "www.linkedin.com/in/adjie-satria-anggara/", phone "+6285156251342", skills ["Google Ads", "Facebook Ads", "TikTok Ads", "SnackVideo Ads", "GTM", "GA4", "B2B Lead Generation", "ROI Optimization", "UI/UX Design", "Figma", "Canva", "Apollo.io", "CapCut"]
    - Isi `/src/data/workExperiences.ts` dengan 4 entri karier dari CV (terbaru di atas):
      1. Digital Marketing Specialist — Digital Oasis (PT. Pilar Timur Teknologi), Bandung — 06/2025–Sekarang — skills: Google Ads, GTM, GA4, Apollo.io, Canva, Figma
      2. Digital Marketing Specialist — Lifegood.id, Malang — 05/2023–05/2024 — skills: Facebook Ads, TikTok Ads, SnackVideo Ads, CapCut, Canva
      3. Research and Development Analyst — PT Media Citra Digitalindo, Blitar — 09/2022–05/2023 — skills: Product Analysis, Campaign Testing, KPI Dashboard
      4. Digital Advertiser — PT Hafara Cantik Indonesia, Bandung — 03/2018–12/2019 — skills: Facebook Ads, Ad Copywriting, Budget Management
    - Isi `/src/data/projects.ts` dengan 6 proyek berdasarkan CV:
      1. "IMOLA Beta Test Program" — 2025 — Digital Oasis — Digital Marketing — deskripsi: Led end-to-end beta test program, brand identity, landing page
      2. "Dios Wiki UI Design" — 2025 — Digital Oasis — UI Design — deskripsi: Designed UI for every application page
      3. "UNDP x IAC Educational Content" — 2025 — Digital Oasis — Digital Marketing — deskripsi: Educational video and LMS content production
      4. "Sheerly Website" — 2023 — Lifegood.id — UI Design — deskripsi: Developed website with Elementor, UI onboarding flows
      5. "Digital Oasis Corporate Website Revamp" — 2023 — Digital Oasis — UI Design — deskripsi: Revamped corporate website using Elementor and Canva
      6. "Lifegood.id IDR 1B Campaign" — 2023 — Lifegood.id — Digital Marketing — deskripsi: Multi-platform campaigns generating IDR 1B+ sales turnover
    - _Requirements: 6.4, 7.2_

  - [x] 2.3 Buat utility functions untuk data
    - Buat `/src/data/utils.ts` dengan fungsi `sortWorkExperiences(experiences: WorkExperience[]): WorkExperience[]`
    - Buat fungsi `filterProjects(projects: Project[], filter: ProjectFilter): Project[]`
    - Buat fungsi `parseDate(dateStr: string): number` untuk konversi "MM/YYYY" ke timestamp
    - _Requirements: 6.3, 7.10_


- [x] 3. Sistem i18n — LanguageContext dan file terjemahan
  - [x] 3.1 Buat TypeScript interface `Translations` dan file terjemahan
    - Buat `/src/i18n/types.ts` dengan interface `Translations` yang mencakup semua namespace: `nav`, `hero`, `workExperience`, `projects`, `footer`, `social`, `error`
    - Buat `/src/i18n/id.ts` dengan semua teks Bahasa Indonesia sesuai design document
    - Buat `/src/i18n/en.ts` dengan semua teks Bahasa Inggris yang setara
    - _Requirements: 2.3, 2.4, 2.7_

  - [x] 3.2 Buat `LanguageContext.tsx` dengan Provider dan hook `useLanguage`
    - Buat `/src/i18n/LanguageContext.tsx` sebagai Client Component (`"use client"`)
    - Implementasikan `LanguageProvider` dengan state `locale`, fungsi `setLocale` yang menyimpan ke `localStorage`, dan fungsi `t(key)` dengan fallback ke `id.ts`
    - Implementasikan `useLanguage()` hook yang menggunakan `useContext`
    - Tangani kasus `localStorage` tidak tersedia (SSR/private mode) dengan default `"id"`
    - _Requirements: 2.2, 2.6, 2.8, 2.9_

  - [x] 3.3 Integrasikan `LanguageProvider` ke `app/layout.tsx`
    - Bungkus children di `app/layout.tsx` dengan `<LanguageProvider>`
    - Pastikan font Geist dan metadata dasar sudah dikonfigurasi di layout
    - _Requirements: 2.2_


- [ ] 4. Komponen dasar — ReachOutButton dan SocialLinks
  - [x] 4.1 Buat komponen `ReachOutButton`
    - Buat `/src/components/ReachOutButton.tsx` sebagai komponen yang dapat digunakan di Navbar dan HeroSection
    - Render sebagai `<a href="mailto:asatrianggara84@gmail.com">` dengan `aria-label` dari i18n
    - Terapkan warna `bg-[#0071E3] text-white`, tap target minimal 44×44px, dan transisi hover `opacity-90` dalam 200ms
    - Gunakan `useLanguage()` untuk label dan aria-label yang dapat diterjemahkan
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [ ] 4.2 Buat komponen `SocialLinks`
    - Buat `/src/components/SocialLinks.tsx` sebagai Server Component
    - Render tiga ikon SVG inline (Instagram, TikTok, Threads) sebagai `<a target="_blank" rel="noopener noreferrer">`
    - Terapkan `focus-visible:outline-2 focus-visible:outline-offset-2` untuk aksesibilitas keyboard
    - Terima props `links: SocialLink[]`
    - _Requirements: 4.1, 4.2, 4.3, 4.5, 4.6_

- [~] 5. Checkpoint — Verifikasi fondasi
  - Pastikan proyek berhasil di-build (`next build`) tanpa error TypeScript
  - Pastikan semua import antar modul (data, i18n, komponen dasar) berjalan tanpa error
  - Tanyakan kepada user jika ada pertanyaan sebelum melanjutkan.


- [ ] 6. Navbar — sticky, scroll-spy, dan language toggle
  - [~] 6.1 Buat komponen `LanguageToggle`
    - Buat `/src/components/LanguageToggle.tsx` sebagai Client Component (`"use client"`)
    - Render dua tombol "ID" dan "EN"; tombol aktif: `bg-blue-600 text-white`, tombol tidak aktif: `bg-transparent text-gray-500`
    - Gunakan `useLanguage()` untuk membaca dan mengubah locale
    - Pastikan perbedaan visual tidak hanya bergantung pada warna (tambahkan `font-semibold` atau `underline` pada tombol aktif)
    - _Requirements: 2.1, 2.5_

  - [~] 6.2 Buat komponen `Navbar` dengan sticky dan scroll-spy
    - Buat `/src/components/Navbar.tsx` sebagai Client Component (`"use client"`)
    - Terapkan `position: sticky; top: 0; z-index: 50` agar selalu terlihat saat scroll
    - Implementasikan `IntersectionObserver` untuk mendeteksi section aktif dan set `aria-current="page"` pada nav link yang sesuai
    - Implementasikan smooth scroll dengan `element.scrollIntoView({ behavior: "smooth" })`, cek `prefers-reduced-motion` sebelum animasi
    - Tampilkan nama "Adjie Satria Anggara" di sisi kiri, nav links di tengah (tablet/desktop), `LanguageToggle` dan `ReachOutButton` di sisi kanan
    - Di mobile: sembunyikan nav links, tampilkan hanya logo dan tombol kanan
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.7_


- [ ] 7. Hero Section
  - [~] 7.1 Buat komponen `HeroSection`
    - Buat `/src/components/HeroSection.tsx` sebagai Server Component
    - Tampilkan `<h1>` dengan nama "Adjie Satria Anggara", role profesional, ringkasan keahlian, dan badge "7+ Tahun Pengalaman (Sejak 2018)"
    - Gunakan `next/image` dengan `priority={true}` untuk foto profil (300×300px desktop, 200×200px mobile), `className="rounded-full"`, dan placeholder gradient abu-abu jika foto belum tersedia
    - Tampilkan `<ReachOutButton />` sebagai CTA utama
    - Tampilkan `<SocialLinks />` dengan data dari `personalInfo.ts`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [~] 7.2 Implementasikan layout responsif HeroSection
    - Mobile (≤768px): kolom tunggal vertikal — foto atas, teks bawah, lebar foto tidak melebihi 200px
    - Desktop (≥1025px): dua kolom — teks kiri (55%), foto kanan (45%)
    - Terapkan ARIA landmark `<section aria-labelledby="hero-heading">` dengan `id="hero"` untuk scroll-spy
    - _Requirements: 5.7, 5.8, 1.5_


- [ ] 8. Work Experience Section
  - [~] 8.1 Buat komponen `WorkExperienceCard`
    - Buat `/src/components/WorkExperienceCard.tsx` sebagai Server Component
    - Tampilkan posisi (`<h3>`), nama perusahaan, periode dalam format "MM/YYYY – MM/YYYY" (atau "MM/YYYY – Sekarang" jika `isActive: true`), dan deskripsi
    - Tampilkan skill tags sebagai chip/badge: `bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm`
    - Terapkan hover: `hover:bg-[#F5F5F7] hover:shadow-md transition-all duration-200 ease-in-out`
    - _Requirements: 6.2, 6.5, 6.6_

  - [~] 8.2 Buat komponen `WorkExperienceSection`
    - Buat `/src/components/WorkExperienceSection.tsx` sebagai Server Component
    - Tampilkan `<h2>` dengan teks dari i18n `workExperience.sectionTitle`
    - Tampilkan badge "7+ Tahun Pengalaman" di atas daftar entri
    - Render daftar `WorkExperienceCard` menggunakan data dari `workExperiences.ts` yang sudah diurutkan dengan `sortWorkExperiences()`
    - Terapkan ARIA landmark `<section aria-labelledby="work-experience-heading">` dengan `id="work-experience"`
    - _Requirements: 6.1, 6.3, 6.7_


- [ ] 9. Project List Section — filter, card, dan modal
  - [~] 9.1 Buat komponen `FilterTabs`
    - Buat `/src/components/FilterTabs.tsx` sebagai Client Component (`"use client"`)
    - Render tiga tab: "Semua", "UI Design", "Digital Marketing" dengan teks dari i18n
    - Tab aktif: `bg-[#0071E3] text-white`; tab tidak aktif: `bg-gray-100 text-gray-600 hover:bg-gray-200`
    - Terapkan `role="tablist"` dan `role="tab"` dengan `aria-selected` pada setiap tombol
    - _Requirements: 7.9_

  - [~] 9.2 Buat komponen `ProjectCard`
    - Buat `/src/components/ProjectCard.tsx` sebagai Client Component (`"use client"`)
    - Tampilkan gambar proyek dengan `next/image` (rasio 16:9, `loading="lazy"`), nama proyek, tahun, nama klien, dan kategori
    - Tampilkan placeholder gradient abu-abu jika `project.imageUrl` tidak tersedia
    - Terapkan hover: `hover:shadow-lg hover:-translate-y-1 transition-all duration-200`
    - Gunakan `<button>` wrapper dengan `onClick` untuk aksesibilitas keyboard
    - _Requirements: 7.2, 7.8_

  - [~] 9.3 Buat komponen `ProjectModal`
    - Buat `/src/components/ProjectModal.tsx` sebagai Client Component (`"use client"`)
    - Render sebagai `<div role="dialog" aria-modal="true" aria-labelledby="modal-title">`
    - Tampilkan detail proyek: nama, tahun, klien, kategori, deskripsi, dan gambar
    - Implementasikan penutupan via tombol ×, klik backdrop, dan tombol `Escape`
    - Implementasikan focus trap: kunci fokus keyboard di dalam modal saat terbuka
    - Animasi masuk: `opacity-0 → opacity-100` + `scale-95 → scale-100` dalam 200ms
    - _Requirements: 7.7_

  - [~] 9.4 Buat komponen `ProjectListSection` dan integrasikan semua sub-komponen
    - Buat `/src/components/ProjectListSection.tsx` sebagai Client Component (`"use client"`)
    - Kelola state `activeFilter` (default `"all"`) dan `selectedProject` (default `null`)
    - Gunakan `filterProjects()` dari `data/utils.ts` untuk memfilter proyek sesuai `activeFilter`
    - Tampilkan grid responsif: 1 kolom (mobile), 2 kolom (tablet), 3 kolom (desktop) dengan `gap-4 md:gap-6`
    - Tampilkan pesan i18n `projects.empty` jika tidak ada proyek sesuai filter
    - Tambahkan `aria-live="polite"` pada grid untuk mengumumkan perubahan filter ke screen reader
    - Lazy load `ProjectModal` dengan `dynamic()` dari `next/dynamic`
    - Terapkan ARIA landmark `<section aria-labelledby="projects-heading">` dengan `id="projects"`
    - _Requirements: 7.1, 7.3, 7.4, 7.5, 7.6, 7.9, 7.10, 7.11_


- [ ] 10. Footer
  - [~] 10.1 Buat komponen `Footer`
    - Buat `/src/components/Footer.tsx` sebagai Server Component
    - Tampilkan teks copyright dengan tahun dinamis: `© {new Date().getFullYear()} Adjie Satria Anggara. All rights reserved.`
    - Tampilkan `<SocialLinks />` dengan ikon minimal 24×24px dan tap target 44×44px
    - Tampilkan link email `<a href="mailto:asatrianggara84@gmail.com">` dengan aria-label dari i18n
    - Layout responsif: stack vertikal di mobile, horizontal di tablet/desktop
    - Terapkan `<footer role="contentinfo">` sebagai ARIA landmark
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [ ] 11. Wiring — Rakit semua komponen di `app/page.tsx`
  - [~] 11.1 Rakit halaman utama di `app/page.tsx`
    - Import dan render semua section dalam urutan: `<Navbar />`, `<HeroSection />`, `<WorkExperienceSection />`, `<ProjectListSection />`, `<Footer />`
    - Pass data dari file statis ke komponen yang membutuhkan props
    - Bungkus konten utama dengan `<main role="main">`
    - Pastikan struktur heading hierarkis: `<h1>` di Hero, `<h2>` di setiap section
    - _Requirements: 1.5_

- [ ] 12. Error boundary dan halaman error
  - [~] 12.1 Buat `app/error.tsx` sebagai error boundary Next.js
    - Implementasikan komponen `Error` dengan pesan i18n `error.loadFailed`
    - Tampilkan tombol "Muat Ulang" yang memanggil `reset()` dari props Next.js error boundary
    - _Requirements: 1.6_


- [~] 13. Checkpoint — Verifikasi integrasi penuh
  - Pastikan semua tests pass, semua komponen ter-render tanpa error di browser
  - Verifikasi navigasi scroll-spy berfungsi, language toggle mengubah semua teks, filter proyek bekerja, dan modal dapat dibuka/ditutup
  - Tanyakan kepada user jika ada pertanyaan sebelum melanjutkan ke testing.

- [ ] 14. Unit tests untuk komponen dan utilities
  - [~] 14.1 Setup testing framework (Jest + React Testing Library + fast-check)
    - Install dan konfigurasi Jest, `@testing-library/react`, `@testing-library/jest-dom`, dan `fast-check`
    - Buat `jest.config.ts` dan `jest.setup.ts` yang kompatibel dengan Next.js App Router
    - _Requirements: 9.3_

  - [ ]* 14.2 Tulis unit tests untuk `LanguageProvider` dan `useLanguage`
    - Test: default locale adalah "id", `setLocale` mengubah state, `localStorage` digunakan untuk persistensi
    - Test: `t(key)` mengembalikan string yang benar untuk locale aktif
    - _Requirements: 2.2, 2.6, 2.8_

  - [ ]* 14.3 Tulis unit tests untuk komponen UI utama
    - Test `ReachOutButton`: href mailto benar, aria-label ada, class warna biru ada
    - Test `Navbar`: tiga nav links ada, nama "Adjie Satria Anggara" ada, `LanguageToggle` ada
    - Test `WorkExperienceCard`: render posisi, perusahaan, periode, skill tags
    - Test `ProjectCard`: render nama, tahun, klien, kategori; `onClick` dipanggil saat diklik
    - Test `ProjectModal`: render detail proyek, tutup dengan Escape, tutup dengan tombol ×
    - Test `FilterTabs`: tiga tab ada, tab aktif memiliki `aria-selected="true"`
    - Test `Footer`: copyright dengan tahun dinamis, tiga ikon sosial, email link
    - _Requirements: 8.6, 9.3_


- [ ] 15. Property-based tests
  - [ ]* 15.1 Tulis property test untuk Property 1: Locale Lookup Correctness
    - Buat `/src/__tests__/i18n/languageContext.property.test.ts`
    - Untuk setiap key valid di `id.ts`, verifikasi `t(key)` dengan locale `"id"` mengembalikan nilai dari `id.ts`
    - Untuk setiap key valid di `en.ts`, verifikasi `t(key)` dengan locale `"en"` mengembalikan nilai dari `en.ts`
    - Minimum 100 iterasi dengan `fast-check`
    - **Property 1: Locale Lookup Correctness**
    - **Validates: Requirements 2.2, 2.3, 2.4**

  - [ ]* 15.2 Tulis property test untuk Property 2: Translation Fallback
    - Untuk setiap key yang ada di `id.ts` tetapi tidak ada di `en.ts`, verifikasi `t(key)` dengan locale `"en"` mengembalikan nilai dari `id.ts` (bukan string kosong atau `undefined`)
    - **Property 2: Translation Fallback**
    - **Validates: Requirements 2.9**

  - [ ]* 15.3 Tulis property test untuk Property 3: Locale Persistence Round-Trip
    - Untuk setiap locale valid (`"id"` atau `"en"`), verifikasi bahwa setelah `setLocale(locale)` dipanggil, nilai yang dibaca dari `localStorage` sama dengan locale yang disimpan
    - **Property 3: Locale Persistence Round-Trip**
    - **Validates: Requirements 2.8**

  - [ ]* 15.4 Tulis property test untuk Property 4: Work Experience Chronological Sort
    - Buat `/src/__tests__/data/utils.property.test.ts`
    - Untuk setiap array `WorkExperience[]` acak, verifikasi bahwa setelah `sortWorkExperiences()`, setiap entri pada indeks `i` memiliki `startDate` yang lebih baru atau sama dengan entri pada indeks `i+1`
    - **Property 4: Work Experience Chronological Sort**
    - **Validates: Requirements 6.3**

  - [ ]* 15.5 Tulis property test untuk Property 5: Project Filter Correctness
    - Untuk setiap array `Project[]` dan setiap filter kategori (`"ui-design"` atau `"digital-marketing"`), verifikasi bahwa semua proyek yang dikembalikan `filterProjects()` memiliki `category` yang sama persis dengan filter yang dipilih
    - **Property 5: Project Filter Correctness**
    - **Validates: Requirements 7.10**

  - [ ]* 15.6 Tulis property test untuk Property 6: Translation Key Completeness
    - Untuk setiap key yang digunakan di `id.ts` sebagai sumber kebenaran, verifikasi bahwa key tersebut ada di `en.ts` dengan nilai bertipe `string` yang tidak kosong
    - **Property 6: Translation Key Completeness**
    - **Validates: Requirements 2.7**


- [ ] 16. Verifikasi build dan deployment
  - [~] 16.1 Verifikasi build Next.js berhasil tanpa error
    - Jalankan `next build` dan pastikan tidak ada TypeScript error, ESLint error, atau build error
    - Verifikasi output build menghasilkan halaman statis (SSG) untuk route "/"
    - _Requirements: 9.6_

  - [ ]* 16.2 Verifikasi konfigurasi Vercel deployment
    - Pastikan `vercel.json` atau konfigurasi Vercel sudah benar (jika diperlukan)
    - Verifikasi tidak ada environment variable yang hilang untuk deployment
    - _Requirements: 9.6_

- [~] 17. Checkpoint akhir — Semua tests pass
  - Pastikan semua unit tests dan property-based tests pass
  - Pastikan `next build` berhasil tanpa error
  - Tanyakan kepada user jika ada pertanyaan sebelum dianggap selesai.

## Notes

- Task yang ditandai dengan `*` bersifat opsional dan dapat dilewati untuk MVP yang lebih cepat
- Setiap task mereferensikan requirement spesifik untuk keterlacakan
- Checkpoint memastikan validasi bertahap di setiap fase utama
- Property tests memvalidasi properti kebenaran universal yang didefinisikan di design document
- Unit tests memvalidasi contoh spesifik dan edge cases
- Semua komponen menggunakan TypeScript dengan type-safety penuh
- Design document menggunakan TypeScript (bukan pseudocode), sehingga tidak diperlukan pemilihan bahasa implementasi


## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["2.1"] },
    { "id": 3, "tasks": ["2.2", "2.3", "3.1"] },
    { "id": 4, "tasks": ["3.2"] },
    { "id": 5, "tasks": ["3.3", "4.1", "4.2"] },
    { "id": 6, "tasks": ["6.1", "7.1"] },
    { "id": 7, "tasks": ["6.2", "7.2", "8.1"] },
    { "id": 8, "tasks": ["8.2", "9.1", "9.2"] },
    { "id": 9, "tasks": ["9.3"] },
    { "id": 10, "tasks": ["9.4", "10.1"] },
    { "id": 11, "tasks": ["11.1"] },
    { "id": 12, "tasks": ["12.1"] },
    { "id": 13, "tasks": ["14.1"] },
    { "id": 14, "tasks": ["14.2", "14.3", "15.1", "15.2", "15.3", "15.4", "15.5", "15.6"] },
    { "id": 15, "tasks": ["16.1", "16.2"] }
  ]
}
```
