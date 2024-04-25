# Ejercicio de Manejo de Items con Express

Este ejercicio consiste en una aplicación Express que gestiona una lista de items. Los items tienen un id, nombre y precio. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre estos items, así como buscarlos por diferentes criterios.

## Configuración

1. Instala las dependencias necesarias ejecutando `npm install`.

2. Asegúrate de tener Node.js instalado en tu sistema.

## Uso

1. Para iniciar el servidor, ejecuta `npm start` en tu terminal.

2. El servidor estará disponible en `localhost:3000/`.

## Endpoints

- **GET /**: Obtiene la lista completa de items.

- **GET /id/:id**: Obtiene un item por su id.

- **POST /**: Crea un nuevo item.

- **PUT /id/:id**: Actualiza un item existente por su id.

- **DELETE /id/:id**: Elimina un item por su id.

- **GET /precio/:precio**: Obtiene los items que coinciden con un precio específico.

- **GET /searchInterval/:precio**: Obtiene los items dentro de un rango de precios especificado.

- **GET /nombre/:id**: Obtiene un item por su nombre.

- **GET /nombreProducto/:nombre**: Obtiene los items que coinciden con un nombre específico.

## Ejemplos de uso con PostMan

- Para obtener la lista completa de items: `GET localhost:3000/`.

- Para obtener un item por su id: `GET localhost:3000/id/1`.

- Para crear un nuevo item: `POST localhost:3000/` con el cuerpo de la solicitud JSON que incluye el nombre y el precio del item.

- Para actualizar un item existente por su id: `PUT localhost:3000/id/1` con el cuerpo de la solicitud JSON que incluye el nombre y/o el precio actualizados del item.

- Para eliminar un item por su id: `DELETE localhost:3000/id/1`.

- Para buscar items por precio específico: `GET localhost:3000/precio/100`.

- Para buscar items dentro de un rango de precios: `GET localhost:3000/searchInterval/100-500`.

- Para obtener un item por su nombre: `GET localhost:3000/nombre/1`.

- Para buscar items por nombre específico: `GET localhost:3000/nombreProducto/FIFA 23 PS5`.


