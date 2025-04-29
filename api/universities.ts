import axios from 'axios';

export default async function handler(req, res) {
  const { country } = req.query;

  if (!country) {
    return res.status(400).json({ error: 'Country is required' });
  }

  try {
    const response = await axios.get('https://universities.hipolabs.com/search', {
      params: { country },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching universities:', error);
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
}

// Add this to explicitly mark as ES Module
export const config = {
  api: {
    bodyParser: false, // or true if you need body parsing
  },
};