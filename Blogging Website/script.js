const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
const slideCount = slides.length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlidePosition();
}

function updateSlidePosition() {
  const newPosition = -currentIndex * slides[0].offsetWidth;
  document.querySelector(
    ".slides"
  ).style.transform = `translateX(${newPosition}px)`;
}

setInterval(nextSlide, 2500);
