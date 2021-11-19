import React from 'react';
import styles from './ResetButton.module.css';

type ResetButtonProps = {
  title: string;
  onClick: () => void;
};

/**
 * Reset Button Component
 * @returns
 */
const ResetButton: React.FC<ResetButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className={`text-center ml-auto mr-auto text-2xl pl-9 pr-9 font-extrabold ${styles.button}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ResetButton;
