import {fetchData} from "./"

window.addEventListener("load", ()=>{
    let inputSearchTienda = document.querySelector(".searchTienda");
    
    let productsSearchTienda = document.querySelectorAll(".product-container");
    //console.log(productsSearchTienda[0].parentElement)
        
        inputSearchTienda.addEventListener("keyup", (e)=>{
            if(e.target.value == inputSearchTienda.value){
                if(e.key === "Escape"){
                    e.target.value="";
                }

               productsSearchTienda.forEach(element=>{
                   console.log(element.querySelector(".title-p"))
                    if(element.textContent.toLowerCase().includes(e.target.value)){
                        element.classList.remove("filter-products-search");                                
                    }else{
                            element.classList.add("filter-products-search")
                    }
                })
            }                   
        });
  
})