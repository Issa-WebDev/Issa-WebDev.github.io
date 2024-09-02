const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    ChangeCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    ChangeCarousel();
  }
});

function ChangeCarousel() {
  carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}
