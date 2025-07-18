import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';



export default async function geoapifyHandler(_req: VercelRequest, res: VercelResponse) {
    const universitiesApiBaseUrl = process.env.GEOAPIFY_API_URL ?? 'https://api.geoapify.com/v1/ipinfo?';
    const geoapifyApiKey = process.env.GEOAPIFY_API_KEY;

  console.log('GEOAPIFY_API_URL:', process.env.GEOAPIFY_API_URL);
  console.log('GEOAPIFY_API_KEY:', process.env.GEOAPIFY_API_KEY);


  try {
    const {data, statusText:uniResponseStatusText} = await axios.get(`${universitiesApiBaseUrl}`, {
        params: { apiKey: geoapifyApiKey},
    });

    if (!geoapifyApiKey) {
        return res.status(500).json({ error: 'Geoapify API key not set' });
    }

    return res.status(200).json({responseStatusText:uniResponseStatusText, data})
  } catch (error:unknown) {
    let errorMessage = 'Unknown fetch error';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    console.error(error);
    return res.status(500).json({responseStatus: 500, error:errorMessage});
   
  }
}
