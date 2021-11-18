
window.addEventListener("scroll", () => {
  if(window.scrollY >= 100){
     document.querySelector(".prueba").style.backgroundColor= "rgba(0,0,0,0.8)"  
     document.querySelector(".prueba").style.padding="20px"
     document.querySelector(".prueba").style.transition= "0.8s"
     document.querySelector(".logoCenter img").style.display= "none"
     document.querySelector(".check-on2").style.top = "85px";
     /* document.querySelector(".drop-down-menu-container-profile").style.top = "66px"; */
 }else {
     document.querySelector(".prueba").style.backgroundColor="transparent"
     document.querySelector(".prueba").style.borderBottom= "none"
     document.querySelector(".logoCenter img").style.display= "inline"
     document.querySelector(".logoCenter img").style.transition= "0.8s"
     document.querySelector(".check-on2").style.top = "130px";
   /*   document.querySelector(".drop-down-menu-container-profile").style.top = "119px"; */
    
     
    /*  if(document.querySelector(".check-on2").style.disabled = true){
        document.querySelector(".check-on2").style.disabled = false
     }  */
   
 }
 
})

let _profileDropDown = document.querySelector(".profile-drop-down");
let _dropDownContainer = document.querySelector(".drop-down-menu-container-profile");

_profileDropDown.addEventListener("click",()=>{
    _dropDownContainer.classList.toggle("profile-drop-down-event");
})

