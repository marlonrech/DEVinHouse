import { useState, useRef, useEffect } from 'react';

const Cronometro = () => {
  const [contador, setContador] = useState(3);

  const contadorRef = useRef();

  useEffect(() => {
    if (contador === 0) {
      clearInterval(contadorRef.current);
    }
  });

  const contagemRegressiva = () => {
    const contagem = setInterval(() => {
      contadorRef.current = contagem;
      return setContador((prevValue) => prevValue - 1);
    }, 1000);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{contador}</h3>
      <button
        onClick={() => {
          setContador(3);
          contagemRegressiva();
        }}
      >
        teste
      </button>
    </div>
  );
};

export default Cronometro;
