
import axios, { AxiosResponse } from 'axios';

const universitiesApiUrl = 'https://universities.hipolabs.com/search';

export default async function handler(req: any, res: any) {
  try {
    const { country } = req.query;

    const axiosData: AxiosResponse = await axios.get(universitiesApiUrl, {
      params: country ? { country } : {},
    });

    res.status(200).json(axiosData.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch universities.' });
  }
}
