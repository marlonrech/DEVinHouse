// Crie um código javascript que irá juntar os dois arrays abaixo e coloque esse array concatenado em outra variável:

// let array1 = [1,3,4,5,3,7];
// let array2 = [1,2,6,4,8,5];
// Após fazer a junção remova os itens que se repetem usando o .includes ou o .filter
// Após isso ordene por ordem crescente.

let array1 = [1,3,4,5,3,7];
let array2 = [1,2,6,4,8,5];


//CONCATENANDO OS DOIS ARRAY (ARRAY1, ARRAY2)
let array3 = array1.concat(array2);

//EXCLUINDO OS NUMEROS REPETIDOS DA ARRAY CONCATENADA
let excluindoNumeroRep = array3.filter (function (num, i) {
    return array3.indexOf(num) === i;
});

//COLOCANDO EM ORDEM CRESENTE OS NUMERO DA ARRAY
let ordem = excluindoNumeroRep.sort(function(a, b) {
    return a - b
})


console.log(array3)
console.log(ordem)