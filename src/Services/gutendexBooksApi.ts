import axios, { AxiosResponse } from "axios";
import {  gutendexBooksApiBaseUrl } from "../Utilities/environment";
import {  useQuery } from '@tanstack/react-query';
import { IGutendexBooksResponse } from "../Interfaces/IGutendexBooksResponse";



const fetchBooks = async (): Promise<AxiosResponse<IGutendexBooksResponse>> => {
            return await axios.get(gutendexBooksApiBaseUrl);
};
  

export const useBooksQuery = (  ) =>
useQuery({
    queryKey: ['books'],
    queryFn: () => fetchBooks(),
});
  


