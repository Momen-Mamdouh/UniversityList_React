import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';



export default async function booksHandler(_req: VercelRequest, res: VercelResponse) {
    const booksApiBaseUrl = process.env.GUTENDEXBOOKS_API_URL ?? 'https://gutendex.com/books/?';

  try {
    const {data, statusText:booksResponseStatusText} = await axios.get(`${booksApiBaseUrl}`);


    return res.status(200).json({responseStatusText:booksResponseStatusText, data})
    
  } catch (error:unknown) {
    let errorMessage = 'Unknown fetch error';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    console.error(error);
    return res.status(500).json({responseStatus: 500, error:errorMessage});
   
  }
}
