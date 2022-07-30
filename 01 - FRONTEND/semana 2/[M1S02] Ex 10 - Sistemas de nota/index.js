var aluno = window.prompt('Digite o nome do aluno: ')


let notas = [];
var soma = 0
var media = 0
var i = 1

while (i <= 4) {
    var nota = parseFloat(window.prompt('Digite a nota numero ' + i + ' do aluno'))
    notas.push(nota);
    i++
}

for (i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
  
}

media = soma / notas.length

if (media >= 7) {
    document.write ('<h3> Parabéns ' +aluno +' sua média foi de ' + media.toFixed(2) + ' e você está aprovado.</h3>')
} else {
    document.write ('<h3> Desculpe ' +aluno +' sua média foi de ' + media.toFixed(2) + ' e você está reprovado.</h3>')
}
