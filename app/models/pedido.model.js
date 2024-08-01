const pool = require('../../config/database');

exports.create = async (date) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query(`INSERT INTO Pedido (id_produto, id_pessoa) VALUES (?, ?)`, [date.id_produto, date.id_pessoa]);
    return result.insertId;
  } finally {
    connection.release();
  }
};

exports.read = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT * FROM Pedido`);
    return rows;
  } finally {
    connection.release();
  }
};

exports.update = async (id, date) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`UPDATE Pedido SET id)produto = ? WHERE id = ?`, [date[0].id_produto, id]);
    return rows.affectedRows;
  } finally {
    connection.release();
  }
};

exports.delete = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`DELETE FROM Pedido WHERE id = ?`, [id]);
    return rows.affectedRows;
  } finally {
    connection.release();
  }
};

exports.readById = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT * FROM Pedido WHERE id = ?`, [id]);
    return rows;
  } finally {
    connection.release();
  }
};
