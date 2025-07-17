import MainButton from "@/src/Components/mainButton";
import { fallbackImg } from "@/src/Utilities/environment";

interface IHomeHeaderProps{
    country:string,
    subHeroImageSrc:string,
}

export default function HomeHeader({country, subHeroImageSrc}:IHomeHeaderProps){
    console.log(subHeroImageSrc)
    return(

        <div className="grid grid-cols-12 h-full ">

            <div className="col-span-6 items-center flex flex-col py-32 z-5 md:justify-start justify-center">
                <h1 className=" text-5xl px-10 md:w-1/2  md:text-start text-center"> Welcome To {country} university List</h1>
                <p className="text-xl p-10 md:w-1/2  text-gray-200">Each university colleage has it's own special Programmers</p>
                <div className="headerBtn  px-10">                         
                    <MainButton  buttonText={'Get Started'} link={'/home'}/> 
                </div>
            </div>

            <div className="col-span-6 items-center flex flex-col  z-5 md:justify-start justify-center">
                <img className="rounded bg-transparent text-start" src={subHeroImageSrc ?? fallbackImg} alt={'Home Hero Header'} />
            </div>

        </div>
    )

}