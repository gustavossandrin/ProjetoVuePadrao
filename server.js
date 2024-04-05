const express = require('express')
const app = express()

//responder a requisições feitas para o servidor web por meio da rota get
app.use(express.static(__dirname + '/dist/'))

app.get('/', function(req, res){
    res.sendfile(__dirname + '/dist/index.html')
})

app.listen(3000, function() {
    console.log('Servidor rodando')
})