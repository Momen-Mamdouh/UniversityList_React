import { IBlogCard } from "@/src/Features/Blog/Interfaces/IGNewsResponse"
import { fallbackImg } from "@/src/Utilities/environment";


export default function MainCard({ data }: { data: IBlogCard }){
    const { url, title, description, image } = data
    return (
        <div className="card h-full w-full col-span-1">
            <figure>
                   <a href={url} target="_blank">
                    <img
                        className="h-[250px] w-full"
                        src={image ?? fallbackImg}
                        alt= {title}
                        />
                   </a>
            </figure>

            <div className="card-body">
                <a href={url} target="_blank" className="card-title main-hover">{title}</a>
                <p>{description}</p>

            </div>
                
        </div>
    )
}

