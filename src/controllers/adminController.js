const {vinos, writeVinosJSON} = require("../data/db");

module.exports  = {
    admin: (req, res) => {
        res.render("admin/admin", {
            title: "vista admin"
        });
    },
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
            graduacion,
            acidez,
            azucar,
            temperatura,
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
                graduacion,
                acidez,
                azucar,
                temperatura,
                precio,
                descuento,
                image: "default-img.jpg" 
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
            graduacion,
            acidez,
            azucar,
            temperatura,
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
            vino.graduacionAlcoholica = graduacion,
            vino.acidezTotal = acidez,
            vino.azucarResidual = azucar,
            vino.temperaturaRecomendada = temperatura,
            vino.precio = precio,
            vino.descuento = descuento,
            vino.image = "default-img.jpg"
            }
        })
        
        writeVinosJSON(vinos);
        res.redirect("/admin/products")
    },

};
