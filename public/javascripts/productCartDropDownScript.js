window.addEventListener("load", () => {

if(!(window.location.href === "http://localhost:3080/products/tienda") && !(window.location.href === "http://localhost:3080/products/cart") && !(window.location.href.includes("http://localhost:3080/products/detail")) && !(window.location.href.includes("http://localhost:3080/products/search"))){
    console.log("productCartDropDownScript activado")
/* const _products2 = document.querySelector(".products");
 */const _items = document.getElementById("items");
const _verMas = document.getElementById("mas-drop-down");
const _footer = document.querySelector(".subtotal-product");/* 
const _templateCard = document.getElementById("template-card").content; */
const _templateCarrito = document.getElementById("template-carrito").content;
const _inputDropDown = document.querySelector(".cart-data-drop-down");
const _labelCart = document.querySelector(".cart-data-label-drop-down img");
const fragment2 = document.createDocumentFragment()

//let url = `http://localhost:3080/api/products`;
let carrito2 = {};

/* document.addEventListener("DOMContentLoaded", e => { */
   /* fetchData(); */
   if(localStorage.getItem("carrito")){
    carrito2 = JSON.parse(localStorage.getItem("carrito"));
    //pintarCarrito()
    }

    if(window.location.href === "http://localhost:3080/products/tienda"){
        _verMas.style.display = "none";
    }
/* }); */

/* _products.addEventListener("click", e =>{
    addCarrito(e);
}) */

_items.addEventListener("click", e => {
    btnAccion(e);
    quitProduct(e);
})

//Realizando solicitud a la API...
/* const fetchData = async () => {
    try {
        const res = await fetch(url)
        const response = await res.json();
        const data = await response.data;
        //console.log(data)
        pintarCards(data);
    } catch (error) {
        console.log(error);
    }
} */

/* const pintarCards = data => {
    console.log(data)
    data.forEach(producto => {
        _templateCard.querySelector("h4").textContent = producto.name;
        _templateCard.querySelector(".precio").textContent = "$" + producto.price;
        _templateCard.querySelector(".imagen-producto").setAttribute("src", "/img/"+producto.image);
        _templateCard.querySelector(".agregar-producto-al-carrito").dataset.id = producto.id;
        _templateCard.querySelector(".descuento-porcentaje p").textContent = Math.trunc(producto.discount) + "% OFF";
        _templateCard.querySelector(".descuento").textContent = "$" + Math.round((100*producto.price)/(100-producto.discount));

        const clone = _templateCard.cloneNode(true);
        fragment2.appendChild(clone);
    })
    _products.appendChild(fragment2);
} */

/* const addCarrito = e => {
    console.log(e.target);
    console.log(e.target.classList.contains("agregar-producto-al-carrito"))
    if(e.target.classList.contains("agregar-producto-al-carrito")){
        console.log("addCarrito")
        setCarrito(e.target.parentElement);//parentElement nos trae toda la información de la caja contenedora en la que se ejecuta un evento.
    }
    e.stopPropagation();
} */

/* const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector(".agregar-producto-al-carrito").dataset.id,
        title: objeto.querySelector("h4").textContent,
        precio: objeto.querySelector(".precio").textContent,
        imagen: objeto.querySelector(".imagen-producto").src,
        cantidad: 1
    }

    if(carrito2.hasOwnProperty(producto.id)){
        producto.cantidad = carrito2[producto.id].cantidad + 1;
    }

    carrito2[producto.id] = {...producto};
    pintarCarrito();
} */

const pintarCarrito = () => {
    console.log("alo alo")
    //carrito2 = JSON.parse(localStorage.getItem("carrito"));
    _items.innerHTML = "";
    Object.values(carrito2).forEach(producto => {
        //_templateCarrito.querySelector("th").textContent = producto.id;
        _templateCarrito.getElementById("nombre").textContent = producto.title;
        _templateCarrito.getElementById("precio").textContent = "$"+(+producto.precio.substring(1)*(+producto.cantidad));
        _templateCarrito.querySelector(".mas").dataset.id = producto.id;
        _templateCarrito.querySelector(".menos").dataset.id = producto.id;
        _templateCarrito.querySelector(".cantidad").value = producto.cantidad;
        _templateCarrito.querySelector(".wine-image").src = producto.imagen;
        _templateCarrito.querySelector(".tachito").dataset.id = producto.id;

        const clone = _templateCarrito.cloneNode(true);
        fragment2.appendChild(clone);
    })
    _items.appendChild(fragment2);

    pintarFooter();

    localStorage.setItem("carrito", JSON.stringify(carrito2));
}

const pintarFooter = () => {
    _footer.innerHTML = "$0";
    if(Object.keys(carrito2).length === 0){
        _items.innerHTML = `
        <div class="container-not-found">
            <h3 class="msg-cart-not-found">Tu carrito está vacío</h3>
        </div>`
        _footer.innerHTML = `$0`;
        return 
    }
    
    const nCantidad = Object.values(carrito2).reduce((acc, {cantidad})=> acc + cantidad, 0);
    const nPrecio = Object.values(carrito2).reduce((acc, {cantidad, precio})=> acc + cantidad * +precio.substring(1), 0)
    
    _footer.textContent = "$"+nPrecio;
    //_templateFooter.getElementById("precio").textContent = nPrecio;

    //const clone = _templateFooter.cloneNode(true);
    //fragment2.appendChild(clone);

    //_footer.appendChild(fragment2);

    /* const btnVaciar = document.getElementById("vaciar-carrito")

    btnVaciar.addEventListener("click", ()=> {
        carrito = {};
        pintarCarrito();
    }) */
}

const btnAccion = (e) => {
    //Aumentar
    carrito2 = JSON.parse(localStorage.getItem("carrito"));
    if(e.target.classList.contains("mas")){
        console.log("mas")
        const producto = carrito2[e.target.dataset.id];
        producto.cantidad = carrito2[e.target.dataset.id].cantidad + 1;
        carrito2[e.target.dataset.id] = {...producto}
        console.log(carrito2[e.target.dataset.id])
        pintarCarrito()
        pintarFooter()
        _inputDropDown.checked = false;
    }
    //Disminuir
    if(e.target.classList.contains("menos")){
        console.log("menos")
        const producto = carrito2[e.target.dataset.id];
        producto.cantidad = carrito2[e.target.dataset.id].cantidad - 1;
        if(producto.cantidad === 0){
            delete carrito2[e.target.dataset.id];
        }
        pintarCarrito()
        pintarFooter()
        _inputDropDown.checked = false;
    }
    e.stopPropagation()
}

const quitProduct = e => {
    if(e.target.className === "tachito"){
        delete carrito2[e.target.dataset.id];
    }
    pintarCarrito()
    pintarFooter()
    _inputDropDown.checked = false;
    e.stopPropagation()
}

pintarCarrito();
} else {
    console.log("productCartDropDownScript desactivado")
}
});
