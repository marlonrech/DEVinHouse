import { useState, useEffect } from 'react';

const ValorDigitadoNoConsole = () => {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    console.log(texto);
  }, [texto]);

  return (
    <input
      type="text"
      className="inputText"
      onChange={(e) => {
        setTexto(e.target.value);
      }}
    />
  );
};

export default ValorDigitadoNoConsole;
