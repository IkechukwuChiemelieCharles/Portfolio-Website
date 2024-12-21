const mobile = document.querySelector(".mobileMenu");
const body = document.querySelector("body");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const lightLogo = document.querySelectorAll(".lightLogo");
const darkLogo = document.querySelectorAll(".darkLogo");

document.querySelector(".harmCont").addEventListener("click", function () {
  console.log("clicked");

  mobile.classList.remove("hide");
});

document.querySelector(".mobileMenu").addEventListener("click", function () {
  //   mobile.style.display = "none";

  mobile.classList.add("hide");
  //   mobile.classList.add("closeMobileMenu");
});

const link = document.querySelectorAll(".link");

// link.forEach(function (links) {
//   links.addEventListener("click", function (e) {
//     e.preventDefault();
//   });
// });

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
