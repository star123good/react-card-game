import React, { useState } from 'react';
import Card from 'models/Card';
import Deck from 'models/Deck';
import DealButton from '../components/DealButton';
import ResetButton from '../components/ResetButton';
import CardComponent from '../components/Card';
import TopBoard from '../components/TopBoard';

export type PageProps = {
  deck: Deck;
  upgrade: boolean;
  setUpgrade: (l: boolean) => void;
};

/**
 * Deal Hand Page
 * @returns
 */
const DealPage: React.FC<PageProps> = ({ deck, upgrade, setUpgrade }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [left, setLeft] = useState<number>(deck.cardsLeft);

  // handle of deal
  const handleDeal = () => {
    const dealCards = deck.deal();
    // console.log("[DealPage] handleDeal", dealCards);
    setCards(dealCards);
    setLeft(deck.cardsLeft);
    setUpgrade(!upgrade);
  };

  // handle of reset
  const handleReset = () => {
    deck.shuffle();
    setCards([]);
    setLeft(deck.cardsLeft);
    setUpgrade(!upgrade);
  };

  return (
    <div className="container mx-auto text-center">
      <div className="mt-10">
        <TopBoard count={left} />
      </div>
      {cards.length === 5 && (
        <>
          <div className="hidden lg:flex justify-center xl:space-x-10 lg:space-x-5 mt-12 mb-96">
            <CardComponent rank={cards[0].rank} suit={cards[0].suit} rotate={12} />
            <CardComponent rank={cards[1].rank} suit={cards[1].suit} position={12} rotate={6} />
            <CardComponent rank={cards[2].rank} suit={cards[2].suit} position={16} />
            <CardComponent rank={cards[3].rank} suit={cards[3].suit} position={12} rotate={-6} />
            <CardComponent rank={cards[4].rank} suit={cards[4].suit} rotate={-12} />
          </div>
          <div className="flex lg:hidden justify-center space-x-5 md:space-x-10 mt-12">
            <CardComponent rank={cards[0].rank} suit={cards[0].suit} />
            <CardComponent rank={cards[1].rank} suit={cards[1].suit} />
            <CardComponent rank={cards[2].rank} suit={cards[2].suit} />
          </div>
          <div className="flex lg:hidden justify-center space-x-5 md:space-x-10 mt-8 mb-96">
            <CardComponent rank={cards[3].rank} suit={cards[3].suit} />
            <CardComponent rank={cards[4].rank} suit={cards[4].suit} />
          </div>
        </>
      )}
      <div className="absolute w-full pl-auto pr-auto left-0 bottom-36">
        <DealButton onClick={handleDeal} />
      </div>
      <div className="absolute w-full pl-auto pr-auto lg:pr-10 lg:w-auto right-0 bottom-10">
        <ResetButton title="Reset" onClick={handleReset} />
      </div>
    </div>
  );
};

export default DealPage;
