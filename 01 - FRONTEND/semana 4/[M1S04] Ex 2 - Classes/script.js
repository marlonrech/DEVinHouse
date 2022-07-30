// Crie uma classe chamada Filme com os atributos nome, anoDeLancamento e diretor. 
// Fora do escopo dessa classe, instancie ela e preencha os campos acessando seus atributos por meio do ponto (.).

//Criando a classe
class Filme {
    nome;
    AnoDeLancamento;
    Diretor;
    Bilheteria;

};

//gravando a classe em uma let e puxando essa let mais o atributo da class
let myfilme = new Filme();
myfilme.nome = 'Titanic';
myfilme.AnoDeLancamento = '16 de janeiro de 1998';
myfilme.Diretor = 'James Cameron';
myfilme.Bilheteria = '2,202 bilhões USD';

console.log (myfilme)