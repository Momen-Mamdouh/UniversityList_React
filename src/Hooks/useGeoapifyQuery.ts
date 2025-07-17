import { useQuery } from "@tanstack/react-query";
import { fetchGeoapify } from '@/src/Services/fetchGeoapify'

export const useGeoapifyQuery = ( ) =>
    useQuery({
      queryKey: ['countryLocation' ],
      queryFn: () => fetchGeoapify(),
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
});