
import {  useState, useEffect } from 'react';

export default function useFade(bgImg:string){

    const [fade, setFade] = useState(true);
    const [currentBg, setCurrentBg] = useState(bgImg);
    
    useEffect(() => {
            setFade(false);
            const timeout = setTimeout(() => {
            setCurrentBg(bgImg);
            setFade(true);
            }, 1000); 

            return () => clearTimeout(timeout);
    }, [bgImg]);


    return {fade, currentBg}
}