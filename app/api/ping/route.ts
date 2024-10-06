import { NextResponse } from 'next/server';
import { formatLocalTimestamp } from '../../utils/dateUtils';

export async function GET() {
  const now = new Date();
  const response = {
    message: "Houston, we have a ping!",
    timestamp: now.toISOString(),
    localTimestamp: formatLocalTimestamp(now)
  };
  return NextResponse.json(response);
}