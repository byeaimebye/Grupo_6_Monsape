if(window.location.href === "http://localhost:3080/products/tienda"){
    const _productsTiendaScript = document.querySelector(".products");
    const _itemsCarritoDropDown = document.getElementById("items");
    const _verMasTiendaScript = document.getElementById("mas-drop-down");
    const _footerTiendaScript = document.querySelector(".subtotal-product");
    const _templateCardTiendaScript = document.getElementById("template-card").content;
    const _modalConteinerTiendaScript = document.querySelector(".modal-container-product-detail");
    const _fragmentTiendaScript = document.createDocumentFragment();
    
    const _templateCarritoDropDown = document.getElementById("template-carrito").content;
    const _inputCarritoDropDown = document.querySelector(".cart-data-drop-down");
    const _labelCarritoDropDown = document.querySelector(".cart-data-label-drop-down img");
    
    console.log(_templateCardTiendaScript);
    
    let urlTiendaScript = `http://localhost:3080/api/products`;
    let carritoTiendaScript = {};
    
    document.addEventListener("DOMContentLoaded", e => {
       fetchData();
       if(localStorage.getItem("carrito")){
        carritoTiendaScript = JSON.parse(localStorage.getItem("carrito"));
        pintarCarrito()
        }
    
        if(window.location.href === "http://localhost:3080/products/tienda"){
            _verMasTiendaScript.style.display = "none";
        }
    });
    
    let productoCart = {};
    _productsTiendaScript.addEventListener("click", e =>{
        productoCart = e;
        console.log(productoCart);
        switch (true) {
            case e.target.className == _productsTiendaScript.querySelector(".agregar-producto-al-carrito").className:
                document.querySelector(".modal-product-detail").style.height = "200px";
                document.querySelector(".modal-product-detail").style.paddingTop = "0";
                document.querySelector(".h4-modal-product-detail").style.fontSize = "";
                document.querySelector(".h4-modal-product-detail").innerText = "¿Agregar producto al carrito?";
                document.querySelector("#yes").style.display = "block";
                document.querySelector("#no").style.display = "block";
                document.querySelector("#no").innerText = "No";
                console.log("ok")
                document.querySelector(".modal-container-product-detail").style.display = "flex";
                break;
            default:
                break;
        }
    })
    
    
    let cont = 0;
    document.addEventListener("click", e => {
        switch (true) {
            case e.target.className == _modalConteinerTiendaScript.className:
                e.target.style.display = "none";
                break;
            case e.target.id == document.getElementById("yes").id:
                console.log(e.target);
                addCarrito(productoCart);
    
                document.querySelector(".h4-modal-product-detail").innerText = "¡Producto agregado exitosamente!";
                document.querySelector("#yes").style.display = "none";
                document.querySelector("#no").innerText = "ok";
                cont = 1;
                //document.querySelector("#no").id = "ok";
                break;
            case e.target.id == document.querySelector("#no").id:
                console.log(e.target);
                if(cont === 0){
    
                    document.querySelector(".h4-modal-product-detail").innerText = "Acción cancelada.";
                    document.querySelector("#yes").style.display = "none";
                    document.querySelector("#no").style.display = "none";
                    document.querySelector(".modal-product-detail").style.height = "100px";
                    document.querySelector(".modal-product-detail").style.paddingTop = "25px";
                    document.querySelector(".h4-modal-product-detail").style.fontSize = "22px";
                }else{
                    cont = 0;
                    document.querySelector(".modal-container-product-detail").style.display = "none";
                }
                break;
            default:
                break;
        }
    })
    
    _itemsCarritoDropDown.addEventListener("click", e => {
        btnAccion(e);
        quitProduct(e);
    })
    
    //Realizando solicitud a la API...
    const fetchData = async () => {
        try {
            const res = await fetch(urlTiendaScript)
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
            _templateCardTiendaScript.querySelector("a").href = "/products/detail/" + producto.id;
            _templateCardTiendaScript.querySelector("h4").textContent = producto.name;
            _templateCardTiendaScript.querySelector(".precio").textContent = "$" + producto.price;
            _templateCardTiendaScript.querySelector(".imagen-producto").setAttribute("src", "/img/"+producto.image);
            _templateCardTiendaScript.querySelector(".agregar-producto-al-carrito").dataset.id = producto.id;
            _templateCardTiendaScript.querySelector(".descuento-porcentaje p").textContent = Math.trunc(producto.discount) + "% OFF";
            _templateCardTiendaScript.querySelector(".descuento").textContent = "$" + Math.round((100*producto.price)/(100-producto.discount));
    
            const clone = _templateCardTiendaScript.cloneNode(true);
            _fragmentTiendaScript.appendChild(clone);
        })
        _productsTiendaScript.appendChild(_fragmentTiendaScript);
    }
    
    const addCarrito = e => {
        /* console.log(e.target);
        console.log(e.target.classList.contains("agregar-producto-al-carrito")) */
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
    
        if(carritoTiendaScript.hasOwnProperty(producto.id)){
            producto.cantidad = carritoTiendaScript[producto.id].cantidad + 1;
        }
    
        carritoTiendaScript[producto.id] = {...producto};
        pintarCarrito();
    }
    
    const pintarCarrito = () => {
        _itemsCarritoDropDown.innerHTML = "";
        Object.values(carritoTiendaScript).forEach(producto => {
            //_templateCarritoDropDown.querySelector("th").textContent = producto.id;
            _templateCarritoDropDown.getElementById("nombre").textContent = producto.title;
            _templateCarritoDropDown.getElementById("precio").textContent = "$"+(+producto.precio.substring(1)*(+producto.cantidad));
            _templateCarritoDropDown.querySelector(".mas").dataset.id = producto.id;
            _templateCarritoDropDown.querySelector(".menos").dataset.id = producto.id;
            _templateCarritoDropDown.querySelector(".cantidad").value = producto.cantidad;
            _templateCarritoDropDown.querySelector(".wine-image").src = producto.imagen;
            _templateCarritoDropDown.querySelector(".tachito").dataset.id = producto.id;
    
            const clone = _templateCarritoDropDown.cloneNode(true);
            _fragmentTiendaScript.appendChild(clone);
        })
        _itemsCarritoDropDown.appendChild(_fragmentTiendaScript);
    
        pintarFooter();
    
        localStorage.setItem("carrito", JSON.stringify(carritoTiendaScript));
    }
    
    const pintarFooter = () => {
        _footerTiendaScript.innerHTML = "$0";
        if(Object.keys(carritoTiendaScript).length === 0){
            _itemsCarritoDropDown.innerHTML = `
            <div class="container-not-found">
                <h3 class="msg-cart-not-found">Tu carrito está vacío</h3>
            </div>`
            _footerTiendaScript.innerHTML = `$0`;
            return 
        }
        
        const nCantidad = Object.values(carritoTiendaScript).reduce((acc, {cantidad})=> acc + cantidad, 0);
        const nPrecio = Object.values(carritoTiendaScript).reduce((acc, {cantidad, precio})=> acc + cantidad * +precio.substring(1), 0)
        
        _footerTiendaScript.textContent = "$"+nPrecio;
        //_templateFooter.getElementById("precio").textContent = nPrecio;
    
        //const clone = _templateFooter.cloneNode(true);
        //_fragmentTiendaScript.appendChild(clone);
    
        //_footerTiendaScript.appendChild(_fragmentTiendaScript);
    
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
            const producto = carritoTiendaScript[e.target.dataset.id];
            producto.cantidad = carritoTiendaScript[e.target.dataset.id].cantidad + 1;
            carritoTiendaScript[e.target.dataset.id] = {...producto}
            console.log(carritoTiendaScript[e.target.dataset.id])
            pintarCarrito()
            pintarFooter()
            _inputCarritoDropDown.checked = false;
        }
        //Disminuir
        if(e.target.classList.contains("menos")){
            console.log("menos")
            const producto = carritoTiendaScript[e.target.dataset.id];
            producto.cantidad = carritoTiendaScript[e.target.dataset.id].cantidad - 1;
            if(producto.cantidad === 0){
                delete carritoTiendaScript[e.target.dataset.id];
            }
            pintarCarrito()
            pintarFooter()
            _inputCarritoDropDown.checked = false;
        }
        e.stopPropagation()
    }
    
    const quitProduct = e => {
        if(e.target.className === "tachito"){
            delete carritoTiendaScript[e.target.dataset.id];
        }
        pintarCarrito()
        pintarFooter()
        _inputCarritoDropDown.checked = false;
        e.stopPropagation()
    }
}