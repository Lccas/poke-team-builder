const mysql = require('mysql')

const conecction = mysql.createConnection({
    host: '127.0.0.1',
    port: 33061,
    user: 'newuser1',
    password: 'Password@123',
    database: 'poke-builder'
})

module.exports = conecction