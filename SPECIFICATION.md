# Spesifikasi Teknis Tugas Pertemuan 14 - Pemrograman Web 1

## Identitas Mahasiswa
- **Nama Lengkap :** Hadi Sulaiman
- **NIM :** 241011402572
- **Kelas :** 05TPLM003
- **Program Studi :** Teknik Informatika S-1
- **Fakultas :** Ilmu Komputer
- **Perguruan Tinggi :** Universitas Pamulang
- **Mata Kuliah :** Pemrograman Web 1 (Pertemuan 14)
- **Topik Penugasan :** Variabel, Manipulasi Nilai, dan Output Alur JavaScript (`alert()` & `document.write()`) Berdasarkan Variasi NIM

---

## 1. Pemetaan Digit Terakhir NIM terhadap Tema Website
Digit terakhir dari NIM `241011402572` adalah angka **`2`**.

| Digit | Tema Website | Informasi yang Ditampilkan | Status Pemilihan |
| :---: | :--- | :--- | :---: |
| 0 | Portal Kampus | Nama kampus, program studi, informasi kegiatan | - |
| 1 | Coffee Shop | Nama kedai, menu unggulan, harga | - |
| **2** | **Travel Wisata** | **Nama destinasi, lokasi, biaya perjalanan** | **TERPILIH (&check;)** |
| 3 | Gaming Center | Nama game, kategori, biaya bermain | - |
| 4 | Hotel | Nama hotel, tipe kamar, tarif | - |
| 5 | Fashion Store | Nama produk, kategori, harga | - |
| 6 | Perpustakaan Digital | Judul buku, penulis, tahun terbit | - |
| 7 | Event dan Seminar | Nama kegiatan, pembicara, biaya pendaftaran | - |
| 8 | Computer Store | Nama perangkat, spesifikasi, harga | - |
| 9 | Restaurant | Nama makanan, kategori, harga | - |

**Entitas Bisnis Aplikasi :**  
**Nusantara Horizon Travel &amp; Expedition**  
Menampilkan paket wisata kepulauan premium: *Taman Nasional Komodo &amp; Pink Beach (Labuan Bajo, Nusa Tenggara Timur)* dengan data destinasi, lokasi, kategori, durasi, biaya perjalanan reguler dan promo, biaya konservasi, serta kuota peserta.

---

## 2. Ketentuan 5 Digit Terakhir NIM (Kiri ke Kanan)
Lima digit terakhir dari NIM `241011402572` dibaca dari kiri ke kanan:  
`0`, `2`, `5`, `7`, `2`.

> **Aturan Khusus Soal :**  
> *"Gunakan lima digit terakhir NIM dari kiri ke kanan untuk menentukan ketentuan program. Jika terdapat angka 0, ganti menjadi 3 dalam perhitungan."*

Penyesuaian nilai digit untuk perhitungan implementasi:
- **Digit ke-1 :** Asli = `0` &rarr; Disesuaikan = **`3`**
- **Digit ke-2 :** Asli = `2` &rarr; Disesuaikan = **`2`**
- **Digit ke-3 :** Asli = `5` &rarr; Disesuaikan = **`5`**
- **Digit ke-4 :** Asli = `7` &rarr; Disesuaikan = **`7`**
- **Digit ke-5 :** Asli = `2` &rarr; Disesuaikan = **`2`**

---

## 3. Matriks Implementasi Ketentuan Program JavaScript

| Posisi Digit NIM | Nilai Digit Hasil Aturan | Rumus Penugasan | Target Implementasi Nyata | Rincian Variabel / Modul Program |
| :--- | :---: | :--- | :--- | :--- |
| **Digit ke-1** | **3** (dari 0) | Jumlah minimal informasi yang ditampilkan = `digit + 3` | **Minimal 6 informasi** (3 + 3 = 6) | Ditampilkan 8 informasi: 1) Nama Destinasi, 2) Wilayah Lokasi, 3) Kategori Paket, 4) Durasi Wisata, 5) Biaya Perjalanan, 6) Biaya Retribusi & Konservasi, 7) Kuota Peserta, 8) Status Keberangkatan. |
| **Digit ke-2** | **2** | Jumlah minimal variabel yang digunakan = `digit + 3` | **Minimal 5 variabel** (2 + 3 = 5) | Dideklarasikan 8 variabel: `namaDestinasi`, `lokasiDestinasi`, `kategoriPaket`, `durasiWisata`, `biayaPerjalanan`, `biayaRetribusi`, `kuotaPeserta`, `statusKeberangkatan`. |
| **Digit ke-3** | **5** | Nilai numerik pertama = `digit x 10` | **Nilai = 50** (5 x 10 = 50) | `kuotaPeserta = 50` (Makna: Kuota kapasitas maksimal kapal phinisi rombongan wisata adalah 50 orang penumpang). |
| **Digit ke-4** | **7** | Nilai numerik kedua = `digit x 100` | **Nilai = 700** (7 x 100 = 700) | `biayaRetribusi = 700000` (Makna: Biaya retribusi konservasi lingkungan dan pemandu ranger adalah Rp 700.000 / $700). |
| **Digit ke-5** | **2** | Jumlah minimal perubahan nilai variabel = `digit` | **Minimal 2 perubahan nilai variabel** | 1) `biayaPerjalanan` diubah dari Rp 3.500.000 menjadi Rp 2.800.000 (diskon promo).<br>2) `kuotaPeserta` diubah dari 50 menjadi 42 orang (setelah 8 peserta mengonfirmasi booking). |

---

## 4. Alur Program yang Wajib Dibuat (6 Langkah Sekuensial)
1. **Langkah 1 :** Saat website dibuka, JavaScript menampilkan pesan selamat datang menggunakan `alert()`.
2. **Langkah 2 :** Program mendeklarasikan variabel untuk menyimpan informasi sesuai tema Travel Wisata.
3. **Langkah 3 :** Program menampilkan informasi awal menggunakan `document.write()`.
4. **Langkah 4 :** Program mengubah nilai satu atau beberapa variabel sesuai jumlah perubahan yang ditentukan NIM (2 perubahan nilai).
5. **Langkah 5 :** Program menampilkan nilai sebelum dan sesudah perubahan agar perbedaannya terlihat secara jelas dan komparatif.
6. **Langkah 6 :** Program menampilkan pesan akhir menggunakan `alert()`.

---

## 5. Standar Antarmuka & Penyajian
- **Tampilan Bersih & Realistis :** Desain portal travel modern tanpa mencantumkan identitas pribadi di antarmuka publik, sesuai standar aplikasi komersial.
- **Tipografi Editorial :** Font *Plus Jakarta Sans* untuk UI, *Newsreader* untuk judul elegan, dan *JetBrains Mono* untuk data angka dan status.
- **Komentar Edukatif Lengkap :** File CSS dan JS dilengkapi catatan penjelasan bahasa Indonesia yang terstruktur untuk mempermudah penjelasan ke dosen saat pengujian.
