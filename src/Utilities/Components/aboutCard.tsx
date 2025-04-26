

function AboutCard(props:any){



    return(
        <div className="profCard col-span-4">
                            <div className="cardImg">
                                    <img className="h-[450px] w-full object-cover rounded-2xl" src={props.aboutCardImage} alt="Professor in university in Egypt" />
                                    <div className="cardImg-data">
                                        <h3 className="profName font-semibold text-lg">Professor Name</h3>
                                        <h5 className="profDesc">Professor Title</h5>
                                    </div>
                            </div>
                        </div>
    )
}

export default AboutCard