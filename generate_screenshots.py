import os
import time
from playwright.sync_api import sync_playwright

output_dir = r"C:\Users\DELL\Downloads\tugas-kuliah\Tugas-Kuliah-Pemrograman-Web-1_Pertemuan-14"
html_path = os.path.join(output_dir, "index.html")
chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

print("Memulai pengambilan tangkapan layar browser otomatis...")

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=chrome_exe, headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    
    # Event handler untuk menangani dialog alert() secara otomatis
    alerts_recorded = []
    
    def handle_dialog(dialog):
        print(f"-> Menerima Dialog [{dialog.type}]: {dialog.message}")
        alerts_recorded.append(dialog.message)
        dialog.accept()
        
    page.on("dialog", handle_dialog)
    
    # 1. Buka Halaman index.html
    page.goto(f"file:///{html_path.replace(os.sep, '/')}")
    page.wait_for_timeout(1500)
    
    print(f"Total Alert yang tercatat: {len(alerts_recorded)}")
    
    # 2. Tangkapan Layar Tampilan Keseluruhan (Full Page)
    page.screenshot(path=os.path.join(output_dir, "screenshot_overview.png"), full_page=True)
    print("Screenshot 1: screenshot_overview.png berhasil disimpan.")
    
    # 3. Tangkapan Layar Grid Komparasi (Sebelum vs Sesudah)
    page.locator(".comparison-section").scroll_into_view_if_needed()
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(output_dir, "screenshot_comparison_grid.png"), full_page=False)
    print("Screenshot 2: screenshot_comparison_grid.png berhasil disimpan.")
    
    # 4. Tangkapan Layar Tabel Rincian Perubahan (Diff Table)
    page.locator(".table-section").scroll_into_view_if_needed()
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(output_dir, "screenshot_diff_table.png"), full_page=False)
    print("Screenshot 3: screenshot_diff_table.png berhasil disimpan.")
    
    # 5. Tangkapan Layar Kartu Penjelasan Nilai Numerik NIM
    page.locator(".explanation-card").scroll_into_view_if_needed()
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(output_dir, "screenshot_numeric_explanation.png"), full_page=False)
    print("Screenshot 4: screenshot_numeric_explanation.png berhasil disimpan.")
    
    browser.close()

print("Seluruh tangkapan layar visual antarmuka berhasil diambil secara sempurna!")
