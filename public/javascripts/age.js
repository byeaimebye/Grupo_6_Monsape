

let age = document.querySelector(".home");
age.onmouseover = function(){
    document.querySelector(".main-ingreso").style.display = "flex"
    document.querySelector(".main-ingreso").style.position = "fixed"
    document.querySelector(".main-ingreso").style.transition = "10s"
}