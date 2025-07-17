
import { Photo } from 'pexels/dist/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { formatPexelIndex } from '@/src/Features/Universities/Utilities/formatPexelIndex';
import { IUniResponse } from "@/src/Features/Universities/Interfaces/IUniResponse";
import usePexelsPhotos from '@/src/Features/Articles/Hooks/usePexelsPhotos';
import { fallbackImg } from "@/src/Utilities/environment";
import ResponseLoader from '@/src/Components/ResponseLaoder/ResponseLoader';

interface IUniSliderProps{
  university:IUniResponse,
  idx:number,
}


export default function UniSliderCard({university, idx}:IUniSliderProps) {

    const { pexelsPhotos:pexelListPhotos, pexelLoading} = usePexelsPhotos({query:'university'});

  return (
    <>
       <div key={university.name}  className="grid grid-cols-4 md:grid-rows-3 md:gap-10 main-container-styles">

                    <div className="col-span-4 md:col-span-2">
                        <h2 className=" text-black text-3xl font-bold">{university.name} ({university.country})</h2>
                        <p className="py-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eius est numquam, fuga laudantium aliquid.</p>
                    </div>

                    <div className="uniListImg col-span-4 md:col-span-2 md:row-span-3 md:col-start-3 overflow-hidden">
                        {pexelLoading && <ResponseLoader />}
                        {!pexelLoading && <Swiper
                                    spaceBetween={100}
                                    slidesPerView={1}
                                    loop={true}>
                                        {formatPexelIndex(idx, pexelListPhotos).map((uniPhoto:Photo)=> 
                                            <>
                                                {pexelLoading && <ResponseLoader />}
                                                {!pexelLoading &&<SwiperSlide  key={uniPhoto.id}>
                                                    <a href={university.web_pages[0]} target="_blank">
                                                        <img className="w-full h-[450px] rounded-2xl" src={uniPhoto.src.landscape ?? fallbackImg} alt={uniPhoto.alt ?? 'Swiper Image From Pexel Website'} />
                                                    </a>
                                                </SwiperSlide>}
                                            </>
                                            
                                        )}
                                        
                            </Swiper>
                        }

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
    </>
  )
}
