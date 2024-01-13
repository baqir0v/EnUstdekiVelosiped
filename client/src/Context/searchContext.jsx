import React, { createContext, useState } from 'react'
export const SearchContext = createContext()

function SearchProvider({ children }) {
    const [search, setSearch] = useState(false)
    const handleSearch = () => {
        setSearch(!search)
    }

    const data = {search,handleSearch}
    return (
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider