import axios, { AxiosResponse } from "axios";
import {  IArticleResponse } from "../Interfaces/IArticlesResponse";





export const fetchArticles = async ( university : string ) : Promise<AxiosResponse<IArticleResponse>> => {
  const articlesApiBaseUrl = '/api/articles'
  const axiosData = await axios.get(articlesApiBaseUrl, {
    
      params: {   
        q: university,
       } 
      
    });

    console.log('Data From articles from News Api');
    return axiosData;
  };
  

