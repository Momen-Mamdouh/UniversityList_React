
import SectionHeader from "@/src/Components/sectionHeader";
import { Photo } from "pexels/dist/types";

interface IBlogHeaderProps{
    pexelImage: Photo,
    pexelImageNext: Photo,
    id: string | undefined,
}


export default function BlogHeader({pexelImage, pexelImageNext, id}:IBlogHeaderProps){
   

  return ( <SectionHeader  pexelImage={pexelImage} pexelImageNext={pexelImageNext} id={id} sectionBtnText="Home" sectionTitle="Blogs" />)


}
