
import { useQuery } from "@tanstack/react-query";


export const useUniversityListQuery = function(country: string) {
    return useQuery({
      queryKey: ['universities', country],
      queryFn: async () => {
        const res = await fetch(`http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`);
        if (!res.ok) throw new Error('Failed to fetch universities');
        return res.json();
      }
    });
};
     
