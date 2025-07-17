import { IUniName } from "@/src/Features/Universities/Interfaces/IUniName";
import { IUniResponse } from "@/src/Features/Universities/Interfaces/IUniResponse";



  export   function  formatTopTenUniversitites(data:IUniResponse[]):IUniResponse[]{
        const topTen:IUniResponse[] = [];
        topTenUniversities.forEach((university) => {
           const rankedUni =  data.find((uni)=> uni.name == university.universityName) ;
           if(rankedUni) {
            topTen.push({
                alpha_two_code: rankedUni.alpha_two_code,
                    web_pages: rankedUni.web_pages,
                    domains:  rankedUni.domains,
                    country: rankedUni.country,
                    name: rankedUni.name
            })
           }
        })

    return topTen
}

const topTenUniversities:IUniName[]= [

        {
            universityRank:1,
            universityName:`Cairo University`,
        },

        {
            universityRank:2,
            universityName:`American University in Cairo`,
        },

        {
            universityRank:3,
            universityName:`Ain Shams University`,
        },

        {
            universityRank:4,
            universityName:`Mansoura University`,
        },

        {
            universityRank:5,
            universityName:`Alexandria University`,
        },

        {
            universityRank:6,
            universityName:`Zagazig University`,
        },

        {
            universityRank:7,
            universityName:`Misr International University`,
        },

        {
            universityRank:8,
            universityName:`Kafr El-Sheikh University`,
        },

        {
            universityRank:9,
            universityName:`Assiut University`,
        },

        {
            universityRank:10,
            universityName:`Benha University`,
        },

];