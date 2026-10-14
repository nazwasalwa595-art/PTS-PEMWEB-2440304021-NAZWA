# 🛍️ NazwaStore - Interactive General Superstore Dashboard

> **Mini Project Front-End Individual** — Penilaian Tengah Semester (PTS) Pemrograman Web  
> Program Studi Teknik Komputer, Universitas Borneo Tarakan

---

## 1. Identitas Mahasiswa

| Informasi | Keterangan |
| --- | --- |
| **Nama Lengkap** | Nazwa Salwa Adellia |
| **NIM** | 2440304021 |
| **Kelas** | Teknik Komputer A1 |
| **Mata Kuliah** | Pemrograman Web |

---

## 2. Deskripsi Aplikasi

**NazwaStore** adalah dashboard katalog Toko Serba Ada (General Superstore) interaktif. Aplikasi ini dibangun dengan HTML5 semantik, CSS Responsive, dan Vanilla JavaScript ES6 Modules. Data produk diambil secara dinamis dari REST API publik DummyJSON. NazwaStore memungkinkan pengguna untuk memantau analisis statistik produk secara otomatis, menyimpan item favorit ke fitur bookmark (*localStorage*), beralih tampilan katalog (Grid View atau List View), serta mendaftar keanggotaan newsletter melalui form yang dilengkapi validasi *client-side*.

---

## 3. Perhitungan Variasi Soal Berdasarkan NIM

- **NIM:** `2440304021`
- **3 Digit Terakhir NIM:** `021` $\rightarrow$ **X = 0, Y = 2, Z = 1**
- **Perhitungan Challenge (C):**  
  $$S = X + Y + Z = 0 + 2 + 1 = 3$$  
  $$C = S \bmod 4 = 3 \bmod 4 = \mathbf{3}$$

| Komponen Soal | Kode Varian | Hasil Varian & Spesifikasi |
| --- | --- | --- |
| **Dataset / API** | $X = 0$ | **Products Dashboard** (`https://dummyjson.com/products`) |
| **Fitur Utama** | $Y = 2$ | **Favorite / Bookmark** menggunakan `localStorage` |
| **Form & Validasi** | $Z = 1$ | **Email Valid + Konfirmasi Email** (Newsletter) |
| **Challenge** | $C = 3$ | **Toggle Grid / List View** (disimpan di `localStorage`) |

---

## 4. Endpoint REST API

| Method | Endpoint URL | Kegunaan |
| --- | --- | --- |
| `GET` | `https://dummyjson.com/products` | Mengambil data katalog produk serba ada untuk ditampilkan di DOM dan dihitung statistiknya. |

---

## 5. Fitur Utama & Implementasi Teknis

1. **Katalog Produk Dinamis (Fetch API & DOM Manipulation):**
   - Pengambilan data produk menggunakan `async/await` dan `try...catch`.
   - Kartu produk dirender secara dinamis menggunakan pembuatan elemen DOM aman (`createElement` dan `textContent`) untuk mencegah kerentanan XSS.
2. **Fitur Bookmark / Favorit ($Y = 2$):**
   - Pengguna dapat menandai atau menghapus produk favorit.
   - Daftar ID produk favorit disimpan pada `localStorage` agar tidak hilang saat halaman dimuat ulang.
3. **Challenge Toggle Grid/List View ($C = 3$):**
   - Pengguna dapat beralih antara tampilan *Grid View* dan *List View*.
   - Preferensi tampilan yang dipilih disimpan di `localStorage` dan dipulihkan otomatis saat aplikasi dibuka kembali.
4. **Validasi Form Newsletter ($Z = 1$):**
   - Memeriksa format email menggunakan *Regular Expression* (`emailRegex`).
   - Memastikan bidang konfirmasi email terisi dan nilainya sama dengan email utama.
   - Pesan kesalahan ditampilkan langsung dalam bentuk teks di bawah input terkait (`aria-live="polite"`).
5. **Analisis Data Otomatis (JavaScript Array Methods):**
   - Menghitung total item produk.
   - Menghitung rata-rata harga produk menggunakan method `reduce()`.
   - Menentukan item produk dengan harga termahal secara dinamis.
6. **Penanganan UI States:**
   - **Loading State:** Menampilkan indikator memuat data saat fetch berlangsung.
   - **Success State:** Merender kartu produk beserta statistik data.
   - **Error State:** Menampilkan pesan kegagalan jika jaringan terputus atau endpoint bermasalah.

---

## 6. Desain Visual & Palet Warna (NazwaStore Style)

| Nama Warna | Kode Hex | Penggunaan Antarmuka |
| --- | --- | --- |
| **Navy Blue** | `#1e3a8a` | Warna utama header, tombol aktif, dan aksen brand |
| **Amber Gold** | `#f59e0b` | Warna sorotan bookmark dan aksen statistik |
| **Page Background** | `#f8fafc` | Latar belakang halaman bersih dan modern |
| **Text Dark** | `#0f172a` | Warna teks utama berkontras tinggi |

---

## 7. Cara Menjalankan Project

1. Pastikan server lokal **Laragon** aktif.
2. Salin folder proyek ke direktori `C:\laragon\www\PTS_PEMWEB_2440304021_NAZWASALWAADELLIA`.
3. Buka peramban (*browser*) dan akses URL:
   ```text
   http://localhost/PTS_PEMWEB_2440304021_NAZWASALWAADELLIA/