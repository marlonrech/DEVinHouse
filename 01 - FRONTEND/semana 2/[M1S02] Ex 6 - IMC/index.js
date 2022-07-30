let peso = parseFloat(window.prompt('Digite seu peso: '))
let altura = parseFloat(window.prompt('Digite sua altura: '))
let resultado = peso / (altura * altura)

if (resultado >= 25){
    alert ('Seu IMC está em ' + resultado.toFixed(2) + ' você está acima do peso, procure um médico')

}else if (resultado > 18.5){
    document.write ('Seu IMC está em '+ resultado.toFixed(2) + ' <h3>PARABÉNS!! Você está no peso ideal</h3>')

} else {
    document.write ('Seu IMC está em '+ resultado.toFixed(2) + ' <h3>Você está abaixo do peso, procure um médico.</h3>')
}