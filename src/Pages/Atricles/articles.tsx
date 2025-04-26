import { useParams } from "react-router-dom";
import { useArticlesQuery } from "../../Services/universityArticlesApi"
import Header from "../../Utilities/Components/header";
import { usePexelsPhotos } from "../../Services/pexelsImageApi";
import { Photo } from "../../Interfaces/IPexelResponse";
import { useEffect, useState } from 'react';
import LoaderScreen from "../../Components/Loader/loaderScreen";
import { IArticle } from "../../Interfaces/IArticlesResponse";
import LoadMoreBtn from "../../Utilities/Components/loadMoreBtn";
import EndOfList from "../../Utilities/Components/endOfList";
import EmptyComponent from "../../Utilities/Components/emptyComp";



    function Articles(){

        const [pexelIndex, setPexelIndex] = useState(0);
        const [articleIndex, setArticleIndex] = useState(0);
        const [articleListSlice, setArticleListSlice] = useState<IArticle[]>([]);
        const [showEndMessage, setShowEndMessage] = useState(false);
        
        const { id } = useParams<{ id: string }>();

        const { data: articlesData, isLoading:articlesLoading, isSuccess:articlesDataFound} = useArticlesQuery(id!);

        const articles = articlesData?.data.articles ;

        const { data: pexelApiData, isLoading:pexelLoading, isSuccess:PexelDataFound} = usePexelsPhotos('Articles');
        const pexelArticlesPhotos:Photo[] = pexelApiData?.photos || [];


      


        function formatIndexOfPexelImages():void{
          if(PexelDataFound && pexelArticlesPhotos.length !=0){
                setPexelIndex((prevIndex) => (prevIndex + 1) % pexelArticlesPhotos.length);
          }
        }

        useEffect(() => {
            if (articlesDataFound && articlesData?.data.articles.length > 0 && articleIndex === 0) {
                const initialSlice = articlesData.data.articles.slice(0, 10);
                setArticleListSlice(initialSlice);
                setArticleIndex(10);
            }
        }, [articlesDataFound, articlesData]);

        useEffect(() => {
            if (articlesData?.data && articleIndex >= articlesData.data.articles.length) {
                setShowEndMessage(true);
                const timeout = setTimeout(() => {
                    setShowEndMessage(false);
                }, 2000);
        
                return () => clearTimeout(timeout);
            }
        }, [articleIndex, articlesData]);
        
        const handleLoadMore = () => {
            if (!articlesData?.data) return;
        
            const total = articlesData.data.articles.length;
    
    
            if (articleIndex >= total) return;
        
            const newSlice = articlesData.data.articles.slice(articleIndex, articleIndex + 10);
            setArticleListSlice(prev => [...prev, ...newSlice]);
            setArticleIndex(prev => prev + 10);
        };
        
        useEffect(()=>{
            const interval = setInterval(formatIndexOfPexelImages, 2000); 
        
            return () => clearInterval(interval); 

        }, [pexelArticlesPhotos.length])
        
    

        

        

        return(
            <>

            <LoaderScreen isLoading = {pexelLoading} />

              {  PexelDataFound?
                
                    <Header>
                      <div
                        className="relative w-full h-full transition-all duration-1000" 
                        style={{
                          backgroundImage: `url(${pexelArticlesPhotos[pexelIndex]?.src.original})`,
                          backgroundRepeat:'no-repeat',
                          backgroundPosition:'center center',
                          backgroundSize:'cover',
                        }}
                      >
                        <div className="grid grid-cols-12 h-full ">
                          <div className="col-span-6 items-center flex flex-col py-48 z-5 md:justify-start justify-center">
                            <h1 className="text-5xl px-10 md:w-2/3 md:text-start mx-auto text-center">
                              Welcome To University Articles
                            </h1>
                            <div className="headerBtn px-10"></div>
                          </div>
                        </div>
                      </div>
                    </Header>
                  
                : ''    
                }


        
                { articlesData?.data.articles.length !=0 ?
                    <section className="@container py-32 main-bg articles-section">
                    <div className="grid gap-6 main-container-styles">

                
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                        {articleListSlice?.map((article, i) => (

                            <div key={i} className="card  w-96 shadow-sm">
                                <figure>
                                    <img
                                        src={article.urlToImage}
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

                        ))}
                        </div>
                    </div>


                { articlesData?.data.articles.length! > 10 && 
                    articleIndex < articlesData?.data.articles.length! &&  (
                  <LoadMoreBtn btnClass={'blue-btn-classes !w-1/2 mt-10 mx-auto'} btnText={'More Articles'} fn={handleLoadMore} />
                )}

                    {showEndMessage && (
                    <EndOfList children={'End of the List 😉'} />
                    )}
                    </section> 
                    : <EmptyComponent />

                }
            
            </>
        )
    }

    export default Articles