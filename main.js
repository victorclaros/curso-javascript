const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", showMenu);

function showMenu(){
    desktopMenu.classList.toggle("inactive");
}