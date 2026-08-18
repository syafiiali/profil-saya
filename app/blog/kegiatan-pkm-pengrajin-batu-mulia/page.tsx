import React from 'react';

export default function DetailVideoPKM() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-stone-100 font-sans">
      {/* Tombol Kembali */}
      <a 
        href="/" 
        className="inline-flex items-center text-xs font-semibold text-rose-500 hover:text-rose-400 mb-6 transition-colors"
      >
        ← Kembali ke Beranda
      </a>

      {/* Judul Berita */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-white">
        Dokumentasi Video: Pelaksanaan Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka
      </h1>

      {/* Tanggal & Penulis */}
      <div className="text-xs text-stone-400 mb-8 border-b border-stone-800 pb-4">
        <span>Dipublikasikan pada 15 Agustus 2026</span> • <span>Tim PkM ULM</span>
      </div>

      {/* 📹 KOLOM PEMUTAR VIDEO / THUMBNAIL VIDEO UTAMA */}
      <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-2xl border border-stone-800 shadow-xl bg-stone-900 flex items-center justify-center">
        {/* OPSI A: Jika menggunakan Embed YouTube (Ganti ID VIDEO_YOUTUBE_ANDA) */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/VIDEO_YOUTUBE_ANDA"
          title="Video Kegiatan PKM Batu Mulia Cempaka"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* OPSI B: Jika menggunakan gambar thumbnail yang dipasang link (Uncomment jika tidak memakai iframe) */}
        {/* 
        <a href="LINK_VIDEO_YOUTUBE_ATAU_DRIVE" target="_blank" rel="noreferrer" className="relative w-full h-full group">
          <img src="/batu-mulia.jpg" alt="Thumbnail Video PKM" className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-rose-700/90 flex items-center justify-center text-white shadow-lg group-hover:bg-rose-600 transition-colors">
              <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </a>
        */}
      </div>

      {/* Deskripsi & Ringkasan Kegiatan */}
      <article className="space-y-6 leading-relaxed text-stone-300 text-sm md:text-base">
        <p>
          <strong className="text-white">Banjarbaru, Kalimantan Selatan</strong> — Tayangan video dokumentasi di atas merangkum seluruh alur pelaksanaan Program Pengabdian kepada Masyarakat (PkM) bertajuk <em>“Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka: Modernisasi Teknologi, Digitalisasi Tata Kelola, dan Diversifikasi Produk Hasil Samping Batuan”</em>.
        </p>

        <p>
          Melalui kegiatan ini, Tim Pengabdi Universitas Lambung Mangkurat (ULM) mendokumentasikan setiap tahapan pendampingan teknis, mulai dari demonstrasi pengolahan batuan sisa menjadi suvenir bernilai ekonomis, penataan area kerja berbasis K3, hingga pendampingan legalitas NIB untuk kelompok mitra.
        </p>

        {/* 🤝 KOLOM DUKUNGAN (SUPPORT COLUMN) */}
        <div className="my-10 rounded-2xl border border-rose-950/80 bg-rose-950/20 p-6 md:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-rose-500 mb-2">
            Mitra & Dukungan Program
          </h2>
          <h3 className="text-xl font-bold text-white mb-4">
            Dukungan Pengabdian & Kemitraan Strategis
          </h3>
          <p className="text-sm text-stone-300 leading-relaxed mb-6">
            Program kegiatan dan pembuatan dokumentasi ini dapat terlaksana atas dukungan penuh dari berbagai pihak mitra dan lembaga pendukung:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-800 bg-stone-900/80 p-4">
              <h4 className="text-sm font-semibold text-rose-300">Lembaga Pelaksana</h4>
              <p className="text-xs text-stone-400 mt-1">Tim Pengabdian kepada Masyarakat (PkM) Universitas Lambung Mangkurat (ULM)</p>
            </div>
            <div className="rounded-xl border border-stone-800 bg-stone-900/80 p-4">
              <h4 className="text-sm font-semibold text-rose-300">Mitra Sasaran & Lokasi</h4>
              <p className="text-xs text-stone-400 mt-1">Pokdarwis Trisakti Pumpung & KUB Pengrajin Batu Mulia Cempaka, Banjarbaru</p>
            </div>
            <div className="rounded-xl border border-stone-800 bg-stone-900/80 p-4">
              <h4 className="text-sm font-semibold text-rose-300">Fokus Program</h4>
              <p className="text-xs text-stone-400 mt-1">Modernisasi Teknologi, Diversifikasi Produk Samping, & Digitalisasi Usaha</p>
            </div>
            <div className="rounded-xl border border-stone-800 bg-stone-900/80 p-4">
              <h4 className="text-sm font-semibold text-rose-300">Dukungan Akses Legalitas</h4>
              <p className="text-xs text-stone-400 mt-1">Pendampingan Administrasi NIB via OSS-RBA & Penguatan Tata Kelola</p>
            </div>
          </div>
        </div>

        {/* Tombol Tautan Langsung Video */}
        <div className="pt-4 flex flex-wrap gap-4 items-center">
          <a
            href="https://youtu.be/BHxvEU9yIEI?si=NleT2gXpsIlO0597" // Ganti link video asli Anda
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-rose-800 px-6 py-3 text-xs font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            Tonton Video Lengkap di YouTube
          </a>
        </div>
      </article>
    </main>
  );
}