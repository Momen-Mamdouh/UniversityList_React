import axios, { AxiosResponse } from "axios";
import {  IArticleResponse } from "../Interfaces/IArticlesResponse";
import { articlesApiBaseUrl, articlesApiKey } from "../Utilities/environment";
import {  useQuery } from '@tanstack/react-query';



const fetchArticles = async ( university : string )
        : Promise<AxiosResponse<IArticleResponse>> => {
    const axiosData = await axios.get(articlesApiBaseUrl, {
      params: {   
        q: university,
        apiKey: articlesApiKey,
       } 
      
    });
  
    return axiosData;
  };
  

  export const useArticlesQuery = ( university : string ) =>
    useQuery({
      queryKey: ['universities',   university ],
      queryFn: () => fetchArticles( university),
    });
  


