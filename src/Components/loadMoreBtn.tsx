import { MouseEventHandler } from "react"

interface ILoadMoreBtnProps{
    btnClass:string,
     btnText:string, 
     handleClick:MouseEventHandler<HTMLButtonElement>
}

export default function LoadMoreBtn({btnClass, btnText, handleClick}:ILoadMoreBtnProps){

    return(
        <div className="  flex items-center justify-center md:justify-start  main-container-styles">
            <button className={`btn w-full md:w-1/2 rounded-md ${btnClass}`} onClick={handleClick}>
                {btnText}
            </button>
        </div>
    )
}

