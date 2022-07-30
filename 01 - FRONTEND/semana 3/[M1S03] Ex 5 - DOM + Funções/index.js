
//FUNCTION SELECIONANDO ELEMENTO NO HTML
function selecionandoElemento (elemento){
   var selecionando = document.getElementById(elemento)
   return selecionando
}


// FUNCTION SELECIONANDO ELEMENTO NO HTML E ADICIONANDO TEXTO
function adicionandoTexto (elemento, texto) {
    var adicionando = selecionandoElemento(elemento).innerHTML = (texto)
    return adicionando
}


//FUNCTION SELECIONANDO ELEMENTO NO HTML E ALTERANDO A COR
function colocandoCor (elemento, cor) {
    var corDoTexto = selecionandoElemento(elemento).style.color = (cor) 
    return corDoTexto
}



selecionandoElemento('primeiro') 
adicionandoTexto ('primeiro','O importante não é vencer todos os dias, mas lutar sempre.')
colocandoCor('primeiro', 'blue')


selecionandoElemento('segundo');
adicionandoTexto ('segundo','Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!')
colocandoCor('segundo', 'red')

selecionandoElemento('terceiro');
adicionandoTexto ('terceiro','É melhor conquistar a si mesmo do que vencer mil batalhas.')
colocandoCor('terceiro', 'orange')

selecionandoElemento('quarto');
adicionandoTexto ('quarto','Aquele que não tem confiança nos outros, não lhes pode ganhar a confiança.')
colocandoCor('quarto', 'black')

selecionandoElemento('quinto');
adicionandoTexto ('quinto','Persistir é o primeiro passo para conquistar o que se deseja.')
colocandoCor('quinto', 'pink')




//FUNCTION CRIANDO DIV E NOMEANDO ELA
function criarDiv (lista = []){
    const divTexto = document.getElementById ('primeiro');
    for (var [indice,text] of lista.entries()) {
        const texto = document.createElement('div')
        texto.classList.add('test' + indice);
        texto.innerHTML = text
        divTexto.append(texto)
        
    }
}

criarDiv(['texto 01', 'texto 02' , 'texto 03', 'texto 04'])
    
