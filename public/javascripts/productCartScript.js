let $articles = document.querySelector(".section-productCart #articles");
let $html = document.querySelector("html");
let $script = document.querySelector("#btns-quantity");
let article = ``;
let dir = "/javascripts/btns-quantity-products-script.js";
let products = [];


window.addEventListener("load", (e) => {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
                if(localStorage.key(i)){

                    article += `
                    <article class="art-cart" id="${localStorage.key(i)}">
                                    <div class="wine-x"><img src="${JSON.parse(localStorage.getItem(localStorage.key(i))).image}" alt=""></div>
                                    <div class="detail">
                                        <p id="nombre">${JSON.parse(localStorage.getItem(localStorage.key(i))).title}</p>
                                        <p id="precio">${JSON.parse(localStorage.getItem(localStorage.key(i))).price}</p>
                                        <div class="cant" >
                                            <input type="button" name="menos" id="less${localStorage.key(i)}" class="menos"
                                            value="-">
                                            <input type="text" name="cantidad" id="quantity${localStorage.key(i)}" class="cantidad"
                                            value="${JSON.parse(localStorage.getItem(localStorage.key(i))).quantity}">
                                            <input type="button" name="mas" id="more${localStorage.key(i)}" class="mas" value="+">
                                        </div>
                                        
                                    </div>
                                    <div class="subtotal">
                                        <p>$2.500</p>
                                        <img id="tachito${localStorage.key(i)}" class="tachito" src="/img/tachito.png" alt="carrito">
                                    </div>
                                </article>`;

                                console.log("#tachito"+localStorage.key(i))
                }

            }
            $articles.innerHTML = article;
            console.log(products);

    } else {
        $articles.innerHTML = `
        <div class="container-not-found">
            <h3 class="msg-cart-not-found">Tu carrito está vacío</h3>
            <a href="/products/tienda"><p class="p-go-to-store">Ir a la tienda</p></a>
        </div>`;
    }

    let boton = "";
    document.addEventListener("click", e =>{

        boton = e.target.id.substring(e.target.id.indexOf("cart"));

        console.log("Esto es " + e.target.id);
            if(e.target.id == document.getElementById(e.target.id).id && document.getElementById(e.target.id).value == "-"){
                console.log("sep " + document.getElementById(e.target.id).value);
                if(document.querySelector("#quantity" + boton).value > 1){
                    document.querySelector("#quantity" + boton).value = (+document.querySelector("#quantity" + boton).value) - 1;
                    console.log("Listo")
                } 
            }else if(e.target.id == document.querySelector("#" + e.target.id).id && document.getElementById(e.target.id).value == "+"){
                console.log("sep " + document.getElementById(e.target.id).value);
                document.querySelector("#quantity" + boton).value = (+document.querySelector("#quantity" + boton).value) + 1;
                console.log("Listo")
            }
            
            if(e.target.id == document.querySelector("#tachito" + boton).id){
                console.log(localStorage.key(boton))
                localStorage.removeItem(localStorage.key(boton));
                window.location.reload();
            }
    })


})
