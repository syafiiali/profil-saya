import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata lengkap dengan fitur SEO Google & Open Graph
export const metadata: Metadata = {
  metadataBase: new URL("https://www.alisyafii.id"),
  title: {
    default: "Ahmad Ali Syafi'i | Dosen & Peneliti Teknik Pertambangan ULM",
    template: "%s | Ahmad Ali Syafi'i",
  },
  description: "Portofolio akademik, riset teknologi geospasial, penginderaan jauh, dan kegiatan pengabdian masyarakat Ir. Ahmad Ali Syafi'i, S.T., M.T., IPP. dari Universitas Lambung Mangkurat.",
  keywords: [
    "Ahmad Ali Syafi'i",
    "Dosen Teknik Pertambangan ULM",
    "Penginderaan Jauh Pertambangan",
    "GIS Pertambangan",
    "Universitas Lambung Mangkurat",
    "PKM Batu Mulia Cempaka",
    "Geospatial Technology",
    "Remote Sensing",
  ],
  authors: [{ name: "Ahmad Ali Syafi'i" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Ahmad Ali Syafi'i | Mining Engineering Lecturer & Researcher",
    description: "Portofolio akademik, riset teknologi geospasial, penginderaan jauh, dan kegiatan pengabdian masyarakat Ahmad Ali Syafi'i di Universitas Lambung Mangkurat.",
    url: "https://www.alisyafii.id",
    siteName: "Ahmad Ali Syafi'i",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Ali Syafi'i - Featured Image",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Ali Syafi'i | Mining Engineering Lecturer & Researcher",
    description: "Portofolio akademik, riset teknologi geospasial, penginderaan jauh, dan kegiatan pengabdian masyarakat Ahmad Ali Syafi'i di Universitas Lambung Mangkurat.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}