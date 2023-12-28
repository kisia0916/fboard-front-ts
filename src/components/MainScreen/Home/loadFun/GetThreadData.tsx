import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import ThreadMain from '../../../Thread/ThreadMain'
import { threadId } from 'worker_threads'

interface getThreadInterface{
  permissionUser: string,
  _id: string,
  title: string,
  userId: string,
  userName: string,
  theradId: string,
  messNum: number,
  state: string,
  postId: string,
  createdAt: string,
  updatedAt: string,
  threadPhoto:string,
  tags:string[]
  __v: number,
  likeNum: number,
  joinNum:number
}

interface joinCheckFlg{
  threadId:string,
  flg:boolean
}
function GetThreadData(props:{threadList:getThreadInterface[]/*pageNum:number,loadDone:any,setLoadStart:any*/,checkJoinedList:any}) {
  const [threadList,setThreadList] = useState<getThreadInterface[]>([])
  // useEffect(()=>{
  //   axios.post("http://localhost:5000/thread/data/getthreadtimeline",{page:0}).then((res:AxiosResponse<getThreadInterface[]>)=>{
  //       const getList:getThreadInterface[] = res.data.map((i)=>{
  //         return i
  //       })
  //       setThreadList(getList)
  //       props.loadDone(true)
  //       props.setLoadStart(false)
  //   })
  // },[])
  console.log(props.checkJoinedList)
  console.log(props.threadList)
  return (
    <div>
      {
        props.threadList.map((i,index)=>{
          
          const threadFlg:number = props.checkJoinedList.findIndex((item:any)=>item.threadId === i.theradId)
          console.log(props.checkJoinedList[threadFlg])
          console.log(threadFlg)
          console.log(props.checkJoinedList)
          let resultFlg:boolean = true
          if(threadFlg === -1){
            resultFlg = false
          }else if(!props.checkJoinedList[threadFlg].flg){
            resultFlg = false
          }
          return <ThreadMain threadTitle={i.title} threadId={i.theradId} joinNum={i.joinNum} userNum={30} postNum={i.messNum} createUserName={i.userName} createdDate={i.createdAt} tagList={i.tags} titleIcon={i.threadPhoto} userIcon='' isJoined={resultFlg}/>
        })
      }
    </div>
  )
}

export default GetThreadData