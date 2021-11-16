const _cards = document.querySelector(".product-container");
const _footer = document.querySelectorAll(".sub-sin-envio-drop-down p")
const _templateCarrito = document.getElementById("template-carrito").content;
const _templateFooter = document.getElementById("template-footer").content;
const fragment = document.createDocumentFragment();
let carrito = {};

document.addEventListener("DOMContentLoaded", ()=>{
    //fetchData();
    if(localStorage.getItem("carrito")){
        console.log("hola")
        carrito = JSON.parse(localStorage.getItem("carrito"));
        pintarCarrito()
    }
});

_cards.addEventListener("click", e =>{
    console.log("Funcionando")
    addCarrito(e);
});

/* items.addEventListener("click", e => {
    btnAccion(e);
}) 

const fetchData = async () => {
    try {
        const res = await fetch("productos.json")
        const data = await res.json();
        //console.log(data)
        pintarCards(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = data => {
    console.log(data)
    data.forEach(producto => {
        templateCard.querySelector("h5").textContent = producto.title;
        templateCard.querySelector("p").textContent = producto.precio;
        templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl);
        templateCard.querySelector(".btn-dark").dataset.id = producto.id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    cards.appendChild(fragment);
}*/

const addCarrito = e => {
    console.log(e.target);
    console.log(e.target.classList.contains("btn-buy"))
    if(e.target.classList.contains("btn-buy")){
        setCarrito(e.target.parentElement);//parentElement nos trae toda la información de la caja contenedora en la que se ejecuta un evento.
    }
    e.stopPropagation();
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector(".btn-buy").dataset.id,
        title: objeto.getElementById("nombre").textContent,
        precio: objeto.getElementById("precio").textContent,
        cantidad: 1
    }
    console.log(producto)

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }

    carrito[producto.id] = {...producto};
    pintarCarrito();
}

const pintarCarrito = () => {
    console.log(carrito)
    items.innerHTML = "";
    Object.values(carrito).forEach(producto => {
        _templateCarrito.querySelector("th").textContent = producto.id;
        _templateCarrito.querySelectorAll("p")[0].textContent = producto.title;
        _templateCarrito.querySelectorAll("p")[1].textContent = producto.cantidad * producto.precio;
        _templateCarrito.querySelector(".mas").dataset.id = producto.id;
        _templateCarrito.querySelector(".menos").dataset.id = producto.id;
        _templateCarrito.querySelector(".cantidad").textContent = producto.cantidad;

        const clone = _templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);

    pintarFooter();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const pintarFooter = () => {
    _footer[1].innerHTML = "";
    if(Object.keys(carrito).length === 0){
        _footer[1].innerHTML = `
            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `;
        return 
    }

    //const nCantidad = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio})=> acc + cantidad * precio, 0)
    
    //templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
    _templateFooter[1].textContent = nPrecio;

    const clone = _templateFooter.cloneNode(true);
    fragment.appendChild(clone);

    _footer.appendChild(fragment);

    /* const btnVaciar = document.getElementById("vaciar-carrito")

    btnVaciar.addEventListener("click", ()=> {
        carrito = {};
        pintarCarrito();
    }) */
}

//Botones de cantidad de producto.
const btnAccion = (e) => {
    //Aumentar
    if(e.target.classList.contains("mas")){
        console.log(e.target)
        const producto = carrito[e.target.dataset.id];
        producto.cantidad = carrito[e.target.dataset.id].cantidad + 1;
        carrito[e.target.dataset.id] = {...producto}
        console.log(carrito[e.target.dataset.id])
        pintarCarrito()
        pintarFooter()
    }

    if(e.target.classList.contains("menos")){
        console.log(e.target)
        const producto = carrito[e.target.dataset.id];
        producto.cantidad = carrito[e.target.dataset.id].cantidad - 1;
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id];
        }
        pintarCarrito()
        pintarFooter()
    }
    e.stopPropagation()
}
