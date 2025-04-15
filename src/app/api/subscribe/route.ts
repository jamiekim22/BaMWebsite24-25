import { NextResponse } from 'next/server';
import { addEmailToSheet } from '@/lib/sheets';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  try {
    await addEmailToSheet(email);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save email' }, { status: 500 });
  }
}
