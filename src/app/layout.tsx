import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import GoogleAnalytics from "./analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Documentation — Dokumentasi Fullstack Developer Modern",
  verification: {
    google: "pkZA5CR3NpiiGCAlKd2Ww4zRzf6URu_3Fp7IMKch4q8",
  },
  description:
    "Kumpulan dokumentasi simpel untuk fullstack developer. Mencakup HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Git, Tailwind CSS, Prisma, database, testing, deployment, dan 50+ topik teknologi lainnya. Referensi cepat dengan pencarian instan, mode gelap, dan contoh kode yang bisa disalin.",
  keywords: [
    "dokumentasi",
    "fullstack developer",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind CSS",
    "Prisma",
    "database",
    "testing",
    "deployment",
    "web development",
    "belajar coding",
    "referensi kode",
    "contekan programmer",
    "simple documentation",
  ],
  authors: [{ name: "Ridho Akbar", url: "https://github.com/rydhoz" }],
  creator: "Ridho Akbar",
  publisher: "Ridho Akbar",
  openGraph: {
    title: "Simple Documentation — Dokumentasi Fullstack Developer Modern",
    description:
      "Kumpulan dokumentasi simpel untuk fullstack developer. Mencakup 50+ topik teknologi. Referensi cepat dengan pencarian instan, mode gelap, dan contoh kode yang bisa disalin.",
    url: "https://simple-documentation.vercel.app",
    siteName: "Simple Documentation",
    images: [
      {
        url: "https://simple-documentation.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simple Documentation — Dokumentasi Fullstack Developer Modern",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Documentation — Dokumentasi Fullstack Developer Modern",
    description:
      "Kumpulan dokumentasi simpel untuk fullstack developer. Mencakup 50+ topik teknologi.",
    images: ["https://simple-documentation.vercel.app/og-image.png"],
    creator: "@ridhoakbar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://simple-documentation.vercel.app",
  },
  

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
         <GoogleAnalytics />
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
            <Navbar />
            <main className="ml-14 flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}