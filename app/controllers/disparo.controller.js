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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJjcmVhdGU6bWVzc2FnZXMiLCJjcmVhdGU6bWVkaWFzIiwicmVhZDp3aGF0c2FwcHMiLCJ1cGRhdGU6d2hhdHNhcHBzIiwicmVhZDpjYW1wYWlnbnMiLCJtYW5hZ2U6Y2FtcGFpZ25zIiwicmVhZDpjaGFubmVscyIsInJlYWQ6cXVldWVzIiwicmVhZDp1c2VycyJdLCJjb21wYW55SWQiOiJmZjQ1M2JlOS05MmM3LTRlZWUtYjYxNS04ZjE4OTAxMzE4NGEiLCJpYXQiOjE3MjUzMDkxNjZ9.wawDXjc4WaZyMLLtq9Of4p7s8cI3uiMMZrbDq5Z7X_0';
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