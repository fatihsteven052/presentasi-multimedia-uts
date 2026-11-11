# Proyek UTS Multimedia — Dampak Multimedia di Kehidupan Modern

**Nama:** Moh Fatih Nuruddin  
**NIM:** 052  
**Institusi:** Universitas PGRI Ronggolawe (Unirow)  
**Mata kuliah:** IF562528 — Multimedia  
**Jenis proyek:** Opsi 1 — Presentasi Interaktif

## Deskripsi
Presentasi web interaktif yang membahas penggunaan multimedia di bidang pendidikan, kesehatan, dan hiburan. Situs memiliki navigasi slide, daftar slide, animasi transisi, tampilan responsif, penjelajah elemen multimedia, dan mini kuis dengan umpan balik.

## Topik
1. Pendahuluan dan tujuan
2. Pengertian multimedia
3. Lima elemen multimedia
4. Penerapan di pendidikan
5. Penerapan di kesehatan
6. Penerapan di hiburan
7. Manfaat dan tantangan
8. Prinsip desain efektif
9. Kuis interaktif
10. Tren, kesimpulan, dan referensi

## Struktur file
- `index.html` — struktur dan konten presentasi
- `style.css` — gaya visual dan responsive layout
- `script.js` — navigasi dan fitur interaktif
- `README.md` — dokumentasi proyek

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka folder proyek di VS Code.
3. Buka `index.html` di browser, atau jalankan menggunakan ekstensi Live Server.
4. Gunakan tombol panah pada bagian bawah atau tombol keyboard kiri/kanan untuk berpindah slide.
5. Klik **Daftar slide** untuk melompat ke bagian tertentu.

Tidak membutuhkan database atau instalasi package. Font Google Fonts memerlukan internet; jika offline, situs memakai font sans-serif cadangan.

## Teknologi
- HTML5
- CSS3 (Grid, Flexbox, media queries, reduced-motion support)
- JavaScript vanilla
- Google Fonts (DM Sans dan Space Grotesk)

## Interaktivitas
- Navigasi slide menggunakan tombol dan keyboard.
- Panel daftar slide.
- Penjelajah elemen multimedia dengan tab.
- Mini kuis tiga pertanyaan dengan umpan balik jawaban.
- Animasi transisi yang menghormati preferensi reduced motion.

## Keputusan desain
Palet warna gelap dengan aksen mint, biru, pink, dan kuning dipilih untuk membangun kontras visual. Font display digunakan pada judul dan font sans-serif untuk isi. Layout menggunakan grid dan media queries supaya dapat menyesuaikan desktop maupun layar ponsel.

## Tantangan dan solusi
- **Tantangan:** banyak materi bisa membuat slide penuh teks.  
  **Solusi:** materi dibagi ke dalam kartu, daftar, dan bagian singkat.
- **Tantangan:** presentasi harus interaktif.  
  **Solusi:** navigasi keyboard, daftar slide, tab elemen, dan kuis dibuat menggunakan JavaScript.
- **Tantangan:** layar ponsel lebih sempit.  
  **Solusi:** grid diubah menjadi satu kolom pada breakpoint kecil.

## Referensi
1. W3C Web Accessibility Initiative — https://www.w3.org/WAI/fundamentals/accessibility-intro/
2. MDN Web Docs — https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility
3. Nielsen Norman Group — https://www.nngroup.com/articles/
4. web.dev — https://web.dev/learn/performance/
5. W3C WCAG 2.2 Understanding — https://www.w3.org/WAI/WCAG22/Understanding/

Referensi tersebut menjadi bacaan pendukung untuk aksesibilitas dan desain web. Klaim khusus atau data statistik tambahan harus diberi sumber yang sesuai.

## Cara publikasi
### GitHub Pages
1. Buat repository baru di GitHub, misalnya `uts-multimedia-interaktif`.
2. Unggah `index.html`, `style.css`, `script.js`, dan `README.md` ke root repository.
3. Buka **Settings → Pages**.
4. Pilih deploy dari branch `main` dan folder `/ (root)`, lalu simpan.
5. Tunggu proses selesai dan uji URL yang diberikan GitHub Pages.

### Checklist sebelum dikumpulkan
- [ ] Ubah nama/NIM jika ada format resmi yang berbeda.
- [ ] Baca seluruh slide dan sesuaikan dengan penjelasan pribadi.
- [ ] Uji semua tombol dan kuis.
- [ ] Uji tampilan pada ponsel dan desktop.
- [ ] Ambil 5–10 screenshot hasil akhir.
- [ ] Publikasikan website dan pastikan URL dapat dibuka.
- [ ] Buat repository publik dan periksa README.
