require('./config/conexion');
const express = require('express');
const port = (process.env.port || 3000);

const app = express();

app.use(express.json())

//config
app.set('port', port)


//rutas
app.use('/api', require('./rutas'))

//inicio de express

app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('ERROR inicio de servidor: ' + error)
    }
    else {
        console.log('Conexión con servidor exitosa en el puerto: ' + port)
    }
})