// ✅ use ESM import style
import axios from 'axios';

// ✅ standard Next.js API type if you're using Vercel
export default async function handler(req, res) {
  const { country } = req.query;

  if (!country) {
    return res.status(400).json({ error: 'Country is required' });
  }

  try {
    const response = await axios.get('https://universities.hipolabs.com/search', {
      params: { country },
      headers: {
        'User-Agent': 'university-list-app', // Important to not get blocked
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching universities:', error);

    if (axios.isAxiosError(error)) {
      console.error('Axios error message:', error.message);
      console.error('Axios error response data:', error.response?.data);
      console.error('Axios error response status:', error.response?.status);
      console.error('Axios error config:', error.config);
    } else {
      console.error('Unexpected error:', error);
    }

    res.status(500).json({ error: 'Failed to fetch universities' });
  }
}
