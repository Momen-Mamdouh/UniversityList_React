import { IUniName } from "../Interfaces/IUniName";

const newsApiKey:string = `4410603d2e314b638e21535fff248f8d` ;
export const pexelsApiKey:string = `ef3dC6zbuEYuWiBMalijRiP1Wcpv4zZ1YJoPNQAnvsbWrakFKpnL9UOs`;
export const articlesApiKey:string = `4410603d2e314b638e21535fff248f8d`;
export const geoapifyApiKey:string = `f1d0294ebe0248f6aa5f6cc7414afbc4`;



export const universitesListBaseUrl:string = `https://universities.hipolabs.com/search?`;
export const newsApiEveryArticlesBaseUrl:string = `https://newsapi.org/v2/everything?q=University&apiKey=${newsApiKey}` ;
export const pexelsApiBaseUrl:string = `https://api.pexels.com/v1/search`;
export const articlesApiBaseUrl:string = `https://newsapi.org/v2/everything`
export const geoapifyApiBaseUrl:string = `https://api.geoapify.com/v1/ipinfo?`
export const gutendexBooksApiBaseUrl:string = `https://gutendex.com/books/`

export const topTenUniversities:IUniName[]= [

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
