import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IIconWithText } from "../../Interfaces/IIconWithText";
import Circle from "../../Utilities/Components/circle";
import MainButton from "../../Utilities/Components/mainButton";
import HomeSectionsData from "../HomeSectionsData/homeSectionsData";
import { faAtom, faBrain, faBuildingColumns, faFlaskVial, faGlobe, faGraduationCap, faInfinity, faNetworkWired, faPersonChalkboard, faSchoolFlag, faTablets, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faStudiovinari } from "@fortawesome/free-brands-svg-icons";


function HomeUniCirclesSection(){

    

    const circleOneIcons:IIconWithText[] = [
        {
            icon: faAtom, 
            iconClasses:`text-blue-500  top-0 start-1/2`,
        },

        {
            icon: faFlaskVial, 
            iconClasses:`text-lime-500 top-1/4 start-67`,
        },

        {
            icon: faTablets, 
            iconClasses:`text-violet-400 top-3/4 start-67`,
        },

        {
            icon: faBrain, 
            iconClasses:`text-pink-500 top-full start-1/2`,
        },

        {
            icon: faBuildingColumns, 
            iconClasses:'text-slate-400 top-3/4 start-4 ',
        },

        {
            icon: faGraduationCap, 
            iconClasses:`text-black top-1/4 start-4`,
        },
    ];

    const circleTwoIcons:IIconWithText[] = [
        {
            icon: faInfinity, 
            iconClasses:`text-violet-950  top-0 start-1/2`,
        },

        {
            icon: faNetworkWired, 
            iconClasses:`text-sky-700 top-1/2 start-0`,
        },

        {
            icon: faPersonChalkboard, 
            iconClasses:`text-blue-700 top-1/2 start-full`,
        },

        {
            icon: faGlobe, 
            iconClasses:`text-sky-500 top-50 start-1/2`,
        },

    ];

    const circleThreeIcons:IIconWithText[] = [

        {
            icon: faVideo, 
            iconClasses:`text-violet-500 top-0 start-1/2`,
        },

        {
            icon: faSchoolFlag, 
            iconClasses:`text-black top-1/2 start-0`,
        },

        {
            icon: faStudiovinari, 
            iconClasses:`text-black top-1/2 start-full `,
        },

    ];

    return(

        <section className="p-16 py-24 relative circle-uni-section  @container mx-auto   secondary-bg">

            <div className="circle-uni-section-container grid grid-cols-6 main-container-styles">
                    <div className="col-span-3 pt-24 md:pt-0 w-full h-full mx-auto relative">
                        <div className="relative circleContainer start-full md:start-1/4 md:top-1/2   translate-middle bg-gradient-to-tl from-slate-50 to-amber-300">
                                
                                <Circle cricleClasses="w-72 h-72  ">
                                    {circleOneIcons.map((circleIcon, index)=> 
                                        <i key={index} className={`${circleIcon.iconClasses} absolute translate-middle `}>
                                            <FontAwesomeIcon icon={circleIcon.icon} />
                                        </i>)}
                                </Circle>

                                <Circle cricleClasses="w-52 h-52 bg-gradient-to-tr from-slate-100 to-amber-100 via-amber-100">
                                    {circleTwoIcons.map((circleIcon,index)=> 
                                        <i key={index} className={`${circleIcon.iconClasses} text-2xl  absolute  translate-middle `}>
                                                <FontAwesomeIcon icon={circleIcon.icon} />
                                        </i>
                                    )}
                                </ Circle >

                                <Circle cricleClasses="w-32 h-32 bg-gradient-to-b from-zinc-50 to-amber-200" >
                                    {circleThreeIcons.map((circleIcon, index)=> <i key={index} className={`text-2xl  absolute  translate-middle ${circleIcon.iconClasses} `}>
                                        <FontAwesomeIcon icon={circleIcon.icon} />
                                    </i>)}
                                </Circle>

                            
                        </div>
                    </div>

                    <HomeSectionsData sectionClasses={'circleSection col-span-4 md:col-span-3 pt-50 md:py-0'} >

                            <p className="text-4xl font-bold w-full mx-auto md:mx-0 md:w-1/2 text-black">Supported by premium Software
                            </p>

                            <p  className="w-full md:w-3/4 py-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis consectetur asperiores repudiandae impedit harum animi at omnis qui sed. Vitae asperiores quas voluptatibus vero hic!
                            </p>

                        <MainButton link={'/uniList'} buttonText={'Get Started'} buttonClasses={'w-full md:w-1/2'} />
                    </HomeSectionsData>
            </div>
    
    </section>
    )
}

export default HomeUniCirclesSection