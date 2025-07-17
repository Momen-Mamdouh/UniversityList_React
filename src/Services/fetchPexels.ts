import axios, { AxiosResponse } from "axios";
import { PhotosWithTotalResults } from "pexels/dist/types";
import { IFetchPexelsProps } from "@/src/Interfaces/IPexelProps";



export const fetchPexels = async ( {query, per_page}:IFetchPexelsProps) : Promise<AxiosResponse<PhotosWithTotalResults>> => {
    const pexelsApiBaseUrl = '/api/pexels';
    const axiosData = await axios.get(pexelsApiBaseUrl, { params:{query, per_page} });
    console.log('Data From Pexels');
    return axiosData.data;
  };
  
