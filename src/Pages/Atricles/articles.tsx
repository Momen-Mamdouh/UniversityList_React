import { useParams } from "react-router-dom";

import MainHeader from "@/src/Components/mainHeader";;

import LoadMoreBtn from "../../Components/loadMoreBtn";
import EndOfList from "../../Components/endOfList";
import EmptyComponent from "../../Components/emptyComp";

import ArticlesHeader from "@/src/Features/Articles/Components/ArticlesHeader/ArticlesHeader";
import LoaderScreen from "@/src/Components/loaderScreen";
import ArticlesCard from "@/src/Features/Articles/Components/ArticlesCard/ArticlesCard";
import usePexelsPhotos from "@/src/Features/Articles/Hooks/usePexelsPhotos";
import useArticles from "@/src/Features/Articles/Hooks/useArticles";
import { fallbackImg } from "@/src/Utilities/environment";




export default function Articles(){
    const query = 'University Articles';
    const { id = 'Undefined ID' } = useParams<{ id: string }>();
    const { handleLoadMore, articlesData, articleListSlice, articleIndex, showEndMessage } = useArticles({id});

    const { PexelDataFound, pexelsPhotos, pexelIndex, pexelLoading } = usePexelsPhotos({query})


        return(
            <>

              { !PexelDataFound && pexelLoading && <LoaderScreen  /> }

              {  PexelDataFound && !pexelLoading &&
                    <MainHeader bgClasses={'bg-[linear-gradient(90deg,rgba(2,0,36,0.4)_0%,rgba(9,9,121,0.2)_100%) bg-cover bg-center bg-no-repeat'} 
                            bgImg={pexelsPhotos[pexelIndex]?.src.original ?? fallbackImg}>
                              <ArticlesHeader pexelImage={pexelsPhotos[pexelIndex]} pexelImageNext={pexelsPhotos[pexelIndex+1]} />
                    </MainHeader>
              }

        
                { articlesData?.data.articles.length !== 0 &&
                    <section className="@container py-32 main-bg articles-section">

                          <div className="grid gap-6 main-container-styles">
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                                  {articleListSlice?.map((article, i) => (
                                      <ArticlesCard article={article} id={i} />
                                  ))}
                              </div>
                          </div>


                        { articlesData?.data.articles.length! > 10 && 
                            articleIndex < articlesData?.data.articles.length! &&  (
                          <LoadMoreBtn btnClass={'blue-btn-classes !w-1/2 mt-10 mx-auto'} btnText={'More Articles'} handleClick={handleLoadMore} />
                        )}

                        {showEndMessage && ( <EndOfList children={'End of the List 😉'} />)}
                    </section> 

                }
                {articlesData?.data.articles.length === 0 && <EmptyComponent />}
            
            </>
        )
    }

