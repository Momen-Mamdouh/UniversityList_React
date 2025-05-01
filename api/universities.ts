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

  const targetUrl = `https://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`;
  console.log(`Forwarding request to: ${targetUrl}`);

  try {
    const response = await axios.get(targetUrl);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching universities:', error);
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
}
