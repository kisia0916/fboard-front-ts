import React from 'react'
import "./ThreadMain.css"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThreadTagMain from './ThreadTag/ThreadTagMain';
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
          <span className='ThreadCreateUserName'>fumi</span>
          <div className='ThreadMainLike'>
              <FavoriteIcon className='ThreadMainLikeIcon' style={{fontSize:"140%"}}/>
              <span className='ThreadMainLikeNum'>12</span>
          </div>
          <div className='ThreadMainMess'>
              <ChatBubbleIcon className='ThreadMainMessIcon' style={{fontSize:"140%"}}/>
              <span className='ThreadMainMessNum'>31</span>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreadMain