"use client";

import { useState } from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { DocItem } from "@/lib/docs-list";

interface SearchFilterGridProps {
  docs: DocItem[];
}

export default function SearchFilterGrid({ docs }: SearchFilterGridProps) {
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? docs.filter((doc) =>
        doc.title.toLowerCase().includes(search.toLowerCase())
      )
    : docs;

  return (
    <>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari materi..."
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {filtered.map(({ title, url, icon }) => {
          const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType;
          return (
            <Link
              key={url}
              href={url}
              className="group flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700 dark:hover:bg-indigo-950"
            >
              {IconComponent ? (
                <IconComponent className="h-7 w-7 text-gray-600 transition-colors group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-indigo-400" />
              ) : (
                <span className="h-7 w-7" />
              )}
              <span className="mt-2 text-center text-xs font-medium text-gray-700 transition-colors group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400">
                {title}
              </span>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          Materi tidak ditemukan.
        </p>
      )}
    </>
  );
}