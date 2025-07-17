import { Dispatch, useState } from 'react';

import { IUniResponse } from '@/src/Features/Universities/Interfaces/IUniResponse';
import { useUniversitySearch } from '@/src/Features/Universities/Hooks/useUniversitySearch';
import UniSliderCard from '@/src/Features/Universities/Components/UniSliderCard/UniSliderCard';
import EmptyComponent from '@/src/Components/emptyComp';
import SearchInput from '@/src/Components/searchInput';
import LoadMoreBtn from '@/src/Components/loadMoreBtn';
import EndOfList from '@/src/Components/endOfList';
import ResponseLoader from '@/src/Components/ResponseLaoder/ResponseLoader';


interface IUniSearchSectionProps{
    country:string,
    setCountry:Dispatch<React.SetStateAction<string>>,
}

export default function UniversitySearchSection({country, setCountry}:IUniSearchSectionProps) {

    const [searchInputValue, setSearchInputValue] = useState('');
    const { universityListSlice, handleLoadMore, showEndMessage, isLoading, safeData, uniIndex,} = useUniversitySearch(country);

  

  return (

        <>
            {isLoading && <ResponseLoader />}
            {!isLoading && <section className={`uniList-uniListSection py-32 @container mx-auto ${ universityListSlice.length == 0  ? 'bg-white' : 'secondary-bg'}`}>
                
                <div className="search-area flex items-center md:flex-row flex-col gap-5 pb-16 main-container-styles ">

                    <div className="serachLabel md:w-1/4   text-black text-2xl font-semibold  ">
                            <h3>Enter your Country:</h3>
                    </div>

                    <div className="searchInput md:w-full ">
                        <label className="input md:w-1/2">
                            <SearchInput 
                                    valueInput = {searchInputValue}
                                    InputChangeFn = {(e) => setSearchInputValue(e.target.value)}
                                    InputBlurFn = {(e) => setCountry(e.target.value)}
                                    InputEnterFn={(value) => setCountry(value)}
                            />
                        
                        </label>
                    
                    </div>

                </div>


                { searchInputValue == '' &&   safeData.length === 0 && <EmptyComponent />}

                {universityListSlice.map((university:IUniResponse,idx:number)=>   
                    <UniSliderCard idx={idx} university={university} />
                )};

                
                {safeData.length !== 0 && uniIndex < safeData.length! && ( <LoadMoreBtn btnClass={''} btnText={'More Universities'} handleClick={handleLoadMore} />)}

                {showEndMessage && (<EndOfList children={'End of the List 😉'} />)}

            </section>}
            
        </>

  )
}
