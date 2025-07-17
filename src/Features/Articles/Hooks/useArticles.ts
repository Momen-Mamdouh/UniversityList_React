import { useArticlesQuery } from '@/src/Hooks/useArticlesQuery';
import { IArticle } from '@/src/Interfaces/IArticlesResponse';
import { useState, useEffect } from 'react';



export default function useArticles({id}:{id:string}){

    const { data: articlesData,  isSuccess:articlesDataFound} = useArticlesQuery(id);
    
    const [articleIndex, setArticleIndex] = useState(0);
    const [articleListSlice, setArticleListSlice] = useState<IArticle[]>([]);
    const [showEndMessage, setShowEndMessage] = useState(false);


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


    return {handleLoadMore, articlesData, articleListSlice, showEndMessage, articleIndex}
}