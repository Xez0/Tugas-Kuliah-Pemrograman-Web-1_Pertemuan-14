# Design System & Pedoman Antarmuka: Nusantara Horizon Travel

Dokumentasi desain dan arsitektur visual untuk aplikasi web **Sistem Informasi Travel Wisata** (Tugas Pertemuan 14 Pemrograman Web 1).

---

## 1. Konsep & Arah Seni (Art Direction)
- **Tema :** *Nusantara Maritime & Overland Expedition*
- **Karakter Visual :** Elegan, terpercaya, tenang, dan profesional dengan sentuhan hangat khas destinasi tropis bahari Indonesia.
- **Prinsip Tampilan :** 
  - Bebas dari ornamen grafis berlebihan atau efek gradien kecerdasan buatan (*anti-slop*).
  - Mengedepankan hierarki tipografi yang kuat, tata spasi konsisten (kelipatan 4px/8px), dan kontras teks yang memenuhi standar aksesibilitas WCAG AA (rasio kontras &ge; 4.5:1).

---

## 2. Token Warna (Design Tokens)

| Token CSS | Kode Heksadesimal | Nilai HSL | Peran Penggunaan |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `#0d3b4c` | `hsl(196, 71%, 17%)` | Warna utama laut dalam (*Oceanic Navy*) untuk header, teks utama, dan judul. |
| `--color-accent` | `#d95d39` | `hsl(13, 67%, 54%)` | Warna aksen terracotta terbit matahari untuk sorotan harga promo dan badge. |
| `--color-success` | `#2d6a4f` | `hsl(152, 40%, 30%)` | Warna hijau konservasi alam untuk status kuota dan keberangkatan terkonfirmasi. |
| `--color-warning` | `#b45309` | `hsl(32, 86%, 37%)` | Warna peringatan kuota terbatas dan status pemesanan. |
| `--bg-canvas` | `#f8f7f4` | `hsl(45, 20%, 97%)` | Warna latar belakang kanvas pasir putih hangat (*Warm Sand*). |
| `--bg-card` | `#ffffff` | `hsl(0, 0%, 100%)` | Warna latar belakang kartu konten utama. |
| `--border-subtle` | `#e2dfd7` | `hsl(43, 16%, 86%)` | Garis batas tipis netral untuk pembagi kartu dan tabel. |

---

## 3. Skala Tipografi (Typography Scale)

| Tingkatan | Properti Font | Ukuran | Kegunaan |
| :--- | :--- | :--- | :--- |
| **Brand Super** | *Plus Jakarta Sans*, Bold 700 | `0.75rem (12px)` | Sub-judul merek kecil dengan spasi huruf lebar (`0.08em`). |
| **Display Title** | *Newsreader*, Serif Medium 500 | `2.0rem (32px)` | Judul utama destinasi dan judul halaman web. |
| **Section Title** | *Newsreader*, Serif Medium 500 | `1.375rem (22px)` | Judul blok kondisi awal dan kondisi terkini. |
| **Body Text** | *Plus Jakarta Sans*, Regular 400 | `0.9375rem (15px)` | Paragraf deskripsi informasi wisata. |
| **Numeric & Tabular** | *JetBrains Mono*, SemiBold 600 | `1.125rem (18px)` | Angka nominal rupiah, kuota peserta, dan persentase diskon. |

---

## 4. Struktur Tata Letak (Layout Architecture)
1. **Header Navigasi (`.site-header`) :** Menggunakan *Flexbox* (`display: flex; justify-content: space-between`) untuk menyejajarkan logo kapal phinisi dan badge status operasional.
2. **Hero Banner (`.hero-banner`) :** Menampilkan ringkasan destinasi unggulan dengan 3 metrik cepat (*Lokasi*, *Durasi*, *Kategori*).
3. **Grid Komparasi Perubahan (`.comparison-grid`) :** Menggunakan *CSS Grid* (`grid-template-columns: repeat(2, 1fr)`) untuk membandingkan secara visual nilai variabel sebelum dan sesudah dimodifikasi oleh JavaScript.
4. **Tabel Rincian Data (`.data-table`) :** Tabel tabular bersih untuk menginventarisasi 8 informasi paket wisata secara terperinci.
5. **Panel Penjelasan Nilai Numerik (`.numeric-explanation-card`) :** Blok penjelasan khusus makna nilai numerik 50 dan 700 sesuai kewajiban instruksi dosen.
