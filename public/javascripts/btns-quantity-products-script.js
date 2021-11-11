$less = document.querySelector(".menos");
$quantity = document.querySelector(".cantidad");
$more = document.querySelector(".mas");
console.log("botoncitos activos");

let contador = 1;

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