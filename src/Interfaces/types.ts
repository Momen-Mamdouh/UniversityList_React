// types.ts
export type PhotosWithTotalResults = {
    photos: Photo[];
    total_results: number;
  };
  
  export type ErrorResponse = {
    error: string;
  };
  
  export type Photo = {
    id: number;
    photographer: string;
    src: {
      medium: string;
      large: string;
    };
  };
  