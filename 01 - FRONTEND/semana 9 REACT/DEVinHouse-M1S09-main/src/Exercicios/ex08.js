import CardDownload from './ex07';

import React from 'react';

const arquivos = [
  {
    id: 1,
    nomeDoArquivo: 'LOL',
    tamanhoDoArquivo: 500,
  },
  { id: 2, nomeDoArquivo: 'GTA', tamanhoDoArquivo: 800 },
  { id: 3, nomeDoArquivo: 'VSCODE', tamanhoDoArquivo: 300 },
];

const CardsDownloadList = () => {
  return (
    <div>
      {arquivos.map((arquivo) => {
        return <CardDownload key={arquivo.id} arquivo={arquivo} />;
      })}
    </div>
  );
};

export default CardsDownloadList;
