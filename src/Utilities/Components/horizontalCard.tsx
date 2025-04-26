

 function HorizontialCard(props:any) {
  return (
    
      <div
          className="flex px-36  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-200 ">
          <img
            className=" w-full h-full rounded-t-lg object-contain md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={props.book.formats['image/jpeg']}
            alt={props.book.title} />

          <div className="flex flex-col justify-center p-6">
            <h5
              className="mb-2 text-xl font-medium text-neutral-50 dark:text-neutral-950">
                <a href={props.book.formats['application/octet-stream']} download={true}>
                    {props.book.title}
                </a>
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {props.book.summaries[0]}
            </p>
            
            <div  className="flex justify-between items-center py-2.5">
              <h3 className="author-name text-black">Author: <span className="booksTitle-class text-black bg-yellow-400">{props.book.authors[0].name}</span> </h3>

              {props.book.authors[0].birth_year ? 
                <h4 className=" text-black ">Birth Year: <span className="booksTitle-class text-black bg-blue-300"> {props.book.authors[0].birth_year} </span></h4>
                : ''
              }

             { props.book.authors[0].death_year ?
              <h4 className=" text-black">Death Year: <span className="booksTitle-class text-white bg-red-500"> {props.book.authors[0].death_year} </span></h4>
              : ''
            }
            </div>

            <h5 className="text-black pt-5">
                Downloaded Count: <span className="booksTitle-class text-black bg-cyan-500">
                  {props.book.download_count}
                </span>
            </h5>
          </div>
      </div>

  );
}

export default HorizontialCard