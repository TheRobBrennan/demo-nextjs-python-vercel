import React from 'react';
import styles from '../APIDebug.module.css';

interface ErrorDisplayProps {
  error: string | null;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (!error) return null;
  return <p className={styles.error} data-testid="error-message">{error}</p>;
};

export default ErrorDisplay;