import { MouseEventHandler } from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6"




export default function CarouselChangeBtn({changeFn, chevronDir}:{chevronDir:string, changeFn: MouseEventHandler<HTMLButtonElement>}){

    return (
        <button className="btn p-2.5 main-linear-gradient-to-left border-0 text-white text-lg" onClick={changeFn}>
            {
                chevronDir === 'right' 
                ? <FaChevronRight />
                : <FaChevronLeft />

            }

        </button>
    )
}

