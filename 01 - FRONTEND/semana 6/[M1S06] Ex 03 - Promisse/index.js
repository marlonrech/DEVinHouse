// Construa uma função que irá verificar se um valor passado pelo parâmetro é par. 
// Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem "Número validado é par”.
// Caso o valor seja impar, retorne para o catch a mensagem “Error: número informado é impar”.



function verificaImparOuPar () {
    let numero = parseFloat(window.prompt('Digite um numero: '))
    const p = new Promise ((resolve, reject)=> {
        if (numero % 2 == 0) {
            resolve (`Numero digitado é par`);
        } else {
            reject ('Numero digitado é impar');
        }
    });
    p.then ((resolve) => {
        console.log(resolve);
    }).catch ((err) => {
        console.error(err)
    })
}

verificaImparOuPar()