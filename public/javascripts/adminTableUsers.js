window.addEventListener("load", ()=>{
    let inputSearchAdmin2 = document.querySelector(".input-search-admin2");
    let users1 = document.querySelectorAll(".users");
        
        inputSearchAdmin2.addEventListener("keyup", (e)=>{
            if(e.target.value == inputSearchAdmin2.value){
                if(e.key === "Escape"){
                    e.target.value="";
                }

                users1.forEach(element=>{
                    if(element.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                        element.classList.remove("filter-users-admin2");                                
                    }else{
                            element.classList.add("filter-users-admin2")
                    }
                })
            }                   
        });
})