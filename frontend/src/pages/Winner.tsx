import React from 'react';
import CardComponent from '../components/Card';
import winner from '../assets/winner.svg';
import ResetButton from '../components/ResetButton';
import TopBoard from '../components/TopBoard';
import { PageProps } from './Deal';

/**
 * Winner Page
 * @returns
 */
const WinnerPage: React.FC<PageProps> = ({ deck, upgrade, setUpgrade }) => {
  // handle of Play again
  const handlePlayAgain = () => {
    deck.shuffle();
    setUpgrade(!upgrade);
  };

  return (
    <div className="container mx-auto text-center">
      <div className="mt-10">
        <TopBoard count={0} />
      </div>
      <div className="-mt-10">
        <img src={winner} className="w-100 ml-auto mr-auto" alt="" />
      </div>
      <div className="flex justify-center space-x-12 mt-10 mb-64">
        <CardComponent rank={deck.lastCards[0].rank} suit={deck.lastCards[0].suit} />
        <CardComponent rank={deck.lastCards[1].rank} suit={deck.lastCards[1].suit} />
      </div>
      <div className="absolute w-full pl-auto pr-auto right-0 bottom-10">
        <ResetButton title="Play Again" onClick={handlePlayAgain} />
      </div>
    </div>
  );
};

export default WinnerPage;
