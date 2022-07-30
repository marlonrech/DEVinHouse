
//  CRIANDO FUNÇÃO QUE PEGA VALOR DIGITADO NO INPUT E SALVA EM UMA DIV NO HTML E MOSTRA NA TELA

function adcMensagem () {
    const input = document.getElementById('meu-input');
    const div = document.getElementById('exibindoMensagem');
    div.innerHTML = (input.value);

}

// CRIANDO UMA FUNÇÃO COM ADDEVENTLISTENER QUE SELECIONA O BOTAO (BOTAOSALVAR) E CRIA UM EVENTO QUE AO ESCUTAR CLICK,
//SELECIONA O INPUT E SALVA ESSE VALOR DO INPUT NO LOCALSTORAGE.
function salvarMensagem () {
    const botaoSalvar = document.getElementById('botaoSalvar');
    botaoSalvar.addEventListener('click', function () {
        const input = document.getElementById ('meu-input');
        localStorage.setItem('mensagem', JSON.stringify(input.value))
    });
}


//CRIANDO FUNCTION QUE SELECIONA A DIV NO HTML E MOSTRA A MENSAGEM GRAVADA NO LOCALSTORAGE
function mostrarMensagem () {
    const div = document.getElementById('exibindoMensagem');
    const texto = localStorage.getItem('mensagem');
    div.innerHTML = JSON.parse (texto);
}