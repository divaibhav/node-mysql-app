const mysql = require('mysql2');
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
    host:'localhost',
    user:'root',
    password:'root',
    database:'school_db'
});

module.exports = pool;
