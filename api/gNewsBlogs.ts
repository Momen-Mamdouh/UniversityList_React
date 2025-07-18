// /api/gNewsBlogs.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function gNewsBlogsHandler(req: VercelRequest, res: VercelResponse) {
  const q = (req.query.q as string)?.trim() ?? 'university';
  const language = (req.query.language as string)?.trim()?.toLowerCase() ?? 'en';
  const country = (req.query.country as string)?.slice(0, 2).toLowerCase() ?? 'eg'; // safer

  const gNewsApiUrl = process.env.GNEWS_BLOG_API_URL ?? 'https://gnews.io/api/v4/search';
  const gNewsApiKey = process.env.GNEWS_BLOG_API_KEY;

  console.log('GNEWS_API_URL:', process.env.GNEWS_BLOG_API_URL);
  console.log('GNEWS_API_KEY:', process.env.GNEWS_BLOG_API_KEY);


  if (!gNewsApiUrl || !gNewsApiKey || !q) {
     console.warn('Missing: ', { gNewsApiUrl, gNewsApiKey: !!gNewsApiKey, q });
    return res.status(400).json({ error: 'Missing baseUrl, API key, or query' });
  }

  const params = {
    q,
    apikey: gNewsApiKey,
    country,
    language,
    max: 9,
  };

  try {
    const { data, status } = await axios.get(gNewsApiUrl, { params });
    return res.status(200).json({
      responseStatus: status,
      articles: data.articles,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown fetch error';
    console.error('GNews API error:', error);
    return res.status(500).json({ responseStatus: 500, error: errorMessage });
  }
}
