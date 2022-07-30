// Construa um código javascript que irá remover de um array um item que irá ser passado no parâmetro desse método.
// O fluxo consiste em capturar em um input html um item do array e ao apertar em um botão fazer com que esse item seja excluído 
// (utilize o addEventListener de click).
// Pode conferir no console.log() como está o array após a exclusão.


var fruta = ['banana', 'uva', 'melancia', 'goiaba'];
let div = document.getElementById ('exibindoArray');
div.innerHTML = `As frutas do meu array são: (${fruta})`
let botao = document.getElementById('excluirFruta');
let input2 = document.getElementById('meu-input2');
let input = document.getElementById('meu-input');

// FUNCTION QUE ADICIONA UM VALOR NA ARRAY
function elemento (){
    fruta.push(input.value)
    let div = document.getElementById('exibindoArray');
    div.innerHTML = `Você acabou de adicionar (${input.value}) agora suas frutas são: (${fruta})`
    console.log(fruta)
};
 
// EVENTO QUE REMOVE UM VALOR DA ARRAY
    botao.addEventListener('click', function () {
        let selecionar = fruta.indexOf(input2.value);
        if (selecionar === -1) {
            return alert ('A fruta que você digitou não esta na lista, confira as frutas clicando no botao (MOSTRAR MEU ARRAY DE FRUTAS)')
        } else  fruta.splice(selecionar,1);
        let div = document.getElementById('exibindoArray2')
        div.innerHTML = `Você acabou de excluir ( ${input2.value} )  agora suas frutas são:  (${fruta})`
        console.log(fruta)
    });

    // FUNCTION QUE MOSTRA OS VALORES DA ARRAY
function mostrarArray() {
    let div2 = document.getElementById('exibindoArray2');
    div2.innerHTML = `Sua lista de fruta atualmente está com as seguintes frutas (${fruta}, deseja excluir alguma?)`
   
}

