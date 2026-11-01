// input elemen HTML
const form = document.getElementById("formPendaftaran");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const pesan = document.getElementById("pesan");
const jumlahKarakter = document.getElementById("jumlahKarakter");

const hasilNama = document.getElementById("hasilNama");
const hasilEmail = document.getElementById("hasilEmail");
const hasilSesi = document.getElementById("hasilSesi");


// Menghitung karakter nama dan menampilkan ringkasan
nama.addEventListener("input", function () {
    const teksNama = nama.value.trim();

    jumlahKarakter.textContent =
        "Jumlah karakter nama: " + teksNama.length;

    hasilNama.textContent = teksNama || "-";
});


// Menampilkan email secara langsung
email.addEventListener("input", function () {
    hasilEmail.textContent = email.value.trim() || "-";
});


// Menampilkan sesi yang dipilih
sesi.addEventListener("change", function () {
    hasilSesi.textContent = sesi.value || "-";
});


// Validasi ketika tombol daftar diklik
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const teksNama = nama.value.trim();
    const teksEmail = email.value.trim();
    const pilihanSesi = sesi.value;

    // Validasi nama
    if (teksNama.length < 3) {
        pesan.textContent = "Nama minimal harus 3 karakter.";
        pesan.style.color = "red";
        return;
    }

    // Validasi email
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(teksEmail)) {
        pesan.textContent = "Format email tidak valid.";
        pesan.style.color = "red";
        return;
    }

    // Validasi sesi
    if (pilihanSesi === "") {
        pesan.textContent = "Silakan pilih sesi workshop.";
        pesan.style.color = "red";
        return;
    }

    // Jika semua validasi berhasil
    pesan.textContent = "Pendaftaran berhasil!";
    pesan.style.color = "green";
});

//  tombol reset
form.addEventListener("reset", function () {

    pesan.textContent = "";

    jumlahKarakter.textContent = "Jumlah karakter nama: 0";

    hasilNama.textContent = "-";
    hasilEmail.textContent = "-";
    hasilSesi.textContent = "-";

});

