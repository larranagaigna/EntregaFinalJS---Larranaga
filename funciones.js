function agregarAlCarrito(id) {
    if (carrito.some((el) => el.id === id)) {
        let index = carrito.findIndex(el => el.id === id);
        
    } else {
        let productoAAgregar = productos.find((el) => el.id === id);
        carrito.push({
            ...productoAAgregar,
            cantidad: 1,
        });
    }
    Toastify({
        text: "Producto agregado correctamente!",
        duration: 3000,
    }).showToast();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};

function mostrarCarrito() {
    let divCarrito = document.getElementById("cart");

    divCarrito.innerHTML = "";

    carrito.forEach((el, index) => {
        let card = document.createElement("div");
        card.className = "product-card";

        let title = document.createElement("h4");
        title.innerText = `Nombre: ${el.nombre}`;

        card.appendChild(title);

        let price = document.createElement("h5");
        price.innerText = `Precio: $${el.precio}`;

        card.appendChild(price);

        let divCantidad = document.createElement("div");
        divCantidad.className = "div-cantidad"

        let btnMinus = document.createElement("button");
        btnMinus.innerText = "-"
        btnMinus.onclick = () => modificarCarrito(index, "-");


        let btnDelete = document.createElement("button");
        btnDelete.onclick = () => eliminarProducto(index);
        btnDelete.innerText = "Eliminar"
        card.appendChild(btnDelete);
        divCarrito.append(card);
    })
};


let botonVaciarCarro = document.getElementById("vaciarCarro");
botonVaciarCarro.addEventListener("click", limpiarCarrito);


    function limpiarCarrito(){{
            let divCarrito = document.getElementById("cart");
            divCarrito.innerHTML = "";
            Toastify({
                text: "Se ha vaciado el carrito!",
                duration: 3000,
            }).showToast()
        };
    }

function eliminarProducto(index) {
    Toastify({
        text: "Se ha eliminado el articulo del carrito!",
        duration: 3000,
    }).showToast()
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarCarrito();
        };

        