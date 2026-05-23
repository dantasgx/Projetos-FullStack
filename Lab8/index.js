const path = require('path'); 
require("colors");
var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('./public'));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

var server = http.createServer(app);    
server.listen(80, function() {
    console.log("Servidor Rodando na Porta 80...".rainbow);
});

// ROTAS GET
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'portfolio', 'project.html'));
});

app.get("/cadastra", function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'Cadastro.html'));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});

// ROTAS POST
app.post("/cadastro", function(req, res){
    var nome = req.body.nome;
    console.log("Cadastro recebido: ", nome);

    res.render("resposta.ejs", { 
        resposta: "Usuário cadastrado com sucesso!", 
        link: "/login" 
    });
});

app.post("/autenticar", function(req, res){
    var login = req.body.login;
    var senha = req.body.senha;

    if (login && senha) {
        res.render("resposta.ejs", { 
            resposta: "Login realizado com sucesso!" , 
            link: "/" 
        });
    } else {
        res.render("resposta.ejs", { 
            resposta: "Falha no Login: Usuário ou senha inválidos.", 
            link: "/login" 
        });
    }
});
