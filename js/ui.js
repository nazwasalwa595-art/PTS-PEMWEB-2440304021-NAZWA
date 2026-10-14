// ui.js - menampilkan data ke DOM (tidak menyimpan state aplikasi)
const productList = document.getElementById('product-list');
const favoriteList = document.getElementById('favorite-list');
const favoriteEmpty = document.getElementById('favorite-empty');
const statsList = document.getElementById('stats-container');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');

// ---------- State: loading, error, sukses ----------
export function showLoading() {
  loadingEl.hidden = false;
  errorEl.hidden = true;
  productList.replaceChildren(); // kosongkan daftar saat memuat
}

export function showError(message) {
  loadingEl.hidden = true;
  errorEl.hidden = false;
  errorEl.textContent = message;
}

export function showSuccess() {
  loadingEl.hidden = true;
  errorEl.hidden = true;
}

// ---------- Produk ----------
export function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

function createFavButton(product, isFavorite) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'fav-btn';
  button.dataset.id = product.id; // id disimpan di atribut data-id
  button.textContent = 'Favorit';
  button.setAttribute('aria-label', `Favorit ${product.title}`);
  button.setAttribute('aria-pressed', String(isFavorite));
  return button;
}

// Mengubah satu objek JSON produk menjadi elemen kartu di DOM
function createProductCard(product, isFavorite) {
  const card = document.createElement('article');
  card.className = 'product-card';

  const img = document.createElement('img');
  img.src = product.thumbnail;
  img.alt = product.title; // alt bermakna untuk screen reader
  img.loading = 'lazy';

  const category = document.createElement('p');
  category.className = 'product-category';
  category.textContent = product.category;

  const title = document.createElement('h3');
  title.textContent = product.title; // textContent aman dari injeksi HTML

  const rating = document.createElement('p');
  rating.className = 'product-rating';
  rating.textContent = `\u2605 ${product.rating} / 5`;

  const price = document.createElement('p');
  price.className = 'product-price';
  price.textContent = formatPrice(product.price);

  card.append(img, category, title, rating, price, createFavButton(product, isFavorite));
  return card;
}

export function renderProducts(list, favoriteIds) {
  const items = list.map(product => {
    const li = document.createElement('li');
    li.append(createProductCard(product, favoriteIds.includes(product.id)));
    return li;
  });

  if (items.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'Tidak ada produk untuk ditampilkan.';
    items.push(empty);
  }
  productList.replaceChildren(...items);
}

// ---------- Statistik ----------
function createStatItem(label, value) {
  const li = document.createElement('li');
  li.className = 'stat-card';

  const labelEl = document.createElement('p');
  labelEl.className = 'stat-label';
  labelEl.textContent = label;

  const valueEl = document.createElement('p');
  valueEl.className = 'stat-value';
  valueEl.textContent = value;

  li.append(labelEl, valueEl);
  return li;
}

export function renderStats(stats) {
  if (!stats) return;
  statsList.replaceChildren(
    createStatItem('Total Produk', stats.total),
    createStatItem('Rata-rata Harga', formatPrice(stats.average)),
    createStatItem('Produk Termahal', `${stats.mostExpensive.title} (${formatPrice(stats.mostExpensive.price)})`),
    createStatItem('Jumlah Kategori', stats.categoryCount)
  );
}

// ---------- Favorit ----------
// Memperbarui status semua tombol favorit tanpa merender ulang kartu
export function updateFavoriteButtons(favoriteIds) {
  document.querySelectorAll('.fav-btn').forEach(btn => {
    const isFav = favoriteIds.includes(Number(btn.dataset.id));
    btn.setAttribute('aria-pressed', String(isFav));
  });
}

export function renderFavorites(favProducts) {
  favoriteEmpty.textContent = 'Belum ada produk favorit. Tekan tombol Favorit pada produk.';
  favoriteEmpty.hidden = favProducts.length > 0;

  const items = favProducts.map(product => {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = product.thumbnail;
    img.alt = ''; // dekoratif: nama produk sudah ada di teks sebelahnya

    const title = document.createElement('strong');
    title.textContent = product.title;

    const price = document.createElement('span');
    price.textContent = formatPrice(product.price);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'remove-btn';
    removeBtn.dataset.id = product.id;
    removeBtn.textContent = 'Hapus';
    removeBtn.setAttribute('aria-label', `Hapus ${product.title} dari favorit`);

    li.append(img, title, price, removeBtn);
    return li;
  });
  favoriteList.replaceChildren(...items);
}

// ---------- Mode tampilan Grid/List ----------
export function setViewMode(view) {
  productList.className = `product-list view-${view}`;
  gridBtn.setAttribute('aria-pressed', String(view === 'grid'));
  listBtn.setAttribute('aria-pressed', String(view === 'list'));
}