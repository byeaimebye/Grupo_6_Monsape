let $articles = document.querySelector(".section-productCart #articles");
let $html = document.querySelector("html");/* 
let $script = document.createElement("script"); */
let $script = document.querySelector("#btns-quantity");
let article = ``;
let dir = "/javascripts/btns-quantity-products-script.js";
/* console.log($script) */

function quantitySelector(id){
    const $more = document.querySelector("#more" + id);
    const $less = document.querySelector("#less" + id);
    const $quantity = document.querySelector("#quantity" + id);

    let contador = $quantity.value;
    $less.addEventListener("click", e =>{
        if(contador !== 1){
            contador--;
            $quantity.value = contador;
        }
    })
    $more.addEventListener("click", e =>{
            contador++;
            $quantity.value = contador;
    })
}

window.addEventListener("load", (e) => {

        if (localStorage.length > 0) {
            for (let i = 1; i <= localStorage.length; i++) {

                article += `
                <article class="art-cart" id="">
                                <div class="wine-x"><img src="${JSON.parse(localStorage.getItem(i)).image}" alt=""></div>
                                <div class="detail">
                                    <p id="nombre">${JSON.parse(localStorage.getItem(i)).title}</p>
                                    <p id="precio">${JSON.parse(localStorage.getItem(i)).price}</p>
                                    <div class="cant" id="${JSON.parse(localStorage.getItem(i)).id}">
                                        <input type="button" name="menos" id="less${JSON.parse(localStorage.getItem(i)).id}" class="menos"
                                        value="-">
                                        <input type="text" name="cantidad" id="quantity${JSON.parse(localStorage.getItem(i)).id}" class="cantidad"
                                        value="${JSON.parse(localStorage.getItem(i)).quantity}">
                                        <input type="button" name="mas" id="more${JSON.parse(localStorage.getItem(i)).id}" class="mas" value="+">
                                    </div>
                                    
                                </div>
                                <div class="subtotal">
                                    <p>$2.500</p>
                                    <img class="tachito" src="/img/tachito.png" alt="carrito">
                                </div>
                            </article>`;

            }
            $articles.innerHTML = article;
            /* $script.display = "block"; */
            
            
            for(let i = 0; i < localStorage.length; i++){
                quantitySelector(i);
            }
            

    } else {
        $articles.innerHTML = `
        <div class="container-not-found">
            <h3 class="msg-cart-not-found">Tu carrito está vacío</h3>
            <a href="/products/tienda"><p class="p-go-to-store">Ir a la tienda</p></a>
        </div>`;
    }

})