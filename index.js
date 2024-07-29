// ANIMASI OPENING

// ANIMASI TEKS WELCOME
const texts = ["Hello, World!...", "Welcome to XI PPLG."];
const textElements = [document.getElementById("typewriter-text1"), document.getElementById("typewriter-text2")];
let indexes = [0, 0];

function type(elementIndex) {
  if (indexes[elementIndex] < texts[elementIndex].length) {
    textElements[elementIndex].textContent += texts[elementIndex].charAt(indexes[elementIndex]);
    indexes[elementIndex]++;
    setTimeout(() => type(elementIndex), 125); // Adjust the speed of typing here
  } else if (elementIndex < textElements.length - 1) {
    // Start typing the next text after the current one finishes
    setTimeout(() => type(elementIndex + 1), 500); // Adjust the delay between paragraphs here
  }
}

document.addEventListener("DOMContentLoaded", () => type(0));

// ANIMASI FLOWCHART DAN IMG
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.flowchart-item, .branch, img');
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
  Senin: ["PKK", "ISTIRAHAT", "PAI", "ISHOMA", "B.INDO"],
  Selasa: ["BASIS DATA", "ISTIRAHAT", "MTK", "ISHOMA", "PPLG"],
  Rabu: ["PJOK", "ISTIRAHAT", "PBO", "ISHOMA", "PPL"],
  Kamis: ["PBO", "ISTIRAHAT", "PKK", "ISHOMA", "PPLG"],
  Jumat: ["MTK", "ISTIRAHAT", "PKN", "ISHOMA", "B.ING"],
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
  Senin: ["08.10 - 10.10", "10.10 - 10.40", "10.40 - 13.50 ", "12.00 - 13.15",
  "13.50 - 15.30"],
  Selasa: ["07.15 - 10.10", "10.10 - 10.40", "10.40 - 12.00", "12.00 - 13.15",
  "13.15 - 15.30"],
  Rabu: ["07.15 - 10.10", "10.10 - 10.40", "10.40 - 12.00", "12.00 - 13.15",
  "13.15 - 15.30"],
  Kamis: ["07.15 - 10.10", "No Break", "10.10 - 10.40", "10.40 - 12.00", "12.00 - 13.15",
  "13.15 - 15.30"],
  Jumat: ["08.10 - 10.10", "10.10 - 11.30", "11.30 - 13.30", "13.30 - 15.30"],
  Sabtu: ["None", "None", "None", "None", "None"],
  Minggu: ["None", "None", "None", "None", "None"],
};

const jadwalPiket = {
  Senin: ["Bagus", "Bambang", "Johan", "Shabir", "Nazril", "Revanza"],
  Selasa: ["Dhea", "Darren", "Fathi", "Jericho", "Nabil", "Nazwar"],
  Rabu: ["Farel", "Fathir", "Bowo", "Salsa", "Zaki", "Adrian"],
  Kamis: ["Dwi", "Bhakti", "Fanny", "Natty", "Bena", "Hafidz"],
  Jumat: ["Javi", "Ais", "Jessy", "Ferdi", "Zein", "Yogi"],
  Sabtu: ["None", "None", "None", "None", "None", "none"],
  Minggu: ["None", "None", "None", "None", "None", "None"],
};

// FUNCTION UNTUK MENDAPATKAN HARI DARI KALENDER.
function dapatkanHari() {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const currentDayIndex = new Date().getDay();
  return days[currentDayIndex];
}

// UPDATE DATA KE DIV YANG MEMILIKI ID.
function updateMapel() {
  const hariIni = dapatkanHari();
  const todayMapel = mapel[hariIni];
  const guruMapel = guru[hariIni];
  const waktuMapel = waktu[hariIni];
  const dapiket = jadwalPiket[hariIni];
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
// DAFTAR PIKET
  document.getElementById("nama1").innerText = dapiket[0];
  document.getElementById("nama2").innerText = dapiket[1];
  document.getElementById("nama3").innerText = dapiket[2];
  document.getElementById("nama4").innerText = dapiket[3];
  document.getElementById("nama5").innerText = dapiket[4];
  document.getElementById("nama6").innerText = dapiket[5];
// TANGGAL HARI INI
  document.getElementById("tanggal").innerText = tanggal;
}

window.onload = updateMapel;
// END SISTEM JADWAL

// SISTEM PERGANTIAN JADWAL DAN DAPIKET
document.getElementById('gantiMapel').addEventListener('click', function() {
  document.getElementById('itemMapel').classList.add('show');
  document.getElementById('itemPiket').classList.remove('show');
});

document.getElementById('gantiPiket').addEventListener('click', function() {
  document.getElementById('itemMapel').classList.remove('show');
  document.getElementById('itemPiket').classList.add('show');
});

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll("#gallery img");
var modalImg = document.getElementById("modalImage");

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "flex"; // Use flex to center the modal
        setTimeout(() => {
            modal.style.opacity = "1";
            modal.classList.add("show");
            modalImg.src = this.src;
        }, 10); // Small delay to trigger transition
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.opacity = "0";
    setTimeout(function(){
        modal.style.display = "none";
        modal.classList.remove("show");
    }, 300); // 300ms matches the CSS transition duration
}

// Close the modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target !== modalImg) {
        modal.style.opacity = "0";
        setTimeout(function(){
            modal.style.display = "none";
            modal.classList.remove("show");
        }, 300);
    }
}

const container = document.querySelector('.containerMain');
const footer = document.getElementById('footer');

container.addEventListener('scroll', () => {
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;
  const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

  if (isAtBottom) {
    footer.style.bottom = '0';
  } else {
    footer.style.bottom = '-100px';
  }
});
