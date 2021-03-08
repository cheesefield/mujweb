function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
  nav.className = "navbar";
  body.className = "";
  menuBtn.classList.remove("open");
}
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

const nav = document.getElementsByClassName("navbar")[0];
const body = document.getElementById("home");
const section = document.getElementById("invisible");
var progress = document.getElementById("myBar");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    nav.className += " active";
    body.className += " body";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    nav.className = "navbar";
    body.className = "";
  }
});

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if (scrolled === 100) {
    document.getElementById("myBar").style.width = scrolled + 20 + "%";
  }
}

const images = document.querySelectorAll(".row .column img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const closeBtn = document.querySelector(".close");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal.classList.add("appear");
    body.classList.add("body");

    closeBtn.addEventListener("click", () => {
      modalImg.src = "";
      modalTxt.innerHTML = "";
      modal.classList.remove("appear");
      body.classList.remove("body");
    });
  });
});

var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}

function fun() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("message").value = "";
}
