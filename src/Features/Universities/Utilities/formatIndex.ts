

export function formatIndexFromZeroToTen(idx:number):string{
        if(idx === 0) return '01';
        else if (idx < 9) return `0${idx + 1}`;
        else return `${idx + 1}`;
}