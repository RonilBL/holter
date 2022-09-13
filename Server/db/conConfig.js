const { DbUser,DbPwd,DbNme,dbServer } = require('../config/env.config');
const config = {
    user: DbUser,
    password: DbPwd,
    server: dbServer, 
    database: DbNme,
    trustServerCertificate: true
  };

  module.exports=config;