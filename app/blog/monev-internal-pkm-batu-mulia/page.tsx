"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function DetailBerita() {
  // State untuk menyimpan URL gambar yang sedang dibuka di modal/lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Path gambar (sesuaikan dengan nama & ekstensi file Anda di folder public)
  const thumbnailImg = "/monev1.jpg"; // atau /monev1.png
  const contentImg = "/monev2.jpg";   // atau /monev2.png

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-stone-100">
      {/* Tombol Kembali */}
      <a 
        href="/" 
        className="inline-flex items-center text-xs font-semibold text-rose-500 hover:text-rose-400 mb-6 transition-colors"
      >
        ← Kembali ke Beranda
      </a>

      {/* Judul Berita */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-white">
        Tim Pengabdian ULM Ikuti Monev Internal Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka
      </h1>

      {/* Tanggal & Penulis */}
      <div className="text-xs text-stone-400 mb-8 border-b border-stone-800 pb-4">
        <span>Dipublikasikan pada 25 Agustus 2026</span> • <span>Ahmad Ali Syafi'i</span>
      </div>

      {/* 🖼️ GAMBAR THUMBNAIL BERITA (DAPAT DIKLIK) */}
      <div 
        onClick={() => setSelectedImage(thumbnailImg)}
        className="relative w-full h-72 sm:h-96 mb-8 overflow-hidden rounded-2xl border border-stone-800 shadow-xl cursor-pointer group"
      >
        <Image
          src={thumbnailImg}
          alt="Monev Internal Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-xs font-medium bg-black/70 px-3 py-1.5 rounded-full text-white">
            Klik untuk memperbesar
          </span>
        </div>
      </div>

      {/* Isi Berita */}
      <article className="space-y-6 leading-relaxed text-stone-300 text-sm md:text-base">
        <p>
          <strong className="text-white">Banjarmasin, Kalimantan Selatan</strong> — Tim Pengabdian kepada Masyarakat (PKM) Universitas Lambung Mangkurat (ULM) telah selesai mengikuti agenda Monitoring dan Evaluasi (Monev) Internal yang diselenggarakan oleh Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) ULM pada Senin, 24 Agustus 2026, bertempat di Gedung LPPM ULM.
        </p>

        <p>
          Agenda Monev ini dilaksanakan untuk mengukur progress dan capaian program pengabdian bertajuk 
          <em className="text-stone-200"> "Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka: Modernisasi Teknologi, Digitalisasi Tata Kelola, dan Diversifikasi Produk Hasil Samping Batuan"</em>, 
          yang berhasil meraih pendanaan dari Direktorat Riset, Teknologi, dan Pengabdian kepada Masyarakat (DRTPM) Kemdiktisaintek Tahun Anggaran 2026.
        </p>

        <p>
          Monev ini dihadiri secara lengkap oleh seluruh tim dosen pelaksana, yaitu:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-stone-300">
          <li><strong className="text-white">Ir. Ahmad Ali Syafi'i, S.T., M.T., IPP.</strong> (Ketua Tim)</li>
          <li><strong className="text-white">Anjani, S.A.P., M.A.P.</strong> (Anggota Tim)</li>
          <li><strong className="text-white">Arisandy Mursalin, S.H., M.H.</strong> (Anggota Tim)</li>
        </ul>

        <p>
          Turut hadir pula mendampingi tim, ketua mitra kegiatan yakni <strong className="text-white">Bapak Ruslan</strong> selaku Ketua Kelompok Sadar Wisata (Pokdarwis) Trisakti Pumpung Cempaka. Kehadiran mitra menjadi elemen penting dalam memberikan gambaran nyata atas dampak program di lapangan.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3 text-white border-l-4 border-rose-700 pl-3">
          Evaluasi Baseline Kegiatan (Before & After)
        </h2>
        <p>
          Fokus utama pemaparan dalam pemantauan ini menyoroti perbandingan <em className="text-stone-200">baseline</em> kegiatan, yaitu analisis kondisi <em className="text-stone-200">before and after</em> intervensi program. Diskusi mendalam membedah sejauh mana alih teknologi modernisasi, pendampingan digitalisasi tata kelola, hingga diversifikasi pemanfaatan hasil samping batuan telah membawa perubahan signifikan terhadap kemandirian ekonomi dan efisiensi kerja kelompok pengrajin Pokdarwis Trisakti Pumpung.
        </p>

        {/* 🖼️ GAMBAR DOKUMENTASI KEDUA DALAM BERITA (DAPAT DIKLIK) */}
        <div 
          onClick={() => setSelectedImage(contentImg)}
          className="relative w-full h-64 sm:h-80 my-8 overflow-hidden rounded-xl border border-stone-800 cursor-pointer group"
        >
          <Image
            src={contentImg}
            alt="Suasana Pelaksanaan Monev Internal di Gedung LPPM ULM"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-xs font-medium bg-black/70 px-3 py-1.5 rounded-full text-white">
              Klik untuk memperbesar
            </span>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3 text-white border-l-4 border-rose-700 pl-3">
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
              className="absolute -top-10 right-0 text-white text-sm bg-stone-800 hover:bg-stone-700 px-3 py-1 rounded-full border border-stone-600"
            >
              ✕ Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
}