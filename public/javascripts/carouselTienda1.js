let slide0Index = 1; //Establece el slide inicial
showSlides0(slide0Index)

// Controles de anterior y siguiente
function plusSlides0(number) {
    showSlides0(slide0Index += number)
}

// Controles de imágenes en miniatura

function currentSlides0(number) {
    showSlides0(slide0Index = number)
}

function showSlides0 (number) {
    let i;
    let slides0 = document.getElementsByClassName("slides0");//captura todos los elementos del DOM que tengan la clase "slides"
    let dots0 = document.getElementsByClassName("dot0");//captura todos los elementos del DOM que tengan la clase "dot"

     /* Si el numero recibido por parámetro es mayor a
     la cantidad de elementos que contienen la clase slides, 
     setea la variable slides a 1. Por lo tanto la imagen que se muestra 
     va a ser la primera, con esto evitamos que haya un error al pasar un
     índice que no corresponda a la longitud del array */
    if(number > slides0.length){
        slide0Index = 1 
    }
    /* si el número recibido por parámetro es menor a 1, setea la variable
    slideIndex a el largo del array, con lo cual evitamos el error por
    un indice menor. Muestra la ultima imagen. */
    if(number < 1) {
        slide0Index = slides0.length
    }

    for (i = 0; i < slides0.length; i++){
        slides0[i].style.display = "none";
    }

    /* Recorre el array de puntos y en cada iteración reemplaza la clase 
    "dot-active" de todos los elementos que la contengan */
    for ( i = 0; i < dots0.length; i++){
        dots0[i].className = dots0[i].className.replace(" dot0-active", "")
    }

    /* Según el índice indicado en la variable, se le dará display "block" al slide que corresponda */
    slides0[slide0Index-1].style.display = "block";
    dots0[slide0Index-1].className += " dot0-active";
}

setInterval(() => {
    currentSlides0(slide0Index + 1)
}, 5000)