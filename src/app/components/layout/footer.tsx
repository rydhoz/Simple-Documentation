import Link from "next/link";
import GithubIcon from "@/assets/github";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="flex items-center justify-center gap-2 px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
        Created by{" "}
        <Link
          href="https://github.com/ridhoakbar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
        >
          <GithubIcon/>
          Rydhoz
        </Link>
      </div>
    </footer>
  );
}