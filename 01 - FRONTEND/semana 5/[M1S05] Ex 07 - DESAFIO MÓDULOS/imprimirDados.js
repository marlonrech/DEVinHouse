var apresentaImagem = document.getElementById('apresenta-imagem');
var apresentaNome = document.getElementById('apresenta-nome');
var apresentaDescricao = document.getElementById('apresenta-descricao');

export default function imprimirDados (nome, link, descricao) {
    // imprimir os elementos
    if (link) {
        apresentaImagem.setAttribute("src",link);
    }
    if (nome) {
        apresentaNome.innerHTML = nome;
    }
    if (descricao) {
        apresentaDescricao.innerHTML = descricao;
    }
}