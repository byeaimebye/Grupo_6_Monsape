


window.addEventListener("load", ()=>{
    let inputSearchTienda = document.querySelector(".searchTienda");
    
    let productsSearchTienda = Array.from(document.querySelectorAll(".product-container"));
    console.log(productsSearchTienda)    

        inputSearchTienda.addEventListener("keyup", (e)=>{
            if(e.target.value == inputSearchTienda.value){
                if(e.key === "Escape"){
                    e.target.value="";
                }

               productsSearchTienda.forEach(element=>{
                   console.log(element)
                    if(element.textContent.toLowerCase().includes(e.target.value)){
                        element.style.display = "flex";                                
                    }else{
                        element.style.display = "none";  
                    }
                })
            }                   
        });
})