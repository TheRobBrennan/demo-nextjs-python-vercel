import { NextResponse } from 'next/server';
import { formatLocalTimestamp } from '../../utils/dateUtils';

export const runtime = 'edge'; // Use the Edge Runtime, which is faster and more efficient for simple API routes

export async function GET() {
  try {
    const now = new Date();
    const response = {
      message: "Houston, we have a ping!",
      timestamp: now.toISOString(),
      localTimestamp: formatLocalTimestamp(now)
    };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error in ping endpoint:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}