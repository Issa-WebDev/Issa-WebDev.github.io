// Handle the dark mode 👇🏻
const darkBtn = document.getElementById("dark");
const defaultBtn = document.getElementById("default");
const toTopBtn = document.getElementById("toTop");
const htmlElements = document.documentElement;

// ==================  Dark mode  ================================
darkBtn.addEventListener("click", () => {
  htmlElements.classList.add("dark");
  htmlElements.classList.add("dark-mode");
  defaultBtn.classList.remove("hidden");
  defaultBtn.classList.add("flex");
  darkBtn.classList.add("hidden");
});

// ==================  Default mode  ================================
defaultBtn.addEventListener("click", () => {
  htmlElements.classList.remove("dark");
  htmlElements.classList.remove("dark-mode");
  defaultBtn.classList.add("hidden");
  darkBtn.classList.remove("hidden");
});

// ================  scroll to top   =================================
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.classList.remove("opacity-0");
  } else {
    toTopBtn.classList.add("opacity-0");
  }
});

// ==================  Carousel  ================================
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

// Go to previous Projects
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    ChangeCarousel();
  }
});

// Go to next Projects
nextBtn.addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    ChangeCarousel();
  }
});

// To Update Projects
function ChangeCarousel() {
  carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}
