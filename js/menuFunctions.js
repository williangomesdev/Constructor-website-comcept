let navbar = document.querySelector("header .navbar");
let navButton = document.querySelector("#menu-btn");
let searchForm = document.querySelector("header .search-form");
let searchButton = document.querySelector("#search-btn");
let loginForm = document.querySelector("header .login-form");
let loginButton = document.querySelector("#login-btn");
let contactModal = document.querySelector(".contact-info");
let contactButton = document.querySelector("#info-btn");
let contactClose = document.querySelector("#close-contact-info");

//Ativer menu mobile
navButton.onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactModal.classList.remove("active");
};
//Ativar o formulário de pesquisa
searchButton.onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  contactModal.classList.remove("active");
};

//Ativar o modal de login
loginButton.onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  contactModal.classList.remove("active");
};

//Ativar modal de informações
contactButton.onclick = () => {
  contactModal.classList.add("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

//Fechar modal de informações
contactClose.onclick = () => {
  contactModal.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};
