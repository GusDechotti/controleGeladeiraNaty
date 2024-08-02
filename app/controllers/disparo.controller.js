const { connect } = require('../../config/database');
const pool = require('../../config/database');

exports.post = async (req, res) => {
    const connection = await pool.getConnection();
    const [rowsPessoa] = await connection.query('SELECT * FROM Pessoa WHERE id = ?', [req.body.id_pessoa]);
    const pessoaTelefone = rowsPessoa[0].telefone;
    const pessoaNome = rowsPessoa[0].nome;
    const axios = require('axios');
    console.log(req.body.id_produto)
    const [rowsProduto] = await connection.query('SELECT * FROM Produto WHERE id = ?', [req.body.id_produto]);
    console.log(rowsProduto)
    const produtoNome = rowsProduto[0].nome;
    const url = 'https://api.beta.naty.app/api/v2/campaigns';
    const data = {
        "name": "Teste envio geladeira",
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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkOmNhbXBhaWducyIsIm1hbmFnZTpjYW1wYWlnbnMiLCJjcmVhdGU6bWVzc2FnZXMiLCJjcmVhdGU6bWVkaWFzIiwicmVhZDp3aGF0c2FwcHMiLCJ1cGRhdGU6d2hhdHNhcHBzIiwicmVhZDpxdWV1ZXMiLCJyZWFkOnVzZXJzIl0sImNvbXBhbnlJZCI6ImZmNDUzYmU5LTkyYzctNGVlZS1iNjE1LThmMTg5MDEzMTg0YSIsImlhdCI6MTcwNjE4MTM2Nn0.HrCeYP2zKSGMaePB2JX0va_ml1RjWIf-gKP6YU2I4M0';
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