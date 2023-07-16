import axios from 'axios';


export default async function handler(req, res) {
  try {
    const response = await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: '-874536262',
      text: 'je suis un bot et je te pisse à la raie.'
    });

    if (response.status === 200) {
      res.status(200).json({ message: 'Message envoyé avec succès' });
    } else {
      res.status(500).json({ error: 'Erreur lors de l\'envois du message' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
  }
}