import axios from 'axios';

export default async function handler(req: any, res: any) {
  const { country } = req.query;

  if (!country) {
    return res.status(400).json({ error: 'Country is required' });
  }

  try {
    const response = await axios.get('https://universities.hipolabs.com/search', {
      params: { country },
      headers: {
        'User-Agent': 'university-list-app'  
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching universities:', error);
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
}
