import { fallbackImg } from "@/src/Utilities/environment";
import { IBooksResult } from "@/src/Features/Books/Interfaces/IGutendexBooksResponse";

 export default function HorizontialCard({book}:{book:IBooksResult}) {

  return (
    
      <div
          className="flex px-36  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-200 ">
          <img
            className=" w-full h-full rounded-t-lg object-contain md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={book.formats['image/jpeg'] ?? fallbackImg}
            alt={book.title} />

          <div className="flex flex-col justify-center p-6">
            <div className="cardHeader flex items-center justify-between">
                <h5
                className="mb-2 text-xl font-medium text-neutral-50 dark:text-neutral-950">
                      {book.title.split(" ").slice(0, 5).join(" ")}
              </h5>

              <h6
                className="mb-2 text-xl font-medium text-neutral-50 dark:text-neutral-950 booksTitle-class bg-cyan-600 hover:bg-cyan-500 duration-400">
                  <a href={book.formats['application/octet-stream']} download={true}>
                      Download Book
                  </a>
              </h6>
            </div>
              
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {book.summaries[0]}
            </p>
            
            <div  className="flex justify-between items-center py-2.5">
              <h3 className="author-name text-black">Author: <span className="booksTitle-class text-black bg-yellow-400">{book.authors[0].name}</span> </h3>

              {book.authors[0].birth_year ? 
                <h4 className=" text-black ">Birth Year: <span className="booksTitle-class text-black bg-blue-300"> {book.authors[0].birth_year} </span></h4>
                : ''
              }

             { book.authors[0].death_year ?
              <h4 className=" text-black">Death Year: <span className="booksTitle-class text-white bg-red-500"> {book.authors[0].death_year} </span></h4>
              : ''
            }
            </div>

            <h5 className="text-black pt-5">
                Downloaded Count: <span className="booksTitle-class text-black bg-cyan-500">
                  {book.download_count}
                </span>
            </h5>
          </div>
      </div>

  );
}
