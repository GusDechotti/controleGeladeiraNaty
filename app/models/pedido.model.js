const pool = require('../../config/database');

exports.create = async (date) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query(`INSERT INTO Pedido (id_produto, id_pessoa) VALUES (?, ?)`, [date.id_produto, date.id_pessoa]);
    return result.insertId;
  } finally {
    const [rows] = await connection.query('SELECT * FROM Pessoa WHERE id = ?', [date.id_pessoa]);
    const telefone = rows[0].telefone;
    const pessoaNome = rows[0].nome;
    const axios = require('axios');

    const url = 'https://api.beta.naty.app/api/v2/campaigns';
    const data = {
      "name": "Campanha Teste Dechotti",
      "whatsappId": "44c248fa-a49f-4c5e-9871-99f46e3341f9",
      "ticketStatus": "closed",
      "messages": [
        {
          "number": telefone,
          "name": "Dechotti",
          "body": "Olá " + pessoaNome + " você pegou um produto na geladeira"
        }
      ]
    };
    const token = /*TOKEN DA NATY*/;
    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
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
