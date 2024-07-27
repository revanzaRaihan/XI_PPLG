// ANIMASI FLOWCHART
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.flowchart-item, .branch');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const run = () => {
        items.forEach((item, index) => {
            if (isInViewport(item)) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 150);
            }
        });
    };

    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);

    document.querySelector('.containerMain').addEventListener('scroll', run);
});
// ANIMASI FLOWCHART

// SISTEM JADWAL
const mapel = {
  Senin: ["PKK", "ISTIRAHAT", "AGAMA ISLAM", "ISHOMA", "B.INDO"],
  Selasa: ["BASIS DATA", "MATEMATIKA", "PPLG"],
  Rabu: ["PJOK", "PBO", "PPL"],
  Kamis: ["PBO", "PKK", "PPLG"],
  Jumat: ["MATEMATIKA", "PKN", "B.ING"],
  Sabtu: ["None", "None", "None", "None", "None"],
  Minggu: ["None", "None", "None", "None", "None"],
};

const guru = {
  Senin: ["Bu Evi", "Bu Lis", "Bu Reni"],
  Selasa: ["Pak Dhani", "Pak Budi", "Kak Yoshua"],
  Rabu: ["Bu Putri", "Pak Bas", "Kak Yoshua"],
  Kamis: ["Pak Bas", "Bu Evi", "Kak Yoshua"],
  Jumat: ["Pak Budi", "Pak Widodo", "Pak Gusmanto"],
  Sabtu: ["None", "None", "None"],
  Minggu: ["None", "None", "None"],
};

const waktu = {
  Senin: ["07.50 - 10.10", "10.40 - 12.00 ", "13.15 - 15.30"],
  Selasa: ["07.15 - 10.10", "10.40 - 12.00", "13.15 - 15.30"],
  Rabu: ["07.15 - 10.10", "10.40 - 12.00", "13.15 - 15.30"],
  Kamis: ["07.15 - 10.10", "10.40 - 12.00", "13.15 - 15.30"],
  Jumat: ["08.30 - 10.10", "10.40 - 11.30", "13.30 - 15.30"],
  Sabtu: ["None", "None", "None", "None", "None"],
  Minggu: ["None", "None", "None", "None", "None"],
};

// FUNCTION UNTUK MENDAPATKAN HARI DARI KALENDER.
function dapatkanHari() {
  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  const currentDayIndex = new Date().getDay();
  return days[currentDayIndex];
}

// UPDATE DATA KE DIV YANG MEMILIKI ID.
function updateMapel() {
  const hariIni = dapatkanHari();
  const todayMapel = mapel[hariIni];
  const guruMapel = guru[hariIni];
  const waktuMapel = waktu[hariIni];
  const tanggal = dapatkanHari();

// MAPEL
  document.getElementById("mapel1").innerText = todayMapel[0];
  document.getElementById("mapel2").innerText = todayMapel[1];
  document.getElementById("mapel3").innerText = todayMapel[2];
  document.getElementById("mapel4").innerText = todayMapel[3];
  document.getElementById("mapel5").innerText = todayMapel[4];
// GURU MAPEL
  document.getElementById("guru1").innerText = guruMapel[0];
  document.getElementById("guru2").innerText = guruMapel[1];
  document.getElementById("guru3").innerText = guruMapel[2];
// WAKTU MAPEL
  document.getElementById("waktu1").innerText = waktuMapel[0];
  document.getElementById("waktu2").innerText = waktuMapel[1];
  document.getElementById("waktu3").innerText = waktuMapel[2];
  document.getElementById("waktu4").innerText = waktuMapel[3];
  document.getElementById("waktu5").innerText = waktuMapel[4];
// TANGGAL HARI INI
  document.getElementById("tanggal").innerText = tanggal;
}

window.onload = updateMapel;
// END SISTEM JADWAL
