import './PokemonList.css';
import TypeDisplay from './Tipos';
import IdDisplay from './IdDisplay';
const pokemons = [
  {
    id: 1,
    name: 'bulbasaur',
    tipos: ['planta', 'veneno'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 2,
    name: 'bulbasaur',
    tipos: ['planta', 'veneno'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 3,
    name: 'bulbasaur',
    tipos: ['planta', 'veneno'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 4,
    name: 'bulbasaur',
    tipos: ['planta', 'veneno'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 11,
    name: 'bulbasaur',
    tipos: ['planta', 'veneno'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 6,
    name: 'bulbasaur',
    tipos: ['planta', 'veneno'],
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
];

const PokemonList = () => {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => {
        const { id, name, tipos, img } = pokemon;
        return (
          <PokemonCard id={id} name={name} tipos={tipos} img={img} key={id} />
        );
      })}
    </div>
  );
};
let counter = 0;
const PokemonCard = ({ id, name, tipos, img }) => {
  return (
    <div className="pokemon-card">
      <img src={img} alt="" />

      <IdDisplay id={id} key={id} />
      <h5>{name}</h5>
      <div className="types-box">
        {tipos.map((tipo) => {
          counter++;
          return <TypeDisplay tipo={tipo} key={counter} />;
        })}
      </div>
    </div>
  );
};

export default PokemonList;
