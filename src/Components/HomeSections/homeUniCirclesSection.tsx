import { IIconWithText } from "../../Interfaces/IIconWithText";
import Circle from "../../Utilities/Components/circle";
import Icon from "../../Utilities/Components/icon";
import MainButton from "../../Utilities/Components/mainButton";
import HomeSectionsData from "../HomeSectionsData/homeSectionsData";


function HomeUniCirclesSection(){

    

    const circleOneIcons:IIconWithText[] = [
        {
            icon:`fa-atom`, 
            iconClasses:`text-blue-500  top-0 start-1/2`,
        },

        {
            icon:`fa-flask-vial`, 
            iconClasses:`text-lime-500 top-1/4 start-67`,
        },

        {
            icon:`fa-tablets`, 
            iconClasses:`text-violet-400 top-3/4 start-67`,
        },

        {
            icon:`fa-brain`, 
            iconClasses:`text-pink-500 top-full start-1/2`,
        },

        {
            icon:`fa-building-columns`, 
            iconClasses:'text-slate-400 top-3/4 start-4 ',
        },

        {
            icon:`fa-graduation-cap`, 
            iconClasses:`text-black top-1/4 start-4`,
        },
    ];

    const circleTwoIcons:IIconWithText[] = [
        {
            icon:`fa-infinity`, 
            iconClasses:`text-violet-950  top-0 start-1/2`,
        },

        {
            icon:`fa-network-wired`, 
            iconClasses:`text-sky-700 top-1/2 start-0`,
        },

        {
            icon:`fa-person-chalkboard`, 
            iconClasses:`text-blue-700 top-1/2 start-full`,
        },

        {
            icon:`fa-globe`, 
            iconClasses:`text-sky-500 top-50 start-1/2`,
        },

    ];

    const circleThreeIcons:IIconWithText[] = [

        {
            icon:`fa-video`, 
            iconClasses:`text-violet-500 top-0 start-1/2`,
        },

        {
            icon:`fa-schoold`, 
            iconClasses:`text-black top-1/2 start-0`,
        },

        {
            icon:`fa-brands fa-studiovinari`, 
            iconClasses:`text-black top-1/2 start-full `,
        },

    ];

    return(

        <section className="p-16 py-24 relative circle-uni-section  @container mx-auto   secondary-bg">

            <div className="circle-uni-section-container grid grid-cols-6 main-container-styles">
                    <div className="col-span-3 pt-24 md:pt-0 w-full h-full mx-auto relative">
                        <div className="relative circleContainer start-full md:start-1/4 md:top-1/2   translate-middle bg-gradient-to-tl from-slate-50 to-amber-300">
                                
                                <Circle cricleClasses="w-72 h-72  ">
                                    {circleOneIcons.map((circleIcon, index)=> <Icon key={index} iconClasses={`${circleIcon.icon} absolute translate-middle ${circleIcon.iconClasses} `}/>)}
                                </Circle>

                                <Circle cricleClasses="w-52 h-52 bg-gradient-to-tr from-slate-100 to-amber-100 via-amber-100">
                                    {circleTwoIcons.map((circleIcon,index)=> <Icon key={index} iconClasses={`${circleIcon.icon} text-2xl  absolute  translate-middle ${circleIcon.iconClasses} `}/>)}
                                </ Circle >

                                <Circle cricleClasses="w-32 h-32 bg-gradient-to-b from-zinc-50 to-amber-200" >
                                    {circleThreeIcons.map((circleIcon, index)=> <Icon key={index} iconClasses={`${circleIcon.icon} text-2xl  absolute  translate-middle ${circleIcon.iconClasses} `}/>)}
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