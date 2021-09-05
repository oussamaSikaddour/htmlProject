const navLinks = document.querySelectorAll(".nav__link");
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");
const year = document.querySelector(".year");
let slideIndex = 1;

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const showSlides = (n) => {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("openSlide");
  }

  slides[slideIndex - 1].classList.add("openSlide");
};

year.textContent = new Date().getFullYear();
navLinks[0].classList.add("active");

showSlides(slideIndex);
navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    navLinks[index].classList.add("active");
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let previous = Array.from(btn.classList).indexOf("previousSlide");
    let next = Array.from(btn.classList).indexOf("nextSlide");

    if (next !== -1) {
      plusSlides(1);
    }
    if (previous !== -1) {
      plusSlides(-1);
    }
    btn.classList.add("active");
    setTimeout(function () {
      btn.classList.remove("active");
    }, 500);
  });
});
