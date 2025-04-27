import { FaCirclePlay  } from "react-icons/fa6"


function BlogsCard(props:any){

    return(
        <div className="h-full relactive col-span-4 card bg-base-100 image-full w-96 shadow-sm">
            <figure>
                <img
                className="absolute h-full w-full object-cover rounded-2xl"
                src={props.blogImg}
                alt="Blog of video of how our university teach" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Tips on choosing a university</h2>
                <p className="text-white!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officiis praesentium eius similique totam, laudantium maiores atque fuga doloremque eaque dolorem itaque minima? Repellendus soluta quasi adipisci autem, dolorum iure?</p>
                <div className="card-actions justify-center">
                    <a href={props.blogLink} target="_blank" className="btn bg-red-600 border-0 hover:bg-red-700 duration-300">
                        <i className="text-2xl">
                            <FaCirclePlay />
                        </i>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default BlogsCard