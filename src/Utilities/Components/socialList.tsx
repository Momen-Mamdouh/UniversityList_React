import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function SocialList(props:any){

    return(
        <div className={`grid grid-flow-col gap-10 ${props.listClasses}`}>
            <a href="https://github.com/Momen-Mamdouh">
                <i className="text-2xl main-icon-hover">
                     <FontAwesomeIcon icon={faGithubAlt} />
                </i>
            </a>

            <a href="https://www.linkedin.com/in/mo-men-mamdouh-aa5baa20a/">
                <i className="text-2xl main-icon-hover">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </i>
            </a>

        </div>
    )
}

export default SocialList