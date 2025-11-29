# API REST con Node.js y Firebase

## DESCRIPCION

API REST para gestion de productos desarrollada con Node.js y Express.



##  INSTALACION

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar archivo de ejemplo y completarlos datos requeridos

cp .env-example .env
```

Luego editar el archivo '.env' con los calores correspondietes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```
## DOCUMENTACION DE LA API

### Obtener todos los productos

- **URL:** `/api/products`
- **Método:** `GET`     
- **Descripción:** Obtiene una lista de todos los productos.
- **Respuesta exitosa:** 
  - **Código:** 200 OK 
  - **Contenido:** 
    ```json
    [
      {
        "id": "1",
        "name": "Producto 1",
        "price": 100
      },
      {
        "id": "2",
        "name": "Producto 2",
        "price": 200
      }
    ]
    ``` 
### Crear un nuevo producto 
- **URL:** `/api/products`
- **Método:** `POST`    
- **Descripción:** Crea un nuevo producto.
- **Cuerpo de la solicitud:**           
    ```json
    {
      "name": "Producto 3",
      "price": 300
    }
    ```
- **Respuesta exitosa:** 
  - **Código:** 201 Created     
    - **Contenido:** 
        ```json
        {
        "id": "3",
        "name": "Producto 3",
        "price": 300
        }
        ```
### Obtener un producto por ID
- **URL:** `/api/products/:id`                  

- **Método:** `GET`     
- **Descripción:** Obtiene un producto específico por su ID.    
- **Respuesta exitosa:** 
  - **Código:** 200 OK 
  - **Contenido:** 
    ```json
    {
      "id": "1",
      "name": "Producto 1",
      "price": 100
    }
    ```
### Actualizar un producto por ID
- **URL:** `/api/products/:id`              
- **Método:** `PUT`
- **Descripción:** Actualiza un producto específico por su ID.

- **Cuerpo de la solicitud:**           
    ```json
    {
      "name": "Producto 1 Actualizado",
      "price": 150
    }
    ```             
- **Respuesta exitosa:** 
  - **Código:** 200 OK
    - **Contenido:** 
        ```json
        {
        "id": "1",
        "name": "Producto 1 Actualizado",
        "price": 150
        }
        ```
### Eliminar un producto por ID
- **URL:** `/api/products/:id`      
- **Método:** `DELETE`
- **Descripción:** Elimina un producto específico por su ID.            
- **Respuesta exitosa:** 
  - **Código:** 204 No Content

## TECNOLOGIAS UTILIZADAS
- Node.js
- Express       
- Firebase Firestore
- dotenv    
- nodemon (para desarrollo) 


## AUTOR- BB
                      
