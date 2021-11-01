$agregar = document.querySelector(".agregar");
$img = document.querySelector(".img-prueba img");
$title = document.querySelector(".title-p");
$price = document.querySelector(".price");
$quantity = document.querySelector(".cantidad");

$agregar.addEventListener("click", ()=>{
    let add = {
        id: localStorage.length + 1,
        title: $title.innerText,
        image: $img.src,
        price: $price.innerText,
        quantity: $quantity.value
    }

    localStorage.setItem(localStorage.length + 1, JSON.stringify(add));
    
});