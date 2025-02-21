const pool = require('../../config/database');

exports.create = async (date) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`INSERT INTO Pessoa (nome, telefone, isNaty) VALUES (?, ?, ?)`, [date.nome, date.telefone, date.isNaty]);
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
  try {
    const [rows] = await connection.query(`SELECT * FROM Pessoa ORDER BY nome`);
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
    const [rows] = await connection.query(`UPDATE Pessoa SET nome = ? WHERE id = ?`, [date[0].nome, id]);
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
    const [rows] = await connection.query(`DELETE FROM Pessoa WHERE id = ?`, [id]);
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
    const [rows] = await connection.query(`SELECT * FROM Pessoa WHERE id = ?`, [id]);
    return rows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};

exports.readDetalhe = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`SELECT Pessoa.Id, Pessoa.nome, COUNT(Pedido.id) AS total_pedidos FROM Pessoa LEFT JOIN Pedido ON Pessoa.id = Pedido.id_pessoa GROUP BY Pessoa.id, Pessoa.nome ORDER BY Pessoa.nome`);
    return rows;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw new Error('Erro ao buscar os dados no banco de dados');
  } finally {
    connection.release();
  }
};