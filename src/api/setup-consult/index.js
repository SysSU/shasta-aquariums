import { MailtrapClient } from 'mailtrap';
const TOKEN = import.meta.env.VITE_MAILTRAP_TOKEN;
const ENDPOINT = import.meta.env.VITE_MAILTRAP_ENDPOINT;

export const POST = async (req, res) => {
  const { name, email, phone } = req.body;
  console.log('trying sheets');
  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

  const sender = {
    email: 'mailtrap@demomailtrap.com',
    name: 'Mailtrap Test',
  };
  const recipients = [
    {
      email: 'admin@shastaaquariums.com',
    },
  ];

  await client
    .send({
      from: sender,
      to: recipients,
      subject: `New Consult Request From ${name} <${email}>`,
      text: `New Consult Request From ${name} <${email}>: ${phone}`,
    })
    .then(() => {
      res.send({ results: 'Success' });
    })
    .catch((err) => {
      console.error(err);
      res.send({ results: 'Error' });
    });
};
