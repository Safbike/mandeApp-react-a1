//importa la funcion Router()
const { Router } = require('express');
const router = Router();


//importar el control de la funcion
const { 
    getUniqueData,
    insertPartnerData,
    insertUserData,
    getPartnerData,
    getClientData, 
    deleteData, 
    putData,
    getLogin,} = require('../controllers/index.controllers');

//Usa la funcion importada
router.get('/getUniqueData/:idTrabajador', getUniqueData);
router.get('/getClientData', getClientData);
router.get('/getPartnerData', getPartnerData);
router.put('/putData/:id', putData);
router.delete('/delete/:deleting', deleteData);
router.post('/insertPartnerData', insertPartnerData);
router.post('/insertUserData', insertUserData);
router.post('/getLogin', getLogin)

//exporta Router()
module.exports = router;