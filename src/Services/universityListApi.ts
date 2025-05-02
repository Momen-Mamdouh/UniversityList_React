
// import { useQuery } from "@tanstack/react-query";


// export const useUniversityListQuery = function(country: string) {
//     return useQuery({
//       queryKey: ['universities', country],
//       queryFn: async () => {
//         const res = await fetch(`http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`);
//         if (!res.ok) throw new Error('Failed to fetch universities');
//         return res.json();
//       }
//     });
// };
     


import axios, { AxiosResponse } from "axios";
import { IUniResponse } from "../Interfaces/IUniResponse";
import { universitesListBaseUrl } from "../Utilities/environment";
import { useQuery } from "@tanstack/react-query";


const fetchUniversities = async ({ country }: { country?: string })
        : Promise<AxiosResponse<IUniResponse[]>> => {
    const axiosData = await axios.get(universitesListBaseUrl, {
        params: country ? { country } : {},
    });
  
    return axiosData;
  };


export const useUniversityListQuery = (country? : string ) =>
    useQuery({
        queryKey: ['uniData', country],
        queryFn: () => fetchUniversities({ country }),
        enabled: !!country,
        refetchOnWindowFocus: true,
    });
  




