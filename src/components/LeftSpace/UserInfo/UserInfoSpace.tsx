import React from 'react'
import "./UserInfoSpace.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function UserInfoSpace(props:{userName:string}) {
  return (
    <div className='UserInfoMain'>
        <div style={{display:"flex"}}>
                <img src="/photos/zbnU2dcD_400x400.jpg" className='UserInfoMainIcon' alt=''/>
                <div style={{marginTop:"2px",marginLeft:"6px"}}>
                    <span className='UserInfoText'>{props.userName}</span>
                    <div className='OnlineState'>
                        <div className='OnlineIcon'></div>
                        <span className='OnlineText'>オンライン</span>
                    </div>
                </div>
        </div>
            <MoreHorizIcon className="LeftBarMoreIcon"/>
    </div>
  )
}

export default UserInfoSpace