import React from 'react'
import "./SearchBoxSpace.css"
import SearchIcon from '@mui/icons-material/Search';
function SearchBoxSpace() {
  return (
    <div className='SearchBoxMain'>
      <SearchIcon className='searchBoxIcon' style={{fontSize:"170%"}}/>
      <span className='searchBoxText'>Search</span>
    </div>
  )
}

export default SearchBoxSpace