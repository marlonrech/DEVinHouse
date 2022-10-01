import React, { useEffect, useRef, useState } from 'react';

const VoceEstaEscrevendo = () => {
  const [isDigitando, setIsDigitando] = useState(false);
  const timeOutRef = useRef();
  return (
    <div style={{ textAlign: 'center' }}>
      <p>{isDigitando ? 'Você está digitando' : 'digite alguma coisa'}</p>
      <input
        type="text"
        onChange={(e) => {
          if (timeOutRef) {
            clearTimeout(timeOutRef.current);
          }
          setIsDigitando(true);

          timeOutRef.current = setTimeout(() => {
            setIsDigitando(false);
          }, 700);
        }}
      />
    </div>
  );
};

export default VoceEstaEscrevendo;
