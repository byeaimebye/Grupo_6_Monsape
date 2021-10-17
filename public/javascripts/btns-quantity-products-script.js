$less = document.querySelector(".menos");
$quantity = document.querySelector(".cantidad");
$more = document.querySelector(".mas");
console.log("botoncitos activos");

let contador = 0;

$less.addEventListener("click", e =>{
    if(contador !== 0){
        contador--;
        $quantity.value = contador;
    }
})
$more.addEventListener("click", e =>{
        contador++;
        $quantity.value = contador;
})