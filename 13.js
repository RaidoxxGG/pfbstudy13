// ===== JS: daftar loker rusak =====
const rusak = [4, 7];

const rak = document.getElementById("rak");
const pilihan = document.getElementById("nomor");
const hasil = document.getElementById("hasil");

// Buat 10 kotak loker dan 10 opsi select
for (let i = 1; i <= 10; i++) {
  const kotak = document.createElement("div");
  kotak.className = "loker";
  kotak.dataset.nomor = i;
  kotak.textContent = i;

  if (rusak.includes(i)) {
    kotak.classList.add("rusak");
    kotak.innerHTML += "<small>RUSAK</small>";
  }
  rak.appendChild(kotak);

  const opsi = document.createElement("option");
  opsi.value = i;
  opsi.textContent = i;
  pilihan.appendChild(opsi);
}

// Klik kotak loker -> pilih nomor di select
rak.addEventListener("click", function (e) {
  const kotak = e.target.closest(".loker");
  if (!kotak) return;
  pilihan.value = kotak.dataset.nomor;
  tandai();
});

pilihan.addEventListener("change", tandai);

function tandai() {
  document.querySelectorAll(".loker").forEach(function (k) {
    k.classList.toggle("dipilih", k.dataset.nomor === pilihan.value);
  });
  hasil.textContent = "";
}

// Validasi saat submit
document.getElementById("formSewa").addEventListener("submit", function (e) {
  const nomor = Number(pilihan.value);

  if (rusak.includes(nomor)) {
    e.preventDefault();             // cegah submit
    alert("Loker nomor " + nomor + " sedang rusak!");
    return;
  }

  e.preventDefault();               // demo: tampilkan konfirmasi, tanpa reload
  hasil.textContent = "Loker nomor " + nomor + " berhasil disewa.";
});

tandai();
