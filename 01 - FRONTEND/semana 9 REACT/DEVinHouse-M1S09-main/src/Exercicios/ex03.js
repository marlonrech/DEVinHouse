import { useState } from 'react';

const ContadorDeCliques = () => {
  const [contador, setContador] = useState(0);

  const add = () => {
    setContador(contador + 1);
  };

  const remove = () => {
    setContador(contador - 1);
  };

  const reset = () => {
    setContador(0);
  };

  return (
    <>
      <h1>{contador}</h1>

      <button onClick={remove}>Menos</button>
      <button onClick={reset}>Reset</button>
      <button onClick={add}>Mais</button>
    </>
  );
};

export default ContadorDeCliques;
