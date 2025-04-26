import Icon from "./icon"


function Circle(props:any){

    return(

        <div className={`circle border-amber-400 absolute -z-50  border-2 rounded-full  top-1/2 left-1/2 translate-middle ${props.cricleClasses}`}>
            {props.children}
        </div>
    )
}

export default Circle