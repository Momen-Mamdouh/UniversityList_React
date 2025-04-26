import { useParams } from "react-router-dom";
import Header from "../../Utilities/Components/header";
import { useEffect, useState } from "react";
import { usePexelsPhotos } from "../../Services/pexelsImageApi";
import { Photo } from "../../Interfaces/IPexelResponse";
import BlogsCard from "../../Utilities/Components/blogsCard";
import LoaderScreen from "../../Components/Loader/loaderScreen";


function Blogs(){

    const { id } = useParams<{ id: string }>();
    const [pexelIndex, setPexelIndex] = useState(0);


    const { data: pexelApiData, isLoading:pexelLoading, isSuccess:PexelDataFound} = usePexelsPhotos('university Blogs');
    const pexelBlogsPhotos = (pexelApiData as any)?.photos || [];

 
    

    
    useEffect(()=>{
                const interval = setInterval(formatIndexOfPexelImages, 3000); 
            
                return () => clearInterval(interval); 
    
    }, [pexelBlogsPhotos.length])

    function formatIndexOfPexelImages():void{
        if(PexelDataFound && pexelBlogsPhotos.length !=0){
              setPexelIndex((prevIndex) => (prevIndex + 1) % pexelBlogsPhotos.length);
        }
      }

    return(
        <>

            <LoaderScreen isLoading = {pexelLoading} />
        
            {
                <Header>
                     <div className="grid md:grid-cols-12  grid-cols-6 h-full "
                        style={{
                            backgroundImage: `url(${pexelBlogsPhotos[pexelIndex]?.src.original})`,
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center center',
                            backgroundSize:'cover',
                          }}
                     >
                                <div className="col-span-6 items-center flex flex-col md:py-56 z-5  justify-center">
                                    <h1 className=" text-5xl px-10 md:w-2/3  md:text-start text-center"> {id} Blogs</h1>
                                </div>
                                <div className="col-span-6 items-center md:justify-center justify-start  flex flex-col  z-5 ">
                                        <img className=" rounded-md h-1/2 object-cover w-2/3 bg-transparent text-center" src={pexelBlogsPhotos[pexelIndex+1]?.src.original} alt="" />
                                    </div>
                                
                        </div>

                </Header>
            }

            {
                <section className="blogsSection @container">

                    <div className="universityBlogs-heading flex justify-center pt-10 ">
                            <h2 className="text-2xl font-semibold">{id} Blogs</h2>
                    </div>

                    <div className="how-we-teach-blogs grid grid-cols-12 gap-10 main-container-styles py-16 main-container-styles">
                        {pexelBlogsPhotos.slice(0,9).map((img:Photo) => (
                            <BlogsCard key={img.id}  blogImg={img.src.landscape} blogLink={'https://www.youtube.com/watch?v=B-ph18b3X7Y'}/>
                        ))}
                        
                    </div>

                </section>
            }
        
        
        </>
    )

}

export default Blogs