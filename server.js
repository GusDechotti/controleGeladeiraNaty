var backend = require('./config/express');
const express = require('express');
const path = require('path');
const app = express();
const porta = 3001;

var port = process.env.PORT || 3000;

// Roda o front
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','html', 'index.html'));
});

app.listen(porta, () => {
    console.log(`Frontend rodando em http://localhost:${porta}`);
});

//Backend
backend.listen(port, function(){
    console.log('Backend rodando na porta ' + port);
})