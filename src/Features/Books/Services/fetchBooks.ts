import axios, { AxiosResponse } from "axios";
import { IGutendexBooksResponse } from "@/src/Features/Books/Interfaces/IGutendexBooksResponse";



export const fetchBooks = async (): Promise<AxiosResponse<IGutendexBooksResponse>> => {

    const gutenBooksApiBaseUrl = '/api/gutenBooks';
    const {data:axiosData} = await axios.get(gutenBooksApiBaseUrl);
                      
    console.log('Data From Blogs Api GNews', axiosData);
    return axiosData;
           
};
  



