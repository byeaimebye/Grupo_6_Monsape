
window.addEventListener("load", () =>{
    let 
    _email = document.querySelector("#input-email-login"),
    _pass = document.querySelector("#input-pass-login"),
    _form = document.querySelector(".form-container"),
    

  
    _emailErrors = document.querySelector(".error-email-login"),
    _passErrors = document.querySelector(".error-password-login"),
   
     
   //Expresiones regulares.
   regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
   regExDNI = /^[0-9]{7,8}$/,
   regExTEL = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
   regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
   regExCP = /^[0-9]{4,8}$/;

     
    /* ******VALIDACIONES******* */


    _email.addEventListener("blur", ()=>{
        let $value = _email.value.trim();
        switch(true){
            case !$value:
                _email.placeholder="";
                _emailErrors.style.display = "block";
                _emailErrors.style.color="orangered";
                _emailErrors.innerHTML = "";
                _emailErrors.innerHTML = "El campo esta vacio";
                _email.classList.remove("error");
                _email.classList.remove("valid");
                _email.classList.add("warning");
                document.querySelector(".div-email-login .fa-check-circle").style.display = "none";
                document.querySelector(".div-email-login .fa-info-circle").style.display = "block";
                document.querySelector(".div-email-login .fa-info-circle").style.color = "orangered";
                break;
            case !regExEmail.test($value):
                _email.placeholder = "";
                _emailErrors.style.display ="block";
                _emailErrors.style.color= "darkred";
                _emailErrors.innerHTML = "";
                _emailErrors.innerHTML = "Ingresa un mail valido";
                _email.classList.remove("warning");
                _email.classList.remove("valid");
                _email.classList.add("error");
                document.querySelector(".div-email-login .fa-check-circle").style.display = "none";
                document.querySelector(".div-email-login .fa-info-circle").style.display = "block";
                document.querySelector(".div-email-login .fa-info-circle").style.color = "darkred";
                break;
            default:
                _emailErrors.style.display ="none";
                _email.classList.remove("warning");
                _email.classList.remove("error");
                _email.classList.add("valid");
                document.querySelector(".div-email-login .fa-check-circle").style.display = "block";
                document.querySelector(".div-email-login .fa-check-circle").style.display = "green";
                document.querySelector(".div-email-login .fa-info-circle").style.display = "none";
                break;
        }
    });
    _pass.addEventListener("blur", () => {
        let $value = _pass.value.trim();

        switch (true) {
            case !$value:
                _pass.placeholder = "";
                _passErrors.style.display = "block";
                _passErrors.style.color = "orangered";
                _passErrors.innerHTML = "";
                _passErrors.innerHTML = "El campo está vacío.";
                _pass.classList.remove("error");
                _pass.classList.remove("valid");
                _pass.classList.add("warning");
                document.querySelector(".div-pass-login .fa-check-circle").style.display = "none";
                document.querySelector(".div-pass-login .fa-info-circle").style.display = "block";
                document.querySelector(".div-pass-login .fa-info-circle").style.color = "orangered";
                break;
            case ($value.length<6||$value.length>12):
                _pass.placeholder = "";
                _passErrors.style.display = "block";
                _passErrors.style.color = "darkred";
                _passErrors.innerHTML = "";
                _passErrors.innerHTML = "La contraseña debe contener entre 6 y 12 dígitos.";
                _pass.classList.remove("warning");
                _pass.classList.remove("valid");
                _pass.classList.add("error");
                document.querySelector(".div-pass-login .fa-check-circle").style.display = "none";
                document.querySelector(".div-pass-login .fa-info-circle").style.display = "block";
                document.querySelector(".div-pass-login .fa-info-circle").style.color = "darkred";
                break;
            default:
                _passErrors.style.display = "none";
                _pass.classList.remove("warning");
                _pass.classList.remove("error");
                _pass.classList.add("valid");
                document.querySelector(".div-pass-login .fa-check-circle").style.display = "block";
                document.querySelector(".div-pass-login .fa-check-circle").style.color = "green";
                document.querySelector(".div-pass-login .fa-info-circle").style.display = "none";
                break;
        };
    });

    _form.addEventListener("submit", (e)=>{
        let cont = 0;
        for (const element of _form.elements){
            if(element.classList.contains("error")){
                cont++;
            } else if (element === _email && (element.classList.contains("error") || element.classList.contains("warning"))){
                cont++
            }
    
            if(cont !==0){
                e.preventDefault();
                //apagando mensajes de error
                for (const error of _allErrors){
                    error.style.display = "none";
                }
                alert("se encontraron algunos errores");
            }else{
                _form.submit();
               
            }
            
        }
    });

  
   

   

})