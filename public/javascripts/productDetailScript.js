window.addEventListener("load", e => {
    let _more = document.querySelector(".ver-mas"),
        _confirmar = document.querySelector(".confirmar"),
        _moreDetails = document.querySelector("#more-details"),
        _agregar = document.querySelector(".agregar"),
        _no = document.querySelector("#no"),
        _title = document.querySelector(".title-p"),
        _quantity = document.querySelector(".quantity-product-detail"),
        _main = document.querySelector(".main-prueba"),
        _img = document.querySelector(".item-image"),
        _itemsCarritoDropDownProductDetailScript = document.getElementById("items"),
        _footerProductDetail = document.querySelector(".subtotal-product"),
        _price = document.querySelector(".price");
    const _templateCartProductDetail = document.querySelector("#template-carrito").content;
    const _fragmentProductDetail = document.createDocumentFragment();

    let contProductDetailScript = 0;
    let productoCartProductDetailScript = {};
    let carritoProductDetail = JSON.parse(localStorage.getItem("carrito"));

    console.log(_quantity);

    document.addEventListener("click", e => {
        productoCartProductDetailScript = e;
        
        switch (true) {
            case e.target.className == _confirmar.className:
                window.location.href = "http://localhost:3080/products/tienda";
                break;
            case e.target.className == _more.className:
                _moreDetails.checked = true;
                break;
            case e.target.className == _agregar.className:
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
            case e.target.className == document.querySelector(".modal-container-product-detail").className:
                e.target.style.display = "none";
                break;
            case e.target.id == document.querySelector("#yes").id:
                console.log(e.target);
                addCarrito(productoCartProductDetailScript);

                document.querySelector(".h4-modal-product-detail").innerText = "¡Producto agregado exitosamente!";
                document.querySelector("#yes").style.display = "none";
                document.querySelector("#no").innerText = "ok";
                contProductDetailScript = 1;
                break;
            case e.target.id == _no.id:
                console.log(e.target);
                if (contProductDetailScript === 0) {

                    document.querySelector(".h4-modal-product-detail").innerText = "Acción cancelada.";
                    document.querySelector("#yes").style.display = "none";
                    document.querySelector("#no").style.display = "none";
                    document.querySelector(".modal-product-detail").style.height = "100px";
                    document.querySelector(".modal-product-detail").style.paddingTop = "25px";
                    document.querySelector(".h4-modal-product-detail").style.fontSize = "22px";
                } else {
                    contProductDetailScript = 0;
                    document.querySelector(".modal-container-product-detail").style.display = "none";
                }
                break;

            default:
                break;
        }
    })


    const addCarrito = e => {
        if (e.target.classList.contains("btn-buy")) {
            console.log("addCarrito")
            console.log(e.target.parentElement)
            setCarrito(e.target.parentElement);//parentElement nos trae toda la información de la caja contenedora en la que se ejecuta un evento.
        }
        e.stopPropagation();
    }

    const setCarrito = objeto => {
        const producto = {
            id: _agregar.id,
            title: _title.textContent,
            precio: document.querySelector(".price").textContent,
            imagen: document.querySelector(".item-image").src,
            cantidad: +(document.querySelector(".cantidad").value)
        }

        if (carritoProductDetail.hasOwnProperty(producto.id)) {
            producto.cantidad = carritoProductDetail[producto.id].cantidad + 1;
        }

        carritoProductDetail[producto.id] = { ...producto };
        pintarCarrito();
    }

    const pintarCarrito = () => {
        _itemsCarritoDropDownProductDetailScript.innerHTML = "";
        Object.values(carritoProductDetail).forEach(producto => {
            //_templateCarritoDropDown.querySelector("th").textContent = producto.id;
            _templateCartProductDetail.getElementById("nombre").textContent = producto.title;
            _templateCartProductDetail.getElementById("precio").textContent = "$" + (+producto.precio.substring(1) * (+producto.cantidad));
            _templateCartProductDetail.querySelector(".mas").dataset.id = producto.id;
            _templateCartProductDetail.querySelector(".menos").dataset.id = producto.id;
            _templateCartProductDetail.querySelector(".cantidad").value = producto.cantidad;
            _templateCartProductDetail.querySelector(".wine-image").src = producto.imagen;
            _templateCartProductDetail.querySelector(".tachito").dataset.id = producto.id;

            const clone = _templateCartProductDetail.cloneNode(true);
            _fragmentProductDetail.appendChild(clone);
        })
        _itemsCarritoDropDownProductDetailScript.appendChild(_fragmentProductDetail);

        pintarFooter();

        localStorage.setItem("carrito", JSON.stringify(carritoProductDetail));
    }

    const pintarFooter = () => {
        _footerProductDetail.innerHTML = "$0";
        if (Object.keys(carritoProductDetail).length === 0) {
            _itemsCarritoDropDownProductDetailScript.innerHTML = `
        <div class="container-not-found">
            <h3 class="msg-cart-not-found">Tu carrito está vacío</h3>
        </div>`
            _footerProductDetail.innerHTML = `$0`;
            return
        }

        const nCantidad = Object.values(carritoProductDetail).reduce((acc, { cantidad }) => acc + cantidad, 0);
        const nPrecio = Object.values(carritoProductDetail).reduce((acc, { cantidad, precio }) => acc + cantidad * +precio.substring(1), 0)

        _footerProductDetail.textContent = "$" + nPrecio;
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

    let productoProductDetailScript = Object.values(carritoProductDetail).find(element => element.id === _agregar.id);
    const pintarCantidad = () => {
        _quantity.setAttribute("value", productoProductDetailScript.cantidad);
        console.log(productoProductDetailScript.cantidad)
    }

    if(productoProductDetailScript){
        pintarCantidad();
    }

    document.getElementById("mas").addEventListener("click", e =>{
        _quantity.value= +_quantity.value + 1;
    })
    document.getElementById("menos").addEventListener("click", e =>{
        if(+_quantity.value > 1){
            _quantity.value = +_quantity.value - 1;
        }
    })
})