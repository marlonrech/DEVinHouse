const par = (num) => {
    if (num % 2 === 0)
        return true
    
};

const impar = (num) => {
    if (num % 2 === 1)
    return false
}

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let arrayPar = [];
let arrayImpar = [];

const filtrarImparPar = numeros.filter (item => {
    if (par(item) == true) {
        return arrayPar.push(item);
    } else {
        arrayImpar.push (item);
    }


});

// retornando pares com callback, chamando a função par dentro da funçao filtrarImparPar
console.log(`Esses são os numeros pares ${filtrarImparPar}`);

// aqui so chamando o array dos impar normal
console.log(`Esses são os numeros impares ${arrayImpar}`)

