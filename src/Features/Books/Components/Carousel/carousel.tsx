
import HorizontialCard from "@/src/Components/horizontalCard";
import SearchInput from "@/src/Components/searchInput";
import { IBooksResult } from "@/src/Features/Books/Interfaces/IGutendexBooksResponse";
import useCarousel from "../../Hooks/useCarousel";


export default function Carousel({booksData}:{booksData:IBooksResult[]}){

    
    const { setSearchTerm } = useCarousel(booksData)
    
    
      
    return(
      <>
               <div className="inputSearch py-2.5 text-center text-black">

                    <label className="input md:w-1/2 main-linear-gradient-to-left text-black">
                        <SearchInput 
                            InputBlurFn={(e:any) => setSearchTerm(e.target.value)}
                            InputEnterFn={(value) => setSearchTerm(value)}
                        />
                    </label>

               </div>

                <div className="carousel w-full ">
                    
                    {   
                        booksData.map((book:IBooksResult, index:number)=>
                            <div key={`${book.id}`} id={`item${index+1}`} className="carousel-item w-full">
                                <HorizontialCard book={book} />
                            </div>
                        )
                    
                    }
                    
            
                </div>

                {/* <div className="flex w-full justify-center items-center gap-2 py-2">
                    <CarouselChangeBtn  chevronDir={`left`} changeFn={()=> changeCarouselIndex('left')} />
 
                        {   
                            booksData.slice(0,5).map((book:IBooksResult,index:number) => 
                                <CarouselNumber  key={book.id} carouselNumber={index+carouselNumberState} />
                            )
                        }

                    <CarouselChangeBtn chevronDir={`right`} changeFn={()=> changeCarouselIndex('right')} />


                </div> */}

      
      </>
    )
}
