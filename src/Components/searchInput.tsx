
import { ChangeEvent, FocusEvent } from "react";
import { CiSearch } from "react-icons/ci";

interface ISearchInputProps{
    valueInput?:string,
    InputChangeFn?: (e: ChangeEvent<HTMLInputElement>) => void,
    InputBlurFn: (e: FocusEvent<HTMLInputElement>) => void,
    InputEnterFn?: (value: string) => void,

}


export default function SearchInput({valueInput, InputChangeFn, InputBlurFn, InputEnterFn}:ISearchInputProps){

 return (
    <>
        <i className="h-[1em] opacity-50">
            <CiSearch />
        </i>

        <input type="search" 
            value={valueInput} 
            onChange={InputChangeFn} 
            onBlur={InputBlurFn}
            onKeyDown={(e)=>{
                if(e.key === 'Enter' && InputEnterFn){
                    InputEnterFn(e.currentTarget.value);
                }
            }}
            required placeholder="Search" 
        />
    </>

 )

}
