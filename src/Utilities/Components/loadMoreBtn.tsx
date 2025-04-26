


function LoadMoreBtn(props:any){

    return(
        <div className="  flex items-center justify-center md:justify-start  main-container-styles">
            <button className={`btn w-full md:w-1/2 rounded-md ${props.btnClass}`} onClick={props.fn}>
                {props.btnText}
            </button>
        </div>
    )
}

export default LoadMoreBtn