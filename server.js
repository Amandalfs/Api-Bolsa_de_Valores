const express = require('express');
const cors = require('cors');
const port = 8020;

const app = express();

app.use(cors())
app.use(express.json())

app.route('/').get((req, res)=>{
    res.send("Servidor lisinho da amanda")
})


app.listen(port, ()=>{
    console.log("Servidor Rodando")
})

