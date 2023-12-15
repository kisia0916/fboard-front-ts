import React from 'react'
import "./MkPostWindowThreadTagMain.css"
import TagIcon from '@mui/icons-material/Tag';
function MkPostWindowThreadTagMain(props:{title:string}) {
  return (
    <div className='MkPostWindowThreadTagMain'>
        <TagIcon style={{fontSize:"120%"}} className='MkPostWindowThreadTagMainIcon'/>
        <span className='MkPostWindowThreadTagMainText'>{props.title}</span>
    </div>
  )
}

export default MkPostWindowThreadTagMain