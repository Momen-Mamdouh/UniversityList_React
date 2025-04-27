import { FaChevronRight, FaChevronLeft } from "react-icons/fa6"




function CarouselChangeBtn(props:any){

    return (
        <button className="btn p-2.5 main-linear-gradient-to-left border-0 text-white text-lg" onClick={props.changeFn}>
            {
                props.chevronDir === 'right' 
                ? <FaChevronRight />
                : <FaChevronLeft />

            }

        </button>
    )
}

export default CarouselChangeBtn