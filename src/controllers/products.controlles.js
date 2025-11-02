//  todas las app las reemplazo x router
// los productos pasaron al modelo archivo Product.js

// importo de modelo los productos
import * as Model  from "../models/Product.js";


export const getAllProducts = (req, res) => {
// viene de productsroute.js
    const { category } = req.query;

    const products = Model.getAllProducts(); 

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



export const getProductById = (req, res) =>
{
    const id = Number.parseInt(req.params.id);

    // const product = products.find((item) => item.id == id); cambiamos por model
    
    //  const product = Model.getProductBytId(id);
    const product = Model.getPtroductById(id);
    
    if (!product) {
        
        res.status(404).json({ error: "No Existe el Producto" });
    }

    res.json(product);
};