import { useEffect, useState } from 'react';
import { IBooksResult } from '@/src/Features/Books/Interfaces/IGutendexBooksResponse';


export default function useCarousel(booksData:IBooksResult[]) {

    const [carouselNumberState, setCarouselNumberState] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        
        const matchedBookIndex = booksData.findIndex((book: IBooksResult) =>
             book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (matchedBookIndex !== -1) {
            const el = document.getElementById(`item${matchedBookIndex + 1}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

    }, [searchTerm]);
      

    function changeCarouselIndex(changeDir:string){

        if(changeDir == 'right'){

            if(carouselNumberState >= booksData.length - 4){
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


  return {changeCarouselIndex, setSearchTerm, carouselNumberState}
}
