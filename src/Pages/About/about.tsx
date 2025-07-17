import './about.css'  

import MainHeader from "@/src/Components/mainHeader"

import AboutHeader from "@/src/Features/About/Components/AboutHeader/AboutHeader"
import AboutProfsSection from "@/src/Features/About/Components/AboutProfsSection/AboutProfsSection";
import AboutBlogSection from "@/src/Features/About/Components/AboutBlogSection/AboutBlogSection";

import heroImage from '@/src/assets/hero.jpg';

export default function About(){

    return(
        <>
            {
                <MainHeader bgClasses={'bg-[linear-gradient(90deg,rgba(2,0,36,0.4)_0%,rgba(9,9,121,0.2)_100%) bg-cover bg-center bg-no-repeat'} 
                            bgImg={heroImage}>
                       <AboutHeader />
                </MainHeader >
            } 

            {
                <AboutProfsSection />
            }

            {
               <AboutBlogSection />
            }
        </>
    )
}
