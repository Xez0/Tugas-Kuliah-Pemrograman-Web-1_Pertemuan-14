/**
 * =============================================================================
 * SCRIPT.JS - SISTEM INFORMASI TRAVEL WISATA (NUSANTARA HORIZON)
 * Penugasan Pemrograman Web 1 (Pertemuan 14) - Universitas Pamulang
 * =============================================================================
 * PEMETAAN VARIABEL SESUAI DIGIT NIM:
 * - Digit Terakhir NIM: 2 -> Tema Website: Travel Wisata
 * - Digit ke-1 NIM (0 -> 3): Minimal 3 + 3 = 6 informasi yang ditampilkan (dibuat 8 info)
 * - Digit ke-2 NIM (2): Minimal 2 + 3 = 5 variabel yang digunakan (dibuat 8 variabel)
 * - Digit ke-3 NIM (5): Nilai numerik pertama = 5 x 10 = 50 (Kuota maksimal 50 orang)
 * - Digit ke-4 NIM (7): Nilai numerik kedua = 7 x 100 = 700 (Biaya retribusi Rp 700.000)
 * - Digit ke-5 NIM (2): Minimal 2 perubahan nilai variabel yang didemonstrasikan
 * =============================================================================
 */

// Penanganan kompatibilitas lingkungan eksekusi (Browser vs Node.js Test Runner)
if (typeof alert === "undefined") {
  var alert = function (pesan) {
    if (typeof console !== "undefined" && console.log) {
      console.log("[ALERT NOTIFIKASI]: " + pesan);
    }
  };
}

if (typeof document === "undefined") {
  var document = {
    buffer: "",
    write: function (konten) {
      this.buffer += konten;
    }
  };
}

// Fungsi Bantu: Memformat angka integer menjadi format mata uang Rupiah standar
function formatRupiah(angka) {
  var reverse = angka.toString().split("").reverse().join("");
  var ribuan = reverse.match(/\d{1,3}/g);
  var hasil = ribuan.join(".").split("").reverse().join("");
  return "Rp " + hasil;
}

/* =============================================================================
   LANGKAH 1: PESAN SELAMAT DATANG MENGGUNAKAN alert()
   =============================================================================
   PENJELASAN UNTUK DOSEN:
   - Sesuai instruksi butir 1: "Saat website dibuka, JavaScript menampilkan pesan
     selamat datang menggunakan alert()."
   - Fungsi `alert()` adalah dialog modal bawaan objek `window` di browser yang
     menghentikan sementara proses eksekusi thread JavaScript sampai pengguna
     menekan tombol "OK".
   ============================================================================= */
alert("Selamat Datang di Portal Eksplorasi Travel Wisata - Nusantara Horizon Expedition!");


/* =============================================================================
   LANGKAH 2: DEKLARASI VARIABEL UNTUK MENYIMPAN INFORMASI SESUAI TEMA
   =============================================================================
   PENJELASAN UNTUK DOSEN:
   - Sesuai ketentuan Digit ke-2 NIM (angka 2):
     Jumlah minimal variabel = digit + 3 = 2 + 3 = 5 variabel.
     Di sini kita mendeklarasikan 8 variabel bermakna untuk mengelola data destinasi.
   - Sesuai ketentuan Digit ke-3 NIM (angka 5):
     Nilai numerik pertama = digit x 10 = 5 x 10 = 50.
     Diimplementasikan pada variabel `kuotaPeserta = 50` (kapasitas rombongan kapal).
   - Sesuai ketentuan Digit ke-4 NIM (angka 7):
     Nilai numerik kedua = digit x 100 = 7 x 100 = 700.
     Diimplementasikan pada variabel `biayaRetribusi = 700000` (Rp 700.000 tiket konservasi).
   - Menggunakan kata kunci `var` / `let` untuk alokasi memori dinamis di JavaScript.
   ============================================================================= */

// 1. Variabel Teks: Identitas Destinasi & Kategori
var namaDestinasi = "Taman Nasional Komodo & Pink Beach";
var lokasiDestinasi = "Labuan Bajo, Nusa Tenggara Timur (NTT)";
var kategoriPaket = "Ekspedisi Bahari & Island Hopping Phinisi";
var durasiWisata = "3 Hari 2 Malam (3D2N)";

// 2. Variabel Numerik: Tarif & Biaya Perjalanan
var biayaPerjalanan = 3500000; // Biaya perjalanan reguler per orang (Rp 3.500.000)
var biayaRetribusi = 700000;   // Nilai numerik kedua: 7 x 100 = 700 (Rp 700.000 retribusi ranger)

// 3. Variabel Numerik: Kapasitas Peserta
var kuotaPeserta = 50;         // Nilai numerik pertama: 5 x 10 = 50 (Kapasitas maksimal 50 orang)

// 4. Variabel Teks: Fasilitas & Status Keberangkatan
var fasilitasUtama = "Kapal Phinisi Semi-VIP, Konsumsi 3x Sehari, Alat Snorkeling, & Ranger";
var statusKeberangkatan = "Pendaftaran Terbuka (Open Registration)";
var kodePaket = "TRV-KOMODO-2026";

// Menyimpan salinan nilai awal untuk keperluan perbandingan di Langkah 5
var biayaPerjalananSebelum = biayaPerjalanan;
var kuotaPesertaSebelum = kuotaPeserta;
var statusKeberangkatanSebelum = statusKeberangkatan;


/* =============================================================================
   LANGKAH 3: MENAMPILKAN INFORMASI AWAL MENGGUNAKAN document.write()
   =============================================================================
   PENJELASAN UNTUK DOSEN:
   - Sesuai instruksi butir 3: "Program menampilkan informasi awal menggunakan document.write()."
   - `document.write()` menulis langsung string HTML ke dalam aliran dokumen (document stream).
   - Sesuai ketentuan Digit ke-1 NIM (angka 0 diganti 3):
     Jumlah minimal informasi yang ditampilkan = digit + 3 = 3 + 3 = 6 informasi.
     Di sini kita menyajikan 8 informasi lengkap secara terstruktur di dalam kartu komparasi kiri.
   ============================================================================= */

// 1. Output Header Navigasi & Identitas Portal Wisata
document.write('<header class="site-header">');
document.write('  <div class="container header-inner">');
document.write('    <div class="brand-group">');
document.write('      <div class="brand-icon-box" aria-hidden="true">');
document.write('        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">');
document.write('          <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1"></path>');
document.write('          <path d="M4 18L12 3l8 15"></path>');
document.write('          <path d="M12 3v15"></path>');
document.write('        </svg>');
document.write('      </div>');
document.write('      <div class="brand-meta">');
document.write('        <span class="brand-super">Maritime &amp; Island Tour</span>');
document.write('        <h1 class="brand-title">Nusantara Horizon Travel</h1>');
document.write('      </div>');
document.write('    </div>');
document.write('    <div class="status-pill">');
document.write('      <span class="status-dot"></span>');
document.write('      <span class="status-label">Terminal Front Desk &bull; Online</span>');
document.write('    </div>');
document.write('  </div>');
document.write('</header>');

// 2. Output Wadah Konten Utama & Hero Banner Destinasi
document.write('<main class="container">');

document.write('  <section class="hero-banner">');
document.write('    <span class="banner-kicker">Paket Ekspedisi Unggulan 2026</span>');
document.write('    <h2 class="banner-heading">' + namaDestinasi + '</h2>');
document.write('    <p class="banner-lead">');
document.write('      Jelajahi keajaiban habitat alami komodo purba, pasir merah muda eksotis, dan pesona bahari ');
document.write('      kepulauan Flores bersama armada kapal phinisi terpercaya dengan fasilitas prima dan pemandu lokal profesional.');
document.write('    </p>');

// 3. Grid Metrik Cepat Destinasi
document.write('    <div class="hero-metrics-grid">');
document.write('      <div class="metric-item">');
document.write('        <span class="metric-label">Wilayah Destinasi</span>');
document.write('        <span class="metric-value">' + lokasiDestinasi + '</span>');
document.write('      </div>');
document.write('      <div class="metric-item">');
document.write('        <span class="metric-label">Durasi Paket Wisata</span>');
document.write('        <span class="metric-value">' + durasiWisata + '</span>');
document.write('      </div>');
document.write('      <div class="metric-item">');
document.write('        <span class="metric-label">Kategori Perjalanan</span>');
document.write('        <span class="metric-value">' + kategoriPaket + '</span>');
document.write('      </div>');
document.write('    </div>');
document.write('  </section>');

// 4. Pembuka Section Komparasi Nilai Variabel
document.write('  <section class="comparison-section">');
document.write('    <div class="section-intro">');
document.write('      <h3 class="section-title">Perbandingan Kondisi Informasi Paket Wisata</h3>');
document.write('      <p class="section-subtitle">');
document.write('        Mendemonstrasikan rekayasa variabel JavaScript: kondisi sebelum versus sesudah perubahan nilai.');
document.write('      </p>');
document.write('    </div>');

document.write('    <div class="comparison-grid">');

// Output Kartu Kolom 1: Kondisi Awal (Sebelum Perubahan)
document.write('      <article class="comp-card">');
document.write('        <div class="comp-card-header initial">');
document.write('          <h4 class="comp-header-title">Kondisi Awal (Sebelum Perubahan)</h4>');
document.write('          <span class="state-badge before">Data Awal</span>');
document.write('        </div>');
document.write('        <div class="comp-card-body">');
document.write('          <div class="spec-list">');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Kode Paket Wisata</span>');
document.write('              <span class="spec-val font-mono">' + kodePaket + '</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Nama Destinasi</span>');
document.write('              <span class="spec-val">' + namaDestinasi + '</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Lokasi Wilayah</span>');
document.write('              <span class="spec-val">' + lokasiDestinasi + '</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Kategori Perjalanan</span>');
document.write('              <span class="spec-val">' + kategoriPaket + '</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Durasi Wisata</span>');
document.write('              <span class="spec-val">' + durasiWisata + '</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Biaya Perjalanan (Reguler)</span>');
document.write('              <span class="spec-val font-mono">' + formatRupiah(biayaPerjalanan) + ' / pax</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Biaya Retribusi &amp; Konservasi</span>');
document.write('              <span class="spec-val font-mono">' + formatRupiah(biayaRetribusi) + '</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Kapasitas Kuota Peserta</span>');
document.write('              <span class="spec-val font-mono">' + kuotaPeserta + ' Orang</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Status Keberangkatan</span>');
document.write('              <span class="spec-val"><span class="tag-badge badge-warning">' + statusKeberangkatan + '</span></span>');
document.write('            </div>');

document.write('          </div>');

document.write('          <div class="total-summary-box">');
document.write('            <div class="total-summary-row">');
document.write('              <span class="total-summary-label">Total Tagihan Awal (Per Pax)</span>');
document.write('              <span class="total-summary-val">' + formatRupiah(biayaPerjalanan + biayaRetribusi) + '</span>');
document.write('            </div>');
document.write('          </div>');

document.write('        </div>');
document.write('      </article>');


/* =============================================================================
   LANGKAH 4: MENGUBAH NILAI VARIABEL SESUAI KETENTUAN NIM
   =============================================================================
   PENJELASAN UNTUK DOSEN:
   - Sesuai ketentuan Digit ke-5 NIM (angka 2):
     "Jumlah minimal perubahan nilai variabel yang harus didemonstrasikan = digit = 2 perubahan."
   - Perubahan Nilai 1 (Variabel Finansial):
     `biayaPerjalanan` diubah dari tarif reguler Rp 3.500.000 menjadi tarif promo liburan Rp 2.800.000
     (pemberian potongan diskon sebesar Rp 700.000).
   - Perubahan Nilai 2 (Variabel Kapasitas):
     `kuotaPeserta` diubah dari 50 orang menjadi 42 orang karena terdapat 8 orang peserta rombongan
     yang telah melakukan pembayaran uang muka (booking terkonfirmasi).
   - Perubahan Pendukung:
     `statusKeberangkatan` diperbarui menjadi "Keberangkatan Terkonfirmasi (Guaranteed Departure)".
   ============================================================================= */

// Modifikasi 1: Pembaruan biaya perjalanan menjadi harga promo diskon
biayaPerjalanan = 2800000;

// Modifikasi 2: Pembaruan sisa kuota ketersediaan peserta
kuotaPeserta = 42;

// Pembaruan status operasional kapal
statusKeberangkatan = "Keberangkatan Terkonfirmasi (Guaranteed Departure)";


/* =============================================================================
   LANGKAH 5: MENAMPILKAN NILAI SEBELUM DAN SESUDAH PERUBAHAN
   =============================================================================
   PENJELASAN UNTUK DOSEN:
   - Sesuai instruksi butir 5: "Program menampilkan nilai sebelum dan sesudah
     perubahan agar perbedaannya terlihat."
   - Di sini kita merender Kartu Kolom 2 (Kondisi Terkini), dilanjutkan dengan
     Tabel Diff Komparatif dan Panel Penjelasan Nilai Numerik (50 & 700).
   ============================================================================= */

// Output Kartu Kolom 2: Kondisi Terkini (Sesudah Perubahan)
document.write('      <article class="comp-card">');
document.write('        <div class="comp-card-header modified">');
document.write('          <h4 class="comp-header-title">Kondisi Terkini (Sesudah Perubahan)</h4>');
document.write('          <span class="state-badge after">Data Terkini</span>');
document.write('        </div>');
document.write('        <div class="comp-card-body">');
document.write('          <div class="spec-list">');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Kode Paket Wisata</span>');
document.write('              <span class="spec-val font-mono">' + kodePaket + '</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Nama Destinasi</span>');
document.write('              <span class="spec-val">' + namaDestinasi + '</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Lokasi Wilayah</span>');
document.write('              <span class="spec-val">' + lokasiDestinasi + '</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Kategori Perjalanan</span>');
document.write('              <span class="spec-val">' + kategoriPaket + '</span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Durasi Wisata</span>');
document.write('              <span class="spec-val">' + durasiWisata + '</span>');
document.write('            </div>');

// Nilai yang berubah 1: Biaya perjalanan (ditampilkan sebelum dicoret & sesudah di-highlight)
document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Biaya Perjalanan (Promo Diskon)</span>');
document.write('              <span class="spec-val font-mono">');
document.write('                <span class="strikethrough-old">' + formatRupiah(biayaPerjalananSebelum) + '</span>');
document.write('                <strong class="highlight-changed">' + formatRupiah(biayaPerjalanan) + '</strong> / pax');
document.write('              </span>');
document.write('            </div>');

document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Biaya Retribusi &amp; Konservasi</span>');
document.write('              <span class="spec-val font-mono">' + formatRupiah(biayaRetribusi) + '</span>');
document.write('            </div>');

// Nilai yang berubah 2: Kuota peserta (ditampilkan sebelum dicoret & sesudah di-highlight)
document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Sisa Kuota Ketersediaan</span>');
document.write('              <span class="spec-val font-mono">');
document.write('                <span class="strikethrough-old">' + kuotaPesertaSebelum + '</span>');
document.write('                <strong class="highlight-changed">' + kuotaPeserta + ' Orang Tersisa</strong>');
document.write('              </span>');
document.write('            </div>');

// Status keberangkatan yang diperbarui
document.write('            <div class="spec-row">');
document.write('              <span class="spec-label">Status Keberangkatan</span>');
document.write('              <span class="spec-val"><span class="tag-badge badge-success">' + statusKeberangkatan + '</span></span>');
document.write('            </div>');

document.write('          </div>');

document.write('          <div class="total-summary-box">');
document.write('            <div class="total-summary-row">');
document.write('              <span class="total-summary-label">Total Tagihan Baru (Hemat Rp 700.000)</span>');
document.write('              <span class="total-summary-val" style="color: var(--color-accent);">' + formatRupiah(biayaPerjalanan + biayaRetribusi) + '</span>');
document.write('            </div>');
document.write('          </div>');

document.write('        </div>');
document.write('      </article>');

document.write('    </div>'); // Penutup .comparison-grid
document.write('  </section>'); // Penutup .comparison-section


// 5. Output Tabel Komparasi Rincian Perubahan (Diff Table)
document.write('  <section class="table-section">');
document.write('    <div class="section-intro">');
document.write('      <h3 class="section-title">Tabel Rincian &amp; Evaluasi Perubahan Variabel</h3>');
document.write('      <p class="section-subtitle">Ringkasan eksplisit parameter variabel sebelum dan sesudah manipulasi logika program.</p>');
document.write('    </div>');

document.write('    <div class="table-wrapper">');
document.write('      <table class="data-table">');
document.write('        <thead>');
document.write('          <tr>');
document.write('            <th>No</th>');
document.write('            <th>Nama Variabel JavaScript</th>');
document.write('            <th>Tipe Data</th>');
document.write('            <th>Nilai Sebelum Perubahan</th>');
document.write('            <th>Nilai Sesudah Perubahan</th>');
document.write('            <th>Keterangan / Dampak Operasional</th>');
document.write('          </tr>');
document.write('        </thead>');
document.write('        <tbody>');

document.write('          <tr>');
document.write('            <td><strong>1</strong></td>');
document.write('            <td><code>biayaPerjalanan</code></td>');
document.write('            <td><span class="tag-badge badge-primary">Number</span></td>');
document.write('            <td class="font-mono text-muted">' + formatRupiah(biayaPerjalananSebelum) + '</td>');
document.write('            <td class="font-mono"><strong class="highlight-changed">' + formatRupiah(biayaPerjalanan) + '</strong></td>');
document.write('            <td>Penerapan potongan diskon promo musim liburan sebesar <strong>Rp 700.000</strong> per peserta.</td>');
document.write('          </tr>');

document.write('          <tr>');
document.write('            <td><strong>2</strong></td>');
document.write('            <td><code>kuotaPeserta</code></td>');
document.write('            <td><span class="tag-badge badge-primary">Number</span></td>');
document.write('            <td class="font-mono text-muted">' + kuotaPesertaSebelum + ' Orang (Kapasitas Awal)</td>');
document.write('            <td class="font-mono"><strong class="highlight-changed">' + kuotaPeserta + ' Orang</strong></td>');
document.write('            <td>Pengurangan <strong>8 kursi</strong> setelah konfirmasi pembayaran uang muka rombongan peserta.</td>');
document.write('          </tr>');

document.write('          <tr>');
document.write('            <td><strong>3</strong></td>');
document.write('            <td><code>statusKeberangkatan</code></td>');
document.write('            <td><span class="tag-badge badge-primary">String</span></td>');
document.write('            <td class="text-muted">' + statusKeberangkatanSebelum + '</td>');
document.write('            <td><span class="tag-badge badge-success">' + statusKeberangkatan + '</span></td>');
document.write('            <td>Ambang batas kuota minimal terpenuhi sehingga jadwal trip dipastikan berlayar.</td>');
document.write('          </tr>');

document.write('        </tbody>');
document.write('      </table>');
document.write('    </div>');
document.write('  </section>');


// 6. Output Panel Penjelasan Makna Nilai Numerik Berdasarkan NIM
document.write('  <section class="explanation-card">');
document.write('    <h4 class="explanation-title">');
document.write('      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">');
document.write('        <circle cx="12" cy="12" r="10"></circle>');
document.write('        <line x1="12" y1="16" x2="12" y2="12"></line>');
document.write('        <line x1="12" y1="8" x2="12.01" y2="8"></line>');
document.write('      </svg>');
document.write('      Penjelasan Makna Nilai Numerik Program');
document.write('    </h4>');
document.write('    <p class="exp-desc">');
document.write('      Sesuai instruksi soal: <em>"Mahasiswa wajib menjelaskan makna setiap nilai numerik dalam program."</em>');
document.write('      Berikut adalah dekonstruksi fungsi bisnis dari kedua nilai numerik yang diturunkan dari rumus variasi digit:');
document.write('    </p>');

document.write('    <div class="explanation-grid">');

document.write('      <div class="explanation-item">');
document.write('        <span class="exp-badge">Nilai Numerik Pertama (Rumus: Digit ke-3 x 10 = 5 x 10)</span>');
document.write('        <div class="exp-val">50 (Satuan: Orang / Pax)</div>');
document.write('        <p class="exp-desc">');
document.write('          <strong>Makna Program :</strong> Merepresentasikan <strong>kapasitas kuota maksimal penumpang</strong> ');
document.write('          pada kapal phinisi ekspedisi bahari semi-VIP untuk menjaga kenyamanan dan standar keselamatan berlayar di laut Flores.');
document.write('        </p>');
document.write('      </div>');

document.write('      <div class="explanation-item">');
document.write('        <span class="exp-badge">Nilai Numerik Kedua (Rumus: Digit ke-4 x 100 = 7 x 100)</span>');
document.write('        <div class="exp-val">700 (Satuan: Ribuan Rupiah &rarr; Rp 700.000)</div>');
document.write('        <p class="exp-desc">');
document.write('          <strong>Makna Program :</strong> Merepresentasikan <strong>tarif retribusi konservasi lingkungan, asuransi bahari,</strong> ');
document.write('          dan jasa pemandu ranger resmi Balai Taman Nasional Komodo yang wajib dilunasi oleh setiap wisatawan.');
document.write('        </p>');
document.write('      </div>');

document.write('    </div>');
document.write('  </section>');


// 7. Output Bilah Tombol Aksi & Interaksi
document.write('  <div class="actions-bar">');
document.write('    <button type="button" class="btn btn-primary" onclick="window.print()">');
document.write('      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">');
document.write('        <polyline points="6 9 6 2 18 2 18 9"></polyline>');
document.write('        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>');
document.write('        <rect x="6" y="14" width="12" height="8"></rect>');
document.write('      </svg>');
document.write('      Cetak Ringkasan Paket (Print)');
document.write('    </button>');
document.write('    <button type="button" class="btn btn-secondary" onclick="location.reload()">');
document.write('      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">');
document.write('        <polyline points="23 4 23 10 17 10"></polyline>');
document.write('        <polyline points="1 20 1 14 7 14"></polyline>');
document.write('        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>');
document.write('      </svg>');
document.write('      Ulangi Simulasi Alur (Reload)');
document.write('    </button>');
document.write('  </div>');

document.write('</main>');

// 8. Output Footer Sistem
document.write('<footer class="site-footer">');
document.write('  <div class="container footer-inner">');
document.write('    <p class="footer-copy">&copy; 2026 Nusantara Horizon Travel &amp; Expedition. Seluruh hak cipta dilindungi.</p>');
document.write('    <p class="footer-meta">Front Desk Reservation System &bull; Layanan Terintegrasi Informasi Wisata Bahari.</p>');
document.write('  </div>');
document.write('</footer>');


/* =============================================================================
   LANGKAH 6: PESAN AKHIR MENGGUNAKAN alert()
   =============================================================================
   PENJELASAN UNTUK DOSEN:
   - Sesuai instruksi butir 6: "Program menampilkan pesan akhir menggunakan alert()."
   - Menandai bahwa proses eksekusi alur manipulasi variabel JavaScript telah
     selesai dijalankan secara sempurna dari langkah 1 sampai langkah 6.
   ============================================================================= */
alert("Pembaruan Data Selesai: Nilai variabel biaya perjalanan dan kuota peserta telah berhasil dimodifikasi sesuai ketentuan penugasan.");
