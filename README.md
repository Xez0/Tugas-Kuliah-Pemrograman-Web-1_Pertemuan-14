# Tugas Pemrograman Web 1: Aplikasi Web Manipulasi Variabel & Output Alur JavaScript Berdasarkan Variasi NIM (Pertemuan 14)

Repositori resmi penugasan mata kuliah **Pemrograman Web 1 (Pertemuan 14)** pada Program Studi Teknik Informatika S-1, Fakultas Ilmu Komputer, Universitas Pamulang.

---

## Identitas Mahasiswa
- **Nama Lengkap :** Hadi Sulaiman
- **NIM :** 241011402572
- **Kelas :** 05TPLM003
- **Program Studi :** Teknik Informatika S-1
- **Fakultas :** Ilmu Komputer
- **Perguruan Tinggi :** Universitas Pamulang
- **Mata Kuliah :** Pemrograman Web 1
- **Pertemuan :** 14 (Variabel, Tipe Data, Manipulasi Nilai, dan Output Alur JavaScript)
- **Topik Penugasan :** Sistem Informasi Travel Wisata (*Nusantara Horizon Travel & Expedition*)
- **Pendekatan Desain :** Standar Rekayasa Antarmuka Bersih & Terstruktur (Tipografi Editorial *Newsreader* & *Plus Jakarta Sans*, Angka Monospace Tabular *JetBrains Mono*, Palet Warna Laut Nusantara & Pasir Pantai Hangat)

---

## Petunjuk Penugasan Dosen (Arsip Grup WhatsApp)
Penugasan ini diambil langsung dari instruksi penugasan resmi Pertemuan 14 yang didistribusikan melalui arsip WhatsApp botwaxez pada grup `'Test'` (19 November 2026 jam 00.13 WIB):

> *"Buatlah sebuah website menggunakan HTML, CSS, dan JavaScript yang mampu menampilkan informasi sesuai tema yang ditentukan berdasarkan digit terakhir NIM.*
> *Gunakan lima digit terakhir NIM dari kiri ke kanan untuk menentukan ketentuan program. Jika terdapat angka 0, ganti menjadi 3 dalam perhitungan.*
> *Nilai numerik dapat digunakan sebagai harga, biaya, tarif, atau nilai informasi lain yang relevan dengan tema. Mahasiswa wajib menjelaskan makna setiap nilai dalam program.*
> *Alur Program yang Wajib Dibuat:*
> *1. Saat website dibuka, JavaScript menampilkan pesan selamat datang menggunakan alert().*
> *2. Program mendeklarasikan variabel untuk menyimpan informasi sesuai tema.*
> *3. Program menampilkan informasi awal menggunakan document.write().*
> *4. Program mengubah nilai satu atau beberapa variabel sesuai jumlah perubahan yang ditentukan NIM.*
> *5. Program menampilkan nilai sebelum dan sesudah perubahan agar perbedaannya terlihat.*
> *6. Program menampilkan pesan akhir menggunakan alert()."*

---

## 1. Pemetaan Digit Terakhir NIM terhadap Tema Website
Digit terakhir dari NIM **`241011402572`** adalah angka **`2`**.

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

**Aplikasi yang Dibangun :**  
**Nusantara Horizon Travel &amp; Expedition &mdash; Paket Ekspedisi Taman Nasional Komodo &amp; Pink Beach.**  
Menampilkan sistem informasi reservasi paket wisata bahari Labuan Bajo yang mengelola data destinasi, lokasi wilayah, kategori perjalanan, durasi, biaya tiket perjalanan reguler dan promo, biaya konservasi lingkungan, kuota kapasitas peserta rombongan, serta status keberangkatan kapal phinisi.

---

## 2. Ketentuan 5 Digit Terakhir NIM
Lima digit terakhir dari NIM `241011402572` dibaca dari kiri ke kanan:  
**`0, 2, 5, 7, 2`**

> **Aturan Khusus Soal :**  
> *"Jika terdapat angka 0, ganti menjadi 3 dalam perhitungan."*

- **Posisi Digit 1 :** Asli `0` &rarr; Dihitung **`3`**
- **Posisi Digit 2 :** Asli `2` &rarr; Dihitung **`2`**
- **Posisi Digit 3 :** Asli `5` &rarr; Dihitung **`5`**
- **Posisi Digit 4 :** Asli `7` &rarr; Dihitung **`7`**
- **Posisi Digit 5 :** Asli `2` &rarr; Dihitung **`2`**

---

## 3. Matriks Pemenuhan Ketentuan Program JavaScript

| Posisi Digit NIM | Nilai Digit Hasil Aturan | Rumus Penugasan | Target Implementasi Nyata | Rincian Modul Program pada `script.js` | Status Kepatuhan |
| :--- | :---: | :--- | :--- | :--- | :---: |
| **Digit ke-1** | **3** (dari 0) | Minimal informasi yang ditampilkan = `digit + 3` | **Minimal 6 informasi** (3 + 3 = 6) | Ditampilkan 8 informasi terstruktur: Nama Destinasi, Lokasi Wilayah, Kategori Paket, Durasi Wisata, Biaya Perjalanan, Biaya Retribusi & Konservasi, Kuota Peserta, dan Status Keberangkatan. | **TERPENUHI (&check;)** |
| **Digit ke-2** | **2** | Minimal variabel yang digunakan = `digit + 3` | **Minimal 5 variabel** (2 + 3 = 5) | Dideklarasikan 8 variabel: `namaDestinasi`, `lokasiDestinasi`, `kategoriPaket`, `durasiWisata`, `biayaPerjalanan`, `biayaRetribusi`, `kuotaPeserta`, `statusKeberangkatan`. | **TERPENUHI (&check;)** |
| **Digit ke-3** | **5** | Nilai numerik pertama = `digit x 10` | **Nilai = 50** (5 x 10 = 50) | Variabel `kuotaPeserta = 50` (Makna: Kuota kapasitas maksimal penumpang kapal phinisi rombongan). | **TERPENUHI (&check;)** |
| **Digit ke-4** | **7** | Nilai numerik kedua = `digit x 100` | **Nilai = 700** (7 x 100 = 700) | Variabel `biayaRetribusi = 700000` (Makna: Tarif retribusi konservasi lingkungan dan ranger resmi Rp 700.000). | **TERPENUHI (&check;)** |
| **Digit ke-5** | **2** | Minimal perubahan nilai variabel = `digit` | **Minimal 2 perubahan nilai variabel** | 1) `biayaPerjalanan` diubah dari Rp 3.500.000 menjadi Rp 2.800.000 (diskon promo).<br>2) `kuotaPeserta` diubah dari 50 menjadi 42 orang (setelah 8 peserta mengonfirmasi booking). | **TERPENUHI (&check;)** |

---

## 4. Alur Program yang Wajib Dibuat (6 Langkah Sekuensial)
Program JavaScript pada `script.js` mengeksekusi 6 langkah wajib secara sekuensial:
1. **Langkah 1 :** Saat halaman web dibuka, JavaScript menampilkan dialog selamat datang menggunakan `alert("Selamat Datang di Portal Eksplorasi Travel Wisata - Nusantara Horizon Expedition!");`.
2. **Langkah 2 :** Program mendeklarasikan seluruh variabel penyimpan informasi destinasi dan parameter operasional.
3. **Langkah 3 :** Program merender informasi kondisi awal (sebelum perubahan) menggunakan `document.write()`.
4. **Langkah 4 :** Program memodifikasi nilai variabel `biayaPerjalanan` (diskon promo) dan `kuotaPeserta` (kursi terisi) di memori runtime.
5. **Langkah 5 :** Program menampilkan nilai kondisi terkini (sesudah perubahan) berdampingan dengan kondisi awal, tabel evaluasi diff komparatif, dan kartu penjelasan makna angka numerik 50 dan 700.
6. **Langkah 6 :** Program menampilkan dialog penutup menggunakan `alert("Pembaruan Data Selesai: Nilai variabel biaya perjalanan dan kuota peserta telah berhasil dimodifikasi...");`.

---

## 5. Struktur Berkas Repositori
```
Tugas-Kuliah-Pemrograman-Web-1_Pertemuan-14/
├── index.html                   # Berkas kerangka HTML utama
├── style.css                    # Berkas stylesheet CSS murni terkomentari lengkap
├── script.js                    # Skrip JavaScript utama (eksekusi 6 langkah alur)
├── test_specs.js                # Suite pengujian otomatis spesifikasi NIM (18 assertions)
├── generate_screenshots.py      # Otomatisasi pengujian visual Playwright
├── SPECIFICATION.md             # Lembar spesifikasi teknis akademik penugasan
├── DESIGN.md                    # Dokumentasi arsitektur token desain dan antarmuka
├── PANDUAN_PRESENTASI_DOSEN.md  # Lembar contekan tanya jawab presentasi ke dosen
├── README.md                    # Laporan dokumentasi resmi repositori tugas
├── screenshot_overview.png      # Tangkapan layar tampilan penuh antarmuka
├── screenshot_comparison_grid.png # Tangkapan layar grid komparasi sebelum vs sesudah
├── screenshot_diff_table.png    # Tangkapan layar tabel evaluasi rincian perubahan
└── screenshot_numeric_explanation.png # Tangkapan layar kartu penjelasan nilai numerik
```

---

## 6. Cara Menjalankan Aplikasi & Pengujian
### A. Membuka Halaman Web
Cukup buka berkas `index.html` menggunakan peramban web modern (Google Chrome, Mozilla Firefox, atau Microsoft Edge).  
Dialog `alert()` pembuka akan langsung muncul, diikuti perenderan antarmuka komparasi, dan ditutup oleh dialog `alert()` akhir.

### B. Menjalankan Pengujian Otomatis
Jalankan perintah berikut di terminal:
```bash
node test_specs.js
```
Hasil pengujian akan memverifikasi 18 assertion teknis dengan keluaran `18 / 18 PENGUJIAN BERHASIL (PASS)`.
