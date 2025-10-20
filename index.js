const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express
const PORT = process.env.PORT || 4000;

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem-vindo ao CineExpress!</h1>");
})

//rota do cadastro de produtos
app.get("/filmes", function(req,res){
    res.send("<h1>Lista de filmes!</h1>");
})

//rota com parametro 
app.get("/detalhes/:nome", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno detalhes:" + req.params.nome);
})


//rota com parametro opcional
app.get("/cadastrar/{:titulo}", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>filme " + nome + " cadastrado!</h1>");
    }else{
        res.send("filme cadastrado!");
    }
    
})


//app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
//    if (erro){
//        console.log("Erro ao Iniciar.");
//    }else{
//        console.log("Servidor Iniciado.");
//    }
//})

console.log ("PORT env: ", process.env.port);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});





