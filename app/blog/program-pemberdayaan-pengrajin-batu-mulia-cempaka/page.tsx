import React from 'react';

export default function DetailBerita() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      {/* Judul Berita */}
      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Program Pemberdayaan Pengrajin Batu Mulia Cempaka Berjalan: Dari Modernisasi Produksi hingga Pendampingan NIB
      </h1>

      {/* Tanggal & Penulis */}
      <div className="text-sm text-gray-500 mb-8 border-b pb-4">
        <span>Dipublikasikan pada 17 Agustus 2026</span> • <span>Ahmad Ali Syafi'i</span>
      </div>

      {/* Isi Berita */}
      <article className="prose lg:prose-lg space-y-6 leading-relaxed">
        <p>
          <strong>Banjarbaru, Kalimantan Selatan</strong> — Program Pengabdian kepada Masyarakat (PkM) bertajuk “Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka: Modernisasi Teknologi, Digitalisasi Tata Kelola, dan Diversifikasi Produk Hasil Samping Batuan” telah memasuki tahapan pelaksanaan dan pendampingan bersama Kelompok Usaha Bersama (KUB) Pengrajin Batu Mulia di bawah binaan Pokdarwis Trisakti Pumpung, Kelurahan Sungai Tiung, Kecamatan Cempaka, Kota Banjarbaru.
        </p>

        <p>
          Program yang dilaksanakan oleh tim Universitas Lambung Mangkurat (ULM) ini dirancang untuk mendorong transformasi usaha pengrajin batu mulia dari pola produksi tradisional menuju usaha yang lebih modern, produktif, memiliki nilai tambah, serta mampu memanfaatkan peluang pasar digital.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Modernisasi Produksi dan Penerapan K3</h2>
        <p>
          Salah satu tahapan penting yang telah dilaksanakan adalah penguatan aspek produksi melalui pengenalan teknologi pengolahan batu mulia dan peningkatan keselamatan kerja. Dalam rancangan program, modernisasi dilakukan melalui penerapan Master Faceting Machine sebagai unit percontohan untuk menghasilkan batu permata dengan potongan lebih presisi.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Batuan Sisa Diolah Menjadi Produk Bernilai Ekonomi</h2>
        <p>
          Program juga memberikan perhatian terhadap batuan sisa (waste rock) yang sebelumnya belum dimanfaatkan secara optimal. Melalui konsep waste to product, material batuan sisa diarahkan untuk diolah menjadi produk turunan seperti gantungan kunci, liontin, bros, dan berbagai bentuk suvenir.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Penguatan Digitalisasi dan Pendampingan NIB</h2>
        <p>
          Mitra mendapatkan pendampingan untuk melakukan penguatan identitas produk, pengembangan kemasan, fotografi produk, penyusunan katalog digital, serta pendampingan legalitas usaha melalui sistem Online Single Submission Risk Based Approach (OSS-RBA) untuk penerbitan Nomor Induk Berusaha (NIB).
        </p>
      </article>
    </main>
  );
}