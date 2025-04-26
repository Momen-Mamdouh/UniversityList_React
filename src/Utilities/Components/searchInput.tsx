import SearchIcon from "./searchIcon"


function SearchInput(props:any){

 return (
    <>
        <SearchIcon />
        <input type="search" 
            value={props.valueInput} 
            onChange={props.InputChangeFn} 
            onBlur={props.InputBlurFn}
            required placeholder="Search" 
        />
    </>

 )

}


export default SearchInput



{/* <SearchIcon  />           
    <input type="search" 
        value={countryInput} 
        onChange={(e) => setCountryInput(e.target.value)} // <- add this
        onBlur={(e) => setCountry(e.target.value)}
        required placeholder="Search" /> */}