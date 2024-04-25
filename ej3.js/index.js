const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'ej3.js')));


const  items = [
    { 
        id: 1, 
        nombre: 'Taza de Harry Potter', 
        precio: 300,
    },
    { 
        id: 2, 
        nombre: 'FIFA 23 PS5', 
        precio: 1000
    },
    {  
        id: 3, 
        nombre: 'Figura Goku Super Saiyan', 
        precio: 100
    },
    {  
        id: 4,  
        nombre: 'Zelda Breath of the Wild', 
        precio: 200
    },
    {  
        id: 5,  
        nombre: 'Skin Valorant', 
        precio: 120
    },
    {  
        id: 6, 
        nombre: 'Taza de Star Wars', 
        precio: 220
    },
];

app.use(express.json());

app.get('/', (req, res)=>{
    res.send({msg:'lista de Items', items});
});

app.get('/id/:id', (req, res)=>{
    const found = items.some(item => item.id == req.params.id)
    if(found) {
        const item = item[req.params.id -1];
        res.send(item);
    }else{
        res.status(404).send('Item No Encontrado')
    }
});

app.post('/', (req, res)=>{
    const newItem ={
        id:items.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    }
    items.push(newItem);
    res.status(201).send(items)
});

app.put('/id/:id', (req, res)=>{
    const found = items.some(item => item.id == req.params.id)

    if(found){
        items.forEach(item =>{
            if(item.id == req.params.id){
                item.nombre = req.body.nombre ? req.body.nombre: item.nombre
                item.precio = req.body.precio || item.precio
            }
        })
        res.send(items)
    }else{
        res.status(404).send(`Item con el id ${req.params.id} no se ha encontrado`)
    }
});

app.delete('/id/:id', (req, res)=>{
    const found = items.some(item => item.id == req.params.id)
    if(found){
        const itemFilter = items.filter(item => item.id != req.params.id)
        res.send(itemFilter)
    }else{
        res.status(404).send(`Item con el Id ${req.params.id} no se ha encontrado`)
    }
});


app.get('/precio/:precio', (req, res)=>{
    const found = items.some(item => item.precio == req.params.precio)
    if(found){
    const precioFilter = items.filter(item => item.precio == req.params.precio)
    res.send(precioFilter)
    }
});


app.get('/searchInterval/:precio', (req, res) => {
    const requestPrecio = req.params.precio;
    const [min, max] = requestPrecio.split('-').map(Number);
    const productosFiltrados = items.filter(item => item.precio >= min && item.precio <= max);

    if (productosFiltrados.length > 0) {
        res.send(productosFiltrados);
    } else {
        res.status(404).send('No se encontraron productos en el rango de precio especificado');
    }
});



app.get('/nombre/:id', (req, res)=>{
    const found = items.some(item => item.id == req.params.id)
    if(found){
        const itemFilter = items.filter(item => item.id == req.params.id)
        res.send(itemFilter)
    }else{
        res.status(404).send(`Item con el nombre ${req.params.id} no se ha encontrado`)
    }
});

app.get('/nombreProducto/:nombre', (req, res)=>{
    const found = items.some(item => item.nombre == req.params.nombre)
    if(found){
        const itemFilter = items.filter(item => item.nombre == req.params.nombre)
        res.send(itemFilter)
    }else{
        res.status(404).send(`Item con ese nombre ${req.params.nombre} no se ha encontrado`)
    }
});


app.listen(PORT, () => {
    console.log(`Servidor levantado en el Puerto ${PORT}`);
  });