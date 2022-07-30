// Crie uma classe chamada Serie com os seguintes atributos: nome, anoLancamento, qttTemporada.

// Construa o construtor dessa classe com todos os atributos.
// Após isso, com um laço de repetição a sua escolha, instancie a classe 4 vezes com os dados sendo capturados por um prompt e 
// depois adicione a classe a um array chamado series.
// Após isso imprima no documento (usando o innerHTML) a série mais antiga (ou seja, a que possui o menor anoLancamento).
// Para percorrer o array com as 4 classes utilize o forEach.

let series = []
let anoAntigo = 0;
let nomeAntigo ='';
let mostrarFilme = document.getElementById('h3')

class Serie {
    nome;
    anoLancamento;
    qttTemporada;

    constructor (nome, ano, temporada) {
        this.nome = nome;
        this.anoLancamento = ano;
        this.qttTemporada = temporada;
    }

}

for (i = 0; i <= 3; i++) {
    let nome = prompt('Digite o nome da serie: ');
    let ano = parseFloat(prompt('Digite o ano de lançamento da serie: '));
    let temporada = parseFloat(prompt('Digite a quantidade de temporada da serie: '))

    const _serie = new Serie (nome, ano, temporada);

    series.push(_serie)
    
    if (i == 0) {
        anoAntigo = _serie.anoLancamento;
        nomeAntigo = _serie.nome;
    } else if (_serie.anoLancamento < anoAntigo) {
        anoAntigo = _serie.anoLancamento;
        nomeAntigo = _serie.nome;
    }
}

mostrarFilme.innerHTML = anoAntigo;

console.log(series)
console.log(anoAntigo)
console.log(nomeAntigo)

    
