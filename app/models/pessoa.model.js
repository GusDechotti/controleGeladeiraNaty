const pool = require('../../config/database');

exports.create = async (date) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`INSERT INTO Pessoa (nome, telefone, isNaty) VALUES (?, ?, ?)`, [date.nome, date.telefone, data.isNaty]);
    return rows.affectedRows;
  } finally {
    connection.release();
  }
};

exports.read = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT * FROM Pessoa`);
    return rows;
  } finally {
    connection.release();
  }
};

exports.update = async (id, date) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`UPDATE Pessoa SET nome = ? WHERE id = ?`, [date[0].nome, id]);
    return rows.affectedRows;
  } finally {
    connection.release();
  }
};

exports.delete = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`DELETE FROM Pessoa WHERE id = ?`, [id]);
    return rows.affectedRows;
  } finally {
    connection.release();
  }
};

exports.readById = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT * FROM Pessoa WHERE id = ?`, [id]);
    return rows;
  } finally {
    connection.release();
  }
};
