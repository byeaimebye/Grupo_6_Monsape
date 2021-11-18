window.addEventListener("load", () => {

    /* const _products2 = document.querySelector(".products");
     */const _itemsProductCartScript = document.getElementById("itemsCart");
    const _verMasProductCartScript = document.getElementById("mas-drop-down");
    const _footer = document.querySelector(".subtotal-product");/* 
    const _templateCard = document.getElementById("template-card").content; */
    const _templateCarritoProductCartScript = document.getElementById("template-carrito").content;
    //const _inputDropDown = document.querySelector(".cart-data-drop-down");
    //const _labelCart = document.querySelector(".cart-data-label-drop-down img");
    const _fragmentProductCartScript = document.createDocumentFragment();
    const _cartDropDownProductCartScript = document.querySelector(".carroDeCompras");
    
    //let url = `http://localhost:3080/api/products`;
    let _carritoProductCartScript = {};
    
    if(window.location.href === "http://localhost:3080/products/cart"){
        _cartDropDownProductCartScript.style.display = "none";
    }

    /* document.addEventListener("DOMContentLoaded", e => { */
       /* fetchData(); */
       if(localStorage.getItem("carrito")){
        _carritoProductCartScript = JSON.parse(localStorage.getItem("carrito"));
        //pintarCarrito()
        }
    
        if(window.location.href === "http://localhost:3080/products/tienda"){
            _verMasProductCartScript.style.display = "none";
        }
    /* }); */
    
    /* _products.addEventListener("click", e =>{
        addCarrito(e);
    }) */
    
    _itemsProductCartScript.addEventListener("click", e => {
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
            _fragmentProductCartScript.appendChild(clone);
        })
        _products.appendChild(_fragmentProductCartScript);
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
    
        if(_carritoProductCartScript.hasOwnProperty(producto.id)){
            producto.cantidad = _carritoProductCartScript[producto.id].cantidad + 1;
        }
    
        _carritoProductCartScript[producto.id] = {...producto};
        pintarCarrito();
    } */
    
    const pintarCarrito = () => {
        console.log("alo alo")
        //_carritoProductCartScript = JSON.parse(localStorage.getItem("carrito"));
        _itemsProductCartScript.innerHTML = "";
        Object.values(_carritoProductCartScript).forEach(producto => {
            //_templateCarritoProductCartScript.querySelector("th").textContent = producto.id;
            _templateCarritoProductCartScript.getElementById("nombre").textContent = producto.title;
            _templateCarritoProductCartScript.getElementById("precio").textContent = "$"+(+producto.precio.substring(1)*(+producto.cantidad));
            _templateCarritoProductCartScript.querySelector(".mas").dataset.id = producto.id;
            _templateCarritoProductCartScript.querySelector(".menos").dataset.id = producto.id;
            _templateCarritoProductCartScript.querySelector(".cantidad").value = producto.cantidad;
            _templateCarritoProductCartScript.querySelector(".wine-image").src = producto.imagen;
            _templateCarritoProductCartScript.querySelector(".tachito").dataset.id = producto.id;
    
            const clone = _templateCarritoProductCartScript.cloneNode(true);
            _fragmentProductCartScript.appendChild(clone);
        })
        _itemsProductCartScript.appendChild(_fragmentProductCartScript);
    
        pintarFooter();
    
        localStorage.setItem("carrito", JSON.stringify(_carritoProductCartScript));
    }
    
    const pintarFooter = () => {
        _footer.innerHTML = "$0";
        if(Object.keys(_carritoProductCartScript).length === 0){
            _itemsProductCartScript.innerHTML = `
            <div class="container-not-found">
                <h3 class="msg-cart-not-found">Tu carrito está vacío</h3>
            </div>`
            _footer.innerHTML = `$0`;
            return 
        }
        
        const nCantidad = Object.values(_carritoProductCartScript).reduce((acc, {cantidad})=> acc + cantidad, 0);
        const nPrecio = Object.values(_carritoProductCartScript).reduce((acc, {cantidad, precio})=> acc + cantidad * +precio.substring(1), 0)
        
        _footer.textContent = "$"+nPrecio;
        //_templateFooter.getElementById("precio").textContent = nPrecio;
    
        //const clone = _templateFooter.cloneNode(true);
        //_fragmentProductCartScript.appendChild(clone);
    
        //_footer.appendChild(_fragmentProductCartScript);
    
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
            const producto = _carritoProductCartScript[e.target.dataset.id];
            producto.cantidad = _carritoProductCartScript[e.target.dataset.id].cantidad + 1;
            _carritoProductCartScript[e.target.dataset.id] = {...producto}
            console.log(_carritoProductCartScript[e.target.dataset.id])
            pintarCarrito()
            pintarFooter()
            //_inputDropDown.checked = false;
        }
        //Disminuir
        if(e.target.classList.contains("menos")){
            console.log("menos")
            const producto = _carritoProductCartScript[e.target.dataset.id];
            producto.cantidad = _carritoProductCartScript[e.target.dataset.id].cantidad - 1;
            if(producto.cantidad === 0){
                delete _carritoProductCartScript[e.target.dataset.id];
            }
            pintarCarrito()
            pintarFooter()
            //_inputDropDown.checked = false;
        }
        e.stopPropagation()
    }
    
    const quitProduct = e => {
        if(e.target.className === "tachito"){
            console.log("hola");
            delete _carritoProductCartScript[e.target.dataset.id];
        }
        pintarCarrito()
        pintarFooter()
        //_inputDropDown.checked = false;
        e.stopPropagation()
    }
    
    pintarCarrito();
});
    