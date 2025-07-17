import { ReactNode } from "react";



export default function EndOfList({children}:{children:ReactNode}){


    return(
        <div className="animate-fade-out endOfList text-center flex items-center justify-center mt-10">
                        <h2 className="main-linear-gradient-to-left p-5 rounded-md text-2xl">
                            {children}
                        </h2>
        </div>
    )
}

