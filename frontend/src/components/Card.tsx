import React, { useState } from 'react';
import Clover from '../assets/Clover.svg';
import Diamond from '../assets/Diamond.svg';
import Heart from '../assets/Heart.svg';
import Spade from '../assets/Spade.svg';
import Card, { Suit } from '../models/Card';
import styles from './Card.module.css';

type CardCompProps = {
  rank: number;
  suit: Suit;
  position?: number;
  rotate?: number;
};

/**
 * Card Component
 * @returns
 */
const CardComponent: React.FC<CardCompProps> = ({ rank, suit, position = 0, rotate = 0 }) => {
  const card = new Card(rank, suit);

  // For Action
  const [top] = useState(position);

  // get icon src
  const getIconSrc = () => {
    if (suit === Suit.Clubs) return Clover;
    if (suit === Suit.Diamonds) return Diamond;
    if (suit === Suit.Hearts) return Heart;
    if (suit === Suit.Spades) return Spade;
  };

  // get color
  const getColor = () => {
    if (suit === Suit.Clubs || suit === Suit.Spades) return 'text-black';
    if (suit === Suit.Diamonds || suit === Suit.Hearts) return 'text-red-500';
  };

  // get position & rotate
  const getPosRot = () => {
    let result = '';
    if (top > 0) result = result + ' mt-' + top;
    else if (top < 0) result = result + ' -mt-' + Math.abs(top);
    if (rotate > 0) result = result + ' transform rotate-' + rotate;
    else if (rotate < 0) result = result + ' transform -rotate-' + Math.abs(rotate);
    return result;
  };

  return (
    <div className={`relative bg-white ${getPosRot()} ${styles.card}`}>
      <p
        className={`absolute left-4 top-3 text-3xl lg:left-5 lg:top-4 lg:text-8xl font-bold ${getColor()}`}
      >
        {card.rankName}
      </p>
      <img src={getIconSrc()} className={`absolute w-4 lg:w-9 ${styles.imgSmall}`} alt="" />
      <img
        src={getIconSrc()}
        className={`absolute w-12 lg:w-24 fill-current ${styles.imgLarge}`}
        alt=""
      />
    </div>
  );
};

export default CardComponent;
