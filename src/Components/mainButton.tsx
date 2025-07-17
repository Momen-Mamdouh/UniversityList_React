import { Link } from "react-router-dom"

interface IMainBtnProps{
    link:string,
    buttonClasses?:string,
    buttonText:String
}


export default function MainButton({link,buttonClasses,buttonText}:IMainBtnProps){
    return(
        <Link to={link} className={`btn main-linear-gradient rounded-full px-8 border-0 ${buttonClasses}`}> {buttonText} </Link>
    )
}