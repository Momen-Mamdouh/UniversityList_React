import SectionHeader from "@/src/Components/sectionHeader";
import { Photo } from "pexels/dist/types";

interface IBookHeaderProps{
    pexelImage: Photo,
    pexelImageNext: Photo,
}



export default function BookHeader({pexelImage, pexelImageNext}:IBookHeaderProps) {


    return (<SectionHeader   pexelImage={pexelImage} pexelImageNext={pexelImageNext} 
                             sectionBtnText="Home" sectionTitle=" Welcome To university Library" />)
    
}
