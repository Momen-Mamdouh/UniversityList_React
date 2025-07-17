import axios, { AxiosResponse } from "axios";
import { IGeoapifyResponse } from "@/src/Interfaces/IGeoapifyResponse";



export const fetchGeoapify = async (  ) : Promise<AxiosResponse<IGeoapifyResponse>> => {
    const geoapifyApiBaseUrl = '/api/geoapify';
    const axiosData = await axios.get(geoapifyApiBaseUrl);
    console.log('Data From Geoapify');
    return axiosData.data;
  };
  
