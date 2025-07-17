import axios from "axios";
import { IUniResponse } from "@/src/Features/Universities/Interfaces/IUniResponse";

interface IRealResponseObj{
  responseStatusText:string,
  securedData:IUniResponse[]
}
 

export const fetchUniversities = async ({ country }: { country?: string }): Promise<IRealResponseObj> => {
  const universitesFetchBEUrl = '/api/universities'; 

  const { data } = await axios.get<IRealResponseObj>(universitesFetchBEUrl, {
    params: country ? { country } : {},
  });
  console.log('Data From universites api');
  return data;
};


