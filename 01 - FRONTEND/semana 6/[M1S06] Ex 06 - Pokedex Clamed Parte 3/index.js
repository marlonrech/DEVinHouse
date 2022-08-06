
// CRIANDO FUNCTION COM METODO GET
function searchPokemon() {
  const options = {
    method: "GET",
  };

// SELECIONANDO INPUT NO HTML E PEGANDO SEU VALOR
  let pokemon = document.querySelector(".input__search").value;

  // ESTRUTURA FETCH COM O VALOR PEGADO DO INPUT PRA ESCOLHER POKEMON
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, options)
    .then((response) => {
      return response.json();
    })
    .then((pokemon) => {
      console.log(pokemon);

      // SELECIONANDO AS ID E CLASS NO HTML PARA MANIPULAÇÃO
      let image = document.querySelector(".pokemonimage");
      let idPokemon = document.querySelector(".pokemonnumber");
      let namePokemon = document.querySelector(".pokemonname");
      let typePokemon = document.querySelector("#pokemontype");
      let weightPokemon = document.querySelector("#weight");
      let abilityPokemon = document.querySelector("#ability");

      // ADICIONANDO NO HTML OS VALORES PEGADO DA API
      image.src = pokemon.sprites.front_default;
      idPokemon.innerHTML = pokemon.id;
      namePokemon.innerHTML = pokemon.name;
      typePokemon.innerHTML = pokemon.types[0].type.name;
      weightPokemon.innerHTML = pokemon.weight;

      abilityPokemon.innerHTML = "";
      pokemon.abilities.forEach((abilityObj) => {
        let tagLi = document.createElement("li");
        tagLi.innerHTML = abilityObj.ability.name;
        abilityPokemon.appendChild(tagLi);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
