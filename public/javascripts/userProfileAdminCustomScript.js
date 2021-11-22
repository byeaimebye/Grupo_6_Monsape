window.addEventListener("click", e => {
    e.preventDefault();
   let _editUPC = document.querySelector(".btn-edit-upac"),
    _selectUPC = document.querySelector(".select-user-profile-admin"),
    _confirmUPC = document.querySelector(".btn-confirm-upac"),
    _deleteUPC = document.querySelector(".btn-destroy-upac"),
    _modalUPC = document.querySelector(".modal-container-user-profile-admin-custom"),
    _yesUPC = document.querySelector("#yesCustom"),
    _noUPC = document.querySelector("#noCustom"),
    _mainUPC = document.querySelector(".main-user-profile-admin-custom");

    let action = "";
    let cont = 0;

    document.addEventListener("click", e => {
        if (e.target.className === _confirmUPC.className || e.target.className === _deleteUPC.className) {
            action = e.target.className;
        }
        console.log("hola " + action);
        switch (true) {
            case e.target.className === _editUPC.className:
                _selectUPC.disabled = false;
                _confirmUPC.disabled = false;
                break;
            case e.target.className === _modalUPC.className:
                _modalUPC.style.display = "none";
                break;
            case e.target.className === _confirmUPC.className:
                document.querySelector(".modal-user-profile-admin-custom").style.height = "200px";
                document.querySelector(".modal-user-profile-admin-custom").style.paddingTop = "0";
                document.querySelector(".h4-modal-user-profile-admin-custom").style.fontSize = "";
                document.querySelector(".h4-modal-user-profile-admin-custom").innerText = "¿Confirmar cambios?";
                _yesUPC.style.display = "block";
                _noUPC.style.display = "block";
                _noUPC.innerText = "No";
                console.log("ok")
                _modalUPC.style.display = "flex";
                break;
            case e.target.className === _deleteUPC.className:
                document.querySelector(".modal-user-profile-admin-custom").style.height = "200px";
                document.querySelector(".modal-user-profile-admin-custom").style.paddingTop = "0";
                document.querySelector(".h4-modal-user-profile-admin-custom").style.fontSize = "";
                document.querySelector(".h4-modal-user-profile-admin-custom").innerText = "¿Eliminar usuario?";
                _yesUPC.style.display = "block";
                _noUPC.style.display = "block";
                _noUPC.innerText = "No";
                console.log("ok")
                _modalUPC.style.display = "flex";
                break;
            case e.target.id === _yesUPC.id:
                if (action.includes(_deleteUPC.className)) {
                    let destroy = {
                        url: "http://localhost:3080/api/admin/delete/user/" + _mainUPC.id,
                        method: "DELETE"
                    }
                    executeFetch(destroy);
                    break;
                } else if (action.includes(_confirmUPC.className)) {
                    let rol = _selectUPC.options[_selectUPC.options.selectedIndex].value;
                    let update = {
                        url: "http://localhost:3080/api/admin/edit/user/" + _mainUPC.id + "/" + rol,
                        method: "PATCH"
                    }
                    executeFetch(update);
                    break;
                }
            case e.target.id === _noUPC.id:
                console.log(e.target.id);
                if (cont === 0) {

                    document.querySelector(".h4-modal-user-profile-admin-custom").innerText = "Acción cancelada.";
                    _yesUPC.style.display = "none";
                    _noUPC.style.display = "none";
                    document.querySelector(".modal-user-profile-admin-custom").style.height = "100px";
                    document.querySelector(".modal-user-profile-admin-custom").style.paddingTop = "25px";
                    document.querySelector(".h4-modal-user-profile-admin-custom").style.fontSize = "22px";
                } else {
                    cont = 0;
                    document.querySelector(".modal-container-user-profile-admin-custom").style.display = "none";
                    if (action.includes(_deleteUPC.className)) {
                        window.location.href = "http://localhost:3080/admin/usersTable";
                    }
                }
                break;
            default:
                break;
        }
    })

    const executeFetch = async (route) => {

        try {
            let res = await fetch(route.url, { method: route.method })
            let response = res.ok?await res.json():""
            let rta = await response

            if(rta.meta.status == 200){
                console.log(rta)
                cont = 1;
                document.querySelector(".modal-user-profile-admin-custom").style.height = "200px";
                document.querySelector(".modal-user-profile-admin-custom").style.paddingTop = "0";
                document.querySelector(".h4-modal-user-profile-admin-custom").style.fontSize = "";
                document.querySelector(".h4-modal-user-profile-admin-custom").textContent = "";
                document.querySelector(".h4-modal-user-profile-admin-custom").textContent = rta.meta.msg;
                _yesUPC.style.display = "none";
                _noUPC.style.display = "block";
                _noUPC.innerText = "ok";
                _selectUPC.disabled = true;

            }

        } catch (error) {
            throw new Error(error);
        }
    }


})