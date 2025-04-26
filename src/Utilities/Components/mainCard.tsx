import { IBlogCard } from "../../Interfaces/iBlogCard"


function MainCard({ data }: { data: IBlogCard }){

    const { blogImgSrc, blogImgAlt, blogTextTitle, blogTextDesc, blogLink} = data
    

    return (
        <div className="card h-full w-full col-span-1">
            <figure>
                   <a href={blogLink} target="_blank">
                    <img
                        className="h-[250px] w-full"
                        src={blogImgSrc}
                        alt= {blogImgAlt}
                        />
                   </a>
            </figure>

            <div className="card-body">
                <a href={blogLink} target="_blank" className="card-title main-hover">{blogTextTitle}</a>
                <p>{blogTextDesc}</p>

            </div>
                
        </div>
    )
}

export default MainCard