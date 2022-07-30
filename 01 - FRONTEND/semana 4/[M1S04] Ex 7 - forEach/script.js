// Crie um código javascript para verificar se todos os alunos do array de objetos 
// arrayAlunos abaixo estão acima da média que será 7.
// Se o retorno for verdadeiro imprima em tela "Parabéns a todos da turma", porem se não for imprima em uma lista html 
// todos os alunos que ficaram na "recuperação".

let alunosRecuperação = []
var div = document.getElementById('minhaDiv');
var div2 = document.getElementById('minhaDiv2')

let arrayAlunos = [
    {
        nome: "Carlos",
        media: 10
    },
    {
        nome: "Julia",
        media: 8
    },
    {
        nome: "Rayane",
        media: 7
    },
    {
        nome: "Arthur",
        media: 7
    }
]

arrayAlunos.forEach(function (media) {
    if (media.media < 7) {
        alunosRecuperação.push(media.nome)
    }

})

if (alunosRecuperação.length == 0) {
    div.innerHTML = 'Parabéns a todos da turma.'
} else {
    div2.innerHTML = 'Os alunos que ficaram em recuperação:'
    for (i = 0; i < alunosRecuperação.length; i++)
    div.innerHTML += `<li> ${alunosRecuperação[i]}</li>`
}
    





