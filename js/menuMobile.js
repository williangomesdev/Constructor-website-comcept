let navbar = document.querySelector("header .navbar");
let navButton = document.querySelector("#menu-btn");
let searchForm = document.querySelector("header .search-form");
let searchButton = document.querySelector("#search-btn");

//Ativer menu mobile
navButton.onclick = () => {
  navbar.classList.toggle("active");
};
//Ativar o formulário de pesquisa
searchButton.onclick = () => {
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

