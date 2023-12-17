import React, { useEffect, useRef, useState } from 'react'
import "./ThreadPageMain.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

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
import axios from 'axios';
function ThreadPageMain() {
  interface ThreadPostModule{
    threadId:String;
    userId:String;
    userIcon:String;
    postImg:String;
    reply:String;
    mess:String;
    threadPostId:String;
    userName:String;
}
  const threadListScroll = useRef<any>(null)
  const [loadDone,setLoadDone] = useState<boolean>(false)
  const [ariaHight,setAriaHight] = useState(30)
  const [ariaWarpp,setAriaWarpp] = useState(80)
  const [boxHight,setBoxHight] = useState(52)
  const [nowTextValue,setTextValue] = useState("")
  const [nowPushKey,setPushKey] = useState<"Shift"|"">("")
  const [selectFile,setSelectFile] = useState<any>(null)
  const [cookies,setCookie] = useCookies()
  const [latestPost,setLatestPost] = useState<ThreadPostModule>()
  const minHight:number = 30
  const maxHight:number = 150
  const MainthreadId = useParams().id
  useEffect(()=>{
    const scrollContainer = threadListScroll.current;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  },[loadDone])
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
        //改行のみの場合をはじく
      const nowText:string[] = e.target.value.split("\n")
      let sendText:string[] = []
      // nowText.forEach((i,index)=>{
      //   if(i !== ''){
      //     sendText.push(i)
      //   }
      // })
      let brFlg:boolean = false
      for (let i:number = nowText.length-1;i>=0;i--){
        if(nowText[i] !== ''){
          brFlg = true
          sendText.push(nowText[i])
        }else if(brFlg){
          sendText.push(nowText[i])
        }
      }
      const sendText2 = sendText.reverse().join("\n")
      console.log(nowText)
      if (testvalue.length>0){
        setTextValue("")
        setAriaHight(30)
        setAriaWarpp(80)
        setBoxHight(52)
        const userId:string = cookies.userId
        const mess:string = sendText2
        const pass:string = cookies.pass as string
        const threadId:any = MainthreadId as string
        console.log(userId,mess,pass,threadId)
        if(selectFile !== null){
          imgUploadFun(userId,mess,pass,threadId)
          changeTrueFalseBaner()
          // if(postImg !== "error"){
          //   console.log(postImg)
          //   sendMess(mess,userId,pass,threadId,setLatestPost)
          // }
        }else{
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
          sendMess(mess,userId,pass,threadId,setLatestPost,"")
        }
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
  //画像処理関連
  const selectFileRef:any = useRef(null)
  const [fileInfobar,setFileInfoBar] = useState(false)
  // const [fileNameBanerFlg,setFileNameBanerFlg] = useState<boolean>(false)
  const changeFile = (e:any)=>{
    setSelectFile(e.target.files[0])
    if(e.target.files[0]){
      changeTrueFileBaner()
    }
  }
  const imgUploadFun = (userId:string,mess:string,pass:string,threadId:string)=>{
    const formData = new FormData()
    formData.append("postimg",selectFile)
    axios.post("http://localhost:5000/threadpost/data/uploadpostimg",formData).then((res)=>{
      console.log(res)
      sendMess(mess,userId,pass,threadId,setLatestPost,res.data)
      setSelectFile(null)

    }).catch((e)=>{
      console.log(e)
      
    })
  }


  const openFileSelecter = ()=>{
    if(selectFileRef){
      selectFileRef.current.click()
    }
  }
  const changeTrueFileBaner = ()=>{
    console.log("test22")
    setFileInfoBar(true)
    setAriaWarpp(ariaWarpp+25)
  }
  const changeTrueFalseBaner = ()=>{
    setFileInfoBar(false)
    setSelectFile(null)
    setAriaWarpp(ariaWarpp-25)
  }
  return (
    <div className='MainScreen'>
      {/* <input type='file' onChange={changeFile}></input> */}
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
    <div className='ThreadPageMessSpace' ref={threadListScroll} style={{height: `calc(100% - 48px - ${ariaWarpp}px)`}}>
        {loadDone?<></>:<LoadAni size='30px'/>}
        <LoadThreadPost loadDone={setLoadDone}/>
    </div>

    <div className='ThreadPageSendSpace'>
      {fileInfobar?<div className='ThreadPageSendBoxFileNameWarpp'>
        <span className='ThreadPageSendBoxFileName'>{selectFile.name}</span>
        <CloseIcon className='ThreadPageSendBoxFileCloseIcon' style={{fontSize:"140%"}} onClick={changeTrueFalseBaner}/>

        </div>:<></>}
      <div className='ThreadPageSendBox' style={{height:`${boxHight}px`}}>
      
          <div className='ThreadPageSendBoxImgIconButton' style={{width:"80px",display:"flex"}}>
              <input type='file' ref={selectFileRef} onChange={changeFile} style={{display:"none"}}/>
              <ImageIcon className='ThreadPageSendBoxImgIcon' onClick={openFileSelecter} style={{fontSize:"170%",margin:"auto"}}/>
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