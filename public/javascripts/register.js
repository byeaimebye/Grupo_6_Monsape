window.addEventListener("load", () =>{
    let _fullname = document.querySelector("#input-fullname-register"),
    _email = document.querySelector("#input-email-register"),
    _pass = document.querySelector("#input-password-register"),
    _rePass = document.querySelector("#input-password2-register"),
    _form = document.querySelector(".form-container")

    _fullnameErrors = document.querySelector("#error-fullname-register"),
    _emailErrors = document.querySelector("#error-email-register"),
    _passErrors = document.querySelector("#error-password-register"),
    _rePassErrors = document.querySelector("#error-password2-register"),
    _allErrors = document.querySelectorAll("small")

     //Expresiones regulares.
     regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
     regExDNI = /^[0-9]{7,8}$/,
     regExTEL = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
     regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
     regExCP = /^[0-9]{4,8}$/;

     
    /* ******VALIDACIONES******* */
    _fullname.addEventListener("blur", () => {
        let $value = _fullname.value.trim();

        switch (true) {
            case !$value:
                _fullname.placeholder = "";
                _fullnameErrors.style.display = "block";
                _fullnameErrors.style.border = "1px oranged solid";
                _fullnameErrors.innerHTML = "";
                _fullnameErrors.innerHTML = "El campo está vacío.";
                _fullname.classList.remove("warning");
                _fullname.classList.remove("valid");
                _fullname.classList.add("error");
                document.querySelector(".div-fullname-register .fa-check-circle").style.display = "none";
                document.querySelector(".div-fullname-register .fa-info-circle").style.display = "block";
                document.querySelector(".div-fullname-register .fa-info-circle").style.color = "darkred";
                break;
            case !regExAlpha.test($value):
                _fullname.placeholder = "";
                _fullnameErrors.style.display = "block";
                _fullnameErrors.style.color = "darkred";
                _fullnameErrors.innerHTML = "";
                _fullnameErrors.innerHTML = "Ingresa un nombre válido.";
                _fullname.classList.remove("warning");
                _fullname.classList.remove("valid");
                _fullname.classList.add("error");
                document.querySelector(".div-fullname-register .fa-check-circle").style.display = "none";
                document.querySelector(".div-fullname-register .fa-info-circle").style.display = "block";
                document.querySelector(".div-fullname-register .fa-info-circle").style.color = "darkred";
                break;
            default:
                _fullnameErrors.style.display = "none";
                _fullname.classList.remove("warning");
                _fullname.classList.remove("error");
                _fullname.classList.add("valid");
                document.querySelector(".div-fullname-register .fa-check-circle").style.display = "block";
                document.querySelector(".div-fullname-register .fa-check-circle").style.color = "green";
                document.querySelector(".div-fullname-register .fa-info-circle").style.display = "none";
                break;
        };
    });
    _email.addEventListener("blur", () => {
        let $value = _email.value.trim();

        switch (true) {
            case !$value:
                _email.placeholder = "";
                _emailErrors.style.display = "block";
                _emailErrors.style.color = "orangered";
                _emailErrors.innerHTML = "";
                _emailErrors.innerHTML = "El campo está vacío.";
                _email.classList.remove("error");
                _email.classList.remove("valid");
                _email.classList.add("warning");
                document.querySelector(".div-email-register .fa-check-circle").style.display = "none";
                document.querySelector(".div-email-register .fa-info-circle").style.display = "block";
                document.querySelector(".div-email-register .fa-info-circle").style.color = "orangered";
                break;
            case !regExEmail.test($value):
                _email.placeholder = "";
                _emailErrors.style.display = "block";
                _emailErrors.style.color = "darkred";
                _emailErrors.innerHTML = "";
                _emailErrors.innerHTML = "Ingresa un email válido.";
                _email.classList.remove("warning");
                _email.classList.remove("valid");
                _email.classList.add("error");
                document.querySelector(".div-email-register .fa-check-circle").style.display = "none";
                document.querySelector(".div-email-register .fa-info-circle").style.display = "block";
                document.querySelector(".div-email-register .fa-info-circle").style.color = "darkred";
                break;
            default:
                _emailErrors.style.display = "none";
                _email.classList.remove("warning");
                _email.classList.remove("error");
                _email.classList.add("valid");
                document.querySelector(".div-email-register .fa-check-circle").style.display = "block";
                document.querySelector(".div-email-register .fa-check-circle").style.color = "green";
                document.querySelector(".div-email-register .fa-info-circle").style.display = "none";
                break;
        };
    });

_pass.addEventListener("blur", ()=>{
    let $value = _pass.value.trim();

    switch (true){
        case !$value:
            _pass.placeholder = "";
            _passErrors.style.display ="block";
            _passErrors.style.color ="orangered";
            _passErrors.innerHTML = "";
            _passErrors.innerHTML = "El campo está vacio";
            _pass.classList.remove("error");
            _pass.classList.remove("valid");
            _pass.classList.add("warning");
            document.querySelector(".div-password-register .fa-check-circle").style.display ="none";
            document.querySelector(".div-password-register .fa-info-circle").style.display="block";
            document.querySelector(".div-password-register .fa-info-circle").style.color= "orangered";
            break;
            case ($value.length<6 || $value.length>12):
                _pass.placeholder = "";
                _passErrors.style.display = "block";
                _passErrors.style.color = "darkred";
                _passErrors.innerHTML = "";
                _passErrors.innerHTML = "La contraseña debe contener entre 6 y 12 dígitos.";
                _pass.classList.remove("warning");
                _pass.classList.remove("valid");
                _pass.classList.add("error");
                document.querySelector(".div-password-register .fa-check-circle").style.display = "none";
                document.querySelector(".div-password-register .fa-info-circle").style.display= "block";
                document.querySelector(".div-password-register .fa-info-circle").style.color="darkred";
                break;
            default:
                _passErrors.style.display = "none";
                _pass.classList.remove("warning");
                _pass.classList.remove("error");
                _pass.classList.add("valid");
                document.querySelector(".div-password-register .fa-check-circle").style.display="block";
                document.querySelector(".div-password-register .fa-check-circle").style.color = "green";
                document.querySelector(".div-password-register .fa-info-circle").style.display ="none";
                break;
    }
});

_rePass.addEventListener("blur", ()=>{
    let $value = _rePass.value.trim();

    switch (true) {
        case !$value:
            _rePass.placeholder = "";
            _rePassErrors.style.display ="block";
            _rePassErrors.style.color= "orangered";
            _rePassErrors.innerHTML= "";
            _rePassErrors.innerHTML = "El campo está vacio";
            _rePass.classList.remove("error");
            _rePass.classList.remove("valid");
            _rePass.classList.add("warning");
            document.querySelector(".div-password2-register .fa-check-circle").style.display = "none";
            document.querySelector(".div-password2-register .fa-info-circle").style.display= "block";
            document.querySelector(".div-password2-register .fa-info-circle").style.color= "orangered";
            break;
        case !($value === _pass.value.trim()):
            _pass.placeholder = "";
            _passErrors.style.display = "block";
            _passErrors.style.color = "darkred";
            _passErrors.innerHTML = "";
            _passErrors.innerHTML = "Los datos no coinciden."
            _pass.classList.remove("warning");
            _pass.classList.remove("valid");
            _pass.classList.add("error");
            document.querySelector(".div-password-register .fa-check-circle").style.display = "none";
            document.querySelector(".div-password-register .fa-info-circle").style.display = "block";
            document.querySelector(".div-password-register .fa-info-circle").style.color = "darkred";
            _passErrors.innerHTML = "Los datos no coinciden.";
            _rePass.classList.remove("warning");
            _rePass.classList.remove("valid");
            _rePass.classList.add("error");
            document.querySelector(".div-password2-register .fa-check-circle").style.display= "none";
            document.querySelector(".div-password2-register .fa-info-circle").style.display= "block";
            document.querySelector(".div-password2-register .fa-info-circle").style.color= "darkred";
            break;
    default:
        _rePassErrors.style.display = "none";
        _rePass.classList.remove("warning");
        _rePass.classList.remove("error");
        _rePass.classList.add("valid");
        document.querySelector(".div-password2-register .fa-check-circle").style.display ="block";
        document.querySelector(".div-password2-register .fa-check-circle").style.display ="green";
        document.querySelector(".div-password2-register .fa-info-circle").style.display ="none";
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
 //Focus events.
 _fullname.addEventListener("focus", () => {
    _fullnameErrors.style.display = "none";
});
_email.addEventListener("focus", () => {
    _emailErrors.style.display = "none";
});
_pass.addEventListener("focus", () => {
    _passErrors.style.display = "none";
});
_rePass.addEventListener("focus", () => {
    _rePassErrors.style.display = "none";
});
})