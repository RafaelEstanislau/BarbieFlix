var swiper = new Swiper(".movie-content", {
  slidesPerView: 1,
  spaceBetween: 10,

  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

let botaoPlay = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let filme = document.querySelector("#myvideo");
let botaoFechar = document.querySelector(".close-video");
const urlParams = new URLSearchParams(window.location.search);

const movies = {
  barbieCasteloDiamante:
    "https://estanislau-movies.s3.sa-east-1.amazonaws.com/%40harryslt91-+Barbie+e+o+Castelo+de+Diamante+.mp4",
  barbiePrincesaDaIlha:
    "https://estanislau-movies.s3.sa-east-1.amazonaws.com/%40harryslt91-+Barbie+a+Princesa+da+Ilha.mp4",
  barbie12Bailarinas: 
    "https://estanislau-movies.s3.sa-east-1.amazonaws.com/%40harryslt91-+Barbie+e+as+12+Bailarinas.mp4",
  barbieTresMosqueteiras:
    "https://estanislau-movies.s3.sa-east-1.amazonaws.com/%40harryslt91-+Barbie+e+As+Tr%C3%AAs+Mosqueteiras.mp4",
  barbieLagoDosCines:
    "https://estanislau-movies.s3.sa-east-1.amazonaws.com/%40harryslt91-+Barbie+Lago+dos+Cisnes.mp4",
  barbieEscolaDePrincesas:
    "https://estanislau-movies.s3.sa-east-1.amazonaws.com/22+-+Barbie+Escola+de+Princesas.mp4",
  barbieFairyTopia:
    "https://estanislau-movies.s3.sa-east-1.amazonaws.com/5+-+Barbie+Fairytopia.mp4",
  barbieSegredoDasFadas:
    "https://estanislau-movies.s3.sa-east-1.amazonaws.com/21+-+Barbie+e+o+Segredo+das+Fadas.mp4",
  barbieRapunzel:
    "https://estanislau-movies.s3.sa-east-1.amazonaws.com/%40harryslt91-+Barbie+Rapunzel+.mp4"   
};

botaoPlay.onclick = () => {
  video.classList.add("show-video");
  const videoName = urlParams.get("video-name");
  filme.src = movies[videoName];
  filme.play();
};

botaoFechar.onclick = () => {
  video.classList.remove("show-video");
  filme.pause();
};
