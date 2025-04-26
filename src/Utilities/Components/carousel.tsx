import { useEffect, useState } from "react";
import { IBooksResult } from "../../Interfaces/IGutendexBooksResponse";
import HorizontialCard from "./horizontalCard";
import SearchInput from "./searchInput";
import CarouselNumber from "./carouselNumberAnchor";
import CarouselChangeBtn from "./carouselChangeBtn";



function Carousel(props:any){

    const [carouselNumberState, setCarouselNumberState] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const matchedBook = props.booksData.find((book: IBooksResult) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const matchedBookIdnex = props.booksData.findIndex((book: IBooksResult) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
          );

        if (matchedBook) {
          const el = document.getElementById(`item${matchedBookIdnex+1}`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, [searchTerm]);
      

    function changeCarouselIndex(changeDir:string){
        if(changeDir == 'right'){

            if(carouselNumberState >= props.booksData.length - 4){
                setCarouselNumberState(1)
            }
            else{
                setCarouselNumberState(carouselNumberState+1)
            }
            
        }

        else if (changeDir == 'left'){
            if(carouselNumberState-1 <= 0){
                setCarouselNumberState(1)
            }
            else{
                setCarouselNumberState(carouselNumberState-1)
            }
            
        }
    }

    
    
      
    return(
      <>
               <div className="inputSearch py-2.5 text-center text-black">
                    <label className="input md:w-1/2 main-linear-gradient-to-left text-black">
                        <SearchInput 
                                InputBlurFn={(e:any) => setSearchTerm(e.target.value)}
                                />
                    </label>
               </div>
                <div className="carousel w-full ">
                    {   
                        props.booksData.map((book:IBooksResult, index:number)=>
                            <div key={`${book.id}`} id={`item${index+1}`} className="carousel-item w-full">
                                <HorizontialCard book={book} />
                            </div>
                        )
                    
                    }
                    
            
                </div>

                <div className="flex w-full justify-center items-center gap-2 py-2">
                    <CarouselChangeBtn c={carouselNumberState} chevronDir={`left`} changeFn={()=> changeCarouselIndex('left')} />
 
                        {   
                            props.booksData.slice(0,5).map((book:IBooksResult, index:number) => 
                                <CarouselNumber  key={index} carouselNumber={index+carouselNumberState} />
                            )
                        }

                    <CarouselChangeBtn chevronDir={`right`} changeFn={()=> changeCarouselIndex('right')} />


                </div>

      
      </>
    )
}

export default Carousel