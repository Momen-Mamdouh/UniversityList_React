import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function NewsArticlesHandler(req: VercelRequest, res: VercelResponse) {
  const q = (req.query.q as string)?.trim() ?? 'University';

  const newsApiUrl = process.env.NEWS_API_URL ?? 'https://newsapi.org/v2/everything';
  const newsApiKey = process.env.NEWS_API_KEY;

  console.log('NEWS_API_URL:', process.env.NEWS_API_URL);
  console.log('NEWS_API_KEY:', process.env.NEWS_API_KEY);

  if (!newsApiUrl || !newsApiKey || !q) {
     console.warn('Missing: ', { newsApiUrl, newsApiKey: !!newsApiKey, q });
    return res.status(400).json({ error: 'Missing baseUrl, API key, or query' });
  }

  const params = {
    q,
    apikey: newsApiKey,
  };

  try {
    const { data, status } = await axios.get(newsApiUrl, { params });
    return res.status(200).json({
      responseStatus: status,
      articles: data.articles,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown fetch error';
    console.error('News API error:', error);
    return res.status(500).json({ responseStatus: 500, error: errorMessage });
  }
}
