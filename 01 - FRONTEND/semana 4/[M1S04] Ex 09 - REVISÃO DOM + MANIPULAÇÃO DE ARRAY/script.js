// primeiro altere todos os valores do atributo isGood que atualmente esta false para true
// ate porque na lista somente possui músicas boas rsrsrsrs.
// _Dica: utilize o .map para isso.

// Após isso usando os conhecimentos do DOM imprima em uma lista não ordenada apenas os nomes das músicas

// Extra(Não é obrigatório, mas reza a lenda de que quem fizer ganhará um pix de 500 reais):
// Sua missão será ao clicar em algum desses nomes imprimir ou em tela toda a informação referente ao item selecionado.

let listaMusica = document.getElementById('listaMusica');

let a = document.querySelector('a');

let arrayMusicas = [
    {
        nome: "Believer",
        banda: "Imagine Dragons",
        anoDeLancamento: 2017,
        isGood: false
    },
    {
        nome: "Losing my Religion",
        banda: "R.E.M",
        anoDeLancamento: 1991,
        isGood: false
    },
    {
        nome: "Duality",
        banda: "Slipknot",
        anoDeLancamento: 2004,
        isGood: false
    },
    {
        nome: "Imagination",
        banda: "Foster the People",
        anoDeLancamento: 2019,
        isGood: false
    },
    {
        nome: "Without me",
        banda: "Halsey",
        anoDeLancamento: 2018,
        isGood: false
    },
    {
        nome: "DiE4u",
        banda: "Bring me the horizon",
        anoDeLancamento: 2021,
        isGood: false,
    },
    {
        nome: "Hail to the king",
        banda: "Avenged Sevenfold",
        anoDeLancamento: 2013,
        isGood: false
    },
    {
        nome: "Rock you like a hurricane",
        banda: "Scorpions",
        anoDeLancamento: 1984,
        isGood: false
    },
    {
        nome: "Misery business",
        banda: "Paramore",
        anoDeLancamento: 2007,
        isGood: false
    },
    {
        nome: "Brianstorm",
        banda: "Arctic Monkeys",
        anoDeLancamento: 2007,
        isGood: false
    }
];


let _true = arrayMusicas.map (function (musica){
    return (musica.isGood = true);
    
});

let musica = arrayMusicas.map (function (musica){
    return musica.nome
})

for (i = 0; i < musica.length; i++) {
    a.innerHTML += `<li> ${musica[i]}</li>`
}



