// Serverless function for Vercel / Netlify (Node). Place at /api/quote.js
// Uses SendGrid to email sales@wlgrabhire.com
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Accept JSON or form-encoded data
  const data = req.body || {};
  const {
    name = '',
    email = '',
    phone = '',
    service = '',
    location = '',
    date = '',
    details = '',
    honeypot = ''
  } = data;

  // Basic anti-spam: honeypot field should be empty
  if (honeypot && honeypot.length > 0) {
    return res.status(400).json({ error: 'Spam detected' });
  }

  // Basic validation
  if (!name || !email || !phone || !service || !location) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const toAddress = process.env.SENDGRID_TO || 'sales@wlgrabhire.com';
  const fromAddress = process.env.SENDGRID_FROM || 'no-reply@wlgrabhire.com';

  const subject = `Quote Request from ${name}`;
  const text = `
New Quote Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Required: ${service}
Location: ${location}
Preferred Date: ${date || 'Not specified'}
Project Details: ${details || 'Not provided'}
  `;

  try {
    await sendgrid.send({
      to: toAddress,
      from: fromAddress,
      subject: subject,
      text: text,
      html: `<pre style="white-space:pre-wrap;">${text}</pre>`
    });

    // Optionally: store logs (omitted here for brevity)

    return res.status(200).json({ ok: true, message: 'Email sent' });
  } catch (err) {
    console.error('SendGrid error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}