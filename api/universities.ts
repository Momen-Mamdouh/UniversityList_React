import axios, { AxiosResponse } from 'axios';
import { universitesListBaseUrl } from '../src/Utilities/environment';
import { IUniResponse } from '../src/Interfaces/IUniResponse';


export default  async function  fetchUniversities( country  : string )
        : Promise<AxiosResponse<IUniResponse[]>>  {
    const axiosData = await axios.get(universitesListBaseUrl, {
        params: country ? { country } : {},
    });
  
    return axiosData;
  };



// export default async function handler(req: any, res: any) {
//   const { country } = req.query;

//   if (!country) {
//     return res.status(400).json({ error: 'Country is required' });
//   }

//   try {
//     const response = await axios.get('https://universities.hipolabs.com/search', {
//       params: { country },
//     });

//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error('Error fetching universities:', error);
//     res.status(500).json({ error: 'Failed to fetch universities' });
//   }
// }
