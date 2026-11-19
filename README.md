# TSL Gemilang Senja — landing page

Landing page program **TSL Gemilang Senja** (Tarbiyah Sunnah Learning), Astro 7.4, tanpa framework CSS.
Produksi: https://gemilangsenja.my.id (Netlify, konfigurasi di `netlify.toml`).
Konten diambil dari https://tsl.my.id/program/gemilang-senja/.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil statis di dist/
```

## Struktur

| Berkas | Isi |
| --- | --- |
| `src/data/program.ts` | Semua teks, jalur, materi, FAQ, nomor WhatsApp, email. Ubah konten di sini. |
| `src/pages/index.astro` | Susunan bagian halaman dan gayanya. |
| `src/components/Header.astro` | Header lengket, navigasi, menu ponsel. |
| `src/components/DisplaySettings.astro` | Panel "Tampilan": ukuran huruf, mode warna, jarak baris. |
| `src/components/SunsetMark.astro` | Lambang program sebagai SVG (warnanya ikut mode warna). |
| `src/styles/global.css` | Token warna untuk tiap mode, skala huruf, gaya dasar. |
| `public/images/logo-gemilang-senja.jpg` | Logo asli (dipakai di footer dan pratinjau tautan). |

## Aksesibilitas

- Huruf dasar 18px (ponsel) / 20px (layar lebar), dapat diperbesar 115%, 130%, 150%.
- Mode warna: Standar, Kontras tinggi, Merah–hijau (protanopia/deuteranopia), Biru–kuning (tritanopia), Abu-abu.
  Setiap informasi juga ditandai teks/ikon, tidak hanya warna.
- Opsi "Jarak baris lebih lega".
- Pilihan disimpan di `localStorage` (kunci `gs-tampilan`) dan diterapkan sebelum halaman digambar.
- Menghormati `prefers-reduced-motion` dan `prefers-contrast: more`.
- Tautan "Lewati ke isi halaman", fokus keyboard tebal, target sentuh minimal 48px.
