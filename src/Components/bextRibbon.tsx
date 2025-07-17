

export default function BestRibbon({country, ribbonClasses}:{country:string, ribbonClasses:string}){
  
    return(
        <div className={`absolute  z-40 left-0 w-full ${ribbonClasses}  text-center bg-gradient-to-r from-red-600 via-orange-500 to-yellow-300 py-4`}>
        <p className="text-black font-bold whitespace-nowrap text-xl tracking-wider uppercase ">
                BEST {country} Universities To Study IN {new Date().getFullYear()} ❤️ BEST {country} Universities To Study IN {new Date().getFullYear()} 
                ❤️ BEST {country} Universities To Study IN {new Date().getFullYear()} ❤️
        </p>
    </div>
    )
}

