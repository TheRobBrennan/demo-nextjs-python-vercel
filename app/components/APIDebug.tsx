import React, { useState, useEffect } from 'react';
import styles from './APIDebug.module.css';

interface PingResponse {
  message: string;
  timestamp: string;
}

const APIDebug: React.FC = () => {
  const [nextJsPing, setNextJsPing] = useState<PingResponse | null>(null);
  const [fastApiPing, setFastApiPing] = useState<PingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPing = async (url: string): Promise<PingResponse> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  };

  const updatePing = async (url: string, setter: React.Dispatch<React.SetStateAction<PingResponse | null>>) => {
    try {
      const data = await fetchPing(url);
      setter(data);
      console.log(`Successful ping to ${url}:`, data);
      return null;
    } catch (e) {
      setter(null);
      const errorMessage = e instanceof Error ? `Fetch failed: ${e.message}` : 'An unknown error occurred';
      console.error(`Error pinging ${url}:`, errorMessage);
      return errorMessage;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const nextJsError = await updatePing('/api/ping', setNextJsPing);
      const fastApiError = await updatePing('/api/py/ping', setFastApiPing);
      setError(nextJsError || fastApiError);
    };
    fetchData();
  }, []);

  const refreshNextJs = async () => {
    const error = await updatePing('/api/ping', setNextJsPing);
    setError(error);
  };

  const refreshFastApi = async () => {
    const error = await updatePing('/api/py/ping', setFastApiPing);
    setError(error);
  };

  const refreshAll = async () => {
    const nextJsError = await updatePing('/api/ping', setNextJsPing);
    const fastApiError = await updatePing('/api/py/ping', setFastApiPing);
    setError(nextJsError || fastApiError);
  };

  // console.log('Current state:', { nextJsPing, fastApiPing, error });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>API Debug</h2>
      <p className={styles.error} data-testid="error-message">{error || 'No error'}</p>
      <div className={styles.pingContainer}>
        <h3 className={styles.subtitle}>Next.js Ping</h3>
        <pre className={styles.pre}>{JSON.stringify(nextJsPing, null, 2)}</pre>
        <button className={styles.button} onClick={refreshNextJs}>Refresh Next.js Ping</button>
      </div>
      <div className={styles.pingContainer}>
        <h3 className={styles.subtitle}>FastAPI Ping</h3>
        <pre className={styles.pre}>{JSON.stringify(fastApiPing, null, 2)}</pre>
        <button className={styles.button} onClick={refreshFastApi}>Refresh FastAPI Ping</button>
      </div>
      <button className={styles.button} onClick={refreshAll}>Refresh All</button>
    </div>
  );
};

export default APIDebug;