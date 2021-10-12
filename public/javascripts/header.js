window.addEventListener("scroll", () => {
  if(window.scrollY >= 100){
     document.querySelector(".prueba").style.backgroundColor= "rgba(0,0,0,0.8)"  
     document.querySelector(".prueba").style.transition= "0.8s"
     document.querySelector(".logoCenter img").style.display= "none"
  
     
 }else {
     document.querySelector(".prueba").style.backgroundColor="transparent"
     document.querySelector(".prueba").style.borderBottom= "none"
     document.querySelector(".logoCenter img").style.display= "inline"
     document.querySelector(".logoCenter img").style.transition= "0.8s"
   
 }
})