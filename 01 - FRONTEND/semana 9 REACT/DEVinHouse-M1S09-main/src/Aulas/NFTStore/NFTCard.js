import './NFTCard.css';

const NFTCard = ({ card }) => {
  const {
    nome,
    nickcriador,
    foto_perfil,
    imagem_nft,
    preco,
    moeda,
    precoreal,
  } = card;

  return (
    <article className="card-center">
      <header className="card-header">
        <img src={foto_perfil} alt={nickcriador} className="card-pfp" />
        <div className="header-content">
          <h3>{nome}</h3>
          <h4>{nickcriador}</h4>
        </div>
      </header>
      <main className="nft-image">
        <img src={imagem_nft} alt={nome} />
      </main>
      <footer className="card-footer">
        <h5>(R$ {precoreal})</h5>
        <h4>
          {preco} {moeda}
        </h4>
      </footer>
    </article>
  );
};

export default NFTCard;
