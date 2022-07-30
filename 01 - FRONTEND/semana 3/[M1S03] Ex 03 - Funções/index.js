
function listaDeNumeros(lista = []) {
    var par = 0
    var impar = 0

    for (i = 0; i < lista.length; i++) {

        if (lista[i] % 2 == 0) {
            par = par + 1
        } else {
            impar = impar + 1
        }
    };

    document.write(`A quantidade informada foi ${lista.length} a de valores pares foi ${par} a de valores impares foi ${impar}`)

};

listaDeNumeros([2, 4, 3, 5, 7, 9, 10, 12])
