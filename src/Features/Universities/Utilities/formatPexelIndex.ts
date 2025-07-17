import { Photo } from "pexels/dist/types";


    let pexelStartIndex:number;
    let pexelEndIndex:number;
    let pexelPhotosSlice:Photo[];

export function formatPexelIndex(idx:number, pexelListPhotos:Photo[]):Photo[]{
        pexelStartIndex = idx*2;
        pexelEndIndex = pexelStartIndex + 2;
        
        
        if (pexelEndIndex >= pexelListPhotos.length) {
            pexelStartIndex = 0;
            pexelEndIndex = pexelStartIndex + 2;
        }
        pexelPhotosSlice = pexelListPhotos.slice(pexelStartIndex, pexelEndIndex);
        return pexelPhotosSlice
}