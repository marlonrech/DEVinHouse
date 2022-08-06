// Utilizando a api PokéAPI e fazendo uma requisição get com XMLHttpRequest, 
// imprima em um console.log() o nome, a altura, o peso e adicione na tela uma imagem (a sua escolha) desse pokémon. 
// Todas as informações precisam vir da api inclusive a imagem.

// Dicas: as informações pedidas estão dentro do json que é retornado da api, observe as propriedades: height, weight, sprites e name.
// Para o teste no final da url é necessário usar um nome de um pokémon. Ex: pikachu, ditto, charmander…



// CRIANDO AS VARIAVEIS
let valorInput = ''
let botao

// SELECIONANDO O BOTAO E BOTANDO UM EVENTO DE CLICK
botao = document.querySelector('#botaoBuscarPokemon');
botao.addEventListener('click', pokemon);

// CRIANDO A FUNCAO
function pokemon() {
    
    // SELECIONANDO O INPUT E PEGANDO O SEU VALOR
    valorInput = document.querySelector('#enviarNomePokemon').value;
    console.log(valorInput)

    // CRIANDO A ESTRUTURA DO XML
    const buscarPokemon = new XMLHttpRequest();
    buscarPokemon.open('GET', `https://pokeapi.co/api/v2/pokemon/${valorInput}`);
    buscarPokemon.onload = () => {

        // CRIANDO UMA CONST PRA GUARDA O VALOR DA RESPOSTA DO XML
        const infoPokemon = JSON.parse (buscarPokemon.response);
        console.log(infoPokemon);

        // AS INFORMAÇÃO PEGADA DA API
        let div = document.querySelector('#mostrarInfoPoke')
        let img = document.getElementById('pokemonImagem')
        div.innerHTML = `O nome do pokemon é: ${infoPokemon.name} <br>`
        div.innerHTML += `A altura do pokemon é: ${infoPokemon.height} <br>`
        div.innerHTML += `O peso do pokemon é: ${infoPokemon.weight} <br>`
        img.src = infoPokemon.sprites.front_default;

    }
    buscarPokemon.onerror = (err) => {
        console.error(err)
    }
    
    buscarPokemon.send();
}

