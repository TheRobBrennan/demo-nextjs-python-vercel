import React from 'react';
import styles from '../APIDebug.module.css';
import { PingResponse } from '../types';

interface PingDisplayProps {
  title: string;
  data: PingResponse | null;
  onRefresh: () => void;
}

const PingDisplay: React.FC<PingDisplayProps> = ({ title, data, onRefresh }) => {
  return (
    <div className={styles.pingContainer}>
      <h3 className={styles.subtitle}>{title}</h3>
      <pre className={styles.pre}>{JSON.stringify(data, null, 2)}</pre>
      <button className={styles.button} onClick={onRefresh}>Refresh {title}</button>
    </div>
  );
};

export default PingDisplay;