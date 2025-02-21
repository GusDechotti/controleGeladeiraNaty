const pool = require('../../config/database');

exports.create = async (date) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`INSERT INTO Produto (nome,quantidade,preco,imagem) VALUES (?,?,?,?)`, [date.nome, 
                                                                                                                  date.quantidade, 
                                                                                                                  date.preco, 
                                                                                                                  date.imagem]);
    return rows.affectedRows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};

exports.read = async () => {
  const connection = await pool.getConnection();
  try{
    const [rows] = await connection.query('SELECT * FROM Produto WHERE quantidade > 0 ORDER BY nome');
    return rows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally{
    connection.release();
  }
};

exports.readAll = async () => {
  const connection = await pool.getConnection();
  try{
    const [rows] = await connection.query('SELECT * FROM Produto ORDER BY nome');
    return rows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally{
    connection.release();
  }
};

exports.update = async (id, date) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`UPDATE Produto SET quantidade = ? WHERE id = ?`, [date.quantidade, id]);
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
    const [rows] = await connection.query(`DELETE FROM Produto WHERE id = ?`, [id]);
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
    const [rows] = await connection.query(`SELECT * FROM Produto WHERE id = ?`, [id]);
    return rows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};
