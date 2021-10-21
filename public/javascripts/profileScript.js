window.addEventListener("load", () => {
    //Capturando campos...
    let _edit = document.querySelector("#edit");
    let _cancel = document.querySelector("#cancel");
    let _accept = document.querySelector("#accept");
    let _inputs = document.querySelectorAll("input");//Contiene todos los inputs.
    let _form = document.querySelector(".main-profile form");
    //inputs capturados individualmente.
    let _fullname = document.querySelector("#input-fullname-profile");
    let _email = document.querySelector("#input-email-profile");
    let _dni = document.querySelector("#input-dni-profile");
    let _tel = document.querySelector("#input-tel-profile");
    let _cp = document.querySelector("#input-cp-profile");
    let _date = document.querySelector("#input-date-profile");
    let _address = document.querySelector(".txtarea-address");
    //errors
    let _allErrors = document.querySelectorAll(".small-form-profile")
    _fullnameErrors = document.querySelector("#nameErrors"),
        _emailErrors = document.querySelector("#emailErrors"),
        _dniErrors = document.querySelector("#dniErrors"),
        _telErrors = document.querySelector("#telErrors"),
        _cpErrors = document.querySelector("#cpErrors"),
        _dateErrors = document.querySelector("#dateErrors"),
        _addressErrors = document.querySelector("#addressErrors");
    //Expresiones regulares.
    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExDNI = /^[0-9]{7,8}$/,
        regExTEL = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
        regExCP = /^[0-9]{4,8}$/;

    //Evento que desbloquea los campos del formulario al presionar el botón 'editar'.
    _edit.addEventListener("click", () => {
        for (const input of _inputs) {
            input.disabled = false;
        }
        _address.disabled = false;

        console.log("hola")
    });
    //Evento que bloquea los campos del formulario al presionar el botón 'cancelar'.
    _cancel.addEventListener("click", () => {
        //Bloqueando inputs...
        for (const input of _inputs) {
            input.disabled = true;
        }
        _address.disabled = true;//Bloqueando textarea...

        //Almacenando todos los íconos de información...
        let _info = document.querySelectorAll(".fa-info-circle");
        let _check = document.querySelectorAll(".fa-check-circle");
        console.log(_info);
        //Apagando íconos de información...
        for (const info of _info) {
            info.style.display = "none";
        }
        for (const check of _check) {
            check.style.display = "none";
        }
        //Apagando mensajes de error...
        for (const error of _allErrors) {
            error.style.display = "none";
        }
        //Removiendo clases de validaciones de todos los campos...
        _fullname.classList.remove("error");
        _fullname.classList.remove("valid");
        _fullname.classList.remove("warning");

        _email.classList.remove("error");
        _email.classList.remove("valid");
        _email.classList.remove("warning");

        _dni.classList.remove("error");
        _dni.classList.remove("valid");
        _dni.classList.remove("warning");

        _cp.classList.remove("error");
        _cp.classList.remove("valid");
        _cp.classList.remove("warning");

        _tel.classList.remove("error");
        _tel.classList.remove("valid");
        _tel.classList.remove("warning");

        _address.classList.remove("error");
        _address.classList.remove("valid");
        _address.classList.remove("warning");


    });


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
                _fullname.value = "";
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
                _email.value = "";
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


    _dni.addEventListener("blur", () => {

        let $value = _dni.value.trim();
        switch (true) {
            case !$value:
                _dni.placeholder = "";
                _dniErrors.style.display = "block";
                _dniErrors.style.color = "orangered";
                _dniErrors.innerHTML = "";
                _dniErrors.innerHTML = "El campo está vacío.";
                _dni.classList.remove("error");
                _dni.classList.remove("valid");
                _dni.classList.add("warning");
                document.querySelector(".div-dni-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-dni-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-dni-profile .fa-info-circle").style.color = "orangered";
                break;
            case !regExDNI.test($value):
                _dni.placeholder = "";
                _dniErrors.style.display = "block";
                _dniErrors.style.color = "darkred";
                _dni.value = "";
                _dniErrors.innerHTML = "";
                _dniErrors.innerHTML = "Ingresa un dni válido.";
                _dni.classList.remove("warning");
                _dni.classList.remove("valid");
                _dni.classList.add("error");
                document.querySelector(".div-dni-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-dni-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-dni-profile .fa-info-circle").style.color = "darkred";
                break;
            default:
                _dniErrors.style.display = "none";
                _dni.classList.remove("warning");
                _dni.classList.remove("error");
                _dni.classList.add("valid");
                document.querySelector(".div-dni-profile .fa-check-circle").style.display = "block";
                document.querySelector(".div-dni-profile .fa-check-circle").style.color = "green";
                document.querySelector(".div-dni-profile .fa-info-circle").style.display = "none";
                break;
        };
    });

    _tel.addEventListener("blur", () => {

        let $value = _tel.value.trim();
        switch (true) {
            case !$value:
                _tel.placeholder = "";
                _telErrors.style.display = "block";
                _telErrors.style.color = "orangered";
                _telErrors.innerHTML = "";
                _telErrors.innerHTML = "El campo está vacío.";
                _tel.classList.remove("error");
                _tel.classList.remove("valid");
                _tel.classList.add("warning");
                document.querySelector(".div-tel-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-tel-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-tel-profile .fa-info-circle").style.color = "orangered";
                break;
            case !regExTEL.test($value):
                _tel.placeholder = "";
                _telErrors.style.display = "block";
                _telErrors.style.color = "darkred";
                _tel.value = "";
                _telErrors.innerHTML = "";
                _telErrors.innerHTML = "Ingresa un teléfono válido.";
                _tel.classList.remove("warning");
                _tel.classList.remove("valid");
                _tel.classList.add("error");
                document.querySelector(".div-tel-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-tel-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-tel-profile .fa-info-circle").style.color = "darkred";
                break;
            default:
                _telErrors.style.display = "none";
                _tel.classList.remove("warning");
                _tel.classList.remove("error");
                _tel.classList.add("valid");
                document.querySelector(".div-tel-profile .fa-check-circle").style.display = "block";
                document.querySelector(".div-tel-profile .fa-check-circle").style.color = "green";
                document.querySelector(".div-tel-profile .fa-info-circle").style.display = "none";
                break;
        };
    });

    _cp.addEventListener("blur", () => {

        let $value = _cp.value.trim();
        switch (true) {
            case !$value:
                _cp.placeholder = "";
                _cpErrors.style.display = "block";
                _cpErrors.style.color = "orangered";
                _cpErrors.innerHTML = "";
                _cpErrors.innerHTML = "El campo está vacío.";
                _cp.classList.remove("error");
                _cp.classList.remove("valid");
                _cp.classList.add("warning");
                document.querySelector(".div-cp-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-cp-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-cp-profile .fa-info-circle").style.color = "orangered";
                break;
            case !regExCP.test($value):
                _cp.placeholder = "";
                _cpErrors.style.display = "block";
                _cpErrors.style.color = "darkred";
                _cp.value = "";
                _cpErrors.innerHTML = "";
                _cpErrors.innerHTML = "Dato inválido.";
                _cp.classList.remove("warning");
                _cp.classList.remove("valid");
                _cp.classList.add("error");
                document.querySelector(".div-cp-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-cp-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-cp-profile .fa-info-circle").style.color = "darkred";
                break;
            default:
                _cpErrors.style.display = "none";
                _cp.classList.remove("warning");
                _cp.classList.remove("error");
                _cp.classList.add("valid");
                document.querySelector(".div-cp-profile .fa-check-circle").style.display = "block";
                document.querySelector(".div-cp-profile .fa-check-circle").style.color = "green";
                document.querySelector(".div-cp-profile .fa-info-circle").style.display = "none";
                break;
        };
    });

    _address.addEventListener("blur", () => {

        let $value = _address.value.trim();
        switch (true) {
            case !$value:
                _address.placeholder = "";
                _addressErrors.style.display = "block";
                _addressErrors.style.color = "orangered";
                _addressErrors.innerHTML = "";
                _addressErrors.innerHTML = "El campo está vacío.";
                _address.classList.remove("error");
                _address.classList.remove("valid");
                _address.classList.add("warning");
                document.querySelector(".div-address-profile .fa-check-circle").style.display = "none";
                document.querySelector(".div-address-profile .fa-info-circle").style.display = "block";
                document.querySelector(".div-address-profile .fa-info-circle").style.color = "orangered";
                break;
            default:
                _addressErrors.style.display = "none";
                _address.classList.remove("warning");
                _address.classList.remove("error");
                _address.classList.add("valid");
                document.querySelector(".div-address-profile .fa-check-circle").style.display = "block";
                document.querySelector(".div-address-profile .fa-check-circle").style.color = "green";
                document.querySelector(".div-address-profile .fa-info-circle").style.display = "none";
                break;
        };
    });

    //Focus events.
    _fullname.addEventListener("focus", () => {
        _fullnameErrors.style.display = "none";
    });
    _email.addEventListener("focus", () => {
        _emailErrors.style.display = "none";
    });
    _dni.addEventListener("focus", () => {
        _dniErrors.style.display = "none";
    });
    _tel.addEventListener("focus", () => {
        _telErrors.style.display = "none";
    });
    _cp.addEventListener("focus", () => {
        _cpErrors.style.display = "none";
    });
    _address.addEventListener("focus", () => {
        _addressErrors.style.display = "none";
    });

    _form.addEventListener("submit", (e) => {
        let cont = 0;
        for (const element of _form.elements) {
            if (element.classList.contains("error")) {
                cont++;
            } else if (element === _email && (element.classList.contains("error") || element.classList.contains("warning"))) {
                cont++;
            }
        }

        if (cont !== 0) {
            e.preventDefault();
            //Apagando mensajes de error...
            for (const error of _allErrors) {
                error.style.display = "none";
            }
            _form.innerHTML += `<small class="error">Se encontraron algunos errores</small>`;
        } else {
            _form.submit();
            console.log("se envió");
        }
    })
})




