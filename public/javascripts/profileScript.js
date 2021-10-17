let edit = document.querySelector("#edit");
let cancel = document.querySelector("#cancel");
let inputs = document.querySelectorAll("input");
let textArea = document.querySelector("#txtarea-address");
let onOff = 0;

edit.addEventListener("click", () =>{
        for (const input of inputs) {
            input.disabled = false;
        }
        textArea.disabled = false;

    console.log("hola")
});

cancel.addEventListener("click", ()=>{
    
    for (const input of inputs) {
        input.disabled = true;
    }
    textArea.disabled = true;
});

