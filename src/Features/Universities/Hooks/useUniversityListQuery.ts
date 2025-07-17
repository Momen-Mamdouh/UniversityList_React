import { useQuery } from "@tanstack/react-query";
import { fetchUniversities } from '@/src/Features/Universities/Services/fetchUniversitiesData'

export const useUniversityListQuery = (country?: string) =>
  useQuery({
    queryKey: ['uniData', country],
    queryFn: () => fetchUniversities({ country }),
    enabled: !!country,
    refetchOnWindowFocus: false,
}); 
