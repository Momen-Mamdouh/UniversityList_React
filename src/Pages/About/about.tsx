import AboutCard from "../../Utilities/Components/aboutCard"
import BlogsCard from "../../Utilities/Components/blogsCard"
import Header from "../../Utilities/Components/header"
import headrProfImg from '../../assets/Professors/Professors1.jpg'
import profImg1 from '../../assets/Professors/Professors2.jpg'
import profImg2 from '../../assets/Professors/Professors3.jpg'
import profImg3 from '../../assets/Professors/Professors4.jpg'
import profImg4 from '../../assets/Professors/Professors5.jpg'
import profImg5 from '../../assets/Professors/Professors6.jpg'
import profImg6 from '../../assets/Professors/Professors7.jpg'
import './about.css'



function About(){

    const profsImgs:string[] = [
        profImg1,
        profImg2,
        profImg3,
        profImg4,
        profImg5,
        profImg6,
    ]


    return(
        <>
            {
                <Header bgClasses={`bg-[linear-gradient(90deg,rgba(2,0,36,0.4)_0%,rgba(9,9,121,0.2)_100%),url('/src/assets/books/books-header.jpg')] bg-cover bg-center  bg-no-repeat`} >
                        <div className="grid md:grid-cols-12  grid-cols-6 h-full ">
                                <div className="col-span-6 items-center flex flex-col md:py-56 z-5  justify-center">
                                    <h1 className=" text-5xl px-10 md:w-2/3  md:text-start text-center"> About Universites</h1>
                                </div>
                                <div className="profImage col-span-6 items-center md:justify-center justify-start  flex flex-col  z-5 ">
                                        <img className=" rounded-md w-2/3 bg-transparent text-center" src={headrProfImg} alt="" />
                                    </div>
                                
                        </div>

                </Header >
            } 

            {
                <section className="aboutSection  @container ">
                    <div className="aboutProf-cards grid grid-cols-12 gap-10 main-container-styles  py-16">
                        {profsImgs.map((img, index) => (
                            <AboutCard  key={index} aboutCardImage={img}/>

                        ))}

                    </div>
                </section>
            }

            {
                <section className="howWeTeach  @container">
                        <div className="how-we-teach-heading flex justify-center pt-10 ">
                            <h2 className="text-2xl font-semibold">Why to choose our universites</h2>
                        </div>

                        <div className="how-we-teach-blogs grid grid-cols-12 gap-10 main-container-styles py-16">
                            {profsImgs.map((img, index) => (
                                <BlogsCard key={index}  blogImg={img} blogLink={'https://www.youtube.com/watch?v=B-ph18b3X7Y'}/>
                            ))}
                            
                        </div>
                    

                </section>
            }
        </>
    )
}

export default About