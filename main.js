let productsContainer = document.getElementById("products-container");



productos.forEach((el) => {
    let card = document.createElement("div");
    card.className = "product-card";

    let title = document.createElement("h3");
    title.innerText = `Nombre: ${el.nombre}`;

    card.appendChild(title);

    let price = document.createElement("p");
    price.innerText = `Precio: $${el.precio}`;

    card.appendChild(price);

    let buttonAdd = document.createElement("button");
    buttonAdd.innerText = `Agregar al carrito`;
    buttonAdd.className = "btn btn-secondary";

    buttonAdd.onclick = () => agregarAlCarrito(el.id);

    card.appendChild(buttonAdd);

    productsContainer.appendChild(card);

});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


let btnCleanCart = document.getElementById("li");

sumarPrecios(productos)

btnCleanCart.onclick = limpiarCarrito;

finalizarCompra