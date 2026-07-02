import { docs } from "@/lib/docs-list";
import SearchFilterGrid from "@/app/components/search-filter-grid";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Dokumentasi Lengkap{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Fullstack Developer
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            Semua materi yang kamu butuhkan untuk menjadi fullstack developer
            modern dalam satu tempat.
          </p>
        </div>

        {/* Client component yang menangani search & grid */}
        <SearchFilterGrid docs={docs} />
      </div>
    </section>
  );
}