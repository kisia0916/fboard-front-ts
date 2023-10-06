import React from 'react'
import "./ThreadMain.css"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThreadTagMain from './ThreadTag/ThreadTagMain';
import PersonIcon from '@mui/icons-material/Person';
function ThreadMain(props:{topFlg?:boolean,profileFlg?:boolean}) {
  let radStyle:string = ""
  let leftSpace:string = ""
  let fontSize:string = ""
  let fontTop:string = ""

  if(props.topFlg){
    radStyle = "10px 10px 0 0"
  }
  if(props.profileFlg){
    leftSpace = "36px"
    fontSize = "153%"
    fontTop = "17px"
  }
  return (
    <div className='ThreadMain' style={{borderRadius:radStyle}}>
      <div className='ThreadMainLeft' style={{marginLeft:leftSpace}}>
          <img src='/photos/unnamed.jpg'  alt='logo' className='ThreadTitleIcon'/>
      </div>
      <div className='ThreadMainRight'>
        <div className='ThreadRightTop'>
          <span className='ThreadMainTitleText' style={{fontSize:fontSize,marginTop:fontTop}}>fboardスレッドUIテスト</span>
          <div className='ThreadMainTagList'>
            <ThreadTagMain/>
          </div>
        </div>
        <div className='ThreadMainRightBottom'>
          <img src='/photos/zbnU2dcD_400x400.jpg'  alt='logo' className='ThreadCreateUserIcon'/>
          <span className='ThreadCreateUserName'>fumi</span>
          <span className='ThreadCreateDataText'> - 2023/10/2</span>
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