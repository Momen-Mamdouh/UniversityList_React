import { PhotosWithTotalResults } from 'pexels';
import {  pexelsApiKey } from "../Utilities/environment";
import { useQuery } from "@tanstack/react-query";


export const usePexelsPhotos = (query: string) => {
  return useQuery({
    queryKey: ['pexelsPhotos', query],
    queryFn: async (): Promise<PhotosWithTotalResults> => {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=80&size=medium`, {
        headers: {
          Authorization: pexelsApiKey,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch photos');
      }

      const data = await response.json();
      return data;
    }
  });
};

