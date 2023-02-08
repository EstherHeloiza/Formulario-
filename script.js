async function buscaCep(cep) {
    var menssagemErro = document.getElementById('erro');
    menssagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaConvertida = await consultaCep.json();
        if (consultaConvertida.erro) {
            throw Error ('cep nao existe')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaConvertida.localidade;
        logradouro.value = consultaConvertida.logradouro;
        estado.value = consultaConvertida.uf;
        bairro.value = consultaConvertida.bairro;
    }catch(erro){
        menssagemErro.innerHTML = `<p>cep ivalido</p>`
    }
    
    console.log(consultaConvertida);
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout",() => buscaCep(cep.value))