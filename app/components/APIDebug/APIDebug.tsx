'use client';

import React from 'react';
import styles from './APIDebug.module.css';
import usePingData from './hooks/usePingData';
import PingDisplay from './components/PingDisplay';
import ErrorDisplay from './components/ErrorDisplay';

const APIDebug: React.FC = () => {
  const { nextJsPing, fastApiPing, error, refreshNextJs, refreshFastApi, refreshAll } = usePingData();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>API Debug</h2>
      <ErrorDisplay error={error} />
      <PingDisplay title="Next.js Ping" data={nextJsPing} onRefresh={refreshNextJs} />
      <PingDisplay title="FastAPI Ping" data={fastApiPing} onRefresh={refreshFastApi} />
      <button className={styles.button} onClick={refreshAll}>Refresh All</button>
    </div>
  );
};

export default APIDebug;