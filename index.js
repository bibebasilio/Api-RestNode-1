import express from "express";

const app = express();

app.use((req, res, next) => {
   res.json({message: "Hola Middleware"});
});

app.get("/", (req, res) => {
    res.send("bienvenidos a nuestra Api Rest!");
});


const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
