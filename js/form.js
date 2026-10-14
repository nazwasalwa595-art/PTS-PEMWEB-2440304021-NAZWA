// form.js - form newsletter dan validasi (Z = 1: email valid + konfirmasi email)
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const confirmInput = document.getElementById('confirm-email');
const emailError = document.getElementById('email-error');
const confirmError = document.getElementById('confirm-email-error');
const formSuccess = document.getElementById('form-success');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // pola dasar: teks@teks.teks

// Menampilkan/menghapus pesan error dan menandai input lewat aria-invalid
function setFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function validateEmail() {
  const value = emailInput.value.trim();
  let message = '';
  if (value === '') {
    message = 'Email wajib diisi.';
  } else if (!emailRegex.test(value)) {
    message = 'Format email belum benar. Contoh: nama@email.com';
  }
  setFieldError(emailInput, emailError, message);
  return message === '';
}

function validateConfirmEmail() {
  const email = emailInput.value.trim().toLowerCase();
  const confirm = confirmInput.value.trim().toLowerCase();
  let message = '';
  if (confirm === '') {
    message = 'Konfirmasi email wajib diisi.';
  } else if (confirm !== email) {
    message = 'Konfirmasi email tidak sama dengan email di atas.';
  }
  setFieldError(confirmInput, confirmError, message);
  return message === '';
}

function handleSubmit(event) {
  event.preventDefault(); // cegah halaman reload
  formSuccess.textContent = '';

  const emailOk = validateEmail();
  const confirmOk = validateConfirmEmail();

  // Input tidak valid tidak boleh diproses: berhenti dan arahkan fokus ke kolom yang salah
  if (!emailOk) {
    emailInput.focus();
    return;
  }
  if (!confirmOk) {
    confirmInput.focus();
    return;
  }

  formSuccess.textContent = `Berhasil! ${emailInput.value.trim()} telah terdaftar di newsletter NazwaStore.`;
  form.reset();
}

export function initForm() {
  form.addEventListener('submit', handleSubmit);
  emailInput.addEventListener('blur', validateEmail);
  confirmInput.addEventListener('blur', validateConfirmEmail);
  emailInput.addEventListener('input', () => {
    if (confirmInput.value !== '') validateConfirmEmail(); // cek ulang jika email diubah
  });
}