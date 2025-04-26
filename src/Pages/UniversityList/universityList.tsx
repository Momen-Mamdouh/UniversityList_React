
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

import { useUniversityListQuery } from "../../Services/universityListApi";
import { usePexelsPhotos } from '../../Services/pexelsImageApi';
import LoaderScreen from "../../Components/Loader/loaderScreen";
import Header from "../../Utilities/Components/header"

import { Photo } from '../../Interfaces/IPexelResponse';
import { IUniResponse } from "../../Interfaces/IUniResponse";

import EmptyComponent from "../../Utilities/Components/emptyComp";

import  './universityList.css'
import EndOfList from "../../Utilities/Components/endOfList";
import LoadMoreBtn from "../../Utilities/Components/loadMoreBtn";

import SearchInput from "../../Utilities/Components/searchInput";

function UniversityList(){

    

    const [country, setCountry] = useState("");
    const [countryInput, setCountryInput] = useState("");
    const [uniIndex, setUniIndex] = useState(0);
    const [universityListSlice, setUniversityListSlice] = useState<IUniResponse[]>([]);
    const [showEndMessage, setShowEndMessage] = useState(false);


    const {data:universityApiData, isLoading:universityLoading, 
        isSuccess:universityDataSuccess}  = useUniversityListQuery(country);

    const { data: pexelApiData, isLoading:pexelLoading} = usePexelsPhotos('university');
    const pexelListPhotos = (pexelApiData as any)?.photos || [];


    useEffect(() => {
        if (universityDataSuccess && universityApiData?.data.length > 0 && uniIndex === 0) {
            const initialSlice = universityApiData.data.slice(0, 10);
            setUniversityListSlice(initialSlice);
            setUniIndex(10);
        }
    }, [universityApiData, universityDataSuccess]);

    useEffect(() => {
        if (country !== "") {
          setUniversityListSlice([]);
          setUniIndex(0);
        }
      }, [country]);

    useEffect(() => {
        if (universityApiData?.data && uniIndex >= universityApiData.data.length) {
            setShowEndMessage(true);
            const timeout = setTimeout(() => {
                setShowEndMessage(false);
            }, 3000);
    
            return () => clearTimeout(timeout);
        }
    }, [uniIndex, universityApiData]);
    
    const handleLoadMore = () => {
        if (!universityApiData?.data) return;
    
        const total = universityApiData.data.length;


        if (uniIndex >= total) return;
    
        const newSlice = universityApiData.data.slice(uniIndex, uniIndex + 10);
        setUniversityListSlice(prev => [...prev, ...newSlice]);
        setUniIndex(prev => prev + 10);
    };
    

    let pexelStartIndex:number;
    let pexelEndIndex:number;
    let pexelPhotosSlice:Photo[];

    function formatPexelIndex(idx:number):Photo[]{
        pexelStartIndex = idx*2;
        pexelEndIndex = pexelStartIndex + 2;
        
        
        if (pexelEndIndex >= pexelListPhotos.length) {
            pexelStartIndex = 0;
            pexelEndIndex = pexelStartIndex + 2;
        }
        pexelPhotosSlice = pexelListPhotos.slice(pexelStartIndex, pexelEndIndex);
        return pexelPhotosSlice
    }

    return(
        <>

           <LoaderScreen isLoading={universityLoading}/>

        {
             <Header bgClasses={`bg-[linear-gradient(90deg,rgba(2,0,36,0.4)_0%,rgba(9,9,121,0.2)_100%),url('/src/assets/hero-list.jpg')] bg-cover bg-center bg-fixed bg-no-repeat`} >
                    <div className="grid grid-cols-12 h-full ">

                            <div className="col-span-6 items-center flex flex-col py-56 z-5 md:justify-start justify-center">
                                <h1 className=" text-5xl px-10 md:w-1/2  md:text-start text-center"> Welcome To {country} university List</h1>
                                <p className="text-xl p-10 md:w-1/2  text-gray-200">Each university colleage has it's own special Programmers</p>
                          
                            </div>
                    </div>

            </Header >
        }


        {

            <section className={`uniList-uniListSection py-32 @container mx-auto ${ universityListSlice.length == 0  ? 
                'bg-white' : 'secondary-bg'
              }`}>

                <div className="search-area flex items-center md:flex-row flex-col gap-5 pb-16 main-container-styles ">

                    <div className="serachLabel md:w-1/4   text-black text-2xl font-semibold  ">
                            <h3>Enter your Country:</h3>
                    </div>

                    <div className="searchInput md:w-full ">
                        <label className="input md:w-1/2">
                            <SearchInput 
                                    valueInput = {countryInput}
                                    InputChangeFn = {(e:any) => setCountryInput(e.target.value)}
                                    InputBlurFn = {(e:any) => setCountry(e.target.value)}
                            />
                     
                        </label>
                    
                    </div>

                </div>

                <LoaderScreen isLoading={pexelLoading} />

                {
                    countryInput == '' &&   universityListSlice.length == 0 &&
                    <EmptyComponent />                
                }

                {universityListSlice.map((university:IUniResponse,idx:number)=>
                        
                    <div key={idx}  className="grid grid-cols-4 md:grid-rows-3 md:gap-10 main-container-styles">

                        <div className="col-span-4 md:col-span-2">
                            <h2 className=" text-black text-3xl font-bold">{university.name} ({university.country})</h2>
                            <p className="py-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eius est numquam, fuga laudantium aliquid.</p>
                        </div>
    
                        <div className="uniListImg col-span-4 md:col-span-2 md:row-span-3 md:col-start-3 overflow-hidden">
                            <Swiper
                                    spaceBetween={100}
                                    slidesPerView={1}
                                    loop={true}
                                    onSlideChange={() => console.log('slide change')}
                                    // onSwiper={(swiper) => console.log(swiper)}
    
                                    >
                                        {formatPexelIndex(idx).map((uniPhoto:Photo)=> 
                                            <SwiperSlide  key={uniPhoto.id}>
                                                <a href={university.web_pages[0]} target="_blank">
                                                    <img className="w-full h-[450px] rounded-2xl" src={uniPhoto.src.landscape} alt={uniPhoto.alt} />
                                                </a>
                                            </SwiperSlide>
                                        )}
                                        
                            </Swiper>
                        </div>
     
                        <div className="universityList-slider-text col-span-4 py-10 md:py-0 md:col-span-2 row-span-1 col-start-1 text-black grid grid-cols-6 ">

                            <div className="col-span-3 p-10 flex items-start flex-col rounded-lg border-2 border-amber-100 shadow-inner">
                                <Link to={`/blogs/${university.name}`} className="hover:text-gray-700 duration-400 text-3xl font-semibold">Blogs</Link>
                                <p  className="pt-2.5">About University</p>
                            </div>
    
                            <div className="col-span-3 p-10 rounded-lg  bg-gradient-to-r from-orange-400 to-red-500 ">
                                <Link to={`/articles/${university.name}`} className="hover:text-gray-200 duration-400 text-3xl font-semibold text-white">Articles</Link>
                                <p className="pt-2.5 secondCard">About it's colleges</p>
                            </div>
                        </div>
    
                    </div>
                )};

               
                {uniIndex < universityApiData?.data.length! && (
                  <LoadMoreBtn btnClass={''} btnText={'More Universities'} fn={handleLoadMore} />
                )}

                {showEndMessage && (
                   <EndOfList children={'End of the List 😉'} />
                )}



               
            </section>

        
        }
        
        
        </>
    )
}

export default UniversityList