window.addEventListener("load", ()=>{
    let inputSearchAdmin1 = document.querySelector(".input-search-admin1");
    let row= document.querySelectorAll(".row");
    let products1 = document.querySelectorAll(".products");
        
        inputSearchAdmin1.addEventListener("keyup", (e)=>{
            if(e.target.value == inputSearchAdmin1.value){
                if(e.key === "Escape"){
                    e.target.value="";
                }

                products1.forEach(element=>{
                    if(element.textContent.toLowerCase().includes(e.target.value)){
                        element.classList.remove("filter-products-admin1");                                
                    }else{
                            element.classList.add("filter-products-admin1")
                    }
                })
            }                   
        });
                // row.forEach(element=>{
                //     if(element.textContent.toLowerCase().includes(e.target.value)){
                //         products1.forEach(el=>{
                //             if(el.textContent.includes(element.textContent)){
                //                 console.log(el.class);
                //                 el.classList.remove("filter-products-admin1");                                
                //             }else{
                //                 el.classList.add("filter-products-admin1")
                //             }
                //         })
                //     }                   
                // });

                



                // row.forEach(element=>{
                //     if(element.textContent.toLowerCase().includes(e.target.value)){
                //         products1.forEach(el=>{
                //             el.classList.remove("filter-products-admin1")
                //         })
                //     }else{
                //         products1.forEach(el=>{
                //             el.classList.add("filter-products-admin1")
                //     })                   
                // }});
            


    // function searchFilters(input, selector){
    //     document.addEventListener("keyup", (e)=>{
    //         if(e.target.matches(input)){
    //             console.log(e.key);
    //             console.log(e.target.value);
    //             if(e.key === "Escape") e.target.value="";

    //             selector.forEach((element)=>
    //             element.textContent.toLowerCase().includes(e.target.value)
    //             ? element.classList.remove("filter-products-admin1")
    //             : element.classList.add("filter-products-admin1")
    //             );
    //         }
    //     })
    // }

    // searchFilters(inputSearchAdmin1,row);
})