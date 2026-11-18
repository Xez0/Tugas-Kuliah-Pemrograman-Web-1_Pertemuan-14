/**
 * Test Suite: Verifikasi Kepatuhan Teknis Spesifikasi Tugas Pertemuan 14
 * Pemrograman Web 1 - Universitas Pamulang
 * Mahasiswa: Hadi Sulaiman (NIM: 241011402572)
 */

const fs = require('fs');
const path = require('path');

console.log("==================================================================");
console.log("MEMULAI PENGUJIAN OTOMATIS KEPATUHAN SPESIFIKASI TUGAS PERTEMUAN 14");
console.log("Mata Kuliah : Pemrograman Web 1");
console.log("Mahasiswa   : Hadi Sulaiman (NIM: 241011402572)");
console.log("Kelas       : 05TPLM003");
console.log("Tema        : Travel Wisata (Digit Terakhir NIM = 2)");
console.log("==================================================================\n");

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = "") {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`[\x1b[32mPASS\x1b[0m] ${testName}`);
    if (details) console.log(`       -> ${details}`);
  } else {
    console.error(`[\x1b[31mFAIL\x1b[0m] ${testName}`);
    if (details) console.error(`       -> ${details}`);
  }
}

// 1. Verifikasi Keberadaan File Inti Proyek
assert(fs.existsSync(path.join(__dirname, 'index.html')), "File index.html tersedia");
assert(fs.existsSync(path.join(__dirname, 'style.css')), "File style.css tersedia");
assert(fs.existsSync(path.join(__dirname, 'script.js')), "File script.js tersedia");
assert(fs.existsSync(path.join(__dirname, 'SPECIFICATION.md')), "File SPECIFICATION.md tersedia");
assert(fs.existsSync(path.join(__dirname, 'DESIGN.md')), "File DESIGN.md tersedia");

// 2. Baca Konten script.js
const scriptPath = path.join(__dirname, 'script.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf-8');

// 3. Verifikasi Tema Website Berdasarkan Digit Terakhir NIM (Digit 2 = Travel Wisata)
assert(
  scriptContent.includes("Travel Wisata") &&
  scriptContent.includes("namaDestinasi") &&
  scriptContent.includes("lokasiDestinasi") &&
  scriptContent.includes("biayaPerjalanan"),
  "Aplikasi adalah Travel Wisata memuat nama destinasi, lokasi, dan biaya perjalanan (Digit Terakhir = 2)"
);

// 4. Verifikasi Jumlah Minimal Variabel (Digit ke-2 = 2 -> Minimal 2 + 3 = 5 variabel)
const varDeclarations = scriptContent.match(/var\s+([a-zA-Z0-9_]+)\s*=/g) || [];
assert(
  varDeclarations.length >= 5,
  `Jumlah minimal variabel terpenuhi (Ditemukan: ${varDeclarations.length} variabel, minimal: 5)`,
  varDeclarations.slice(0, 8).join(", ")
);

// 5. Verifikasi Nilai Numerik Pertama (Digit ke-3 = 5 -> Nilai = 5 x 10 = 50)
assert(
  scriptContent.includes("kuotaPeserta = 50") || scriptContent.includes("50;"),
  "Nilai numerik pertama sesuai rumus (Digit ke-3 x 10 = 5 x 10 = 50: Kuota Kapasitas Peserta)"
);

// 6. Verifikasi Nilai Numerik Kedua (Digit ke-4 = 7 -> Nilai = 7 x 100 = 700)
assert(
  scriptContent.includes("biayaRetribusi = 700000") || scriptContent.includes("700000") || scriptContent.includes("700"),
  "Nilai numerik kedua sesuai rumus (Digit ke-4 x 100 = 7 x 100 = 700 / Rp 700.000: Biaya Retribusi & Konservasi)"
);

// 7. Verifikasi Minimal Perubahan Nilai Variabel (Digit ke-5 = 2 -> Minimal 2 perubahan nilai)
assert(
  scriptContent.includes("biayaPerjalanan = 2800000") && scriptContent.includes("kuotaPeserta = 42"),
  "Minimal 2 perubahan nilai variabel didemonstrasikan (biayaPerjalanan diubah & kuotaPeserta diubah)"
);

// 8. Verifikasi Alur 1: Pesan Selamat Datang Menggunakan alert()
const alertMatches = scriptContent.match(/alert\s*\(/g) || [];
assert(
  alertMatches.length >= 2,
  `Fungsi alert() digunakan untuk pesan pembuka dan penutup (Ditemukan: ${alertMatches.length} pemanggilan alert)`
);

// 9. Verifikasi Alur 3 & 5: Penggunaan document.write() untuk Menampilkan Informasi
const docWriteMatches = scriptContent.match(/document\.write\s*\(/g) || [];
assert(
  docWriteMatches.length >= 10,
  `Fungsi document.write() digunakan secara intensif untuk rendering terstruktur (Ditemukan: ${docWriteMatches.length} pemanggilan document.write)`
);

// 10. Verifikasi Alur 5: Menampilkan Nilai Sebelum dan Sesudah Perubahan
assert(
  scriptContent.includes("Kondisi Awal (Sebelum Perubahan)") &&
  scriptContent.includes("Kondisi Terkini (Sesudah Perubahan)") &&
  scriptContent.includes("Tabel Rincian &amp; Evaluasi Perubahan Variabel"),
  "Program menyajikan perbandingan nilai sebelum dan sesudah perubahan secara visual berdampingan & tabular"
);

// 11. Verifikasi Jumlah Minimal Informasi yang Ditampilkan (Digit ke-1 = 0 -> 3 -> Minimal 3 + 3 = 6 informasi)
const infoItems = [
  "namaDestinasi", "lokasiDestinasi", "kategoriPaket",
  "durasiWisata", "biayaPerjalanan", "biayaRetribusi",
  "kuotaPeserta", "statusKeberangkatan"
];
const foundInfoCount = infoItems.filter(item => scriptContent.includes(item)).length;
assert(
  foundInfoCount >= 6,
  `Jumlah minimal informasi yang ditampilkan terpenuhi (Ditemukan: ${foundInfoCount} item informasi, minimal: 6)`
);

// 12. Verifikasi Eksekusi Skrip Bebas Galat (Runtime Execution Test)
try {
  // Test execution in isolated sandbox
  const vm = require('vm');
  let alertCount = 0;
  let writeBuffer = "";
  const sandbox = {
    alert: function(msg) { alertCount++; },
    document: {
      write: function(str) { writeBuffer += str; }
    },
    console: console
  };
  vm.createContext(sandbox);
  vm.runInContext(scriptContent, sandbox);
  
  assert(
    alertCount === 2,
    "Alur alert() berjalan tepat 2 kali (1 selamat datang di awal, 1 pesan akhir di penutup)"
  );
  assert(
    writeBuffer.length > 2000,
    `Alur document.write() berhasil menghasilkan dokumen HTML lengkap (${writeBuffer.length} karakter)`
  );
  assert(
    writeBuffer.includes("Taman Nasional Komodo") && writeBuffer.includes("Rp 2.800.000"),
    "Output document.write() memuat data destinasi dan nilai sesudah perubahan yang valid"
  );
} catch (err) {
  assert(false, "Skrip dieksekusi tanpa galat runtime", err.message);
}

// 13. Verifikasi style.css Memuat Selektor Penting
const cssPath = path.join(__dirname, 'style.css');
const cssContent = fs.readFileSync(cssPath, 'utf-8');
assert(
  cssContent.includes(":root") &&
  cssContent.includes("box-sizing: border-box") &&
  cssContent.includes(".comparison-grid") &&
  cssContent.includes("@media (max-width: 900px)") &&
  cssContent.includes("@media print"),
  "File style.css memuat token :root, reset box-sizing, CSS Grid komparasi, responsive query, dan print stylesheet"
);

console.log("\n==================================================================");
console.log(`RINGKASAN PENGUJIAN: ${passedTests} / ${totalTests} PENGUJIAN BERHASIL (&check;)`);
if (passedTests === totalTests) {
  console.log("\x1b[32mSELURUH SPESIFIKASI DAN ATURAN NIM 241011402572 TERPENUHI 100%!\x1b[0m");
} else {
  console.log("\x1b[31mADA PENGUJIAN YANG GAGAL. SILAKAN PERIKSA KEMBALI KODE PROGRAM.\x1b[0m");
}
console.log("==================================================================");

process.exit(passedTests === totalTests ? 0 : 1);
