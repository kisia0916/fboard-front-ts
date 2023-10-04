import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import "./ThreadOnlineUserMain.css"
function ThreadOnlineUserMain(props:{userName:string,bottomFlg?:boolean}) {
    let bottomStyle:string = ""/*"solid 1px #4e5363"*/
    if(props.bottomFlg){
        bottomStyle = ""
    }
  return (
    <div className='ThreadOnlineUserMain' style={{borderBottom:bottomStyle}}>
        <div className='ThreadOnlineUserMainWarpp'>
            <img src="/photos/zbnU2dcD_400x400.jpg" className='ThreadOnlineUserIcon' alt=''/>
            <span className='ThreadOnlineUserName'>{props.userName}</span>
        </div>
        {/* <AddIcon className='ThreadOnlineUserAddIcon' style={{fontSize:"165%"}}/> */}
    </div>
  )
}

export default ThreadOnlineUserMain