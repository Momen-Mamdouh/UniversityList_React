

function StudentImageDiv(props:any){


    return(
        <div className="relative w-fit mx-auto">
            <div className={`absolute inset-0 m-auto w-full rounded-full bg-gradient-to-br  z-0 ${props.bgColor}`}></div>

            <div className="absolute top-2 left-16 w-3 h-3 bg-red-500 rotate-45 rounded-sm"></div>
            <div className="absolute bottom-4 left-12 w-3 h-3 bg-blue-500 rotate-45 rounded-sm"></div>
            <div className="absolute top-16 right-10 w-3 h-3 bg-orange-400 rotate-45 rounded-sm"></div>
            <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-500 rotate-45 rounded-sm"></div>

            <img
                src={props.studentImage}
                alt="person"
                className="relative z-10  object-contain"
            />
        </div>
    )
}

export default StudentImageDiv