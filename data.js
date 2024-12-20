const mobile = document.querySelector(".mobileMenu");
const body = document.querySelector("body");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

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
});

moon.addEventListener("click", function () {
  body.classList.remove("theme2");
  moon.classList.add("hide");
  sun.classList.remove("hide");
});
