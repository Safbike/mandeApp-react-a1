const express = require('express');
const cors = require('cors');

const app = express();

//middlewares
/** convertir objetos de formato json a javascript desde el cliente a mi servidor */
app.use(express.json());

/** convertir un dato a objeto enviado a traves de un formulario, extended evita que acepte datos como imagenes, permite que solo se acepten datos simples */
app.use(express.urlencoded({extended:false}));

//routes
/** importa el archivo dentro del require */
app.use(require('./routes/index'));

//conexion al front end
app.use(cors());

//Puerto de ruta
const port = 4000;
app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})