


function UniItemList(props:any){

    return(
        <>
            <li className="list-row w-full rounded main-linear-gradient">
                <div className="text-4xl font-thin opacity-50 tabular-nums text-black">{props.index}</div>
                <div className="list-col-grow">
                <div className="font-semibold">{props.universityName}</div>
                <div className="text-base uppercase font-semibold opacity-60 pt-2.5">{props.countryCode}</div>
                </div>
                <a className="btn btn-square btn-ghost" role="button" href={props.universityDomain} target="_blank">
                    <i className="fa-solid fa-house main-icon-hover"></i>
                </a>
            </li>
         </>
    )
}


export default UniItemList