import React, { useDeferredValue, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ThreadUserPostMain from '../ThreadUserPost/ThreadUserPostMain';

interface threadPostType{
  createdAt: String;
  mess: String;
  userName:String;
  postImg: String;
  reply: String;
  threadPostId: String;
  updatedAt: String;
  userIcon: String;
  userId: String;
  isFirst:boolean;
  __v: Number
  _id: String;
}
let replyCounter2:number = 0

function LoadThreadPost(props:{loadDone:any,loadDoneData:boolean,scrollList:any,timeStamp:string,setScrollList:React.Dispatch<React.SetStateAction<any>>,setnextLoad:React.Dispatch<React.SetStateAction<any>>,nextLoad:boolean,repList:any,setRepList:React.Dispatch<React.SetStateAction<any>>,setReply:React.Dispatch<React.SetStateAction<any>>,changeReply:any,replyCounterFun:any,replyCounter:number,doneFirstScroll:boolean}) {
  console.log("再描画されました")
  const thradId = useParams().id
  const [postList,setPostList] = useState<any>(props.scrollList)
  const [replyData,setReplyData] = useState<any>(props.repList)
  console.log(props.repList)
  const [postCounter,setPostCounter] = useState<number>(0)
  const getPostCounterRef = useRef<number>(0)
  const [loadReplyCounter,setLoadReplyCounter] = useState<number>(0)
  const [replyCountDone,setReplyCountDone] = useState<boolean>(false)
  const [postLoadDone,setPostLoadDone] = useState<boolean>(false)

  useEffect(()=>{
    console.log("sino3")
    if(props.nextLoad){
      axios.post("http://localhost:5000/threadpost/data/getthreadpost",{
        timeStamp:props.timeStamp,
        threadId:thradId,
        threadPrivateToken:"0a5de211-065e-43d0-b1ea-10ec0f3f7f17"
      }).then((res:any)=>{
        replyCounter2 = 0
        getPostCounterRef.current = res.data.length
        console.log(res.data)

        if(res.data.length>0){
            if(res.data[res.data.length-1].isFirst){
              props.setnextLoad(false)
            }
          }
        res.data.map((i:any,index:number)=>{
          if(i.reply){
            replyCounter2 +=1
          }
          if(index === res.data.length-1){
            console.log(replyCounter2)
            setReplyCountDone(true)
          }
        })
        setPostList([...res.data.reverse(),...postList])
        // props.setScrollList([...res.data.reverse(),...postList])
        // setPostList([...postList,...res.data.reverse()])
        props.setScrollList([...postList,...res.data.reverse()])
        if(replyCounter2 === 0){
          props.loadDone(true)
        }
        setPostLoadDone(true)
      })
    }
  },[props.timeStamp])
  console.log(getPostCounterRef.current)
  useEffect(()=>{
    console.log(postCounter)
    console.log(replyData)
  },[postCounter])
  useEffect(()=>{
    if(!props.loadDoneData && props.replyCounter === replyCounter2 && postLoadDone){
      console.log("スクロールしました")
      props.loadDone(true)
    }
    console.log(props.replyCounter)
  },[props.replyCounter,postLoadDone])

  return (
    <div>
      {replyCountDone?postList.map((i:any)=>{
        console.log("bilyougasareta")
        console.log(postList)
        let postImgInfoCheck:string = ""
        if(i.postImgInfo){
          if(i.postImgInfo.height<300){
            postImgInfoCheck = `${i.postImgInfo.height}px` 
          }else{
            postImgInfoCheck = "300px"
          }
        }
        return <ThreadUserPostMain userName={i.userName} date={i.createdAt} title={i.mess} imgPath={i.postImg} icon='' reply={i.reply} postId={i.threadPostId} setReply={props.setReply} changeReply={props.changeReply} loadReply={loadReplyCounter} setLoadReply={setLoadReplyCounter} loadReplyCom ={props.replyCounterFun} firstScrollDone={props.doneFirstScroll} potoInfoImg={postImgInfoCheck}/>
      }):<></>}
    </div>
  )
}

export default LoadThreadPost