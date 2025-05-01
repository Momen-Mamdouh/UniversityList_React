import { useQuery } from "@tanstack/react-query";

export const useUniversityListQuery = (country: string) => {
  return useQuery({
    queryKey: ['universities', country],
    queryFn: async () => {
      try {
        const res = await fetch(`/api/universities?country=${encodeURIComponent(country)}`);
        
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(
            errorData.error || errorData.message || 'Failed to fetch universities'
          );
        }
        
        return await res.json();
      } catch (error) {
        console.error('Fetch error:', error);
        throw new Error(
          error instanceof Error ? error.message : 'Unknown fetch error'
        );
      }
    },
    retry: 2,
    enabled: !!country // Only run query when country exists
  });
};