import { Photo } from "pexels/dist/types";
import { fallbackImg } from '@/src/Utilities/environment';
import MainButton from '@/src/Components/mainButton';

interface IHeaderProps{
    pexelImage: Photo,
    pexelImageNext: Photo,
    id?: string | undefined,
    sectionTitle:string,
    sectionBtnText:string,
}


export default function SectionHeader({pexelImage, pexelImageNext, id, sectionTitle, sectionBtnText}:IHeaderProps) {

    return (

            <>
                 <div className="grid grid-cols-12 h-full "
                    style={{
                                backgroundImage:pexelImage?.src.original ?? fallbackImg
                    }}>
                            <div className="col-span-6 items-center flex flex-col py-48 z-5 md:justify-start justify-center gap-16">
                
                                <h1 className="text-5xl px-10 md:w-2/3 md:text-start mx-auto text-center">
                                    {id} {sectionTitle}
                                </h1>
                
                                <div className="headerBtn  px-10">                         
                                    <MainButton  buttonText={sectionBtnText} link={'/home'}/> 
                                </div>
                                
                            </div>
                
                            <div className="col-span-6 items-center md:justify-center justify-start  flex flex-col  z-5 ">
                                      <img className=" rounded-md h-1/2 object-cover w-2/3 bg-transparent text-center" 
                                        src={pexelImageNext?.src.original ?? fallbackImg}
                                        alt={pexelImageNext?.alt ?? 'Image from Pexels Website abput universites'} 
                                      />
                            </div>
                 </div>
            </>
        
    )


}
