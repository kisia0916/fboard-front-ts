import React from 'react'
import "./ThreadPageMain.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ThreadTopTagMain from './ThreadTopTag/ThreadTopTagMain';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ImageIcon from '@mui/icons-material/Image';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import ThreadUserPostMain from './ThreadUserPost/ThreadUserPostMain';
function ThreadPageMain() {
  return (
    <div className='MainScreen'>
    <div className='MainScreenTop'>
      <div className='MainScreenTopWarpp'>
        <div className='MainScreenTopTexts'>
          <ArrowBackIosIcon className='ThreadPageMainBack' style={{fontSize:"145%"}}/>
          <span className='ThreadPageMainTitle'>fboardUIテスト</span>
        </div>
        <div style={{display:"flex"}}>
          <div style={{display:"flex"}}>
            <ThreadTopTagMain/>
          </div>
          <div style={{width:"12px"}}></div>
          </div>
        </div>
        <div className='MainScreenTopLeft'>
            <CallIcon className='ThreadPageTopRightCallIcon'/>
            <ChatBubbleIcon className='ThreadPageTopRightMessIcon'/>
            <span className='ThreadPageTopRightMessText'>12</span>
        </div>
    </div>
    <div className='ThreadPageMessSpace'>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>
        <ThreadUserPostMain/>

    </div>
    <div className='ThreadPageSendSpace'>
      <div className='ThreadPageSendBox'>
        <div style={{width:"80px"}}>
          <ImageIcon className='ThreadPageSendBoxImgIcon' style={{fontSize:"170%"}}/>
        </div>
        <div className='ThreadPageSendTextBox'>
          <span className='ThreadPageSendTextBoxHintText'>Send Message</span>
        </div>
        <div className='ThreadPageSendButton'>
            <SendIcon className='ThreadPageSendButtonIcon'/>
        </div>
      </div>

    </div>
  </div>
  )
}

export default ThreadPageMain