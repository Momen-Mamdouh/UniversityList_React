


function CarouselChangeBtn(props:any){

    return (
        <button className="btn p-2.5 main-linear-gradient-to-left border-0 text-white text-lg" onClick={props.changeFn}>
            <i className={`fa-solid fa-chevron-${props.chevronDir}`}></i>
        </button>
    )
}

export default CarouselChangeBtn