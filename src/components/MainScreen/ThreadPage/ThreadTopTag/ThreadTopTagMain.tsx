import React from 'react'
import "./ThreadTopTagMain.css"
import TagIcon from '@mui/icons-material/Tag';

function ThreadTopTagMain() {
  console.log("タグが再描画されました")
  return (
    <div className='ThreadTopTagMain'>
        <TagIcon style={{fontSize:"118%"}} className='ThreadTopTagIcon'/>
        <span className='ThreadTopTagTitle'>プログラミング</span>
    </div>
  )
}

export default ThreadTopTagMain