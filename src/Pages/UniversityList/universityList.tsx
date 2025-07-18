
import  './universityList.css'
import MainHeader from "@/src/Components/mainHeader";
import heroImage from '@/src/assets/hero.jpg';
import UniListHeader from "@/src/Features/Universities/Components/uniListHeader/UniListHeader";
import UniversitySearchSection from "@/src/Features/Universities/Components/universitySearchSection/UniversitySearchSection";


import { useState } from "react";
import { useGeoapify } from '@/src/Contexts/mainContext';
import LoaderScreen from '@/src/Components/loaderScreen';


export default function UniversityList(){
         const { country:_geoCountry, geoapifyIsLoading } = useGeoapify();
        const [country, setCountry] = useState('Egypt');

    return(
        <>
        {geoapifyIsLoading && <LoaderScreen />}

        {
            <MainHeader bgClasses={`bg-[linear-gradient(90deg,rgba(2,0,36,0.4)_0%,rgba(9,9,121,0.2)_100%) 
                                    bg-cover bg-center bg-no-repeat`}
                        bgImg={heroImage} >
                   <UniListHeader country={country} />
            </MainHeader >
        }


        {
            <UniversitySearchSection    country={country} setCountry={setCountry} />
        }
        
        
        </>
    )
}
