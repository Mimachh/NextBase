import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.post(`https://api.telegram.org/bot6333726554:AAHjqU64V2uGCM5AObd5vcNgFu74ZeoKO_w/sendMessage`, {
      chat_id: '+rAXAxBMG7F81OWY0',
      text: 'Message de test depuis Next.js'
    });

    if (response.status === 200) {
      res.status(200).json({ message: 'Message envoyé avec succès' });
    } else {
      res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
  }
}
