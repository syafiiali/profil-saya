"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function DetailBeritaMonev() {
  // State untuk menyimpan URL gambar yang sedang dibuka di modal/lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Path gambar di folder public/
  const thumbnailImg = "/monev1.jpg"; 
  const contentImg = "/monev2.jpeg";   

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-stone-800 font-sans">
      {/* Tombol Kembali */}
      <a 
        href="/" 
        className="inline-flex items-center text-xs font-semibold text-rose-600 hover:text-rose-500 mb-6 transition-colors"
      >
        ← Kembali ke Beranda
      </a>

      {/* Judul Berita */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-stone-900">
        Tim Pengabdian ULM Ikuti Monev Internal Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka
      </h1>

      {/* Tanggal & Penulis */}
      <div className="text-xs text-stone-500 mb-8 border-b border-stone-200 pb-4">
        <span>Dipublikasikan pada 25 Agustus 2026</span> • <span>Ir. Ahmad Ali Syafi'i, S.T., M.T., IPP.</span>
      </div>

      {/* 🖼️ GAMBAR THUMBNAIL BERITA (DAPAT DIKLIK) */}
      <div 
        onClick={() => setSelectedImage(thumbnailImg)}
        className="relative w-full h-72 sm:h-96 mb-8 overflow-hidden rounded-2xl border border-stone-300 shadow-xl cursor-pointer group bg-stone-100"
      >
        <Image
          src={thumbnailImg}
          alt="Monev Internal Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-xs font-medium bg-stone-900/80 px-4 py-1.5 rounded-full text-white shadow">
            Klik untuk memperbesar gambar
          </span>
        </div>
      </div>

      {/* Isi Berita */}
      <article className="space-y-6 leading-relaxed text-stone-700 text-sm md:text-base text-justify">
        <p>
          <strong className="text-stone-900 font-bold">Banjarmasin, Kalimantan Selatan</strong> — Tim Pengabdian kepada Masyarakat (PKM) Universitas Lambung Mangkurat (ULM) telah selesai mengikuti agenda Monitoring dan Evaluasi (Monev) Internal yang diselenggarakan oleh Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) ULM pada Senin, 24 Agustus 2026, bertempat di Gedung LPPM ULM.
        </p>

        <p>
          Agenda Monev ini dilaksanakan untuk mengukur <em>progress</em> dan capaian program pengabdian bertajuk 
          <em className="text-stone-900 font-medium"> “Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka: Modernisasi Teknologi, Digitalisasi Tata Kelola, dan Diversifikasi Produk Hasil Samping Batuan”</em>, 
          yang berhasil meraih pendanaan dari Direktorat Riset, Teknologi, dan Pengabdian kepada Masyarakat (DRTPM) Kemdiktisaintek Tahun Anggaran 2026.
        </p>

        {/* 🤝 KOLOM DUKUNGAN, TIM DOSEN & MITRA */}
        <div className="my-10 rounded-2xl border border-rose-200 bg-rose-50/60 p-6 md:p-8 text-left">
          <h2 className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-1">
            Pelaksana & Kemitraan Program
          </h2>
          <h3 className="text-xl font-bold text-stone-900 mb-3">
            Tim Dosen Pelaksana & Mitra Kegiatan
          </h3>
          <p className="text-sm text-stone-700 font-medium leading-relaxed mb-6">
            Monev Internal ini dihadiri secara lengkap oleh tim pelaksana pengabdian ULM bersama ketua mitra sasaran:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold text-rose-700">Ketua Tim Pelaksana</h4>
              <p className="text-xs text-stone-800 font-semibold mt-1">Ir. Ahmad Ali Syafi'i, S.T., M.T., IPP.</p>
              <p className="text-[11px] text-stone-500">Dosen Teknik Pertambangan, Fakultas Teknik ULM</p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold text-rose-700">Anggota Tim Dosen</h4>
              <div className="mt-1 space-y-1.5">
                <div>
                  <p className="text-xs text-stone-800 font-semibold">Anjani, S.A.P., M.A.P.</p>
                  <p className="text-[11px] text-stone-500">Dosen Administrasi Publik, FISIP ULM</p>
                </div>
                <div>
                  <p className="text-xs text-stone-800 font-semibold">Arisandy Mursalin, S.H., M.H.</p>
                  <p className="text-[11px] text-stone-500">Dosen Hukum, Fakultas Hukum ULM</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold text-rose-700">Mitra Sasaran (Pokdarwis)</h4>
              <p className="text-xs text-stone-800 font-semibold mt-1">Ruslan</p>
              <p className="text-[11px] text-stone-500">Ketua Pokdarwis Trisakti Pumpung Cempaka</p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold text-rose-700">Sumber Pendanaan</h4>
              <p className="text-xs text-stone-800 font-semibold mt-1">DRTPM Kemdiktisaintek 2026</p>
              <p className="text-[11px] text-stone-500">Skema Pemberdayaan Kemitraan Masyarakat</p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3 text-stone-900 border-l-4 border-rose-600 pl-3 text-left">
          Evaluasi Baseline Kegiatan (Before & After)
        </h2>
        <p>
          Fokus utama pemaparan dalam pemantauan ini menyoroti perbandingan <em>baseline</em> kegiatan, yaitu analisis kondisi <em>before and after</em> intervensi program. Diskusi mendalam membedah sejauh mana alih teknologi modernisasi, pendampingan digitalisasi tata kelola, hingga diversifikasi pemanfaatan hasil samping batuan telah membawa perubahan signifikan terhadap kemandirian ekonomi dan efisiensi kerja kelompok pengrajin Pokdarwis Trisakti Pumpung.
        </p>

        {/* 🖼️ GAMBAR DOKUMENTASI KEDUA DALAM BERITA (DAPAT DIKLIK) */}
        <div className="my-8 text-left">
          <div 
            onClick={() => setSelectedImage(contentImg)}
            className="relative w-full h-64 sm:h-80 overflow-hidden rounded-xl border border-stone-300 shadow-md cursor-pointer group bg-stone-100"
          >
            <Image
              src={contentImg}
              alt="Suasana Pelaksanaan Monev Internal di Gedung LPPM ULM"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs font-medium bg-stone-900/80 px-4 py-1.5 rounded-full text-white shadow">
                Klik untuk memperbesar foto dokumentasi
              </span>
            </div>
          </div>
          <p className="text-xs text-stone-500 mt-2 text-center italic">
            Dokumentasi: Suasana Pelaksanaan Monev Internal PKM di Gedung LPPM Universitas Lambung Mangkurat.
          </p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3 text-stone-900 border-l-4 border-rose-600 pl-3 text-left">
          Capaian Luaran Wajib Program
        </h2>
        <p>
          Selain peninjauan dampak sosial-ekonomi masyarakat sasaran, Monev Internal ini juga mereview pemenuhan capaian luaran wajib program yang diperjanjikan dalam pendanaan DRTPM Kemdiktisaintek 2026. Hasil evaluasi memberikan masukan konstruktif bagi tim pengabdi untuk mengoptimalkan tahap finalisasi program ke depan.
        </p>
      </article>

      {/* 🔍 MODAL LIGHTBOX UNTUK PRATINJAU GAMBAR PENUH */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-[80vh]">
            <Image
              src={selectedImage}
              alt="Pratinjau Gambar"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-sm bg-stone-800 hover:bg-stone-700 px-4 py-1.5 rounded-full border border-stone-600 shadow"
            >
              ✕ Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
}