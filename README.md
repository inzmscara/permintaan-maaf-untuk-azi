# Maaf Ka Ika 💌 — React

Halaman permintaan maaf interaktif buat Ka Ika, versi React 18 + Vite.

**Alur halaman (4 tahap):**
1. **Amplop tersegel** — "Untuk: Ka Ika 💌", ketuk buat buka
2. **Surat permintaan maaf** — dari kouu, soal celetukan "yaahh ada ka ika" pas join voice
3. **Pilihan** — tombol "Maafin dong 🥺" vs "Nggak mau 😤" (tombol "Nggak mau"-nya mengecil & memohon-mohon tiap diklik, terus nyerah)
4. **Perayaan** — confetti + "Yeayy, makasih Ka Ikaa!" + Voucher Mabar yang berlaku selamanya ♾️

Mode terang/gelap otomatis ngikutin sistem HP/laptop. Tampilan rapi di HP maupun desktop.

## Cara jalanin (Windows)

1. Extract file zip ini ke folder baru
2. Buka folder itu di terminal (PowerShell / CMD)
3. `npm install`
4. `npm run dev`
5. Buka link yang muncul (biasanya `http://localhost:5173`)

## Script lain

- `npm run build` — build versi production ke folder `dist/`
- `npm run preview` — coba hasil build production secara lokal

## Catatan

- Butuh Node.js versi 18+ (cek dengan `node --version`)
- Confetti pakai package `canvas-confetti` (sudah termasuk di `npm install`)
