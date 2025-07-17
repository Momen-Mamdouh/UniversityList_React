
import LoaderScreen from '@/src/Components/loaderScreen';
import ResponseLoader from '@/src/Components/ResponseLaoder/ResponseLoader';
import { useGeoapify } from '@/src/Contexts/mainContext';
import { useGNewsBlogsQuery } from '@/src/Features/Blog/Hooks/useGNewsBlogsQuery';
import { IBlogQuery } from '@/src/Interfaces/IBlogQuery';
import BlogsCard from "@/src/Components/Cards/blogsCard";

export default function AboutBlogSection() {
  
      const { country, geoapifyIsLoading } = useGeoapify();
      const blogsQuery:IBlogQuery = {language:'en', text:'University'};
      const countryToNews = country.slice(0,2).toLowerCase();
      const {data:gNewsBlogs, isLoading:gNewsLoading}  = useGNewsBlogsQuery(blogsQuery, countryToNews);

  return (
    <>
         <section className="howWeTeach  @container">

               {geoapifyIsLoading && <LoaderScreen />}
                <>
                   <div className="how-we-teach-heading flex justify-center pt-10 ">
                        <h2 className="text-2xl font-semibold">Why to choose our universites</h2>
                    </div>

                    {!geoapifyIsLoading && !gNewsLoading &&   gNewsBlogs !== undefined &&
                      <div className="how-we-teach-blogs grid grid-cols-12 gap-10 main-container-styles py-16">

                          {gNewsBlogs.map((img, index) => (
                              <BlogsCard key={img.id}  blogData={gNewsBlogs[index]} />
                          ))}
                          
                      </div>
                  }   
                     {gNewsLoading && <ResponseLoader />}
                
                </>

                   
                </section>
    
    </>
  )
}
