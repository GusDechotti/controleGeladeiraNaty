const { connect } = require('../../config/database');
require('dotenv').config();
const pool = require('../../config/database');

exports.compra = async (req, res) => {
    const connection = await pool.getConnection();
    const [rowsPessoa] = await connection.query('SELECT * FROM Pessoa WHERE id = ?', [req.body.id_pessoa]);
    const pessoaTelefone = rowsPessoa[0].telefone;
    const pessoaNome = rowsPessoa[0].nome;
    const axios = require('axios');
    console.log(req.body.id_produto)
    const [rowsProduto] = await connection.query('SELECT * FROM Produto WHERE id = ?', [req.body.id_produto]);
    console.log(rowsProduto)
    const produtoNome = rowsProduto[0].nome;
    const url = 'https://api.staging.naty.app/api/v2/campaigns/instantly';
    const data = {
        "name": "Compra na geladeira",
        "whatsappId": "44c248fa-a49f-4c5e-9871-99f46e3341f9",
        "ticketStatus": "closed",
        "messages": [
            {
                "number": pessoaTelefone,
                "name": pessoaNome,
                "body": "Olá " + pessoaNome + " você pegou um " + produtoNome + " na geladeira"
            }
        ]
    };
    const token = process.env.API_NATY;
    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            console.log('Success:', response.data);
            connection.release();
        })
        .catch(error => {
            console.error('Erro:', error);
            connection.release();
        });
}

exports.compraPix = async (req, res) => {
    const connection = await pool.getConnection();
    const [rowsPessoa] = await connection.query('SELECT * FROM Pessoa WHERE id = ?', [req.body.id_pessoa]);
    const pessoaTelefone = rowsPessoa[0].telefone;
    const pessoaNome = rowsPessoa[0].nome;
    const axios = require('axios');
    console.log(req.body.id_produto)
    const [rowsProduto] = await connection.query('SELECT * FROM Produto WHERE id = ?', [req.body.id_produto]);
    console.log(rowsProduto)
    const produtoNome = rowsProduto[0].nome;
    const produtoValor = rowsProduto[0].preco;
    const url = 'https://api.staging.naty.app/api/v2/campaigns/instantly';
    const data = {
        "name": "Compra na geladeira",
        "whatsappId": "44c248fa-a49f-4c5e-9871-99f46e3341f9",
        "ticketStatus": "closed",
        "messages": [
            {
                "number": pessoaTelefone,
                "name": pessoaNome,
                "body": "Olá " + pessoaNome + " você pegou um " + produtoNome + " na geladeira\nComo seu pedido está marcado para 'PIX' envie o valor de R$" + produtoValor + " para o pix: 48055059000103 e depois envie o comprovante."
            }
        ]
    };
    const token = process.env.API_NATY;
    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            console.log('Success:', response.data);
            connection.release();
        })
        .catch(error => {
            console.error('Erro:', error);
            connection.release();
        });
}