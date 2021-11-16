let _more = document.querySelector(".ver-mas"),
    _confirmar = document.querySelector(".confirmar"),
    _moreDetails = document.querySelector("#more-details"),
    _agregar = document.querySelector(".agregar"),
    _no = document.querySelector("#no"),
    _title = document.querySelector(".title-p"),
    _quantity = document.querySelector(".cantidad"),
    _main = document.querySelector(".main-prueba"),
    _img = document.querySelector(".item-image"),
    _price = document.querySelector(".price");

window.addEventListener("load", () => {

    document.addEventListener("click", e => {
        switch (true) {
            case e.target.className == _confirmar.className:
                window.location.href = "http://localhost:3080/products/tienda";
                break;
            case e.target.className == _more.className:
                _moreDetails.checked = true;
                break;
            case e.target.className == _agregar.className:
                document.querySelector(".h4-modal-product-detail").innerText = "¿Agregar producto al carrito?";
                document.querySelector("#yes").style.display = "block";
                document.querySelector("#no").innerText = "No";
                console.log("ok")
                document.querySelector(".modal-container-product-detail").style.display = "flex";
                break;
            case e.target.className == document.querySelector(".modal-container-product-detail").className:
                e.target.style.display = "none";
                break;
            case e.target.id == document.querySelector("#yes").id:
                let add = {
                    id: _main.id,
                    name: _title.textContent,
                    image: _img.src,
                    price: _price.textContent,
                    quantity: _quantity.value
                }

                localStorage.setItem(add.id, JSON.stringify(add));
                document.querySelector(".h4-modal-product-detail").innerText = "¡Producto agregado exitosamente!";
                document.querySelector("#yes").style.display = "none";
                document.querySelector("#no").innerText = "ok";
                break;
            case e.target.id == _no.id:
                console.log(e.target);
                document.querySelector(".modal-container-product-detail").style.display = "none";
                break;

            default:
                break;
        }
    })
});