'use server';

import { MailtrapClient } from 'mailtrap';
const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;
const SENDER_EMAIL =
  process.env.MAILTRAP_SENDER_EMAIL || 'mailtrap@demomailtrap.com';
const SENDER_NAME = process.env.MAILTRAP_SENDER_NAME || 'Mailtrap';
const RECIPIENT_EMAIL =
  process.env.MAILTRAP_RECIPIENT_EMAIL || 'admin@shastaaquariums.com';

export default async function handler(req, res) {
  console.log(req.body);
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'Method Not Allowed', method: req.method });
  }
  const { name, phone } = req.body;
  console.log(req.body);
  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

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
      res.send({ results: 'Success' });
    })
    .catch((err) => {
      console.error(err);
      res.send({ results: 'Error' });
    });
}
