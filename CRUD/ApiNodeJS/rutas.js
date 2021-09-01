const rutas = require('express').Router()
const { Router } = require('express')
const conexion = require('./config/conexion')

//Agregamos rutas
//get todos los clientes
rutas.get('/', (req, res) => {
    let sql = 'select * from clientes'
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })

})

//get un cliente
rutas.get('/:id', (req, res) => {
    const { id } = req.params
    let sql = 'select * from clientes where id = ?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })

});


//Agregar cliente
rutas.post('/', (req, res) => {
    const { email, nombre } = req.body
    let sql = `insert into clientes (email, nombre) values ('${email}','${nombre}')`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({ status: 'Cliente agregado con exito' })
        }
    })
})

//Eliminar cliente
rutas.delete('/:id', (req, res) => {
    const { id } = req.params

    let sql = `delete from clientes where id = '${id}'`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({ status: 'El cliente ha sido eliminado con exito' })
        }
    })

});

//Actualizar cliente 
rutas.put('/:id', (req, res) => {
    const { id } = req.params
    const { email, nombre } = req.body

    let sql = `update clientes set email ='${email}', nombre ='${nombre}' where id = '${id}'`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({status: 'datos del cliente actualizados con exito' })
        }
    })

})

module.exports = rutas;
