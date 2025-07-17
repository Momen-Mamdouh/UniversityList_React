import { ReactNode } from 'react';
import useFade from '../Hooks/useFade';

interface IMainHeaderProps{
    bgClasses?:string,
    children:ReactNode,
    bgImg?:string,
}



export default function MainHeader({bgClasses, children, bgImg}:IMainHeaderProps){

    const {currentBg, fade} = useFade(bgImg ?? '');


    return(

        <header className={`${bgClasses ?? ''} h-screen  flex items-center justify-center text-white text-4xl 
                            transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(2,0,36,0.4) 0%, rgba(9,9,121,0.2) 100%), url(${currentBg})`,
                }}>
                    
            <div className="relative overflow-hidden h-full w-full">
                    {children}
            </div>
            
        </header> 
    )
}

