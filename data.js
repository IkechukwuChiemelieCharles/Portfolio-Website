const mobile = document.querySelector(".mobileMenu");
const body = document.querySelector("body");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const harmCont = document.querySelector(".harmCont");
const close = document.querySelector(".close");
const lightLogo = document.querySelectorAll(".lightLogo");
const darkLogo = document.querySelectorAll(".darkLogo");

harmCont.addEventListener("click", function () {
  harmCont.classList.toggle("open");
  mobile.classList.toggle("open");
});
close.addEventListener("click", function () {
  close.classList.toggle("open");
  mobile.classList.toggle("open");
});

sun.addEventListener("click", function () {
  body.classList.add("theme2");
  moon.classList.remove("hide");
  sun.classList.add("hide");

  lightLogo.forEach(function (light) {
    light.classList.toggle("hide");
  });
  darkLogo.forEach(function (dark) {
    dark.classList.toggle("hide");
  });
});

moon.addEventListener("click", function () {
  body.classList.remove("theme2");
  moon.classList.add("hide");
  sun.classList.remove("hide");

  lightLogo.forEach(function (light) {
    light.classList.toggle("hide");
  });
  darkLogo.forEach(function (dark) {
    dark.classList.toggle("hide");
  });
});

const link = document.querySelectorAll('a[href^="#"]');

link.forEach(function (links) {
  links.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    // console.log(this);

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      // close.classList.toggle("open");
      mobile.classList.remove("open");
    }
    // window.scrollTo({
    //   top: targetElement.offsetTop,
    //   behavior: "smooth",
    // });
  });
});

let slideIndex = 1;

slider(slideIndex);

function slider(n) {
  const slides = document.querySelectorAll(".mySlides");
  // const dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }
  slides.forEach(function (slide) {
    slide.style.display = "none";
  });
  // dots.forEach(function (dot) {
  //   dot.classList.remove("active");
  // });
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].classList.add("active");
}

function plusSlides(b) {
  slider((slideIndex += b));
}

function currentSlide(c) {
  slider((slideIndex = c));
}

function autoSlide() {
  plusSlides(1);
}

setInterval(autoSlide, 3000);
