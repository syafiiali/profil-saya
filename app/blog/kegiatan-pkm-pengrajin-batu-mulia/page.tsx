import React from 'react';

export default function DetailVideoPKM() {
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
        Dokumentasi Video: Pelaksanaan Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka
      </h1>

      {/* Tanggal & Penulis */}
      <div className="text-xs text-stone-500 mb-8 border-b border-stone-200 pb-4">
        <span>Dipublikasikan pada 15 Agustus 2026</span> • <span>Tim PkM ULM</span>
      </div>

      {/* 📹 THUMBNAIL VIDEO INTERAKTIF */}
      <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-2xl border border-stone-300 shadow-xl bg-stone-900 group">
        <a 
          href="https://youtu.be/BHxvEU9yIEI?si=NleT2gXpsIlO0597" 
          target="_blank" 
          rel="noreferrer"
          className="block relative w-full h-full"
        >
          {/* Gambar Thumbnail dari YouTube */}
          <img 
            src="https://img.youtube.com/vi/BHxvEU9yIEI/maxresdefault.jpg" 
            alt="Thumbnail Video PKM Batu Mulia Cempaka" 
            className="w-full h-full object-cover brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-300"
          />
          {/* Overlay & Tombol Play */}
          <div className="absolute inset-0 bg-stone-950/30 flex flex-col items-center justify-center transition-opacity group-hover:bg-stone-950/20">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-rose-700/90 flex items-center justify-center text-white shadow-2xl group-hover:bg-rose-600 group-hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span className="mt-3 text-xs md:text-sm font-semibold text-white drop-shadow bg-stone-950/70 px-4 py-1.5 rounded-full border border-stone-700">
              Klik untuk Memutar Video di YouTube
            </span>
          </div>
        </a>
      </div>

      {/* Deskripsi & Ringkasan Kegiatan */}
      <article className="space-y-6 leading-relaxed text-stone-700 text-sm md:text-base">
        <p>
          <strong className="text-stone-900 font-bold">Banjarbaru, Kalimantan Selatan</strong> — Tayangan video dokumentasi di atas merangkum seluruh alur pelaksanaan Program Pengabdian kepada Masyarakat (PkM) bertajuk <em>“Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka: Modernisasi Teknologi, Digitalisasi Tata Kelola, dan Diversifikasi Produk Hasil Samping Batuan”</em>.
        </p>

        <p>
          Melalui kegiatan ini, Tim Pengabdi Universitas Lambung Mangkurat (ULM) mendokumentasikan setiap tahapan pendampingan teknis, mulai dari demonstrasi pengolahan batuan sisa menjadi suvenir bernilai ekonomis, penataan area kerja berbasis K3, hingga pendampingan legalitas NIB untuk kelompok mitra.
        </p>

        {/* 🤝 KOLOM DUKUNGAN (SUPPORT COLUMN) - Kontras Warna Diperbaiki */}
        <div className="my-10 rounded-2xl border border-rose-200 bg-rose-50/60 p-6 md:p-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-1">
            Mitra & Dukungan Program
          </h2>
          <h3 className="text-xl font-bold text-stone-900 mb-3">
            Dukungan Pengabdian & Kemitraan Strategis
          </h3>
          <p className="text-sm text-stone-700 font-medium leading-relaxed mb-6">
            Program kegiatan dan pembuatan dokumentasi ini dapat terlaksana atas dukungan penuh dari berbagai pihak mitra dan lembaga pendukung:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold text-rose-700">Lembaga Pelaksana</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">Tim Pengabdian kepada Masyarakat (PkM) Universitas Lambung Mangkurat (ULM)</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold text-rose-700">Mitra Sasaran & Lokasi</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">Pokdarwis Trisakti Pumpung & KUB Pengrajin Batu Mulia Cempaka, Banjarbaru</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold text-rose-700">Fokus Program</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">Modernisasi Teknologi, Diversifikasi Produk Samping, & Digitalisasi Usaha</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold text-rose-700">Dukungan Akses Legalitas</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">Pendampingan Administrasi NIB via OSS-RBA & Penguatan Tata Kelola</p>
            </div>
          </div>
        </div>

        {/* Tombol Tautan Langsung Video */}
        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <a
            href="https://youtu.be/BHxvEU9yIEI?si=NleT2gXpsIlO0597"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-rose-700 px-6 py-3 text-xs font-semibold text-white hover:bg-rose-800 transition-colors shadow-md"
          >
            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            Tonton Video Lengkap di YouTube
          </a>
        </div>
      </article>
    </main>
  );
}