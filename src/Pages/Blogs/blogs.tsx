import { useParams } from "react-router-dom";
import MainHeader from "@/src/Components/mainHeader";
import LoaderScreen from "@/src/Components/loaderScreen";

import BlogsCard from "@/src/Components/Cards/blogsCard";


import {  Photo } from "pexels/dist/types";
import { IBlogQuery } from "@/src/Interfaces/IBlogQuery";
import { useGNewsBlogsQuery } from "@/src/Features/Blog/Hooks/useGNewsBlogsQuery";

import BlogHeader from "@/src/Features/Blog/Components/BlogHeader/blogHeader";
import ResponseLoader from "@/src/Components/ResponseLaoder/ResponseLoader";
import { useGeoapify } from "@/src/Contexts/mainContext";
import usePexelsPhotos from "@/src/Features/Articles/Hooks/usePexelsPhotos";
import { fallbackImg } from "@/src/Utilities/environment";



export default function Blogs(){

    const { id } = useParams<{ id: string }>();
    const { country, geoapifyIsLoading } = useGeoapify();
    const countryToNews = country.slice(0,2).toLowerCase();
    const {pexelsPhotos: pexelBlogsPhotos, pexelLoading, pexelIndex } = usePexelsPhotos({query:'University Blogs'});


    const blogsQuery:IBlogQuery = {language:'en', text:'University'};
    const {data:gNewsBlogs, isLoading:gNewsLoading}  = useGNewsBlogsQuery(blogsQuery, countryToNews);
   

    return(
        <>

            {gNewsLoading && pexelLoading && <LoaderScreen  />}
        
            {
                <MainHeader bgClasses={`bg-[linear-gradient(90deg,rgba(2,0,36,0.4)_0%,rgba(9,9,121,0.2)_100%) bg-cover bg-center bg-no-repeat`}
                            bgImg={pexelBlogsPhotos[pexelIndex]?.src.original ?? fallbackImg}>

                    {!pexelLoading && <BlogHeader pexelImage={pexelBlogsPhotos[pexelIndex]} id={id} pexelImageNext={pexelBlogsPhotos[pexelIndex+1]} />}

                </MainHeader>
            }

            {
                <section className="blogsSection @container">

                    <div className="universityBlogs-heading flex justify-center pt-10 ">
                            <h2 className="text-2xl font-semibold">{id} Blogs</h2>
                    </div>

                    {(geoapifyIsLoading || gNewsLoading) && <ResponseLoader />}

                   {!geoapifyIsLoading && !gNewsLoading &&   gNewsBlogs !== undefined &&

                        <div className="how-we-teach-blogs grid grid-cols-12 gap-10 main-container-styles py-16 main-container-styles">
                                
                            {pexelBlogsPhotos.slice(0,9).map((img:Photo, idx:number) => (
                                <BlogsCard key={img.id}  blogData={gNewsBlogs[idx]} />
                            ))}
                                
                        </div>
                     }

                </section>
            }
        
        
        </>
    )

}
