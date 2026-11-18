# Panduan Menjelaskan Kode Tugas ke Dosen (Cheat Sheet Presentasi)
**Mata Kuliah :** Pemrograman Web 1 (Pertemuan 14)  
**Mahasiswa   :** Hadi Sulaiman (NIM: 241011402572) &bull; Kelas: 05TPLM003  
**Aplikasi    :** Portal Informasi Travel Wisata (*Nusantara Horizon*)

---

## 1. Pertanyaan Kunci: "Dari Mana Penentuan Tema dan Rumus Program Ini?"

> **Pertanyaan Dosen :** *"Kenapa kamu memilih tema Travel Wisata dan dari mana angka-angka serta rumusnya didapatkan?"*

### Jawaban Mahasiswa:
> *"Izin menjelaskan, Pak/Bu. Seluruh penentuan tema dan struktur variabel mengacu secara ketat pada tabel penugasan modul Pertemuan 14 berdasarkan **variasi digit NIM saya (241011402572)**:*
> 1. ***Digit Terakhir NIM saya adalah 2***, yang menurut tabel soal diwajibkan membangun **Sistem Informasi Travel Wisata** dengan proses menampilkan nama destinasi, lokasi wilayah, dan biaya perjalanan.
> 2. ***Lima Digit Terakhir NIM saya (0, 2, 5, 7, 2)*** dengan aturan khusus soal: *Jika terdapat angka 0, diganti menjadi 3 dalam perhitungan*.
>    - **Posisi Digit 1 (Nilai 3)** : Jumlah minimal informasi yang ditampilkan = `digit + 3 = 3 + 3 = 6 informasi`. Program menampilkan **8 informasi lengkap** (Destinasi, Lokasi, Kategori, Durasi, Biaya Perjalanan, Biaya Retribusi, Kuota Peserta, dan Status Keberangkatan).
>    - **Posisi Digit 2 (Nilai 2)** : Jumlah minimal variabel yang digunakan = `digit + 3 = 2 + 3 = 5 variabel`. Program menggunakan **8 variabel bermakna**.
>    - **Posisi Digit 3 (Nilai 5)** : Nilai numerik pertama = `digit x 10 = 5 x 10 = 50`. Program mengimplementasikannya sebagai **kuota kapasitas maksimal kapal rombongan = 50 orang**.
>    - **Posisi Digit 4 (Nilai 7)** : Nilai numerik kedua = `digit x 100 = 7 x 100 = 700`. Program mengimplementasikannya sebagai **tarif retribusi konservasi lingkungan = Rp 700.000**.
>    - **Posisi Digit 5 (Nilai 2)** : Jumlah minimal perubahan nilai variabel yang didemonstrasikan = **2 perubahan**. Program mengubah nilai `biayaPerjalanan` (diskon promo) dan `kuotaPeserta` (setelah 8 peserta mengonfirmasi booking)."*

---

## 2. Cara Menjelaskan Logika JavaScript (`script.js`) ke Dosen

### A. Alur Sekuensial 6 Langkah Wajib
> **Pertanyaan Dosen :** *"Coba jelaskan alur jalannya JavaScript dari awal sampai akhir!"*

* **Jawaban Mahasiswa :**
  > *"Program menjalankan 6 langkah sekuensial persis sesuai urutan instruksi penugasan:*
  > 1. **Langkah 1 (`alert()`) :** Saat website dibuka, browser langsung memunculkan dialog modal selamat datang: `alert("Selamat Datang di Portal Eksplorasi Travel Wisata - Nusantara Horizon!");`.
  > 2. **Langkah 2 (Deklarasi Variabel) :** Mendeklarasikan variabel penampung data menggunakan kata kunci `var`, seperti `namaDestinasi`, `biayaPerjalanan = 3500000`, `biayaRetribusi = 700000`, dan `kuotaPeserta = 50`. Kita juga menyimpan salinan nilai awal untuk keperluan komparasi.
  > 3. **Langkah 3 (`document.write()`) :** Merender header, hero banner, dan kartu 'Kondisi Awal (Sebelum Perubahan)' ke dalam dokumen HTML.
  > 4. **Langkah 4 (Modifikasi Nilai) :** Melakukan manipulasi nilai variabel di memori. Variabel `biayaPerjalanan` diubah menjadi `2800000` (diskon promo), `kuotaPeserta` diubah menjadi `42` (kursi terisi), dan `statusKeberangkatan` diperbarui menjadi *Guaranteed Departure*.
  > 5. **Langkah 5 (Komparasi Sebelum vs Sesudah) :** Merender kartu 'Kondisi Terkini (Sesudah Perubahan)' berdampingan dengan kartu awal, diikuti tabel diff evaluasi variabel serta kartu penjelasan makna angka numerik NIM.
  > 6. **Langkah 6 (`alert()`) :** Menampilkan dialog penutup: `alert("Pembaruan Data Selesai: Nilai variabel biaya perjalanan dan kuota peserta telah berhasil dimodifikasi...");` menandakan seluruh alur sukses dieksekusi."*

### B. Mengapa Menggunakan `document.write()`?
> **Pertanyaan Dosen :** *"Kenapa kamu memakai `document.write()` dan bukan `document.getElementById().innerHTML`?"*

* **Jawaban Mahasiswa :**
  > *"`document.write()` adalah API bawaan JavaScript generasi awal untuk menuliskan konten langsung ke dalam aliran dokumen (*document stream*) saat halaman sedang diurai oleh parser browser. Karena instruksi spesifik tugas Pertemuan 14 secara eksplisit meminta: **'Program menampilkan informasi awal menggunakan document.write()'**, maka saya mematuhi instruksi tersebut 100%.  
  Keuntungan saat dipanggil sinkron sebelum dokumen selesai dimuat adalah parser langsung merender elemen HTML yang ditulis bersama stylesheet `style.css` tanpa menimbulkan kedipan (FOUC)."*

---

## 3. Cara Menjelaskan CSS (`style.css`) ke Dosen

### A. Variabel CSS (`:root`)
> **Pertanyaan Dosen :** *"Apa manfaat membuat variabel di `:root`?"*
* **Jawaban :**  
  > *"`:root` merepresentasikan elemen paling atas di DOM (elemen `<html>`). Meletakkan variabel warna dan spasi di `:root` membuatnya bersifat global. Jika klien atau dosen meminta mengganti warna primer navy menjadi biru muda, kita hanya perlu mengubah satu baris kode di `:root`, dan seluruh elemen kartu, border, dan teks akan langsung berubah secara harmonis."*

### B. Model Kotak (`box-sizing: border-box`)
> **Pertanyaan Dosen :** *"Apa tujuan dari aturan `box-sizing: border-box`?"*
* **Jawaban :**  
  > *"Pada model bawaan browser (`content-box`), penambahan padding dan border akan menambah lebar elemen ke luar sehingga sering merusak tata letak multi-kolom. Dengan `border-box`, padding dan border dihitung di **dalam** kotak, sehingga lebar elemen tetap presisi sesuai yang ditentukan grid kita."*

### C. Kapan Flexbox vs CSS Grid Digunakan?
> **Pertanyaan Dosen :** *"Di bagian mana kamu menggunakan Flexbox dan di mana kamu menggunakan CSS Grid?"*
* **Jawaban :**  
  > *"Saya menggunakan **CSS Grid** untuk tata letak dua dimensi (baris dan kolom sekaligus), yaitu pada grid komparasi `.comparison-grid` (`repeat(2, 1fr)`) untuk membagi kartu sebelum dan sesudah secara seimbang, serta pada metrik ringkasan hero banner.  
  Sedangkan **Flexbox** saya gunakan untuk tata letak satu dimensi, seperti menyejajarkan logo dan status pill di header (`justify-content: space-between`), menata setiap baris data `.spec-row` (label di kiri dan nilai di kanan), serta tombol aksi."*

### D. Efek Visual Coret Harga & Highlight Nilai Baru
> **Pertanyaan Dosen :** *"Bagaimana cara kamu menampilkan harga lama yang dicoret dan nilai baru yang disorot?"*
* **Jawaban :**  
  > *"Nilai lama dibungkus class `.strikethrough-old` dengan properti `text-decoration: line-through; color: var(--text-muted);`. Sedangkan nilai baru dibungkus class `.highlight-changed` dengan `color: var(--color-accent); background-color: var(--color-accent-subtle); padding: 2px 6px; border-radius: 4px;` sehingga secara visual pengguna dan penguji langsung melihat perbedaan nilai sebelum dan sesudah perubahan."*

---

## 4. Rangkuman Pertanyaan & Jawaban Singkat (Flashcards)

| Topik | Pertanyaan Singkat | Kunci Jawaban |
| :--- | :--- | :--- |
| **NIM** | Mengapa digit 0 diganti 3? | Aturan khusus penugasan: *"Jika terdapat angka 0, ganti menjadi 3 dalam perhitungan."* |
| **Nilai 50** | Apa makna angka 50? | Kuota maksimal kapasitas penumpang kapal phinisi (Rumus: Digit ke-3 x 10 = 5 x 10). |
| **Nilai 700** | Apa makna angka 700? | Biaya retribusi konservasi lingkungan Taman Nasional Komodo (Rp 700.000, Rumus: Digit ke-4 x 100 = 7 x 100). |
| **Perubahan** | Apa saja yang diubah? | 1) `biayaPerjalanan` dari Rp 3.500.000 menjadi Rp 2.800.000; 2) `kuotaPeserta` dari 50 menjadi 42 orang. |
| **Responsive** | Bagaimana tampilan di HP? | Menggunakan media query `@media (max-width: 900px)` yang mengubah grid 2 kolom menjadi 1 kolom vertikal bertumpuk. |
| **Print** | Bagaimana jika halaman dicetak? | Menggunakan `@media print` yang otomatis menyembunyikan header dan tombol aksi serta mengoptimalkan teks hitam untuk kertas fisik. |
