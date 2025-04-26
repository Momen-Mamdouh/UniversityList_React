

function CarouselNumber(props:any){

    return (
        <a  href={`#item${props.carouselNumber}`} className="btn btn-sm bg-gradient-to-r from-cyan-900 to-blue-600 border-0"> {props.carouselNumber} </a> 
    )
}

export default CarouselNumber

