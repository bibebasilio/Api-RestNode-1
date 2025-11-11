//  todas las app las reemplazo x router
// los productos pasaron al modelo archivo Product.js

// importo de modelo los productos
import * as Model  from "../models/Product.js";

// agregamos el async xq getAllProducts es async en products.js 
export const getAllProducts = async (req, res) => {
// viene de productsroute.js
    const { category } = req.query;

/// coloco await xq getAllProducts es async en products.js
    const products = await Model.getAllProducts(); 

    if (category) {
        const productsFiltered = products.filter((item) =>
            item.categories.includes(category)
        );

        return res.json(productsFiltered);
    
    } else {
        res.json(products);
    }
};

export const searchProducts = (req, res) => {
    const { name } = req.query;
   
    if (!name) {
        return res.status(400).json({ error: " El nombre es requerido" });
    }
    
const products = Model.getAllProducts();

    const productsFiltered = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (!productsFiltered) {

        return res.status(404).json({ error: " No se econtraron Productos" });
    }
    res.json(productsFiltered);
};



export const getProductById = async (req, res) => {
    // quito el parseInt xq en firebase el id es string
    const id =(req.params.id);

    // const product = products.find((item) => item.id == id); cambiamos por model
    const product = await Model.getProductById(id);
   // //const product = Model.getPtroductById(id);
    
    if (!product) {
        
        res.status(404).json({ error: "No Existe el Producto" });
    }

    res.json(product);
};

//creo funcinon porq voy a exportar
// aca en req recibo el curpo de la peticion
export const createProduct = (req, res) => {
 //  // console.log(req.body);
     const{ name, price, categories } = req.body;

    Model.createProduct({ name, price, categories });//
    // aca iria la logica para guardar en la base de datos
 //   console.log("Producto creado:", { name, price, categories });   
    res.send("ok")
};