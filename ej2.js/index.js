const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'ej2.js')));


app.get('/', (req, res)=>{
    res.send('Hola, bienvenido a este increible ejercicio')
});

app.get('/productos/:productos', (req, res)=>{
    res.send('Listado de productos')
});

app.post('/productos/:productos', (req, res)=>{
    res.status(201).send('Crear producto manin')
});

app.put('/productos/:productos', (req, res)=>{
    res.send('Actualizar producto')
});

app.delete('/productos/:productos', (req, res)=>{
    res.send('Borrar un producto')
});

app.get('/usuarios/:usuarios', (req, res)=>{
    res.send('Listado de usuarios')
});

app.post('/usuarios/:usuarios', (req, res)=>{
    res.status(201).send('Crear usuario')
});

app.put('/usuarios/:usuarios', (req, res)=>{
    res.send('Actualizar usuario')
});

app.delete('/usuarios/:usuarios', (req, res)=>{
    res.send('Borrar usuarios')
})




app.listen(PORT, () => {
  console.log(`Servidor levantado en el Puerto ${PORT}`);
});

