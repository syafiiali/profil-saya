import React from 'react';
import Image from 'next/image';

export default function DetailBerita() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-stone-100">
      {/* Tombol Kembali (Opsional tetapi disukai pengunjung) */}
      <a 
        href="/" 
        className="inline-flex items-center text-xs font-semibold text-rose-500 hover:text-rose-400 mb-6"
      >
        ← Kembali ke Beranda
      </a>

      {/* Judul Berita */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-white">
        Program Pemberdayaan Pengrajin Batu Mulia Cempaka Berjalan: Dari Modernisasi Produksi hingga Pendampingan NIB
      </h1>

      {/* Tanggal & Penulis */}
      <div className="text-xs text-stone-400 mb-8 border-b border-stone-800 pb-4">
        <span>Dipublikasikan pada 17 Agustus 2026</span> • <span>Ahmad Ali Syafi'i</span>
      </div>

      {/* 🖼️ GAMBAR THUMBNAIL BERITA */}
      <div className="relative w-full h-72 sm:h-96 mb-8 overflow-hidden rounded-2xl border border-stone-800 shadow-xl">
        <Image
          src="/batu-mulia.jpg" // sesuaikan dengan nama file gambar di folder public
          alt="Program Pemberdayaan Pengrajin Batu Mulia Cempaka"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* Isi Berita */}
      <article className="space-y-6 leading-relaxed text-stone-300 text-sm md:text-base">
        <p>
          <strong className="text-white">Banjarbaru, Kalimantan Selatan</strong> — Program Pengabdian kepada Masyarakat (PkM) bertajuk “Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka: Modernisasi Teknologi, Digitalisasi Tata Kelola, dan Diversifikasi Produk Hasil Samping Batuan” telah memasuki tahapan pelaksanaan dan pendampingan bersama Kelompok Usaha Bersama (KUB) Pengrajin Batu Mulia di bawah binaan Pokdarwis Trisakti Pumpung, Kelurahan Sungai Tiung, Kecamatan Cempaka, Kota Banjarbaru.
        </p>

        <p>
          Program yang dilaksanakan oleh tim Universitas Lambung Mangkurat (ULM) ini dirancang untuk mendorong transformasi usaha pengrajin batu mulia dari pola produksi tradisional menuju usaha yang lebih modern, produktif, memiliki nilai tambah, serta mampu memanfaatkan peluang pasar digital.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3 text-white border-l-4 border-rose-700 pl-3">
          Modernisasi Produksi dan Penerapan K3
        </h2>
        <p>
          Salah satu tahapan penting yang telah dilaksanakan adalah penguatan aspek produksi melalui pengenalan teknologi pengolahan batu mulia dan peningkatan keselamatan kerja. Dalam rancangan program, modernisasi dilakukan melalui penerapan Master Faceting Machine sebagai unit percontohan untuk menghasilkan batu permata dengan potongan lebih presisi.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3 text-white border-l-4 border-rose-700 pl-3">
          Batuan Sisa Diolah Menjadi Produk Bernilai Ekonomi
        </h2>
        <p>
          Program juga memberikan perhatian terhadap batuan sisa (waste rock) yang sebelumnya belum dimanfaatkan secara optimal. Melalui konsep waste to product, material batuan sisa diarahkan untuk diolah menjadi produk turunan seperti gantungan kunci, liontin, bros, dan berbagai bentuk suvenir.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3 text-white border-l-4 border-rose-700 pl-3">
          Penguatan Digitalisasi dan Pendampingan NIB
        </h2>
        <p>
          Mitra mendapatkan pendampingan untuk melakukan penguatan identitas produk, pengembangan kemasan, fotografi produk, penyusunan katalog digital, serta pendampingan legalitas usaha melalui sistem Online Single Submission Risk Based Approach (OSS-RBA) untuk penerbitan Nomor Induk Berusaha (NIB).
        </p>
      </article>
    </main>
  );
}