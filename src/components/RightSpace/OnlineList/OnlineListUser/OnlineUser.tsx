import React from 'react'
import "./OnlineUser.css"
function OnLineUser(props:{userName:string,status:string}) {

  return (
    <div className='OnlineUserMain'>
        <img src="/photos/zbnU2dcD_400x400.jpg" className='OnlineUserListIcon' alt=''/>
        <div className='OnlineListUserWarpp'>
            <span className='OnlineListUserName'>{props.userName}</span><br/>
            <span className='OnlineListUserState'>{props.status}</span>
        </div>
    </div>
  )
}

export default OnLineUser