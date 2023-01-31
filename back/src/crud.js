const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

app.use(morgan('dev'));

//middlewares
/** convertir objetos de formato json a javascript desde el cliente a mi servidor */
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

/** convertir un dato a objeto enviado a traves de un formulario, extended evita que acepte datos como imagenes, permite que solo se acepten datos simples */
app.use(express.urlencoded({extended:false}));

//routes
/** importa el archivo dentro del require */
app.use(require('./routes/index'));

//conexion al front end

//Puerto de ruta
const port = 4000;
app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})