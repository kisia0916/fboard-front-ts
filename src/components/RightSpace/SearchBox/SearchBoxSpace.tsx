import React, { useRef } from 'react'
import "./SearchBoxSpace.css"
import SearchIcon from '@mui/icons-material/Search';
import { Navigate, useNavigate } from 'react-router-dom';
function SearchBoxSpace() {
  const searchInputRef = useRef<any>(null)
  const navigate = useNavigate()
  const startSearch = (e:any)=>{
    if (searchInputRef.current.value){
      e.preventDefault();
      navigate(`/search/${searchInputRef.current.value}`)
      searchInputRef.current.value = ""
    }
  }
  return (
    <div className='SearchBoxMain'>
      <form onSubmit={startSearch} className='searchBoxFormMain'>
        <input type='text' className='searchBoxInputBox' ref={searchInputRef} placeholder='Search'>
          {/* <SearchIcon className='searchBoxIcon' style={{fontSize:"170%"}}/>
          <span className='searchBoxText'>Search</span> */}
        </input>
      </form>
    </div>
  )
}

export default SearchBoxSpace