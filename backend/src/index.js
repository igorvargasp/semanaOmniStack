const express = require('express');
const routes = require('./Routes');
const app  = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(routes)


app.listen(3333,()=>{
    console.log('Servidor Iniciado');
})