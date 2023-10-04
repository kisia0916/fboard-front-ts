import React from 'react'
import "./RightBar.css"
import TagRankSpace from './TagRanks/TagRankSpace'
import OnlineListSpace from './OnlineList/OnlineListSpace'
import SearchBoxSpace from './SearchBox/SearchBoxSpace'
import ThreadOnlineMain from './ThreadOnline/ThreadOnlineMain'
function RightBar() {
  return (
    <div className='RightBarMain'>
      <SearchBoxSpace/>
      <ThreadOnlineMain/>

      {/* <TagRankSpace/>
      <OnlineListSpace/> */}
    </div>
  )
}

export default RightBar