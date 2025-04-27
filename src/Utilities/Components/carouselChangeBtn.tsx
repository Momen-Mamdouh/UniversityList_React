import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function CarouselChangeBtn(props:any){

    return (
        <button className="btn p-2.5 main-linear-gradient-to-left border-0 text-white text-lg" onClick={props.changeFn}>
            {
                props.chevronDir === 'right' 
                ? <FontAwesomeIcon icon={faChevronRight} />
                : <FontAwesomeIcon icon={faChevronLeft} />

            }

        </button>
    )
}

export default CarouselChangeBtn