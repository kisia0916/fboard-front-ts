import React from 'react'
import "./RightBar.css"
import TagRankSpace from './TagRanks/TagRankSpace'
import OnlineListSpace from './OnlineList/OnlineListSpace'
import SearchBoxSpace from './SearchBox/SearchBoxSpace'
function RightBar() {
  return (
    <div className='RightBarMain'>
      <SearchBoxSpace/>
      <TagRankSpace/>
      <OnlineListSpace/>
    </div>
  )
}

export default RightBar