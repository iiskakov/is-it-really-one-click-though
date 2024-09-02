// /app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, howHeard, service, message } = await req.json();

    // Telegram Bot Token and Chat ID
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    // Resend API Key
    const resendApiKey = process.env.RESEND_API_KEY;

    // Sending message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nHow Heard: ${howHeard}\nService: ${service}\nMessage: ${message}`,
        }),
      }
    );

    if (!telegramResponse.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    // Need to pay to resend to do this
    // // Sending email via Resend
    // const emailResponse = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${resendApiKey}`,
    //   },
    //   body: JSON.stringify({
    //     from: 'contact@2dpro.kz',
    //     to: 'tradeshells@gmail.com',
    //     subject: '2D New Contact',
    //     html: `
    //       <h1>New Contact Form Submission</h1>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Referrer:</strong> ${howHeard}</p>
    //       <p><strong>Service:</strong> ${service}</p>
    //       <p><strong>Message:</strong> ${message}</p>
    //     `,
    //   }),
    // });

    // if (!emailResponse.ok) {
    //   throw new Error('Failed to send email');
    // }

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Error submitting form', error: error.message },
      { status: 500 }
    );
  }
}
