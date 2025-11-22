import "dotenv/config";

import express from "express";

const app = express();

// esto es un middleware para parsear json
app.use(express.json());

// middleware de mantenimiento



app.use((req, res, next) => {
 //   /* res.json({message: "Hola API en Mantenimiento"});*/
    console.log(req.method)
        next();
});

app.get("/", (req, res) => {
    res.json({ message: "bienvenidos a nuestra Api Rest!" });
});

// rutas
import authRouter from "./src/routes/auth.router.js";
app.use('/api/auth', authRouter);  

import productsRouter from "./src/routes/products.router.js";
app.use('/api',productsRouter);


import notFound from "./src/middlewares/not found.js";
app.use(notFound);

/// aagrego puerto desde .env   y uso 3001 x si 3000 esta ocupado
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
