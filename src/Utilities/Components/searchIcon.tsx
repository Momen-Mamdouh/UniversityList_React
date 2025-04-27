import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function SearchIcon(){


    return (
        <i className="h-[1em] opacity-50">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </i>
    )
}

export default SearchIcon