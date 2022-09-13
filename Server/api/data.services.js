const { sql, poolPromise } = require('../db/db');


const getLogin = async (username, password) => {
    console.log('my');
    const pool = await poolPromise;
    const result = await pool.query()
        .input('username', sql.VarChar, username)
        .input('password', sql.VarChar, password)
        .execute('GetLogin');
    return result.recordset[0].json;
}


module.exports = {
    getLogin
};
