import { usePexelsQuery } from '@/src/Hooks/usePexelsQuery';
import { useEffect, useState } from 'react';


export default function usePexelsPhotos({query}:{query:string}) {
    const [pexelIndex, setPexelIndex] = useState(0);
    const { data: pexelApiData, isLoading:pexelLoading, isSuccess:PexelDataFound} = usePexelsQuery(query);
    const pexelsPhotos = (pexelApiData as any)?.photos || [];
    

    function formatIndexOfPexelImages():void{
        setPexelIndex((prevIndex) => (prevIndex + 1) % pexelsPhotos.length);
    }
    
        useEffect(() => {
            if (!PexelDataFound || pexelsPhotos.length === 0) return;
            const interval = setInterval(formatIndexOfPexelImages, 3000);
            return () => clearInterval(interval);
        }, [PexelDataFound, query]);


  return { PexelDataFound, pexelsPhotos, pexelIndex, pexelLoading }
  
}
