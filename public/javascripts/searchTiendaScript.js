window.addEventListener("load", ()=>{
    let inputSearchTienda = document.querySelector(".searchTienda");
    
    let productsSearchTienda = document.querySelectorAll(".product-container");
        
        inputSearchTienda.addEventListener("keyup", (e)=>{
            if(e.target.value == inputSearchTienda.value){
                if(e.key === "Escape"){
                    e.target.value="";
                }

               productsSearchTienda.forEach(element=>{
                    if(element.textContent.toLowerCase().includes(e.target.value)){
                        element.classList.remove("filter-products-search");                                
                    }else{
                            element.classList.add("filter-products-search")
                    }
                })
            }                   
        });
  
})