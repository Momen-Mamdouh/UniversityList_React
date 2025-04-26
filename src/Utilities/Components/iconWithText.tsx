

function IconWithText(props:any){


    return(

        <>
            <p className="text-black order-1">Lorem ipsum dolor sit, amet consectetur?</p>
            <i className={`fa-solid  p-5 rounded-full ${props.iconClasses}`}></i>
        </>

    )
}

export default IconWithText