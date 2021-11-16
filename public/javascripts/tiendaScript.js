window.addEventListener("load", (e)=>{
    //e.preventDefault();
    _products = document.querySelector(".products");
    let url =`http://localhost:3080/api/products`;
    let winesArray = [];

     function wines(url){
        fetch(url)
            .then(response => { return response.json()})
            .then(wines => {
                
                wines.data.forEach(wine => {
                    winesArray.push(wine.name)
                    _products.innerHTML += `
                    <article class="product-container">
                        <a href="/products/detail/${wine.id}"><img class="imagen-producto" src="/img/${wine.image} " alt="Imagen de vino Monsape"></a>                    
                        <div class="descuento-porcentaje">
                            <p> ${Math.trunc(wine.discount)}% OFF</p>
                        </div>
                        <div class="caja-de-vino">
                            <img class="caja" src="/img/tienda/caja.svg" alt="caja de vino">
                            <img class="cantidad-vinos" src="/img/tienda/6.svg" alt="cantidad de vinos en una caja">
                        </div>
                        <div class="descripcion-producto">
                            <p class="precio-por-caja">Precio caja x6  botellas</p>
                            <h4 class="nombre-producto">${wine.name}</h4>
                        </div>
                        <div class="descuento-y-precio">
                            <span class="descuento">$ ${Math.round((100*wine.price)/(100-wine.discount))} </span>
                            <span class="precio">$ ${wine.price}</span>
                        </div>
                        <button class="agregar-producto-al-carrito">Agregar</button>
                    </article>`
                })
            })
            .catch(err => {console.log(err)});

    }

    function Alphabethicaly(array){
        array.sort();
        _products.innerHTML = ``;
        array.forEach(wine => {
            _products.innerHTML += `
            <article class="product-container">
                <a href="/products/detail/${wine.id}"><img class="imagen-producto" src="/img/${wine.image} " alt="Imagen de vino Monsape"></a>                    
                <div class="descuento-porcentaje">
                    <p> ${Math.trunc(wine.discount)}% OFF</p>
                </div>
                <div class="caja-de-vino">
                    <img class="caja" src="/img/tienda/caja.svg" alt="caja de vino">
                    <img class="cantidad-vinos" src="/img/tienda/6.svg" alt="cantidad de vinos en una caja">
                </div>
                <div class="descripcion-producto">
                    <p class="precio-por-caja">Precio caja x6  botellas</p>
                    <h4 class="nombre-producto">${wine.name}</h4>
                </div>
                <div class="descuento-y-precio">
                    <span class="descuento">$ ${Math.round((100*wine.price)/(100-wine.discount))} </span>
                    <span class="precio">$ ${wine.price}</span>
                </div>
                <button class="agregar-producto-al-carrito">Agregar</button>
            </article>`
        })

    }
    function AlphabethicalyReverse(array){
        array.name.reverse();
        _products.innerHTML = ``;
        array.forEach(wine => {
            _products.innerHTML += `
            <article class="product-container">
                <a href="/products/detail/${wine.id}"><img class="imagen-producto" src="/img/${wine.image} " alt="Imagen de vino Monsape"></a>                    
                <div class="descuento-porcentaje">
                    <p> ${Math.trunc(wine.discount)}% OFF</p>
                </div>
                <div class="caja-de-vino">
                    <img class="caja" src="/img/tienda/caja.svg" alt="caja de vino">
                    <img class="cantidad-vinos" src="/img/tienda/6.svg" alt="cantidad de vinos en una caja">
                </div>
                <div class="descripcion-producto">
                    <p class="precio-por-caja">Precio caja x6  botellas</p>
                    <h4 class="nombre-producto">${wine.name}</h4>
                </div>
                <div class="descuento-y-precio">
                    <span class="descuento">$ ${Math.round((100*wine.price)/(100-wine.discount))} </span>
                    <span class="precio">$ ${wine.price}</span>
                </div>
                <button class="agregar-producto-al-carrito">Agregar</button>
            </article>`
        })
    }

    wines(url);
})