const modalAdd2 = document.querySelector('#modalAdd2');

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