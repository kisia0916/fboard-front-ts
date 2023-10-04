import React from 'react'
import "./OnlineListSpace.css"
import PersonIcon from '@mui/icons-material/Person';
import OnLineUser from './OnlineListUser/OnlineUser';
function OnlineListSpace() {
  return (
        <div className='OnlineListSpace'>
        <div className='OnlineListTitle'>
            <PersonIcon className='OnlineListIcon'/>
            <span className='OnlineListText'>Online Friends</span>
        </div>
        <div className='OnlineList'>
            <OnLineUser userName='fumi'/>
            <OnLineUser userName='kisia0916'/>
            <OnLineUser userName='c++絶殺'/>
            <OnLineUser userName='いけんと'/>
        </div>
    </div>
  )
}

export default OnlineListSpace