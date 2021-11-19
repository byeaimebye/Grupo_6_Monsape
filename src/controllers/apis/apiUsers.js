const db = require("../../database/models");

module.exports = {
    asignRolAdmin: (req, res)=> {
        db.User.update({
            rol: "ROL_ADMIN"
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
                        url: 'api/admin/userProfileEdit/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/admin/userProfileEdit/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
}