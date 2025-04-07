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
    const url = 'https://api.staging.naty.app/api/v2/campaigns';
    const data = {
        "name": "Compra na geladeira",
        "whatsappId": "ba1799e0-cd52-4685-8dab-124b7b0a2b97",
        "queueId": "54c8bfd1-1c2d-4d41-95e8-6f5c2da484b5",
        "ticketStatus": "closed",
        "minMsgInterval": 100,
        "maxMsgInterval": 101,
        "minBatchDelay": 100,
        "maxBatchDelay": 101,
        "messages": [
            {
                "number": pessoaTelefone,
                "name": pessoaNome,
                "body": "{{greeting}} *" + pessoaNome + "*! \nSeu pedido de um(a) *" + produtoNome + "* ja foi computado na geladeira."
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
    const url = 'https://api.staging.naty.app/api/v2/campaigns';
    const data = {
        "name": "Compra na geladeira",
        "whatsappId": "ba1799e0-cd52-4685-8dab-124b7b0a2b97",
        "queueId": "54c8bfd1-1c2d-4d41-95e8-6f5c2da484b5",
        "ticketStatus": "closed",
        "minMsgInterval": 100,
        "maxMsgInterval": 101,
        "minBatchDelay": 100,
        "maxBatchDelay": 101,
        "messages": [
            {
                "number": pessoaTelefone,
                "name": pessoaNome,
                "body": "{{greeting}} *" + pessoaNome + "*! Seu pedido de um(a) *" + produtoNome + "* ja foi computado na geladeira\n\nComo seu pedido está marcado para *'PIX'* envie o valor de *R$" + produtoValor + "* para o pix na mensagem abaixo, depois envie o comprovante nesse mesmo numero."
            },
            {
                "number": pessoaTelefone,
                "name": pessoaNome,
                "body": "48055059000103"
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

