import { createClient, ErrorResponse, PhotosWithTotalResults } from 'pexels';
import {  pexelsApiKey } from "../Utilities/environment";
import { useQuery } from "@tanstack/react-query";


const client = createClient(pexelsApiKey);

export const usePexelsPhotos =  function(query:string) {
    return useQuery({
      queryKey: ['pexelsPhotos', query],
      queryFn: async () => {
        const result:PhotosWithTotalResults | ErrorResponse = await client.photos.search(
          { query, per_page:80, size: 'medium'}
        );
        return result;
      }
    });
};
  




