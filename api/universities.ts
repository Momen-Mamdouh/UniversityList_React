import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const country = req.query.country as string;

  if (!country) {
    return res.status(400).json({ error: 'Country is required' });
  }

  try {
    const response = await axios.get('https://universities.hipolabs.com/search', {
      params: { country },
    });

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error fetching universities:', error?.message ?? error);
    return res.status(500).json({ error: 'Failed to fetch universities' });
  }
}
