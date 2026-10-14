// app.js - titik masuk aplikasi: menghubungkan semua modul
import { fetchProducts, getErrorMessage } from './api.js';
import {
  showLoading, showError, showSuccess,
  renderProducts, renderStats, renderFavorites
} from './ui.js';
import {
  calculateStats, initFavorites, getFavoriteIds,
  getFavoriteProducts, toggleFavorite, initView, setView
} from './features.js';
import { initForm } from './form.js';

let products = []; // semua produk dari API

// Alur: tampilkan loading -> ambil data -> hitung statistik -> render -> sukses / error
async function loadData() {
  try {
    showLoading();
    products = await fetchProducts();
    renderStats(calculateStats(products));
    renderProducts(products, getFavoriteIds());
    renderFavorites(getFavoriteProducts(products));
    showSuccess();
  } catch (error) {
    showError(getErrorMessage(error));
  }
}

// Event delegation: satu listener di daftar untuk semua tombol di dalamnya
function handleFavoriteClick(event) {
  const button = event.target.closest('button[data-id]');
  if (button) {
    toggleFavorite(Number(button.dataset.id), products);
  }
}

function init() {
  initFavorites(); // baca favorit dari localStorage
  initView();      // pulihkan mode tampilan terakhir
  initForm();      // pasang event validasi form

  document.getElementById('grid-btn').addEventListener('click', () => setView('grid'));
  document.getElementById('list-btn').addEventListener('click', () => setView('list'));
  document.getElementById('product-list').addEventListener('click', handleFavoriteClick);
  document.getElementById('favorite-list').addEventListener('click', handleFavoriteClick);

  loadData();      // mulai ambil data dari REST API
}

init();