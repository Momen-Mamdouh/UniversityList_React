
import MainButton from "../../Utilities/Components/mainButton";
import StudentImageDiv from "../../Utilities/Components/studentImageDiv";
import HomeSectionsData from "../HomeSectionsData/homeSectionsData";
import { IIconWithText } from "../../Interfaces/IIconWithText";
import uniLecturerImage from '../../assets/University/lecturer.png';
import uniStudentImage from '../../assets/University/newStudent.png';
import { FaCheck, FaGlobe, FaPaperPlane, FaWallet } from "react-icons/fa6";



function HomeStudentSection(){

    
        const iconsWithTextObj:IIconWithText[] = [
            {
                icon: <FaCheck />, 
                iconClasses:`p-0`,
                iconText:``
            },
    
            {
                icon:<FaCheck />, 
                iconClasses:`p-1`,
                iconText:``
            },
    
            {
                icon:<FaCheck />, 
                iconClasses:`p-2`,
                iconText:``
            },
    
            {
                icon:<FaCheck />, 
                iconClasses:`p-3`,
                iconText:``
            },
    
        ];


    return(
        <section className="p-16  students-section secondary-bg  @container mx-auto ">
            <div className="student-section-container main-container-styles">
                    <div className="advantages-section">
                                        <div className="icons-list">
                                                <ul className="grid md:grid-cols-3 gap-10  grid-cols-1">
                                                    <li className="col-span-1 flex items-center gap-10">
                                                        <i className={'text-xl  bg-blue-500'}>
                                                           <FaPaperPlane />
                                                        </i>
                                                    </li>
                                                    
                                                    <li className="col-span-1 flex items-center gap-10">
                                                        <i className={'text-xl  bg-red-500'}>
                                                            <FaGlobe />
                                                        </i>
                                                    </li>

                                                    <li className="col-span-1 flex items-center gap-10">
                                                        <i className={'text-xl  bg-yellow-500'}>
                                                                <FaWallet />
                                                        </i>

                                                    </li>
                                                </ul>
                                        </div>
                    </div>

                    <div className="student-classes pt-24 grid grid-cols-6 gap-10">
                        <div className="student-image col-span-6 md:col-span-3">
                            <StudentImageDiv studentImage={uniLecturerImage} bgColor={'from-yellow-400 to-yellow-200'}/>
                        </div>

                        <div className="student-image col-span-6 md:col-span-3">
                        <HomeSectionsData sectionClasses={'studentClassesSection col-span-6 md:col-span-3'} >

                            <p className="text-4xl font-bold w-full md:w-1/2 text-black">Online Data analytics for biz 
                                    professionals
                            </p>

                            <p  className="w-full md:w-3/4 py-10">Make it easier for all students to do learning through 
                                digital media with existing media it easier for students to learn anywhere and 
                                anytime
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                                {iconsWithTextObj.map((i,index)=>  
                                    <li key={index} className="col-span-1 flex items-center gap-10 ">
                                        <i className={`${i.iconClasses} text-md rounded-sm bg-orange-500`}>
                                            <FaCheck />
                                        </i>
                                    </li>)
                                }
                                    
                            </ul>
                        </HomeSectionsData>
                            

                        </div>
                    </div>

                    <div className="student-courses pt-32 grid grid-cols-6 gap-10">

                        <HomeSectionsData sectionClasses={'studentCoursesSection col-span-6 md:col-span-3'} >
                                <p className="text-4xl font-bold w-full md:w-2/3 text-black">Specify your programers and define your own study horus</p>

                                    <p  className="w-full md:w-3/4 py-10">Make it easier for all students to do learning through 
                                        digital media with existing media it easier for students to learn anywhere and 
                                        anytime</p>

                                <MainButton link={'/uniList'} buttonText={'Get Started'} buttonClasses={'w-full md:w-1/2 md:mx-auto'}/>
                        </HomeSectionsData>
                            

                        <div className="student-image col-span-6 md:col-span-3">
                            <StudentImageDiv studentImage={uniStudentImage} bgColor={'from-red-400 to-red-200'}/>
                        </div>
                    </div>
            </div>

                       

        </section>
    )
}

export default HomeStudentSection