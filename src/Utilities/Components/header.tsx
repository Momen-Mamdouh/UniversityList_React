

function Header(props:any){


    return(

        <header className={`${props.bgClasses} h-screen  flex items-center justify-center text-white text-4xl`}>
                    
        <div className="relative overflow-hidden h-full w-full">
                {props.children}
        </div>
    </header> 
    )
}

export default Header