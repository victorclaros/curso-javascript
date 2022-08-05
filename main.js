const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

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

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/133697/pexels-photo-133697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "laptop",
    price: 620,
    image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "smartphone",
    price: 420,
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "tenis",
    price: 80,
    image: "https://images.pexels.com/photos/6438288/pexels-photo-6438288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "moto",
    price: 2000,
    image: "https://images.pexels.com/photos/11094871/pexels-photo-11094871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "camara",
    price: 400,
    image: "https://images.pexels.com/photos/1528851/pexels-photo-1528851.jpeg?auto=compress&cs=tinysrgb&w=600"
});
productList.push({
    name: "audifonos",
    price: 320,
    image: "https://images.pexels.com/photos/5382359/pexels-photo-5382359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "reloj",
    price: 50,
    image: "https://images.pexels.com/photos/277290/pexels-photo-277290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "drone",
    price: 600,
    image: "https://images.pexels.com/photos/2100075/pexels-photo-2100075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "microfono",
    price: 250,
    image: "https://images.pexels.com/photos/347700/pexels-photo-347700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
//maquetacion de HTML con javascript para manipular el DOM y mostrar productos 
for(product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image)

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
}
