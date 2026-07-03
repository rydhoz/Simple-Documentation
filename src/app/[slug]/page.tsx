// app/docs/[slug]/page.tsx
import { notFound } from "next/navigation";
import DocsTable from "./../components/docs-table";
import fs from "fs";
import path from "path";

// Tipe data
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

// Fungsi normalisasi kategori
function normalizeCategory(category: string, data: CategoryData) {
  if (Array.isArray(data)) return [{ title: category.toUpperCase(), items: data }];
  return Object.entries(data).map(([sub, items]) => ({
    title: `${category.toUpperCase()} — ${sub.toUpperCase()}`,
    items,
  }));
}

// Baca semua slug dari folder data/ secara dinamis
function getSlugs(): string[] {
  const dataDir = path.join(process.cwd(), "src", "data");
  try {
    const files = fs.readdirSync(dataDir);
    return files
      .filter((file) => file.endsWith(".json") && !file.startsWith("_")) // abaikan file draft
      .map((file) => file.replace(".json", ""));
  } catch {
    return [];
  }
}

// Static generation (SSG) – semua halaman dibuat saat build
export async function generateStaticParams() {
  const slugs = getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs();

  // Cek apakah slug valid (ada file JSON-nya)
  if (!slugs.includes(slug)) {
    notFound();
  }

  // Baca file JSON yang sesuai
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

  // Judul halaman
  const title = slug.toUpperCase() + " DOCS";

  return (
    <div className="min-h-screen bg-[#e0e5ec] dark:bg-gray-950 p-6 md:p-10">
      <h1 className="text-4xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8 tracking-wider">
        {title}
      </h1>

      <DocsTable
        sections={allSections}
        placeholder={`Cari ${slug}...`}
        headers={["Name", "Description", "Example", "Output"]}
      />
    </div>
  );
}