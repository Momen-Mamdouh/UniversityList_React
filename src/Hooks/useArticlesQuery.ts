import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/src/Services/fetchUniArticles";



export const useArticlesQuery = ( university : string ) =>

    useQuery({
      queryKey: ['universities',   university ],
      queryFn: () => fetchArticles( university),
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 60 * 24,
    });
    
  

