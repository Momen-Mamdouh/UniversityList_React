import { Link } from "react-router-dom"


function MainButton(props:any){
    return(
        <Link to={props.link} className={`btn main-linear-gradient rounded-full px-8 border-0 ${props.buttonClasses}`}> {props.buttonText} </Link>
    )
}
export default MainButton