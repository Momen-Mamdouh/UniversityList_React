


function EndOfList(props:any){


    return(
        <div className="animate-fade-out endOfList text-center flex items-center justify-center mt-10">
                        <h2 className="main-linear-gradient-to-left p-5 rounded-md text-2xl">
                            {props.children}
                        </h2>
        </div>
    )
}

export default EndOfList