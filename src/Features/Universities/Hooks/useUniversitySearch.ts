// src/Features/Universities/Hooks/useUniversitySearch.ts
import { useEffect, useState } from "react";
import { useUniversityListQuery } from "./useUniversityListQuery";
import { IUniResponse } from "../Interfaces/IUniResponse";

export function useUniversitySearch(country: string) {

  const [uniIndex, setUniIndex] = useState(0);
  const [universityListSlice, setUniversityListSlice] = useState<IUniResponse[]>([]);
  const [showEndMessage, setShowEndMessage] = useState(false);

  const { data, isLoading, isSuccess } = useUniversityListQuery(country);
  const safeData = data?.securedData ?? [];

  
  useEffect(() => {
    if (isSuccess && safeData.length > 0 && uniIndex === 0) {
      const initial = safeData.slice(0, 10);
      setUniversityListSlice(initial);
      setUniIndex(10);
    }
  }, [safeData, isSuccess]);

 
  useEffect(() => {
    setUniversityListSlice([]);
    setUniIndex(0);
  }, [country]);

  
  useEffect(() => {
    if (safeData && uniIndex >= safeData.length) {
      setShowEndMessage(true);
      const timeout = setTimeout(() => setShowEndMessage(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [uniIndex, safeData]);

  const handleLoadMore = () => {
    if (!safeData) return;
    if (uniIndex >= safeData.length) return;

    const newSlice = safeData.slice(uniIndex, uniIndex + 10);
    setUniversityListSlice(prev => [...prev, ...newSlice]);
    setUniIndex(prev => prev + 10);
  };

  return { universityListSlice, handleLoadMore, showEndMessage, isLoading, safeData, uniIndex,};
}
