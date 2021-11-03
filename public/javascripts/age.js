window.addEventListener("load", ()=>{
  
let inputAge = document.querySelector("#año")
let formAge = document.querySelector("#formAge")

if(!sessionStorage.getItem("edad")){
  /* traemos el id modal de confirmacion */
let lamodal = document.querySelector("#myModal")
 /* declaramos la funcion que toma el tiempo de abrir la ventana */
function abrirModal(){
  modalAge = window.setTimeout(modalAbierta,3000);
}
/*esta funcion cambia el estilo de la ventana */
function modalAbierta(){
lamodal.style.display="block";
}
/*ejecutamos la funcion principal */
abrirModal();

}
formAge.addEventListener("submit", (e)=>{
  /*capturamos el año actual */
let añoActual = new Date()

let elAño = añoActual.getFullYear();

e.preventDefault()

let userAge = elAño - inputAge.value 

if((userAge) >= 18 && inputAge.value > 0){
 
sessionStorage.setItem("edad", userAge)
window.location.href = "http://localhost:3080/"
}else{
alert("Deber ser mayor de 18 años")
window.location.href = "http://www.google.com"
} 

})
});


