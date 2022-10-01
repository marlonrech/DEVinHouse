import NFTCard from './NFTCard';
import NFTs from './NFTData';

const NFTCardList = () => {
  return (
    <main className="card-list">
      {NFTs.map((card) => {
        return <NFTCard card={card} key={card.id} />;
      })}
    </main>
  );
};

export default NFTCardList;
