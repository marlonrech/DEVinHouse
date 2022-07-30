var Hortifruti = 0
var laticinios = 0
var carnes = 0
var peixes = 0
var aves = 0

while (produto != 6) {

    var produto = parseFloat(window.prompt('Quais itens você deseja comprar? \n (1) Hortifruti \n (2) Laticínios \n (3) Carnes \n (4) Peixes \n (5) Aves \n (6) Fechar pedido'));


    switch (produto) {
        case 1:
            var quantidade = parseFloat(window.prompt('Qual a quantidade de Hortifruti?'))
            break;

        case 2:
            var quantidade = parseFloat(window.prompt('Qual a quantidade de laticinios?'))
            break;

        case 3:
            var quantidade = parseFloat(window.prompt('Qual a quantidade de Carne?'))
            break;

        case 4:
            var quantidade = parseFloat(window.prompt('Qual a quantidade de Peixe?'))
            break;

        case 5:
            var quantidade = parseFloat(window.prompt('Qual a quantidade de Ave?'))
            break;
        
        case 6:
            if (Hortifruti > laticinios && Hortifruti > carnes && Hortifruti > peixes && Hortifruti > aves) {
                alert ('O produto que você mais comprou foi Hortifruti')
            } else if (laticinios > Hortifruti && laticinios > carnes && laticinios > peixes && laticinios > aves) {
                alert ('O produto que você mais comprou foi laticinios')
            }   else if (carnes > Hortifruti && carnes > laticinios && carnes > peixes && carnes > aves) {
                alert ('O produto que você mais comprou foi carne')
            }   else if (peixes > Hortifruti && peixes > laticinios && peixes > carnes && peixes > aves) {
                alert ('O produto que você mais comprou foi peixe')
            }   else {
                alert ('O prouto que você mais comprou foi aves')
            }

    };

    if (produto == 1) {
        Hortifruti = quantidade + Hortifruti
    } else if (produto == 2) {
        laticinios = quantidade + laticinios
    } else if (produto == 3) {
        carnes = quantidade + carnes
    } else if (produto == 4) {
        peixes = quantidade + peixes    
    } else {
        aves = quantidade + aves
    }


};

