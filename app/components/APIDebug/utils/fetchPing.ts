import { PingResponse } from '../../../types/types';

export const fetchPing = async (url: string): Promise<PingResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};