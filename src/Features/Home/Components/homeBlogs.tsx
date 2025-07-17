import MainCard from "@/src/Components/mainCard"
import { useGNewsBlogsQuery } from "@/src/Features/Blog/Hooks/useGNewsBlogsQuery";
import { IBlogQuery } from "@/src/Interfaces/IBlogQuery";
import ResponseLoader from "@/src/Components/ResponseLaoder/ResponseLoader";








export default function HomeBlogs({country}:{country:string}){

    const countryToNews = country.slice(0,2).toLowerCase();
    const blogsQuery:IBlogQuery = {language:'en', text:'University'};
    const {data:gNewsBlogs, isLoading:gNewsLoading}  = useGNewsBlogsQuery(blogsQuery, countryToNews);

    return(
        <>
            {gNewsLoading && <ResponseLoader />}
            {!gNewsLoading &&
                <div className={'blogSection col-span-4 md:col-span-3 pt-50 md:py-0 mx-auto'} >

                        <div className="blogSection-heading text-center py-16 px-12">
                            <p className="text-4xl font-bold md:w-1/3 mx-auto   text-black">
                                    {`Read our blogs to learn more about our universities`}
                            </p>
            
                            <p  className="w-full mx-auto md:w-1/3 py-4">{`Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Totam nobis iste assumenda, maxime quod obcaecati.`}
                            </p>
                        </div>

                        <div className="blogSection-cards grid grid-cols-1 md:grid-cols-3 px-12 md:px-36 gap-10 items-center justify-between">
                            {gNewsBlogs?.map((card)=> <MainCard key={card.id} data={card}  />)}
                        </div>
                
                </div>
            }
        </>
    )
}