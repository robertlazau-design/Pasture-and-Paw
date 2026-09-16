// Email submission service for Pasture & Paw bookings and inquiries
// Uses Option 1: Web3Forms / Formspree (serverless form forwarding to mak@pasturepaw.com)

export interface BookingData {
  service: string;
  name: string;
  email: string;
  phone?: string;
  date?: string;
  time?: string;
  dogDetails?: string;
  groupSize?: string;
  message: string;
}

export interface SendResult {
  success: boolean;
  message?: string;
}

export const TARGET_EMAIL = 'mak@pasturepaw.com';

export async function sendBookingEmail(data: BookingData): Promise<SendResult> {
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'fccaf290-c495-4539-9eaf-f0e0e988096a';
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const subject = `New ${data.service} Request from ${data.name}`;

  // 1. If Formspree endpoint is configured
  if (formspreeEndpoint) {
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: subject,
          service: data.service,
          client_name: data.name,
          client_email: data.email,
          client_phone: data.phone || 'Not provided',
          requested_date: data.date || 'N/A',
          requested_time: data.time || 'N/A',
          dog_details: data.dogDetails || 'N/A',
          group_size: data.groupSize || 'N/A',
          notes: data.message,
        }),
      });

      if (response.ok) {
        return { success: true };
      }
      const errData = await response.json().catch(() => ({}));
      return {
        success: false,
        message: errData.error || 'Unable to deliver message through Formspree.',
      };
    } catch (err: any) {
      return {
        success: false,
        message: err?.message || 'Network error while contacting Formspree.',
      };
    }
  }

  // 2. If Web3Forms Access Key is configured
  if (web3FormsKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject,
          from_name: 'Pasture & Paw Bookings',
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          service: data.service,
          date: data.date || 'N/A',
          time: data.time || 'N/A',
          dog_name_and_breed: data.dogDetails || 'N/A',
          group_size: data.groupSize || 'N/A',
          message: data.message,
          botcheck: '', // Honeypot spam prevention
        }),
      });

      const result = await response.json();
      if (result.success) {
        return { success: true };
      }
      return {
        success: false,
        message: result.message || 'Unable to deliver message through Web3Forms.',
      };
    } catch (err: any) {
      return {
        success: false,
        message: err?.message || 'Network error while contacting Web3Forms.',
      };
    }
  }

  // 3. Development / Preview fallback when no API key is yet configured
  console.info(
    `[Pasture & Paw Email Service] Destination is ${TARGET_EMAIL}.\n` +
    `No VITE_WEB3FORMS_ACCESS_KEY or VITE_FORMSPREE_ENDPOINT found in environment.\n` +
    `To activate real delivery to ${TARGET_EMAIL}:\n` +
    `1. Visit https://web3forms.com and enter ${TARGET_EMAIL} to receive your free access key.\n` +
    `2. Add VITE_WEB3FORMS_ACCESS_KEY=your-key to your .env file.\n` +
    `Form payload captured:`,
    data
  );

  // Simulate network roundtrip so UX testing works seamlessly
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { success: true };
}
