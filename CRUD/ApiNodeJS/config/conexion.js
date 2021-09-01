const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "abc123",
    port: 3306,
    database: 'gestion'
});

conexion.connect((err) => {
    if (err) {
        console.log('ERROR' + err)
    }
    else {
        console.log('Conexión a base de datos exitosa')
    }
});

module.exports = conexion;