const db = require("../../database/models");

module.exports = {
    asignRolAdmin: (req, res)=> {
        console.log(req.body)
        db.User.update({
            rol: req.params.rol
        }, {
            where: { id: +req.params.id }
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'http://localhost:3080/api/admin/edit/user/'+ req.params.id+"/"+ req.params.rol,
                        msg: "Operación exitosa."
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'http://localhost:3080/api/admin/edit/user/'+ req.params.id+"/"+ req.params.rol,
                        msg: "Ocurrió un error."
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    deleteUser: (req, res)=>{
        db.User.destroy({
            where: {
                id : +req.params.id
            }
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'http://localhost:3080/api/admin/delete/user/'+ req.params.id,
                        msg: "Operación exitosa."
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'http://localhost:3080/api/admin/delete/user/'+ req.params.id,
                        msg: "Ocurrió un error."
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
}