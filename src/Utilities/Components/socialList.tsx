
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa6'



function SocialList(props:any){

    return(
        <div className={`grid grid-flow-col gap-10 ${props.listClasses}`}>
            <a href="https://github.com/Momen-Mamdouh">
                <i className="text-2xl main-icon-hover">
                     <FaGithubAlt />
                </i>
            </a>

            <a href="https://www.linkedin.com/in/mo-men-mamdouh-aa5baa20a/">
                <i className="text-2xl main-icon-hover">
                    <FaLinkedinIn />
                </i>
            </a>

        </div>
    )
}

export default SocialList