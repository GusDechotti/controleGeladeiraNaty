const pool = require('../../config/database');

exports.create = async (date) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query(`INSERT INTO Pedido (id_produto, id_pessoa, isPix) VALUES (?, ?, ?)`, [date.id_produto, date.id_pessoa, date.isPix]);
    connection.query(`UPDATE Produto SET quantidade = quantidade - 1 WHERE id = ?`, [date.id_produto])
    return result.insertId;
  } finally {
    connection.release();
  }
};

exports.read = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT pedido.id as pedidoId, isPix, pessoa.id as idPessoa, pessoa.nome as nomePessoa, produto.id as produtoId, produto.nome as nomeProduto FROM pedido JOIN pessoa ON pedido.id_pessoa = pessoa.id JOIN produto ON pedido.id_produto = produto.id;`);
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

exports.readAll = async() => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT * FROM Pedido`);
    return rows;
  } finally {
    connection.release();
  }
};

exports.deleteAll = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`TRUNCATE TABLE Pedido`);
    return rows;
  } finally {
    connection.release();
  }
};
