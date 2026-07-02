"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("light");

  // Setelah mount, kita tahu tema yang sebenarnya
  useEffect(() => setMounted(true), []);

  // Sinkronkan resolvedTheme ke state lokal
  useEffect(() => {
    if (resolvedTheme === "dark" || resolvedTheme === "light") {
      setActiveTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    setActiveTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="hover:cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-indigo-400 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {mounted ? (
        activeTheme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )
      ) : (
        // Placeholder transparan dengan ukuran sama → layout tidak berubah
        <span className="h-5 w-5 opacity-0" />
      )}
    </button>
  );
}