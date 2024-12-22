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

const link = document.querySelectorAll(".link");

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
