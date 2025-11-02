const products = [{ // se trajo index.js provisoriamente
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

export const getAllProducts = () => {
    return products;
};

export const getProductById = (id) => {
    return products.find((item) => item.id == id);
};
        