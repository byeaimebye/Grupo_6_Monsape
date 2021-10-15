let $articles = document.querySelector(".section-productCart #articles");
let $html = document.querySelector("html");/* 
let $script = document.createElement("script"); */
let $script = document.querySelector("#btns-quantity");
let article = ``;
let dir = "/javascripts/btns-quantity-products-script.js";
/* console.log($script) */

window.addEventListener("load", () => {

    if (localStorage.length > 0) {
        for (let i = 1; i <= localStorage.length; i++) {

            article += `
            <article class="art-cart">
                            <div class="wine-x"><img src="${JSON.parse(localStorage.getItem(i)).image}" alt=""></div>
                            <div class="detail">
                                <p id="nombre">${JSON.parse(localStorage.getItem(i)).title}</p>
                                <p id="precio">${JSON.parse(localStorage.getItem(i)).price}</p>
                                <div class="cant">
                                    <input type="button" name="menos" id="buttons" class="menos"
                                    value="-">
                                    <input type="text" name="cantidad" id="cantidad" class="cantidad"
                                    value="${JSON.parse(localStorage.getItem(i)).quantity}">
                                    <input type="button" name="mas" id="buttons" class="mas" value="+">
                                </div>
                            </div>
                            <div class="subtotal">
                                <p>$2.500</p>
                                <img class="tachito" src="/img/tachito.png" alt="carrito">
                            </div>
                        </article>`;

        }
        $articles.innerHTML = article;
        /* $script.src = dir;
        $script.defer = true;
        $html.innerHTML += $script; */
        $script.display = "block";
        let $remove = document.querySelector(".tachito");
        $remove.addEventListener("click", () => {
            document.location.reload();
        })

        $less = document.querySelector(".menos");
        $quantity = document.querySelector(".cantidad");
        $more = document.querySelector(".mas");
        console.log("botoncitos activos");

        let contador = 0;

        $less.addEventListener("click", e => {
            if (contador !== 0) {
                contador--;
                $quantity.value = contador;
            }
        })
        $more.addEventListener("click", e => {
            contador++;
            $quantity.value = contador;
        })

    } else {
        $articles.innerHTML = `<h3>Tu carrito está vacío</h3>
        <a href="/products/tienda"><p>Ir a la tienda</p></a>`;
    }



})