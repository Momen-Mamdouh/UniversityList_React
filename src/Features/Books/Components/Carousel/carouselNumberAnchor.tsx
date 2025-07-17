

export default  function CarouselNumber({carouselNumber}:{carouselNumber:number}){

    return (
        <a  href={`#item${carouselNumber}`} className="btn btn-sm bg-gradient-to-r from-cyan-900 to-blue-600 border-0"> {carouselNumber} </a> 
    )
    
}



