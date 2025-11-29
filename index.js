import "dotenv/config";

import express from "express";

import cors from "cors";



//// si quiero verificar token a todos las rutas lo agrego aca y lo saco de products.router.js
// import { verifyToken } from "./src/middlewares/verify-token.js";

const app = express();

// esto es un middleware para parsear json
app.use(express.json());

app.use(cors());
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
//  verify token se puede aplicar a todas las rutas 
//app.use('/api', verifyToken, productsRouter);

// middleware para rutas no encontradas

import notFound from "./src/middlewares/not found.js";
app.use(notFound);

/// aagrego puerto desde .env   y uso 3001 x si 3000 esta ocupado
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
