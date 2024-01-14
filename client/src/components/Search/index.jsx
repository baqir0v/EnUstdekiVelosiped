import React, { useContext } from 'react'
import "./index.scss"
import { SearchContext } from '../../Context/searchContext'
import { TiDeleteOutline } from "react-icons/ti";

const Search = () => {
  const { search, handleSearch } = useContext(SearchContext)
  return (
    <section className={search ? "search" : "dnone"}>
      <div className="searchtop">
        <span className='x' onClick={handleSearch}><TiDeleteOutline /></span>
        <h3>Start typing and hit Enter</h3>
        <input type="text" />
      </div>
      <div className="searchbottom">

      </div>
    </section>
  )
}
export default Search
