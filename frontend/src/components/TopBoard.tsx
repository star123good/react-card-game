import React from 'react';
import styles from './TopBoard.module.css';

type TopBoardProps = {
  count: number;
};

/**
 * Top Board Component
 * @returns
 */
const TopBoard: React.FC<TopBoardProps> = ({ count }) => {
  return (
    <div className={`text-center bg-black text-white pt-4 ml-auto mr-auto ${styles.boarder}`}>
      <p className="text-5xl font-bold">{count}</p>
      <p className="mt-2 text-xl font-bold">Cards Left</p>
    </div>
  );
};

export default TopBoard;
