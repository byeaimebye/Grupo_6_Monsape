$agregar = document.querySelector(".agregar");
$img = document.querySelector(".img-prueba img");
$title = document.querySelector(".title-p");
$price = document.querySelector(".price");
$quantity = document.querySelector(".cantidad");
$main = document.querySelector(".main-prueba");

console.log("El id es: " + $main.id);

$agregar.addEventListener("click", ()=>{
    //carrito = JSON.parse(carrito);

    let add = {
        id: $main.id,
        title: $title.innerText,
        image: $img.src,
        price: $price.innerText,
        quantity: $quantity.value
    }
    
    localStorage.setItem("cart"+add.id, JSON.stringify(add));

    /* localStorage.setItem(localStorage.length + 1, JSON.stringify(add)); */
    
});