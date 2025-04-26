

function SocialList(props:any){

    return(
        <div className={`grid grid-flow-col gap-10 ${props.listClasses}`}>
            <a href="https://github.com/Momen-Mamdouh">
                <i className="fa-brands fa-github-alt text-2xl main-icon-hover"></i>
            </a>

            <a href="https://www.linkedin.com/in/mo-men-mamdouh-aa5baa20a/">
                <i className="fa-brands fa-linkedin-in text-2xl main-icon-hover"></i>
            </a>

        </div>
    )
}

export default SocialList