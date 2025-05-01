import axios from "axios";

export async function GET(req: Request, res:Response) {

    try {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Egypt');
    
        return res;
      } 
      catch (error: any) {
        console.error('Error fetching universities:', error?.message ?? error);
        return res;
      }
  }