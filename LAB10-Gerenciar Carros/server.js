var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
const { link } = require('fs');

var mongodb = require('mongodb');

var ObjectId = mongodb.ObjectId;

const MongoClient = mongodb.MongoClient;

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect();

var dbo = client.db("sistemaCarros");

var carros = dbo.collection("carros");

var usuarios = dbo.collection("usuarios");


var dbo = client.db("sistemaCarros");
var carros = dbo.collection("carros");
var usuarios = dbo.collection("usuarios");

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/', function (requisicao, resposta){
    resposta.redirect('/index.html')
})

app.get('/cadastra', function (requisicao, resposta){
    resposta.redirect('/cadastro.html')
})

app.get('/login', function (requisicao, resposta){
    resposta.redirect('/login.html')
})

app.get('/gerenciar', function(requisicao, resposta){
    resposta.redirect('/gerenciar.html')
})

app.get('/menu', function(requisicao, resposta){
    resposta.redirect('/menu.html')
})

app.post('/novoCarro', function(requisicao, resposta){

    var marca = requisicao.body.marca;

    var modelo = requisicao.body.modelo;

    var ano = requisicao.body.ano;

    var quantidade = requisicao.body.quantidade;

    var dados = {

        marca: marca,

        modelo: modelo,

        ano: parseInt(ano),

        quantidade: parseInt(quantidade)

    };

    carros.insertOne(dados, function(erro, resultado){

        if(erro){

            console.log(erro);

        }
        else{

            console.log("Carro salvo!");

        }

    });

    resposta.render('resposta.ejs', {

        resposta: "Carro cadastrado com sucesso!",

        link:"/menu"

    });

});

app.get('/carros', function(requisicao, resposta){

    carros.find().toArray(function(erro, itens){

        resposta.render('carros.ejs', { carros: itens });

    });

});

app.get('/remover/:id', function(requisicao, resposta){

    var id = requisicao.params.id;

    carros.deleteOne(

        { _id: new ObjectId(id) },

        function(erro, resultado){

            resposta.redirect('/carros');

        }

    );

});

app.get('/vender/:id', function(requisicao, resposta){

    var id = requisicao.params.id;

    carros.findOne(

        { _id: new ObjectId(id) },

        function(erro, carro){

            if(carro.quantidade > 0){

                carros.updateOne(

                    { _id: new ObjectId(id) },

                    { $inc: { quantidade: -1 } },

                    function(erro, resultado){

                        resposta.redirect('/carros');

                    }

                );

            }
            else{

                resposta.render('resposta.ejs', {

                    resposta: "Carro esgotado!",

                    link: "/carros"

                });

            }

        }

    );

});

app.post('/cadastro', function(requisicao, resposta){

    var nome = requisicao.body.nome;
    var login = requisicao.body.login;
    var senha = requisicao.body.senha;

    var dados = {
        nome: nome,
        login: login,
        senha: senha
    };

    usuarios.insertOne(dados, function(erro, resultado){

        if(erro){
            console.log(erro);
        }

        resposta.render('resposta.ejs', {
            resposta: "Usuário cadastrado com sucesso!",
            link:"/login"
        });

    });

});

app.post('/autenticar', function(requisicao, resposta){

    var login = requisicao.body.login;
    var senha = requisicao.body.senha;

    usuarios.findOne(
        { login: login, senha: senha },
        function(erro, usuario){

            if(usuario){
                resposta.render('resposta.ejs', {
                    resposta: "Login realizado com sucesso!",
                    link: "/menu"
                });
            }
            else{
                resposta.render('resposta.ejs', {
                    resposta: "Login inválido!",
                    link: "/login"
                });
            }

        }
    );

});

