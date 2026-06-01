import type { Project } from "./types";

// Project entries — name, description, year, and link are placeholders that
// will be filled in by the owner. The image and category mapping reflects the
// files currently in /public/projects.
export const projects: Project[] = [
  // ─── UI/UX ──────────────────────────────────────────────────────────────────
  {
    id: "uiux-imola",
    name: {
      en: "IMOLA Landing Page — Mobile Marketplace Analytics App",
      id: "Landing Page IMOLA — Aplikasi Analitik Marketplace Mobile",
    },
    title: {
      en: "IMOLA Landing Page — Mobile Marketplace Analytics App — 2025, Digital Oasis",
      id: "Landing Page IMOLA — Aplikasi Analitik Marketplace Mobile — 2025, Digital Oasis",
    },
    year: 2025,
    client: "Digital Oasis",
    category: "ui-design",
    imageUrl: "/projects/UIUX - Imola.png",
    caseStudy: {
      context: {
        en: "UI Designer, Copywriter, and Implementation Lead at Digital Oasis — owned the public-facing landing page for IMOLA, a mobile app that gives marketplace sellers automated sales summaries, action recommendations, forecasting, and multi-store connectivity in one place.",
        id: "UI Designer, Copywriter, dan Implementation Lead di Digital Oasis — bertanggung jawab penuh atas landing page publik IMOLA, aplikasi mobile yang memberi seller marketplace ringkasan penjualan otomatis, rekomendasi aksi, forecasting, dan konektivitas multi-toko dalam satu tempat.",
      },
      challenge: {
        en: "IMOLA's value proposition is dense — it spans data summarization, prescriptive recommendations, predictive foresight, and cross-marketplace aggregation. Goal: build a landing page that landed the narrative first — explaining what IMOLA does and why marketplace sellers should care — with signup CTA as a secondary outcome, not the primary KPI.",
        id: "Value proposition IMOLA sangat padat — mencakup peringkasan data, rekomendasi preskriptif, prediksi ke depan, dan agregasi lintas marketplace. Tujuan: membangun landing page yang mendaratkan narasi lebih dulu — menjelaskan apa yang IMOLA lakukan dan mengapa seller marketplace perlu peduli — dengan CTA signup sebagai outcome sekunder, bukan KPI utama.",
      },
      whatIDid: {
        en: [
          "Design end-to-end — Composed the landing layout and produced every visual asset directly in Canva, building a cohesive look without splitting design and prototyping across separate tools",
          "Narrative copywriting — Wrote all landing copy from scratch — headlines, value propositions, feature explanations, and CTAs — guiding visitors through the problem → solution → action story before the sign-up ask",
          "Build & ship — Implemented and shipped the live landing in WordPress with Elementor, taking the page from blank canvas to deployed URL without a separate developer handoff",
        ],
        id: [
          "Desain end-to-end — Menyusun layout landing dan memproduksi setiap aset visual langsung di Canva, membangun tampilan yang kohesif tanpa memecah desain dan prototyping ke tool yang terpisah",
          "Copywriting naratif — Menulis seluruh copy landing dari nol — headline, value proposition, penjelasan fitur, dan CTA — menuntun pengunjung melalui cerita problem → solusi → aksi sebelum ajakan sign-up",
          "Build & ship — Mengimplementasikan dan merilis landing live di WordPress dengan Elementor, membawa halaman dari kanvas kosong hingga URL ter-deploy tanpa handoff developer terpisah",
        ],
      },
      impact: {
        en: [
          "Delivered IMOLA's first public landing page end-to-end — design, copy, and shipped build — establishing the product's public narrative and serving as the canonical entry point for new visitors",
          "Demonstrated a lean single-operator delivery model — design in Canva + build in WordPress/Elementor — that compressed handoff cycles and accelerated time-to-live for product narrative pages",
        ],
        id: [
          "Men-deliver landing page publik pertama IMOLA secara end-to-end — desain, copy, dan build yang dirilis — menetapkan narasi publik produk dan menjadi entry point kanonik bagi pengunjung baru",
          "Mendemonstrasikan model delivery single-operator yang ramping — desain di Canva + build di WordPress/Elementor — yang memangkas siklus handoff dan mempercepat time-to-live untuk halaman narasi produk",
        ],
      },
    },
    tags: [
      "UI Design",
      "Landing Page",
      "Copywriting",
      "WordPress",
      "Elementor",
      "Canva",
    ],
  },
  {
    id: "uiux-dios-wiki",
    name: {
      en: "Dios Wiki — Digital Oasis Project Archive",
      id: "Dios Wiki — Arsip Proyek Digital Oasis",
    },
    title: {
      en: "Dios Wiki — Digital Oasis Project Archive — 2025, Digital Oasis",
      id: "Dios Wiki — Arsip Proyek Digital Oasis — 2025, Digital Oasis",
    },
    year: 2025,
    client: "Digital Oasis",
    category: "ui-design",
    imageUrl: "/projects/UIUX - Dios Wiki.png",
    caseStudy: {
      context: {
        en: "UI Designer and Implementation Lead at Digital Oasis (PT. Pilar Timur Teknologi) — owning the design and build of Dios Wiki, a project archive web platform consolidating every project Digital Oasis has shipped. Engineered for dual use: internal knowledge management for the team and a public-facing portfolio for prospective B2B clients.",
        id: "UI Designer dan Implementation Lead di Digital Oasis (PT. Pilar Timur Teknologi) — bertanggung jawab atas desain dan pembangunan Dios Wiki, platform web arsip proyek yang mengonsolidasikan setiap proyek yang pernah dirilis Digital Oasis. Dirancang untuk dua kegunaan: knowledge management internal bagi tim dan portfolio publik bagi calon klien B2B.",
      },
      challenge: {
        en: "Project archives at services companies tend to die — either too unstructured to function as a real internal reference, or too marketing-polished to be useful for the team itself. Goal: build something that worked for both audiences simultaneously — a multi-page system with browsable project listings, dedicated detail pages per project, and a filter/search layer that kept the archive scannable as it grew over time.",
        id: "Arsip proyek di perusahaan jasa cenderung mati — entah terlalu tidak terstruktur untuk berfungsi sebagai referensi internal yang nyata, atau terlalu dipoles untuk marketing hingga tak berguna bagi tim sendiri. Tujuan: membangun sesuatu yang bekerja untuk kedua audiens sekaligus — sistem multi-halaman dengan listing proyek yang bisa dijelajahi, halaman detail tersendiri per proyek, dan lapisan filter/search yang menjaga arsip tetap mudah dipindai seiring pertumbuhannya.",
      },
      whatIDid: {
        en: [
          "Information architecture & UI design — Designed the full multi-page system in Figma — list view, project detail page template, and filter/search states — mapping the structure to support an archive that scales without UX collapse as the project count grows",
          "Visual asset production — Produced supporting visuals and design assets in Canva, holding alignment with Digital Oasis's wider brand system",
          "Build & template engineering — Implemented the site in WordPress with Elementor, including a dynamic detail-page template so future projects can be added without rebuilding pages from scratch, plus the filter/search system on the list view",
        ],
        id: [
          "Arsitektur informasi & desain UI — Mendesain sistem multi-halaman penuh di Figma — list view, template halaman detail proyek, dan state filter/search — memetakan struktur untuk menopang arsip yang skalabel tanpa UX runtuh seiring bertambahnya jumlah proyek",
          "Produksi aset visual — Memproduksi visual pendukung dan aset desain di Canva, menjaga keselarasan dengan brand system Digital Oasis yang lebih luas",
          "Build & engineering template — Mengimplementasikan situs di WordPress dengan Elementor, termasuk template halaman detail dinamis sehingga proyek baru dapat ditambahkan tanpa membangun ulang halaman dari nol, ditambah sistem filter/search di list view",
        ],
      },
      impact: {
        en: [
          "Designed and built the structural foundation for Digital Oasis's first dual-purpose project archive — currently in active development with the design system, project detail template, and filter/search architecture all standing ready for scale",
          "Established a path toward a single source of truth for Digital Oasis's project history — replacing scattered case-study references with a navigable, filterable archive engineered to grow as the company ships more work",
          "(Public launch pending — adoption & usage metrics to follow once the archive goes live)",
        ],
        id: [
          "Mendesain dan membangun fondasi struktural untuk arsip proyek dwiguna pertama Digital Oasis — saat ini dalam pengembangan aktif dengan design system, template detail proyek, dan arsitektur filter/search yang semuanya siap untuk skala",
          "Membuka jalan menuju single source of truth bagi riwayat proyek Digital Oasis — menggantikan rujukan case study yang tersebar dengan arsip yang dapat dinavigasi dan difilter, dirancang untuk tumbuh seiring perusahaan merilis lebih banyak karya",
          "(Peluncuran publik masih tertunda — metrik adopsi & penggunaan menyusul setelah arsip live)",
        ],
      },
    },
    tags: [
      "UI Design",
      "Web Design",
      "Information Architecture",
      "Figma",
      "WordPress",
      "Elementor",
    ],
  },
  {
    id: "uiux-panto",
    name: {
      en: "Panto — E-Wallet Balance Consolidation Platform",
      id: "Panto — Platform Konsolidasi Saldo E-Wallet",
    },
    title: {
      en: "Panto — E-Wallet Balance Consolidation Platform — 2026, Digital Oasis",
      id: "Panto — Platform Konsolidasi Saldo E-Wallet — 2026, Digital Oasis",
    },
    year: 2026,
    client: "Digital Oasis",
    category: "ui-design",
    imageUrl: "/projects/UIUX - Panto.png",
    caseStudy: {
      context: {
        en: "Product Researcher & Founding Engineer at Digital Oasis — drove the research and early product definition for Panto, a platform aiming to consolidate fragmented e-wallet balances into a single usable payment.",
        id: "Product Researcher & Founding Engineer di Digital Oasis — memimpin riset dan definisi produk awal untuk Panto, platform yang bertujuan mengonsolidasikan saldo e-wallet yang terpecah menjadi satu pembayaran yang dapat digunakan.",
      },
      challenge: {
        en: "Indonesian users hold fragmented balances across 5 major e-wallets with no interoperability — cross-wallet transfers cost IDR 999–6,500 each and some wallets don't support direct transfers at all. Panto aimed to consolidate these scattered balances into a single usable payment at minimal cost.",
        id: "Pengguna di Indonesia menyimpan saldo yang terpecah di 5 e-wallet utama tanpa interoperabilitas — transfer antar-wallet berbiaya Rp 999–6.500 sekali kirim dan sebagian wallet bahkan tidak mendukung transfer langsung. Panto bertujuan mengonsolidasikan saldo yang tersebar ini menjadi satu pembayaran yang dapat digunakan dengan biaya minimal.",
      },
      whatIDid: {
        en: [
          "Mapped actual fee structures across all 20 wallet-to-wallet combinations through hands-on transaction testing, uncovering hidden costs not found in official documentation",
          "Designed UX flows for in-store consolidated payment and drafted the system architecture",
          "Evaluated multiple technical integration paths — official APIs, automation prototyping, and third-party disbursement services",
          "Researched Indonesian fintech regulations (BI/OJK licensing) to determine viable product architectures",
        ],
        id: [
          "Memetakan struktur biaya aktual di seluruh 20 kombinasi transfer antar-wallet melalui pengujian transaksi langsung, mengungkap biaya tersembunyi yang tidak ada di dokumentasi resmi",
          "Merancang UX flow untuk pembayaran terkonsolidasi di toko serta menyusun draft arsitektur sistem",
          "Mengevaluasi beberapa jalur integrasi teknis — API resmi, prototyping otomasi, dan layanan disbursement pihak ketiga",
          "Meneliti regulasi fintech Indonesia (lisensi BI/OJK) untuk menentukan arsitektur produk yang layak",
        ],
      },
      impact: {
        en: [
          "Identified optimal routing that reduces cross-wallet transfer cost by up to 65% (IDR 2,999 → IDR 1,040 on certain routes), and documented the complete cost matrix for all 20 e-wallet combinations",
          "Drove 3 evidence-based pivots — each preventing costly development of an unviable architecture. The project did not proceed to production, but the research produced reusable insights into Indonesia's e-wallet interoperability landscape.",
        ],
        id: [
          "Mengidentifikasi routing optimal yang menekan biaya transfer antar-wallet hingga 65% (Rp 2.999 → Rp 1.040 pada rute tertentu), dan mendokumentasikan cost matrix lengkap untuk seluruh 20 kombinasi e-wallet",
          "Mendorong 3 pivot berbasis bukti — masing-masing mencegah pengembangan mahal atas arsitektur yang tidak layak. Proyek tidak berlanjut ke produksi, tetapi risetnya menghasilkan insight reusable tentang lanskap interoperabilitas e-wallet di Indonesia.",
        ],
      },
    },
    tags: [
      "Fintech",
      "E-Wallet",
      "Product Research",
      "Feasibility Study",
      "Indonesia",
    ],
  },
  {
    id: "uiux-digital-oasis",
    name: {
      en: "Digital Oasis Corporate Website Redesign",
      id: "Redesign Website Korporat Digital Oasis",
    },
    title: {
      en: "Digital Oasis Corporate Website Redesign — 2025, Digital Oasis",
      id: "Redesign Website Korporat Digital Oasis — 2025, Digital Oasis",
    },
    year: 2025,
    client: "Digital Oasis",
    category: "ui-design",
    imageUrl: "/projects/UIUX - Digital Oasis.png",
    caseStudy: {
      context: {
        en: "UI Designer, Copywriter, SEO Setup, and Implementation Lead at Digital Oasis — owned the end-to-end redesign of Digital Oasis (PT. Pilar Timur Teknologi)'s corporate website, replacing an outdated public-facing presence that compromised the company's first impression to B2B prospects.",
        id: "UI Designer, Copywriter, SEO Setup, dan Implementation Lead di Digital Oasis — bertanggung jawab penuh atas redesign end-to-end website korporat Digital Oasis (PT. Pilar Timur Teknologi), menggantikan kehadiran publik yang sudah usang dan merusak first impression perusahaan di mata prospek B2B.",
      },
      challenge: {
        en: "The legacy site was slow, visually dated, and structurally cluttered — three things that work against credibility when prospects are evaluating a tech services partner. Mandate from leadership: rebuild the site to feel clean, modern, and corporate-grade, with a non-negotiable performance bar — achieve all-green Google Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.",
        id: "Situs lama lambat, ketinggalan zaman secara visual, dan berantakan secara struktur — tiga hal yang melawan kredibilitas saat prospek sedang mengevaluasi partner layanan teknologi. Mandat dari leadership: membangun ulang situs agar terasa bersih, modern, dan setara korporat, dengan standar performa yang tidak bisa ditawar — mencapai skor Google Lighthouse all-green di Performance, Accessibility, Best Practices, dan SEO.",
      },
      whatIDid: {
        en: [
          "Design end-to-end — Composed layouts and produced all visual assets for the full multi-page corporate site (Home, Services, About, Contact) directly in Canva, holding a consistent visual system across pages",
          "Corporate copywriting — Wrote all on-site copy from scratch — homepage narrative, service descriptions, value propositions, About story, and CTAs — translating Digital Oasis's capabilities into a sharper, more confident corporate voice",
          "Build + performance optimization — Implemented the full multi-page site in WordPress with Elementor, then optimized aggressively for performance (lazy loading, image compression, render-blocking resource cleanup) to clear the Lighthouse threshold",
          "On-page SEO setup — Configured meta tags, structured heading hierarchy, image alt attributes, and other on-page SEO foundations to keep the SEO category green alongside performance",
        ],
        id: [
          "Desain end-to-end — Menyusun layout dan memproduksi seluruh aset visual untuk situs korporat multi-halaman penuh (Home, Services, About, Contact) langsung di Canva, menjaga sistem visual yang konsisten lintas halaman",
          "Copywriting korporat — Menulis seluruh copy on-site dari nol — narasi homepage, deskripsi layanan, value proposition, cerita About, dan CTA — menerjemahkan kapabilitas Digital Oasis ke dalam corporate voice yang lebih tajam dan percaya diri",
          "Build + optimasi performa — Mengimplementasikan situs multi-halaman penuh di WordPress dengan Elementor, lalu mengoptimasi performa secara agresif (lazy loading, kompresi gambar, pembersihan resource render-blocking) untuk melewati ambang Lighthouse",
          "Setup SEO on-page — Mengonfigurasi meta tag, hierarki heading yang terstruktur, atribut alt gambar, dan fondasi SEO on-page lainnya agar kategori SEO tetap hijau berdampingan dengan performa",
        ],
      },
      impact: {
        en: [
          "Shipped a fully redesigned multi-page corporate site (Home + Services + About + Contact), replacing a slow, cluttered legacy presence with a clean, modern, corporate-grade public face",
          "Hit the all-green Google Lighthouse mandate — Performance, Accessibility, Best Practices, and SEO all landing in the green band — validating the build as production-grade across the metrics that actually matter for first-impression credibility and search visibility",
          "Demonstrated a lean single-operator delivery model end-to-end (Canva → WordPress/Elementor) covering design, copy, SEO, and shipping without a separate developer or content team",
        ],
        id: [
          "Merilis situs korporat multi-halaman yang sepenuhnya didesain ulang (Home + Services + About + Contact), menggantikan kehadiran lama yang lambat dan berantakan dengan wajah publik yang bersih, modern, dan setara korporat",
          "Mencapai mandat Google Lighthouse all-green — Performance, Accessibility, Best Practices, dan SEO semuanya mendarat di pita hijau — memvalidasi build sebagai production-grade di seluruh metrik yang benar-benar penting bagi kredibilitas first-impression dan visibilitas pencarian",
          "Mendemonstrasikan model delivery single-operator end-to-end yang ramping (Canva → WordPress/Elementor) yang mencakup desain, copy, SEO, dan shipping tanpa developer atau tim konten terpisah",
        ],
      },
    },
    tags: [
      "Web Design",
      "Corporate Website",
      "Performance Optimization",
      "SEO",
      "WordPress",
      "Elementor",
      "Copywriting",
    ],
  },
  {
    id: "uiux-seerly",
    name: {
      en: "Seerly Landing Page — Marketplace Sales Consolidation Dashboard",
      id: "Landing Page Seerly — Dashboard Konsolidasi Penjualan Marketplace",
    },
    title: {
      en: "Seerly Landing Page — Marketplace Sales Consolidation Dashboard — 2023, Digital Oasis",
      id: "Landing Page Seerly — Dashboard Konsolidasi Penjualan Marketplace — 2023, Digital Oasis",
    },
    year: 2023,
    client: "Digital Oasis",
    category: "ui-design",
    imageUrl: "/projects/UIUX - Seerly.png",
    caseStudy: {
      context: {
        en: "UI Designer, Copywriter, and Implementation Lead at Digital Oasis — owned the public-facing landing page for Seerly, a SaaS dashboard that consolidates sales data across multiple marketplace stores into a single accounting-grade report, built to remain usable for sellers who aren't finance professionals.",
        id: "UI Designer, Copywriter, dan Implementation Lead di Digital Oasis — bertanggung jawab penuh atas landing page publik Seerly, dashboard SaaS yang mengonsolidasikan data penjualan dari banyak toko marketplace menjadi satu laporan setara akuntansi, dirancang agar tetap mudah dipakai oleh seller yang bukan profesional keuangan.",
      },
      challenge: {
        en: "Seerly sits at an awkward sweet spot: rigorous enough to serve as an accounting layer, but pitched at marketplace sellers who don't speak finance. Goal — build a landing that led with the narrative, explaining what consolidating marketplace data actually unlocks for an online seller, before pushing any signup. Education first, conversion second.",
        id: "Seerly berada di sweet spot yang canggung: cukup rigor untuk menjadi lapisan akuntansi, namun ditujukan bagi seller marketplace yang tidak fasih bahasa keuangan. Tujuan — membangun landing yang mengedepankan narasi, menjelaskan apa yang sebenarnya terbuka bagi seller online ketika data marketplace dikonsolidasikan, sebelum mendorong signup apa pun. Edukasi dulu, konversi kemudian.",
      },
      whatIDid: {
        en: [
          "Design end-to-end — Composed the landing layout and produced every visual asset directly in Canva, keeping design and prototyping in a single tool for faster iteration cycles",
          "Narrative copywriting — Wrote all landing copy from scratch — headlines, value propositions, feature explanations, and CTAs — translating an accounting-grade tool into language that resonated with everyday marketplace sellers",
          "Build & ship — Implemented and shipped the live landing in WordPress with Elementor, taking the page from blank canvas to deployed URL without a separate developer handoff",
        ],
        id: [
          "Desain end-to-end — Menyusun layout landing dan memproduksi setiap aset visual langsung di Canva, menjaga desain dan prototyping dalam satu tool demi siklus iterasi yang lebih cepat",
          "Copywriting naratif — Menulis seluruh copy landing dari nol — headline, value proposition, penjelasan fitur, dan CTA — menerjemahkan tool setara akuntansi menjadi bahasa yang resonan dengan seller marketplace sehari-hari",
          "Build & ship — Mengimplementasikan dan merilis landing live di WordPress dengan Elementor, membawa halaman dari kanvas kosong hingga URL ter-deploy tanpa handoff developer terpisah",
        ],
      },
      impact: {
        en: [
          "Delivered Seerly's first public landing page end-to-end — design, copy, and shipped build — establishing the product's public narrative and serving as the canonical entry point for marketplace sellers exploring the tool",
          "Demonstrated a lean single-operator delivery model (Canva → WordPress/Elementor) that compressed handoff cycles and shortened time-to-live for product narrative pages",
        ],
        id: [
          "Men-deliver landing page publik pertama Seerly secara end-to-end — desain, copy, dan build yang dirilis — menetapkan narasi publik produk dan menjadi entry point kanonik bagi seller marketplace yang menjajaki tool ini",
          "Mendemonstrasikan model delivery single-operator yang ramping (Canva → WordPress/Elementor) yang memangkas siklus handoff dan memperpendek time-to-live untuk halaman narasi produk",
        ],
      },
    },
    tags: [
      "UI Design",
      "Landing Page",
      "Copywriting",
      "WordPress",
      "Elementor",
      "SaaS",
    ],
  },

  // ─── Digital Marketing ──────────────────────────────────────────────────────
  {
    id: "dm-campaign-strategist",
    name: {
      en: "Strategic Campaign — Durus Lughoh (Arabic Learning Book)",
      id: "Strategic Campaign — Durus Lughoh (Buku Belajar Bahasa Arab)",
    },
    title: {
      en: "Strategic Campaign — Durus Lughoh (Arabic Learning Book) — 2019, Manjada Group / Tokomuslim.id",
      id: "Strategic Campaign — Durus Lughoh (Buku Belajar Bahasa Arab) — 2019, Manjada Group / Tokomuslim.id",
    },
    year: 2019,
    client: "Manjada Group / Tokomuslim.id",
    category: "digital-marketing",
    imageUrl: "/projects/digital marketing - campaign strategist.png",
    caseStudy: {
      context: {
        en: "Digital Advertiser at Manjada Group, leading paid social for Tokomuslim.id — assigned the relaunch campaign for Durus Lughoh, an Arabic-learning textbook.",
        id: "Digital Advertiser di Manjada Group, memimpin paid social untuk Tokomuslim.id — ditugaskan menangani campaign relaunch Durus Lughoh, buku ajar bahasa Arab.",
      },
      challenge: {
        en: "Durus Lughoh sat as an underperforming SKU in Tokomuslim.id's catalog: sales were low, the title was consistently sidelined in the promotional mix, and the educational-language category lacked a sharp creative hook. Goal — re-position the title with a promise strong enough to pull it out of the catalog tail and into a stable revenue contributor.",
        id: "Durus Lughoh berada sebagai SKU underperforming di katalog Tokomuslim.id: penjualan rendah, judulnya konsisten terpinggirkan dalam mix promosi, dan kategori buku bahasa belum punya hook kreatif yang tajam. Tujuan — me-reposisi judul ini dengan promise yang cukup kuat untuk menariknya dari ekor katalog menjadi kontributor revenue yang stabil.",
      },
      whatIDid: {
        en: [
          'Reverse-engineered the book\'s core learning benefits to surface the single most marketable promise: "3 months to conversational Arabic"',
          "Built a targeting matrix layering Islamic studies, Arabic-language curiosity, Middle-Eastern film & art, and broader culture-driven interests to reach high-intent audiences beyond the obvious learner segment",
          "Translated the promise into ad creative through a structured A/B test — three distinct visual concepts isolated as the primary variable to identify the highest-CTR direction",
          "Built and shipped creative end-to-end using Meta Ads and Adobe Spark",
        ],
        id: [
          'Mereverse-engineer manfaat inti pembelajaran dari buku untuk menemukan satu promise paling marketable: "3 bulan bisa percakapan bahasa Arab"',
          "Menyusun matrix targeting berlapis — studi Islam, ketertarikan bahasa Arab, film & seni Timur Tengah, serta minat budaya yang lebih luas — untuk menjangkau audiens high-intent di luar segmen pembelajar yang sudah jelas",
          "Menerjemahkan promise menjadi kreatif iklan lewat A/B test terstruktur — tiga konsep visual berbeda diisolasi sebagai variabel utama untuk mengidentifikasi arah ber-CTR tertinggi",
          "Membangun dan men-deliver kreatif end-to-end menggunakan Meta Ads dan Adobe Spark",
        ],
      },
      impact: {
        en: [
          "Lifted Durus Lughoh from sidelined SKU to a stable revenue contributor, hitting target campaign KPIs",
          "Drove a consistent 20–30 high-intent leads per day, establishing the title as a reliable performer in Tokomuslim.id's educational-book lineup",
        ],
        id: [
          "Mengangkat Durus Lughoh dari SKU yang terpinggirkan menjadi kontributor revenue yang stabil, sekaligus memenuhi target KPI campaign",
          "Menghasilkan 20–30 lead high-intent per hari secara konsisten, mengukuhkan judul ini sebagai performer andalan di lini buku edukasi Tokomuslim.id",
        ],
      },
    },
    tags: [
      "Copywriting",
      "Campaign Strategy",
      "Facebook Ads",
      "A/B Testing",
      "Audience Targeting",
    ],
  },
  {
    id: "dm-fb-ads",
    name: {
      en: "Lifegood.id Dropshipping Operation — IDR 1 Billion+ via Facebook Ads",
      id: "Operasional Dropshipping Lifegood.id — Rp 1 Miliar+ via Facebook Ads",
    },
    title: {
      en: "Lifegood.id Dropshipping Operation — IDR 1 Billion+ via Facebook Ads — 2023",
      id: "Operasional Dropshipping Lifegood.id — Rp 1 Miliar+ via Facebook Ads — 2023",
    },
    year: 2023,
    client: "Lifegood.id",
    category: "digital-marketing",
    imageUrl: "/projects/digital marketing - FB Ads.png",
    caseStudy: {
      context: {
        en: "Personal dropshipping business run end-to-end — sourcing, performance marketing, creative production, and order fulfillment all owned solo. Operated as Performance Marketer, Product Researcher, and Operations Manager rolled into one.",
        id: "Bisnis dropshipping pribadi yang dijalankan end-to-end — sourcing, performance marketing, produksi kreatif, dan fulfillment pesanan semuanya saya pegang sendiri. Berperan sebagai Performance Marketer, Product Researcher, dan Operations Manager sekaligus.",
      },
      challenge: {
        en: "Build a profitable dropshipping operation from zero. Goal: drive meaningful revenue through paid social while keeping margins intact in a category where supplier reliability, shipping friction, and ad efficiency all directly compress profitability.",
        id: "Membangun operasional dropshipping yang profitable dari nol. Tujuan: mendorong revenue yang signifikan lewat paid social sambil menjaga margin tetap sehat di kategori di mana keandalan supplier, friksi pengiriman, dan efisiensi iklan sama-sama menekan profitabilitas.",
      },
      whatIDid: {
        en: [
          "Product research & sourcing — Identified high-engagement, high-sales products by reading marketplace and social trend signals, then sourced suppliers at competitive pricing to protect dropship margins",
          "Performance marketing — Designed Facebook Ads campaign strategies optimized for reach and ROI, managed daily budget allocations tightly, and ran ongoing ad-vs-product impact analysis to guide spend decisions",
          "Creative production — Crafted ad copy and edited visuals end-to-end using CapCut and Canva, raising media quality to match campaign objectives",
          "Fulfillment & ops — Integrated shipping aggregators (Mengantar.com, Kiriminaja.com) to streamline order fulfillment and resolved delivery issues quickly to maintain customer satisfaction at scale",
        ],
        id: [
          "Riset & sourcing produk — Mengidentifikasi produk dengan engagement & penjualan tinggi dengan membaca sinyal tren marketplace dan media sosial, lalu mencari supplier dengan harga kompetitif untuk menjaga margin dropship",
          "Performance marketing — Merancang strategi campaign Facebook Ads yang dioptimalkan untuk reach dan ROI, mengelola alokasi budget harian secara ketat, dan menjalankan analisis dampak iklan-vs-produk secara berkelanjutan untuk memandu keputusan spend",
          "Produksi kreatif — Menulis copy iklan dan mengedit visual secara end-to-end menggunakan CapCut dan Canva, meningkatkan kualitas media agar selaras dengan objektif campaign",
          "Fulfillment & operasional — Mengintegrasikan agregator pengiriman (Mengantar.com, Kiriminaja.com) untuk merampingkan fulfillment pesanan dan menyelesaikan kendala pengiriman dengan cepat agar kepuasan pelanggan tetap terjaga saat skala bertambah",
        ],
      },
      impact: {
        en: [
          "Generated IDR 1 Billion+ in total revenue (omzet) across the operation",
          "Validated a repeatable solo-operator playbook: trend-spotting → tight ad ops → integrated fulfillment.",
        ],
        id: [
          "Menghasilkan total revenue (omzet) lebih dari Rp 1 Miliar dari operasional ini",
          "Memvalidasi playbook solo-operator yang repeatable: trend-spotting → ad ops yang ketat → fulfillment terintegrasi.",
        ],
      },
    },
    tags: [
      "Facebook Ads",
      "Dropshipping",
      "Performance Marketing",
      "E-commerce Operations",
      "Product Research",
    ],
  },
  {
    id: "dm-google-ads",
    name: {
      en: "Google Ads B2B Lead Generation",
      id: "Google Ads B2B Lead Generation",
    },
    title: {
      en: "Google Ads B2B Lead Generation — 2025, Digital Oasis",
      id: "Google Ads B2B Lead Generation — 2025, Digital Oasis",
    },
    year: 2025,
    client: "Digital Oasis",
    category: "digital-marketing",
    imageUrl: "/projects/digital marketing - Google Ads.png",
    caseStudy: {
      context: {
        en: "Digital Advertiser at Digital Oasis (PT. Pilar Timur Teknologi) — owning the company's first-ever Google Ads program, built from zero to expand the B2B lead acquisition channel mix beyond existing sources.",
        id: "Digital Advertiser di Digital Oasis (PT. Pilar Timur Teknologi) — memegang program Google Ads pertama di perusahaan, dibangun dari nol untuk memperluas channel mix akuisisi lead B2B di luar sumber-sumber yang sudah ada.",
      },
      challenge: {
        en: "Digital Oasis had never run Google Ads before — no tracking infrastructure, no landing page tuned for paid acquisition, and no keyword playbook for the B2B services space. Goal: stand up a fully-instrumented Google Ads program that could reliably deliver qualified B2B leads on a constrained budget.",
        id: "Digital Oasis belum pernah menjalankan Google Ads sebelumnya — belum ada infrastruktur tracking, belum ada landing page yang ditune untuk paid acquisition, dan belum ada playbook keyword untuk ranah B2B services. Tujuan: membangun program Google Ads yang ter-instrumentasi penuh dan mampu mendatangkan lead B2B berkualitas secara konsisten dengan budget terbatas.",
      },
      whatIDid: {
        en: [
          "Tracking foundation — Configured Google Tag Manager end-to-end, wiring conversion events into both Google Ads and GA4 so every lead could be attributed back to keyword, ad, and landing-page interaction",
          "Landing page build — Designed and shipped a conversion-focused landing page tailored to the targeted keyword intent and optimized for WhatsApp-driven lead capture",
          "Keyword research — Mapped high-intent B2B keywords around Digital Oasis's services, prioritizing commercial-intent search terms over generic awareness queries",
          "A/B testing — Ran structured ad and landing-page experiments to isolate winning angles and continuously improve cost-per-lead",
        ],
        id: [
          "Fondasi tracking — Mengonfigurasi Google Tag Manager secara end-to-end, menyambungkan event konversi ke Google Ads dan GA4 sehingga setiap lead dapat diatribusikan kembali ke keyword, iklan, dan interaksi di landing page",
          "Pembangunan landing page — Merancang dan men-deliver landing page yang berorientasi konversi, disesuaikan dengan intent keyword target dan dioptimasi untuk lead capture via WhatsApp",
          "Riset keyword — Memetakan keyword B2B high-intent di sekitar layanan Digital Oasis, memprioritaskan search term commercial-intent dibanding query awareness generik",
          "A/B testing — Menjalankan eksperimen iklan dan landing page secara terstruktur untuk mengisolasi angle pemenang dan terus menurunkan cost-per-lead",
        ],
      },
      impact: {
        en: [
          "Delivered 168 WhatsApp leads from an IDR 10M ad budget over a 12-month period — an average CPL of ~IDR 60K, efficient for the B2B services category",
          "Generated hundreds of millions IDR in proposal valuation from the resulting sales pipeline, establishing Google Ads as a viable new revenue channel for Digital Oasis",
          "Built the tracking, landing-page, and keyword playbook now reusable across other service lines",
        ],
        id: [
          "Menghasilkan 168 lead WhatsApp dari budget iklan Rp 10 Juta selama periode 12 bulan — CPL rata-rata ~Rp 60K, efisien untuk kategori B2B services",
          "Menghasilkan ratusan juta rupiah nilai proposal dari sales pipeline yang terbentuk, mengukuhkan Google Ads sebagai channel revenue baru yang layak untuk Digital Oasis",
          "Membangun playbook tracking, landing page, dan keyword yang kini bisa digunakan ulang lintas lini layanan lain",
        ],
      },
    },
    tags: [
      "Google Ads",
      "Google Tag Manager",
      "GA4",
      "B2B Lead Generation",
      "Conversion Tracking",
    ],
  },
  {
    id: "dm-content-creator",
    name: {
      en: "Personal Brand — Dental Braces Niche on Social Media",
      id: "Personal Brand — Niche Behel di Media Sosial",
    },
    title: {
      en: "Personal Brand — Dental Braces Niche on Social Media — 2024",
      id: "Personal Brand — Niche Behel di Media Sosial — 2024",
    },
    year: 2024,
    category: "digital-marketing",
    imageUrl: "/projects/digital marketing - content creator.png",
    caseStudy: {
      context: {
        en: "Self-led personal brand build as Content Creator — designed and operated a niche social account focused on the dental braces journey, covering documentation, lifestyle, and viral content.",
        id: "Membangun personal brand secara mandiri sebagai Content Creator — merancang dan mengoperasikan akun media sosial niche yang berfokus pada perjalanan pemakaian behel (kawat gigi), mencakup konten dokumentasi, lifestyle, dan viral.",
      },
      challenge: {
        en: "Personal brand growth in a hyper-saturated lifestyle space is brutal — organic reach is suppressed by default, and standing out usually requires either a massive content cadence or an unmistakable niche. Goal: carve out an identifiable position around the dental braces journey, then convert that positioning into brand partnerships.",
        id: "Pertumbuhan personal brand di ruang lifestyle yang hyper-saturated itu brutal — organic reach ditekan secara default, dan untuk menonjol biasanya butuh entah cadence konten yang masif atau niche yang tak tergantikan. Tujuan: mengukir posisi yang mudah dikenali di seputar perjalanan pemakaian behel, lalu mengonversi positioning itu menjadi brand partnership.",
      },
      whatIDid: {
        en: [
          "Brand positioning — Rebuilt the account's identity around the braces niche end-to-end, refreshing nickname, handle, and content theme to signal clearly what the page stood for",
          "Niche content production — Produced ongoing documentation-style content covering the braces journey — process, milestones, lifestyle moments — to build a credible authority signal",
          "Trend hijacking — Layered viral sounds, formats, and trending concepts onto niche-relevant content to ride the algorithm's discovery surface without diluting the core positioning",
        ],
        id: [
          "Brand positioning — Membangun ulang identitas akun di seputar niche behel secara end-to-end, menyegarkan nickname, handle, dan tema konten agar jelas menandakan untuk apa halaman ini berdiri",
          "Produksi konten niche — Memproduksi konten bergaya dokumentasi secara berkelanjutan seputar perjalanan pemakaian behel — proses, milestone, momen lifestyle — untuk membangun sinyal otoritas yang kredibel",
          "Trend hijacking — Melapisi sound viral, format, dan konsep yang sedang tren ke konten yang relevan dengan niche untuk menunggangi discovery surface algoritma tanpa mengencerkan core positioning",
        ],
      },
      impact: {
        en: [
          "Accumulated 1M+ total likes across content despite a lean 1,600 follower count — indicating videos that consistently broke past the follower base into broader discovery feeds",
          "Converted that disproportionate reach into multiple paid brand collaborations, validating the niche-positioning playbook as a monetizable creator asset",
        ],
        id: [
          "Mengakumulasi 1 juta+ total likes di seluruh konten meski jumlah follower ramping di angka 1.600 — menandakan video yang konsisten menembus basis follower hingga ke discovery feed yang lebih luas",
          "Mengonversi reach yang tidak proporsional itu menjadi beberapa brand collaboration berbayar, memvalidasi playbook niche-positioning sebagai aset kreator yang bisa dimonetisasi",
        ],
      },
    },
    tags: [
      "Personal Branding",
      "Social Media Strategy",
      "Content Creation",
      "Influencer Collaboration",
      "Niche Positioning",
    ],
  },
  {
    id: "dm-copywriting",
    name: "Copywriting Iklan Buku Tokomuslim.id",
    title: "Copywriting Iklan Buku Tokomuslim.id — 2018, Manjada Group",
    year: 2018,
    client: "Manjada Group",
    category: "digital-marketing",
    imageUrl: "/projects/digital marketing - copywriting.png",
    caseStudy: {
      context: {
        en: "Digital Advertiser at Manjada Group, owning ad creative & copywriting for Tokomuslim.id — an e-commerce vertical for Islamic and educational titles.",
        id: "Digital Advertiser di Manjada Group, bertanggung jawab penuh atas kreatif iklan & copywriting untuk Tokomuslim.id — vertikal e-commerce buku Islam dan edukasi.",
      },
      challenge: {
        en: "Scaling paid social for religious & educational books is notoriously hard: the audience is values-sensitive and creative angles easily fall into preachy or generic territory. Target — winning creative consistently landing CPL at ~IDR 15K.",
        id: "Menskalakan paid social untuk buku religi & edukasi sangat menantang: audiensnya sensitif terhadap nilai, dan angle kreatif mudah jatuh ke nada menggurui atau generik. Target — kreatif menang yang konsisten mendaratkan CPL di kisaran Rp 15K.",
      },
      whatIDid: {
        en: [
          "Mapped buyer psychology across three pillars — fear factor, benefit factor, and day-to-day relatability — to surface angles that resonated without sounding preachy",
          "Built a repeatable copy framework: eye-catching hook headline → pain/problem agitation → solution & product claim → CTA",
          "Sourced and matched visuals to each copy angle to tighten creative-message fit",
          "Ran structured A/B tests on Meta Ads, isolating headlines as the primary variable to identify winning hooks faster",
        ],
        id: [
          "Memetakan psikologi pembeli melalui tiga pilar — fear factor, benefit factor, dan day-to-day relatability — untuk menemukan angle yang resonan tanpa terdengar menggurui",
          "Membangun framework copy yang repeatable: hook headline penarik perhatian → agitasi pain/problem → solusi & klaim produk → CTA",
          "Memilih dan mencocokkan visual untuk tiap angle copy guna mempererat creative-message fit",
          "Menjalankan A/B test terstruktur di Meta Ads dengan mengisolasi headline sebagai variabel utama agar hook pemenang lebih cepat teridentifikasi",
        ],
      },
      impact: {
        en: [
          "Engineered ad creatives that consistently triggered discussion-worthy engagement — comment, share, and reaction volume well above standard e-commerce benchmarks",
          "Delivered consistently high-conversion campaigns landing within the target sub-IDR 15K CPL, validating the copywriting framework as a repeatable playbook for the religious-book vertical",
        ],
        id: [
          "Merancang kreatif iklan yang konsisten memicu engagement layak diskusi — volume komen, share, dan reaksi jauh di atas benchmark standar e-commerce",
          "Menghasilkan campaign berkonversi tinggi yang konsisten berada di bawah target CPL Rp 15K, memvalidasi framework copywriting sebagai playbook yang repeatable untuk vertikal buku religi",
        ],
      },
    },
    tags: ["Copywriting", "Facebook Ads", "Meta Ads", "A/B Testing", "Conversion"],
  },
  {
    id: "dm-storytelling-copywriting",
    name: {
      en: 'Storytelling Copywriting — "Saat Rumah Tangga di Ambang Kehancuran"',
      id: 'Storytelling Copywriting — "Saat Rumah Tangga di Ambang Kehancuran"',
    },
    title: {
      en: 'Storytelling Copywriting — "Saat Rumah Tangga di Ambang Kehancuran" — 2018, Manjada Group',
      id: 'Storytelling Copywriting — "Saat Rumah Tangga di Ambang Kehancuran" — 2018, Manjada Group',
    },
    year: 2018,
    client: "Manjada Group",
    category: "digital-marketing",
    imageUrl: "/projects/digital marketing - storytelling copywriting.png",
    caseStudy: {
      context: {
        en: 'Digital Advertiser at Manjada Group for Tokomuslim.id, owning paid social creative for a featured family & marriage title — Saat Rumah Tangga di Ambang Kehancuran ("When the Household Stands on the Brink of Collapse").',
        id: 'Digital Advertiser di Manjada Group untuk Tokomuslim.id, bertanggung jawab atas kreatif paid social untuk salah satu judul unggulan kategori keluarga & pernikahan — Saat Rumah Tangga di Ambang Kehancuran.',
      },
      challenge: {
        en: "Standard product-led ad angles fell flat on a deeply emotional, niche subject where direct selling reads as tone-deaf. The vertical had no creative reference point either — at the time, no one had attempted long-form storytelling as an ad creative format in the religious-book category.",
        id: "Angle iklan product-led standar tidak mempan untuk topik yang sangat emosional dan niche, di mana hard selling terasa tone-deaf. Vertikal ini juga belum punya rujukan kreatif — saat itu belum ada yang mencoba long-form storytelling sebagai format kreatif iklan di kategori buku religi.",
      },
      whatIDid: {
        en: [
          "Profiled the target reader persona — life stage, household dynamics, recurring marital stressors — to anchor the creative in something that felt real",
          "Mapped the most relatable household pain points within that persona to ground each story in lived experience, not stereotype",
          'Pioneered an "on-the-fly narrative" copy structure: local-name & target-age intro → opening scene → escalating conflict → resolution → CTA',
          "Wove the book into each story as the natural solution to the protagonist's problem — never as a pitch, always as a payoff",
        ],
        id: [
          "Memprofilkan persona pembaca target — tahap kehidupan, dinamika rumah tangga, dan stressor pernikahan yang berulang — agar kreatif berpijak pada sesuatu yang terasa nyata",
          "Memetakan pain point rumah tangga paling relatable dalam persona tersebut agar setiap cerita berakar pada pengalaman hidup, bukan stereotip",
          'Memelopori struktur copy "on-the-fly narrative": intro nama lokal & rentang usia target → adegan pembuka → konflik yang menanjak → resolusi → CTA',
          "Menjalin buku ke dalam setiap cerita sebagai solusi alami atas masalah protagonis — bukan sebagai pitch, melainkan sebagai payoff",
        ],
      },
      impact: {
        en: [
          "Earned internal recognition from leadership and peers as a creative breakthrough in a previously formulaic vertical",
          "Drove a 90% lift in book sales versus baseline campaigns",
          "A single ad creative generated 100–200 high-converting leads per day, validating storytelling as a repeatable, scalable format for the religious-book vertical",
        ],
        id: [
          "Mendapat pengakuan internal dari leadership dan rekan kerja sebagai terobosan kreatif di vertikal yang sebelumnya formulaic",
          "Mendorong kenaikan penjualan buku sebesar 90% dibanding campaign baseline",
          "Satu kreatif iklan menghasilkan 100–200 lead berkonversi tinggi per hari, memvalidasi storytelling sebagai format yang repeatable dan scalable untuk vertikal buku religi",
        ],
      },
    },
    tags: [
      "Storytelling Copywriting",
      "Facebook Ads",
      "Meta Ads",
      "Persona Research",
      "Conversion",
    ],
  },

  // ─── Graphic Design ─────────────────────────────────────────────────────────
  {
    id: "gd-undp-iac",
    name: {
      en: "Educational Graphics & Animated Content — IAC × UNDP",
      id: "Grafis Edukasi & Konten Animasi — IAC × UNDP",
    },
    title: {
      en: "Educational Graphics & Animated Content — IAC × UNDP — 2025, Digital Oasis",
      id: "Grafis Edukasi & Konten Animasi — IAC × UNDP — 2025, Digital Oasis",
    },
    year: 2025,
    client: "Digital Oasis",
    category: "graphic-design",
    imageUrl: "/projects/graphic design - UNDP x IAC.png",
    caseStudy: {
      context: {
        en: "Graphic Designer & Video Editor at Digital Oasis — produced the educational content set for an IAC × UNDP programme, translating dense technical and policy material into accessible learning assets for delivery through a Learning Management System (LMS).",
        id: "Graphic Designer & Video Editor di Digital Oasis — memproduksi set konten edukasi untuk program IAC × UNDP, menerjemahkan materi teknis dan kebijakan yang padat menjadi aset pembelajaran yang mudah diakses untuk disampaikan melalui Learning Management System (LMS).",
      },
      challenge: {
        en: "The source material was content-heavy, technical, and built for expert readers — not learners. Goal: convert that material into a coherent set of educational slides and animated videos that respected both UNDP and IAC brand guidelines while staying digestible for end users consuming the content through an LMS.",
        id: "Materi sumbernya padat konten, teknis, dan dibuat untuk pembaca ahli — bukan untuk pembelajar. Tujuan: mengubah materi itu menjadi satu set slide edukasi dan video animasi yang koheren, yang menghormati brand guideline UNDP maupun IAC sekaligus tetap mudah dicerna oleh end user yang mengakses konten melalui LMS.",
      },
      whatIDid: {
        en: [
          "Guideline & content immersion — Internalized both partners' brand guidelines and the underlying subject-matter content before any production, ensuring every output read as on-brand and on-message",
          "Instructional flow design — Restructured raw technical material into a learner-friendly narrative flow, mapping concepts into slide-by-slide and scene-by-scene sequences optimized for retention",
          "Slide & video production — Designed slide decks in Canva and produced animated video content end-to-end, layering AI-generated voice narration via ElevenLabs for consistent, scalable voiceover across the full content set",
        ],
        id: [
          "Pendalaman guideline & konten — Menginternalisasi brand guideline kedua partner serta materi subjek yang mendasarinya sebelum produksi apa pun, memastikan setiap output terbaca on-brand dan on-message",
          "Desain alur instruksional — Menata ulang materi teknis mentah menjadi alur naratif yang ramah pembelajar, memetakan konsep ke dalam sekuens slide-per-slide dan scene-per-scene yang dioptimasi untuk retensi",
          "Produksi slide & video — Mendesain slide deck di Canva dan memproduksi konten video animasi secara end-to-end, melapisi narasi suara AI-generated via ElevenLabs untuk voiceover yang konsisten dan scalable di seluruh set konten",
        ],
      },
      impact: {
        en: [
          "Delivered a complete 16-piece educational content set — slides and animated videos shipped into the IAC × UNDP LMS programme, ready for learner consumption",
          "Validated a lean Canva + ElevenLabs production stack as a scalable model for producing high-volume educational content under tight delivery windows",
        ],
        id: [
          "Men-deliver set konten edukasi lengkap berisi 16 materi — slide dan video animasi yang dirilis ke dalam program LMS IAC × UNDP, siap dikonsumsi pembelajar",
          "Memvalidasi production stack ramping Canva + ElevenLabs sebagai model yang scalable untuk memproduksi konten edukasi bervolume tinggi dalam tenggat pengiriman yang ketat",
        ],
      },
    },
    tags: [
      "Graphic Design",
      "Video Editing",
      "Educational Content Design",
      "Canva",
      "ElevenLabs",
      "LMS",
    ],
  },
  {
    id: "gd-glumory-calendar-2020",
    name: {
      en: "Glumory Calendar 2020 — Brand Gift Design",
      id: "Kalender Glumory 2020 — Desain Brand Gift",
    },
    title: {
      en: "Glumory Calendar 2020 — Brand Gift Design — 2019, PT Hafara Cantik Indonesia",
      id: "Kalender Glumory 2020 — Desain Brand Gift — 2019, PT Hafara Cantik Indonesia",
    },
    year: 2020,
    client: "PT Hafara Cantik Indonesia",
    category: "graphic-design",
    imageUrl: "/projects/graphic design - Glumory Calendar 2020.png",
    caseStudy: {
      context: {
        en: "Graphic Designer at PT Hafara Cantik Indonesia — designed the 2020 Glumory Calendar, a featured premium item in a marketing-led customer gift & bundle program built around Glumory's brand character system.",
        id: "Graphic Designer di PT Hafara Cantik Indonesia — mendesain Kalender Glumory 2020, item premium unggulan dalam program customer gift & bundle yang dipimpin tim marketing dan dibangun di sekitar sistem brand character Glumory.",
      },
      challenge: {
        en: "The calendar needed to stand out as a desirable gift, not generic merchandise. Goal: produce a polished, semi-realistic visual treatment for the Glumory character set within a no-illustration-budget constraint — meaning every visual had to be built from existing stock photography and retouched into a cohesive house style.",
        id: "Kalender ini harus menonjol sebagai gift yang diinginkan, bukan merchandise generik. Tujuan: menghasilkan visual treatment semi-realistis yang rapi untuk set karakter Glumory dalam keterbatasan no-illustration-budget — artinya setiap visual harus dibangun dari stock photography yang ada dan di-retouch menjadi house style yang kohesif.",
      },
      whatIDid: {
        en: [
          "Asset sourcing — Curated visuals from free stock libraries, selecting pieces whose composition and lighting could be retouched into a unified look",
          "Photoshop production — Composited and retouched each calendar piece in Photoshop, blending stock photography with Glumory's character art to land a consistent semi-realistic finish",
          "Brand-consistent layout — Designed each spread to balance character moment, calendar grid, and Glumory brand identity for a premium, gift-worthy feel",
        ],
        id: [
          "Asset sourcing — Mengkurasi visual dari pustaka stock gratis, memilih materi yang komposisi dan pencahayaannya bisa di-retouch menjadi tampilan yang menyatu",
          "Produksi Photoshop — Mengompositkan dan me-retouch tiap bagian kalender di Photoshop, memadukan stock photography dengan character art Glumory untuk mencapai finish semi-realistis yang konsisten",
          "Layout konsisten brand — Mendesain tiap spread agar menyeimbangkan momen karakter, grid kalender, dan brand identity Glumory demi nuansa premium yang layak dijadikan gift",
        ],
      },
      impact: {
        en: [
          "Delivered the full Glumory Calendar 2020 design package, shipped as part of the brand's customer gift & bundle program — extending Glumory's brand presence into customers' physical environments year-round",
        ],
        id: [
          "Men-deliver paket desain lengkap Kalender Glumory 2020, yang dirilis sebagai bagian dari program customer gift & bundle brand — memperluas kehadiran brand Glumory ke lingkungan fisik pelanggan sepanjang tahun",
        ],
      },
    },
    tags: [
      "Graphic Design",
      "Photoshop Compositing",
      "Brand Asset Production",
      "Print Design",
      "Visual Branding",
    ],
  },
];
