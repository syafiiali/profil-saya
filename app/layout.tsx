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

// Metadata lengkap dengan fitur Open Graph (Pratinjau Gambar & Deskripsi)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.alisyafii.id"),
  title: "Ahmad Ali Syafi'i",
  description: "Dosen & Peneliti Teknik Pertambangan, Teknologi Geospasial, dan Pengabdian Masyarakat.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Ahmad Ali Syafi'i",
    description: "Dosen & Peneliti Teknik Pertambangan, Teknologi Geospasial, dan Pengabdian Masyarakat.",
    url: "https://www.alisyafii.id",
    siteName: "Ahmad Ali Syafi'i",
    images: [
      {
        url: "/opengraph-image.png", // Mengambil gambar dari folder public/batu-mulia.jpg
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
    title: "Ahmad Ali Syafi'i",
    description: "Dosen & Peneliti Teknik Pertambangan, Teknologi Geospasial, dan Pengabdian Masyarakat.",
    images: ["/opengraph-image.png"], // 
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}