const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  DbUser:process.env.DB_USER,
  DbPwd:process.env.DB_PWD,
  DbNme:process.env.DB_NAME,
  dbServer:process.env.DB_SERVER
};