const pool = require('../../config/database');

exports.create = async (date) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`INSERT INTO Produto (nome,quantidade,preco,imagem) VALUES (?,?,?,?)`, [date.nome, 
                                                                                                                  date.quantidade, 
                                                                                                                  date.preco, 
                                                                                                                  date.imagem]);
    return rows.affectedRows;
  } finally {
    connection.release();
  }
};

exports.read = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT * FROM Produto`);
    return rows;
  } finally {
    connection.release();
  }
};

exports.update = async (id, date) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`UPDATE Produto SET nome = ? WHERE id = ?`, [date[0].nome, id]);
    return rows.affectedRows;
  } finally {
    connection.release();
  }
};

exports.delete = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`DELETE FROM Produto WHERE id = ?`, [id]);
    return rows.affectedRows;
  } finally {
    connection.release();
  }
};

exports.readById = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT * FROM Produto WHERE id = ?`, [id]);
    return rows;
  } finally {
    connection.release();
  }
};
