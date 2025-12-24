# 🎂💕 Panduan Personalisasi Web Ulang Tahun

## 📁 Menambahkan File Audio

### 1. Musik Latar Belakang (Birthday Music)
1. Siapkan file musik instrumental ulang tahun Anda (format: `.mp3`, `.ogg`, atau `.wav`)
2. Rename file menjadi: `birthday-music.mp3`
3. Copy file ke folder: `public/assets/`
4. Jika folder `assets` belum ada, buat dulu:
   ```
   public/
     └── assets/
         └── birthday-music.mp3
   ```

**Rekomendasi:** 
- Gunakan musik instrumental yang lembut dan romantis
- Durasi ideal: 2-3 menit
- Format: MP3 dengan bitrate 128kbps sudah cukup

### 2. Sound Effect Tiup Lilin (Blow Sound)
1. Siapkan file sound effect tiupan (format: `.mp3`, `.ogg`, atau `.wav`)
2. Rename file menjadi: `blow-sound.mp3`
3. Copy file ke folder: `public/assets/`

**Rekomendasi:**
- Gunakan sound effect pendek (1-2 detik)
- Bisa download gratis dari: [Freesound.org](https://freesound.org)
- Search keyword: "blow", "wind blow", atau "candle blow"

## 🖼️ Menambahkan Foto

### Cara Menambahkan Foto ke Background atau Komponen

1. **Siapkan foto Anda** (format: `.jpg`, `.png`, atau `.webp`)
2. Copy foto ke folder: `public/assets/` atau `src/assets/`
3. Rename sesuai kebutuhan, misalnya: `photo-enjelly.jpg`

### Contoh Penggunaan Foto di Komponen

#### Menambahkan foto di BirthdayPage:

Edit file `src/components/BirthdayPage.tsx` dan tambahkan:

```tsx
// Di dalam return statement, tambahkan sebelum header:
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="text-center mb-8"
>
  <img 
    src="/assets/photo-enjelly.jpg" 
    alt="Enjelly"
    className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto border-8 border-pink-300 shadow-2xl object-cover"
  />
</motion.div>
```

#### Menambahkan foto sebagai background:

Edit file `src/components/BirthdayPage.tsx`:

```tsx
// Di bagian return, update className div utama:
<div className="min-h-screen relative overflow-x-hidden">
  {/* Background image dengan overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url(/assets/background-photo.jpg)',
      opacity: 0.2
    }}
  />
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-pink-100/90 via-purple-50/90 to-pink-100/90" />
  
  {/* Konten lainnya tetap sama... */}
</div>
```

## ✏️ Edit Pesan Surat Cinta

Edit file: `src/data/message.json`

```json
{
  "from": "Nama Anda",
  "to": "Nama Pacar Anda",
  "title": "Judul Surat yang Romantis",
  "messages": [
    "Paragraf pertama...",
    "Paragraf kedua...",
    "Dan seterusnya..."
  ]
}
```

**Tips:**
- Setiap elemen di array `messages` akan menjadi satu paragraf
- Gunakan string kosong `""` untuk membuat jarak antar paragraf
- Emoji didukung penuh! 💕✨🌸

## 🎨 Kustomisasi Warna dan Font

### Mengubah Warna Tema

Edit file: `tailwind.config.js`

```js
colors: {
  pink: {
    // Sesuaikan nilai hex untuk warna yang berbeda
    50: '#fef1f7',   // Paling terang
    500: '#fb3d8a',  // Medium
    900: '#8d113c',  // Paling gelap
  },
},
```

### Mengubah Font

1. Pilih font dari [Google Fonts](https://fonts.google.com/)
2. Edit `index.html` dan update link Google Fonts
3. Edit `tailwind.config.js` di bagian `fontFamily`

## 🚀 Menjalankan Proyek

```bash
# Install dependencies (hanya sekali)
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## 📱 Tips Tambahan

1. **Optimasi Foto:**
   - Kompres foto sebelum upload (gunakan [TinyPNG](https://tinypng.com/))
   - Ukuran ideal untuk foto profil: 500x500px
   - Ukuran ideal untuk background: 1920x1080px

2. **Audio Tips:**
   - Pastikan file audio tidak terlalu besar (maksimal 5MB)
   - Test di berbagai browser (Chrome, Firefox, Safari)
   - Beberapa browser memblokir autoplay, jadi ada tombol play manual

3. **Mobile Responsive:**
   - Web sudah dioptimasi untuk mobile
   - Test di berbagai ukuran layar sebelum dipresentasikan

4. **Deploy ke Internet:**
   - Bisa menggunakan Vercel, Netlify, atau GitHub Pages (gratis!)
   - Tutorial: [Deploy Vite to Vercel](https://vercel.com/docs/frameworks/vite)

## 🎁 Bonus: Menambahkan Halaman Tambahan

Jika ingin menambahkan halaman gallery foto atau video:

1. Buat file baru: `src/components/GalleryPage.tsx`
2. Import dan gunakan di `App.tsx`
3. Tambahkan state untuk navigation antar halaman

## ❤️ Selamat Berkreasi!

Semoga web ulang tahun ini membuat Enjelly (Cibey) bahagia! 🎂✨

---

**Butuh bantuan?** Jangan ragu untuk bertanya atau modifikasi kode sesuai kebutuhan Anda!
