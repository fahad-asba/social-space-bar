import { getGclid } from './gclid';

interface SubmitContactFormInput {
  name: string;
  email: string;
  phone: string;
  message?: string;
  source: string;
}

export async function submitContactForm(data: SubmitContactFormInput) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, gclid: getGclid() }),
  });

  if (!response.ok) {
    throw new Error('Form submission failed');
  }
}
