const navLink = document.querySelectorAll(".nav-link");
const populerSection = document.querySelector("#populer");
const beritaSection = document.querySelector("#berita");
const kutipanSection = document.querySelector("#kutipan");
const linkHome = document.querySelector(".link-home");
const linkPopuler = document.querySelector(".link-populer");
const linkBerita = document.querySelector(".link-berita");
const linkKutipan = document.querySelector(".link-kutipan");

// mengambil batas tiap section
console.log(populerSection.offsetTop);
console.log(window.scrollY);
// memberikan class activate ketika sampai di bagiannya
window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  const populer = populerSection.offsetTop - 150;
  const berita = beritaSection.offsetTop - 150;
  const kutipan = kutipanSection.offsetTop;
  if (distance < populer) {
    linkHome.classList.add("active");
    linkPopuler.classList.remove("active");
    linkBerita.classList.remove("active");
    linkKutipan.classList.remove("active");
  } else if ((distance >= populer) & (distance <= berita)) {
    linkHome.classList.remove("active");
    linkPopuler.classList.add("active");
    linkBerita.classList.remove("active");
    linkKutipan.classList.remove("active");
  } else if ((distance >= berita) & (distance <= berita + 400)) {
    linkHome.classList.remove("active");
    linkPopuler.classList.remove("active");
    linkBerita.classList.add("active");
    linkKutipan.classList.remove("active");
  } else {
    linkHome.classList.remove("active");
    linkPopuler.classList.remove("active");
    linkBerita.classList.remove("active");
    linkKutipan.classList.add("active");
  }
});
// jika salah satu nav-link di klik, jalankan fungsi activate
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    activate(link);
  });
});

function activate(link) {
  const linkActive = document.querySelector(".active");
  if (!link.classList.contains("active")) {
    linkActive.classList.remove("active");
    link.classList.add("active");
  }
}

const inputSearch = document.querySelector(".input-search");
const btnSearch = document.querySelector(".search-btn");
// mengambil nilai dari input search
let searchValue = document.querySelector(".inp-value");
inputSearch.addEventListener("change", (e) => {
  // menyimpan inputan
  searchValue.innerHTML = inputSearch.value;

  // ketika di enter = search
  inputSearch.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      btnSearch.click();
    }
  });
});

// ketika btn search ditekan
if (btnSearch) {
  btnSearch.addEventListener("click", (e) => {
    // mengambil nilai input dan mengubah spasi menjadi +
    let search = searchValue.innerHTML.replace(" ", "+");
    if ((search = " ")) {
      btnRute.href = `https://www.google.com/search?q=Gunung+Indonesia `;
    } else {
      // memasukkan inputan menjadi link pencarian
      btnRute.href = `https://www.google.com/search?q=${search}`;
    }
  });
}

// mekanisme searching di bagian berita
const inpRute = document.querySelector(".inp-rute");
const btnRute = document.querySelector(".btn-rute");
const inpBo = document.querySelector(".inp-bo");
const btnBo = document.querySelector(".btn-bo");
const inpBerita = document.querySelector(".inp-berita");
const btnBerita = document.querySelector(".btn-berita");
let ruteValue = document.querySelector(".rute-value");
let boValue = document.querySelector(".bo-value");
let beritaValue = document.querySelector(".berita-value");

inpRute.addEventListener("change", (e) => {
  ruteValue.innerHTML = inpRute.value;
  inpRute.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      btnRute.click();
    }
  });
});
if (btnRute) {
  btnRute.addEventListener("click", (e) => {
    let search = ruteValue.innerHTML.replace(" ", "+");
    if (search === "") {
      btnRute.href = `https://www.google.com/search?q=Rute+pendakian+gunung `;
    } else {
      btnRute.href = `https://www.google.com/search?q=${search}`;
    }
  });
}

inpBo.addEventListener("change", (e) => {
  boValue.innerHTML = inpBo.value;
  inpBo.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      btnBo.click();
    }
  });
});
if (btnBo) {
  btnBo.addEventListener("click", (e) => {
    let search = boValue.innerHTML.replace(" ", "+");
    if (search === "") {
      btnBo.href = `https://www.google.com/search?q=Booking+online+gunung `;
    } else {
      btnBo.href = `https://www.google.com/search?q=${search}`;
    }
  });
}

inpBerita.addEventListener("change", (e) => {
  beritaValue.innerHTML = inpBerita.value;
  inpBerita.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      btnBerita.click();
    }
  });
});
if (btnBerita) {
  btnBerita.addEventListener("click", (e) => {
    let search = beritaValue.innerHTML.replace(" ", "+");
    if (search === "") {
      btnBerita.href = `https://www.google.com/search?q=Berita+terkini+gunung `;
    } else {
      btnBerita.href = `https://www.google.com/search?q=${search}`;
    }
  });
}
