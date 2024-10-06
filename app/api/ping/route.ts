import { NextResponse } from 'next/server';

export async function GET() {
  const response = {
    message: "Houston, we have a ping!",
    timestamp: new Date().toISOString()
  };
  return NextResponse.json(response);
}