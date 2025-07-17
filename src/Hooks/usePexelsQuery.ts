import { useQuery } from "@tanstack/react-query";
import { fetchPexels } from '@/src/Services/fetchPexels'
import { IFetchPexelsProps } from "@/src/Interfaces/IPexelProps";



export const usePexelsQuery = (query: string = 'University', per_page: string = '80') =>{
    const pexelFetchProps:IFetchPexelsProps = {query, per_page:'80'};

    return useQuery({
      queryKey: ['pexelsImages', query, per_page],
      queryFn: () => fetchPexels(pexelFetchProps),
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
       enabled: !!query, 
    })

};