import React, { useState, useEffect } from 'react';
import Deck from 'models/Deck';
import DealPage from './pages/Deal';
import LoserPage from './pages/Loser';
import WinnerPage from './pages/Winner';
import styles from './App.module.css';

/**
 * Main Layout
 * @returns
 */
const App: React.FC = () => {
  const [deck] = useState<Deck>(new Deck());
  const [upgrade, setUpgrade] = useState<boolean>(false);
  const [isWinner, setWinner] = useState<boolean>(false);
  const [isLoser, setLoser] = useState<boolean>(false);

  useEffect(() => {
    setWinner(deck.isWinner());
    setLoser(deck.isLoser());
  }, [upgrade, deck]);

  useEffect(() => {
    const tempDeck = !deck ? new Deck() : deck;
    tempDeck.shuffle();
  }, [deck]);

  return (
    <div className={`absolute top-0 left-0 w-full min-h-full ${styles.body}`}>
      {isWinner ? (
        <WinnerPage deck={deck} upgrade={upgrade} setUpgrade={setUpgrade} />
      ) : isLoser ? (
        <LoserPage deck={deck} upgrade={upgrade} setUpgrade={setUpgrade} />
      ) : (
        <DealPage deck={deck} upgrade={upgrade} setUpgrade={setUpgrade} />
      )}
    </div>
  );
};

export default App;
