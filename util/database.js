const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'product',
    password: 'localHost@123'
});


module.exports = pool.promise();