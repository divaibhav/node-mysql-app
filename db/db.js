const mysql = require('mysql2');
require('dotenv').config();
// creating connection
// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'school_db'
// });

// module.exports = connection;

//Creating connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});

module.exports = pool;
