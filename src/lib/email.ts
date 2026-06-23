import nodemailer from 'nodemailer';
import {
  buildContactEmailHtml,
  buildContactEmailText,
  type ContactFormPayload,
} from './emailTemplate';

export type { ContactFormPayload };

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error('Email credentials are not configured');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
}

export async function sendContactNotification(data: ContactFormPayload) {
  const to = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER;
  if (!to) {
    throw new Error('Notification email is not configured');
  }

  const transporter = getTransporter();
  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  await transporter.sendMail({
    from: `"Social Space Bar" <${process.env.SMTP_USER}>`,
    to,
    replyTo: data.email,
    subject: `🎯 New Lead: ${data.name} — ${data.source}`,
    text: buildContactEmailText(data, submittedAt),
    html: buildContactEmailHtml(data, submittedAt),
  });
}
