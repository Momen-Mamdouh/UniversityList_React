import { Photo } from 'pexels/dist/types';
import { useState, useEffect } from 'react';


interface IPexelFormatingIndexProps{
    pexelBlogsPhotos: Photo[] | [],
    PexelDataFound:boolean,
}

export default function usePexelsFormatIndex({pexelBlogsPhotos, PexelDataFound}:IPexelFormatingIndexProps) {

    const [pexelIndex, setPexelIndex] = useState(0);
    
    useEffect(()=>{
                    const interval = setInterval(formatIndexOfPexelImages, 3000); 
                
                    return () => clearInterval(interval); 
        
    }, [pexelBlogsPhotos.length]);
    
    
    function formatIndexOfPexelImages():void{
        if(PexelDataFound && pexelBlogsPhotos.length !=0){
                setPexelIndex((prevIndex) => (prevIndex + 1) % pexelBlogsPhotos.length);
        }
    }

  return {pexelIndex}
}
