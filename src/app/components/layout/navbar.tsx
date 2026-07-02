import Link from "next/link";
import { docs } from "@/lib/docs-list";
import ThemeToggle from "@/app/components/theme-toggle";
import Tooltip from "@/app/components/tooltip";
import * as LucideIcons from "lucide-react";
import { Home } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-40 h-screen w-14 bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-4">
      
      {/* Bagian atas yang tetap (tidak ikut scroll) */}
      <div className="flex flex-col items-center gap-2 shrink-0">
        {/* Logo Home */}
        <Tooltip label="Home">
          <Link
            href="/"
            aria-label="Home"
            className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-indigo-400 dark:hover:bg-gray-800 transition-colors"
          >
            <Home className="h-5 w-5" />
          </Link>
        </Tooltip>

        {/* Toggle Dark/Light */}
        <Tooltip label="Dark/Light">
          <ThemeToggle />
        </Tooltip>

        {/* Garis pemisah */}
        <div className="w-8 border-t border-gray-200 dark:border-gray-700 my-2" />
      </div>

      {/* Daftar Ikon Materi (scrollable) */}
      <ul className="flex flex-col items-center gap-2 w-full overflow-y-auto flex-1 py-2">
        {docs.map(({ title, url, icon }) => {
          const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType;
          return (
            <li key={url}>
              <Tooltip label={title}>
                <Link
                  href={url}
                  aria-label={title}
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-indigo-400 dark:hover:bg-gray-800 transition-colors"
                >
                  {IconComponent ? (
                    <IconComponent className="h-5 w-5" />
                  ) : (
                    <span className="h-5 w-5" />
                  )}
                </Link>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}