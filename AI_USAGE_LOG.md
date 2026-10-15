# AI Usage Log - PTS Pemrograman Web

| | |
| --- | --- |
| **Nama** | Nazwa Salwa Adellia |
| **NIM** | 2440304021 |
| **Aplikasi** | NazwaStore - Interactive General Superstore Dashboard |

## Daftar Penggunaan

| Tanggal | AI/Tool | Tujuan | Prompt/Ringkasan | Bagian Digunakan | Verifikasi/Modifikasi |
| --- | --- | --- | --- | --- | --- |
| 14 Okt 2026 | Claude | Memahami soal dan menyusun rencana kerja | Meminta penjelasan untuk file soal PTS secara bertahap; menanyakan perhitungan varian dari NIM dan struktur folder | Perhitungan varian (README bagian 3), rencana struktur folder | Perhitungan varian saya tulis sendiri pada draf README dan hasilnya sama (X=0, Y=2, Z=1, C=3); struktur JS disesuaikan dengan struktur folder saya (config, api, ui, features, form, app) |
| 14 Okt 2026 | Claude | Review README dan narasi aplikasi | Menanyakan apakah README sudah sesuai; menanyakan apakah data API harus dibuat sendiri | Isi README, narasi data | Mengganti konsep dari CheesyWa (cheesecake) menjadi NazwaStore (toko serba ada) karena data DummyJSON tidak berisi cheesecake; data produk tetap diambil apa adanya dari API |
| 14 Okt 2026 | Claude | Draf kode HTML, CSS, dan JavaScript | Meminta satu persatu kode sesuai varian NIM dan persyaratan teknis, HTML tanpa `div`, berserta dengan penjelasan ataupun komentar agar mudah di pahami fungsi fungnsinya | `index.html`, `css/style.css`, `js/config.js`, `js/api.js`, `js/ui.js`, `js/features.js`, `js/form.js`, `js/app.js` | Menjalankan di localhost (Laragon) dan memeriksa tampilan serta fungsi; mengatur perubahan tampilan dan struktur. |
| 14 Okt 2026 | Gemini | Validasi Form Newsletter client-side | Meminta contoh validasi email menggunakan Regex dan penanganan konfirmasi email. | File `js/form.js`. | Diuji secara mandiri dengan memasukkan email salah/kosong; memastikan pesan error tampil dinamis di bawah input dan `e.preventDefault()` bekerja. |
| 14 Okt 2026 | Claude | Menyusun README dan draf jawaban 10 pertanyaan | Meminta isi README lengkap, jawaban pertanyaan penjelasan kode, dan AI Usage Log | `README.md`, `AI_USAGE_LOG.md` | Mencocokkan jawaban dengan kode yang ada. _(Tambahkan: jawaban nomor 9 dan 10 yang saya tulis dengan pengalaman dan pendapat sendiri)_ |
| 14 Okt 2026 | Gemini | Troubleshooting Git Remote Repository | Menanyakan penyebab error `fatal: not a git repository` dan alur push ke GitHub. | Perintah terminal Git. | Menjalankan perintah `git init`, `git branch -M main`, dan `git remote add origin` di Terminal VS Code hingga berhasil di-push ke GitHub. |
| 14 Okt 2026 | Gemini | Pembuatan aset visual logo toko | Meminta ilustrasi logo resmi yang menggambarkan toko serba ada NazwaStore. | Aset gambar `assets/logo-nazwastore.jpg` dan elemen `<header>`. | Logo berhasil diunduh, diletakkan di folder `assets/`, dan dipanggil secara semantik pada header halaman utama. |