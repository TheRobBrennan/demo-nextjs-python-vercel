'use client';

import { useState, useEffect } from 'react';
import styles from './APIDebug.module.css';

interface PingResponse {
  message: string;
  timestamp: string;
}

const APIDebug = () => {
  const [nextJsPing, setNextJsPing] = useState<PingResponse | null>(null);
  const [fastApiPing, setFastApiPing] = useState<PingResponse | null>(null);

  const fetchNextJsPing = async () => {
    const response = await fetch('/api/ping');
    const data = await response.json();
    setNextJsPing(data);
  };

  const fetchFastApiPing = async () => {
    const response = await fetch('/api/py/ping');
    const data = await response.json();
    setFastApiPing(data);
  };

  const refreshAll = () => {
    fetchNextJsPing();
    fetchFastApiPing();
  };

  useEffect(() => {
    refreshAll();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>API Debug</h2>
      <div className={styles.pingContainer}>
        <h3 className={styles.subtitle}>Next.js Ping</h3>
        <pre className={styles.pre}>{JSON.stringify(nextJsPing, null, 2)}</pre>
        <button className={styles.button} onClick={fetchNextJsPing}>Refresh Next.js Ping</button>
      </div>
      <div className={styles.pingContainer}>
        <h3 className={styles.subtitle}>FastAPI Ping</h3>
        <pre className={styles.pre}>{JSON.stringify(fastApiPing, null, 2)}</pre>
        <button className={styles.button} onClick={fetchFastApiPing}>Refresh FastAPI Ping</button>
      </div>
      <button className={styles.button} onClick={refreshAll}>Refresh All</button>
    </div>
  );
};

export default APIDebug;