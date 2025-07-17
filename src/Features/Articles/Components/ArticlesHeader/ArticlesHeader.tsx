import SectionHeader from "@/src/Components/sectionHeader";
import { Photo } from "pexels/dist/types";


interface IArticleHeaderProps{
    pexelImage: Photo,
    pexelImageNext: Photo,
}


export default function ArticlesHeader({pexelImage, pexelImageNext}:IArticleHeaderProps) {


  return ( <SectionHeader   pexelImage={pexelImage} pexelImageNext={pexelImageNext} id={''} 
                            sectionBtnText="Home" sectionTitle=" Welcome To University Articles" />)


}
