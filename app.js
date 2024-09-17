// Handle the dark mode 👇🏻
const darkBtn = document.getElementById("dark");
const toTopBtn = document.getElementById("toTop");
const logo = document.getElementById("logo");
const githubIcon = document.getElementById("github-icon");
const htmlElements = document.documentElement;

// ==================  Dark mode  ================================
darkBtn.addEventListener("click", () => {
  htmlElements.classList.toggle("dark");
  if (htmlElements.classList.contains("dark")) {
    logo.src = "logo/logo-black.png";
    githubIcon.src = "icons/github-black.svg";
  } else {
    logo.src = "logo/issa-WebDev.png";
    githubIcon.src = "icons/github.svg";
  }
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
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");
// const carousel = document.getElementById("carousel");
// const items = document.querySelectorAll(".carousel-item");
// let currentIndex = 0;
// let startX = 0;
// let endX = 0;

// // Go to previous Projects
// prevBtn.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     ChangeCarousel();
//   }
// });

// // Go to next Projects
// nextBtn.addEventListener("click", () => {
//   if (currentIndex < items.length - 1) {
//     currentIndex++;
//     ChangeCarousel();
//   }
// });

// To Update Projects
// function ChangeCarousel() {
//   carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
// }

// // Touch start event
// carousel.addEventListener("touchstart", (e) => {
//   startX = e.touches[0].clientX;
// });

// // Touch move event
// carousel.addEventListener("touchmove", (e) => {
//   endX = e.touches[0].clientX;
// });

// // Touch end event
// carousel.addEventListener("touchend", () => {
//   let diffX = startX - endX;

//   if (diffX > 50 && currentIndex < items.length - 1) {
//     // Swipe left (next)
//     currentIndex++;
//     ChangeCarousel();
//   } else if (diffX < -50 && currentIndex > 0) {
//     // Swipe right (prev)
//     currentIndex--;
//     ChangeCarousel();
//   }
// });
