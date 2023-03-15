import React from 'react'
import "./Search.css"

function Search({ inputValue, onInputChange }) {
  return (
    <div className='--form-control header__search'>
      <input type="text" placeholder='Search products...' className='input__search' value={inputValue} onChange={onInputChange} />
    </div>
  )
}

export default Search