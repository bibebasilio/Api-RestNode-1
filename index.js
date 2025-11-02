import express from "express";

const app = express();

const products = [{
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
}];




app.use((req, res, next) => {
    //res.json({message: "Hola API en Mantenimiento"});
    console.log(req.method)
        next();
});

app.get("/", (req, res) => {
    res.json({ message: "bienvenidos a nuestra Api Rest!" });
});

// rutas metodo get

app.get("/products", (req, res) => {

    const { category } = req.query;

    if (category) {
        const productsFiltered = products.filter((item) =>
            item.categories.includes(category)
        );

        return res.json(productsFiltered);
    
    } else {
        res.json(products);
    }
});

//  buscamos x nombre articulo

app.get("/products/search", (req, res) => {
    const { name } = req.query;
   
    if (!name) {
        return res.status(400).json({ error: " El nombre es requerido" });
    }
    
    const productsFiltered = products.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (!productsFiltered) {

        return res.status(404).json({ error: " No se econtraron Productos" });
    }
});



// ruta get id

app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find((item) => item.id == id);
    
    if (!product) {
        res.status(404).json({ error: "No Existe el Producto" });
    }

    res.json(product);
});
// --------


import notFound from "./src/middlewares/not found.js";

app.use(notFound);


const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
