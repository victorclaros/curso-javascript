const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", showMenuDesktop);
menuHamIcon.addEventListener("click", showMenuMobile);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

//mostrando menu de escritorio
function showMenuDesktop(){
    aside.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}
//mostrando menu en movil
function showMenuMobile(){
    aside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}
//mostrando el carrito de compras en movil y escritorio
function toggleCarritoAside(){
    aside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}