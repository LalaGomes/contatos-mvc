// Importando o express
const express = require('express');

// Criando o servidor
const app = express();

app.get('/', (req,res)=>{
    res.send("Olá");
});

app.listen(3000, console.log("Servidor escutando na porta 3000"));