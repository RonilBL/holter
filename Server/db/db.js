// const sql = require('mssql')
// const config = require('./conConfig');

// const poolPromise = new sql.ConnectionPool(config)
//     .connect()
//     .then(pool => {
//         console.log('Connected to MSSQL')
//         return pool
//     })
//     .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

// module.exports = {
//     sql, poolPromise
// };


const sql = require('mysql')
const config = require('./conConfig');

const poolPromise = new sql.createConnection(config)
    .connect((err) => {
        if(err) throw err;
        console.log('Connected to MySQL Server!'); 
    });

module.exports = {
    sql, poolPromise
};


