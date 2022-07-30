function imprimeElementosDaLista (lista = []){
    
    for (let item of lista){
         console.log (item);
    }
    let quantidade = "A quantidade de elementos da lista são " + lista.length;
    return quantidade

}
console.log (imprimeElementosDaLista(["Banana", "maça", "melancia"]));