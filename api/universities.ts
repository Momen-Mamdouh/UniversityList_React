import type { VercelRequest, VercelResponse } from '@vercel/node';
// import { SafeParseResult, UniversitySchema, type University } from '../lib/ZodSchemas/universitySchema';
import axios from 'axios';

import { z, ZodError } from 'zod';

 const UniversitySchema =  z.object({
    domains: z.array(z.string()),
    country: z.string(),
    name: z.string(),
    web_pages: z.array(z.string()),
    alpha_two_code: z.string()
  })

type University = z.infer<typeof UniversitySchema>;

type SafeParseResult<T> = {
   success: boolean,
   data?: T,
   error?: ZodError<T>
 }

export default async function universitiesHandler(req: VercelRequest, res: VercelResponse) {
  const universitiesApiBaseUrl = process.env.UNIVERSITES_API_URL ?? 'http://universities.hipolabs.com/search?';
  const country = req.query.country;
  console.log('UNI_API_URL:', process.env.UNIVERSITES_API_URL);
  console.log('country:', country);

  if (!country) {
    return res.status(400).json({ error: 'Country is required as a string' });
  }

  try {
    const {data:rawData, statusText:uniResponseStatusText} = await axios.get(`${universitiesApiBaseUrl}country=${country}`);

    //^^ Validate & sanitize each item individually
    const validatedData: University[] = rawData
      .map((item: unknown) => UniversitySchema.safeParse(item))
      .filter((result:SafeParseResult<University>) => result.success)
      .map((result:SafeParseResult<University>) => result.data);

    return res.status(200).json({responseStatusText:uniResponseStatusText, securedData:validatedData})
  } catch (error:unknown) {
    let errorMessage = 'Unknown fetch error';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    console.error(error);
    return res.status(500).json({responseStatus: 500, error:errorMessage});
   
  }
}
