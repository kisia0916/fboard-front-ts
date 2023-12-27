import React, { useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import sendMess from '../logi/sendMess'
import axios from 'axios';

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
function SendBox(props:{ariaHight:number,ariaWarpp:number,boxHight:number,setAriaHight:any,setAriaWarpp:any,setBoxHight:any,selectFile:any,setSelectFile:any,changeTrueFalseBaner:any}) {
  const [nowTextValue,setTextValue] = useState<any>("")
  const [latestPost,setLatestPost] = useState<ThreadPostModule>()

  const nowPushKey = useRef<"Shift"|"">()
  const [cookies,setCookie] = useCookies()
  const minHight:number = 30
  const MainthreadId = useParams().id
  const maxHight:number = 150
  const upEnter = (e:any)=>{
    if(e.key === "Shift"){
      console.log("up")
      nowPushKey.current = ""
      // nowPushKey = ""
    }
  }
  const pushEnter = (e:any)=>{
    console.log(nowPushKey)
    if(e.key === "Enter" && nowPushKey.current === "Shift"){
      if(maxHight>=props.ariaHight+30){
        props.setAriaHight(props.ariaHight+30)
        props.setAriaWarpp(props.ariaWarpp+30)
        props.setBoxHight(props.boxHight+30)
      }
    }else if(e.key === "Backspace"){
      console.log(nowTextValue)
      const lines = nowTextValue.split('\n');
      const currentLine = nowTextValue.substr(0, e.target.selectionStart).split('\n').length;
      if(minHight<=props.ariaHight-30 && lines[currentLine - 1].trim() === ''){
          props.setAriaHight(props.ariaHight-30)
          props.setAriaWarpp(props.ariaWarpp-30)
          props.setBoxHight(props.boxHight-30)
      }
    }else if(e.key === "Shift"){
      console.log("すべての原因")
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
        // setTextValue("")
        props.setAriaHight(30)
        props.setAriaWarpp(80)
        props.setBoxHight(52)
        const userId:string = cookies.userId
        const mess:string = sendText2
        const pass:string = cookies.pass as string
        const threadId:any = MainthreadId as string
        console.log(userId,mess,pass,threadId)
        if(props.selectFile !== null){
          imgUploadFun(userId,mess,pass,threadId)
          props.changeTrueFalseBaner()
          // if(postImg !== "error"){
          //   console.log(postImg)
          //   sendMess(mess,userId,pass,threadId,setLatestPost)
          // }
        }else{
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
          // sendMess(mess,userId,pass,threadId,setLatestPost,"")
        }
      }
    }
  }
  const imgUploadFun = (userId:string,mess:string,pass:string,threadId:string)=>{
    const formData = new FormData()
    formData.append("postimg",props.selectFile)
    axios.post("http://localhost:5000/threadpost/data/uploadpostimg",formData).then((res)=>{
      console.log(res)
      // sendMess(mess,userId,pass,threadId,setLatestPost,res.data)
      props.setSelectFile(null)

    }).catch((e)=>{
      console.log(e)
      
    })
  }
  return (
    <>
    <textarea  className='ThreadPageSendTextAria' placeholder='Send mess' onChange={(e)=>setTextValue(e.target.value)} style={{height:`${props.ariaHight}px`}} onKeyDown={pushEnter} onKeyUp={upEnter}/>
    </>
  )
}

export default SendBox