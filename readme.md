# Simple Documentation

Dokumentasi simpel berteknologi modern dalam satu tempat.  
Tersedia materi dari HTML, CSS, JavaScript, hingga Next.js, Prisma, dan lain sebagainya.

## ✨ Fitur
- 📚 **50+ topik** fullstack, dari frontend sampai deployment
- 🔍 **Pencarian instan** di setiap halaman dokumentasi
- 📋 **Tombol salin** untuk setiap contoh kode
- 🌗 **Mode gelap/terang** otomatis
- 📱 **Responsif** dan ringan
- ⚡️ **Static site generation** (Next.js SSG)

## 🤝 Kontribusi
Proyek ini terbuka untuk kontribusi! Kamu bisa menambahkan materi baru dengan mudah.

### 1. Buat file JSON di dalam folder `src/data/`
Gunakan format seperti di bawah ini. Nama file akan otomatis menjadi slug halaman.

### 2. Format JSON
```json
{
  "sub-judul-1": [
    {
      "name": "Nama method / properti",
      "desc": "Deskripsi singkat",
      "example": "Contoh kode atau penggunaan",
      "output": "Output yang dihasilkan"
    }
  ],
  "sub-judul-2": [
    {
      "name": "Nama lain",
      "desc": "Deskripsi lain",
      "example": "Contoh lain",
      "output": "Output lain"
    }
  ]
}
```

## 📝 Aturan Penting

- 🏷️ **Nama file = slug halaman**  
  `html5.json` → dapat diakses di `/html5`  
  `terminal-tar.json` → dapat diakses di `/terminal-tar`

- ➖ **Gunakan tanda hubung `-`** sebagai pemisah kata pada nama file  
  ✅ `design-for-developer.json`  
  ❌ `design_for_developer.json`

- 📁 **Folder penyimpanan**: `src/data/`

- 🔤 **Sub-judul** (key pertama dalam JSON) boleh lebih dari satu, dan akan ditampilkan sebagai bagian terpisah di halaman.

- 📝 Setiap entri memiliki 4 properti wajib: `name`, `desc`, `example`, `output`.

## 🙏 Kredit

Dibuat oleh **Ridho Akbar** sebagai proyek pembelajaran dan referensi pribadi.  
Lisensi: **MIT** — bebas digunakan, dimodifikasi, dan disebarluaskan.
