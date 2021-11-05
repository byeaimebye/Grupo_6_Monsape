const db = require("../../database/models");

const getUrl = (req) =>
  req.protocol + "://" + req.get("host") + req.originalUrl;

module.exports = {
    findOne : (req, res)=>{/* 
        res.send("hola"); */
        db.Wine.findByPk(req.params.id,{
            include: [
              {association: "category"},
              {association: "collection"},
              {association: "variety"}
            ]
        })       
        .then(detail =>{/* 
            return res.send(detail); */
          if(detail){
              return res.status(200).json({
                  meta:{
                      endPoint: "http://localhost:3080/api/hola/"+req.params.id,
                      name: detail.title
                  },
                  data: detail
              });

          }else {
            res.status(404).json({
                meta: {
                  status: 404,
                  msg: "ID not found",
                },
              })
          }
      }) 
    }
}