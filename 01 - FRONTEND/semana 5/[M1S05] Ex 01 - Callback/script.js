// Crie um site com um botão que espera receber um evento de click e uma função callback que informe ao usuário que o botão foi clicado.

let botao = document.getElementById('botao');

const meuBotao = () => {
    alert ('Você acabou de clicar no botao.')
}

botao.addEventListener('click', meuBotao);