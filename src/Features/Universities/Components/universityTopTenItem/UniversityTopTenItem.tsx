

import { FaHouse } from 'react-icons/fa6'

interface IUniListProps{
    uniNumber:string,
    uniName:string,
    countryCode:string,
    universityDomain:string[],
}

function UniItemList(props:IUniListProps){

    return(
        <>
            <li className="list-row w-full rounded main-linear-gradient">
                <div className="text-4xl font-thin opacity-50 tabular-nums text-black">{props.uniNumber}</div>
                <div className="list-col-grow">
                <div className="font-semibold">{props.uniName}</div>
                <div className="text-base uppercase font-semibold opacity-60 pt-2.5">{props.countryCode}</div>
                </div>
                <a className="btn btn-square btn-ghost" role="button" href={props.universityDomain[0]} target="_blank">
                    <i className="main-icon-hover">
                        <FaHouse />
                    </i>
                  
                </a>
            </li>
         </>
    )
}


export default UniItemList