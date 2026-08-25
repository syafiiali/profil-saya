"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  // State bahasa ('en' untuk Inggris, 'id' untuk Indonesia)
  const [lang, setLang] = useState<"en" | "id">("en");

  // Kamus Teks Dua Bahasa
  const content = {
    en: {
      nav: {
        about: "About",
        news: "News",
        research: "Research",
        projects: "Projects",
        teaching: "Teaching",
        contact: "Contact",
      },
      hero: {
        category: "Mining Engineering • Research • Technology",
        role: "Mining Engineering Lecturer",
        bio: "Lecturer and researcher at Universitas Lambung Mangkurat, working at the intersection of mining engineering, geospatial technology, remote sensing, research, and community development.",
        btnReadNews: "Read News",
        btnContact: "Contact Me",
      },
      about: {
        subtitle: "About",
        title: "Academic Profile",
        p1: "I am a Mining Engineering Lecturer at Universitas Lambung Mangkurat, Indonesia. My academic activities combine teaching, research, technology development, and community engagement.",
        p2: "My work focuses on applying geospatial and digital technologies to mining, mineral exploration, environmental applications, geodiversity, and sustainable community development.",
      },
      news: {
        subtitle: "News & Updates",
        title: "Latest Articles",
        readMore: "Read Article",
        watchVideo: "Watch Video & Read News",
        videoBadge: "Video Documentation",
        articles: [
          {
            date: "August 25, 2026",
            title: "ULM Service Team Attends Internal Monev for Cempaka Gemstone Artisan Empowerment Program",
            desc: "Implementation of ULM Internal Monitoring and Evaluation at LPPM Building regarding before-after baseline activities and compulsory outputs of PKM funded by DRTPM Kemdiktisaintek 2026.",
            link: "/blog/monev-internal-pkm-batu-mulia",
            image: "/monev1.jpg",
          },
          {
            date: "August 17, 2026",
            title: "Cempaka Gemstone Artisan Empowerment Program Progresses: From Production Modernization to NIB Assistance",
            desc: "ULM team Community Empowerment Program encourages the transformation of Cempaka gemstone artisans from traditional production to modern, productive, and legal enterprises.",
            link: "/blog/program-pemberdayaan-pengrajin-batu-mulia-cempaka",
            image: "/batu-mulia.jpg",
          },
          {
            date: "August 15, 2026",
            title: "Video Documentation: Implementation of Cempaka Gemstone Artisan Empowerment Acceleration Program",
            desc: "Video documentation coverage of ULM community empowerment program in overseeing production modernization, OHS application, and gemstone product downstreaming.",
            link: "/blog/kegiatan-pkm-pengrajin-batu-mulia",
            image: "/batu-mulia.jpg",
            isVideo: true,
          },
        ],
      },
      projects: {
        subtitle: "Projects",
        title: "Selected Academic Activities",
        items: [
          {
            title: "Mineral Exploration",
            text: "Geospatial and remote sensing approaches for mineral exploration and geological interpretation.",
          },
          {
            title: "Geopark Meratus",
            text: "Research and exploration of geodiversity and geological potential in the Meratus region.",
          },
          {
            title: "Community Empowerment",
            text: "Technology transfer, digitalization, and local economic development through community-based programs.",
          },
        ],
      },
      contact: {
        subtitle: "Connect",
        title: "Let's Connect",
        desc: "Open to academic collaboration, research partnerships, geospatial projects, mining technology development, and community empowerment initiatives.",
      },
    },
    id: {
      nav: {
        about: "Tentang",
        news: "Berita",
        research: "Riset",
        projects: "Proyek",
        teaching: "Pengajaran",
        contact: "Kontak",
      },
      hero: {
        category: "Teknik Pertambangan • Riset • Teknologi",
        role: "Dosen Teknik Pertambangan",
        bio: "Dosen dan peneliti di Universitas Lambung Mangkurat, bergerak pada integrasi teknik pertambangan, teknologi geospasial, penginderaan jauh, riset, dan pengabdian masyarakat.",
        btnReadNews: "Baca Berita",
        btnContact: "Hubungi Saya",
      },
      about: {
        subtitle: "Tentang",
        title: "Profil Akademik",
        p1: "Saya adalah Dosen Teknik Pertambangan di Universitas Lambung Mangkurat, Indonesia. Kegiatan akademik saya mengintegrasikan pengajaran, penelitian, pengembangan teknologi, dan pengabdian kepada masyarakat.",
        p2: "Fokus kerja saya menerapkan teknologi geospasial dan digital untuk pertambangan, eksplorasi mineral, aplikasi lingkungan, keragaman geologi (geodiversity), serta pemberdayaan masyarakat secara berkelanjutan.",
      },
      news: {
        subtitle: "Berita & Pembaharuan",
        title: "Artikel Terbaru",
        readMore: "Baca Artikel",
        watchVideo: "Tonton Video & Baca Berita",
        videoBadge: "Video Dokumentasi",
        articles: [
          {
            date: "25 Agustus 2026",
            title: "Tim Pengabdian ULM Ikuti Monev Internal Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka",
            desc: "Pelaksanaan Monitoring dan Evaluasi Internal ULM di Gedung LPPM terkait baseline kegiatan before-after dan capaian luaran wajib PKM pendanaan DRTPM Kemdiktisaintek 2026.",
            link: "/blog/monev-internal-pkm-batu-mulia",
            image: "/monev1.jpg",
          },
          {
            date: "17 Agustus 2026",
            title: "Program Pemberdayaan Pengrajin Batu Mulia Cempaka Berjalan: Dari Modernisasi Produksi hingga Pendampingan NIB",
            desc: "Program Pengabdian kepada Masyarakat (PkM) tim ULM mendorong transformasi pengrajin batu mulia Cempaka dari pola produksi tradisional menuju usaha modern, produktif, dan berlegalitas.",
            link: "/blog/program-pemberdayaan-pengrajin-batu-mulia-cempaka",
            image: "/batu-mulia.jpg",
          },
          {
            date: "15 Agustus 2026",
            title: "Dokumentasi Video: Pelaksanaan Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka",
            desc: "Tayangan dokumentasi video pelaksanaan program pengabdian masyarakat ULM dalam mengawal modernisasi produksi, penerapan K3, serta hilirisasi produk batu mulia.",
            link: "/blog/kegiatan-pkm-pengrajin-batu-mulia",
            image: "/batu-mulia.jpg",
            isVideo: true,
          },
        ],
      },
      projects: {
        subtitle: "Proyek",
        title: "Kegiatan Akademik Terpilih",
        items: [
          {
            title: "Eksplorasi Mineral",
            text: "Pendekatan geospasial dan penginderaan jauh untuk eksplorasi mineral dan interpretasi geologi.",
          },
          {
            title: "Geopark Meratus",
            text: "Riset dan eksplorasi keragaman geologi (geodiversity) serta potensi geologi di kawasan Meratus.",
          },
          {
            title: "Pemberdayaan Masyarakat",
            text: "Alih teknologi, digitalisasi, dan pengembangan ekonomi lokal melalui program berbasis masyarakat.",
          },
        ],
      },
      contact: {
        subtitle: "Hubungi",
        title: "Mari Berkolaborasi",
        desc: "Terbuka untuk kolaborasi akademik, kemitraan penelitian, proyek geospasial, pengembangan teknologi pertambangan, dan inisiatif pemberdayaan masyarakat.",
      },
    },
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-rose-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-rose-950/60 bg-stone-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-base font-bold tracking-tight text-white">
            AAS<span className="text-rose-600">.</span>
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden gap-6 text-sm text-stone-400 md:flex">
              <a href="#about" className="transition hover:text-rose-400">{t.nav.about}</a>
              <a href="#news" className="transition hover:text-rose-400">{t.nav.news}</a>
              <a href="#research" className="transition hover:text-rose-400">{t.nav.research}</a>
              <a href="#projects" className="transition hover:text-rose-400">{t.nav.projects}</a>
              <a href="#teaching" className="transition hover:text-rose-400">{t.nav.teaching}</a>
              <a href="#contact" className="transition hover:text-rose-400">{t.nav.contact}</a>
            </div>

            {/* 🌐 TOGGLE BHS (ID | EN) */}
            <div className="flex items-center rounded-lg border border-stone-800 bg-stone-900/90 p-1 text-xs font-semibold">
              <button
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === "id" ? "bg-rose-800 text-white" : "text-stone-400 hover:text-white"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === "en" ? "bg-rose-800 text-white" : "text-stone-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 pt-36 pb-20">
        <div className="flex flex-col-reverse items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-rose-500">
              {t.hero.category}
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Ahmad Ali Syafi&apos;i
            </h1>

            <p className="mt-3 text-lg font-medium text-rose-200/90">
              {t.hero.role}
            </p>

            <p className="mt-4 text-base leading-relaxed text-stone-400">
              {t.hero.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#news"
                className="rounded-lg bg-rose-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                {t.hero.btnReadNews}
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-stone-800 px-5 py-2.5 text-sm font-semibold text-stone-300 transition hover:border-rose-700 hover:text-white"
              >
                {t.hero.btnContact}
              </a>
            </div>
          </div>

          {/* Profil Visual Minimalis - SUDAH DIPERBAIKI (TANPA GARIS PUTIH) */}
          <div className="shrink-0">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-rose-900/60 shadow-xl shadow-rose-950/40 md:h-52 md:w-52 bg-stone-900">
              <Image
                src="/profil.png"
                alt="Ahmad Ali Syafi'i"
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-stone-900 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">{t.about.subtitle}</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">{t.about.title}</h3>

          <div className="mt-6 grid gap-6 text-stone-400 md:grid-cols-2 text-sm leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section id="news" className="border-t border-stone-900 bg-stone-900/40 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">{t.news.subtitle}</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">{t.news.title}</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.news.articles.map((item, idx) => (
              <article key={idx} className="flex flex-col overflow-hidden rounded-xl border border-stone-800/80 bg-stone-900/80 transition hover:border-rose-900/80">
                <a href={item.link} className="relative h-48 w-full overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.isVideo && (
                    <div className="absolute inset-0 bg-stone-950/40 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-rose-700/90 flex items-center justify-center text-white shadow-lg group-hover:bg-rose-600 transition-colors">
                        <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  )}
                </a>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-rose-400">{item.date}</span>
                      {item.isVideo && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-900/60">
                          {t.news.videoBadge}
                        </span>
                      )}
                    </div>
                    <h4 className="mt-2 text-base font-semibold leading-snug text-stone-100 hover:text-rose-300">
                      <a href={item.link}>{item.title}</a>
                    </h4>
                    <p className="mt-3 text-xs leading-relaxed text-stone-400 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-800">
                    <a href={item.link} className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-rose-300">
                      {item.isVideo ? t.news.watchVideo : t.news.readMore} <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="border-t border-stone-900 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">{t.nav.research}</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">Research Interests</h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "GIS & Spatial Analysis",
              "Remote Sensing",
              "Mineral Exploration",
              "Photogrammetry",
              "Geodiversity & Geopark",
              "Machine Learning for Mining",
              "Sustainable Mining",
              "Mining Technology",
              "Community Development",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-stone-800 bg-stone-900/60 px-3.5 py-2 text-xs font-medium text-stone-300 hover:border-rose-900/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-stone-900 bg-stone-900/40 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">{t.projects.subtitle}</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">{t.projects.title}</h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.projects.items.map((project) => (
              <div key={project.title} className="rounded-xl border border-stone-800 bg-stone-900/80 p-5">
                <h4 className="text-base font-semibold text-rose-300">{project.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">{project.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="border-t border-stone-900 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">{t.nav.teaching}</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">Mining Engineering Courses</h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "SIG Pertambangan",
              "Fotogrametri Pertambangan",
              "Teknik Eksplorasi",
              "Metode Numerik",
              "Genesa Bahan Galian",
              "Perpetaan Tambang",
              "Pengantar Teknologi Informasi",
              "Geologi Struktur",
              "Metode Penelitian dan Karya Ilmiah",
              "Penginderaan Jauh dan Geomorfologi",
            ].map((course) => (
              <span
                key={course}
                className="rounded-full border border-stone-800 bg-stone-900/40 px-4 py-1.5 text-xs text-stone-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-stone-900 bg-stone-900/40 px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-rose-950/80 bg-rose-950/20 p-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500">{t.contact.subtitle}</h2>
          <h3 className="mt-1 text-2xl font-bold text-white">{t.contact.title}</h3>

          <p className="mt-3 text-sm text-stone-400 max-w-xl leading-relaxed">
            {t.contact.desc}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://mining.ft.ulm.ac.id"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-rose-800 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-rose-700"
            >
              PSTP ULM
            </a>
            <a
              href="https://github.com/syafiiali"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-stone-800 px-5 py-2.5 text-xs font-semibold text-stone-300 transition hover:border-rose-700 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-900 px-6 py-8 text-xs text-stone-500">
        <div className="mx-auto flex max-w-5xl justify-between gap-3 flex-col sm:flex-row">
          <p>© {new Date().getFullYear()} Ahmad Ali Syafi&apos;i</p>
          <p>Mining Engineering • Research • Technology</p>
        </div>
      </footer>
    </main>
  );
}