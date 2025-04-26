import BestRibbon from "../../Utilities/Components/bextRibbon"
import MainButton from "../../Utilities/Components/mainButton";
import Header from "../../Utilities/Components/header";

import LoaderScreen from "../../Components/Loader/loaderScreen";
import UniItemList from "../../Components/universityItemList/universityItemList";
import HomeStudentSection from "../../Components/HomeSections/homeStudentSection";
import HomeUniCirclesSection from "../../Components/HomeSections/homeUniCirclesSection";
import HomeSectionsData from "../../Components/HomeSectionsData/homeSectionsData";

import {formatTopTenUniversitites} from "../../Utilities/formatTopTenUniversities";
import MainCard from "../../Utilities/Components/mainCard";

import CairoUniversity from '../../assets/blog/cairo-University.jpg';
import ForeignUniversity from '../../assets/blog/foreign-University.jpg';
import LibraryBuilding from '../../assets/blog/library-University.jpg';
import subHeroImage from '../../assets/subHero.png';

import { IBlogCard } from "../../Interfaces/iBlogCard";
import { useUniversityListQuery } from "../../Services/universityListApi";
import { useGeoapifyQuery } from "../../Services/geoapifyApi";


 

function Home(){

    const {data:GeoapifyData} = useGeoapifyQuery();
    const country = GeoapifyData?.data.country.names.en ?? 'N/A';

    const {data, isLoading, isSuccess}  = useUniversityListQuery(country);

    const blogCardsData:IBlogCard[] = [
        {
            blogImgSrc:CairoUniversity,
            blogImgAlt:`Cairo University`,
            blogTextTitle:`Tips on Choosing university`,
            blogTextDesc:`Lorem, ipsum dolor sit amet consectetur adipisicing
                             elit. Totam nobis.`,
            blogLink:`https://study-more.com/criteria-selecting-university-study-abroad/`,
        },

        {
            blogImgSrc:ForeignUniversity,
            blogImgAlt:`Foreign University`,
            blogTextTitle:`Tips on Choosing university`,
            blogTextDesc:`Lorem, ipsum dolor sit amet consectetur adipisicing
                             elit. Totam nobis.`,
            blogLink:`https://uwaterloo.ca/future-students/missing-manual/applying/nine-factors-consider-when-choosing-university`
        },

        {
            blogImgSrc:LibraryBuilding,
            blogImgAlt:`Library Building With tress on i t`,
            blogTextTitle:`Tips on Choosing university`,
            blogTextDesc:`Lorem, ipsum dolor sit amet consectetur adipisicing
                             elit. Totam nobis.`,
            blogLink:`https://www.topuniversities.com/blog/how-choose-university-6-tips`
        },
    ]
  
    


    
    function formatIndex(idx:number):string{
        if(idx === 0) return '01';
        else if (idx < 9) return `0${idx + 1}`;
        else return `${idx + 1}`;

    }


    return(
        <>
        
            <LoaderScreen isLoading={isLoading}/>

            {   

                    <Header bgClasses={`bg-[linear-gradient(90deg,rgba(2,0,36,0.4)_0%,rgba(9,9,121,0.2)_100%),url('/src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat`} >
                            <div className="grid grid-cols-12 h-full ">

                                    <div className="col-span-6 items-center flex flex-col py-32 z-5 md:justify-start justify-center">
                                        <h1 className=" text-5xl px-10 md:w-1/2  md:text-start text-center"> Welcome To {country} university List</h1>
                                        <p className="text-xl p-10 md:w-1/2  text-gray-200">Each university colleage has it's own special Programmers</p>
                                        <div className="headerBtn  px-10">                         
                                            <MainButton  buttonText={'Get Started'} link={'/home'}/> 
                                        </div>
                                    </div>

                                    <div className="col-span-6 items-center flex flex-col  z-5 md:justify-start justify-center">
                                        <img className="rounded bg-transparent text-start" src={subHeroImage} alt="" />
                                    </div>

                            </div>

                            <BestRibbon ribbonClasses={`bottom-10 rotate-3`} country={country} />
                            <BestRibbon ribbonClasses={`bottom-10 -rotate-3`} country={country} />
                    </Header >
                
            }

            {
               <HomeStudentSection />
            }

            {
               <HomeUniCirclesSection />
            }

            {
                <section className="relative uni-list-section  main-bg  py-16 overflow-hidden @container">
                        <div className="uni-list-section-container main-container-styles grid grid-cols-2">
                            <h3 className="p-4  text-2xl opacity-60 tracking-wide w-full text-center pb-16  col-span-12">Top 10 universities in Egypt 2025:</h3>

                            {
                            isSuccess ?  
                            <ul className="list pb-5 rounded-box shadow-md px-10 col-span-12 flex items-center justify-center flex-col gap-10 ">
                                        {  formatTopTenUniversitites(data.data).map((uni,index)=>  <UniItemList key={index} index={formatIndex(index)}  
                                        universityName={uni.name} countryCode={uni.alpha_two_code} 
                                        universityDomain={uni.web_pages} />)  }
                                </ul>:
                                <LoaderScreen isLoading={isLoading} />
                            }


                            <BestRibbon ribbonClasses={`bottom-0`} country={country} />
                        </div>
                </section>
            }

            {
                 <HomeSectionsData sectionClasses={'blogSection col-span-4 md:col-span-3 pt-50 md:py-0 mx-auto'} >

                       <div className="blogSection-heading text-center py-16 px-12">
                            <p className="text-4xl font-bold md:w-1/3 mx-auto   text-black">
                                    Read our blogs to learn more about our universities
                            </p>
            
                            <p  className="w-full mx-auto md:w-1/3 py-4">Lorem, ipsum dolor sit amet consectetur adipisicing
                             elit. Totam nobis iste assumenda, maxime quod obcaecati.
                            </p>
                       </div>

                       <div className="blogSection-cards grid grid-cols-1 md:grid-cols-3 px-12 md:px-36 gap-10 items-center justify-between">
                                {blogCardsData.map((card,index)=> <MainCard key={index} data={card}  />)}
                       </div>
        
                </HomeSectionsData>
            }

        </>
    )
}

export default Home

