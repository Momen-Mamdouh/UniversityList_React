
import { useQuery } from "@tanstack/react-query";
import fetchUniversities from '../../api/universities'




export const useUniversityListQuery = function(country: string) {
    return useQuery({
        queryKey: ['universities', country],
        queryFn: ()=> fetchUniversities(country)
    });
};
      
