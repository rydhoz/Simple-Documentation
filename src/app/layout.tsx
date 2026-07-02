import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Simple Documentation",
   description: "Semua materi yang kamu butuhkan untuk menjadi fullstack developer modern dalam satu tempat.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="id" suppressHydrationWarning>
         <body className={inter.className}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
               <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
                  <Navbar />
                  <main className="ml-14 flex-1">{children}</main>
               </div>
            </ThemeProvider>
         </body>
      </html>
   );
}
