import { useState, useEffect } from 'react';
import { PingResponse } from '../../../types/types';
import { fetchPing } from '../utils/fetchPing';

const usePingData = () => {
  const [nextJsPing, setNextJsPing] = useState<PingResponse | null>(null);
  const [fastApiPing, setFastApiPing] = useState<PingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  return { nextJsPing, fastApiPing, error, refreshNextJs, refreshFastApi, refreshAll };
};

export default usePingData;