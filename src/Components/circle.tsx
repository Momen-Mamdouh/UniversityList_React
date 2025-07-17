import { ReactNode } from "react";

export default function Circle({cricleClasses, children}:{cricleClasses:string, children:ReactNode}){

    return(

        <div className={`circle border-amber-400 absolute -z-50  border-2 rounded-full  top-1/2 left-1/2 translate-middle ${cricleClasses}`}>
            {children}
        </div>
    )
}
