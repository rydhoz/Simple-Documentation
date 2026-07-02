// app/docs/[slug]/page.tsx
import { notFound } from "next/navigation";
import DocsTable from "./../components/docs-table";
import fs from "fs";
import path from "path";

// Tipe data sama seperti sebelumnya
interface DocsProps {
  name: string;
  desc: string;
  example: string;
  output: string;
  mutates?: boolean;
}

type CategoryData = DocsProps[] | { [subCategory: string]: DocsProps[] };

interface DocsJson {
  [category: string]: CategoryData;
}

// Fungsi normalisasi kategori (sama seperti sebelumnya)
function normalizeCategory(category: string, data: CategoryData) {
  if (Array.isArray(data)) return [{ title: category.toUpperCase(), items: data }];
  return Object.entries(data).map(([sub, items]) => ({
    title: `${category.toUpperCase()} — ${sub.toUpperCase()}`,
    items,
  }));
}

// Daftar slug yang valid (bisa juga diambil dari folder data/*.json)
const validSlugs = [
  "html5", "css3", "js", "ts", "reactjs", "nextjs-app-router",
  "nextjs-pages-router", "nodejs", "git", "tailwind-css", "php",
  "excel", "word", "csharp", "http", "accessibility", "authentication",
  "best-practices", "database-orm", "design-for-developer",
  "devops-deployment", "email-notification", "media", "payment",
  "performance", "privacy", "pwa", "security", "state-management",
  "svg", "testing", "uris", "version-control", "web-apis",
  "webdriver", "xml", "mathml"
];

// Static generation (SSG) – halaman dibuat saat build
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export default async function DocsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 

  // Cek apakah slug valid
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  // Baca file JSON yang sesuai (pastikan file ada di folder data/)
  const filePath = path.join(process.cwd(), "src", "data", `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(fileContent) as DocsJson;

  // Proses data
  const allSections = Object.entries(jsonData).flatMap(([category, data]) =>
    normalizeCategory(category, data)
  );

  // Judul halaman (bisa diambil dari metadata atau di-hardcode per slug)
  const title = slug.toUpperCase() + " DOCS";

  return (
    <div className="min-h-screen bg-[#e0e5ec] dark:bg-gray-950 p-6 md:p-10">
      <h1 className="text-4xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8 tracking-wider">
        {title}
      </h1>

      <DocsTable
        sections={allSections}
        placeholder={`Cari ${slug}...`}
        // Header bisa disesuaikan per slug atau pakai default
        headers={["Name", "Description", "Example", "Output"]}
      />
    </div>
  );
}