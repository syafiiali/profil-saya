import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tim Pengabdian ULM Ikuti Monev Internal Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka",
  description: "Pelaksanaan Monitoring dan Evaluasi Internal ULM di Gedung LPPM terkait baseline kegiatan before-after dan capaian luaran wajib PKM pendanaan DRTPM Kemdiktisaintek 2026.",
  openGraph: {
    title: "Tim Pengabdian ULM Ikuti Monev Internal Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka",
    description: "Pelaksanaan Monitoring dan Evaluasi Internal ULM di Gedung LPPM terkait baseline kegiatan before-after dan capaian luaran wajib PKM pendanaan DRTPM Kemdiktisaintek 2026.",
    url: "https://www.alisyafii.id/blog/monev-internal-pkm-batu-mulia",
    siteName: "Ahmad Ali Syafi'i",
    images: [
      {
        url: "https://www.alisyafii.id/monev1.jpg", // Gambar 16:9 Standard OpenGraph (Landscape)
        width: 1200,
        height: 630,
        alt: "Tim Pengabdian ULM Ikuti Monev Internal Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka",
      },
      {
        url: "https://www.alisyafii.id/monev1.jpg", // Opsi Fallback 1:1 khusus WhatsApp / Chat Client (Square)
        width: 600,
        height: 600,
        alt: "Tim Pengabdian ULM Ikuti Monev Internal Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka",
      },
    ],
    locale: "id_ID",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tim Pengabdian ULM Ikuti Monev Internal Program Akselerasi Pemberdayaan Pengrajin Batu Mulia Cempaka",
    description: "Pelaksanaan Monitoring dan Evaluasi Internal ULM terkait baseline kegiatan before-after dan capaian luaran wajib PKM.",
    images: ["https://www.alisyafii.id/monev1.jpg"],
  },
};

export default function MonevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}