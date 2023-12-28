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
import RepryBar from './RepryPost/RepryBar/RepryBar';
function ThreadPageMain() {
  console.log("再描画されました２")
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
  const textValueRef = useRef<any>("")
  const nowPushKey = useRef<"Shift"|"">()
  const [selectFile,setSelectFile] = useState<any>(null)
  const [cookies,setCookie] = useCookies()
  const [latestPost,setLatestPost] = useState<ThreadPostModule>()
  const [nowReply,setNowReply] = useState<any>({postId:"",userName:""})
  const minHight:number = 30
  const maxHight:number = 150
  const MainthreadId = useParams().id
  const [doneFirstScroll,setDoneFirstScroll] = useState<boolean>(false)
  useEffect(()=>{
    const scrollContainer = threadListScroll.current;
    console.log(threadListScroll.current.scrollHeight)
    console.log(threadListScroll.current.clientHeight)
    // if(scrollContainer.scrollHeight !== scrollContainer.clientHeight){
    if(loadDone){
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
      console.log(threadListScroll.current.scrollTop+threadListScroll.current.clientHeight)
      console.log(threadListScroll.current.scrollHeight)
      setDoneFirstScroll(true)
    }
    console.log("ふくふく")
  },[loadDone])
  const pushEnter = (e:any)=>{
    console.log(nowPushKey)
    if(e.key === "Enter" && nowPushKey.current === "Shift"){
        setReplyCounter((replyCounter)=>replyCounter+1)
      if(maxHight>=ariaHight+30){
        setAriaHight(ariaHight+30)
        setAriaWarpp(ariaWarpp+30)
        setBoxHight(boxHight+30)
      }
    }else if(e.key === "Backspace"){
      console.log(nowTextValue)
      const lines = textValueRef.current.value.split('\n');
      const currentLine = textValueRef.current.value.substr(0, e.target.selectionStart).split('\n').length;
      if(minHight<=ariaHight-30 && lines[currentLine - 1].trim() === ''){
          setAriaHight(ariaHight-30)
          setAriaWarpp(ariaWarpp-30)
          setBoxHight(boxHight-30)
      }
    }else if(e.key === "Shift"){
      // setPushKey("Shift")
      nowPushKey.current = "Shift"
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
        textValueRef.current.value = ""
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
        }else{
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
          sendMess(mess,userId,pass,threadId,setLatestPost,"",nowReply.postId)
          closeReplyBar()
        }
      }
    }
  }
  const upEnter = (e:any)=>{
    if(e.key === "Shift"){
      console.log("up")
      nowPushKey.current = ""
      // nowPushKey = ""
    }
  }
  //画像処理関連
  const selectFileRef = useRef<any>(null)
  const [fileInfobar,setFileInfoBar] = useState(false)
  const [replybar,setReplyBar] = useState(false)
  const [replyCounter,setReplyCounter] = useState<number>(0)


  // const [fileNameBanerFlg,setFileNameBanerFlg] = useState<boolean>(false)
  const changeFile = (e:any)=>{
    console.log("change")
    setSelectFile(e.target.files[0])
    if(e.target.files[0]){
      console.log("動いてます")
      changeTrueFileBaner()
    }
  }
  const imgUploadFun = (userId:string,mess:string,pass:string,threadId:string)=>{
    const formData = new FormData()
    formData.append("postimg",selectFile)
    axios.post("http://localhost:5000/threadpost/data/uploadpostimg",formData).then((res)=>{
      console.log(res)
      sendMess(mess,userId,pass,threadId,setLatestPost,res.data,nowReply.postId)
      setSelectFile(null)
      closeReplyBar()
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
    console.log("debug")
    setFileInfoBar(false)
    setSelectFile(null)
    console.log(selectFileRef.current)
    setAriaWarpp(ariaWarpp-25)
  }
  const changeTrueReplyBaner = ()=>{
    console.log("test22")
    setReplyBar(true)
    setAriaWarpp(ariaWarpp+25)

  }
  const changeTrueFalseReplyBaner = ()=>{

  }
  const closeReplyBar = ()=>{
    setNowReply({postId:"",userName:""})
    if(replybar){
      setAriaWarpp(ariaWarpp-25)
    }
    setReplyBar(false)
    
    console.log("error")
  }
  const pushReplyButton = ()=>{
    if(replybar){
      changeTrueFalseReplyBaner()

    }else{
      changeTrueReplyBaner()
    }
  }
  const [page,setPage] = useState<number>(0)
  const [postList,setPostList] = useState<any>([])
  const [postRepList,setPostRepList] = useState<any>([])
  const [nowLoading,setNowLoading] = useState<boolean>(false)
  const [rastScroll,setRastScroll] = useState<number>(0)
  const [nextLoad,setNextLoad] = useState<boolean>(true)
  const scrollFunction = ()=>{
    if(doneFirstScroll){
      if(threadListScroll.current.scrollTop/*+ threadListScroll.current.clientHeight*/<10/*(threadListScroll.current.scrollHeight/10)*6*/  && !nowLoading && nextLoad){
        setNowLoading(true)
        setRastScroll(threadListScroll.current.scrollHeight-(threadListScroll.current.scrollTop-threadListScroll.current.clientHeight))
        setPage(page+1)
        
      }
    }
  }

  useEffect(()=>{
    if(nowLoading){
      threadListScroll.current.scrollTop = threadListScroll.current.scrollHeight - (rastScroll-threadListScroll.current.clientHeight)
    }
    setNowLoading(false)

  },[postList])
  useEffect(()=>{
    console.log("kokoeo")
    console.log(postRepList)
  },[postRepList])
  
  const replyCountUpFun = ()=>{
    setReplyCounter((replyCounter)=>replyCounter+1)
    console.log(replyCounter)
  }
  useEffect(()=>{
    console.log(replyCounter)
    
  },[replyCounter])

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
    <div style={{width:"100%",height: `calc(100% - 48px - ${ariaWarpp}px)`,position:"relative"}}>
      {loadDone && doneFirstScroll?<></>:<div style={{height:"100%", width:"100%",position:"absolute",backgroundColor:"#282a36"}}></div>}
      <div className='ThreadPageMessSpace' ref={threadListScroll} onScroll={scrollFunction} style={{height:"100%"}}>
          {loadDone?<></>:<LoadAni size='30px' top='30px'/>}
          {nowLoading?<LoadAni size='30px' top='30px'/>:<></>}
          <LoadThreadPost loadDone={setLoadDone} loadDoneData ={loadDone} page={page} setPage={setPage} scrollList={postList} setScrollList={setPostList} nextLoad={nextLoad} setnextLoad={setNextLoad} repList={postRepList} setRepList={setPostRepList} setReply={setNowReply} changeReply={pushReplyButton} replyCounterFun={replyCountUpFun} replyCounter={replyCounter}/>
      </div>
      </div>
    <div className='ThreadPageSendSpace'>
      {fileInfobar?<div className='ThreadPageSendBoxFileNameWarpp'>
        <span className='ThreadPageSendBoxFileName'>{selectFile.name}</span>
        <CloseIcon className='ThreadPageSendBoxFileCloseIcon' style={{fontSize:"140%"}} onClick={changeTrueFalseBaner}/>

        </div>:<></>}
      {replybar?<RepryBar isTopFlg={fileInfobar} userName={nowReply.userName} closeReplyBar={closeReplyBar}/>:<></>}
      <div className='ThreadPageSendBox' style={{height:`${boxHight}px`}}>
      
          <div className='ThreadPageSendBoxImgIconButton' style={{width:"80px",display:"flex"}}>
              <input type='file' ref={selectFileRef} onChange={changeFile} style={{display:"none"}} key={selectFileRef.current ? selectFileRef.current.value : null}/>
              <ImageIcon className='ThreadPageSendBoxImgIcon' onClick={openFileSelecter} style={{fontSize:"170%",margin:"auto"}}/
              >
          </div>
        <div className='ThreadPageSendTextBox' >
          {/* <SendBox nowTextValue={nowTextValue} changeTextValue={chengeTextValue} ariaHight={ariaHight} pushEnter={pushEnter} upEnter={upEnter}/> */}
          <textarea  className='ThreadPageSendTextAria' placeholder='Send mess' /*onChange={chengeTextValue}*/ ref={textValueRef} style={{height:`${ariaHight}px`}} onKeyDown={pushEnter} onKeyUp={upEnter}/>
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