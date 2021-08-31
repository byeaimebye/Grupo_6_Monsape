const {vinos, writeVinosJSON, users, writeUsersJSON} = require("../data/db");

module.exports  = {
    admin: (req, res) => {
        res.render("admin/admin", {
            title: "vista admin"
        });
    },
    //--------------------Administración de Productos-----------------------
    products: (req, res)=> {
        res.render("admin/adminProducts", {
            vinos,
            title: "vista admin"
        })
    },
    charge: (req, res) =>{
        res.render("admin/chargeProduct", {title: "Carga de productos"})
    },
    productCreate: (req,res) =>{
        
        let lastId = 1;
        vinos.forEach(vino => {
			if(vino.id > lastId){
				lastId = vino.id
			}
		});
		let { nombre, 
			descripcion, 
			variedad,
			categoria,
            coleccion,
            stock, 
			Maridaje,
            graduacionAlcoholica,
            acidezTotal,
            azucarResidual,
            temperaturaRecomendada,
            precio,
            descuento } = req.body;
		
		let nuevoProducto = {
			id: lastId + 1,
                nombre, 
                descripcion, 
                variedad,
                categoria,
                coleccion,
                stock, 
                Maridaje,
                graduacionAlcoholica,
                acidezTotal,
                azucarResidual,
                temperaturaRecomendada,
                precio,
                descuento,
                image:  req.file ? '/VinosJson/' + req.file.filename : "default-img.jpg"
		};

       

		vinos.push(nuevoProducto);

		writeVinosJSON(vinos); 

		 res.redirect('/admin/products')  
    }, 
    edit: (req, res) =>{
     let vino = vinos.find(vino => { return vino.id === +req.params.id}) 
     res.render('admin/editProduct',{
         title: "Edición de productos",
        vino 
     })
     
    },   
    
    productEdit : (req, res) =>{
        let {
            nombre, 
			descripcion, 
			variedad,
			categoria,
            coleccion,
            stock, 
			Maridaje,
            graduacionAlcoholica,
            acidezTotal,
            azucarResidual,
            temperaturaRecomendada,
            precio,
            descuento 
        } = req.body;

        vinos.forEach(vino =>{
            if(vino.id === +req.params.id){
            vino.id = vino.id,
            vino.nombre = nombre,
            vino.descripcion = descripcion,
            vino.variedad = variedad,
            vino.categoria = categoria,
            vino.coleccion = coleccion,
            vino.stock = stock,
            vino.Maridaje = Maridaje,
            vino.graduacionAlcoholica = graduacionAlcoholica,
            vino.acidezTotal = acidezTotal,
            vino.azucarResidual = azucarResidual,
            vino.temperaturaRecomendada = temperaturaRecomendada,
            vino.precio = precio,
            vino.descuento = descuento,
            vino.image = req.file ? '/VinosJson/' + req.file.filename : vino.image 
            }
        })
        
        writeVinosJSON(vinos);
        res.redirect("/admin/products")
    },
    productDelete: (req,res)=>{    
     vinos.forEach(vino => {
         if(vino.id === +req.params.id){
             let vinoToDelete = vinos.indexOf(vino);
             vinos.splice(vinoToDelete,1)
         }
     })

     writeVinosJSON(vinos);
     res.redirect("/admin/products")

    },
    usersTable: (req, res) => {
        res.render("admin/adminUsers", {
            users,
            title: "Tabla de Usuarios Registrados"
        })
    }
};
