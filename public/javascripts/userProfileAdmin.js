window.addEventListener("click", e =>{

    const _modalUserProfileAdmin = document.querySelector(".modal-container-user-profile-admin");
    const _AsignAdminUserAdminProfile = document.querySelector("#btn-asign-admin");
    const _yesUserAdminProfile = _modalUserProfileAdmin.querySelector("#yes");
    let cont = 0;
    const _id = document.querySelector(".form-user-profile-admin").id;

    const asignRolAdmin = async ()=>{
        await fetch('http://localhost:3080/admin/userProfileAdmin/'+ _id)
            .then(response => response.json())
            .then(asign => {
                console.log(asign);
                if(asign){
                    document.querySelector(".h4-modal-user-profile-admin").innerText = "¡Producto agregado exitosamente!";
                    document.querySelector("#yes").style.display = "none";
                    document.querySelector("#no").innerText = "ok";
                    cont = 1;
                }
                    document.querySelector(".h4-modal-user-profile-admin").innerText = "Ocurrió un error inesperado.";
                    document.querySelector("#yes").style.display = "none";
                    document.querySelector("#no").innerText = "ok";
                    cont = 1;
            }).catch(err => console.log(err));
    }

    _AsignAdminUserAdminProfile.addEventListener("click", e =>{
        e.preventDefault();
        _modalUserProfileAdmin.style.display = "flex";
    })

    document.addEventListener("click", e => {
        switch (true) {
            case e.target.className == _modalUserProfileAdmin.className:
                e.target.style.display = "none";
                break;
            case e.target.id == document.getElementById("yes").id:
                console.log(e.target);
                asignRolAdmin();
                //document.querySelector("#no").id = "ok";
                break;
            case e.target.id == document.querySelector("#no").id:
                console.log(e.target);
                if(cont === 0){
    
                    document.querySelector(".h4-modal-user-profile-admin").innerText = "Acción cancelada.";
                    document.querySelector("#yes").style.display = "none";
                    document.querySelector("#no").style.display = "none";
                    document.querySelector(".modal-user-profile-admin").style.height = "100px";
                    document.querySelector(".modal-user-profile-admin").style.paddingTop = "25px";
                    document.querySelector(".h4-modal-user-profile-admin").style.fontSize = "22px";
                }else{
                    cont = 0;
                    document.querySelector(".modal-container-user-profile-admin").style.display = "none";
                }
                break;
            default:
                break;
        }
    })

})

