import React, {useState} from "react";


const Search = ({onSearch}) => {
    const [query, setQuery] = useState ("")
    function search(event){
        event.preventDefault()
        onSearch(event.target.value);
        setQuery(event.target.value);
    }

  return (
    <div id="search">
        <input 
          className="search"
          type="text" 
          placeholder="Search your recent Transaction"
          onChange={search}
          value={query}
        />
        <button className="button">🔍</button>
    </div>
  )
}

export default Search;