import { useQuery } from "@tanstack/react-query";
import { fetchGNewsApi } from '@/src/Features/Blog/Services/fetchGNewsApi'
import { IBlogQuery } from "@/src/Interfaces/IBlogQuery";



export const useGNewsBlogsQuery = (blogsQuery:IBlogQuery, country:string ) =>
    useQuery({
      queryKey: ['twinglyBlog', blogsQuery ],
      queryFn: () => fetchGNewsApi(blogsQuery, country),
      enabled: !!blogsQuery.text && !!country,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 60 * 24,

});
