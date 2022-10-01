import { useState } from 'react';

const ListaDeFrutas = () => {
  const [frutas, setFrutas] = useState([
    'banana',
    'maça',
    'uva',
    'laranja',
    'abacaxi',
  ]);

  return (
    <>
      <ul>
        {frutas.map((fruta) => {
          return <li>{fruta}</li>;
        })}
      </ul>
    </>
  );
};

export default ListaDeFrutas;
