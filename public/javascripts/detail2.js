const modalAdd2 = document.querySelector('#modalAdd2');
const ing = document.querySelector('#ing');
const formdetail2 = document.querySelector('.form');
const textFormdetail2 = document.querySelector('.text-forms');
if(window.location.href != "http://localhost:3080/users/login"){

    
    ing.addEventListener("click", () => {
        openModal2()
    })
    const openModal2 = () => {
        modalAdd2.style.display = 'flex';
    }
    
    const closeModal2 = () => {
        modalAdd2.style.display = 'none';
    }
    
    modalAdd2 ? modalAdd2.onclick = (event) => {
        if(event.target == modalAdd2){
            closeModal2();
        }
    }:"";

    formdetail2.style.textAlign = "center";
    textFormdetail2.style.marginLeft = "";
} else {
    modalAdd2.innerHTML = "";
}