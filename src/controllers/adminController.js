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
			Maridaje,
            graduacion,
            acidez,
            azucar,
            temperatura,
            temperatura1,
            precio,
            descuento } = req.body;
		
		let nuevoProducto = {
			id: lastId + 1,
                nombre, 
                descripcion, 
                variedad,
                categoria,
                coleccion, 
                Maridaje,
                graduacion,
                acidez,
                azucar,
                temperatura,
                temperatura1,
                precio,
                descuento,
                image: "default-img.jpg" 
		};

       

		vinos.push(nuevoProducto);

		writeVinosJSON(vinos); 

		 res.redirect('/admin/products')  
    }   
};
