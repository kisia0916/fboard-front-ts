import React from 'react'
import "./ThreadTagMain.css"
import TagIcon from '@mui/icons-material/Tag';
import { Link } from 'react-router-dom';
function ThreadTagMain(props:{title:string}) {
  return (
    <Link to="/profile">
      <div className='ThreadTagMain'>
          <TagIcon style={{fontSize:"110%"}} className='ThreadMainTagIcon'/>
          <span className='ThreadMainTagText'>{props.title}</span>
      </div>
    </Link>
  )
}

export default ThreadTagMain