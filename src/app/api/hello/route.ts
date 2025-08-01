import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Hello from Next.js API! 🌐',
    timestamp: new Date().toISOString(),
    cookies: request.cookies.getAll(),
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  return NextResponse.json({
    message: 'Hello from Next.js API POST! 🌐',
    timestamp: new Date().toISOString(),
    receivedData: body,
    cookies: request.cookies.getAll(),
  });
}
