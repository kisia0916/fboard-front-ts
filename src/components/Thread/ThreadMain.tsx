import React from 'react'
import "./ThreadMain.css"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThreadTagMain from './ThreadTag/ThreadTagMain';
import PersonIcon from '@mui/icons-material/Person';
function ThreadMain(props:{topFlg?:boolean}) {
  let radStyle:string = ""
  if(props.topFlg){
    radStyle = "10px 10px 0 0"
  }
  return (
    <div className='ThreadMain' style={{borderRadius:radStyle}}>
      <div className='ThreadMainLeft'>
          <img src='/photos/unnamed.jpg'  alt='logo' className='ThreadTitleIcon'/>
      </div>
      <div className='ThreadMainRight'>
        <div className='ThreadRightTop'>
          <span className='ThreadMainTitleText'>fboardスレッドUIテスト</span>
          <div className='ThreadMainTagList'>
            <ThreadTagMain/>
          </div>
        </div>
        <div className='ThreadMainRightBottom'>
          <img src='/photos/zbnU2dcD_400x400.jpg'  alt='logo' className='ThreadCreateUserIcon'/>
          <span className='ThreadCreateUserName'>fumi - 2023/10/2</span>
          <div className='ThreadMainLike'>
              <FavoriteIcon className='ThreadMainLikeIcon' style={{fontSize:"130%"}}/>
              <span className='ThreadMainLikeNum'>12</span>
          </div>
          <div className='ThreadMainMess'>
              <ChatBubbleIcon className='ThreadMainMessIcon' style={{fontSize:"140%"}}/>
              <span className='ThreadMainMessNum'>31</span>
              
          </div>
          <div className='ThreadMainPerson'>
              <PersonIcon className='ThreadMainPersonIcon' style={{fontSize:"160%"}}/>
              <span className='ThreadMainPersonText'>10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreadMain