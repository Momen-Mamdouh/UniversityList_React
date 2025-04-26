
import LoaderScreen from "../../Components/Loader/loaderScreen"
import { useBooksQuery } from "../../Services/gutendexBooksApi"
import Carousel from "../../Utilities/Components/carousel"
import Header from "../../Utilities/Components/header"



function Books(){

    const {data:booksData, isSuccess:booksAreFound, isLoading:booksLoading} = useBooksQuery();

    


    return( 
    <>
             <LoaderScreen isLoading={booksLoading}/>

            {
                <Header bgClasses={`bg-[linear-gradient(90deg,rgba(2,0,36,0.4)_0%,rgba(9,9,121,0.2)_100%),url('/src/assets/books/books-header.jpg')] bg-cover bg-center  bg-no-repeat`} >
                        <div className="grid grid-cols-12 h-full ">
                                <div className="col-span-6 items-center flex flex-col py-56 z-5 md:justify-start justify-center">
                                    <h1 className=" text-5xl px-10 md:w-2/3  md:text-start text-center"> Welcome To university Library</h1>
                                </div>
                        </div>

                </Header >
            } 

            {   <div className="booksSection secondary-bg">
                    {
                        booksAreFound? <Carousel booksData={booksData?.data.results} /> : ''
                    }
                </div>
                
            }
    </>
   
    )
}

export default Books