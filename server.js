var backend = require('./config/express');
const express = require('express');
const path = require('path');
const app = express();
const porta = 3001;

var port = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que serve o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
  });
    
backend.listen(port, function(){
    console.log('Server ON in Port ' + port);
})