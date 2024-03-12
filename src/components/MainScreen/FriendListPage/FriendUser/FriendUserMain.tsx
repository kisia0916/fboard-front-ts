import React from 'react'
import "./FriendUserMain.css"
import { Link } from 'react-router-dom'

function FriendUserMain(props:{userName:string,profile:string,status:string}) {
  return (
    <Link to={`/profile/${props.userName}`}>
        <div className='friendListUser'>
            <div className='friendUserListTop'>
                <div className='friendUserListTopWarpp'>
                    <div className='friendUserListTopLeft'>
                        <img src='/photos/zbnU2dcD_400x400.jpg' className='friendListUserIcon'/>
                        <div className='friendListUserInfo'>
                            <span className='friendListUserName'>{props.userName}</span>
                            <div style={{display:"flex"}}>
                                <div style={{width:"12px", height:"12px" ,backgroundColor:"#edff49", marginTop:"3px" , borderRadius:"50px",marginLeft:"11px"}}></div>
                                <span className='friendListUserStatus'>{props.status}</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='friendUserListTopRight'>
                    <span className='friendUserListTopRightTitle'>Delete Friend</span>
                </div>
            </div>
            <div className='friendUserListMain'>
                <span className='friendListMainProfile'>{props.profile}</span>
            </div>
        </div>
    </Link>
  )
}

export default FriendUserMain