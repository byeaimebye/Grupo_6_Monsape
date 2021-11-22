
window.addEventListener("scroll", () => {
  if(window.scrollY >= 100){
     document.querySelector(".prueba").style.backgroundColor= "rgba(0,0,0,0.8)"  
     document.querySelector(".prueba").style.padding="20px"
     document.querySelector(".prueba").style.transition= "0.8s"
     document.querySelector(".logoCenter img").style.display= "none"
     document.querySelector(".check-on2").style.top = "85px";
     if(document.querySelector(".drop-down-menu-container-profile").style.display != "none"){
         document.querySelector(".drop-down-menu-container-profile").style.top = "85px";
     }
    }else {
     document.querySelector(".prueba").style.backgroundColor="transparent"
     document.querySelector(".prueba").style.borderBottom= "none"
     document.querySelector(".logoCenter img").style.display= "inline"
     document.querySelector(".logoCenter img").style.transition= "0.8s"
     document.querySelector(".check-on2").style.top = "137px";
     if(document.querySelector(".drop-down-menu-container-profile").style.display != "none"){
         document.querySelector(".drop-down-menu-container-profile").style.top = "137px";
     }
    
     
     
    }
 
})

let _profileDropDown = document.querySelector(".profile-drop-down");
let _dropDownContainer = document.querySelector(".drop-down-menu-container-profile");

document.querySelector(".input-productos-check").addEventListener("click", ()=> {
    if(document.querySelector(".input-productos-check").checked == true){
       document.querySelector(".prueba").style.backgroundColor= "rgba(0,0,0,0.9)"
    }else {
        
        document.querySelector(".prueba").style.backgroundColor= "transparent"
    }

})

if(document.querySelector(".input-productos-check").checked == true){
   document.querySelector(".prueba").style.backgroundColor= "green"
} 
_profileDropDown.addEventListener("click",()=>{
    _dropDownContainer.classList.toggle("profile-drop-down-event");
    
    if(_dropDownContainer.classList.contains("profile-drop-down-event")){
        document.querySelector(".prueba").style.backgroundColor= "rgba(0,0,0,0.8)"
    }
})


