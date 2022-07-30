let entrevistados = parseFloat(window.prompt('Digite numero de entrevistados: '));

let i = 1;

let ruim = 0;
let bom = 0;
let excelente = 0;

while ( i <= entrevistados) {
    let nota = parseFloat (window.prompt('Entrevistado ' + i + ' digite sua nota (1 PARA RUIM , 2 PARA BOM e 3 PARA EXCELENTE): '))

    if (nota == 1) {
        ruim = ruim +1
    } else if (nota == 2){
         bom = bom +1
    } else {
        excelente = excelente +1
    }
    
    i++;
};

document.write ('<h3>Dos ' + entrevistados +' entrevistados ' +ruim + ' acharam o filme ruim</h3>');
document.write ('<h3> '+bom + ' acharam o filme bom</h3>');
document.write ('<h3>E '+excelente + ' acharam o filme excelente</h3>');