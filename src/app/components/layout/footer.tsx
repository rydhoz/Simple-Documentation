import Link from "next/link";
import GithubIcon from "@/assets/github";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 mt-auto">
      <div className="flex items-center justify-center gap-1.5 px-4 py-4 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
        <span>Created by</span>
        <Link
          href="https://github.com/ridhoakbar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-medium text-indigo-600 hover:text-indigo-500 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:text-indigo-300 dark:hover:bg-indigo-950 transition-colors"
        >
          <GithubIcon />
          Rydhoz
        </Link>
        <span className="text-gray-300 dark:text-gray-600 mx-0.5">·</span>
        <Link
          href="https://github.com/rydhoz/Simple-Documentation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-medium text-indigo-600 hover:text-indigo-500 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:text-indigo-300 dark:hover:bg-indigo-950 transition-colors"
        >
          <Code2 className="h-4 w-4" />
          Source
        </Link>
      </div>
    </footer>
  );
}