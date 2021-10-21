window.addEventListener("load", () =>{
    let _fullname = document.querySelector("#input-fullname-register"),
    _email = document.querySelector("#input-email-register"),
    _pass = document.querySelector("#input-password-register"),
    _rePass = document.querySelector("#input-password2-register"),

    _fullnameErrors = document.querySelector("#error-fullname-register"),
    _emailErrors = document.querySelector("#error-email-register"),
    _passErrors = document.querySelector("#error-password-register"),
    _rePassErros = document.querySelector("#error-password2-register"),

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
                _fullnameErrors.style.color = "orangered";
                _fullnameErrors.innerHTML = "";
                _fullnameErrors.innerHTML = "El campo está vacío.";
                _fullname.classList.remove("error");
                _fullname.classList.remove("valid");
                _fullname.classList.add("warning");
                document.querySelector(".div-fullname-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-fullname-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-fullname-profile .fa-info-circle").style.color = "orangered";
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
                document.querySelector(".div-fullname-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-fullname-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-fullname-profile .fa-info-circle").style.color = "darkred";
                break;
            default:
                _fullnameErrors.style.display = "none";
                _fullname.classList.remove("warning");
                _fullname.classList.remove("error");
                _fullname.classList.add("valid");
                document.querySelector(".div-fullname-profile .fa-check-circle").style.display = "block";
                document.querySelector(".div-fullname-profile .fa-check-circle").style.color = "green";
                document.querySelector(".div-fullname-profile .fa-info-circle").style.display = "none";
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
                document.querySelector(".div-email-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-email-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-email-profile .fa-info-circle").style.color = "orangered";
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
                document.querySelector(".div-email-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-email-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-email-profile .fa-info-circle").style.color = "darkred";
                break;
            default:
                _emailErrors.style.display = "none";
                _email.classList.remove("warning");
                _email.classList.remove("error");
                _email.classList.add("valid");
                document.querySelector(".div-email-profile .fa-check-circle").style.display = "block";
                document.querySelector(".div-email-profile .fa-check-circle").style.color = "green";
                document.querySelector(".div-email-profile .fa-info-circle").style.display = "none";
                break;
        };
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
                document.querySelector(".div-pass-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-pass-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-pass-profile .fa-info-circle").style.color = "orangered";
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
                document.querySelector(".div-pass-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-pass-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-pass-profile .fa-info-circle").style.color = "darkred";
                break;
            default:
                _passErrors.style.display = "none";
                _pass.classList.remove("warning");
                _pass.classList.remove("error");
                _pass.classList.add("valid");
                document.querySelector(".div-pass-profile .fa-check-circle").style.display = "block";
                document.querySelector(".div-pass-profile .fa-check-circle").style.color = "green";
                document.querySelector(".div-pass-profile .fa-info-circle").style.display = "none";
                break;
        };
    });

    _rePass.addEventListener("blur", () => {
        let $value = _rePass.value.trim();

        switch (true) {
            case !$value:
                _rePass.placeholder = "";
                _rePassErrors.style.display = "block";
                _rePassErrors.style.color = "orangered";
                _rePassErrors.innerHTML = "";
                _rePassErrors.innerHTML = "El campo está vacío.";
                _rePass.classList.remove("error");
                _rePass.classList.remove("valid");
                _rePass.classList.add("warning");
                document.querySelector(".div-rePass-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-rePass-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-rePass-profile .fa-info-circle").style.color = "orangered";
                break;
            case !($value===_pass.value.trim()):
                _pass.placeholder = "";
                _passErrors.style.display = "block";
                _passErrors.style.color = "darkred";
                _passErrors.innerHTML = "";
                _passErrors.innerHTML = "Los datos no coinciden.";
                _pass.classList.remove("warning");
                _pass.classList.remove("valid");
                _pass.classList.add("error");
                document.querySelector(".div-pass-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-pass-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-pass-profile .fa-info-circle").style.color = "darkred";
                _passErrors.innerHTML = "Los datos no coinciden.";
                _rePass.classList.remove("warning");
                _rePass.classList.remove("valid");
                _rePass.classList.add("error");
                document.querySelector(".div-rePass-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-rePass-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-rePass-profile .fa-info-circle").style.color = "darkred";
                break;
            default:
                _rePassErrors.style.display = "none";
                _rePass.classList.remove("warning");
                _rePass.classList.remove("error");
                _rePass.classList.add("valid");
                document.querySelector(".div-rePass-profile .fa-check-circle").style.display = "block";
                document.querySelector(".div-rePass-profile .fa-check-circle").style.color = "green";
                document.querySelector(".div-rePass-profile .fa-info-circle").style.display = "none";
                break;
        };
    });

})