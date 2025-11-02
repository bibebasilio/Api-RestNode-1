import {Router} from "express"

const router = Router()

//  todas las app las reemplazo x router
/*const products = [{      // se trajo index.js provisoriamente
    id: 1,
    name: "Camiseta Deportiva",
    price: 150,
    categories: ["ropa", "deportiva"],
},
{
    id: 2,
    name: "Zapatos Running",
    price: 1200,
    categories: ["calzado", "deportes"]
},
{
    id: 3,
    name: "Mochila Escolar",
    price: 800,
    categories: ["mochilas", "escolar"],
},
{
    id: 4,
    name: "Auriculares Bluetooth",
    price: 800,
    categories: ["tecnologia", "audio"],
},
    {
    id: 5,
    name: "Botella Termica",
    price: 220,
    categories: ["Hogar", "accesorios"],
}]; */ // pasa al controlador
    
    
    router.get("/", (req, res) => {
    res.json({ message: "bienvenidos a nuestra Api Rest!" });
}); 

// rutas metodo get
import {
    getAllProducts,
    searchProducts,
    getProductById,
} from "../controllers/products.controlles.js";


router.get("/products", getAllProducts);
// (req, res) => {
router.get("/products/search", searchProducts);
router.get("/products/:id", getProductById);

   /* const { category } = req.query;

    if (category) {
        const productsFiltered = products.filter((item) =>
            item.categories.includes(category)
        );

        return res.json(productsFiltered);
    
    } else {
        res.json(products);
    }
});*/

//  buscamos x nombre articulo

// ruta get id

// --------




export default router;

