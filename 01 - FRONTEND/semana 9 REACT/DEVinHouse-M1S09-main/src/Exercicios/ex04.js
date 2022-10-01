import { useState } from 'react';

const TrocarTitulos = () => {
  const [valorBotao, setValorBotao] = useState('Escolha um titulo');

  const botaoCor = (e) => {
    console.log(e.target);
    e.target.classList.add('btn-clicado');
    setInterval(() => {
      e.target.classList.remove('btn-clicado');
    }, 2000);
  };

  return (
    <>
      <span>Botão clicado {valorBotao}</span>
      <div>
        <button
          onClick={(e) => {
            setValorBotao('Titulo 1');
            botaoCor(e);
            document.title = 'Titulo 1';
          }}
        >
          Título 1
        </button>
        <button
          onClick={(e) => {
            setValorBotao('Titulo 2');
            document.title = 'Titulo 2';
            botaoCor(e);
          }}
        >
          Título 2
        </button>
      </div>
    </>
  );
};

export default TrocarTitulos;
