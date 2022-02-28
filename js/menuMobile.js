//Ativer menu mobile
let navbar = document.querySelector("header .navbar");
let navbutton = document.querySelector("#menu-btn");

navbutton.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};
