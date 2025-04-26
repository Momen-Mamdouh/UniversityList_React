import axios, { AxiosResponse } from "axios";
import { geoapifyApiBaseUrl, geoapifyApiKey } from "../Utilities/environment";
import {  useQuery } from '@tanstack/react-query';
import { IGeoapifyResponse } from "../Interfaces/IGeoapifyResponse";



const fetchgeoapify = async (  ) : Promise<AxiosResponse<IGeoapifyResponse>> => {

    const axiosData = await axios.get(geoapifyApiBaseUrl, {
        params: { apiKey: geoapifyApiKey},
    });
  
    return axiosData;
  };
  

  export const useGeoapifyQuery = ( ) =>
    useQuery({
      queryKey: ['countryLocation' ],
      queryFn: () => fetchgeoapify(),
    });
  


