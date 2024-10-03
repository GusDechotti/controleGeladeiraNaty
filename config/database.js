const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.PROVEDOR,
  user: 'root',
  password: process.env.SENHA_BANCO,
  database: 'geladeiraNaty',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
