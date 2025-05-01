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
    const apiRes = await fetch(`https://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`);
    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching universities:', error);
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
}
