import { IUniResponse } from "../Interfaces/IUniResponse";
import { topTenUniversities } from "./environment";
  
  export   function  formatTopTenUniversitites(data:IUniResponse[]):IUniResponse[]{
        const topTen:IUniResponse[] = [];

        topTenUniversities.forEach((university) => {
           const rankedUni =  data.find((uni)=> uni.name == university.universityName) ;
           if(rankedUni) {
            topTen.push({
                alpha_two_code: rankedUni.alpha_two_code,
                    web_pages: rankedUni.web_pages,
                    domains:  rankedUni.domains,
                    "state-province": rankedUni["state-province"],
                    country: rankedUni.country,
                    name: rankedUni.name
            })
           }
        })

    return topTen
}