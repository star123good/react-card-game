import React from 'react';
import styles from './DealButton.module.css';

type DealButtonProps = {
  onClick: () => void;
};

/**
 * Deal Button Component
 * @returns
 */
const DealButton: React.FC<DealButtonProps> = ({ onClick }) => {
  return (
    <button
      className={`text-center text-black ml-auto mr-auto text-6xl font-black ${styles.button}`}
      onClick={onClick}
    >
      DEAL
    </button>
  );
};

export default DealButton;
