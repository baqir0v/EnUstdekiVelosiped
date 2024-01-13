import React, { useContext } from 'react'
import "./index.scss"
import { SearchContext } from '../../Context/searchContext'
 const Search = () => {
    const {search} = useContext(SearchContext)
  return (
    <section className={search ? "Eli" : "dnone"}>
        saolam
    </section>
  )
}
export default Search
