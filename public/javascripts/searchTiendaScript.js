window.addEventListener("load", ()=>{
    let inputSearchTienda= document.querySelector(".searchTienda");
    let productSearchTienda = document.querySelectorAll(".product-container");
        
        inputSearchTienda.addEventListener("keyup", (e)=>{
            if(e.target.value == inputSearchTienda.value){
                if(e.key === "Escape"){
                    e.target.value="";
                }

                productSearchTienda.forEach(element=>{
                    
                    if(element.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                        element.classList.remove("filter-products-search");                                
                    }else{
                        console.log(element)
                            element.classList.add("filter-products-search")
                    }
                })
            }                   
        });
})