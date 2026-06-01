# Requirements Document

## Introduction

Website portofolio pribadi untuk **Adjie Satria Anggara**, seorang Strategic Digital Marketing Professional dengan pengalaman 7+ tahun sejak 2018. Website ini dibangun menggunakan Next.js (App Router) terbaru, di-deploy di Vercel, dan dirancang dengan estetika clean minimalis dominan putih dengan aksen biru ala Apple style.

Website berfungsi sebagai representasi profesional digital yang menampilkan identitas, riwayat karier, dan portofolio proyek kepada calon klien, rekruter, dan mitra bisnis. Website mendukung dua bahasa (Bahasa Indonesia dan English) serta responsif di semua ukuran perangkat (HP, Tablet, Desktop).

---

## Glossary

- **Website**: Aplikasi web portofolio pribadi Adjie Satria Anggara yang dibangun dengan Next.js App Router
- **Navbar**: Komponen navigasi utama yang tampil di bagian atas setiap halaman
- **Hero_Section**: Bagian pertama halaman utama yang menampilkan perkenalan singkat dan foto profil
- **Work_Experience_Section**: Bagian yang menampilkan riwayat karier dan pengalaman kerja
- **Project_List_Section**: Bagian galeri portofolio yang menampilkan daftar proyek
- **Language_Toggle**: Komponen tombol di Navbar untuk beralih antara Bahasa Indonesia (ID) dan English (EN)
- **Reach_Out_Button**: Tombol CTA (Call-to-Action) untuk menghubungi via email
- **i18n**: Sistem internasionalisasi untuk mendukung multi-bahasa
- **Locale**: Pengaturan bahasa aktif yang dipilih pengguna (ID atau EN)
- **Project_Card**: Komponen kartu visual yang menampilkan satu proyek portofolio
- **Visitor**: Pengguna yang mengakses website portofolio
- **Breakpoint**: Titik lebar layar yang menentukan perubahan tata letak responsif (mobile ≤768px, tablet 769px–1024px, desktop ≥1025px)

---

## Requirements

### Requirement 1: Navigasi dan Struktur Halaman

**User Story:** Sebagai Visitor, saya ingin dapat menavigasi website dengan mudah, sehingga saya dapat menemukan informasi yang saya cari dengan cepat.

#### Acceptance Criteria

1. THE Website SHALL menampilkan Navbar yang tetap terlihat (sticky) di bagian atas halaman saat Visitor melakukan scroll ke bawah maupun ke atas.
2. THE Navbar SHALL memuat tautan navigasi ke setiap section: Hero, Work Experience, dan Project List.
3. WHEN Visitor mengklik tautan navigasi di Navbar, THE Website SHALL melakukan smooth scroll ke section yang dituju dalam durasi tidak melebihi 500ms.
4. THE Navbar SHALL menampilkan nama atau logo "Adjie Satria Anggara" di sisi kiri sebagai identitas pemilik.
5. THE Website SHALL merender semua section dalam satu halaman (single-page layout) dengan urutan: Hero Section → Work Experience Section → Project List Section.
6. IF halaman gagal dimuat, THEN THE Website SHALL menampilkan pesan error yang menyebutkan bahwa terjadi kesalahan dan menyarankan Visitor untuk memuat ulang halaman.
7. WHEN sebuah section berada dalam viewport Visitor saat scroll, THE Navbar SHALL menampilkan tautan navigasi yang sesuai dengan section tersebut dalam keadaan aktif (highlighted) secara visual.

---

### Requirement 2: Toggle Bahasa (Internasionalisasi)

**User Story:** Sebagai Visitor, saya ingin dapat beralih antara Bahasa Indonesia dan English, sehingga saya dapat membaca konten dalam bahasa yang saya pahami.

#### Acceptance Criteria

1. THE Navbar SHALL menampilkan Language_Toggle berupa tombol dengan label "ID" dan "EN".
2. WHEN Visitor mengklik Language_Toggle, THE Website SHALL mengganti seluruh teks konten halaman ke Locale yang dipilih tanpa melakukan full page reload.
3. WHILE Locale aktif adalah "ID", THE Website SHALL menampilkan semua teks antarmuka dan konten dalam Bahasa Indonesia.
4. WHILE Locale aktif adalah "EN", THE Website SHALL menampilkan semua teks antarmuka dan konten dalam Bahasa Inggris.
5. THE Language_Toggle SHALL menampilkan tombol Locale yang sedang aktif dengan latar belakang atau warna teks yang berbeda secara visual dari tombol Locale yang tidak aktif, sehingga perbedaan keduanya dapat dibedakan tanpa bergantung pada warna saja.
6. WHEN Visitor pertama kali mengakses Website, THE Website SHALL menggunakan Bahasa Indonesia (ID) sebagai Locale default.
7. THE i18n SHALL mencakup semua teks pada Navbar, Hero_Section, Work_Experience_Section, Project_List_Section, dan Reach_Out_Button.
8. WHEN Visitor beralih Locale dan kemudian melakukan navigasi antar section atau me-refresh halaman, THE Website SHALL mempertahankan Locale yang terakhir dipilih.
9. IF sebuah string terjemahan tidak tersedia untuk Locale yang aktif, THEN THE Website SHALL menampilkan string fallback dalam Bahasa Indonesia (ID) sebagai pengganti.

---

### Requirement 3: Tombol Reach Out (Kontak via Email)

**User Story:** Sebagai Visitor, saya ingin dapat menghubungi Adjie Satria Anggara dengan mudah, sehingga saya dapat memulai diskusi atau kolaborasi.

#### Acceptance Criteria

1. THE Navbar SHALL menampilkan Reach_Out_Button yang terlihat jelas dengan label "Reach Out" (ID: "Hubungi Saya").
2. WHEN Visitor mengklik Reach_Out_Button, THE Website SHALL membuka aplikasi email default perangkat Visitor dengan alamat tujuan `asatrianggara84@gmail.com` yang sudah terisi otomatis pada field "To".
3. THE Reach_Out_Button SHALL menggunakan protokol `mailto:asatrianggara84@gmail.com` sebagai mekanisme pengiriman.
4. THE Reach_Out_Button SHALL memiliki latar belakang berwarna biru (`#0071E3`) dengan teks putih agar mudah dikenali sebagai CTA utama dan memenuhi rasio kontras WCAG AA (≥4.5:1).
5. THE Reach_Out_Button SHALL dapat diakses dan berfungsi di semua Breakpoint (mobile ≤768px, tablet 769px–1024px, desktop ≥1025px) dengan ukuran tap target minimal 44×44px.
6. THE Reach_Out_Button SHALL memiliki atribut `aria-label` yang mendeskripsikan aksi ("Kirim email ke Adjie Satria Anggara") untuk aksesibilitas pembaca layar.

---

### Requirement 4: Tautan Media Sosial

**User Story:** Sebagai Visitor, saya ingin dapat mengakses profil media sosial Adjie Satria Anggara, sehingga saya dapat mengikuti aktivitas dan konten beliau.

#### Acceptance Criteria

1. THE Website SHALL menampilkan tautan ke tiga platform media sosial: Instagram (`https://instagram.com/anggrka`), TikTok (`https://tiktok.com/@anggrka`), dan Threads (`https://threads.net/@anggrka`).
2. WHEN Visitor mengklik tautan media sosial, THE Website SHALL membuka URL profil yang sesuai di tab browser baru menggunakan `target="_blank"`.
3. THE Website SHALL menampilkan ikon SVG yang dapat dikenali untuk masing-masing platform: ikon kamera untuk Instagram, ikon not musik untuk TikTok, dan ikon "@" atau ikon Threads untuk Threads.
4. THE Website SHALL menampilkan tautan media sosial di Hero_Section dan/atau Footer agar dapat ditemukan tanpa scroll berlebihan.
5. THE Website SHALL menggunakan atribut `rel="noopener noreferrer"` pada setiap elemen `<a>` tautan media sosial eksternal.
6. WHEN ikon media sosial difokuskan melalui keyboard, THE Website SHALL menampilkan indikator fokus yang terlihat jelas (outline) untuk aksesibilitas.

---

### Requirement 5: Hero Section

**User Story:** Sebagai Visitor, saya ingin melihat perkenalan singkat dan profesional tentang Adjie Satria Anggara, sehingga saya dapat memahami identitas dan keahlian beliau dengan cepat.

#### Acceptance Criteria

1. THE Hero_Section SHALL menampilkan nama lengkap "Adjie Satria Anggara" sebagai heading utama (H1).
2. THE Hero_Section SHALL menampilkan peran profesional "Strategic Digital Marketing Professional / Specialist".
3. THE Hero_Section SHALL menampilkan ringkasan keahlian utama yang mencakup: full-funnel campaign management, B2B lead generation, ROI optimization, Google Ads, Facebook Ads, TikTok Ads, Technical Tracking (GTM & GA4), dan conversion-focused UI/UX design.
4. THE Hero_Section SHALL menyediakan slot foto profil berukuran 300×300px (desktop) dan 200×200px (mobile) dengan bentuk lingkaran, menampilkan gambar placeholder bergradasi abu-abu jika foto belum tersedia.
5. THE Hero_Section SHALL menampilkan badge atau teks "7+ Tahun Pengalaman (Sejak 2018)" sebagai indikator senioritas.
6. THE Hero_Section SHALL menampilkan Reach_Out_Button sebagai CTA utama yang, ketika diklik, membuka `mailto:asatrianggara84@gmail.com` di aplikasi email default.
7. WHILE Visitor mengakses Website dari perangkat mobile (lebar layar ≤768px), THE Hero_Section SHALL menyusun elemen secara vertikal dengan foto di atas dan teks di bawah, dengan lebar foto tidak melebihi 200px.
8. WHILE Visitor mengakses Website dari perangkat desktop (lebar layar ≥1025px), THE Hero_Section SHALL menyusun elemen secara horizontal dengan teks di sisi kiri dan foto di sisi kanan dalam layout dua kolom.

---

### Requirement 6: Work Experience Section

**User Story:** Sebagai Visitor, saya ingin melihat riwayat karier Adjie Satria Anggara secara terstruktur, sehingga saya dapat menilai rekam jejak profesional beliau.

#### Acceptance Criteria

1. THE Work_Experience_Section SHALL menampilkan heading section "Pengalaman Kerja" (EN: "Work Experience").
2. THE Work_Experience_Section SHALL menampilkan setiap entri karier dengan informasi: nama posisi/jabatan, nama perusahaan/klien, periode waktu dalam format "MM/YYYY – MM/YYYY" (atau "MM/YYYY – Sekarang" untuk posisi aktif), dan deskripsi tanggung jawab.
3. THE Work_Experience_Section SHALL menampilkan entri karier dalam urutan kronologis terbalik berdasarkan tanggal mulai (entri dengan tanggal mulai paling baru ditampilkan paling atas).
4. THE Work_Experience_Section SHALL mencakup pengalaman kerja yang berkaitan dengan klien: Kalika, Yoan, Pak Julian (Manajemen Strategi), dan Mas Jamal (Kolaborator Teknis).
5. THE Work_Experience_Section SHALL menampilkan daftar tag keahlian atau teknologi yang digunakan pada setiap entri karier (misalnya: Google Ads, Facebook Ads, GTM, GA4) dalam bentuk chip/badge yang dapat dibedakan secara visual dari teks deskripsi.
6. WHEN Visitor melakukan hover pada entri karier di perangkat desktop, THE Work_Experience_Section SHALL menampilkan perubahan warna latar belakang entri tersebut menjadi abu-abu muda (`#F5F5F7`) dan menambahkan box-shadow yang terlihat, sehingga entri yang di-hover dapat dibedakan dari entri lainnya.
7. THE Work_Experience_Section SHALL menampilkan teks ringkasan "7+ Tahun Pengalaman" di bagian atas section, sebelum daftar entri karier.

---

### Requirement 7: Project List Section (Galeri Portofolio)

**User Story:** Sebagai Visitor, saya ingin melihat portofolio proyek Adjie Satria Anggara secara visual, sehingga saya dapat menilai kualitas dan cakupan pekerjaan beliau.

#### Acceptance Criteria

1. THE Project_List_Section SHALL menampilkan heading section "Proyek" (EN: "Projects").
2. THE Project_List_Section SHALL menampilkan setiap proyek dalam bentuk Project_Card yang memuat: gambar/visual proyek, nama proyek, tahun pengerjaan, nama klien, dan kategori proyek (UI Design atau Digital Marketing).
3. THE Project_List_Section SHALL menampilkan Project_Card dalam tata letak grid yang responsif.
4. WHILE Visitor mengakses Website dari perangkat mobile (lebar layar ≤768px), THE Project_List_Section SHALL menampilkan 1 kolom Project_Card.
5. WHILE Visitor mengakses Website dari perangkat tablet (lebar layar 769px–1024px), THE Project_List_Section SHALL menampilkan 2 kolom Project_Card.
6. WHILE Visitor mengakses Website dari perangkat desktop (lebar layar ≥1025px), THE Project_List_Section SHALL menampilkan 3 kolom Project_Card.
7. WHEN Visitor mengklik sebuah Project_Card, THE Project_List_Section SHALL menampilkan modal atau halaman detail yang memuat: nama proyek, tahun, nama klien, kategori, deskripsi proyek, dan gambar proyek.
8. IF sebuah Project_Card belum memiliki gambar proyek, THEN THE Project_List_Section SHALL menampilkan gambar placeholder bergradasi abu-abu dengan rasio aspek 16:9 pada slot gambar tersebut.
9. THE Project_List_Section SHALL menampilkan filter tab dengan pilihan: "Semua" (default aktif saat halaman pertama dimuat), "UI Design", dan "Digital Marketing".
10. WHEN Visitor memilih filter kategori, THE Project_List_Section SHALL menampilkan hanya Project_Card yang sesuai dengan kategori yang dipilih tanpa full page reload, dalam durasi transisi tidak melebihi 300ms.
11. IF tidak ada Project_Card yang sesuai dengan filter kategori yang dipilih, THEN THE Project_List_Section SHALL menampilkan pesan "Tidak ada proyek dalam kategori ini" (EN: "No projects in this category").

---

### Requirement 8: Desain Visual dan Tema

**User Story:** Sebagai Visitor, saya ingin melihat website dengan tampilan yang bersih, profesional, dan konsisten, sehingga saya mendapatkan kesan positif terhadap profesionalisme Adjie Satria Anggara.

#### Acceptance Criteria

1. THE Website SHALL menggunakan palet warna dominan putih (`#FFFFFF`) dengan aksen biru (`#0071E3` atau setara Apple blue) sebagai warna utama.
2. THE Website SHALL menggunakan tipografi sans-serif (Inter, SF Pro, atau Geist) dengan ukuran font body minimal 16px untuk memastikan keterbacaan.
3. THE Website SHALL menerapkan jarak vertikal minimal 24px antar section dan minimal 16px antar elemen dalam satu section untuk whitespace yang memadai.
4. THE Website SHALL mendefinisikan dan menggunakan design token yang konsisten: spacing kelipatan 8px, border-radius 8px untuk kartu dan 4px untuk tombol kecil, dan box-shadow seragam (`0 2px 8px rgba(0,0,0,0.08)`) di seluruh komponen kartu.
5. WHEN komponen interaktif (tombol, kartu, tautan) menerima interaksi hover atau fokus, THE Website SHALL menerapkan transisi CSS dengan `ease-in-out` dan durasi 200ms–300ms.
6. THE Website SHALL memenuhi standar kontras warna WCAG AA (rasio kontras minimum 4.5:1 untuk teks normal, 3:1 untuk teks besar ≥18px) untuk aksesibilitas.
7. WHEN Visitor mengaktifkan preferensi `prefers-reduced-motion` di sistem operasi mereka, THE Website SHALL menonaktifkan atau meminimalkan semua animasi dan transisi CSS.

---

### Requirement 9: Responsivitas dan Performa

**User Story:** Sebagai Visitor, saya ingin website dapat diakses dengan nyaman dari perangkat apapun dan memuat dengan cepat, sehingga saya mendapatkan pengalaman browsing yang baik.

#### Acceptance Criteria

1. THE Website SHALL merender tanpa horizontal overflow, tanpa elemen yang saling tumpang tindih, dan dengan semua elemen interaktif dapat dijangkau di semua Breakpoint: mobile (≤768px), tablet (769px–1024px), dan desktop (≥1025px).
2. THE Website SHALL mencapai skor Lighthouse Performance minimal 90 pada perangkat mobile.
3. THE Website SHALL mencapai skor Lighthouse Accessibility minimal 90.
4. WHEN Visitor mengakses Website pada koneksi dengan bandwidth ≥10 Mbps dan RTT ≤40ms, THE Website SHALL menampilkan konten utama (Largest Contentful Paint) dalam waktu kurang dari 2.5 detik.
5. THE Website SHALL mengirimkan gambar dalam format WebP dengan atribut `loading="lazy"` untuk semua gambar di bawah fold, sehingga gambar tidak dimuat sebelum dibutuhkan.
6. THE Website SHALL tidak menghasilkan build error saat proses deployment ke Vercel.
7. WHEN Visitor mengakses Website, THE Website SHALL mengirimkan respons HTML awal (Time to First Byte) dalam waktu kurang dari 600ms.
8. THE Website SHALL mempertahankan Cumulative Layout Shift (CLS) di bawah 0.1 selama proses pemuatan halaman untuk mencegah pergeseran tata letak yang tidak terduga.

---

### Requirement 10: Footer

**User Story:** Sebagai Visitor, saya ingin melihat informasi ringkas di bagian bawah halaman, sehingga saya dapat menemukan tautan penting dan informasi hak cipta dengan mudah.

#### Acceptance Criteria

1. THE Website SHALL menampilkan Footer di bagian paling bawah halaman, setelah Project_List_Section.
2. THE Footer SHALL menampilkan teks hak cipta dengan format "© [tahun saat ini yang dirender secara dinamis] Adjie Satria Anggara. All rights reserved."
3. THE Footer SHALL menampilkan ikon tautan media sosial untuk Instagram, TikTok, dan Threads dengan ukuran ikon minimal 24×24px dan tap target minimal 44×44px.
4. WHEN Visitor mengklik tautan email di Footer, THE Website SHALL membuka `mailto:asatrianggara84@gmail.com` di aplikasi email default perangkat Visitor.
5. THE Footer SHALL merender tanpa horizontal overflow dan dengan semua elemen tersusun rapi di semua Breakpoint: mobile (≤768px), tablet (769px–1024px), dan desktop (≥1025px).
