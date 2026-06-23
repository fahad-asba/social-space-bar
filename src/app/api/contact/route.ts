import { NextResponse } from 'next/server';
import { sendContactNotification, type ContactFormPayload } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactFormPayload>;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const source = body.source?.trim() || 'Website Contact Form';

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (phone.length < 5) {
      return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 });
    }

    await sendContactNotification({
      name,
      email,
      phone,
      message: body.message?.trim(),
      source,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json(
      { error: 'Failed to send notification. Please try again.' },
      { status: 500 },
    );
  }
}
