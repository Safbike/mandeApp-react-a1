//importa la conexion a la bd
const conn = require('../routes/connection');

/**
 * Contiene las funciones del enrutador routes/index.js
 */

//inserta datos con una estructura definida por el desarrollador
const insertPartnerData = async (req, res) => {
    //req.body nos permite conocer la informacion que estamos recibiendo
    const { primer_nombre, primer_apellido, correo, celular, pass1, selectedjob, documentoid, fotoperfil } = req.body; //extraemos las propiedades especificas del objeto
    
    try {
        //RETURNING * retorna todos los datos ingresados
        const result = await conn.query('INSERT INTO trabajador (primer_nombre, primer_apellido, correo, telefono, password_usuario, foto_documento, foto_perfil, profesion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [
            primer_nombre,
            primer_apellido,
            correo,
            celular,
            pass1,
            documentoid,
            fotoperfil,
            selectedjob,
        ]);

        //muestra los datos por navegador
        res.json(result.rows[0]);

        //muestra los datos por consola
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

//obtiene un array de campo solicitado
const getPartnerData = async (req, res) => {
    try {
        //almanceno en una constante la consulta
        const result = await conn.query('SELECT * FROM trabajador');

        //muestra los datos en el navegador
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
    }
}

//obtiene un array de campo solicitado
const getClientData = async (req, res) => {
    try {
        //almanceno en una constante la consulta
        const result = await conn.query('SELECT * FROM cliente');

        //muestra los datos en el navegador
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
    }
}

const getLogin = async (req, res) => {
    //req.body nos permite conocer la informacion que estamos recibiendo
    const { correo, pass} = req.body; //extraemos las propiedades especificas del objeto
    
    try {
        //RETURNING * retorna todos los datos ingresados
        const result = await conn.query('SELECT * FROM trabajador WHERE correo = $1 AND password_usuario = $2', [
            correo,
            pass
        ]);

        
        if(result.rows.length === 0){
            return res.status(404).json({
                message: "Dato no encontrado"
            })
        }
        //res.json(result.rows);
        
        //muestra los datos por navegador

        //muestra los datos por consola
    } catch (error) {
        console.log(error.message);
    }
}

//obtiene un dato especifico
const getUniqueData = async (req, res) => {
    try {
        //extraemos el dato que queremos usar con req.params y extraemos el 'id'
        const {id} = req.params;
        const result = await conn.query('SELECT * FROM profesion WHERE id_profesion = $1', [
            id
        ]);
        
        //si no encuentra el dato entra en este condicional
        if(result.rows.length === 0){
            return res.status(404).json({
                message: "Dato no encontrado"
            })
        }

        res.json(result.rows);

    } catch (error) {
        console.log(error.message);
    }
}

const deleteData = async (req, res) => {
    const {deleting} = req.params;
    const result = await conn.query('DELETE FROM trabajador WHERE id_trabajador = $1 RETURNING *', [deleting]);
    if(result.rowCount === 0){
        return res.status(404).json({
            message: "Dato no encontrado"
        })
    }
    //console.log(result);
    res.send("Borrando elemento id: "+[deleting]);
}

//actualiza los datos con una estructura definida
const putData = async (req, res) => {
    const { id } = req.params;
    const { labor } = req.body; //extraemos las propiedades especificas del objeto
    
    try {
        const result = await conn.query('UPDATE profesion SET labor = $1 WHERE id_profesion = $2 RETURNING *', [
            labor,
            id,
        ]);

        if(result.rowCount === 0){
            return res.status(404).json({
                message: "Dato no encontrado"
            })
        }

        //muestra los datos por navegador
        res.json(result.rows[0]);

        //muestra los datos por consola
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

const insertUserData = async (req, res) => {
    //req.body nos permite conocer la informacion que estamos recibiendo
    const { primer_nombre, primer_apellido, correo, celular, pass1, direccion, recibos } = req.body; //extraemos las propiedades especificas del objeto
    
    try {
        //RETURNING * retorna todos los datos ingresados
        const result = await conn.query('INSERT INTO cliente (primer_nombre, primer_apellido, correo, telefono, password_usuario, foto_recibos, direccion) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [
            primer_nombre,
            primer_apellido,
            correo,
            celular,
            pass1,
            recibos,
            direccion,
        ]);

        //muestra los datos por navegador
        res.json(result.rows[0]);

        //muestra los datos por consola
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

//Exporto las funciones que usare
module.exports = {
    getUniqueData,
    getPartnerData,
    getClientData,
    putData,
    deleteData,
    insertPartnerData,
    insertUserData,
    getLogin
}