const { sql, poolPromise1 } = require('../db/db');
 
let config = require('../db/conConfig');

 

// const getLogin = async (username, password) => {
//     console.log(poolPromise1);
//     const pool = await poolPromise1;
//     const result = await pool.query()
//         .input('username', sql.VarChar, username)
//         .input('password', sql.VarChar, password)
//         .execute('GetLogin');
//     return result.recordset[0].json;
// }

const getLogin = async (username, password) => {
 
    var sql = "CALL mypro() "
    const results = await poolPromise1.promise().query(sql)
    return results[0][0]
}



module.exports = {
    getLogin
};
