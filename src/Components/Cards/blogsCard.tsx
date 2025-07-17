import { FaCirclePlay  } from "react-icons/fa6"
import { IBlogCard } from '@/src/Features/Blog/Interfaces/IGNewsResponse';
import { fallbackImg } from "@/src/Utilities/environment";



export default function BlogsCard({blogData}:{ blogData:IBlogCard}){
    return(

        <div className="h-full relactive col-span-4 card bg-base-100 image-full w-96 shadow-sm">

            <figure>
                <img
                className="absolute h-full w-full object-cover rounded-2xl"
                src={blogData.image ?? fallbackImg}
                alt={blogData.title} />
            </figure>

            <div className="card-body">
                <h2 className="card-title">{blogData.title}</h2>
                <p className="text-white!">{blogData.description}</p>
                <div className="card-actions justify-center">
                    <a href={blogData.url} target="_blank" className="btn bg-red-600 border-0 hover:bg-red-700 duration-300">
                        <i className="text-2xl">
                            <FaCirclePlay />
                        </i>
                    </a>
                </div>
            </div>

        </div>

    )

}
