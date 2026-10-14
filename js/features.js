// features.js - logika fitur: analisis data, favorit (Y = 2), toggle Grid/List (C = 3)
import { FAV_KEY, VIEW_KEY } from './config.js';
import { updateFavoriteButtons, renderFavorites, setViewMode } from './ui.js';

let favoriteIds = []; // contoh isi: [1, 5, 12]
let currentView = 'grid';

// ---------- Analisis data (dihitung dengan JavaScript) ----------
export function calculateStats(list) {
  if (list.length === 0) return null;

  const total = list.length;
  const average = list.reduce((sum, p) => sum + p.price, 0) / total;
  const mostExpensive = list.reduce((max, p) => (p.price > max.price ? p : max), list[0]);
  const categoryCount = new Set(list.map(p => p.category)).size; // Set = nilai unik

  return { total, average, mostExpensive, categoryCount };
}

// ---------- Favorit / Bookmark ----------
export function getFavoriteIds() {
  return favoriteIds;
}

// Membaca favorit dari localStorage saat aplikasi dibuka
export function initFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(FAV_KEY));
    favoriteIds = Array.isArray(saved) ? saved : []; // belum ada/rusak -> array kosong
  } catch (error) {
    favoriteIds = [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify(favoriteIds));
  } catch (error) {
    console.error('Gagal menyimpan favorit:', error);
  }
}

// id -> objek produk (find), lalu buang yang tidak ditemukan (filter)
export function getFavoriteProducts(products) {
  return favoriteIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);
}

export function toggleFavorite(id, products) {
  if (favoriteIds.includes(id)) {
    favoriteIds = favoriteIds.filter(favId => favId !== id); // hapus
  } else {
    favoriteIds = [...favoriteIds, id]; // tambah
  }
  saveFavorites();
  updateFavoriteButtons(favoriteIds);
  renderFavorites(getFavoriteProducts(products));
}

// ---------- Toggle Grid/List ----------
// Membaca pilihan tampilan terakhir dari localStorage
export function initView() {
  try {
    currentView = localStorage.getItem(VIEW_KEY) === 'list' ? 'list' : 'grid';
  } catch (error) {
    currentView = 'grid';
  }
  setViewMode(currentView);
}

export function setView(view) {
  currentView = view;
  setViewMode(view);
  try {
    localStorage.setItem(VIEW_KEY, view); // simpan pilihan pengguna
  } catch (error) {
    console.error('Gagal menyimpan tampilan:', error);
  }
}