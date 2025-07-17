import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';


export default async function pexelsHandler(req: VercelRequest, res: VercelResponse) {
  const pexelsApiUrl = process.env.PEXELS_API_URL ?? 'https://api.pexels.com/v1/search';
  const pexelsApiKey =  process.env.PEXELS_API_KEY;
  const query = req.query.query as string ?? 'University'; 
  const per_page = req.query.per_page as string ?? '30';
  // const size  = req.query.size as string ?? 'medium';

  if (!pexelsApiKey || !pexelsApiUrl  || !query) {
    return res.status(400).json({ error: 'Missing baseUrl, API key, or query' });
  }

  const params = { query, per_page };

  const headers = { Authorization: pexelsApiKey };

  try {
    const { data, status } = await axios.get(pexelsApiUrl, { params, headers });

    return res.status(200).json({
      responseStatus: status,
      photos: data.photos,
    });

  } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown fetch error';
      console.error('Pexels API error:', error);
      return res.status(500).json({ responseStatus: 500, error: errorMessage });
  }
}

