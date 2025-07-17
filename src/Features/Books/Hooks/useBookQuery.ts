import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "@/src/Features/Books/Services/fetchBooks";


export const useBooksQuery = (  ) =>
    useQuery({
        queryKey: ['books'],
        queryFn: () => fetchBooks(),
    });
  
