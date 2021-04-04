const mysql = require('mysql');
const util = require('util');
require('dotenv').config()
//db

const dbName = 'heroku_94599e163e61f58';

const config = {
  production: {
port:3306,
    database: {
      host: process.env.HOSTADD,
      user: process.env.USERNA,
      password: process.env.PASS,
      database: 'heroku_94599e163e61f58',


    // 
    
    },
  },
  local: {
    port: 3306,
    database: {
      host: 'localhost',
      user: 'root',
      password: 'piyush',
    },
  },
};

config.conn = mysql.createPool(
  config.production.database
  // config.local.database
);
config.conn.query = util.promisify(config.conn.query);
config.initDB = (async () => {
  try {
    await config.conn.query('USE heroku_94599e163e61f58');
    const connection = await config.conn.query('SELECT * from apl_players');
    console.log('db initialized');
    // console.log(connection);
  } catch (e) {
    // console.log(e);
    await config.conn.query('USE miniproject');
  }
})();

module.exports = config;
