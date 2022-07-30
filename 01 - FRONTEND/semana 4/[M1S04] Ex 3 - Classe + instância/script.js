// Crie uma classe chamada Pessoa com os atributos nome, idade, cpf e anoAniversario. 
// Agora construa um método chamado podeDirigir dentro dessa classe para verificar se a idade é maior ou menor que 18, 
// se for maior ou igual a 18 o retorno desse método será true se não false. 
// Agora, fora dessa classe crie uma instância (usando o new ) inicialize ela (usando o acesso a um atributo " . ") 
// para uma variável const e verifique o retorno com os seus dados em seus atributos.

class Pessoa {
    nome;
    CPF;
    anoAniversario;

    constructor(nome, ano, CPF) {
        this.nome = nome;
        this.CPF = CPF;
        this.anoAniversario = ano;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.anoAniversario;
      }

    podeDirigir(){
        if(this.age() >= 18 ){
            console.log('Pode dirigir')
            return true
        } else {
            console.log('Não pode dirigir')
            return false
        }
    };

};

const _pessoa = new Pessoa ('Marlon',1998, '999.999.999-30');

console.log(_pessoa.podeDirigir())
console.log(_pessoa.anoAniversario)
console.log(_pessoa.CPF)
console.log(_pessoa.nome)
console.log(_pessoa)
console.log(_pessoa.age())


