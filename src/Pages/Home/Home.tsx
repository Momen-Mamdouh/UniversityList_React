import MainHeader from "@/src/Components/mainHeader";
import BestRibbon from "@/src/Components/bextRibbon"
import LoaderScreen from "@/src/Components/loaderScreen";
import ResponseLoader from "@/src/Components/ResponseLaoder/ResponseLoader";

import HomeStudentSection from "@/src/Features/Home/Components/homeStudentSection";
import HomeUniCirclesSection from "@/src/Features/Home/Components/homeUniCirclesSection";
import HomeBlogs from "@/src/Features/Home/Components/homeBlogs";
import HomeHeader from "@/src/Features/Home/Components/homeHeader";

import { useUniversityListQuery } from "@/src/Features/Universities/Hooks/useUniversityListQuery";
import TopTenUniversitesList from "@/src/Features/Universities/Components/topTenUniversitesList/TopTenUniversitesList";

import subHeroImage from '@/src/assets/subHero.png';
import heroImage from '@/src/assets/hero.jpg';
import { useGeoapify } from "@/src/Contexts/mainContext";



 

export default function Home(){

    const { country:_, geoapifyIsLoading } = useGeoapify();

    const {data, isLoading:universitesIsLoading, isSuccess}  = useUniversityListQuery('Egypt');
    const safeData = data?.securedData ?? [];


    return(
        <>
        
            {geoapifyIsLoading && universitesIsLoading &&  
                <div className="flex items-center justify-center py-16">
                    <LoaderScreen />
                </div>
            }

            {  
                    <MainHeader  bgClasses={`bg-[linear-gradient(90deg,rgba(2,0,36,0.4)_0%,rgba(9,9,121,0.2)_100%) bg-cover bg-center bg-no-repeat`}
                                    bgImg={heroImage} >
                            <HomeHeader country={'Egypt'} subHeroImageSrc={subHeroImage}   />
                            <BestRibbon ribbonClasses={`bottom-10 rotate-3`} country={'Egypt'} />
                            <BestRibbon ribbonClasses={`bottom-10 -rotate-3`} country={'Egypt'} />
                            
                    </MainHeader >
            }

            {
               <HomeStudentSection />
            }

            {
               <HomeUniCirclesSection />
            }

            {
                isSuccess && <TopTenUniversitesList isSuccess={isSuccess} isLoading={universitesIsLoading} country={'Egypt'} safeData={safeData} />
            }

            {   !isSuccess &&    <ResponseLoader />}

            {
               <HomeBlogs country={'Egypt'} />
            }

        </>
    )
}

