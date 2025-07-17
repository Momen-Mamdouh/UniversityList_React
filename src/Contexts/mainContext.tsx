
import { createContext, useContext, ReactNode } from 'react';
import { useGeoapifyQuery } from '@/src/Hooks/useGeoapifyQuery';


interface MainContextType {
  geoapifyIsLoading: boolean;
  country: string;
}


const MainContext = createContext<MainContextType | undefined>(undefined);


export const MainProvider = ({ children }: { children: ReactNode }) => {
  const { data: geoapifyData, isLoading: geoapifyIsLoading } = useGeoapifyQuery();
  const country = geoapifyData?.data.country.names.en ?? 'Eg';

  return (
    <MainContext.Provider value={{ geoapifyIsLoading, country }}>
      {children}
    </MainContext.Provider>
  );
};


export const useGeoapify = () => {
  const context = useContext(MainContext);
  if (!context) throw new Error('useGeoapify must be used within a MainProvider');
  return context;
};
