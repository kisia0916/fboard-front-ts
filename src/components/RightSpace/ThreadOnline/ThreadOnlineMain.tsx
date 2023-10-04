import React from 'react'
import "./ThreadOnlineMain.css"
import PersonIcon from '@mui/icons-material/Person';
import ThreadOnlineUserMain from './ThreadOnlineUser/ThreadOnlineUserMain';
function ThreadOnlineMain() {
  return (
    <div className='ThreadOnlineSpace'>
        <div className='ThreadOnlineTitle'>
            <PersonIcon className='ThreadOnlineIcon'/>
            <span className='ThreadOnlineText'>OnlineUser - 10</span>
        </div>
        <div className='ThreadOnlineMainSpace'>
            <ThreadOnlineUserMain userName='fumi'/>
            <ThreadOnlineUserMain userName='kisia0916'/>
            <ThreadOnlineUserMain userName='あどみん'/>
            <ThreadOnlineUserMain userName='testUser'/>
            <ThreadOnlineUserMain userName='エンジニアマン'/>
            <ThreadOnlineUserMain userName='Googler' bottomFlg={true}/>


        </div>
        <div style={{height:"7px"}}></div>
    </div>
  )
}

export default ThreadOnlineMain