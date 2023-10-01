import React from 'react'
import "./ThreadTagMain.css"
import TagIcon from '@mui/icons-material/Tag';
function ThreadTagMain() {
  return (
    <div className='ThreadTagMain'>
        <TagIcon style={{fontSize:"110%"}} className='ThreadMainTagIcon'/>
        <span className='ThreadMainTagText'>プログラミング</span>
    </div>
  )
}

export default ThreadTagMain