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
///  esto es para instalas firebase

import { db } from "./firebase.js";

import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
    try {
    
        const snapshot = await getDocs(productsCollection);
     ////     //snapshot.forEach((doc) => {
        //     console.log(doc.id, "=>", doc.data());
        // });
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error al obtener los documentos: ", error);
    }
};    




// /*export const getAllProducts = () => {
 //   return products;
// };*/

// vamos a traer desde la base de datos x su id
/*export const getProductById = (id) => {
    return products.find((item) => item.id == id);
};*/
export const getProductById = async (id) => {
    try {
        const productRef = doc(productsCollection, id); 
        const snapshot = await getDoc(productRef); 
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
     } catch (error) {
        console.error("Error al obtener el documento: ", error);
        throw error;
    }       
};

export const createProduct = (data) => {
    console.log(data);
   
};  
