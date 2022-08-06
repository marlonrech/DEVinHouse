// Agora pensando em avançar um pouco mais iremos adicionar em tela um input e um botão que irá pegar o nome do pokemon 
// e ao apertar no botão pesquisar irá fazer a mesma requisição construída anteriormente.
// Com isso imprima as mesmas informações pedidas todas em tela, adicione uma lista com todas as habilidades do pokémon (observe a propriedade abilities).


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

