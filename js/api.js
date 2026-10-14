// api.js - semua komunikasi dengan REST API
import { API_URL } from './config.js';

// Mengambil daftar produk. Error dilempar ke pemanggil (ditangani di app.js)
export async function fetchProducts() {
  const response = await fetch(API_URL);

  // fetch() hanya gagal jika jaringan putus; HTTP 404/500 tetap dianggap "berhasil",
  // jadi status harus diperiksa lewat response.ok
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data = await response.json();
  if (!Array.isArray(data.products)) {
    throw new Error('Format data dari API tidak sesuai.');
  }
  return data.products; // daftar produk ada di properti "products"
}

// Mengubah error teknis menjadi pesan yang mudah dipahami pengguna
export function getErrorMessage(error) {
  if (error instanceof TypeError) {
    return 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
  }
  if (error.message.startsWith('HTTP Error')) {
    return `Server mengembalikan kesalahan (${error.message}). Coba lagi nanti.`;
  }
  return error.message;
}