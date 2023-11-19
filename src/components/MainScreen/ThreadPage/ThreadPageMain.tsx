import React, { useState } from 'react'
import "./ThreadPageMain.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ThreadTopTagMain from './ThreadTopTag/ThreadTopTagMain';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ImageIcon from '@mui/icons-material/Image';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import LoadThreadPost from './LoadThreadPost/LoadThreadPost';
import LoadAni from '../../amimations/Load/LoadAni';
import sendMess from './logi/sendMess';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
function ThreadPageMain() {
  const [loadDone,setLoadDone] = useState<boolean>(false)
  const [ariaHight,setAriaHight] = useState(30)
  const [ariaWarpp,setAriaWarpp] = useState(80)
  const [boxHight,setBoxHight] = useState(52)
  const [nowTextValue,setTextValue] = useState("")
  const [nowPushKey,setPushKey] = useState<"Shift"|"">("")
  const [cookies,setCookie] = useCookies()
  const minHight:number = 30
  const maxHight:number = 150
  const MainthreadId = useParams().id
  const pushEnter = (e:any)=>{
    console.log(nowPushKey)
    if(e.key === "Enter" && nowPushKey === "Shift"){
      if(maxHight>=ariaHight+30){
        setAriaHight(ariaHight+30)
        setAriaWarpp(ariaWarpp+30)
        setBoxHight(boxHight+30)
      }
    }else if(e.key === "Backspace"){
      console.log(nowTextValue)
      const lines = nowTextValue.split('\n');
      const currentLine = nowTextValue.substr(0, e.target.selectionStart).split('\n').length;
      if(minHight<=ariaHight-30 && lines[currentLine - 1].trim() === ''){
          setAriaHight(ariaHight-30)
          setAriaWarpp(ariaWarpp-30)
          setBoxHight(boxHight-30)
      }
    }else if(e.key === "Shift"){
      setPushKey("Shift")
    }else if(e.key === "Enter"){
      e.preventDefault()
      let testvalue:string = e.target.value.replace(/[\r\n]+/g, '')
      testvalue = testvalue.replace(/\s/g, '')
      if (testvalue.length>0){
        setTextValue("")
        setAriaHight(30)
        setAriaWarpp(80)
        setBoxHight(52)
        const userId:string = cookies.userId
        const mess:string = e.target.value
        const pass:string = cookies.pass as string
        const threadId:any = MainthreadId as string
        console.log(userId,mess,pass,threadId)
        sendMess(mess,userId,pass,threadId)
      }
    }
  }
  const upEnter = (e:any)=>{
    if(e.key === "Shift"){
      console.log("up")
      setPushKey("")
      // nowPushKey = ""
    }
  }
  const chengeTextValue = (e:any)=>{
    setTextValue(e.target.value)
  }
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
    <div className='ThreadPageMessSpace'  style={{height: `calc(100% - 48px - ${ariaWarpp}px)`}}>
        {loadDone?<></>:<LoadAni/>}
        <LoadThreadPost loadDone={setLoadDone}/>
    </div>
    <div className='ThreadPageSendSpace'>
      <div className='ThreadPageSendBox' style={{height:`${boxHight}px`}}>
        <div style={{width:"80px",display:"flex"}}>
          <ImageIcon className='ThreadPageSendBoxImgIcon' style={{fontSize:"170%",margin:"auto"}}/>
        </div>
        <div className='ThreadPageSendTextBox' >
          <textarea  className='ThreadPageSendTextAria' value={nowTextValue} placeholder='Send mess' onChange={chengeTextValue} style={{height:`${ariaHight}px`}} onKeyDown={pushEnter} onKeyUp={upEnter}/>
          {/* <span className='ThreadPageSendTextBoxHintText'>Send Message</span> */}
        </div>
        <div style={{display:"flex"}}>
          <div className='ThreadPageSendButton'>
              <SendIcon className='ThreadPageSendButtonIcon'/>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default ThreadPageMain