"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

// ========== TYPE ==========
interface DocsProps {
  name: string;
  desc: string;
  example: string;
  output: string;
  mutates?: boolean;
}

interface SectionData {
  title: string;
  items: DocsProps[];
}

interface DocsTableProps {
  sections: SectionData[];
  placeholder?: string;
  headers?: string[];
}

// ========== KOMPONEN ==========
function Section({
  title,
  children,
  headers,
}: {
  title: string;
  children: React.ReactNode;
  headers: string[];
}) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-purple-500 dark:border-purple-400 pl-3 uppercase tracking-wider">
        {title}
      </h2>
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm">
        {/* Header tabel - hanya terlihat di md ke atas */}
        <div
          className="hidden md:grid border-b border-gray-200 dark:border-gray-800"
          style={{ gridTemplateColumns: "20% 25% 30% 25%" }}
        >
          {headers.map((header, i) => (
            <div
              key={i}
              className="p-3 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              {header}
            </div>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}

function TableRow({ name, desc, example, output, headers }: DocsProps & { headers: string[] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(example);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin", err);
    }
  };

  return (
    <div
      className="grid md:grid-cols-[20%_25%_30%_25%] border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
    >
      {/* ========== VERSI MOBILE ========== */}
      <div className="md:hidden p-3 space-y-2">
        <div className="flex items-center justify-between">
          <code className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-0.5 rounded-md break-all">
            {name}
          </code>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all"
            title="Salin contoh"
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{headers[1]}: </span>
          <span className="text-sm text-gray-600 dark:text-gray-300">{desc}</span>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{headers[2]}: </span>
          <pre className="mt-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-xs text-gray-700 dark:text-gray-300 font-mono overflow-x-auto whitespace-pre-wrap break-all">
            {example}
          </pre>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{headers[3]}: </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono text-sm break-all">
            {output}
          </span>
        </div>
      </div>

      {/* ========== VERSI DESKTOP ========== */}
      {/* Kolom 1: Name */}
      <div className="hidden md:block p-3">
        <code className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-0.5 rounded-md break-all">
          {name}
        </code>
      </div>
      {/* Kolom 2: Deskripsi */}
      <div className="hidden md:block p-3 text-sm text-gray-600 dark:text-gray-300">{desc}</div>
      {/* Kolom 3: Contoh + tombol copy */}
      <div className="hidden md:block p-3 relative">
        <pre className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-xs text-gray-700 dark:text-gray-300 font-mono overflow-x-auto whitespace-normal break-all pr-12">
          {example}
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-0 right-0 z-10 p-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all"
          title="Salin contoh"
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      {/* Kolom 4: Output */}
      <div className="hidden md:block p-3">
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono text-sm break-all">
          {output}
        </span>
      </div>
    </div>
  );
}

// ========== KOMPONEN UTAMA ==========
export default function DocsTable({
  sections,
  placeholder = "Cari...",
  headers = ["Fitur / API", "Deskripsi", "Contoh", "Output"],
}: DocsTableProps) {
  const [search, setSearch] = useState("");

  const filterItems = (items: DocsProps[]): DocsProps[] => {
    if (!search) return items;
    const keyword = search.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(keyword) ||
        item.desc.toLowerCase().includes(keyword) ||
        item.example.toLowerCase().includes(keyword) ||
        item.output.toLowerCase().includes(keyword)
    );
  };

  return (
    <>
      {/* Search */}
      <div className="flex justify-center mb-8 md:mb-12">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full max-w-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-6 py-3 rounded-2xl text-gray-700 dark:text-gray-200 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-colors"
        />
      </div>

      {/* Render */}
      {sections.map(({ title, items }) => {
        const filtered = filterItems(items);
        if (filtered.length === 0) return null;

        return (
          <Section key={title} title={title} headers={headers}>
            {filtered.map((item, index) => (
              <TableRow key={index} {...item} headers={headers} />
            ))}
          </Section>
        );
      })}

      {/* Empty */}
      {sections.every(({ items }) => filterItems(items).length === 0) && (
        <p className="text-center text-gray-400 dark:text-gray-500 mt-20 text-lg">
          Tidak ditemukan.
        </p>
      )}
    </>
  );
}