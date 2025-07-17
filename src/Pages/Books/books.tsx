
import LoaderScreen from "@/src/Components/loaderScreen"
import Carousel from "@/src/Features/Books/Components/Carousel/carousel"
import MainHeader from "@/src/Components/mainHeader";
import usePexelsPhotos from "@/src/Features/Articles/Hooks/usePexelsPhotos";
import BookHeader from "@/src/Features/Books/Components/BookHeader/BookHeader";
import { fallbackImg } from "@/src/Utilities/environment";
import ResponseLoader from "@/src/Components/ResponseLaoder/ResponseLoader";
import { useBooksQuery } from "@/src/Features/Books/Hooks/useBookQuery";



export default function Books(){
    
    const {pexelsPhotos, pexelLoading, pexelIndex } = usePexelsPhotos({query:'Libraries'});
    const {data:booksData, isSuccess:booksAreFound} = useBooksQuery();


    return( 
    <>
             { pexelLoading && <LoaderScreen />}

            {
                <MainHeader bgClasses={`bg-[linear-gradient(90deg,rgba(2,0,36,0.4)_0%,rgba(9,9,121,0.2)_100%) bg-cover bg-center bg-no-repeat`}
                                            bgImg={pexelsPhotos[pexelIndex]?.src.original ?? fallbackImg}>

                    {pexelLoading && <ResponseLoader />}

                    {!pexelLoading && <BookHeader pexelImage={pexelsPhotos[pexelIndex]} pexelImageNext={pexelsPhotos[pexelIndex+1]} />}
                    
                </MainHeader >
            } 

            {   <div className="booksSection secondary-bg">
                    {!booksAreFound && <ResponseLoader />}
                    { booksAreFound && <Carousel booksData={booksData?.data.results} /> }
                </div>
                
            }
    </>
   
    )
}
