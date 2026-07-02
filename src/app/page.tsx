import Link from "next/link";
import { docs } from "@/lib/docs-list";

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

        {/* Grid Dokumentasi */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {docs.map(({ title, url, icon: Icon }) => (
            <Link
              key={url}
              href={url}
              className="group flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700 dark:hover:bg-indigo-950"
            >
              <Icon className="h-7 w-7 text-gray-600 transition-colors group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-indigo-400" />
              <span className="mt-2 text-center text-xs font-medium text-gray-700 transition-colors group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400">
                {title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}