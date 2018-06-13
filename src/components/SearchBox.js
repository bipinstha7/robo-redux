import React from 'react'

const SearchBox = ({searchChange}) => {
  return (
    <div className="pa2">
      <input 
        aria-label="Search Robots"
        className="pa3 ba b--greeen bg-lightest-blue"
        type="text" 
        placeholder="search robots"  
        onChange = {searchChange}
      />
    </div>
  )
}

export default SearchBox;