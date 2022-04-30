// Importando o express
const express = require('express');

const UsuariosRouter = require('./routers/UsuariosRouter');

// Criando o servidor
const app = express();

// Template engine ejs
app.set('view engine', 'ejs');

// Criando o roteador
app.use('/', UsuariosRouter);

app.use(express.static(__dirname + '/public'));

app.listen(3000, console.log("Servidor escutando na porta 3000"));