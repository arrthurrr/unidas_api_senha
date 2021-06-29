const express = require('express');
const app = express();
const port = 8085;



function verifica_regex(regex_str, verificar_str){
    // retorna verdadeiro se uma string bate com um padrao regrex
    if ((verificar_str.match(regex_str)) == null){
        return false;
    }
    else{
        return true;
    }
}


function transforma_req_json(req){
    // transforma um request.body em json
    var json_saida = JSON.parse(JSON.stringify(req.body));

    return json_saida;
}


function verifica_senha(req){
    // retorna verdadeiro se a senha enviada via API estiver dentro do padrao regex abaixo
    const regex_regra = /^(?!.*(.).*\1)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+]).{9,}$/;
    
    var json_body = transforma_req_json(req);
    var senha = json_body['valor'];
    
    return verifica_regex(regex_regra, senha);
}


// utiliza o express para tratar o JSON de entrada e saida
app.use(express.json());


// redireciona o usuario ao README do repositorio caso tente acessar o endereco diretamente
app.get('/', function(req, res) {
    res.redirect("https://github.com/arrthurrr/unidas_api_senha#readme");
});


// utiliza POST com JSON em localhost:port/verifica_senha para verificar a senha
app.post('/verifica_senha', (req, res) => {
    var resposta = verifica_senha(req);
    
    // retorna true ou false atraves do json a seguir apos verificar a senha
    res.json({senha_valida: resposta});
});


app.listen(port, function() {
    console.log('Servidor rodando na porta', port)
});


module.exports = {verifica_regex, transforma_req_json, verifica_senha}