//importa la funcion Router()
const { Router } = require('express');
const router = Router();
//importa la conexion a la bd
const conn = require('./connection');

//importar el control de la funcion
const { 
    getUniqueData,
    insertData,
    getData, 
    deleteData, 
    putData} = require('../controllers/index.controllers');

//Usa la funcion importada
router.get('/getUniqueData/:id', getUniqueData);
router.get('/getData', getData);
router.put('/putData/:id', putData);
router.delete('/delete/:deleting', deleteData);
router.post('/insertData', insertData);

//exporta Router()
module.exports = router;