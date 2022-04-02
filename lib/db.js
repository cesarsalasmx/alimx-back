const mysql = require('mysql2');
const { config } = require('../config');

const connection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  database: config.DB,
  password: config.PASSWORD,
  port: config.PORT,
  waitForConnections: true,
});

module.exports = connection;