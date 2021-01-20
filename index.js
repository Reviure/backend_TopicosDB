const express = require('express');
require('dotenv').config();

//Crear servidor express

const app = express();


//Acceso al directotio publico
app.use(express.static('public'));


//rutas
app.use('/api/auth', require('./routes/auth'));

//Configurar del puerto

app.listen(process.env.PORT, ()=>{
    console.log('Backend corriendo en el puerto $%&{process.env.PORT}');
})

