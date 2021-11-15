const _productsTiendaScript = document.querySelector(".products");
const _itemsTiendaScript = document.getElementById("items");
const _verMasTiendaScript = document.getElementById("mas-drop-down");
const _footer = document.querySelector(".subtotal-product");
const _templateCard = document.getElementById("template-card").content;
const _templateCarrito = document.getElementById("template-carrito").content;
const _inputDropDown = document.querySelector(".cart-data-drop-down");
const _labelCart = document.querySelector(".cart-data-label-drop-down img");
const fragment = document.createDocumentFragment()
console.log(_templateCard);

let url = `http://localhost:3080/api/products`;
let carrito = {};

document.addEventListener("DOMContentLoaded", e => {
   fetchData();
   if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
    pintarCarrito()
    }

    if(window.location.href === "http://localhost:3080/products/tienda"){
        _verMasTiendaScript.style.display = "none";
    }
});

_productsTiendaScript.addEventListener("click", e =>{
    addCarrito(e);
})

_itemsTiendaScript.addEventListener("click", e => {
    btnAccion(e);
    quitProduct(e);
})

//Realizando solicitud a la API...
const fetchData = async () => {
    try {
        const res = await fetch(url)
        const response = await res.json();
        const data = await response.data;
        //console.log(data)
        pintarCards(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = data => {
    console.log(data)
    data.forEach(producto => {
        _templateCard.querySelector("h4").textContent = producto.name;
        _templateCard.querySelector(".precio").textContent = "$" + producto.price;
        _templateCard.querySelector(".imagen-producto").setAttribute("src", "/img/"+producto.image);
        _templateCard.querySelector(".agregar-producto-al-carrito").dataset.id = producto.id;
        _templateCard.querySelector(".descuento-porcentaje p").textContent = Math.trunc(producto.discount) + "% OFF";
        _templateCard.querySelector(".descuento").textContent = "$" + Math.round((100*producto.price)/(100-producto.discount));

        const clone = _templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    _productsTiendaScript.appendChild(fragment);
}

const addCarrito = e => {
    console.log(e.target);
    console.log(e.target.classList.contains("agregar-producto-al-carrito"))
    if(e.target.classList.contains("agregar-producto-al-carrito")){
        console.log("addCarrito")
        setCarrito(e.target.parentElement);//parentElement nos trae toda la información de la caja contenedora en la que se ejecuta un evento.
    }
    e.stopPropagation();
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector(".agregar-producto-al-carrito").dataset.id,
        title: objeto.querySelector("h4").textContent,
        precio: objeto.querySelector(".precio").textContent,
        imagen: objeto.querySelector(".imagen-producto").src,
        cantidad: 1
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }

    carrito[producto.id] = {...producto};
    pintarCarrito();
}

const pintarCarrito = () => {
    _itemsTiendaScript.innerHTML = "";
    Object.values(carrito).forEach(producto => {
        //_templateCarrito.querySelector("th").textContent = producto.id;
        _templateCarrito.getElementById("nombre").textContent = producto.title;
        _templateCarrito.getElementById("precio").textContent = "$"+(+producto.precio.substring(1)*(+producto.cantidad));
        _templateCarrito.querySelector(".mas").dataset.id = producto.id;
        _templateCarrito.querySelector(".menos").dataset.id = producto.id;
        _templateCarrito.querySelector(".cantidad").value = producto.cantidad;
        _templateCarrito.querySelector(".wine-image").src = producto.imagen;
        _templateCarrito.querySelector(".tachito").dataset.id = producto.id;

        const clone = _templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    })
    _itemsTiendaScript.appendChild(fragment);

    pintarFooter();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const pintarFooter = () => {
    _footer.innerHTML = "$0";
    if(Object.keys(carrito).length === 0){
        _itemsTiendaScript.innerHTML = `
        <div class="container-not-found">
            <h3 class="msg-cart-not-found">Tu carrito está vacío</h3>
        </div>`
        _footer.innerHTML = `$0`;
        return 
    }
    
    const nCantidad = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio})=> acc + cantidad * +precio.substring(1), 0)
    
    _footer.textContent = "$"+nPrecio;
    //_templateFooter.getElementById("precio").textContent = nPrecio;

    //const clone = _templateFooter.cloneNode(true);
    //fragment.appendChild(clone);

    //_footer.appendChild(fragment);

    /* const btnVaciar = document.getElementById("vaciar-carrito")

    btnVaciar.addEventListener("click", ()=> {
        carrito = {};
        pintarCarrito();
    }) */
}

const btnAccion = (e) => {
    //Aumentar
    if(e.target.classList.contains("mas")){
        console.log("mas")
        const producto = carrito[e.target.dataset.id];
        producto.cantidad = carrito[e.target.dataset.id].cantidad + 1;
        carrito[e.target.dataset.id] = {...producto}
        console.log(carrito[e.target.dataset.id])
        pintarCarrito()
        pintarFooter()
        _inputDropDown.checked = false;
    }
    //Disminuir
    if(e.target.classList.contains("menos")){
        console.log("menos")
        const producto = carrito[e.target.dataset.id];
        producto.cantidad = carrito[e.target.dataset.id].cantidad - 1;
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id];
        }
        pintarCarrito()
        pintarFooter()
        _inputDropDown.checked = false;
    }
    e.stopPropagation()
}

const quitProduct = e => {
    if(e.target.className === "tachito"){
        delete carrito[e.target.dataset.id];
    }
    pintarCarrito()
    pintarFooter()
    _inputDropDown.checked = false;
    e.stopPropagation()
}