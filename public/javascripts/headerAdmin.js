
window.addEventListener("scroll", () => {
    
    if(window.scrollY >= 100){
        document.querySelector(".logoAdmin").style.backgroundColor = "transparent";
       document.querySelector(".logoAdmin").style.display = "none";
       document.querySelector(".logoAdmin").style.transition = "0.8s";
   }else {
   
    document.querySelector(".logoAdmin").style.display = "block";
      
    document.querySelector(".logoAdmin").style.transition = "0.8s";
     
   }
   
  })