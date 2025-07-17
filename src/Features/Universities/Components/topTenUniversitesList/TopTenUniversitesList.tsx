import LoaderScreen from "@/src/Components/loaderScreen";

import BestRibbon from "@/src/Components/bextRibbon";
import UniItemList from "@/src/Features/Universities/Components/universityTopTenItem/UniversityTopTenItem";

import { formatTopTenUniversitites } from "@/src/Features/Universities/Utilities/formatTopTenUniversities";
import { formatIndexFromZeroToTen } from "@/src/Features/Universities/Utilities/formatIndex";

import { IUniResponse } from "@/src/Features/Universities/Interfaces/IUniResponse";



interface ITopTenProps{
    isSuccess:boolean,
    isLoading:boolean,
    country:string,
    safeData:IUniResponse[],
}


export default function TopTenUniversitesList({isSuccess, country, safeData}:ITopTenProps){

    

    return (
        <section className="relative uni-list-section  main-bg  py-16 overflow-hidden @container">
            <div className="uni-list-section-container main-container-styles grid grid-cols-2">
                <h3 className="p-4  text-2xl opacity-60 tracking-wide w-full text-center pb-16  col-span-12">Top 10 universities in Egypt 2025:</h3>

                {
                isSuccess ?  
                    <ul className="list pb-5 rounded-box shadow-md px-10 col-span-12 flex items-center justify-center flex-col gap-10 ">
                                {  formatTopTenUniversitites(safeData).map((uni,index)=>  
                                    <UniItemList key={index} uniNumber={formatIndexFromZeroToTen(index)}  
                                        uniName={uni.name} countryCode={uni.alpha_two_code} 
                                        universityDomain={uni.web_pages} />)  
                                }
                    </ul>
                        :

                    <LoaderScreen  />
                }


                <BestRibbon ribbonClasses={`bottom-0`} country={country} />
            </div>
        </section>
    )
}