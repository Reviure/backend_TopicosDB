const express = require('express');

//Crear servidor express

const app = express();

//rutas
app.get('/',(req, res)=>{
    console.log('Se recibio una peticion en /');
    res.json({
        ok: true,
        msg: "Recibido"
    });
});

//Configurar del puerto

app.listen(4000, ()=>{
    console.log('Backend corriendo en el puerto ${4000}');
})

