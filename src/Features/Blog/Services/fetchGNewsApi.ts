import axios from "axios";
import { IBlogCard } from "@/src/Features/Blog/Interfaces/IGNewsResponse";
import { IBlogQuery } from "@/src/Interfaces/IBlogQuery";



export const fetchGNewsApi = async ( blogsQuery:IBlogQuery, country:string ) : Promise<IBlogCard[]> => {
    const {language, text:q} = blogsQuery;

    const gNewsBlogsApiBaseUrl = '/api/gNewsBlogs';
    const {data:axiosData} = await axios.get(gNewsBlogsApiBaseUrl, {
                          params: {
                            q: q || 'university',
                            language: language || 'en',
                            country: country || 'eg',
                          },
                        }
                      );
                      
    console.log('Data From Blogs Api GNews', axiosData);
    const slicedData = axiosData.articles;
    return slicedData;
  };
  
