import { IArticle } from "@/src/Interfaces/IArticlesResponse";
import { fallbackImg } from "@/src/Utilities/environment";

interface IArticleCardProps{
    article:IArticle,
    id:number,
}



export default function ArticlesCard({article, id}:IArticleCardProps) {

  return (
        <>
            <div key={id} className="card  w-96 shadow-sm">
                        <figure>
                            <img
                                src={article.urlToImage ?? fallbackImg}
                                alt={article.title}
                                className="rounded-xl h-[250px] w-full" />
                        </figure>

                        <div className="card-body  ">
                            <h2 className="card-title text-white font-semibold">{article.title}</h2>
                            <p className="py-5 text-white articleDesc">{article.description}</p>
                            <div className="card-actions">
                                <a href={article.url} className="!w-full blue-btn-classes ">Read More</a>
                            </div>
                        </div>
            </div>
        </>
  )
}
