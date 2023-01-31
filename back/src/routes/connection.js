/**
 * Contiene la conexion a postgres
 */
const { Pool } = require('pg');
const conn = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'mandeappdata',
    port: '5432'
})

//exportamos la conexion para usarla en otros archivos
module.exports = conn;