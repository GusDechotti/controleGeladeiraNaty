const pool = require('../../config/database');

exports.create = async (date) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query(`INSERT INTO Pedido (id_produto, id_pessoa, isPix) VALUES (?, ?, ?)`, [date.id_produto, date.id_pessoa, date.isPix]);
    connection.query(`UPDATE Produto SET quantidade = quantidade - 1 WHERE id = ?`, [date.id_produto])
    return result.insertId;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};

exports.read = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT Pedido.id as pedidoId, isPix, dia, Pessoa.id as idPessoa, Pessoa.nome as nomePessoa, Produto.id as produtoId, Produto.nome as nomeProduto FROM Pedido JOIN Pessoa ON Pedido.id_pessoa = Pessoa.id JOIN Produto ON Pedido.id_produto = Produto.id;`);
    return rows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};

exports.update = async (id, date) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`UPDATE Pedido SET id)produto = ? WHERE id = ?`, [date[0].id_produto, id]);
    return rows.affectedRows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};

exports.delete = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`DELETE FROM Pedido WHERE id = ?`, [id]);
    return rows.affectedRows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};

exports.readById = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT * FROM Pedido WHERE id = ?`, [id]);
    return rows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};

exports.readAll = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT * FROM Pedido`);
    return rows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};

exports.deleteAll = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`TRUNCATE TABLE Pedido`);
    return rows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};
