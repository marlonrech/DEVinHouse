import React, { useState, useRef, useEffect } from 'react';

const CardDownload = ({ arquivo }) => {
  const { tamanhoDoArquivo, nomeDoArquivo } = arquivo;

  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadValue, setDownloadValue] = useState(0);

  const downloadRef = useRef();

  useEffect(() => {
    if (downloadValue === 100) {
      clearInterval(downloadRef.current);
    }
  });

  const startDownload = () => {
    setIsDownloading(true);
    downloadRef.current = setInterval(() => {
      setDownloadValue((prevValue) => prevValue + 1);
    }, 100);
  };

  const pauseDownload = () => {
    setIsDownloading(false);
    clearInterval(downloadRef.current);
  };

  return (
    <div className="card">
      <h2>{nomeDoArquivo}</h2>
      <progress value={downloadValue} max={100}></progress>
      <h3>{tamanhoDoArquivo} mb</h3>
      {isDownloading ? (
        <button onClick={pauseDownload}>Pause</button>
      ) : (
        <button onClick={startDownload}>Download</button>
      )}
    </div>
  );
};

export default CardDownload;
