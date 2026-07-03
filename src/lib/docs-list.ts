import fs from "fs";
import path from "path";

export interface DocItem {
  title: string;
  url: string;
  icon: string;
}

// Map slug → [title, icon] untuk kustomisasi
const SLUG_MAP: Record<string, [string, string]> = {
  "accessibility":             ["Accessibility", "Accessibility"],
  "authentication":            ["Authentication", "Lock"],
  "best-practices":            ["Best Practices", "Lightbulb"],
  "csharp":                    ["C#", "Code2"],
  "css3":                      ["CSS3", "Palette"],
  "database-orm":              ["Database & ORM", "Database"],
  "design-for-developer":      ["Design for Dev", "Pen"],
  "devops-deployment":         ["DevOps & Deploy", "Server"],
  "email-notification":        ["Email & Notif", "Mail"],
  "excel":                     ["Excel", "Sheet"],
  "git":                       ["Git", "GitBranch"],
  "html5":                     ["HTML5", "Globe"],
  "http":                      ["HTTP", "Link2"],
  "js":                        ["JavaScript", "FileCode"],
  "mathml":                    ["MathML", "Calculator"],
  "media":                     ["Media", "Play"],
  "nextjs-app-router":         ["Next.js App", "LayoutDashboard"],
  "nextjs-pages-router":       ["Next.js Pages", "FileText"],
  "nodejs":                    ["Node.js", "Terminal"],
  "payment":                   ["Payment", "CreditCard"],
  "performance":               ["Performance", "Gauge"],
  "php":                       ["PHP", "Hash"],
  "privacy":                   ["Privacy", "Shield"],
  "pwa":                       ["PWA", "Smartphone"],
  "reactjs":                   ["React.js", "Atom"],
  "security":                  ["Security", "ShieldCheck"],
  "state-management":          ["State Management", "Layers"],
  "svg":                       ["SVG", "Image"],
  "tailwind-css":              ["Tailwind CSS", "Wind"],
  "testing":                   ["Testing", "FlaskConical"],
  "ts":                        ["TypeScript", "Braces"],
  "uris":                      ["URIs", "Link2"],
  "version-control":           ["Version Control", "GitPullRequest"],
  "web-apis":                  ["Web APIs", "Webhook"],
  "webdriver":                 ["WebDriver", "Car"],
  "word":                      ["Word", "FileText"],
  "xml":                       ["XML", "Code2"],
};

// Icon default untuk materi yang belum ditentukan
const DEFAULT_ICON = "HelpCircle";

// Fungsi untuk mengubah slug menjadi title (fallback jika tidak ada di SLUG_MAP)
function slugToTitle(slug: string): string {
  // Ganti strip/hyphen dengan spasi, lalu kapitalkan setiap kata
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Membaca semua file JSON di folder data/, lalu menghasilkan array DocItem
function getDocs(): DocItem[] {
  const dataDir = path.join(process.cwd(), "src", "data");
  let slugs: string[] = [];

  try {
    const files = fs.readdirSync(dataDir);
    slugs = files
      .filter((file) => file.endsWith(".json") && !file.startsWith("_"))
      .map((file) => file.replace(".json", ""));
  } catch {
    // Jika folder tidak bisa dibaca, kembalikan array kosong
    return [];
  }

  return slugs.map((slug) => {
    const custom = SLUG_MAP[slug];
    const title = custom ? custom[0] : slugToTitle(slug);
    const icon = custom ? custom[1] : DEFAULT_ICON;
    return {
      title,
      url: `/${slug}`,
      icon,
    };
  });
}

export const docs: DocItem[] = getDocs();