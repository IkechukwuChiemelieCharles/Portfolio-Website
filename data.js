const mobile = document.querySelector(".mobileMenu");
const body = document.querySelector("body");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const harmCont = document.querySelector(".harmCont");
const close = document.querySelector(".close");
const lightLogo = document.querySelectorAll(".lightLogo");
const darkLogo = document.querySelectorAll(".darkLogo");
const aboutTextHidden = document.querySelectorAll(".aboutTextHidden");
const readMore = document.querySelector(".readMore");
const readLess = document.querySelector(".readLess");
const overlay = document.querySelector(".overlay");
const submit = document.querySelector("#submit");
const error = document.querySelectorAll(".error");
const formInput = document.querySelectorAll(".formInput");

harmCont.addEventListener("click", function () {
  harmCont.classList.toggle("open");
  mobile.classList.toggle("open");
  overlay.classList.toggle("hide");
});
close.addEventListener("click", function () {
  close.classList.toggle("open");
  mobile.classList.toggle("open");
  overlay.classList.toggle("hide");
});

sun.addEventListener("click", function () {
  body.classList.remove("theme2");
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
  body.classList.add("theme2");
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

    overlay.classList.add("hide");
    const targetId = this.getAttribute("href");
    // console.log(this);

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      mobile.classList.remove("open");
    }
  });
});

// let slideIndex = 1;

// slider(slideIndex);

// function slider(n) {
//   const slides = document.querySelectorAll(".mySlides");

//   if (n > slides.length) {
//     slideIndex = 1;
//   } else if (n < 1) {
//     slideIndex = slides.length;
//   } else {
//     slideIndex = n;
//   }
//   slides.forEach(function (slide) {
//     slide.style.display = "none";
//   });

//   slides[slideIndex - 1].style.display = "block";
// }

// function plusSlides(b) {
//   slider((slideIndex += b));
// }

// function currentSlide(c) {
//   slider((slideIndex = c));
// }

// function autoSlide() {
//   plusSlides(1);
// }

// setInterval(autoSlide, 3000);

readMore.addEventListener("click", function (e) {
  console.log(e);
  aboutTextHidden.forEach(function (texts) {
    texts.classList.remove("hide");
    readLess.classList.remove("hide");
    readMore.classList.add("hide");
  });
  console.log("click");
});
readLess.addEventListener("click", function (e) {
  console.log(e);
  aboutTextHidden.forEach(function (texts) {
    texts.classList.add("hide");
    readMore.classList.remove("hide");
    readLess.classList.add("hide");
  });
});

submit.addEventListener("click", function (e) {
  // e.preventDefault();
  console.log("btn");

  formInput.forEach(function (inp, i) {
    if (inp.value === "") {
      // console.log("rm");
      error[i].classList.remove("hide");
      error[i].style.color = "red";
    } else {
      error[i].classList.add("hide");
    }

    // window.addEventListener("load", function () {
    //   inp.value = "";
    // });
  });
});
