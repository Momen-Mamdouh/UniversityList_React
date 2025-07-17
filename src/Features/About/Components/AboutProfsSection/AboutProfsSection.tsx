import AboutCard from '@/src/Components/Cards/aboutCard'
import { profsImgs } from '@/src/Features/About/Utilities/AboutProfImgs'


export default function AboutProfsSection() {
    
  return (
    <>
    
        <section className="aboutSection  @container ">
            <div className="aboutProf-cards grid grid-cols-12 gap-10 main-container-styles  py-16">
                {profsImgs.map((img, index) => (
                    <AboutCard  key={index} aboutCardImage={img}/>
                ))}

            </div>
        </section>
    </>
  )
}
