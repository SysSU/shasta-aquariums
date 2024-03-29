'use server';
import { NextApiRequest, NextApiResponse } from 'next';
import { MailtrapClient } from 'mailtrap';
const TOKEN = process.env.MAILTRAP_TOKEN;
const SENDER_EMAIL =
  process.env.MAILTRAP_SENDER_EMAIL || 'mailtrap@demomailtrap.com';
const SENDER_NAME = process.env.MAILTRAP_SENDER_NAME || 'Mailtrap';
const RECIPIENT_EMAIL =
  process.env.MAILTRAP_RECIPIENT_EMAIL || 'admin@shastaaquariums.com';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!TOKEN) {
    console.error('Mailtrap credentials not found');
    return res.status(500).json({ error: 'Mailtrap credentials not found' });
  }

  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'Method Not Allowed', method: req.method });
  }

  if (!req.body) {
    return res.status(400).json({ error: 'Missing request body' });
  }

  const { name, phone } = JSON.parse(req.body.toString());

  const client = new MailtrapClient({
    token: TOKEN,
  }) as MailtrapClient;

  const sender = {
    email: SENDER_EMAIL,
    name: SENDER_NAME,
  };

  const recipients = [
    {
      email: RECIPIENT_EMAIL,
    },
  ];

  await client
    .send({
      from: sender,
      to: recipients,
      subject: `New Consult Request From ${name}`,
      text: `New Consult Request From ${name}: ${phone}`,
    })
    .then(() => {
      return res.status(400).json({ results: 'Success' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(200).json({ results: 'Error' });
    });
}
