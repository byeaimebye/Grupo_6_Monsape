let slide1Index = 1; //Establece el slide inicial
showSlides1(slide1Index)

// Controles de anterior y siguiente
function plusSlides1(number) {
    showSlides1(slide1Index += number)
}

// Controles de imágenes en miniatura

function currentSlides1(number) {
    showSlides1(slide1Index = number)
}

function showSlides1 (number) {
    let i;
    let slides1 = document.getElementsByClassName("slides1");//captura todos los elementos del DOM que tengan la clase "slides"
    let dots1 = document.getElementsByClassName("dot1");//captura todos los elementos del DOM que tengan la clase "dot"

     /* Si el numero recibido por parámetro es mayor a
     la cantidad de elementos que contienen la clase slides, 
     setea la variable slides a 1. Por lo tanto la imagen que se muestra 
     va a ser la primera, con esto evitamos que haya un error al pasar un
     índice que no corresponda a la longitud del array */
    if(number > slides1.length){
        slide1Index = 1 
    }
    /* si el número recibido por parámetro es menor a 1, setea la variable
    slideIndex a el largo del array, con lo cual evitamos el error por
    un indice menor. Muestra la ultima imagen. */
    if(number < 1) {
        slide1Index = slides1.length
    }

    for (i = 0; i < slides1.length; i++){
        slides1[i].style.display = "none";
    }

    /* Recorre el array de puntos y en cada iteración reemplaza la clase 
    "dot-active" de todos los elementos que la contengan */
    for ( i = 0; i < dots1.length; i++){
        dots1[i].className = dots1[i].className.replace(" dot1-active", "")
    }

    /* Según el índice indicado en la variable, se le dará display "block" al slide que corresponda */
    slides1[slide1Index-1].style.display = "block";
    dots1[slide1Index-1].className += " dot1-active";
}

setInterval(() => {
    currentSlides1(slide1Index + 1)
}, 3000)